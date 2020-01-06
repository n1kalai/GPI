window.onload = () => {
    setInterval( nexter ,3000 )
}
let figure = document.querySelector('.slider');
let overlay = document.querySelector('.overlay');
imagesArray = ["1.jpg","2.jpg","3.jpg","4.jpg"]
let count = 0;
overlay.innerHTML = `<img src="images/${imagesArray[count]}" >`
function nexter(e) {
    overlay.innerHTML = `<img src="images/${imagesArray[count++]}" >`;
   if (count === 5) {
    overlay.innerHTML = `<img src="images/${imagesArray[0]}" >`;
    count = 0
   }
}   
