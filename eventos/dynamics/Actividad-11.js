let focus = document.getElementById("focus");
focus.onfocus = () => {
    focus.setAttribute("value","Ahora estoy en focus :))")
}

focus.onblur = () => {
    focus.setAttribute("value","Ya no estoy en focus :((")
}

let doubleClick = document.getElementById("doubleClick");
doubleClick.ondblclick = () => {
    doubleClick.innerText = "Me picaste dos veces jiji"
}

let keypress = document.getElementById("keypress")
document.onkeypress = (event) => {
    keypress.setAttribute("value",parseInt(keypress.getAttribute("value")) + 1) ;
}

let keydown = document.getElementById("keydown")
document.onkeydown = (event) => {
    rgb = keydown.getAttribute("value");
    rgb = rgb.substr(5);
    rgb = rgb.replace(")","")
    rgb = rgb.replace("%","")
    rgb = rgb.split(",");
    switch(event.keyCode){
        case 37:
            rgb[0] = (parseInt(rgb[0]) + 5 <= 260) ? parseInt(rgb[0]) + 5 : rgb[0];
            break;
        case 38:
            rgb[1] = (parseInt(rgb[1]) + 5 <= 260) ? parseInt(rgb[1]) + 5 : rgb[1];
            break;
        case 39:
            rgb[2] = (parseInt(rgb[2]) + 5 <= 260) ? parseInt(rgb[2]) + 5 : rgb[2];
            break;
        case 40:
            rgb[3] = (parseInt(parseInt(rgb[3]) + 5) <= 100) ? parseInt(parseInt(rgb[3]) + 5) : rgb[3];
            break;
    }
    rgb = rgb.join(",");
    keydown.setAttribute("value","RGBA(" + rgb + "%)" );
    keydown.setAttribute("style","Background-color: rgb(" + rgb + "%)" );
}

let mouse = document.getElementById("mouse");
mouse.onmouseover = () => {
    mouse.setAttribute("value","Heeey quitate de encima, necesito mi espacio personal")
}

mouse.onmouseout = () => {
    mouse.setAttribute("value","Perdón por ser tan agresivo pero me incomode mucho")
}

let mousemove = document.getElementById("mousemove");
document.onmousemove = () => {
    mousemove.setAttribute("value","Has movido el mouse jiji")
}

let mouseClick = document.getElementById("mouseClick");
document.onmousedown = () => {
    mouseClick.setAttribute("value", "Estas haciendo click")
}

document.onmouseup = () => {
    mouseClick.setAttribute("value","Has dejado de hacer click")
}

let resize = document.getElementById("resize");
document.onresize = () => {
    resize.setAttribute("value","Has cambiado el tamaño de la pantalla")
}

let select = document.getElementById("scroll");
document.onscroll = () => {
    select.setAttribute("value", "Has hecho scroll")
}