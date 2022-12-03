//é aqui que cria as variáveis
var jogadorAnimacao, jogador;
var estradaImagem, estradaSprite;

function preload(){
  //é aqui que carrega a imagem
  estradaImagem = loadImage("estrada.png");
  //é aqui que carrega a animação
  jogadorAnimacao = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png")
 
}

function setup(){
  createCanvas(600,400)
  //é aqui que cria a sprite da estrada
  estrada = createSprite(300,200);
  //é aqui que adiciona a imagem na sprite da estrada
  estrada.addImage(estradaImagem)
  //é aqui que define a velocidade
  estrada.velocityY = 10;
  //é aqui que cria a sprite do jogador
  jogador = createSprite(300,300);
  //é aqui que adiciona a animação do jogador na sprite
  jogador.addAnimation("correndo",jogadorAnimacao);
  //é aqui que define o tamanho
  jogador.scale = 0.5
}

function draw(){
  background(0);

  //programar para a sprite de estrada estar em um loop infinito
  if(estrada.y > 400){
     estrada.y = 300;
  }
    
  drawSprites();
}