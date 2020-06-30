class Bob {
    constructor(x, y,) {
        var options = { 
          'isStatic' : false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.105
        }
        this.body = Bodies.circle(x, y, 85, options);
        this.width = 85;
        this.height = 85;
        this.bodyDiameter = 85;
       // this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
       // pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.width, this.height);
        pop();
      }
    }
    