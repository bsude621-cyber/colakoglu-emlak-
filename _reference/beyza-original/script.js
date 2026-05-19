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

  if (form && formStatus) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.textContent = "Teşekkürler — mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.";
      formStatus.classList.add("is-success");
      form.reset();
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

  /* Scroll reveal */
  var revealSelector = ".section-head, .card, .listing, .split-visual, .split-content, .regions, .contact-form";
  var nodes = document.querySelectorAll(revealSelector);
  nodes.forEach(function (el) {
    el.setAttribute("data-reveal", "");
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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  nodes.forEach(function (el) {
    io.observe(el);
  });
})();
