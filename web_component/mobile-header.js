class MobileHeader extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({mode:"open"})
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
        @import url('../css/root.css');
        .mobileHeader{
            width: 50vw;
            display: flex;
            justify-content: space-around;
            align-items:center;
        }
        .mobileHeader img{
            width: 35px;
        }
        svg{
            width: 20px;
        }
        </style>
        <nav class="mobileHeader">
            <ul><img src="../img/logo.png" alt="logo"></ul>
            <ul><a href="../pages/store.html">COMSCOPE</a></ul>
            <ul class="shopping"><a href="../Buy section/Cart2.html" alt="shopping"><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48 47.1-21.49 47.1-48-19.7-48-47.1-48zm-288 0c-26.51 0-47.1 21.49-47.1 48s21.5 48 47.1 48 47.1-21.49 47.1-48-19.7-48-47.1-48zM569.5 44.73C563.391 36.636 554.08 32 543.94 32H121.1l-1.5-12.49C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384h328c13.25 0 24-10.75 24-23.1 0-14.2-10.7-24.9-24-24.9H179.9l-9.2-48h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1c2.77-10.64.87-20.86-5.23-28.96z" fill="#ffffff" class="fill-000000"></path></svg></a>
            <shopping-cart></shopping-cart></ul>
        </nav>
        `
    }
    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}
window.customElements.define('mobile-header', MobileHeader);