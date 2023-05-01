class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id=banner>
            <div id= "nav-container">
                <ul id= "nav-list">
                    <li>
                        <a href= "index.html ">Home</a>
                    </li>
                    <li>
                        <a href= "projects.html ">Projects</a>
                    </li>
                    <li>
                        <a href= "#">Database Diagrams</a>
                    </li>
                    <li>
                        <a href= "#">API</a>
                    </li>
                    <li>
                        <a href= "resume.html ">Resume</a>
                    </li>
                    <li>
                        <a href= "about-me.html ">about</a>
                    </li>
                    
                </ul>    
        </div>
        `;
    }
}

customElements.define("header-component", Header);