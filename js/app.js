(function(){
   let socials = document.querySelectorAll('.social div')

   socials.forEach(function(social, index){
       social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.3}s `
   })


//  this is for the animation of lines in the rocket body 


let rocketPieces = document.querySelectorAll('.rocket-body span')

let rocket = document.querySelector('.rocket')

let triggerStart = window.innerHeight/5;         // this calculation is done to aad delay in the animation of lines 

let rocketOffsetTop = rocket.offsetTop ;

let thirdOffetTop = rocketPieces[2].offsetTop;

document.addEventListener('scroll', (e) =>{

    if(window.scrollY > (rocketOffsetTop - triggerStart)){

        rocketPieces[0].classList.add('active')
        rocketPieces[1].classList.add('active')

    }else {
        rocketPieces[0].classList.remove('active')
        rocketPieces[1].classList.remove('active')
    }
    if(window.scrollY > (thirdOffetTop - triggerStart)){

        rocketPieces[2].classList.add('active')        
    }else{
        rocketPieces[2].classList.remove('active')
    }
})

}())

