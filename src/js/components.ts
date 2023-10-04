import {LitElement, html} from 'lit-element';
import {navbarStyle} from "./lit-styles.js";
class navbarDropdown extends LitElement {
  static get properties() {
    return {
      item: {type: String},
    };
  }
  static get styles(){
    return [navbarStyle];
  }
  render() {
    return html`
      <navbarDropdown>
      <li class="dropdown">test
      <ul class="dropdown-content" aria-label="submenu">
      <slot></slot>
      </ul>
      </li>
      </navbarDropdown>
    `;
  }
}

customElements.define('navbarDropdown', navbarDropdown);