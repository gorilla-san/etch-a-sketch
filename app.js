window.addEventListener("load", () => {
    const drawingBoard = document.querySelector('#canvas');
    const context = drawingBoard.getContext("2d");
    const parent = document.querySelector(".canvas")
    drawingBoard.height = parent.offsetHeight;
    drawingBoard.width = parent.offsetWidth;

    drawingBoard.addEventListener("mousemove", draw)

    function draw (e) {
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineTo(e.clientX-deltaW, e.clientY-deltaH);
        context.stroke();
    }

    var deltaW = (window.innerWidth - 1000)/2
    var deltaH = (window.innerHeight - 600)/2

    console.log(deltaH, deltaW)

})
