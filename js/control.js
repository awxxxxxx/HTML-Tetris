/***
 *游戏的总控制
 *接受键盘监听事件
 *控制游戏的开始结束暂停
 *控制游戏的逻辑层
 *@author:Waterbear
 */
/****游戏控制的全局变量*****/

var Control = {
    isStart:null,   //游戏是否开始
    timer:null,     //定时器
    isPause:false,    //游戏是否结束
    isLose:false
};


function keyPress(e){
    if(!Control.isStart){
        return;
    }
    var e = e || event;
    var currKey = e.keyCode || e.which || e.charCode;
    switch(currKey){
        case 37:moveLeft();break;
        case 38:moveUp();break;
        case 39:moveRight();break;
        case 40:moveDown();break;
    }
}

$(document).ready(function() {

    document.onkeydown = keyPress;

/****测试函数****/
    $('#start').click(function() {
        Control.isStart = true;
        Control.isPause = false;
        Control.isLose = false;
        $('#stop').text("暂停");
        startGame();
        clearInterval(Control.timer);
        Control.timer = setInterval(function() {
            if(Control.isPause){
                return;
            }
            if(Control.isLose){
                clearInterval(Control.timer);
                return;
            }
            moveDown();
        },500);
    });
    $('#stop').click(function() {
        Control.isPause = !Control.isPause;
        if(Control.isPause){
            $('#stop').text("继续");
        }
        else{
            $('#stop').text("暂停");
        }

    });
});






