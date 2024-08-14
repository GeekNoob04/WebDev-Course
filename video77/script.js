function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finishing this function
    let viewNumber
    if(views<1000){
        viewNumber = views
    }
    else if(views>1000000){
        viewNumber = views/1000000 + "M"
    }
    else{
        viewNumber = views/1000+"K"
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
            <div class="capsule">${duration}</div>
    </div>

    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewNumber} views . ${monthsOld} months ago</p>
    </div>

</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard("Introduction to Beckend | Sigma Web Dev video #1", "CodeWithHarry", 560000, 7, "31;22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")