AFRAME.registerComponent("rotate", {
    schema: {
      clickCounter: { type: "number", default: 0 },
    },
  
    update: function () {
        
        window.addEventListener("click", e=>{this.data.clickCounter = this.data.clickCounter + 1})

        if(this.data.clickCounter === 1){
            const rotation = {x:0 , y:20 , z:0}
            this.el.setAttribute("rotation",rotation)
        }
    }
  });