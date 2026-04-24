(function () {
    const breadcrumb = document.querySelector(".breadcrumb li:first-child a");
    const backLink = document.querySelector(".page-header h1 a");
    const pageHeader = document.querySelector(".page-header");

    if (breadcrumb && backLink && pageHeader && !document.querySelector(".custom-nav-top")) {
        const wrapper = document.createElement("div");
        wrapper.className = "custom-nav-top";

        const homeBtn = document.createElement("a");
        homeBtn.href = "https://school.marketingscience.site/teach/control/stream/view/id/935462360";
        homeBtn.className = "custom-nav-btn home-btn";
        homeBtn.textContent = "На главную";

        const backBtn = document.createElement("a");
        backBtn.href = backLink.href;
        backBtn.className = "custom-nav-btn back-btn";
        backBtn.textContent = "Назад";

        wrapper.appendChild(homeBtn);
        wrapper.appendChild(backBtn);

        pageHeader.parentNode.insertBefore(wrapper, pageHeader);
    }
})();
