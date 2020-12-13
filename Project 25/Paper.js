class Paper {
    constructor(x, y) {
      var options = {
         isStatic:false,

        restitution:0.2,
        frictiom:0.3,
        desity:1.0,

    }
this.radius =radius
this.body=Bodies.circle(x,y,this.radius,options);
     
      World.add(world, this.body);
    }
    display(){
      fill("yellow");
      ecllipseMode(RADIUS)
      ecllipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
  };
  