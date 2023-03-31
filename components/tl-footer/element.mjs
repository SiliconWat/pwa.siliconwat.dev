import template from './template.mjs';

class TlFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    #pages = {
        "": {
            name: "Thon Ly",
            url: "https://thonly.org"
        },
        "siliconwat": {
            name: "Silicon Wat LLC",
            url: "https://siliconwat.dev"
        },
        "nhiakou": {
            name: "Nhia Kou Ltd",
            url: "https://nhiakou.org"
        },
        "thonly": {
            name: "THonly™",
            url: "https://thonly.com"
        },
        "heartbank": {
            name: "HeartBank®",
            url: "https://heartbank.com"
        }
    }

    connectedCallback() {
        const page = this.#pages[window.location.pathname.replaceAll("/", "")];
        const a = this.shadowRoot.querySelector('a');
        a.href = page.url;
        a.textContent = page.name;
    }
}

customElements.define("tl-footer", TlFooter);