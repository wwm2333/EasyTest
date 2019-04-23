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
 }

 var p=new MyClass('aa',22);
 