//selected elements++++++++++++_______((_)))))))?????????////////////////////////////////////////////////////
const canvas = document.querySelector('canvas')

//game setup ++++++++++++_______((())()()(_(_(__(__(_()(_)))))))?????????////////////////////////////////////////////////////
const context = canvas.getContext('2d')


//make the canvas squared
canvas.width = innerWidth
canvas.height = innerHeight
//make the canvas squared

//creating the player inside the canvas
class Player{
       //firing the properties added to the player
       constructor(){
              this.position={
                     x:100,
                     y:100
              }
              this.velocity={
                     x:0,
                     y:1
              }
              this.width=30
              this.height=30
       }

       // defining the player

       draw(){
              context.fillStyle='red'
              context.fillRect(this.position.x,this.position.y,this.width,this.height)
       }

       //changes our player's properties over time which separates what the player actually looks like with what we're actually updating over time
       update(){
              this.draw()
              this.position.y += this.velocity.y
       }
}
//creating the player inside the canvas

//implementing and using the class player

const player = new Player()
player.update()


//making an animation loop to get the player moving
function animate(){
       requestAnimationFrame(animate) //changing the players properties over time
       context.clearRect(0,0,canvas.width,canvas.height) // clear the canvas but allow us to draw after
       player.update()
}

animate()