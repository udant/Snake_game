class Bug{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':0.4
        }    
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x=x;
        this.y=y;
       // this.image = loadImage("bug.png");
        World.add(world,this.body);

    }
    display(){
        //console.log("bug.display");  
        fill("red");
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);
    }

}