let overlay = document.querySelector('.overlay');
let images = document.querySelectorAll('.slider img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
prev.addEventListener('click',previous);
next.addEventListener('click',nexter);
let imagesArray = [...images];

    // overlay.addEventListener('mouseover',() => {
    //     clearInterval(nexter);
    //     console.log('xaxax');
    // })
    // overlay.addEventListener('mouseout', () => {

    // })


let overoll = 0;
let count = 1;
function nexter(e) {
    overlay.style.transform = 'translate(' + (overoll - 1200) + 'px';
    overoll -= 1200;
    count++;    
    if(count === imagesArray.length) {
        next.removeEventListener('click',nexter);        
    } else if (count > 1) {
        prev.addEventListener('click',previous);
    } console.log(count)
}   
function previous(e) {
    overlay.style.transform = 'translate(' + (overoll + 1200) + 'px';
    overoll += 1200;
    count--;
    
    if(count < imagesArray.length) {
        next.addEventListener('click',nexter);
    } 
   
    console.log(count)
}   
if  (count === 1) {
    prev.removeEventListener('click',previous);
}
let trustMe = true;
setInterval(() => {
   if (trustMe) {
       nexter();
       if (count === 4) {
           trustMe = false;
           next.removeEventListener('click',nexter);
       }
   } else if (count <= 4){
       previous();
   }

   if (count === 1) {
    prev.removeEventListener('click',previous);
       trustMe = true;
       nexter();
      
   }
},2500)
   
