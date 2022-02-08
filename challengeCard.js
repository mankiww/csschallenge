(() => {
  class challengeCard extends HTMLElement {
    static get observedAttributes() {
      return ['html', 'css', 'script'];
    }

    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });

      const container = document.createElement('div');
      const style = document.createElement('style');
      const script = document.createElement('script');

      container.id = 'container';

      shadow.appendChild(container);
      shadow.appendChild(style);
      shadow.appendChild(script);
    }

    debounce(callback, delay) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(callback, delay || 0);
    }

    attributeChangedCallback() {
      this.debounce(this.render.bind(this));
    }

    get html() {
      return this.getAttribute('html');
    }

    get css() {
      return this.getAttribute('css');
    }

    get script() {
      return this.getAttribute('script');
    }

    render() {
      console.log('rendered');
      const shadow = this.shadowRoot;

      shadow.querySelector('#container').innerHTML = this.html;
      shadow.querySelector('style').textContent = this.css;
      shadow.querySelector('script').textContent = this.script;
    }
  }

  window.customElements.define('challenge-card', challengeCard);
})();

