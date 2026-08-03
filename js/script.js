//selected elements++++++++++++_______((_)))))))?????????////////////////////////////////////////////////////
const canvas = document.querySelector('canvas')

//game setup ++++++++++++_______((())()()(_(_(__(__(_()(_)))))))?????????////////////////////////////////////////////////////
const context = canvas.getContext('2d')
const gravity = 0.5

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
              //per px the player moves
              this.velocity={
                     x:0,
                     y:0
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
              //the bottom of the player verses the velocity is less than bottom of our canvas right here then we want to add gravity on to it. but the second the playuer reached and passed the bottom of the screen we want to set the velocity to 0
              if(this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity
               //excellerating over time, makes the speed higher, excellartaion essociated with the velocity
               else this.velocity.y = 0
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



addEventListener('keydown',({keyCode})=>{
       console.log(keyCode)
       switch(keyCode){
              case 37 : console.log('left') ; break;
              case 38 : console.log('up') ; break;
              case 39 : console.log('right');break;
              case 40 : console.log('down') 
       }
})