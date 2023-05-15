class Footer extends HTMLElement{
  constructor(){
        super();
    }

    connectedCallback(){
    this.innerHTML = `
        <div id="footer" class="footer">
            <p>
                Copyright &copy; <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/ "Bellevue</a>
            </p>
            <ul>
            <li>
                <a href="https://github.com/Butlertm6511?tab=repositories "> GitHub repositories</a>
            </li>
            <li>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/ ">Bellevue Universities Web Development Degree</a>
            </li>
            <li>
                <a href=" https://www.youtube.com/@bellevueuniversity"> YouTube channel</a>
            </li>
            <li>
                <a href="https://github.com/buwebdev"> courses GitHub repositories</a>
            </li> 
        </div>
    
    `;
}
}

customElements.define("footer-component", Footer);