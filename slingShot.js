class slingShot{
    constructor(b1,b2){
        var options = {
            bodyA : b1,
            pointB : b2,
            stiffness:0.04,
            length:10
        }
        this.bodyA = b1;
        this.bodyB = b2;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(b1){
        this.sling.bodyA = b1;
    }

    display(){
        if(this.sling.bodyA){
        var p1 = this.sling.bodyA.position;
        var p2 = this.sling.bodyA.position;
        strokeWeight(7);
        stroke(150);
        line(p1.x,p1.y,p2.x,p2.y);
        }
    }
}