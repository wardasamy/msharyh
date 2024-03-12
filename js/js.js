

// Make Line Scroller
let lineScroller = document.querySelector(".boxs");

let documentHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", (e) => {
  let documentScrollTop = document.documentElement.scrollTop;

  lineScroller.style.width = `${(documentScrollTop / documentHeight) * 100}%`;
});


let span =document.querySelector("#myspan-2");


this .scrolly >= 1000 ? span.classList.add("show") :span.classList.remove("show");

span.onclick = function(){
    window.scrollTo({
top:0,
behavior:"smooth",
    })
    
}
// All Links
const linksContainer = document.querySelector("nav .links");

// Bars Icon
const bars = document.querySelector("nav .bars");

bars.addEventListener("click", () => {
  linksContainer.classList.toggle("appear");
});


let btn = document.querySelectorAll(".card");


btn.onclick = function(){
    btn.removeChild(btn.remove);
}