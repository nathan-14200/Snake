class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.queue = [];
        this.eaten = [];
        this.tummy = false;
    };

    move() {
        if(this.tummy == true){
            this.queue.unshift([this.x, this.y]);
            this.tummy = false;
        }else if(this.queue.length > 0){
            let temp = this.queue.pop();
            fill(0);
            square(temp[0], temp[1], cell);
            temp[0] = this.x;
            temp[1] = this.y;
            this.queue.unshift(temp);
        }
        this.x += this.speedX;
        this.y += this.speedY;
    };

    display() {
        fill('#fae');
        square(this.x, this.y, cell);
    }

    control() {
        if(keyCode == UP_ARROW && this.speedY == 0){
            this.speedX = 0;
            this.speedY = -cell;
        }else if(keyCode == DOWN_ARROW && this.speedY == 0){
            this.speedX = 0;
            this.speedY = cell;
        }else if(keyCode == LEFT_ARROW  && this.speedX == 0){
            this.speedX = -cell;
            this.speedY = 0;
        }else if(keyCode == RIGHT_ARROW && this.speedX == 0){
            this.speedX = cell;
            this.speedY = 0;
        }
    }

    eat(){
        this.tummy = true;
        
    }

    checker() {
        if(this.x < 0 || this.x > 399 || this.y < 0 || this.y > 399){
            inGame = false;
        }else{
            this.queue.forEach(pos => {
                if(snake.x == pos[0] && snake.y == pos[1]){
                    inGame = false;
                }
            });
        }
    }
   
    showQueue(){
        this.queue.forEach(p => {
            fill(255);
            square(p[0], p[1], cell);
        });
    }
};