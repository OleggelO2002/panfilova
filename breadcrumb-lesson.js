(function () {
    const backLink = document.querySelector(".page-header h1 a");
    const pageHeader = document.querySelector(".page-header");

    if (!backLink || !pageHeader || document.querySelector(".custom-nav-top")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "custom-nav-top";
    wrapper.style.cssText = "display:flex; justify-content:space-between; align-items:center;";

    // Левая часть — главная и назад
    const leftGroup = document.createElement("div");
    leftGroup.className = "custom-nav-left";

    const homeBtn = document.createElement("a");
    homeBtn.href = "https://school.marketingscience.site/teach/control/stream/view/id/935462360";
    homeBtn.className = "custom-nav-btn home-btn";
    homeBtn.textContent = "На главную";

    const backBtn = document.createElement("a");
    backBtn.href = backLink.href;
    backBtn.className = "custom-nav-btn back-btn";
    backBtn.textContent = "Назад";

    leftGroup.appendChild(homeBtn);
    leftGroup.appendChild(backBtn);

    // Правая часть — следующий блок
    const nextLink = document.querySelector("td.text-right a");

    if (nextLink) {
        const rightGroup = document.createElement("div");
        rightGroup.className = "custom-nav-right";

        const nextBtn = document.createElement("a");
        nextBtn.href = nextLink.href;
        nextBtn.className = "custom-nav-btn next-btn";
        nextBtn.textContent = "След. блок.";

        rightGroup.appendChild(nextBtn);
        wrapper.appendChild(leftGroup);
        wrapper.appendChild(rightGroup);
    } else {
        wrapper.appendChild(leftGroup);
    }

    pageHeader.parentNode.insertBefore(wrapper, pageHeader);
})();
