let dockState = 4;
let dockImg = document.getElementById("dockMain")

function dockRevolve()
{
    dockState--;
    if (dockState == 0)
        dockState = 4;
    dockImg.src = "images/dock" + dockState + ".png"
}