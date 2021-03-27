import {getRandom} from '../utils/utils'
export class Food{
    element:HTMLElement;
    constructor(){
        //获取food元素赋值给element元素
        this.element = document.getElementById('food')!;
        //获取食物的坐标
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        //食物位置0-290px
        //随机数  10的整数倍
        let top =getRandom();
        let left =getRandom();
        this.element.style.top = top +'px';
        this.element.style.left = left +'px';
    }
}
