document.addEventListener("DOMContentLoaded", function () {
    const megaMenu = document.getElementById("mega-menu");
    const overlay = megaMenu.querySelector(".mega-overlay");
    const closeBtn = megaMenu.querySelector(".mega-close");

    // ===== Open Mega Menu =====
    window.openMegaMenu = function () {
        megaMenu.classList.add("active");
        document.body.classList.add("mega-open");
      };

    // ===== Close Mega Menu =====
    function closeMegaMenu() {
        megaMenu.classList.remove("active");
        document.body.classList.remove("mega-open");
      }

    // Overlay click closes menu
    overlay.addEventListener("click", closeMegaMenu);

      // Close button click
    closeBtn.addEventListener("click", closeMegaMenu);

      // ESC key closes menu
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMegaMenu();
    });
});