function popup(){
    document.querySelector(".popup").style.display = "flex";
    $(".popup").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
     }
 
 function close_popup(){
     $(".popup").animate({opacity: "0"}, "slow");
     document.querySelector(".popup").style.display = "none";
     document.body.style.overflow = "scroll";
 }
 
 function big(element){
     element.style.fontSize = "25px";
 }
 
 function small(element){
     element.style.fontSize = "20px";
 }
 
 function load(){
     $(".text").animate({opacity: '1'}, "slow");
 }