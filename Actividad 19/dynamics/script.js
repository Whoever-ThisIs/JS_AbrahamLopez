const width = 1000;
const height = 600;

let canvas = document.getElementById("tablero");
canvas.width = width;
canvas.height = height;
let context = canvas.getContext("2d");
let derechaY = height / 2 - 50;
let velocidad_x,velocidad_y;
let marcadorDer = 0;
let marcadorIzq = 0;

//Controles de las paletas
document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
	if (e.key == "w" || e.key == "W") {
		if (leftY > 0) {
			leftY -= 50;
			left(leftY);
		}
	}
	if (e.key == "s" || e.key == "S") {
		if (leftY < height - 100) {
			leftY += 50;
			left(leftY);
		}
	}
	if (e.key == "i" || e.key == "I") {
		if (derechaY > 0) {
			derechaY -= 50;
			right(derechaY);
		}
	}
	if (e.key == "k" || e.key == "K") {
		if (derechaY < height - 100) {
			derechaY += 50;
			right(derechaY);
		}
	}
})

var leftY = (height / 2) - 50;
//Dibujar paletas
function left(PosY) {
	context.beginPath();
	context.rect(85, PosY, 15, 75);
	context.fillStyle = 'white';
	context.fill();
}
left(leftY);

function right(Y) {
	context.beginPath();
	context.rect(width - 100, Y, 15, 75);
	context.fillStyle = 'white';
	context.fill();
}
right(derechaY);



//Dibujar la ball
function Pelota(x, y) {
	context.fillRect(x, y, 10,10)
	context.fillStyle = 'white';
}

//Objeto pelota
let ball = {
	x: width / 2,
	y: height / 2,
	r: 15,
	//Movimiento de la bolita
	velocidad_x: 5,
	velocidad_y: 5
}
//Pelota(ball.x, ball.y, ball.r);

//Mover la ball :)
function Movimiento() {
	//El error era aqui
	ball.x += ball.velocidad_x;
	ball.y += ball.velocidad_y;
	//Choco con la parte inferior o superior
	if (ball.y - ball.r === 0 || ball.y + ball.r === height) {
		ball.velocidad_y *= -1

	}
	//Choca con la paleta izquierda
	if (ball.x - ball.r == 100 &&

		(ball.y > leftY && ball.y < leftY + 100)
	) {
		ball.velocidad_x *= -1;
	}
	//Choca con la paleta derecha

	if (ball.x + ball.r == width - 100 &&
		(ball.y > derechaY && ball.y < derechaY + 100)
	) {
		ball.velocidad_x *= -1;
	}
	//Se supone que esta funcion la dibuja :(
		//Checar Anotaciones
	if (ball.x == 0) {
		console.log("Punto Paleta Derecha")
    marcadorDer++;
		ball.x=width/2;
		ball.y=width/2;
	} else if (ball.x == width) {
		console.log("Punto Paleta Izquierda")
    marcadorIzq++;
		ball.x=width/2
		ball.y=width/2
		//Dibujar una nueva pelota y y++
	}
	Pelota(ball.x, ball.y);
}

//Primera direccion Pelota
if (Math.random() > 0.5) {
	velocidad_x = 5;
} else {
	velocidad_x = -5;
}
if (Math.random() > 0.5) {
	velocidad_y = 5;
} else {
	velocidad_y = -5;
}

function Marcador() {
  let score = document.getElementById("score");
  score.innerText = `${marcadorIzq} - ${marcadorDer}`;
}

//Acciones del juego
function juego() {
	context.clearRect(0, 0, width, height);
	Pelota(ball.x, ball.y);
	right(derechaY);
	left(leftY);
	Movimiento();
  Marcador();
	//se mueve pero no lo dibuja :(
	//La funcion Pelota creo que la dibujaba
	requestAnimationFrame(juego);
	//Console.log(ball.x)
}
requestAnimationFrame(juego);
