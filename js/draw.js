/**
 *
 *绘制方块函数
 *
 * @author:WaterBear
 * */

/***画布的全局变量****/

var Global = {
    cvsGame:null,
    cxtGame:null,
    cvsNext:null,
    cxtNext:null
};

//初始化游戏窗口画布

Global.cvsGame = document.getElementById("GameFrame");
Global.cxtGame = Global.cvsGame.getContext('2d');

//初始化下一个方块窗口画布

Global.cvsNext = document.getElementById("Next");
Global.cxtNext = Global.cvsNext.getContext('2d');

/****当前方块的全局变量*****/

var ImageList = image();//调用diamonds.js文件中的image()函数

/******下一个方块的全局变量**************/

var ImageNext = imageNext();

/****绘制活动的方块的函数******/

var drawAct = function(point,n) {
    for(var i = 0; i < point.length; ++i){
        drawDiamonds(point[i].x,point[i].y,n);
    }
};

/*****游戏开始绘制地图******/

var drawMap = function(map,n) {
    for(var x = 0; x < map.length; ++x){
        for(var y = 0; y < map[x].length; ++y){
            if(map[x][y]){
                drawDiamonds(x,y,n);
            }
        }
    }
};

/****绘制方块*****/

var drawDiamonds = function(x,y,n) {

       Global.cxtGame.drawImage(ImageList[n],x * 32,y * 32);
};

/******初始化游戏窗口******/

var InitcvsGame = function(map,point,n) {
    Global.cvsGame.width = Global.cvsGame.width;
    Global.cvsGame.height = Global.cvsGame.height;
    drawMap(map,n);
    drawAct(point,n);
};

/*******初始化下一个窗口*************/

var InitcvsNext = function(n) {
    Global.cvsNext.width = Global.cvsNext.width;
    Global.cvsNext.height = Global.cvsNext.height;
    drawNext(n);
};

/*********绘制下一个方块**********/

var drawNext = function(n) {
    var image = ImageNext[n];
    var x = parseInt((Global.cvsNext.width - image.width) / 2);
    var y = parseInt((Global.cvsNext.height - image.height) / 2);
    Global.cxtNext.drawImage(image,x,y);
};


