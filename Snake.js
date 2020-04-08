class Snake {
  
    constructor() {
        this.body = [];
      this.body[0] = createVector(floor(w/2), floor(h/2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }
    
    setDir(x, y) {
        this.xdir = x;
      this.ydir = y;
    }
    
    update() {
        let head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    
    grow() {
        let head = this.body[this.body.length-1].copy();
      this.len++;
      this.body.push(head);
    }
    
    endGame() {
        let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
    for(let i = 0; i < this.body.length-1; i++) {
          let part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
      }
      return false;
    }
    
    eat(pos) {
        let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      return false;
    }
    
    show() {
        for(let i = 0; i < this.body.length; i++) {
          fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)
      }
    }
  
    
      



  }

  









/*class Snake{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.1,
            'friction':0.2,
            'density':0.2
        }    
       // console.log("snake.constructor"); 
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
       // this.image = loadImage("snake_head.png");
       // this.image = loadImage("snake_body.png");
        World.add(world,this.body);

    }
    display(){
        //console.log("snake.display");  
        fill("green");
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);
    }

}*/