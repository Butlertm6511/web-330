class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id="banner">
            <div id= "nav-container" >
                <ul id= "nav-list" class="nav">
                    <li>
                        <a href= "mosleyButler-portfolio.html ">Home</a>
                    </li>
                    <li>
                        <a href= "about-me.html">About Me</a>
                    </li>
                    <li>
                        <a href= "resume.html ">Resume</a>
                    </li>
                    <li>
                        <a href= "projects.html ">Projects</a>
                    </li>
                    <li>
                        <a href= "database.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href= "api.html">API</a>
                    </li>  
                </ul>    
        </div>
        `;
    }
}

customElements.define("header-component", Header);