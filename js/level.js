/**
 * Created by Administrator on 2015/4/8.
 */



var game=game||{};//命名空间

///////////age///////////////
game.age=0;
///////////////////分数////////////////////
game.score=0;
game.win=false;
game.card=3;
game.level=1;
game.levellength=[,4,4,4,4];
game.level1=[
    [ 1,-1,-1,-1,-1,-1,-1,-1,-1, 1],
    [ 1,-1,-1,-1,-1,-1,-1,-1, 1,-1],
    [-1, 1,-1,-1,-1,-1,-1,-1, 1,-1],
    [-1, 1, 2, 3, 3, 3, 2, 1,-1,-1],
    [-1,-1, 1, 2,3,  3, 2, 1,-1,-1]
];


game.level2=[
    [ 1,-1,-1,-1,-1,-1,-1,-1,-1, 1],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1,-1],
    [-1, 2, 2, 2, 2, 2, 2, 2, 2,-1],
    [-1, 1, 2, 3, 3, 3, 2, 1,-1,-1],
    [-1,-1, 1, 2, 4, 4, 2, 1,-1,-1]
];
game.level3=[
    [ 1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
    [ 1,-1,-1,-1,-1,-1,-1,-1, 1,-1],
    [ 1, 2, 3, 4, 4, 4, 4, 3, 1,-1],
    [-1, 1, 2, 3, 3, 3, 2, 1,-1,-1],
    [-1,-1, 1, 2, 3, 3, 2, 1,-1,-1]
];
game.level4=[
    [-1,-1,-1, 0,-1,-1, 0,-1,-1,-1],
      [-1,-1, 0,-1,-1,-1, 0,-1,-1,-1],
    [-1, 1, 0, 1, 1, 1, 1, 0,-1,-1],
      [-1, 1, 4, 4, 4, 4, 4, 1,-1,-1],
    [-1, 1, 2, 2, 2, 2, 2, 2, 2,-1],
      [ 1,-1, 1, 2, 2, 0, 0, 1, 1,-1]
];

