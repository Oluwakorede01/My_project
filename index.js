
{
const text = "When it comes to  Crypto trading and crypto training with exclusive P2P platform, we're the best!." //this is where to type what you want to display in the inner html of the id and for the typing effect to take place
const typingSpeed = 150; //adjust the typing speed here

let i = 0
function typingEffect(){
  if (i< text.length){
    document.getElementById('typing1').innerHTML += text.charAt(i); i++;
    setTimeout(typingEffect,typingSpeed)
  }
   else{
    document.getElementById('typing1').style.borderRight //this is used to remove cursor after typing is done
   }
}
window.onload = typingEffect
}

//asynchronous function is needed to make this effect work together

const paragraph = "Let’s start with our fee: $30 for 1 Bitcoin. Other crypto exchanges charge up to $600.1 We offer clear pricing, instant rebates of up to 50% on your order cost, and a choice of zero commissions or raw spreads."

const typingSpeed = 150;
 let i = 0;

 function typingEffect(){
 if(i < text.length){
  document.getElementById('typing-text').innerHTML += text.charAt(i); 
  i++
  setTimeout(typingEffect, typingSpeed);
 }
 else{
  document.getElementById('typing-text').style.borderRight
 }
 window.onload = typingEffect;
}

