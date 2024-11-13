let slide = document.querySelectorAll(".patientReview");
let cards = document.querySelectorAll(".cards");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
let count = 0;

slide.forEach(function(slides,index){
  slides.style.left=`${index * 100}%`
})
function myFun(){
  slide.forEach(function(curVal){
    curVal.style.transform=`translateX(-${count * 100}%)`
  })
}
setInterval(function(){
  count++;
  
    if(count == slide.lenght){
count=0;
    }
  
myFun()

  
}, 2000);

cards.forEach(function(cards){
  cards.addEventListener("click",function(){
    console.log(cards);

 document.querySelector(".details").style.display="block"
    document.querySelector(".content").innerHTML=`
    <img src=${cards.firstElementChild.src} alt="">
<div class="contentText">
  <h1>Alexa Zoan</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum, iste pariatur consequuntur a tempora ad molestias quasi illum vitae, eos quia.</p>
</div>`
closebtn.addEventListener("click", function(){
  document.querySelector(".details").style.display="none"
  
})
  })
})
connectBtn.addEventListener("click",function(){
let email = document.getElementById("email");
let password = document.getElementById("password");
if(email.value =="" && password.value ==""){
  alert("Enter Details")
}else{
  alert("You Logged In")
}
})
