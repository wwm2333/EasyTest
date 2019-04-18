/* 
    继承之拷贝继承 --通用
    for in 
    function extend(fobj,cobj){
    for (const attr  in fobj) {
        if (fobj.hasOwnProperty(attr)) {
            cobj[attr] = fobj[attr];
        }
    }
}
*/
///////////////////////Model///////////////////////////////////
function CreatePerson(name,sex){
    this.name=name;
    this.sex=sex;
}
CreatePerson.prototype.showName=function(){
    alert(this.name);
}

function CreateStar(name,sex,job){
    CreatePerson.call(this,name,sex);  //属性继承
    this.job=job;
}
CreateStar.prototype.showStar=function(){
    alert(this.job);
}
//方法继承
//CreateStar.prototype=CreatePerson.prototype;  -->引用赋值了，会互相影响

//for in --> 拷贝继承
extend(CreatePerson.prototype,CreateStar.prototype);

function extend(fobj,cobj){
    for (const attr  in fobj) {
        if (fobj.hasOwnProperty(attr)) {
            cobj[attr] = fobj[attr];
        }
    }
}

//////////////例：拖拽/////////////////////

function Drag(id){
    this.obj=document.getElementById(id);
    this.disx=0;
    this.disy=0;
}
Drag.prototype.init=function(){
    var This=this;
    This.obj.onmousedown=function(ev){
        var ev=ev||window.event;
        This.fnDown(ev);

        document.onmousemove=function(ev){
            var ev=ev||window.event;
            This.fnMove(ev);
        }
        document.onmouseup=function(){
            This.fnUp(ev);
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

function DragChild(id){
    Drag.call(this,id);
}
extend(Drag.prototype,DragChild.prototype);
DragChild.prototype.fnMove=function(ev){
    var L=ev.clientX-this.disx;
    var T=ev.clientY-this.disy;
    if(L<0){
        L=0;
    }else if(L>document.documentElement.clientWidth-this.obj.offserWidth){
        L=document.documentElement.clientWidth-this.obj.offserWidth;
    }

    if(T<0){
        T=0;
    }else if(T>document.documentElement.clientHeight-this.obj.offetHeight){
        T=document.documentElement.clientHeight-this.obj.offetHeight;
    }
    this.obj.style.left=L + 'px';
    this.obj.style.top=T + 'px';
}
/* function extend(fobj,cobj){
    for (const attr  in fobj) {
        if (fobj.hasOwnProperty(attr)) {
            cobj[attr] = fobj[attr];
        }
    }
}
 */
