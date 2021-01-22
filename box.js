class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.2,
            restitution:1.0
        }
        this.box=Bodies.rectangle(x,y,40,50,options)
        
        World.add(world,this.box)

    }
    display(){
        var pos=this.box.position;
        var angle=this.box.angle;
        rectMode(CENTER)
        push();
        fill("blue")
        strokeWeight(4)
        translate(pos.x,pos.y);
        rotate(angle);
       
        rect(0,0,40,50)
        pop();
    }
}