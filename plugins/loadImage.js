export default {
  install(app) {
    // 비동기 처리
    app.config.globalProperties.$loadImage = (src) => {
      return new Promise((resolve) => {
        if (process.server) {
          // 서버 사이드 렌더링 중
          resolve();
          return;
        }
        // 클라이언트 사이드에서 처리
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("load", () => {
          // 완료 처리
          resolve();
        });
      });
    };
  },
};
