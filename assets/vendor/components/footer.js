/**
 * Website Name: Astra Results, Inc.
 * Author: carvelruss.com
 * Description: Fully dynamic footer with quick links, CTA, contacts, legal, logo, and dynamic year.
 */

document.addEventListener("DOMContentLoaded", function () {

  // ===== 1. FOOTER DATA =====
  footerData = {
    cta: {
      text: "Subscribe",
      href: "tel:+15894514855",
      show: true,
      svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M22.9111 10.3484C19.0375 10.3484 15.507 6.68003 15.507 2.65165V1H12.3292V2.65165C12.3292 5.58168 13.5654 8.33002 15.5054 10.3484H0.5V13.6517H15.5054C13.5654 15.67 12.3292 18.4183 12.3292 21.3484V23H15.507V21.3484C15.507 17.32 19.0375 13.6517 22.9111 13.6517H24.5V10.3484H22.9111Z"
            fill="white"/>
        </svg>
      `
    },

    quickLinks: [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about-us.html" },
      { text: "Pay-Per-Click Advertising", href: "/our-services/pay-per-click-advertising.html" },
      { text: "Search Engine Optimization", href: "/our-services/search-engine-optimization.html" },
      { text: "E-Commerce", href: "/our-services/ecommerce-marketing.html" },
      { text: "Video Production & Creative Marketing", href: "/our-services/video-production-and-creative-marketing.html" },
      { text: "Social Media Marketing", href: "/our-services/engaging-social-media-marketing.html" },
      { text: "Business Consulting", href: "/our-services/business-consulting.html" },
      { text: "AI Sales CSR", href: "/our-services/ai-inbound-sales.html" },
      { text: "AI Sales Outbound Appointment Setting", href: "/our-services/ai-outbound-sales.html" },
      { text: "AI Sales Inbound Appointment Setting", href: "/our-services/ai-inbound-sales" },
      { text: "Custom UI/UX web design and development", href: "/our-services/ui-ux-development-and-design.html" },
    ],

    contacts: {
      title: "Astra Headquarters",
      address: "1101 Brickell Ave,\nMiami, FL 33131",
      phone: "+1 786-643-3036",
      email: "info@astraresults.com"
    },

    legal: [
      { text: "Cookies Policy", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "End User License Agreement", href: "#" },
      { text: "Acceptable Use Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],

    logo: {
      src: "/assets/img/footer-logo.svg",
      alt: "Astra Marketing"
    }
  };

  // ===== 2. HELPER =====
  function fixEmptyLink(href) {
    if (!href || href.trim() === "#" || href.trim() === "") {
      return "/coming-soon.html";
    }
    return href;
  }

  // ===== 3. POPULATE FOOTER =====
  function populateFooter() {
    const footer = document.querySelector("footer.footer");
    if (!footer) return;

    // CTA Button
    const ctaBtn = footer.querySelector("#footerCTA");
    if (footerData.cta.show && ctaBtn) {
      ctaBtn.href = fixEmptyLink(footerData.cta.href);
      ctaBtn.innerHTML = `
        <span class="me-3">${footerData.cta.text}</span>
        <span class="cta-icon d-flex align-items-center justify-content-center">
          ${footerData.cta.svgIcon}
        </span>
      `;
    }

    // Quick Links
    const quickLinkCol1 = footer.querySelector("#footerLinksCol1");
    const quickLinkCol2 = footer.querySelector("#footerLinksCol2");
    if (quickLinkCol1 && quickLinkCol2) {
      const half = Math.ceil(footerData.quickLinks.length / 2);
      const firstColLinks = footerData.quickLinks.slice(0, half);
      const secondColLinks = footerData.quickLinks.slice(half);

      quickLinkCol1.innerHTML = firstColLinks.map(link => `
        <li><a href="${fixEmptyLink(link.href)}"><i class="bi bi-chevron-right me-2"></i>${link.text}</a></li>
      `).join("");

      quickLinkCol2.innerHTML = secondColLinks.map(link => `
        <li><a href="${fixEmptyLink(link.href)}"><i class="bi bi-chevron-right me-2"></i>${link.text}</a></li>
      `).join("");
    }

    // Contacts
    const contactEl = footer.querySelector("#footerContacts");
    if (contactEl) {
      contactEl.innerHTML = `
        <h5><strong>${footerData.contacts.title}</strong></h5>
        <p>${footerData.contacts.address.replace(/\n/g, "<br>")}</p>
        <p><a href="tel:${footerData.contacts.phone}">${footerData.contacts.phone}</a></p>
        <p><a href="mailto:${footerData.contacts.email}">${footerData.contacts.email}</a></p>
      `;
    }

    // Legal
    const legalEl = footer.querySelector("#footerLegal");
    if (legalEl) {
      legalEl.innerHTML = footerData.legal.map(link => `
        <li><a href="${fixEmptyLink(link.href)}">${link.text}</a></li>
      `).join("");
    }

    // Footer Logo
    const logoEl = footer.querySelector("#footerLogo");
    if (logoEl) {
      logoEl.src = footerData.logo.src;
      logoEl.alt = footerData.logo.alt;
    }

    // Dynamic Year
    const footerYearEl = footer.querySelector("#footerYear");
    if (footerYearEl) {
      footerYearEl.textContent = new Date().getFullYear();
    }
  }

  // ===== 4. INIT =====
  populateFooter();

});
