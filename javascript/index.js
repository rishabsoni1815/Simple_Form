var robot =require("robotjs");
var fs=require("fs");
var screen =robot.getScreenSize();
setTimeout(handlepaint,2000);
function handlepaint(){
    robot.moveMouseSmooth(32,744);
    robot.mouseClick();
    setTimeout(() => {   robot.typeString("paint");
    robot.keyTap("enter");
    setTimeout(writeHi,2000);
 }, 1000);
    
    
}
function writeHi(){
    robot.moveMouseSmooth(400,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(400,550);
    robot.mouseToggle("up","left");
   
    robot.moveMouseSmooth(400,450);
    robot.mouseToggle("down","left");
    robot.dragMouse(550,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(550,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(550,550);
    robot.mouseToggle("up","left");
    
    robot.moveMouseSmooth(650,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(750,350);
    robot.mouseToggle("up","left");
    
    robot.moveMouseSmooth(700,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(700,550);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(650,550);
    robot.mouseToggle("down","left");
    robot.dragMouse(750,550);
    robot.mouseToggle("up","left");

    setTimeout(openChrome,2000);
}
    function openChrome(){
        robot.moveMouseSmooth(32,744);
        robot.mouseClick();
        setTimeout(() => {   robot.typeString("chrome");
        robot.keyTap("enter");
        setTimeout(openTabs,2000);
     }, 1000);
    }
function openTabs(){
    var rdata=fs.readFileSync("./chrome.json");
    var tabs=JSON.parse(rdata);
    for(var i=0;i<tabs.length;i++){
        for(var j=0;j<tabs[i].length;j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            if(j<tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }
        }
    }
    setTimeout(openNotepad,2000);
}
function openNotepad(){
    robot.moveMouseSmooth(32,744);
    robot.mouseClick();
    setTimeout(() => {   robot.typeString("notepad");
    robot.keyTap("enter");
    setTimeout(writeNotepad,2000);
 }, 1000);
}
function writeNotepad(){
    robot.typeString("The System is ready to use.")
}