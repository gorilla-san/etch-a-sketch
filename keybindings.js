export function keys (lineSize, lineColor, e) {
switch (e.code){
    case "Digit1":
        lineSize = 2;
        break;
    case "Digit2":
        lineSize = 4;
        break;
    case "Digit3":
        lineSize = 8;
        break;
    case "Digit4":
        lineSize = 12;
        break;
    case "Digit5":
        lineSize = 20;
        break;
    case "Digit6":
        lineSize = 28;
        break;
    case "Digit7":
        lineSize = 44;
        break;
    case "Digit8":
        lineSize = 60;
        break;
    case "Digit9":
        lineSize = 120;
        break;
    case "Digit0":
        lineSize = 240;
        break;
    case "KeyQ":
        lineColor = "#FF0000";
        break;
    case "KeyW":
        lineColor = "#A9144A";
        break;
    case "KeyE":
        lineColor = "#8700B2";
        break;
    case "KeyR":
        lineColor = "#3D00A7";
        break;
    case "KeyA":
        lineColor = "#0000FF";
        break;
    case "KeyS":
        lineColor = "#0090D1";
        break;
    case "KeyD":
        lineColor = "#388E27";
        break;
    case "KeyF":
        lineColor = "#D0EC00";
        break;
    case "KeyZ":
        lineColor = "#FFFF00";
        break;
    case "KeyX":
        lineColor = "#FCBD00";
        break;
    case "KeyC":
        lineColor = "#FD9A00";
        break;
    case "KeyV":
        lineColor = "#FF6600";
        break;
    case "KeyB":
        lineColor = "black";
        break;
}
return [lineColor, lineSize]
}
