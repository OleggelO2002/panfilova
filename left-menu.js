(function replaceMenuIcons() {
  const ICONS = {
    'menu-item-profile': {
      active: 'https://static.tildacdn.pub/tild6162-3030-4435-a639-316439316337/active7.png',
      base:   'https://static.tildacdn.pub/tild6431-3766-4261-b138-666639333833/base7.png',
    },
    'menu-item-search': {
      active: 'https://static.tildacdn.pub/tild3236-3431-4261-a337-663562353336/active2.png',
      base:   'https://static.tildacdn.pub/tild6339-6135-4265-a566-626632323634/base2.png',
    },
    'menu-item-notifications_button_small': {
      active: 'https://static.tildacdn.pub/tild3739-3838-4531-b961-613733333662/active3.png',
      base:   'https://static.tildacdn.pub/tild3265-3263-4635-b635-343936383462/base3.png',
    },
    'menu-item-teach': {
      active: 'https://static.tildacdn.pub/tild3965-3130-4566-b639-663630396162/active5.png',
      base:   'https://static.tildacdn.pub/tild6135-6636-4635-a537-356464633131/base5.png',
    },
    'menu-item-notifications': {
      active: 'https://static.tildacdn.pub/tild3462-3535-4630-a337-636637613563/active6.png',
      base:   'https://static.tildacdn.pub/tild3234-3530-4636-a162-356261306264/base6.png',
    },
    'menu-item-chatium': {
      active: 'https://static.tildacdn.pub/tild3230-6237-4232-b938-366161643961/active4.png',
      base:   'https://static.tildacdn.pub/tild3038-6634-4432-b134-363231306630/base4.png',
    },
  };

  const PROFILE_DEFAULT_SRC = '/public/img/default_profile_50.png';

  function updateIcons() {
    Object.entries(ICONS).forEach(([itemClass, urls]) => {
      const li = document.querySelector(`.${itemClass}`);
      if (!li) return;
      const img = li.querySelector('img.menu-item-icon');
      if (!img) return;

      // Для профиля заменяем только если стоит дефолтное изображение
      if (itemClass === 'menu-item-profile' && !img.src.endsWith(PROFILE_DEFAULT_SRC)) return;

      img.src = li.classList.contains('active') ? urls.active : urls.base;
    });
  }

  // Ждём появления меню
  let attempts = 0;
  const interval = setInterval(() => {
    attempts++;
    const menu = document.querySelector('.gc-account-user-menu');

    if (menu) {
      clearInterval(interval);
      updateIcons();

      // Следим за изменением класса active (при переключении пунктов)
      new MutationObserver(updateIcons).observe(menu, {
        subtree: true,
        attributeFilter: ['class'],
      });
    } else if (attempts >= 20) {
      clearInterval(interval);
    }
  }, 200);
})();
