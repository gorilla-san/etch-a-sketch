import {keys} from "./keybindings.js"

window.addEventListener("load", () => {
    const drawingBoard = document.querySelector('#canvas');
    const context = drawingBoard.getContext("2d");
    const parent = document.querySelector(".canvas")

    drawingBoard.height = parent.offsetHeight;
    drawingBoard.width = parent.offsetWidth;

    drawingBoard.addEventListener("mousemove", draw)
    let stopStart = true;
    function draw (e) {
        if (!stopStart) return;
        context.lineJoin = 'round';
        context.miterLimit = 2;
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize;
        context.lineCap = "round";
        context.lineTo(e.clientX-deltaW, e.clientY-deltaH);
        context.stroke();


        var imgData=context.getImageData(0,0,drawingBoard.width,drawingBoard.height);
        var data=imgData.data;
        for(var i=0;i<data.length;i+=4){
            if(data[i+3]<255){
                data[i]=255;
                data[i+1]=255;
                data[i+2]=255;
                data[i+3]=255;
            }
        }
        context.putImageData(imgData,0,0);


    }

    var deltaW = (window.innerWidth - 1000)/2
    var deltaH = (window.innerHeight - 600)/2
    let lineSize = 1
    let lineColor = "Black"

    document.addEventListener("keyup", (e) => {
        stopStart = false
        let keysUpdated = keys(lineSize, lineColor, e)
        lineSize = keysUpdated[1]
        lineColor = keysUpdated[0]
        context.beginPath();
        stopStart = true;
    })

})

const header = document.querySelector("header")
const title = document.createElement("h1")
title.className = ("title")
header.appendChild(title)
title.textContent = ""

const titleArray = ["E","t","c","h","-","a","-","S","k","e","t","c","h"]

const tLen = titleArray.length
let i



//PROMISE FOR DELAY BETWEEN ITTERATIONS 
const titleTimer = ms => new Promise(res => setTimeout(res, ms))
async function titleLoad () {
    for (i=0; i<tLen; i++) {
        title.textContent += titleArray[i]
        await titleTimer(100)
    }
  }
titleLoad()

//SAVING JPG FROM CANVAS

const saveButton = document.getElementById("download")

function clicked () {
        let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
        console.log(canvasUrl);
        const createEl = document.createElement('a');
        createEl.href = canvasUrl;
        createEl.download = "download-this-canvas";
        createEl.click();
        createEl.remove();
}
document.onkeydown = function (e) {
    var keyCode = e.code;
    if(keyCode == "KeyG") {
        clicked();
    }
};
saveButton.onclick = clicked;


