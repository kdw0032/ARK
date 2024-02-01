// 모바일에서 가로 스크롤바 숨기기
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.addEventListener('DOMContentLoaded', function () {
      // 가로 스크롤바를 감추는 스타일을 동적으로 추가
      var style = document.createElement('style');
      style.innerHTML = 'body { overflow-x: hidden; }';
      document.head.appendChild(style);
    });
  }