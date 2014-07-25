/**
 *存放着方块的类
 *@每一种方块的坐标
 *@方块的图片路径
 *@author:Waterbear
 * */

/***方块图片的函数,返回一个图片对象***/

var image = function() {
    this.s = new Array(12);
    this.icon = new Array(12);
    for(var i = 0; i < 12; i++){
        s[i] = './image/game/' + (i+1) + '.png';
        icon[i] = new Image();
        icon[i].src = s[i];
    }
    return icon;

};

/***七种方块的坐标****/

var diaPoint = function(n) {
    var point =function(x,y) {
        this.x = x;
        this.y = y;
    }
    this.Point = new Array(7);
    this.Point[0] = [new point(4,0),new point(5,0),new point(6,0),new point(7,0)];
    this.Point[1] = [new point(4,0),new point(5,0),new point(6,0),new point(5,1)];
    this.Point[2] = [new point(4,0),new point(5,0),new point(6,0),new point(4,1)];
    this.Point[3] = [new point(4,1),new point(5,0),new point(5,1),new point(6,0)];
    this.Point[4] = [new point(4,0),new point(5,0),new point(4,1),new point(5,1)];
    this.Point[5] = [new point(4,0),new point(5,0),new point(6,0),new point(6,1)];
    this.Point[6] = [new point(4,0),new point(5,0),new point(5,1),new point(6,1)];

    return this.Point[n];

};



