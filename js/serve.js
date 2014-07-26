/**
 *游戏的逻辑部分
 *判断能否消行，能否移动，能否变形,以及移动和旋转函数
 *@author:Waterbear
 */

/****游戏中的二维数组保存着地图****/

var GameMap = [12][18];

//初始化地图

var mapInit = function() {
    for(var i = 0; i < 12; ++i){
        for(var j = 0; j < 18; ++j){
            map[i][j] = false;
        }
    }

};

//判断是否超出了地图

var isOverMap = function(x,y,map) {
    return x < 0 || x > 11 || y < 0 || y > 17 || map[x][y];
};

//移动函数

var move = function(moveX,moveY,map) {
    for(var i = 0; i < points.length; i++){
        var nowX = points[i].x + moveX;
        var  = points[i].y + moveY;
        if(this.isOverMap(nowX, nowY, gameMap)){
            return false;
        }
    }

    for(var i = 0; i < points.length; i++){
        points[i].x += moveX;
        points[i].y += moveY;
    }

    return true;
};


