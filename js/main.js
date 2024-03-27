

$(document).ready(function() {
    
 $('.contentt').hide()
    $('.label').on('click' ,function() {
        $(this).next().slideToggle('slow')
        $(this).parent().toggleClass('active')

        $('.label').not(this).next().slideUp('slow')
        $('.label').not(this).parent().removeClass('active')
    })
})

// countDownTimer 
// 1000 millseconds = 1 second

let countDownDate = new Date("may 28, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let dateNow = new Date().getTime();

    // find diffrence between now and countdown date

    let dateDiff = countDownDate - dateNow // numbers of millseconds

    // get time units 
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 *  60))
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60 ))
    let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000 ))


    document.querySelector('.days').innerHTML = `${days} D`
    document.querySelector('.hours').innerHTML = `${hours} h`
    document.querySelector('.minutes ').innerHTML = minutes < 10 ? `0${minutes} m` : `${minutes} m`
    document.querySelector('.seconds').innerHTML = seconds  < 10 ? `0${seconds} s`: `${seconds} s` 

    if(dateDiff <= 0){
        clearInterval(counter)
        

    }

}, 1000)

let textarea = document.getElementById('textarea')
 
function charCount() {
    var length =  textarea.value.length;
    var max = 100
     
     if(length >= max){
      textarea.value = textarea.value.substring(0,100)
     }
     else {
        $('.type-count ').text( max - length)
     }
}

$('.closebtn').on('click' , function() {
    let leftValue = $('.parent-option').css('left')
    let widthbox = $('#leftMenu').outerWidth();

   
   if(leftValue == '0px') {
    $('.parent-option').animate({left : `-${widthbox}px`} ,2000)
   }

   
 
})
$('.openNav').on('click' , function() {
    let leftValue = $('.parent-option').css('left')
    let widthbox = $('#leftMenu').outerWidth();

    
   if(leftValue == '0px') {
   
   
    $('.parent-option').animate({left : `-${widthbox}px`} ,2000)
   }
   else {
    $('.parent-option').animate({left : `0px`} ,2000)
   }   
 
})

$('#leftMenu a').on('click',function(e) {
    let sectionSelector = $(e.target).attr('href')
    let sectionOffset = $(sectionSelector).offset().top;
    $('body , html').animate({
        scrollTop : `${sectionOffset}px`
    }, 2000)
})


let durationOffset = $('#duration').offset().top;


$(document).on('scroll' ,function() {
    let documentScroll  = $(document).scrollTop()
    if( documentScroll > durationOffset - 450) { 
     $('.openNav').css('display' , 'none')
     
    
    } else {
     $('.openNav').css('display' , 'block')
     
    }
 
 })
  
