(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var yearEl = document.querySelector("[data-year]");
  var form = document.querySelector("[data-contact-form]");
  var formStatus = document.querySelector("[data-form-status]");
  var heroRoot = document.querySelector("[data-hero-slider]");
  var slides = heroRoot ? heroRoot.querySelectorAll("[data-slide]") : [];
  var captionEl = heroRoot ? heroRoot.querySelector("[data-slider-caption]") : null;
  var dotsWrap = heroRoot ? heroRoot.querySelector("[data-slider-dots]") : null;
  var btnPrev = heroRoot ? heroRoot.querySelector("[data-slider-prev]") : null;
  var btnNext = heroRoot ? heroRoot.querySelector("[data-slider-next]") : null;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 48) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Contact form — Web3Forms async submit */
  if (form && formStatus) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var botCheck = form.querySelector('input[name="botcheck"]');
      if (botCheck && botCheck.checked) {
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Gönderiliyor...";
      }
      formStatus.classList.remove("is-success", "is-error");
      formStatus.textContent = "";

      var formData = new FormData(form);
      var payload = {};
      formData.forEach(function (value, key) {
        payload[key] = value;
      });

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok && result.data && result.data.success) {
            formStatus.textContent =
              "Teşekkürler — mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.";
            formStatus.classList.add("is-success");
            form.reset();
          } else {
            formStatus.textContent =
              "Mesaj gönderilemedi. Lütfen telefon ile iletişime geçin veya tekrar deneyin.";
            formStatus.classList.add("is-error");
          }
        })
        .catch(function () {
          formStatus.textContent =
            "Bağlantı hatası. Lütfen telefon ile iletişime geçin veya tekrar deneyin.";
          formStatus.classList.add("is-error");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  }

  /* Hero slider */
  if (heroRoot && slides.length && captionEl && dotsWrap) {
    var index = 0;
    var timer = null;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var intervalMs = reducedMotion ? 0 : 6500;

    function setCaption(text) {
      if (!captionEl) return;
      captionEl.classList.add("is-fading");
      window.setTimeout(function () {
        captionEl.textContent = text;
        captionEl.classList.remove("is-fading");
      }, 180);
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, j) {
        var on = j === index;
        slide.classList.toggle("is-active", on);
        slide.setAttribute("aria-hidden", on ? "false" : "true");
      });
      var dots = dotsWrap.querySelectorAll(".hero-slider__dot");
      dots.forEach(function (d, j) {
        d.classList.toggle("is-active", j === index);
        d.setAttribute("aria-selected", j === index ? "true" : "false");
      });
      var cap = slides[index].getAttribute("data-caption") || "";
      setCaption(cap);
    }

    slides.forEach(function (_, j) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hero-slider__dot" + (j === 0 ? " is-active" : "");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", j === 0 ? "true" : "false");
      b.setAttribute("aria-label", "Slayt " + (j + 1));
      b.addEventListener("click", function () {
        goTo(j);
        restart();
      });
      dotsWrap.appendChild(b);
    });

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    function restart() {
      if (!intervalMs) return;
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(next, intervalMs);
    }

    if (btnNext) btnNext.addEventListener("click", function () { next(); restart(); });
    if (btnPrev) btnPrev.addEventListener("click", function () { prev(); restart(); });

    heroRoot.addEventListener("mouseenter", function () {
      if (timer) window.clearInterval(timer);
    });
    heroRoot.addEventListener("mouseleave", function () {
      restart();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (timer) window.clearInterval(timer);
      } else {
        restart();
      }
    });

    restart();
  }

  /* Scroll reveal — premium motion katmanı (fade + rise, grid'lerde stagger) */
  var revealSelector = [
    ".section-head",
    ".services-head",
    ".regions-head",
    ".memberships-title",
    ".contact-intro",
    ".service-card",
    ".region-card",
    ".membership-card",
    ".process-step",
    ".faq-item",
    ".mevzuat-card",
    ".rehber-card",
    ".press-list li",
    ".contact-form",
    ".founder-frame",
    ".split-visual",
    ".split-content",
    ".tldr",
  ].join(",");
  var nodes = document.querySelectorAll(revealSelector);

  nodes.forEach(function (el) {
    el.setAttribute("data-reveal", "");
    /* Aynı tür kardeşler arasında sıraya göre kademeli gecikme (stagger) */
    var cls = el.classList[0];
    var i = 0;
    var prev = el.previousElementSibling;
    while (prev) {
      if (prev.classList && prev.classList[0] === cls) i++;
      prev = prev.previousElementSibling;
    }
    if (i > 0) {
      el.style.transitionDelay = Math.min(i, 6) * 70 + "ms";
    }
  });

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );

  nodes.forEach(function (el) {
    io.observe(el);
  });
})();
