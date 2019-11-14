let button = document.querySelector('button');
// let input = document.querySelector('.eMail');
// button.addEventListener('click', mailCHeck);

// function mailCHeck(e){

    
//     if (input.value.indexOf('@') === -1 || input.value.indexOf('.') === -1){
//         alert('შეიყვანეთ სწორი ელ-ფოსტა');
//         e.preventDefault();
//     }

// }
let eMail = document.querySelector('.eMail');

eMail.addEventListener('blur',mailCheck);
function mailCheck(e){
    let text = document.querySelector('.forEmail');
    if (eMail.value.indexOf('@') === -1 ||eMail.value.indexOf('.') === -1 || eMail.value.indexOf('.') === eMail.value.length - 2  || eMail.value.indexOf('.') === eMail.value.length - 1){
        text.style.opacity = 1;
        text.style.color = 'red';
    } else {
        text.style.color = 'green';
        text.style.opacity = 0;
    }
}