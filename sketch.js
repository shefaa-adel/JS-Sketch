const canvas= document.querySelector('#eatc-a-sketch');
const ctx= canvas.getContext('2d');
const shakebutton= document.querySelector('.shake');
const MOVE_AMOUNT=10;


// set the canvas for drawing

// making a variable from the same properity
const  { width, height  }=canvas;
// const width= canvas.width;
// const height= canvas.height;


// create random x and y starting points on the canvas
let x= Math.floor(Math.random()*width);
let y= Math.floor(Math.random()*height);

ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=MOVE_AMOUNT;

let hue=0;
ctx.strokeStyle=`hsl(${hue},100%,50%)`;

// start the drawing
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();


// write a draw function
function draw(options){

    hue+=2;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;

    console.log(options.key);
    ctx.beginPath();
    ctx.moveTo(x,y);
// move x,y depending on what user do
    switch(options.key){
        case 'ArrowUp':
            y-=MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x+=MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y+=MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x-=MOVE_AMOUNT;
            break;
        default:
            break;

    }
    
   
    ctx.lineTo(x,y);
    ctx.stroke();


}

// write a handler for keys
function handleKey(e){
    
    if(e.key.includes('Arrow'))
    {
        e.preventDefault();
        draw({key:e.key});
       
    }
   
}


// listen for arrow keys
window.addEventListener('keydown',handleKey);

// claer/shake function
function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    canvas.addEventListener('animationend',
    function(){
        canvas.classList.remove('shake');

    },{once:true}
    );
}

shakebutton.addEventListener('click',clearCanvas);