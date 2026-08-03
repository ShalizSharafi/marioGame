//selected elements++++++++++++_______((_)))))))?????????////////////////////////////////////////////////////
const canvas = document.querySelector('canvas')

//game setup ++++++++++++_______((())()()(_(_(__(__(_()(_)))))))?????????////////////////////////////////////////////////////
const context = canvas.getContext('2d')
const gravity = 0.5

//defining the keys i want to monitor
const keys = {
       right:{
              pressed: false
              //tracks wheather the right key is pressed
       },
        left:{
              pressed: false
              //tracks wheather the right key is pressed
       }
}
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
              this.position.x += this.velocity.x
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


       if(keys.right.pressed){
              player.velocity.x = 5
       }else if(keys.left.pressed){
              player.velocity.x = -5
       }else player.velocity.x = 0

     
}

animate()



addEventListener('keydown',({keyCode})=>{
       console.log(keyCode)
       switch(keyCode){
              case 37 : console.log('left') ; keys.left.pressed = true; break;
              case 38 : console.log('up'); player.velocity.y -= 20 ; break;
              case 39 : console.log('right');keys.right.pressed = true;break;
              case 40 : console.log('down') ;break
       }

       console.log(keys.right.pressed)
})
///stpping the player from moving on the x axis

addEventListener('keyup',({keyCode})=>{
       console.log(keyCode)
       switch(keyCode){
              case 37 : console.log('left') ; keys.left.pressed = false;break;
              case 38 : console.log('up'); player.velocity.y -= 20 ; break;
              case 39 : console.log('right');keys.right.pressed = false;break;
              case 40 : console.log('down') ;break
       }
       console.log(keys.right.pressed)
})