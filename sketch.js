var canvas;
var gameState, contestantCount, database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(400,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
