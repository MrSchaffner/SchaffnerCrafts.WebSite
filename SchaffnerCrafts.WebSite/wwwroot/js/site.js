// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//animation


function myMove() {


    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;

    clearInterval(id);
    id = setInterval(frame, 500); //this does the animation

    function frame() {
        if (pos >= 350) {
            clearInterval(id);

        } else {
            pos=pos+1;
            elem.style.top = pos +"px";
            elem.style.left = pos + "px";
        }
    }
}
