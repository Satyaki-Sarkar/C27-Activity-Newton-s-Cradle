class ConstrainBody {
    constructor(bodyA, bodyB, offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            stiffness : 1,
            bodyA : bodyA,
            bodyB : bodyB,
            length : 300,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.chain= Constrain.create(options);

        World.add(world,this.chain);
        console.log(options);
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }

}