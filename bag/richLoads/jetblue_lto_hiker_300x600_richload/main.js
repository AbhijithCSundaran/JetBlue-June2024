// Var Declarations
var tl;
var tl2;
var container = myFT.$("#container");
var default_exit = myFT.$("#default_exit");
var endframe = myFT.$("#endframe")
var endframe_headline = myFT.$("#endframe_headline")
// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

// myVid.on("canplay", function() {
//   init();	
// }); 

init()

function animate() {


  // let video play
  tl.addLabel('start', 0)
  .to('#container', 0.5, { autoAlpha: 1 }, 'start+=0.5')
  .staggerTo(['#copy1', '#copy2', '#copy3'], 1, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'start+=2.5')
  .staggerFrom(['#copy1', '#copy2', '#copy3'], 1, { y: '+=200', ease: "expo.out" }, 0.1, 'start+=2.5')
  .to('.copyF1', 0.5, {alpha: 0, delay: 2})
  .staggerTo(['#copy4', '#copy5', '#copy6'], 1, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'start+=6.5')
  .staggerFrom(['#copy4', '#copy5', '#copy6'], 1, { y: '+=200', ease: "expo.out" }, 0.1, 'start+=6.5')
  .staggerTo(['#copy4', '#copy5', '#copy6'], 1, {textShadow: "0px 0px 20px #3B6EEF"}, 0.1, 'start+=7')
  .to('#footer', 0.5, {css: { 'opacity': '0'}, delay: 1.5})
  .to('#footer', 0.1, {css: {'filter': 'brightness(0) invert(1)', delay: 1.5}})
  .to('#endframe', 1, { top: 0, ease: "expo.out" })
  .to('#footer', 0.5, {css: { 'opacity': '1'}})
  .to('#shine', 0.5, {backgroundPosition: '450px 0px'});
    
    tl.to(['#man'], 8, { transform: "translate3d(0, 40px, 1px) scale(1.15)", ease: Power1.easeInOut }, 0)
    tl.to(['#bkg'], 8, { transform: "translate3d(0, 0, 1px) scale(1.3)", ease: Power1.easeInOut }, 0)


}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}



function init() {

  tl = new TimelineMax();

  animate();
  setRollover();


  //Using inbuilt time update function
  // myVid.on('timeupdate', function(){
  //   // console.log(myVid[0].currentTime)
  //   if(myVid[0].currentTime>5.5){
  //     if(!vid_time_triggered){
  //       vid_time_triggered=true;
  //       showEndframe();	
  //     }
  //   }
  // });						
  // Fade in creative/ad
  // container[0].style.transition = "opacity .5s";
  // container[0].style.opacity = 1;				
}
