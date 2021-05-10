class Bird {
    constructor(x, y, width, height) {
      var options = {
      'restitution':0.04,  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      rectMode(CENTER);
      push()
      translate (pos.x,pos.y)
      rotate (this.body.angle)
      fill("red");
      rect(0, 0, this.width, this.height);
      pop()
    }
  };
  