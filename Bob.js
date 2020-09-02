class Bob {
    constructor(x, y,width){
        var options={
            'restitution' : 0.9,
            'friction' : 0,
            'density' : 1.2
        }
        this.body=Bodies.circle(x,y,width,options);
        this.width=width;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("Purple");
        stroke("Blue");
        strokeWeight(2);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.width,this.width);
        pop();
    }
}