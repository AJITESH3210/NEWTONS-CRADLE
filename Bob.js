class Bob {
    constructor(x, y,) {
        var options = { 
          'isStatic' : false,
          'restitution':1,
          'friction':0.5,
          'density':0.105
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.width = 80;
        this.height = 80;
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
    