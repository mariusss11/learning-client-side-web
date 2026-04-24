

window.addEventListener("scroll", e => {
    // console.log("the page is being scrolled")

    const scrolled = window.scrollY;


    // console.log("scrollHeight: ", document.documentElement.scrollHeight)
    // console.log("windows inner height: ", window.innerHeight)


    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    // console.log("Scrollable: ", scrollable)
    // console.log("Scrolled: ", scrolled)

    if (scrollable === Math.ceil(scrolled)) {
        alert("you are at the bottom of the page")
    }

})