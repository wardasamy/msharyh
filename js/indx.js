
// Make Line Scroller
let lineScroller = document.querySelector(".scroller");

let documentHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", (e) => {
  let documentScrollTop = document.documentElement.scrollTop;

  lineScroller.style.width = `${(documentScrollTop / documentHeight) * 100}%`;
});


let span =document.querySelector("#my-top");


this .scrolly >= 1000 ? span.classList.add("show") :span.classList.remove("show");

span.onclick = function(){
    window.scrollTo({
top:0,
behavior:"smooth",
    })
    
};
