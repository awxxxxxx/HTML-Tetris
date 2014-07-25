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

var ImageList = image();


/****绘制方块的函数******/

var drawAct = function(context,point,image,n) {
   for(var i = 0; i < point.length; ++i){
       context.drawImage(image[n],point[i].x * 32,point[i].y * 32);

   }
};

$('#start').click(function() {
   drawAct(Global.cxtGame,diaPoint(4),ImageList,2);

});




