
var pou,pouImg;
var fundo;
var comidas,laranjaImg, morangoImg, tenisImg,aviaoImg,lancheImg,roscaImg,balaImg;
var fundo,fundoImg;
function preload(){
  pouImg =loadImage("Pou.webp");
  fundoImg= loadImage("fundo.jpeg");
  laranjaImg= loadImage("laranja.webp");
  morangoImg= loadImage("morango.png");
  tenisImg= loadImage("tenis.png");
  aviaoImg= loadImage("aviao.jpeg");
  lancheImg=loadImage("lanche.jpeg");
  roscaImg=loadImage("doce1.webp");
  balaImg=loadImage("doce2.png");

  //carregar todas as imagens das comidas
}
function setup() {
  createCanvas(800,475);
  fundo= createSprite(400,1300);
  fundo.addImage(fundoImg);

  pou = createSprite(400,400,50,50);
  pou.addImage(pouImg);
  pou.scale=0.4;
   
 

  
}

function draw() {
  background("white");  
  drawSprites();
  pou.x= mouseX;
  comidas();
}
function comidas(){
if(frameCount % 35 === 0){
  var comidas = createSprite(200,0,10,40);
  comidas.x = Math.round(random(0,750));
  comidas.velocityY= 7
  var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: comidas.addImage(morangoImg);
      comidas.scale=0.2
              break;
      case 2: comidas.addImage(laranjaImg);
      comidas.scale=0.09
              break;
       case 3: comidas.addImage(lancheImg);
      comidas.scale=0.2
              break;
       case 4: comidas.addImage(roscaImg);
      comidas.scale=0.06
              break;
       case 5: comidas.addImage(balaImg);
      comidas.scale=0.2
              break;
       case 6: comidas.addImage(tenisImg);
      comidas.scale=0.2
                      break;
       case 7: comidas.addImage(aviaoImg);
      comidas.scale=0.1
                      break;
              default: break;
  // colocar var rand e comidas q ele pode comer
} } }