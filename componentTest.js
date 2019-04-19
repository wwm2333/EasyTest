/**
 * 组件:自定义元素，html+,自己扩展的HTML标签
 * customElements: .define("my-element",className)
 */

 //独立元素
 //继承HTMLElement
class MyElement extends HTMLElement{
    constructor(){
        super();
        console.log('1');
    }
}

//把类注册成一个元素 my-element 需要-，全小写
customElements.define('my-element',MyElement);

//依赖元素
 //继承特定的html元素：如 HTMLDivElement
class MyDivElement extends HTMLDivElement{
    constructor(){
        super();
        console.log("依赖元素")
    }
}
customElements.define('my-div',MyDivElement,{
    extends:'div'
});

