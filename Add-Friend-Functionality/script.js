var istatus = document.querySelector("h3")
var addFriend = document.querySelector(".btn-add")
var flag = 0

// var removefriend = document.querySelector(".btn")
addFriend.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green" 
        addFriend.innerHTML = "Remove Friend"
        flag = 1;
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red" 
addFriend.innerHTML = "Add  Friend"
        flag = 0;
    }
    
})

