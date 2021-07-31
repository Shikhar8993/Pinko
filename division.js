class Division{
    constructor(x, y, w, h){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(220, 20, 117);
        stroke(18, 6, 77);
   
        rect(pos.x, pos.y, this.w, this.h);
        
    }
}