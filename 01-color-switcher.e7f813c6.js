const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let d=null;function i(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function n(){if(t.hasAttribute("disabled"))return t.removeAttribute("disabled"),void e.setAttribute("disabled","");t.setAttribute("disabled",""),e.removeAttribute("disabled")}e.setAttribute("disabled",""),t.addEventListener("click",(function(){i(),d=setInterval(i,1e3),n()})),e.addEventListener("click",(function(){clearInterval(d),n()}));
//# sourceMappingURL=01-color-switcher.e7f813c6.js.map