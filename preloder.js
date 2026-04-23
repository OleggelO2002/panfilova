(function () {
  const style = document.createElement('style');
  style.textContent = `
    #page-preloader {
      position: fixed;
      inset: 0;
      background: #FCF9EA;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.4s ease;
    }
    .pixel-preloader {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 80px;
    }
    .pixel {
      width: 18px;
      height: 18px;
      background: #B90E2B;
      animation: pixelJump 1.2s infinite ease-in-out;
    }
    .pixel-1 { animation-delay: 0s; }
    .pixel-2 { animation-delay: 0.15s; }
    .pixel-3 { animation-delay: 0.3s; }
    .pixel-4 { animation-delay: 0.45s; }
    .pixel-5 { animation-delay: 0.6s; }
    @keyframes pixelJump {
      0%, 100% { transform: translateY(0) scale(1); background: #B90E2B; }
      30%       { transform: translateY(-12px) scale(1.1); background: #FCF9EA; box-shadow: 0 0 0 2px #B90E2B; }
      60%       { transform: translateY(6px) scale(0.95); background: #B90E2B; }
    }
  `;
  document.head.appendChild(style);

  const preloader = document.createElement('div');
  preloader.id = 'page-preloader';
  preloader.innerHTML = `
    <div class="pixel-preloader">
      <div class="pixel pixel-1"></div>
      <div class="pixel pixel-2"></div>
      <div class="pixel pixel-3"></div>
      <div class="pixel pixel-4"></div>
      <div class="pixel pixel-5"></div>
    </div>
  `;
  document.body.appendChild(preloader);

  window.addEventListener('load', function () {
    setTimeout(function () {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 400);
    }, 500);
  });
})();
