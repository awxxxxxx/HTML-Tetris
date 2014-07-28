/***
 *游戏的总控制
 *接受键盘监听事件
 *控制游戏的开始结束暂停
 *控制游戏的逻辑层
 *@author:Waterbear
 */

function keyPress(e){
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

        startGame();
    });


});






