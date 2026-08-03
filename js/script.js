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
              this.width=100
              this.height=100
       }

       // defining the player

       draw(){
              context.fillRect(this.position.x,this.position.y,this.width,this.height)
       }
}
//creating the player inside the canvas

// using the class player

const player = new Player()
player.draw()