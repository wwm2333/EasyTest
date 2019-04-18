/* 
    继承之原型继承  适合不需要new的对象
    function cloneobj(obj){
    var F=new function(){};
    F.prototype=obj;
    return new F();
}
*/
var Faa={
    name:'xixi'
};
var b=cloneobj(Faa);
b.name='child';//可修改 不影响父类属性

function cloneobj(obj){
    var F= function(){};
    F.prototype=obj;
    return new F();
}