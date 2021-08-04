class polygon{
    constructor(){
        this.body = Bodies.rectangle(100,500,30,30,{'restitution':0.8,'friction':1.0,'density':20.0});
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
    }
}