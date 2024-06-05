
/*

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].getComputedStyle() .get("transform"[0].x.value - 300)}px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)";
        }
    })
})

*/




const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) >= 0) {
            const transformValue = getComputedStyle(movieLists[i]).getPropertyValue('transform');
            if (transformValue !== 'none') {
                const matrix = new WebKitCSSMatrix(transformValue);
                movieLists[i].style.transform = `translateX(${matrix.m41 - 200}px)`;
            } else {
                movieLists[i].style.transform = `translateX(-300px)`;
            }
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});


const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.article-container,.aside-container i,.aside-container,.menu-list-item a,.toggle")

ball.addEventListener("click",function(){
    items.forEach((item,index)=> item.classList.toggle("active"))
})