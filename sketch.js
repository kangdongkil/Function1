var count=0
function setup() {
 createCanvas(1500, 1650);
 background(0);

}

function draw(){
    background(0);
    fill(255);
    
    ellipse(mouseX,mouseY,100,100);
    /* count=count+3;     
    if(count>1700){
         count=-1700;
    }
   
    //doughnut #2
    fill(255);
    ellipse(100,100,200,200);
    fill(0);
    ellipse(100,100,120,120);

     //doughnut #3
    fill(255);
    ellipse(600,600,200,200);
    fill(0);
    ellipse(600,600,120,120);
    */
    for(var i=0; i<4; i=i+1 )
    drawDonut1(100,255,100,100,100);
    drawDonut1(20,100,255,50,300,100);
    drawDonut1(10,60,100,150,400,200);
    drawDonut1(30,80,55,400,500,300);
}
function drawDonut1(r,g,b,x,y)
    {//doughnut #1
        fill(r,g,b);
        ellipse(x,y,200,200);
        fill(0);
        ellipse(x,y,120,120);

    }
