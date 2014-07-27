/**
 *
 *绘制方块函数
 *
 * @author:WaterBear
 * */

/***画布的全局变量****/

var Global = {
    cvsGame:null,
    cxtGame:null

};

Global.cvsGame = document.getElementById("GameFrame");
Global.cxtGame = Global.cvsGame.getContext('2d');

/****图像的全局变量*****/

var ImageList = image();//调用diamonds.js文件中的image()函数


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

/******初始化游戏窗口画布******/

var InitcvsGame = function(point,map,n) {
    Global.cvsGame.width = Global.cvsGame.width;
    Global.cvsGame.height = Global.cvsGame.height;
    drawMap(map,n);
    drawAct(point,n);
};



/****测试函数****/
$('#start').click(function() {

   drawAct(diaPoint(4),2);

});




