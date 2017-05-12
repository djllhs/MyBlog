/**
 * Created by admin on 2017/5/4.
 */
const game = {
    data: [], // 单元格中的所有数字
    score: 0,
    state: 1,
    RUNNING: 1,
    GAME_OVER: 0,
    PLAYING: 2,//动画正在播放中
    start: () => {
        // console.log(game);
       game.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        //在两个随机位置生成2或4
       game.score = 0;
       game.state =game.RUNNING;
        const div = document.getElementById('gameOver');
        div.style.display = 'none';
        game.randomNum();
        game.randomNum();

        game.updateView(); // 更新页面
    },
    isFull: () => { // 判断是否已满
        /*遍历data数组，只要发现 == 0，就返回false，
         * 如果退出循环，返回true*/
        for (let row = 0; row < 4; row++) { //4行
            for (let col = 0; col < 4; col++) { // 4列
                if (game.data[row][col] == 0) {
                    return false;
                }
            }
        }
        return true;
    },
    randomNum: () => { //在随机位置生成2或4
        if (game.isFull()) {
            return; // 如果满了就不用生成
        }
        /*循环条件： true
         * 随机在0到3行中生成一个行下标row
         * 随机在0到3列中生成一个列下标
         * 如果该位置==0，随机选择2或4
         * 如果Math.random()<0.5，选2，否则选4
         * 放入该位置 退出循环*/
        while (true) {
            const row = Math.floor(Math.random() * (3 - 0 + 1) + 0),
                col = Math.floor(Math.random() * (3 - 0 + 1) + 0);
            if(game.data[row][col] == 0){
                game.data[row][col] = Math.random() < 0.5 ? 2 : 4;
                break;
            }
        }

    },
    /*将游戏数据更新页面*/
    updateView: () => {
        /*step1： 遍历二维数组中的元素，
         * step2： 找到当前元素对应的div，拼div的id： c+row+col
         * step3： 将当前元素的值放入div中
         *          若当前值为0，放入空，反之放入当前值
         * step4： 根据当前元素值修改div样式类
         *           div.className=‘类名’；
         *           若当前值为0，className=‘cell’
         *           否则className=‘cell n’+当前值*/
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                const div = document.getElementById("c" + row + col);
                div.innerHTML =game.data[row][col] == 0 ? '' : game.data[row][col];
                div.className =game.data[row][col] == 0 ? 'cell' : 'cell n' +game.data[row][col]
            }
        }

        /*放入分数*/
        const span = document.getElementById('score');
        span.innerHTML =game.score;

        /*判断游戏结束
         *   结束则game.state=GAME_OVER, 显示游戏结束界面*/
        if (game.isGameOver()) {
           game.state =game.GAME_OVER;
            const div = document.getElementById('gameOver'),
                finalScore = document.getElementById('finalScore');
            finalScore.innerHTML = game.score;
            div.style.display = 'block';
        }

    },
    /*游戏是否结束*/
    isGameOver: () => {
        /*继续则为false，反之为true*/
        if (!game.isFull()) {
            return false;
        }
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (col < 3) { // 检查右侧相邻
                    if (game.data[row][col] == game.data[row][col + 1]) {
                        return false;
                    }
                }
                if (row < 3) { // 检测下方相邻
                    if (game.data[row][col] == game.data[row + 1][col]) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    /*是否可以左移*/
    canLeft: () => {
        /*遍历数组（最左侧除外），只要发现任意元素左侧数 == 0或者当前值 == 左侧值,return true;若循环正常结束，return false*/
        for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
                if (game.data[row][col] != 0) {
                    if (game.data[row][col - 1] == 0 ||game.data[row][col] ==game.data[row][col - 1]) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    /*左移所有行*/
    moveLeft: () => {
        if (game.canLeft()) {
            for (let row = 0; row < 4; row++) {
                game.moveLeftInRow(row);
            }
           game.state = game.PLAYING;
            animation.start();
            setTimeout(() => {
                game.state = game.RUNNING;
                game.randomNum();
                game.updateView();
            }, animation.times * animation.interval);
        }
    },
    /*左移一行*/
    moveLeftInRow: row => {
        /*从0位置开始到2结束，遍历row中的每个元素，获得一个下一个不为0的元素的nextCol下标
        * 如果nextCol==-1，break
        * 否则判断合并
        *    如果自己==0，用下一个元素的值替换自己，将下一个元素的值设为0，让cok留在原地；cl--
        *    如果自己==下一个元素，将自己*2；将下一个元素设为0*/
        for (let col = 0;col <= 2; col++){
            const nextCol = game.getNextRight(row, col);
            if(nextCol == -1) {
                break;
            }else {
                if(game.data[row][col] == 0){
                   game.data[row][col] = game.data[row][nextCol];
                   game.data[row][nextCol] = 0;
                    animation.addTask('' + row + nextCol, '' + row + col);
                    col--;
                }else if(game.data[row][col] == game.data[row][nextCol]){
                    game.data[row][col] *= 2;
                    game.score += game.data[row][col];
                    game.data[row][nextCol] = 0;
                    animation.addTask('' + row + nextCol, '' + row + col);
                }
            }

        }
    },
    /*获得一个下一个不为0的元素的nextCol下标*/
    getNextRight: (row, col) => {
        /*获取当前行中，指定位置右侧第一个不为0的数，返回下一个为0的数的位置
        * 遍历当前位置右侧每个元素，只要发现!= 0 就返回其位置下标nextCol 退出循环，返回-1*/
        for (let i = col + 1; i < 4; i++){
            if(game.data[row][i] != 0){
                return i;
            }
        }
        return -1;
    },

    /*能否右移*/
    canRight: () => {
        for (let row = 0; row < 4; row ++){
            for (let col = 2; col >= 0; col --){
                if(game.data[row][col] != 0){
                    if(game.data[row][col + 1] == 0 || game.data[row][col] == game.data[row][col+1]){
                        return true;
                    }
                }
            }
        }
        return false;
    },
    /*右移所有行*/
    moveRight: () => {
        if(game.canRight()){
            for (let row = 0; row < 4; row++) {
                game.moveRightInRow(row);
            }
            game.state = game.PLAYING;
            animation.start();
            setTimeout(() => {
                game.state = game.RUNNING;
                game.randomNum();
                game.updateView();
            }, animation.times * animation.interval);
        }
    },
    /*右移当前行*/
    moveRightInRow: row => {
        /*从右向左遍历检查，（最左边除外）*/
        for (let col = 3; col >= 0; col--){
            const nextCol = game.getNextLeft(row, col);
            if(nextCol == -1){
                break;
            }else {
                if(game.data[row][col] == 0) {
                    game.data[row][col] = game.data[row][nextCol];
                    game.data[row][nextCol] = 0;
                    animation.addTask("" + row + nextCol,"" + row + col);
                    col++;
                }else if(game.data[row][col] == game.data[row][nextCol]){
                    game.data[row][col] *= 2;
                    game.score += game.data[row][col];
                    game.data[row][nextCol] = 0;
                    animation.addTask("" + row + nextCol,"" + row + col);
                }
            }
        }
    },

    getNextLeft: (row, col) => {
        /*从当前位置向左，找下一个不为0的数*/
        for(let i = col - 1; i >= 0; i--){
            if(game.data[row][i] != 0 ){
                return i;
            }
        }
        return -1;
    },

    /*判断是否上移*/
    canUp: () => {
        for(let row = 1; row < 4; row++){
            for( let col = 0; col < 4; col++){
                if(game.data[row][col] != 0){
                    if(game.data[row-1][col] == 0 || game.data[row][col] == game.data[row-1][col]){
                        return true;
                    }
                }
            }
        }
        return false;
    },

    /*上移所有行*/
    moveUp: () => {
        if(game.canUp()){
            for (let col = 0; col < 4; col ++){
                game.moveUpInCol(col);
            }
            game.state = game.PLAYING;
            animation.start();
            setTimeout(() => {
                game.state = game.RUNNING;
                game.randomNum();
                game.updateView();
            },  animation.times * animation.interval)

        }
    },
    moveUpInCol: col => {
        for(let row = 0; row < 3; row++){
            const nextRow = game.getNextDown(row, col);
            if(nextRow == -1){
                break;
            }else {
                if(game.data[row][col] == 0){
                    game.data[row][col] = game.data[nextRow][col];
                    game.data[nextRow][col] = 0;
                    animation.addTask("" + nextRow + col, "" + row + col);
                }else if(game.data[row][col] == game.data[nextRow][col]){
                    game.data[row][col] *= 2;
                    game.score += game.data[row][col];
                    game.data[nextRow][col] = 0;
                    animation.addTask("" + nextRow + col, "" + row + col)
                }
            }

        }
    },

    getNextDown: (row, col) => {
        for (let i = row + 1; i < 4; i++){
            if(game.data[i][col] != 0){
                return i;
            }
        }
        return -1;
    },

    /*判段是否下移*/
    canDown: () => {
        for(let row = 0; row < 3; row ++){
            for (let col = 0; col < 4; col++){
                if(game.data[row][col] != 0){
                    if(game.data[row+1][col] == 0 || game.data[row][col] == game.data[row+1][col]){
                        return true;
                    }
                }
            }
        }
        return false;
    },
    /*下移所有行*/
    moveDown: () => {
        if(game.canDown()){
            for(let col = 0; col < 4; col++){
                game.moveDownInCol(col);
            }
            game.state = game.PLAYING;
            animation.start();
            setTimeout(() => {
                game.state = game.RUNNING;
                game.randomNum();
                game.updateView();
            }, animation.times * animation.interval);
        }
    },
    moveDownInCol: col => {
        for(let row = 3; row > 0; row--){
            const nextRow=game.getNextUp(row,col);
            if(nextRow == -1){
                break;
            }else{
                if(game.data[row][col] == 0){
                    game.data[row][col] = game.data[nextRow][col];
                    game.data[nextRow][col] = 0;
                    animation.addTask("" + nextRow + col, "" + row + col);
                    row++;
                }else if(game.data[row][col] == game.data[nextRow][col]){
                    game.data[row][col] *= 2;
                    game.score += game.data[row][col];
                    game.data[nextRow][col] = 0;
                    animation.addTask("" + nextRow + col, "" + row + col);
                }
            }
        }
    },
    getNextUp: (row, col) => {
        for(let i = row-1; i >= 0; i--){
            if(game.data[i][col] != 0){
                return i;
            }
        }
        return -1;
    }
};

window.onload = () => {
    game.start();
    document.onkeydown = () => {
        /*step1: 先获得事件对象，所有事件发生时，都自动创建一个event对象
        *       event对象中封装了事件信息，比如鼠标的坐标，触发事件的元素，按键的编号
        *step2：获得事件对象中的按键编号，若为37，则moveLeft*/

        if(game.state != game.PLAYING){
            const event = window.event || arguments[0]; // 解决兼容性问题
            if(game.state == game.RUNNING){
                if(event.keyCode == 37) {
                    game.moveLeft();
                }else if(event.keyCode == 39){
                    game.moveRight();
                }else if(event.keyCode == 38){
                    game.moveUp();
                }else if(event.keyCode == 40){
                    // alert(1);
                    game.moveDown();
                }
            }else if(event.keyCode == 13){
                game.start();
            }

        }
    }
}

// animation
function Task(obj, topStep, leftStep) {
    this.obj = obj;
    this.topStep = topStep;
    this.leftStep = leftStep;
}

/*moveStep 方法将当前元素对象移动一步*/

Task.prototype.moveStep = () => {
    console.log(this.obj);
    // console.log(getComputedStyle);
    const style = getComputedStyle(this.obj, null),
        top = parseInt(style.top),
        left = parseInt(style.left);
    this.obj.style.top = top + this.topStep + 'px';
    this.obj.style.left = left + this.leftStep + "px";
    // console.log(style);
};

/*清除元素对象的样式，使其返回原地*/
Task.prototype.clear = () => {
    this.obj.style.left = '';
    this.obj.style.top = '';
};

const animation = {
    times: 10, // 每个动画10步完成
    interval: 10, // 10ms迈一步
    timer: null, // 保存定时器id的属性
    tasks: [], // 保存每次需要移动的任务

    addTask: (source, target) => {
        console.log(source, target);
        const sourceDiv = document.getElementById("c" + source),
            targetDiv = document.getElementById('c' + target),
            sourceStyle = getComputedStyle(sourceDiv),
            targetStyle = getComputedStyle(targetDiv),
            topStep = (parseInt(targetStyle.top) - parseInt(sourceStyle.top)) / animation.times,
            leftStep = (parseInt(targetStyle.left) - parseInt(sourceStyle.left)) / animation.times,
            task = new Task(sourceDiv, topStep, leftStep);
        animation.tasks.push(task);
    },

    start: () => {
        animation.timer = setInterval(() => {
            for (let i = 0; i < animation.tasks.length; i++) {
                animation.tasks[i].moveStep();
            }
            animation.times--;
            if (animation.times == 0) {
                for (let i = 0; i < animation.tasks.length; i++) {
                    animation.tasks[i].clear();
                }
                clearInterval(animation.timer);
                animation.timer = null;
                animation.tasks = [];
                animation.times = 10;
            }
        }, animation.interval);
    }
}

