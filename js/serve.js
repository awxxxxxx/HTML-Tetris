/**
 *游戏的关于方块变换的部分
 *移动和旋转函数
 *@author:Waterbear
 */



/**
 *全局变量
 *@Gamemap:游戏地图
 *@points:方块的坐标
 * */

var Service = {
    GameMap:null,
    points:null
};

/****游戏中的二维数组保存着地图****/

Service.GameMap = [12][18];


/******初始化地图*******/

var mapInit = function(map) {
    for(var i = 0; i < 12; ++i){
        for(var j = 0; j < 18; ++j){
            map[i][j] = false;
        }
    }

};

/****判断是否超出了地图*****/

var isOverMap = function(x,y,map) {
    return x < 0 || x > 11 || y < 0 || y > 17 || map[x][y];
};

/****移动函数*****/

var move = function(moveX,moveY,map) {

    for(var i = 0; i < Service.points.length; i++){
        var nowX = Service.points[i].x + moveX;
        var nowY = Service.points[i].y + moveY;
        if(this.isOverMap(nowX, nowY,map)){
            return false;
        }
    }

    for(var i = 0; i < Service.points.length; i++){
        Service.points[i].x += moveX;
        Service.points[i].y += moveY;
    }
    return true;
};


/*****旋转函数******/

var Rotate = function(map,n) {

    //类型是4不能旋转

    if(n === 4){
        return;
    }

    //用笛卡尔坐标进行旋转

    for(var i = 1; i < Service.points.length; i++){
        var nowX = Service.points[0].y + Service.points[0].x - Service.points[i].y;
        var nowY = Service.points[0].y - Service.points[0].x + Service.points[i].x;
        if(isOverMap(nowX, nowY, map)){
            return;
        }
    }
    for(var i = 1; i < Service.points.length; i++){
        Service.points[i].x = nowX;
        Service.points[i].y = nowY;
    }
};

/****初始化要显示方块的函数***/

var InitAct = function(n) {
    Service.points = new diaPoint(n);//调用diamonds.js文件中的diaPoint函数返回坐标
}

/****返回当前的方块坐标****/

var getPoints = function() {
    return Service.points;
};

/****返回地图数据****/

var getMap = function() {
    return Service.GameMap;
};



