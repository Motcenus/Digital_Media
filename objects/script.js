let box = document.getElementById("box");
let speed = 10;
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
        this.x = this.x+speed;
        this.setPosition(this.x, this.y);
        box.innerText = "right";
      } else {
        if(ev.key == "a") {
          this.x = this.x-speed;
          this.setPosition(this.x, this.y);
          box.innerText = "left";
        }
      }
      if(ev.key == "w") {
        this.y = this.y-speed;
        this.setPosition(this.x, this.y);
        box.innerText = "up";
      } else {
        if(ev.key == "s") {
          this.y = this.y+speed;
          this.setPosition(this.x, this.y);
          box.innerText = "down";
        }
      }
    });
  }

}

rectangle.controls();
