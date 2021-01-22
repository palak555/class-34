class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:0.04
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    
    display(){
        var point1=this.rope.bodyA.position
        var point2=this.rope.pointB
        push();
        stroke("white")
        strokeWeight(5)
        line(point1.x,point1.y,point2.x,point2.y)
        pop();
    }
}