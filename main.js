

let h5one = document.querySelectorAll(".main ul li h5")[0]
let h5two = document.querySelectorAll(".main ul li h5")[1]
let h5three = document.querySelectorAll(".main ul li h5")[2]
let li = document.querySelector(".lione")
let span = document.querySelector(".main ul li .num")
let moon = document.querySelector(".moon")
let a0 = document.querySelectorAll("a")[0]
let a1 = document.querySelectorAll("a")[1]
let a2 = document.querySelectorAll("a")[2]
let a3 = document.querySelectorAll("a")[3]
let a4 = document.querySelectorAll("a")[4]
let a5 = document.querySelectorAll("a")[5]
let a6 = document.querySelectorAll("a")[6]
let p0 = document.querySelectorAll(".main1 .text p")[0]
let p1 = document.querySelectorAll(".main1 .text p")[1]
let p2 = document.querySelectorAll(".main1 .text p")[2]
let p3 = document.querySelectorAll(".main1 .text p")[3]
let toggle = document.querySelector(".toggle")
let cardmini1 = document.querySelectorAll(".main2 .crd .groub p")[0]
let cardmini2 = document.querySelectorAll(".main2 .crd .groub p")[1]
let cardmini3 = document.querySelectorAll(".main2 .crd .groub p")[2]
let cardmini4 = document.querySelectorAll(".main2 .crd .groub p")[3]
let active = document.querySelector(".active")
let containertwo = document.querySelector(".containertwo")
let name0 = document.querySelectorAll("h2")[0]
let name1 = document.querySelectorAll("h2")[1]
let name2 = document.querySelectorAll("h2")[2]
let name3 = document.querySelectorAll("h2")[3]
let name4 = document.querySelectorAll("h2")[4]
let name5 = document.querySelectorAll("h2")[5]
let name6 = document.querySelectorAll("h2")[6]
let name7 = document.querySelectorAll("h2")[7]
let name8 = document.querySelectorAll("h2")[8]
let name9 = document.querySelectorAll("h2")[9]
let name10 = document.querySelectorAll("h2")[10]
let name11 = document.querySelectorAll("h2")[11]
let cardone1 = document.querySelectorAll(".cardone")[0]
let cardone2 = document.querySelectorAll(".cardone")[1]
let cardone3 = document.querySelectorAll(".cardone")[2]
let cardone4 = document.querySelectorAll(".card4 .cardone")[0]
let cardone5 = document.querySelectorAll(".card4 .cardone")[1]
let cardtwo1 = document.querySelectorAll(".cardtwo")[0]
// let cardtwo2 = document.querySelectorAll(".cardtwo")[1]

console.log(cardone5)

moon.addEventListener("click", () => {
    toggle.classList.toggle("toggle")
    cardmini1.style.color = "black"
    cardmini2.style.color = "black"
    cardmini3.style.color = "black"
    cardmini4.style.color = "black"
    a0.style.color = "black"
    a1.style.color = "black"
    a2.style.color = "black"
    a3.style.color = "black"
    a4.style.color = "black"
    a5.style.color = "black"
    a6.style.color = "black"
    name0.style.color = "black"
    name1.style.color = "black"
    name2.style.color = "black"
    name3.style.color = "black"
    name4.style.color = "black"
    name5.style.color = "black"
    name6.style.color = "black"
    name7.style.color = "black"
    name8.style.color = "black"
    name9.style.color = "black"
    name10.style.color = "black"
    name11.style.color = "black"
    p0.style.color = "black"
    p1.style.color = "#6a6a6a"
    p2.style.color = "#6a6a6a"
    p3.style.color = "#6a6a6a"
    cardone1.style.borderColor = "black"
    cardone2.style.borderColor = "black"
    cardone3.style.borderColor = "black"
    cardone4.style.borderColor = "black"
    cardone5.style.borderColor = "black"
    cardtwo1.style.borderColor = "black"
})
containertwo.addEventListener("click", () => {
    cardmini1.style.color = "white"
    cardmini2.style.color = "white"
    cardmini3.style.color = "white"
    cardmini4.style.color = "white"
    a0.style.color = "white"
    a1.style.color = "white"
    a2.style.color = "white"
    a3.style.color = "white"
    a4.style.color = "white"
    a5.style.color = "white"
    a6.style.color = "white"
    p0.style.color = "white"
    cardone1.style.borderColor = "white"
    cardone2.style.borderColor = "white"
    cardone3.style.borderColor = "white"
    cardone4.style.borderColor = "white"
    cardone5.style.borderColor = "white"
    cardtwo1.style.borderColor = "white"
    name0.style.color = "white"
    name1.style.color = "white"
    name2.style.color = "white"
    name3.style.color = "white"
    name4.style.color = "white"
    name5.style.color = "white"
    name6.style.color = "white"
    name7.style.color = "white"
    name8.style.color = "white"
    name9.style.color = "white"
    name10.style.color = "white"
    name11.style.color = "white"

})
li.addEventListener("click", () => {
    h5one.style.display = "block"
    h5two.style.display = "block"
    h5three.style.display = "block"
})

li.addEventListener("click", () => {
    span.style.display = "none"
})