//selected elements++++++++++++_______((_)))))))?????????////////////////////////////////////////////////////
const canvas = document.querySelector('canvas')

//game setup ++++++++++++_______((())()()(_(_(__(__(_()(_)))))))?????????////////////////////////////////////////////////////
const context = canvas.getContext('2d')
const gravity = 1.5



//tracking how far the player is moved how far the platform has scrolled on the screen
let scrollOffset = 0



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

//creating the platforms which are going to be moving and scrolling so our player can jump on them and avoid pits of death
class Platform{
       constructor({x,y}){
              this.position = {
                     x:x,
                     y:y
                     //x
                     //y
              }

              this.width = 200
              this.height = 20
       }


       draw(){
              context.fillStyle = 'blue'
              context.fillRect(this.position.x,this.position.y,this.width,this.height)
       }
}
//creating the platform class







//implementing and using the class player

const player = new Player()
const platforms = [new Platform({x:200, y:100}),new Platform({x:500, y:200}),new Platform({x:700, y:300}),new Platform({x:800, y:50}),new Platform({x:1000, y:200}),new Platform({x:1300, y:500}),new Platform({x:1500, y:300}),new Platform({x:1800, y:100}),new Platform({x:1900, y:350}),new Platform({x:1950, y:100}),new Platform({x:2000, y:300})]

//making an animation loop to get the player moving
function animate(){
       requestAnimationFrame(animate) //changing the players properties over time
       context.clearRect(0,0,canvas.width,canvas.height) // clear the canvas but allow us to draw after
       player.update()
       platforms.forEach((platform)=>{
              platform.draw()
       })

       if((keys.right.pressed ) && (player.position.x <= 400)){
              player.velocity.x = 5
       }else if((keys.left.pressed) && (player.position.x > 100) ){
              player.velocity.x = -5
       }else {
              player.velocity.x = 0
              //whemver we hit the edges, whenever we're inside the else statement
              if(keys.right.pressed){
                     scrollOffset += 5
                     platforms.forEach((platform)=>{
                            platform.position.x -= 5
                     })
              }else if(keys.left.pressed){
                     scrollOffset += 5
                    platforms.forEach((platform)=>{
                      platform.position.x += 5
                    })
              }
       }


       if(scrollOffset <= 2100){
              console.log('you win')
       }



       //detect collision between the rectangular platfroms
       //player's position + player'height, wheather the bottom of the player is less than the top of our platform //So condition 1  says the player is above the platform, condition 2 askes if the player falling down the platform, 3rd condition says once the player's off the platform it needs to fall down, so we're tracking the postion on the x axis. not that player.position.x gives the left edge of the player and player.position.x + player.width gives its left edge position. likewise with th eplatform. 

     platforms.forEach((platform)=>{
         if(((player.position.y + player.height) <= (platform.position.y)) && ((player.position.y + player.height + player.velocity.y) >= platform.position.y) &&(player.position.x + player.width >= platform.position.x) &&(player.position.x <= platform.position.x + platform.width)){
              player.velocity.y = 0
       }
     })


}

animate()



addEventListener('keydown',({keyCode})=>{
       console.log(keyCode)
       switch(keyCode){
              case 37 : console.log('left') ; keys.left.pressed = true; break;
              case 38 : console.log('up'); player.velocity.y -= 5 ; break;
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
              case 38 : console.log('up'); player.velocity.y -=10  ; break;
              case 39 : console.log('right');keys.right.pressed = false;break;
              case 40 : console.log('down') ;break
       }
       console.log(keys.right.pressed)
})

