var btn1= document.getElementById("b1")
var sec1=document.getElementById("section1")
btn1.addEventListener("click",function(){
    sec1.scrollIntoView({behavior:"smooth"})
})

var btn2 = document.getElementById("b2")
var sec2 = document.getElementById("section2")
btn2.addEventListener("click",function(){
    sec2.scrollIntoView({behavior:"smooth"})
})
var l1 = document.getElementById("hh2")
var l2 = document.getElementById("hh3")
var l3 = document.getElementById("hh4")
var l4 = document.getElementById("hh5")
var sec3 = document.getElementById("section3")
var sec4 = document.getElementById("section4")

l1.addEventListener("click",function(){
    sec1.scrollIntoView({behavior:"smooth"})
})
l2.addEventListener("click",function(){
    sec2.scrollIntoView({behavior:"smooth"})
})
l3.addEventListener("click",function(){
    sec3.scrollIntoView({behavior:"smooth"})
})
l4.addEventListener("click",function(){
    sec4.scrollIntoView({behavior:"smooth"})
})