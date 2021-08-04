class blockBlue{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,30,{isStatic:false,'friction':1.0,'density':5.0});
        this.visibility = 255;
        World.add(world,this.body);
    }

    Score(){
        if(this.visibility>0 && this.visibility<=200){
            score++;
        }
    }

    display(){
        if(this.body.speed < 3){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,20,30);
        pop();
        }
        else{
            push();
            this.visibility = this.visibility-2;
            tint(255,this.visibility);
            
            World.remove(world,this.body);
            pop();
        }
    }
}