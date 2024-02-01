var tl=gsap.timeline()
tl.to(".main2",{
    y:"10vh",
    scale:0.4,
    duration:0
})
tl.to(".main2",{
   y:"-70vh",
   duration:1.2,
   delay:0.3,
   ease:Expo.easeInOut
//    scale:1,
//    rotate:360,
//    transform:"rotate(360deg)",
   

})
 
tl.to(".main2",{
    y:"0",
    rotate:"-360deg",
    delay:0.2,
    duration:2,
    scale:1,
    ease:Expo.easeInOut
})

 