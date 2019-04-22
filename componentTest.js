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

        //创建一个容器根节点：创建的时候自动添加到指定的对象上
        //作用：作为容器；产生一个独立的私有作用域（组件作用域）
       this._shadow= this.attachShadow({ //影子dom
            mode:'open'
        });
        const span=document.createElement('span');
        span.classList.add('color');
        //数据的获取 getAttribute
        const contents=JSON.parse(this.getAttribute("contents"))||['sdwsdasghadhgoiwngvks'];
        span.innerHTML=contents[0];

        //标签中嵌套的子元素
        const div=document.createElement('div');
        //div.innerHTML='<slot></slot>';//全部放到一起
        div.innerHTML="<slot name='f'></slot>";//指定插槽名，html使用时加slot属性

        const style=document.createElement('style');
        style.textContent=`
        .color{
            color:red;

        }`;
        this._shadow.appendChild(span);
        this._shadow.appendChild(style);
        this._shadow.appendChild(div);

        //组件内部的dom要通过shadow来取
        //console.log(document.querySelector('span'));//获取不到
        console.log(this._shadow.querySelector('span'));//可以取到
   
    }
    //指定要监听的属性--attributeChangedCallback
    static get observedAttributes(){
        return ['contents','a'];
    }
     //生命周期
     connectedCallback(){
         console.log("connectedCallback");
     }
     disconnectedCallback(){
        console.log("disconnectedCallback");
    }
    adoptedCallback(){
        console.log("adoptedCallback");
    }
    attributeChangedCallback(contents,oldcontent,newcontent){
        console.log("attributeChangedCallback",contents,oldcontent,newcontent);
        if(contents=='contents'){
            this._shadow.querySelector('span').innerHTML=newcontent;
        }
        
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

