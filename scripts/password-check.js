let passwordField = document.querySelector('.password');
let passwordField2 = document.querySelector('.password2');



passwordField.addEventListener('blur',passwordCheck);
function passwordCheck() {
if (!passwordField.value.match(/[A-Z]/)) {
    alert('SHeiyvanet didi asoebic');
}
}