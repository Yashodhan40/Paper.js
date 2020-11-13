class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8
          
      }
      this.body = Bodies.rectangle(x, y, 30, 20, options);
      this.width = 30;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y=mouseY;
      pos.x=mouseX;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("cyan");
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  