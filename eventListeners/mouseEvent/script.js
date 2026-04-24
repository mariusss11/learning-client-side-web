const myBox = document.getElementById("myBox")

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "You hovered me"
})


myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "Hover me"
})