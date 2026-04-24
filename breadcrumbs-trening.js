(function () {
    const breadcrumbsEl = document.querySelector(".breadcrumbs");
    const pageHeader = document.querySelector(".page-header");

    if (!breadcrumbsEl || !pageHeader || document.querySelector(".custom-nav-top")) return;

    const links = breadcrumbsEl.querySelectorAll("a");
    if (links.length < 1) return;

    const firstLink = links[0];
    const lastLink = links[links.length - 1];

    const wrapper = document.createElement("div");
    wrapper.className = "custom-nav-top";

    const homeBtn = document.createElement("a");
    homeBtn.href = "https://school.marketingscience.site/teach/control/stream/view/id/935462360";
    homeBtn.className = "custom-nav-btn home-btn";
    homeBtn.textContent = "На главную";

    const backBtn = document.createElement("a");
    backBtn.href = lastLink.href;
    backBtn.className = "custom-nav-btn back-btn";
    backBtn.textContent = "Назад";

    wrapper.appendChild(homeBtn);
    wrapper.appendChild(backBtn);

    pageHeader.parentNode.insertBefore(wrapper, pageHeader);
})();
