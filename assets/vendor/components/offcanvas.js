document.addEventListener("DOMContentLoaded", function () {

  // ===== HELPER: fix empty links =====
  function fixEmptyLink(href) {
    if (!href || href === "#") return "/coming-soon.html";
    return href;
  }

  // ===== OFFCANVAS LOGO & NAV POPULATION =====
  function populateOffcanvas(headerData) {
    if (!headerData) return;

    // LOGO (desktop header + offcanvas)
    const logoTargets = document.querySelectorAll(".logo-link");
    logoTargets.forEach(logo => {
      if (headerData.logo && headerData.logo.svg) logo.innerHTML = headerData.logo.svg;
      logo.href = fixEmptyLink(headerData.logo?.link);
    });

    // MOBILE NAV MENU
    const mobileNav = document.querySelector(".mobile-nav ul");
    if (mobileNav && Array.isArray(headerData.navLinks)) {
      mobileNav.innerHTML = "";
      headerData.navLinks.forEach(link => {
        const li = document.createElement("li");
        li.classList.add("nav-item");

        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.textContent = link.text;

        if (link.triggerMega) {
          // Mega menu trigger for mobile
          a.href = "javascript:void(0)";
          a.setAttribute("role", "button");

          a.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Open mega menu
            if (typeof window.openMegaMenu === "function") {
              window.openMegaMenu();
            }

            // Close offcanvas if open
            const offcanvas = document.getElementById("offcanvasRight");
            if (offcanvas && offcanvas.classList.contains("show")) {
              offcanvas.classList.remove("show");
              document.body.classList.remove("offcanvas-open");
            }
          });
        } else {
          a.href = fixEmptyLink(link.href);

          // Active link detection
          const currentPath = window.location.pathname.replace(/\/$/, "");
          const linkPath = a.getAttribute("href").replace(window.location.origin, "").replace(/\/$/, "");
          if (linkPath === currentPath) a.classList.add("active");
        }

        li.appendChild(a);
        mobileNav.appendChild(li);
      });
    }

    // FOOTER YEAR
    const footerYears = document.querySelectorAll("#footerYear");
    footerYears.forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  // ===== MAIN EXECUTION =====
  if (typeof window.headerData !== "undefined") {
    populateOffcanvas(window.headerData);
  } else {
    console.warn("window.headerData is not defined. Offcanvas menu not populated.");
  }

});