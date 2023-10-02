const boxes = document.querySelectorAll('.box');
/* window.onscroll = () =>{
    

} */
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop) {
      // downscroll code
      boxes.forEach((box) => {
        box.classList.add(".show");
    });
   } else if (st < lastScrollTop) {
    boxes.forEach((box) => {
        box.classList.remove(".show");
    });
      // upscroll code
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);