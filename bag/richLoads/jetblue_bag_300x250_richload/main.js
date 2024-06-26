// Var Declaration
var tl;
var container = myFT.$("#container");
var default_exit = myFT.$("#default_exit");
var endframe = myFT.$("#endframe")
var endframe_headline = myFT.$("#endframe_headline")
// var myVid=myFT.$("#video1");
var clickTag1_url = "";
// var vid_time_triggered=false;

//
default_exit.on('click', function () {
  myFT.clickTag(1, clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads', function () {

  clickTag1_url = myFT.instantAds.clickTag1_url;

})

// myVid.on("canplay", function() {
//   init();	
// }); 

init()

function animate() {


  // let video play
  tl.addLabel('start', 0)
    .to('#container', 0.5, { autoAlpha: 1 }, 'start+=0.5')
    .staggerTo(['#copy1',], 0.8, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'start+=2')
    .staggerFrom(['#copy1',], 0.8, { y: '+=50', ease: "expo.out" }, 0.1, 'start+=2')
    .to('#copy1', 0.5, { alpha: 0, delay: 2 })
    .staggerTo(['#copy2',], 0.8, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'start+=5.5')
    .staggerFrom(['#copy2'], 0.8, { y: '+=50', ease: "expo.out" }, 0.1, 'start+=5.5')
    .to('#endframe', 1, { top: 0, ease: "expo.out", delay: 1.5 });
  // .to('#logo', 0.5, { autoAlpha: 1 },);
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
