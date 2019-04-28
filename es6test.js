/**
 * 解构赋值
 */

//对象解构 --{}
var obj={
    name:'sss',
    age:13,
    gender:'male'
}
var {name,age}=obj;//var name=obj.name
console.log(name);
//:重命名
var {name:str}=obj;
console.log(str);
// =默认值赋值
var {c=100}=obj;//  取c属性。没有的话给默认值
//...obj 剩余模式
var {name,age,...r}=obj;
console.log(name,age,r);

var {name:n,age:a=18,...r}=obj;


//数组解构 --[]  按照顺序解构
var arr="sdfde".split("");
var [f,s,t]=arr;//s,d,f,e
var [f,s,,,last,defalut="w"]=arr;//last='e' =默认值
var [f,s,...r]=arr;//剩余模式，剩下的数组存到了r中

/**
 * Set
 *  */
var s=new Set(['a','b','c']);
console.log(s.size);//3
s.add(2).add(3).add(2);//不会重复添加  ['a','b','c',2,3]
s.add(NaN).add(NaN);// ['a','b','c',2,3,NaN] 虽然NaN!=NaN,但是set可以识别，仍然不可重复添加
var res=s.delete("b");//true ['a','c',2,3,NaN]
var res2=s.delete("z");//false ['a','c',2,3,NaN]
var res3=s.has('a');//判断是否存在
s.clear();//清空
//遍历
s.forEach(function(item,index,set){
    console.log(item,index,set);
    //set中item和index相同
});

//把set中的数据按照插入的顺序一个一个打印出来
var keys=s.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

var values=s.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

var entries=s.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

//数组去重
var array=[1,2,4,1,2,'3',Na.NaN];
var set=new Set(array);
console.log(set);//是一个set结构

/**
 * Map
 */

 var m=new Map([['name','ss']]);
 console.log(m.size);
 console.log(m.get('name'));
 m.set('age',20);
 var mm={name:'mm'};

 m.set(mm,1);

 m.delete(mm);

 m.has(mm);

 m.forEach(function(item,key,map){
    console.log(item,key,map);
 });

 var keys=m.keys();
 console.log(keys.next());

 var values=m.values();
 console.log(values.next());

 var entries=m.entries();
 console.log(entries.next());

 m.set({},2);
 m.set({},3);//创建两个新的对象作为key
 console.log(m.get({}));//undefined
 var o={};
 m.set(o,2);
 m.set(o,3);//重复key,会覆盖
 console.log(m.get(o));//可以拿到


/**
 * 遍历接口 iterator
 */
//如果实现了iterator这个接口，就可以用下面的方法遍历
 var a=[10,20,30];
 console.log(arr[Symbol.iterator]);
var k=arr.keys();
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

var k1=i(arr); //模拟一下遍历接口
console.log(k1.next());
console.log(k1.next());
console.log(k1.next());
console.log(k1.next());
function i(obj){
    var index=-1;
    return {
        next:function(){
            index++;
            return index<obj.length? {
                value:index, //视情况返回
                done:false
            }:{
                value:undefined,
                done:true
            }
        }
    }
}

//部署了iterator 接口的有 数组、类数组、set、map
for (const item of a) {
console.log(item);//item是数组中的项
}

/**
 * WeakMap 弱引用 
 */
//不可for of 遍历
var wm=new WeakMap()
var zz={
    name:'zz',
    age:22
}
var ss={
    name:'ss',
    age:12
}
wm.set(zz,'zz');
wm.set(ss,'ss');
//对象清空后，wm中没了
zz=null;
console.log(wm);

/**
 * Class
 */

 class MyClass{
     constructor(name,age){
         this.name=name;
         this.age=age;
     }
     say(){
         console.log(this.name);
     }
     static isHuman(obj){ //静态方法--MyClass.isHuman(obj)
        return obj instanceof MyClass ;
     }
 }

//静态属性
MyClass.staticProps="sdfs";

 var p=new MyClass('aa',22);

 /**
  * Symbol --代表独一无二的对象
  */

//不用new
  var s=Symbol("a"); //a只是个标识，没有任何意义
  console.log(typeof s);//"sysmbol"
  console.log(s);//Symbol(a)

  var s2=Symbol("b");
  console.log(typeof s);//"sysmbol"
  console.log(s);//Symbol(b)

  console.log(s===s2);//false

  var obj2={
      name:"sdsf"
  }
  var sy=Symbol('a');
  obj2[sy]="dfsd"; //给obj2对象一个symbol键

//取对象中symbol值
console.log(Object.getOwnPropertySymbols(obj2));//symbol属性列

var sy1=symbol("c");
//console.log(sy1+"ss"); sy1不能转换成字符串不能转换成数字

console.log(!!sy1);//true 可以转换成bool

/**
 * 字符串
 */

var str1="sdgfkadga";
console.log(str1.includes("sd"));
console.log(str1.startsWith("sd"));
console.log(str1.endsWith("dd"));
var str2=str1.repeat(3);
console.log(str2);

//``超级字符串反引号 ${}拼接
var hrml=`
<ul>
<li></li>
<li>${str1}</li>
</ul>`;


/**
 * 数组
 */

//of创建 from转换 isArray判断
var arr2= Array.of(10,20,30);
console.log(Array.isArray(arr2));

var els=document.all;
var arres=Array.from(els);//转成数组

//find
var res1= arres.find(function(item){
    return item>50;
});
//findIndex
var res2=arres.findIndex(function(item){
    return item>50;
});

/**
 * 对象
 */

 //对象类的一些简洁表示法
var s=1;
var attr="name";
var obj3={
    s, //obj={s:s}-->obj={s:1}
    fn(){
        console.log("fn");
    },
    [attr]:"ddd" ,//"name":"ddd"
}; 
//is()
console.log(Object.is(1,1))//true
console.log(Object.is(1,"1"))//true
console.log(Object.is(NaN,NaN))//true
console.log(Object.is({},{}))//false
//assign(para,obj1,obj2)   把后面的东西往前面融合赋值给第一个参数，以后面的为准
//可用于参数传递时默认参数与传入参数的选择
function move(obj){
    var defaultobj1={
        name:"sss",
        age:10
    }
    var para={};
    Object.assign(para,defaultobj1,obj);
    console.log(para);// {name:"ddd",age:10}
}
move({
    name:"ddd"

});

//keys(obj) valus(obj) entites(obj)
var obj4={
    a:1,
    b:2
}
for (var [key,value] of Objects.entries(obj4)) {
    console.log(key,value);
}

//...obj 扩展运算符 将对象打散成参数的形式 也可用于数组
var obj5={
    ...obj4, //
    c:3
}

var arr3=[1,2,4,1,3,1];
var res4=[...new Set(arr)];//去重转换成数组

/**
 * 函数
 */

 //默认值 声明时可以赋默认值
 function add(a,b=100){
     return a+b;
 }
//剩余参数
fnc(1,2,3,4);
function fnc(a,...r){
     console.log(r);//2,3,4
 }

 //箭头函数
 var add1=(a,b)=>{return a+b};
 var add2=(a,b)=>a+b;//只有一个语句的时候可以不写{}和return
 var add3=(a,b)=>{{res:a+b}};//{}返回对象
 var add4=a=>a*100;//参数只有一个可以不写（）

 var arr4=[23,4,55,66];
 var res5=arr4.filter(item=>item>20);
//this指向；没有arguments
 var fn4=(...r)=>{
     console.log(this);  //this在创建箭头函数的时候就已经订好了
    console.log(arguements);//不能用arguements
    console.log(r);//可以用剩余参数
    }

 var fn5=function(){
    console.log(this); //this谁调用就指向谁
}
document.onclick= fn4(); //window
//document.onclick= fn5(); //document

/**
 * promise
 * 异步编程解决方案
 * 状态：pending，resolved,rejected
 * p.then(()=>{})
 */

 var p=new Promise((resolve,reject)=>{
     console.log("dsdjjj");

     //成功
     return resolve("rsolved");

     //失败
    //return reject();
 });

 p.then((data)=>{
    console.log("then--"+data);
 });

 //宏任务与微任务 ： 先执行宏任务再执行微任务
 console.log(1);
  //settimeout只是把任务加到 下一轮 的任务堆中，
  //无论时间间隔是多少，在本轮任务中都不会执行
 setTimeout(() => {
    console.log(3);   
 });
 setTimeout(() => {
    console.log(4);   
 });
//宏
 var p1=new Promise((res,re)=>{
     console.log(5);
     res();
 });
 p1.then(()=>{  //then()参数中的方法是微任务
     console.log(6);
 });
//宏
 console.log(2); 

 //。。。。。上述代码执行顺序是：1--5--2--6--3--4

 //then() 返回一个Promise，他的状态就是
var p2=new Promise((res,rej)=>{
    res("成功");
    rej();
});
p2.then((data)=>{
    console.log(data);
},()=>{
    console.log("失败");
});
//失败的时候执行catch()
p2.catch(()=>{
    console.log("失败");
});

//可以链式调用
p2.then((data)=>{

})
.then(()=>{

})
.catch(()=>{

})
.finally(()=>{

});

//静态方法
 var p8= Promise.resolve();//成功状态的promise
//Promise.reject(); //失败状态的promise

var p3=new Promise((res,rej)=>{
    setTimeout(() => {
        res("a");
    }, 1000);
})
var p4=new Promise((res,rej)=>{
    setTimeout(() => {
        res("b");
    }, 1500);
})
var p5=new Promise((res,rej)=>{
    setTimeout(() => {
        res("c");
    }, 500);
})

var p6=Promise.all([p3,p4,p5]);//所有promise执行之后的结果
console.log(p6);//["a","b","c"]

var p7=Promise.race([p3,p4,p5]);//返回执行最快的promise   p5
console.log(p7);//p5

/**
 * 模块化
 */
//defer:在外链js上使用，会在其他dom和js加载完之后在加载，多个defer之间依次加载
//<script src="a.js" defer></script>

//export import

