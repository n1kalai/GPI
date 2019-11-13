let button = document.querySelector('button');
let input = document.querySelector('.eMail');
button.addEventListener('click', mailCHeck);

function mailCHeck(e){

    
    if (input.value.indexOf('@') === -1 || input.value.indexOf('.') === -1){
        alert('შეიყვანეთ სწორი ელ-ფოსტა');
        e.preventDefault();
    }

}

