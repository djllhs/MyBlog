/**
 * Created by admin on 2017/5/4.
 */
/*----方块对象----*/
// function Block(val,x, y) {
//     console.log("val==", val);
//
//     this.backgroundColor = color[val];
//     this.val = val;
//     this.x = x || 0;
//     this.y = y || 0;
// }
const color = [];
color[2] = '#F2DBB0';
color[4] = '#EFAE73';
color[8] = '#EF8E52';
color[16] = '#F69562';
color[32] = '#E4593A';
color[64] = '#F3E9A5';
color[128] = '#E3E397';
color[256] = '#EDCB5F';

const arr = [],
    defaultColor = '#CCBEB3',
    game = {
        position: [
            [0, 0], [0, 90],[0, 180],[0, 270],
            [90, 0], [90, 90], [90, 180],[90, 270],
            [180, 0],[180, 90], [180, 180],[180, 270],
            [270, 0], [270, 90],[270, 180], [270, 270],
        ], // 所有的位置
        data: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        bodyEle: document.getElementsByClassName('body')[0], // body 元素

        init: () => {
            const
                // randomDiv = document.createElement('div'), // 创建div
                random = parseInt(Math.random() * 3 + 2), // 随机值
                val = random % 2 == 0 ? random : 4,
                // blockPro = new Block(val), // 创建对象
                location = game.generateRandom(), //随机数， 在position数组中的位置
                ele = document.getElementById(location);
            // console.log(ele);
            // randomDiv.className = 'col number order0';
            // randomDiv.innerText = val;
            ele.innerText = val;

            // randomDiv.style.backgroundColor = blockPro.backgroundColor;
            ele.style.backgroundColor = color[val];
            // ele.style.left =  location % 4 * 90 + 'px';
            // ele.style.top = Math.floor(location/4) * 90 + 'px';
            // console.log(location % 4 * 90 + 'px')
            // console.log(Math.floor(location/4) * 90 + 'px')
            // game.bodyEle.appendChild(randomDiv);
            game.data[Math.floor(location/4)][location%4] = location;
            // console.log(game.data);
        },
        generateRandom: () => {
            let location = parseInt(Math.random() * 15);//随机数， 在position数组中的位置
            console.log("location==", location);

            if(arr.includes(location)){
                 location = parseInt(Math.random() * 15);
                game.generateRandom();

            }else {
                arr.push(location);
            }
            console.log(arr);
            return location;

        },
        isCanMoveDown: () => {
            let flag = false,
                data = game.data;
            arr.forEach(val => {
                let ele = document.getElementById(val);
                if(val > 11){
                    flag = false;
                }else {
                    let row = Math.floor(val / 4),
                        col = val % 4;
                    console.log("ele.innerText==", ele.innerText);
                    for(let i = row+1;i<4;i++){
                        console.log("data[row][col]","row==",row+1,"col==",col, data[i][col]);
                        if(data[i][col] != 0){
                            flag = false;
                            const nextRowEle = document.getElementById(col+row*2);
                            if(ele.innerText == nextRowEle.innerText){
                                nextRowEle.innerText = Number(nextRowEle.innerText) + Number(ele.innerText);
                            }else {

                            }
                            break;
                        }else {
                            const newVal = val + (3 - row) * 4,
                                newEle = document.getElementById(newVal);
                            console.log(newVal,ele.innerText)
                            newEle.innerText = ele.innerText;
                            console.log("newEle.innerText==",newEle.innerText)
                            newEle.style.backgroundColor = color[ele.innerText];
                            ele.innerText = null;
                            ele.style.backgroundColor = defaultColor;
                            flag = true;
                            break;
                        }
                    }
                }
            })
            console.log(flag);
            return flag;
        }

    };

game.init();
let order = 1
/* 监听键盘事件 */
document.addEventListener ('keydown', function (event) {
    const e = event || window.event ,
        initNumberDiv = document.createElement('div');

     if(e.keyCode == 40 ){
         if(game.isCanMoveDown()){
             game.init();
         }

         // console.log(game.data);
     }

}, true)
