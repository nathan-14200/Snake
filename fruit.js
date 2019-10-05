class Fruit {
    constructor(){
        this.x = Math.floor(Math.random() * 20)*20;
        this.y = Math.floor(Math.random() * 20)*20;
    }

    display() {
        fill('red');
        square(this.x, this.y, cell);
    }

    respawn(){
        this.x = Math.floor(Math.random() * 20)*20;
        this.y = Math.floor(Math.random() * 20)*20;
    }
}