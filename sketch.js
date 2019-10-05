
let cell = 20;
let inGame = true;
let snake = new Snake();
let fruit = new Fruit();
let stop = 0;

function setup(){
    createCanvas(400, 400);
    frameRate(10);
};


function draw () {
    background(0);
    if(inGame){
        fruit.display();
        snake.move();
        snake.display();
        snake.showQueue();
        //console.log(snake.x);
        if(snake.x == fruit.x && snake.y == fruit.y){
            snake.eat();
            fruit.respawn();
        }
        snake.control();
        snake.checker();
    } else if(stop == 0){
        let but = document.createElement("button");
        but.innerHTML = "Try again?";
        but.setAttribute("id", "Mybut");
        document.querySelectorAll("body")[0].appendChild(but);
        let el =  document.getElementById("Mybut");
        el.addEventListener("click", () => {
            location.reload();
        });
        stop = 1};
};