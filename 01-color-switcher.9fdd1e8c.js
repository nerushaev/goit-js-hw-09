!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),d=null;function n(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}function i(){if(t.hasAttribute("disabled"))return t.removeAttribute("disabled"),void e.setAttribute("disabled","");t.setAttribute("disabled",""),e.removeAttribute("disabled")}e.setAttribute("disabled",""),t.addEventListener("click",(function(){n(),d=setInterval(n,1e3),i()})),e.addEventListener("click",(function(){clearInterval(d),i()}))}();
//# sourceMappingURL=01-color-switcher.9fdd1e8c.js.map
