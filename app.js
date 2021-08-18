var point = 0;
var pic = 0;

function pop() {
    point = point + 1;
    changePic();
    document.getElementById("point").innerHTML = point
}

function changePic() {
    if (pic == 0) {
        pic = 1;
        document.getElementById("pic").style.backgroundImage = "url('img/fre2.png')";
        time();
    }
    else {
        pic = 0;
        document.getElementById("pic").style.backgroundImage = "url('img/fre1.png')";
    }
}

function time() {
    var check = true;
    let start = Date.now( );

    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10){
                check = false;
                changePic();
            }
        }
    }, 10);
}
const openMouthSound = new Audio("./img/sound-open.mp3");
const closeMouthSound = new Audio("./img/sound-close.mp3");

btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}