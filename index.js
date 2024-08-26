

ScrollReveal({ 
  reset: true,
  distance:'60px',
  duration:2000,
  delay:280 
 });
 
 ScrollReveal().reveal('.top-banner', { delay: 150,origin:'top' });
 ScrollReveal().reveal('.left-text', { delay: 150,origin:'right' });
 ScrollReveal().reveal('.right-img', { delay: 150,origin:'top' });
 ScrollReveal().reveal('#shop', { delay: 150,origin:'left', interval: 200 });
 ScrollReveal().reveal('.box', { delay: 150,origin:'top' ,interval:200 });
 ScrollReveal().reveal('#Product', { delay: 150,origin:'top' });
 ScrollReveal().reveal('.content3', { delay: 150,origin:'bottom' });
 ScrollReveal().reveal('.content-3-text', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.content-3-right-img', { delay: 150,origin:'right' });
 


 ScrollReveal().reveal('.content-img-first-line2', { delay: 150,origin:'right' });
 ScrollReveal().reveal('.nav-link', { delay: 150,origin:'top' });
 ScrollReveal().reveal('#handi', { delay: 150,origin:'top' });
 ScrollReveal().reveal('.content-img-first-line', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.content-img-first-line1', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.content-img-first-line2', { delay: 150,origin:'right' });
 ScrollReveal().reveal('.content5-1', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.content5-2', { delay: 150,origin:'right' });
 ScrollReveal().reveal('.content5-3', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.content5-4', { delay: 150,origin:'right' });
 ScrollReveal().reveal('.company-text', { delay: 150,origin:'left' });
 ScrollReveal().reveal('.line', { delay: 150,origin:'left' });


window.onload = function(){



var text = document.querySelector(".text-animation").children;
textL = text.length;
var value = 0;

function animationText(){
for(var i=0;i<textL;i++){
   text[i].classList.remove("text-in");

}
 text[value].classList.add("text-in");
if(value == textL-1){
    value = 0;
}

else {
    value++;
}
 

  setTimeout(animationText,3000);
}


animationText();


var animation1 = document.querySelector(".content-3-animation").children;

animation12 = animation1.length;

animationValue = 0;

function content3animation(){
  for( var i=0;i<animation12;i++){
    animation1[i].classList.remove("content-3-text-animation");
    
  }

  animation1[animationValue].classList.add("content-3-text-animation");

  if(animationValue == animation12-1){
     animationValue = 0;

  }

  else{
    animationValue++
  }

  

  setTimeout(content3animation,2500)

}
content3animation();
}


var myhtml = document.querySelector("button");
var myhtml1 = document.querySelector("#changeletter");

 myhtml.addEventListener("click",function(){
    myhtml.innerHTML = "subscribed";
    myhtml.style.color="red";
    myhtml.style.backgroundColor="white";
    myhtml1.innerHTML = "Thank You For Subscribtion You Will Recive the Newsletter";

 })

 var hamberger = document.querySelector(".touglebtn");
 var navlinks = document.querySelector(".nav-links");

 hamberger.addEventListener("click",function(){
  navlinks.classList.toggle("active");

 })
