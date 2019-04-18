//参数
//配置参数和默认参数
function Drag(){
    this.obj=null;
    this.disx=0;
    this.disy=0;
    this.settings={ //默认参数
        toUp:function(){},
        toDown:function(){}
    }
}
Drag.prototype.init=function(opt){
    var This=this;
    This.obj=document.getElementById(opt.id);
    extend(opt,This.settings);
    This.obj.onmousedown=function(ev){
        var ev=ev||window.event;
        This.fnDown(ev);
        This.settings.toDown();
        document.onmousemove=function(ev){
            var ev=ev||window.event;
            This.fnMove(ev);
        }
        document.onmouseup=function(){
            This.fnUp(ev);

            This.settings.toUp();
        }
        return false;
    }
}
Drag.prototype.fnDown=function(ev){
    this.disx=ev.clientX-this.obj.offsetLeft;
    this.dixy=ev.clientY-this.obj.offsetTop;
}
Drag.prototype.fnMove=function(ev){
    this.obj.style.left=ev.clientX-this.disx +'px';
    this.obj.style.top=ev.clientY-this.disy+'px';
}
Drag.prototype.fnUp=function(ev){
   document.onmousemove=null;
   document.onmouseup=null;
}





 function extend(fobj,cobj){
    for (const attr  in fobj) {
        if (fobj.hasOwnProperty(attr)) {
            cobj[attr] = fobj[attr];
        }
    }
}
 
