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
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize;
        context.lineCap = "round";
        context.lineTo(e.clientX-deltaW, e.clientY-deltaH);
        context.stroke();
    }

    var deltaW = (window.innerWidth - 1000)/2
    var deltaH = (window.innerHeight - 600)/2
    let lineSize = 1
    let lineColor = "Black"

    document.addEventListener("keyup", (e) => {
        stopStart = false

        switch (e.code){
            case "Digit1":
                lineSize = 1;
                break;
            case "Digit2":
                lineSize = 2;
                break;
            case "Digit3":
                lineSize = 3;
                break;
            case "Digit4":
                lineSize = 4;
                break;
            case "Digit5":
                lineSize = 5;
                break;
            case "Digit6":
                lineSize = 6;
                break;
            case "Digit7":
                lineSize = 7;
                break;
            case "Digit8":
                lineSize = 8;
                break;
            case "Digit9":
                lineSize = 9;
                break;
            case "Digit0":
                lineSize = 50;
            case "KeyQ":
                lineColor = "black";
                break;
            case "KeyW":
                lineColor = "gray";
                break;
            case "KeyE":
                lineColor = "red";
                break;
            case "KeyA":
                lineColor = "orange";
                break;
            case "KeyS":
                lineColor = "yellow";
                break;
            case "KeyD":
                lineColor = "blue";
                break;
            case "KeyZ":
                lineColor = "purple";
                break;
            case "KeyX":
                lineColor = "pink";
                break;
            case "KeyC":
                lineColor = "green";
                break;
    
        }
        context.beginPath();
        stopStart = true;
        console.log(e.code)

    })


})

