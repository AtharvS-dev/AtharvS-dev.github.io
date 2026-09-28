 // Set theme before paint to avoid a flash
  (function () {
    var t = null;
    try { t = localStorage.getItem("theme"); } catch (e) {}
    if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
  })();
