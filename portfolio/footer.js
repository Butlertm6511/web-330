class Footer extends HTMLElement{
  constructor(){
        super();
    }

    connectedCallback(){
    this.innerHTML = `
        <div id="footer">
            <p>
                Copyright &copy; <a href="#"Bellevue</a>
            </p>
        </div>
    
    `;
}
}

customElements.define("footer-component", Footer);