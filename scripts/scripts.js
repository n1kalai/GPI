let $mainHeader = document.querySelector('.mainHeader');
let $ul = document.querySelector('.mainHeader ul');
let $burgerer = document.querySelector('.burgerer');

//console.log($gia[0])
window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $mainHeader.style.position = 'fixed';
        $mainHeader.style.top = '0px';
        $mainHeader.style.background = 'white';
        $mainHeader.style.animation = 'forHeader .2s forwards';
        $mainHeader.style.backgroundImage = 'url(images/geo.png)';
        $mainHeader.style.backgroundSize = '220px 80px';
        $mainHeader.style.backgroundRepeat = 'no-repeat';
        $mainHeader.style.backgroundPosition = '270px 0';
        $ul.style.color = 'rgba(8, 63, 110, 0.51)';
        $burgerer.style.color = 'rgb(175, 215, 249)';



    } else {
        $mainHeader.style.position = null;
        $mainHeader.style.top = null;
        $mainHeader.style.background = null;
        $mainHeader.style.width = null;
        $mainHeader.style.left = null;
        $ul.style.color = null;
        $mainHeader.style.animation = null;
        $burgerer.style.color = 'white'

    }
}



$burgerer.addEventListener('click',function(x){
    $ul.classList.toggle('open');
})