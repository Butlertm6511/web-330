
// Creates a class the will be used to add to HTML element
class CartComponent extends HTMLElement{ 
    constructor(){
        super();
    }
    // Adds the cartIcon and the cart-count to the Html.
    connectedCallback(){
        this.innerHTML=`
        <div class="icon-count-wrapper">
                <i id="cartIcon" class="fa fa-shopping-cart"></i>
                <span> (<span id="cart-count" class="cart-count"></span>)</span>
                </div>
            `;
       
    }
}

// Will add the cart-component class and the CartComponent.
customElements.define("cart-component", CartComponent);