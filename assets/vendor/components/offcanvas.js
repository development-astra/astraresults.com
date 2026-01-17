/**
 * Website Name: Astra Results, Inc.
 * Author: carvelruss.com
 * Description: Handles offcanvas menu population, mobile logo, and dynamic footer year.
 */

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
        a.href = fixEmptyLink(link.href);

        // Active link detection
        const currentPath = window.location.pathname.replace(/\/$/, ""); // remove trailing slash
        const linkPath = a.getAttribute("href").replace(window.location.origin, "").replace(/\/$/, "");
        if (linkPath === currentPath) a.classList.add("active");

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
  // Use global window.headerData from header.js
  if (typeof window.headerData !== "undefined") {
    populateOffcanvas(window.headerData);
  } else {
    console.warn("window.headerData is not defined. Offcanvas menu not populated.");
  }

});
