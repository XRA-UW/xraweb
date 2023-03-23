AFRAME.registerComponent('teleport-on-click', {
    init: function () {
        let el = this.el;
        let camera = document.querySelector('#camera');
      
      el.addEventListener('click', function (teleport) {
          camera.setAttribute('position', teleport.detail.intersection.point);
      });
    }
    
  });