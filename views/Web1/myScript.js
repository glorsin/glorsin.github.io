// Lori Sinclair
// 12/2/2019
// Javascript

var sinclairPic = true;
var timer = setInterval(switchImage, 5000);
function switchImage() {
    if (sinclairPic) {
        document.getElementById("showPicture").src = "./media/1960.jpg";
        sinclairPic = false;
    } else {
        document.getElementById("showPicture").src = "./media/2011g.jpg";
        sinclairPic = true;
    }
}