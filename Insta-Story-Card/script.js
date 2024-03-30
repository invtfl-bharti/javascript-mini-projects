var arr = [
    {
    dp:"https://media.istockphoto.com/id/1318055664/photo/indian-female-tourist-in-mid-20s-sightseeing-in-barcelona.jpg?s=612x612&w=0&k=20&c=M7uTks3y4pUfwa4x65cnUw5XJD9Zmj_XH17YlIoc308=",story:"https://i.pinimg.com/564x/ea/68/59/ea6859c8f86a0ab71dd7da8b7c587866.jpg"
    },
    {
    dp:"https://us.123rf.com/450wm/boggy22/boggy221710/boggy22171000264/87494205-smiling-young-woman-using-phone-in-park-at-cold-winter-day.jpg?ver=6",story:"https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
    {
    dp:"https://us.123rf.com/450wm/talashow/talashow1601/talashow160100242/50657260-young-woman-in-a-white-hat-and-a-jacket-on-a-background-of-a-winter-forest-close-up-photo.jpg?ver=6",story:"https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
    dp:"https://i.pinimg.com/564x/eb/62/28/eb62282dd1c555573de0c45c8ee0e4dc.jpg",story:"https://t4.ftcdn.net/jpg/06/46/71/59/360_F_646715997_GZjdcCMF3rEpRrz81SwcddwpepvB9Jf0.jpg"
    }
]
var instaStory = document.querySelector("#insta-story")
var clutter =""
arr.forEach(function (elem,index) {
    clutter+=`<div class="story">
                <img id="${index}" src="${elem.dp}" alt="" srcset="">

            </div>`
})
instaStory.innerHTML = clutter;

instaStory.addEventListener("click", function (dets) {
    var value = (arr[dets.target.id].story)
})

instaStory.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function () {
        document.querySelector("#full-screen").style.display="none"
    },3000)
});


