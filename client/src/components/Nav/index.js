import React from "react";
import "./style.css";

function toggleButton(event) {
       var el = event
     el.classList.toggle('active')
    }

function Nav() {
    return (
        <div>
        <input type="checkbox" name="Menu Toggle" id="menu-toggle-input" />
    <label for="menu-toggle-input"><div class="menu-toggle"></div>
    <div class="overlay"></div>
    <div class="menu">
        <ul>
            
            <li><a href="/home">Quack! page</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/minigames">Mini-Games</a></li>
            <li><a href="/login">Log Out</a></li>

        </ul>
    </div>
    </label>
    </div>
    );
}

export default Nav;