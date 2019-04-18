/* 
    继承之类式继承（把js中的构造函数看成类）--适合有new的 
    var F=function(){}
    F.prototype=faa.prototype;
    Cbb.prototype=new F();  //通过中转类 只继承方法
    Cbb.prototype.constructor=Cbb;//修正指向
*/
function Faa(){
    this.name='xixi';
}
Faa.prototype.showName=function(){
    alert(this.name);
}
function Cbb(){
    Faa.call(this);//属性继承
}

//Cbb.prototype=new Faa();//将父类的属性方法都指向子类的原型-->导致父类属性公用的问题

var F=function(){}
F.prototype=faa.prototype;
Cbb.prototype=new F();  //通过中转类 只继承方法
Cbb.prototype.constructor=Cbb;//修正指向

var b=new Cbb();
alert(b.constructor);//原本指向 Aaa  需要修正