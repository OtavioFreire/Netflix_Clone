$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('playery', {
    height: '730',
    width: '1170',
    videoId: 'wQX3pirdb6o',
});
}

function abrir(){
   document.getElementById("popup").style.display = 'block'
   player.playVideo();
}

function fechar(){
    document.getElementById("popup").style.display = 'none'
    player.pauseVideo();
 }

function abrirInfo(){
    document.getElementById("popupInfo").style.display = 'block'
}

function fecharInfo(){
    document.getElementById("popupInfo").style.display = 'none'
}