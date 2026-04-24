const divs = document.querySelectorAll("div")

// console.log(divs)

document.addEventListener("click", e => {
  if (e.target.matches("div")) {
    console.log("hi")
  }
})

const newDiv = document.createElement("div")
newDiv.style.backgroundColor = "purple"
newDiv.style.width = "200px"
newDiv.style.height = "200px"

document.body.append(newDiv)


