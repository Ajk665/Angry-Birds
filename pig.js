class Pig{
 
    constructor(x,y){
       
        var options3 ={
            restitution: 0.5,
            friction: 0.5,
            density: 1
        }
       
        this.body = Bodies.rectangle(x,y,50,50,options3);
        this.height = 50;
        this.width = 50;
        World.add(world,this.body);
    }
    display(){
         
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop()
    }

}