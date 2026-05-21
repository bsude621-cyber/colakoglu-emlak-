// Tam sayfa screenshot — Chrome DevTools Protocol (captureBeyondViewport)
// Kullanım: node shot.mjs <url> <çıktı.png>
import fs from "node:fs";

const PORT = 9222;
const url = process.argv[2];
const out = process.argv[3];

let wsUrl;
for (let i = 0; i < 40; i++) {
  try {
    const targets = await (await fetch(`http://localhost:${PORT}/json`)).json();
    const page = targets.find((t) => t.type === "page");
    if (page?.webSocketDebuggerUrl) {
      wsUrl = page.webSocketDebuggerUrl;
      break;
    }
  } catch {}
  await new Promise((r) => setTimeout(r, 300));
}
if (!wsUrl) {
  console.error("Chrome hedefi bulunamadı");
  process.exit(1);
}

const sock = new WebSocket(wsUrl);
let id = 0;
const pending = new Map();
function send(method, params = {}) {
  return new Promise((res) => {
    const i = ++id;
    pending.set(i, res);
    sock.send(JSON.stringify({ id: i, method, params }));
  });
}
sock.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result);
    pending.delete(m.id);
  }
});
await new Promise((res) => sock.addEventListener("open", res));

await send("Page.enable");
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "reduce" }],
});
const scrollY = process.argv[4] ? Number(process.argv[4]) : null;
await send("Runtime.enable");
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 7000));
let capOpts = { format: "png", captureBeyondViewport: true };
if (scrollY !== null) {
  await send("Runtime.evaluate", {
    expression: `window.scrollTo(0, ${scrollY})`,
  });
  await new Promise((r) => setTimeout(r, 2500));
  capOpts = { format: "png" };
} else {
  // tüm lazy görselleri tetikle, sonra başa dön
  await send("Runtime.evaluate", {
    expression: `(async()=>{const h=document.body.scrollHeight;for(let y=0;y<h;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,140));}window.scrollTo(0,0);})()`,
    awaitPromise: true,
  });
  await new Promise((r) => setTimeout(r, 2000));
}
const result = await send("Page.captureScreenshot", capOpts);
fs.writeFileSync(out, Buffer.from(result.data, "base64"));
console.log("kaydedildi:", out);
// Sadece kendi headless örneğini kapat — kullanıcının Chrome'una dokunma
await send("Browser.close");
process.exit(0);
