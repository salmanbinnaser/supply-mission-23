class Log {
    constructor(x, y, height, angle) {
      var options = {
      'restitution':0.04,
      'friction':1  
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      Matter.Body.setAngle(this.body, angle)
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push()
      translate (pos.x,pos.y)
      rotate (this.body.angle)
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop()
    }
  };
  