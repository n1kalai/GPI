let passwordField = document.querySelector('.password');
let passwordField2 = document.querySelector('.password2');
let ol = document.querySelector('.myForm__lists');
let firstLi = ol.children[0];
let secLi = ol.children[1];
let thirdLi = ol.children[2];

passwordField.addEventListener('input',passwordCheck);
// passwordField.addEventListener('blur',function(x){ol.style.opacity = 0});
passwordField2.addEventListener('blur',passwordsMatches);

function passwordCheck() {
if (!passwordField.value.match(/[a-z]/)){
    ol.style.opacity = 1;
    thirdLi.style.opacity = 1;
    thirdLi.style.color = 'red'
}else {
    
    thirdLi.style.color = 'green';
    thirdLi.style.opacity = 0;
}
if (!passwordField.value.match(/[A-Z]/)) {
   ol.style.opacity = 1;
   firstLi.style.opacity = 1;
   firstLi.style.color = 'red'
}  else {
    
    firstLi.style.color = 'green';
    firstLi.style.opacity = 0;
}
if (!passwordField.value.match(/[0-9]/)){
    ol.style.opacity = 1;
    secLi.style.opacity = 1;
    secLi.style.color = 'red'
} else {
   
    secLi.style.color = 'green';
    secLi.style.opacity = 0;
}
    
}

function passwordsMatches(x){
    if (passwordField.value !== passwordField2.value){
        alert('parolebi ar emtxveva');
    }
}