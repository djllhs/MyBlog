 阅读《编写维护的javascript》一书简要笔记
=====================================
一、基本的格式化
-------------------------------------
1. 代码缩进，建议4个空格字符为一个缩进层次，或使用tab缩进（一般编辑器默认为4个空格）；
2. 语句结尾，建议不要省略分号；
3. 行的长度，建议不超过80个字符；
4. 换行，通常在运算符后换行，下一行会增加两个层级的缩进。例外，当给变量赋值时，第二行的位置应当和赋值运算符的位置保持对齐；
5. 空行
     * 在方法之间。
     * 在方法中的局部变量和第一条语句之间。
     * 在多行或单行注释之前。
     * 在方法内的逻辑片段之间插入空行。
6. 命名，通常采用驼峰式命名。
     * 变量名，驼峰命名，前缀为名词，如myName。
     * 函数和方法名，驼峰命名，前缀为动词，如isEnabled
     * 常量，使用大写字母和下划线来命名，下划线用以分隔单词，如MAX_COUNT。
     * 构造函数，大驼峰命名，常为名词（前面一般会有new运算符），如Person。
     * 直接量，
        * 字符串，双引号或单引号括起来，多行时，使用 + 连接；
        * 数字，禁止八进制直接量；
        * null，可看成对象的占位符。
        *　undefined，禁止使用特殊值undefined，可有效地确保只有一种情况下typeof才会返回”undefined“；当变量未声明时，若使用了一个可能赋值为一个对象的变量事，将其赋值为null。
        * 对象直接量，直接将所有的属性写在花括号里。
        * 数组直接量，使用方括号将数组初始元素括起来。
        * 对象直接量，直接将所有的属性写在花括号里。
        * 数组直接量，使用方括号将数组初始元素括起来。

二、注释
-------------------------
1. 单行注释，// 这是单行注释。 （三种使用方式）
    * 独占一行，解释下一行代码。这行注释之前总有一个空行，且缩进和下一行代码保持一致。
    * 在代码行的尾部，代码结束到注释之间至少有一个缩进。注：代码及注释不应超过单行最大字符数限制，若超过，则将注释提于代码行上方。
    * 注释大段代码
2. 多行注释，以斜杠加星号开头，星号加斜杠结束。总在代码段之前，注释和代码之间没有空行间隔。多行注释前应有空行，且缩进和要描述的代码一致。
3. 使用注释，一般原则是在需要让代码变得更清晰时添加注释。
    * 代码难于理解时使用。
    * 代码可能被文认为是错误的时使用。     
    * 代码为浏览器特性hack时使用。
4. 文档注释，以斜杠加两个星号开头，接下来是描述信息，其中使用@符号来表示一个或多个属性。使用时，应该确保对如下内容添加注释。
    * 所有的方法，应当对方法、期望的参数和可能的返回值添加注释描述。
    * 所有的构造函数，应当对自定义类型和期望的参数添加注释描述。
    * 所有包含文档化方法的对象，若一个对象包含一个或多个附带文档注释的方法，则也应适当地针对文档生成工具添加文档注释。

三、语句和表达式
-------------------------------
1. 花括号的对齐方式：
    * 左花括号放置在块语句中第一句代码的末尾（推荐）

            if(condition) {
                doSomething();
            } else {
                doSomething();
            }

    * 左花括号放置于块语句首行的下一行

            if (condition)
            {
                doSomething();
            }
            else
            {
                doSomething();
            }

2. 块语句间隔
    * 在语句名、圆括号和左花括号之间没有空格间隔。

            if(condition){
                doSomething();
            }

    * 在括左圆括号之前和右圆括号之后各加一个空格。(推荐)

            if (condition) {
                doSomething();
            }

    * 在左圆括号后和右圆括号前各添加一个空格。

            if ( condition ) {
                doSomething();
            }

3. switch语句
    * 缩进：
        * 每条case语句相对于switch关键字都缩进一个层级
        * 从第二天case语句开始，每条case语句前后各有一个空行
    * case语句的“连续执行”，即case语句结束后不添加break之类的结尾。 只要加上合适的注释，是可以不加结尾的。

4. for循环
    * 使用break可立即退出循环
    * 使用continue可立即退出本次循环

5. for-in循环，遍历对象属性，返回属性名，不应该遍历数组。使用hasOwnProperty（）过滤出实例属性

四、变量、函数和运算符
----------------------------
1. 变量声明
    * 局部变量放在函数首顶部
    * 使用单var语句

2. 函数声明
    * 先声明后使用函数
    * 函数声明应当在条件语句外部使用

3. 函数调用间隔
    * 左括号之后和右括号之前加上空格

            doSomething(function() {});
            doSomething({ item: item });
            doSomething([ item ]);
            doSomething('hi');

4. 立即调用的函数 将函数用圆括号包裹起来

            var value = (function() {
                // 函数体
                return {
                    messgae: 'hi'
                }
            }());

5. 严格模式 'use strict'
    * 不用在全局作用域
    * 多个函数应用严格模式可使用立即执行的函数


            (function() {
                'use strict';
                function doSomething() {

                }
                function doSomethingElse() {

                }
            })

6. 相等 推荐用 === 和 !== ,不涉及强转

五、UI层的松耦合
-------------------------
1. 松耦合：修改一个组件而不需要更改其他组件
2. 将JavaScript从css中抽离（避免使用css表达式）
3. 将css从JavaScript中抽离（不应当直接操作样式）
4. 将JavaScript从HTML中抽离（最好将所有的JavaScript代码都放入外置文件中）
5. 将HTML从JavaScript中抽离
    * 从服务器加载，即将模板放置于远程服务器（大量），少量的标签可采用客户端模板
    * 简单客户端模板，一些带“插槽”的标签片段，注释是和元素及文本一样的DOM节点；将模板数据嵌入到HTML页面里的第二个方法是使用一个带有自定义type属性的<script>元素
    * 复杂客户端模板，如Handlebars。

六、避免使用全局变量
----------------------
1. 全局变量带来的问题
    * 命名冲突
    * 代码的脆弱性，当定义函数时，最好尽可能多的将数据置于局部作用域内
    * 难以测试，确保函数不会对全部变量有依赖，增强代码的可测性

2. 意外的全局变量
    * 总是使用var来定义变量，哪怕是定义全部变量
    * 给未声明的变量赋值，使用工具时会报警告。严格模式下会报错

3. 单全局变量方式， 最佳方法是依赖尽可能少的全局变量，即只创建一个全局变量。如jQuery
    * 命名空间，将功能按照命名空间进行分组
    * 模块，一种通用的功能片段，如YUI，AMD等。使用AMD，需要模块加载器，如Dojs，RequireJs

4. 零全局变量， 使用一个立即执行的函数调用并将所有脚本放入其中

七、事件处理
-----------------------------
1. 隔离应用逻辑，将应用逻辑和事件处理的代码拆分开来
2. 不要分发事件对象，最好让时间处理程序成为杰出到event对象的唯一函数。事件处理程序应当在进入应用逻辑之前针对event对象执行任何必要的操作，包括阻止默认事件或阻止事件冒泡，都应当直接包含在事件处理程序中

八、避免“空比较”
---------------------------------
1. 检测原始值,使用typeof
    * 字符串，返回“string”
    * 数字，返回“number”
    * 布尔值，返回“boolean”
    * undefined，返回“undefined”
2. 检测引用值（对象），Object、Array、Date、Error,使用instanceof，语法 value instanceof constructor。 不仅检测构造这个对象的构造器，还检测原型链，也可检测自定义的类型。但是不检测函数和数组
3. 检测函数，使用typeof，返回“function”。在IE8和更早版本的IE浏览器中，检测DOM节点，返回“Object”（可用in）

        if("querySelectorAll" in document){
            //代码块
        }
4. 检测数组


        function isArray(value) {
            return Object.prototype.toString.call(value) === "[object Array]";
        }

5. 检测属性，使用in，如果实例对象的属性存在、或者继承自对象的原型，dou返回true。若检测实例对象的某个属性时候存在，用hasOwnProperty（）方法。在IE8以及更早版本，DOM对象并非继承自Object。


        //、如果沟不确定是否为DOM对象
        if("hasOwnProperty" in Object && Object.hasOwnProperty('related')){
            // 代码块
        }
九、将配置数据从代码中分离出来
-----------------------------
1. 配置数据，是应用中写死的值，如URL，需要展现给用户的字符串，重复的值，设置（比如每页的配置项），任何可能发生变更的值
2. 抽离配置数据， 即将配置数据拿到外部
3. 保存配置数据， 放在单独的文件中。存储数据方式，
    * JSON 文件


            {
                "MSG_INVALID_VALUE": "Invalid value",
                "URL_INVAILID": "/errors/invalid.php",    
                "CSS_SELECTED": "selected"
            }

    * JSONP, 将JSON结构用一个函数包装起来

            myFunc({
                "MSG_INVALID_VALUE": "Invalid value",
                "URL_INVAILID": "/errors/invalid.php",    
                "CSS_SELECTED": "selected"
            })

    * 纯JavaScript，将JSON对象赋值为一个变量，这个变量会被程序用到

            var config = {
                "MSG_INVALID_VALUE": "Invalid value",
                "URL_INVAILID": "/errors/invalid.php",    
                "CSS_SELECTED": "selected"
            }

十、抛出自定义错误
-----------------------
1. 在js中抛出错误，Error对象
        throw new Error("Something bad happened")

    注：没有通过try-catch语句捕获，抛出任何值都将引发一个错误

2. 抛出错误的好处，能够明确问题所在。推荐总是在错误消息中包含函数名称以及函数失败的原因
3. 何时抛出错误，最佳地方在工具函数中。经验法则：
    * 一旦修复了一个很难调试的额错误，尝试增加一两个自定义错误
    * 如果正在写代码，思考一下：“我希望[某些事情]不会发生，如果发生，代码会一团糟”
    * 若在编写别人的代码，思考一下其使用方式，在特定的情况下抛出错误
4. try-catch语句。可能引发错误的代码放在try块中，处理错误的代码放在catch中。finally放一定会被执行的代码

	        try{
	            SomethingThatMightCauseAnError();
	        }catch(ex){
	            handleError(ex);
	        }finally{
	            continueDoingOtherStuff();
	        }


5. 错误类型

        Error  //所有错误的基本类型
        EvalError  // 通过eval()函数执行代码发生错误时抛出
        RangeError // 一个数字超出它的边界时抛出
        ReferenceError // 期望的对象存在时抛出
        SyntaxError // 给eval()函数传递的代码中有语法错误时抛出
        TypeError  // 变量不是期望的类型时抛出
        URIError // 给encodeURI()、encodeURIComponent()、decodeURI()或者decodeURIComponent()等函数传递格式非法的URI字符串时抛出

十一、不是你的对象不要动
-----------------------
1. 什么是你的。若你的代码没有创建这些对象，不要修改它们。包括：
    * 原生对象（Object、Array 等）
    * DOM对象（如document）
    * 浏览器对象模型（BOM）对象（例如，window）
    * 类库的对象
2. 原则
    + 不覆盖方法
        
        // 不好的写法
        document._originalGetElementById = document.getElementById;
        document.getElementById = function (id) {
            if( id == 'window'){
                return window;
            }else{
                return document._originalGetElementById(id);_
            }
        }_;

    + 不新增方法
        
        //不好的写法，在DOM对象上增加了方法
        document.sayImAwesome = function() {
            alert("You're awesome");
        }

        // 不好的写法，在原生对象上增加了方法
        Array.prototype.reverseSort = function() {
            return this.sort().reverse();
        }

        // 不好的写法，在库对象上增加了方法
        YUI.doSomething = function() {
            // 代码
        }
    + 不删除方法，一是给对应的名字赋值为null，二是使用delete操作符在删除（如果在prototype的属性或方法上使用delete是不起作用的）
3. 更好的途径，基于对象的继承和基于类型的继承
    * 基于对象的继承，也叫原型继承，一个对象继承另外一个对象是不需要调用构造函数的。如ECMAScript5的Object.create()方法
        
        var person = {
            name: "Bob",
            sayName: function(){
                console.log(this.name);
            }
        }
        // 创建新对象 继承自person，可访问其属性和方法
        var myPerson = Object.create(person);
        myPerson.sayName();  // Bob

        // 重新定义 myPerson.sayName，则切断对person.sayName的访问
        myPerson.sayName = function(){
            console.log('mom');
        }
        myPerson.sayName(); // mom
        person.sayName(); // Bob

        // Object.create()可指定第二个参数，该参数对象中的属性和方法将添加到新的对象中
        var myPerson = Object.create(person,{
            name: {
                value: 'Dad'
            }
        })
        myPerson.sayName(); // Dad
        person.sayName(); // Bob

    * 基于类型的继承，通过构造函数实现，需要访问被继承对象的构造函数。需要两步：首先，原型继承；然后，构造器继承。构造器继承是调用超类的构造函数时传入新建的对象作为其this的值

        function Person(name){
            this.name;
        }

        function Author(name){
            Person.call(this,name); // 构造器继承
        }

        Author.prototype = new Person();

    * 门面模式，为一个已存在的对象创建一个新的接口。门面实现一个特定的接口，让一个对象看起来像另一个对象，就称作适配器。门面和适配器唯一的不同是前者创建新接口，后者实现已存在的接口
        
        function DOMWrapper(ele){
            this.ele = ele;
        }

        DOMWrapper.prototype.addClass = function(className){
            ele.className += " " + className; 
        }

        DOMWrapper.prototype.remove = function() {
            this.ele.parentNode.removeChild(this.ele);
        }

        var wrapper = new DOMWrapper(document.getElementById('my-div'));
        wrapper.addClass('selected');
        wrapper.remove();
4. 阻止修改，三种锁定修改的级别，每种都拥有两个方法：一个用来实施操作，一个用来检测是否应用了相应的操作
    - 防止扩展，禁止为对象“添加”属性和方法，但已存在的属性和方法是可以被修改或删除
        
        //Object.preventExtension(), Object.isExtensible()
        var person = {
            name: 'bob'
        };
        //锁定对象
        Object.preventExtensions(person);
        console.log(Object.isExtensible(person)); // false
        person.age = 25; //正常情况悄悄的失败，除非在strict模式下抛出错误

    - 密封，类似“防止扩展”，而且禁止为对象“删除”已存在的属性和方法
        
        //Object.seal()密封对象,Object.isSealed()
        Object.seal(person);
        console.log(Object.isExtensible(person)); // false
        console.log(Object.isSealed(person)); // true
        delete person.name; // false 正常情况悄悄的失败，除非是在strict模式下抛出错误
        person.age = 25;

    - 冻结，类似“密封”，而且禁止为对象“删除”已存在的属性和方法（所有字段均为只读）
        //Object.freeze()冻结，Object.isFrozen()
        Object.freeze(person);
        console.log(Object.isExtensible(person)); // false
        console.log(Object.isSealed(person)); // true
        console.log(Object.isFrozen(person)); // true
        person.name = 'mom'; // 
        person.age = 25; //同上
        delete person.name; //同上

        // 被冻结的对象同时也是不可扩展和被密封的，故调用Object.isExtensible()返回false，调用Object.isSealed()返回true
        // 被冻结的对象和被密封的对象最大的区别在于，前者禁止任何对已存在属性和方法的修改
十二、浏览器嗅探
---------------------------
