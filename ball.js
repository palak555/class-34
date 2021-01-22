class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic:false});
        World.add(world,this.body);
        this.radius=radius;
    }

    display(){
        push ();
        fill ("red");
        circle(this.body.position.x,this.body.position.y,this.radius*2)
        pop ();
    }
}