const myBox = document.getElementById("myBox")

// document.addEventListener("keydown", e => {
//     // console.log(event) -> shows the key we pressed
//     console.log(`key clicked = ${event.key} `)
// })

// document.addEventListener("keyup", e => {
//     console.log("key uncliked")
// })

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    // console.log(event.key)
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount
                break;
            case "ArrowLeft":
                x -= moveAmount
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})