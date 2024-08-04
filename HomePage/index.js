class SpecialNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar" style="position: sticky; min-height: 3px; display: flex; justify-content: space-between;
                            background-color: #030e4f; padding: 3px 10px;">
        <div id="logo">
         <a href="/HomePage/index.html"> <h1 id="title">&lt;Stocks Site&gt;</h1></a>
        </div>
 
         <div id="icon">
             <a href="/login-signup-component/login.html"><img id="icon"style="height: 30px;" src="/HomePage/images/avatar.png"></a>
         </div>
     </nav>
     `
    }
}

customElements.define('special-nav', SpecialNav)