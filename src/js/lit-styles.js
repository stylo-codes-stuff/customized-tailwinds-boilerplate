import {css} from 'lit-element/lit-element.js';

export const navbarStyle = css`
    *{
        font-family: Candal;
    }
    .dropdown{
        position: relative;
        
    }
    .dropdown-content{
        min-width:max-content;
        max-height:0;
        transition: max-height 1s; 
    }
    .dropdown:hover .dropdown-content,
    .dropdown:focus .dropdown-content,
    .dropdown:focus-within .dropdown-content {
      max-height: 200px;
    } 
`    