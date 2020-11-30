class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 70, options);
        this.r = 50;
        World.add(world, this.body);
        this.image = loadImage("paper.png")
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("cyan");
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
      }
}