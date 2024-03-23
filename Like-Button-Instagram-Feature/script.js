var contain = document.querySelector(".container")
var lovebtn = document.querySelector(".container>i")

contain.addEventListener("dblclick", function () {
    lovebtn.style.transform = "translate(-50%,-50%) scale(1)";
    lovebtn.style.opacity = 0.8
    setTimeout(function () {
        lovebtn.style.opacity = 0
    },1000)
    // setTimeout(function () {
    //     lovebtn.style.transform="translate(-50%,-50%)"
    // },2000)
})

var main = document.querySelector("#main");
var pointer = document.querySelector(".cursor")
// since it will added on the entire window mzin will be considered
main.addEventListener("mousemove", function (dets) {
     pointer.style.left = dets.x+"px"
     pointer.style.top = dets.y+"px"

})
