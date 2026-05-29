/* ============================================================
   stevengreen.com.au — site behaviours
   Dependency-free progressive enhancement. The page is fully
   readable without JS; this layer adds the sticky-header state,
   the Venn reveal, the dynamic year, and async form submission.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header: hairline + blur once scrolled ---------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* ---------- Venn: stroke-draw the rings, fade the core ---------- */
  var venn = document.querySelector(".venn-svg");
  if (venn) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      venn.classList.add("is-in");
    } else {
      var vo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            venn.classList.add("is-in");
            vo.disconnect();
          }
        });
      }, { threshold: 0.3 });
      vo.observe(venn);
    }
  }

  /* ---------- Reveal-on-scroll (any .js-reveal blocks) ---------- */
  var reveals = document.querySelectorAll(".js-reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in-view"); });
    } else {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            ro.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { ro.observe(el); });
    }
  }

  /* ---------- Express-interest form: async submit + status ---------- */
  var form = document.getElementById("briefForm");
  var msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Honour the honeypot — silently drop bot submissions.
      var gotcha = form.querySelector('[name="_gotcha"]');
      if (gotcha && gotcha.value) { e.preventDefault(); return; }

      if (!form.checkValidity()) return; // let native validation surface

      // Progressive enhancement: submit via fetch so the user stays on
      // the page. If fetch isn't available, fall back to a normal POST.
      if (!window.fetch) return;

      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      if (msg) { msg.dataset.state = ""; msg.textContent = "Sending…"; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (msg) {
              msg.dataset.state = "ok";
              msg.textContent = "Thanks — I’ll reply within 24 hours.";
            }
          } else {
            throw new Error("Request failed");
          }
        })
        .catch(function () {
          if (msg) {
            msg.dataset.state = "err";
            msg.textContent = "Something went wrong — email email@stevengreen.com.au directly.";
          }
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
    });
  }
})();
