 // Set theme before paint to avoid a flash
  (function () {
    var t = null;
    try { t = localStorage.getItem("theme"); } catch (e) {}
    if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
  })();


  (function () {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    function render() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.innerHTML = dark ? "&#9788;" : "&#9790;";
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      render();
    });
    render();
  })();
