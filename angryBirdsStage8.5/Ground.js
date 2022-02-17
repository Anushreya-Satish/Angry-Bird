class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("wall.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(10);
      stroke(0,0,0);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,600,700, this.width, this.height);
    }
  };
