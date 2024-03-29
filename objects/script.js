let box = document.getElementById("box");

let rectangle = {
  x:0,
  y:0,
  color:"red",
  setPosition: function(x,y) {
    this.x = x;
    this.y = y;
    box.style.marginLeft = `${x}`+"px";
    box.style.marginTop = `${y}`+"px";
  },
  setColor: function(clr){
    this.color = clr;
    box.style.backgroundColor = clr;
  },
  controls:function() {
    window.addEventListener("keydown",(ev)=>{
      console.log(ev.key);
      if(ev.key == "d") {
        this.x = this.x+10;
        this.setPosition(this.x, this.y);
      } else {
        if(ev.key == "a") {
          this.x = this.x-10;
          this.setPosition(this.x, this.y);
        }
      }
      if(ev.key == "w") {
        this.y = this.y-10;
        this.setPosition(this.x, this.y);
      } else {
        if(ev.key == "s") {
          this.y = this.y+10;
          this.setPosition(this.x, this.y);
        }
      }
    });
  }

}

// rectangle.setColor("red");
rectangle.controls();
