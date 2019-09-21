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
            <li><a href="/login">Login</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Your Quackfile</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="#">Mini-Games</a></li>
            <li><a href="dungeon">Duck Dungeon</a></li>
        </ul>
    </div>
    </label>
    </div>
    );
}

export default Nav;