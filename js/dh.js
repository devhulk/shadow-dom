class DH extends HTMLElement {
  constructor() {
      super()
      let shadow = this.attachShadow({mode: 'open'})
      // Create spans
      let wrapper = document.createElement('span');
      wrapper.setAttribute('class','wrapper');
      let icon = document.createElement('span');
      icon.setAttribute('class','icon');
      icon.setAttribute('tabindex', 0);
      let info = document.createElement('span');
      info.setAttribute('class','info');

      // Take attribute content and put it inside the info span
      //let text = this.getAttribute('text');
      //info.textContent = text;

      // Insert icon
      let imgUrl;
      if(this.hasAttribute('img')) {
        imgUrl = this.getAttribute('img');
      } else {
        imgUrl = 'littlehulk.png';
      }
      let img = document.createElement('img');
      img.src = imgUrl;
      icon.appendChild(img);
      var style = document.createElement('style');
      style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }`;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);

  }


}

module.exports = DH