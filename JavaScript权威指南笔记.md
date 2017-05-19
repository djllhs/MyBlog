# 《JavaScript权威指南》笔记

@(我的笔记)

## 一、词法结构
### 1. 字符集
*  区分大小写，关键字、变量、函数名和所有的标识符都必须采取一致的大小写形式。
*  空格、换行符和格式控制符， js一般会忽略空格和换行符，Unicode格式控制符可用在注释、字符串直接量和正则表达式直接量中，不能用在标识符（如变量名）中
*  Unicode转义序列，以\u为前缀，用法同上
### 2.注释

    // 这里是单行注释
    /*这里是一段注释*/ // 这里是另一段注释
    /*
     *这又是一段注释
     *这里的注释可以连写多行
     */

### 3.直接量
即程序中直接使用的数据值，如12,1.2，“hello world”等
### 4.标识符和保留字
1. 标识符
+ 必须以字母、下划线（_）或美元符号（$）开始
+ 数字不允许作为首字符

2. 保留字

		break     delete    function    return    typeof
		case      do        if          switch    var
		catch     else      in          this      void
		continue  false     instanceof  throw     while
		debugger  for       new         true      with
		default   finally   null        try


- ECMAScript5 关键字

			class  const  enum  export  extends  import  super

- 严格模式下的保留字

			implements let private public  yield  interface  package  protected static

- JavaScript预定义的全局变量和函数

			arguments           encodeURI             Infinity   Number         RegExp
			Array               encodeURIComponent    isFinite   Object         String
			Boolean             Error                 isNaN      parseFloat     SyntaxError
			Date                eval                  JSON       parseInt       TypeError
			decodeURI           EvalError             Math       RangeError     undefined
			decodeURIComponent  Function              NaN        ReferenceError URIError

3. 可选的分号

		// 第一个分号可省略
		a = 3;
		b = 4;

		// 第一个分号不能省略
		a = 3; b = 4;
* 以“（”、“[”、“/”、“+”或“-”开始，建议加上分号
* 在return、break和continue后的表达式之间不能有换行

## 二、类型、值和变量
数据类型： 原始类型和对象类型
原始类型： 数字、字符串、null、undefined
### 1. 数字
+ 整型直接量
	- 十进制，数字序列
	- 十六进制，以“0x”或“0X”为前缀，由0~9和a（A）~f（F）构成
+ 浮点型直接量
	- 含小数点，有整数和小数部分
	- 指数记数，实数后跟e或E，再跟正负号，再加一个整型的指数， 如 6.02e23
+ 算数运算，溢出、下溢或被零整除不报错
	- 溢出，值为Infinity（无穷大），或-Infinity（负无穷大）
	- 下溢，结果无限接近0，比js能表示的最小值还小。此时返回0或负零
	- 被零整除，返回Infinity或-Infinity。0/0 返回NaN

			Infinity                                       // 建一个可读/写的变量初始化为Infinity
			Number.POSITIVE_INFINITY                       // 同样的值，只读
			1 / 0                                          // 同样的值
			Number.MAX_VALUE + 1                           // Infinity

			Number.NEGATIVE_INFINITY                       // 负无穷大
			-Infinity
			-1 / 0
			-Number.MAX_VALUE - 1

			NaN                                            //将一个可读/写的变量初始化为NaN
			Number.NaN                                     // 同样的值，只读
			0 / 0                                          // NaN

			Numer.MIN_VALUE / 2                            // 发生下溢， 为0
			-Number.MIN_VALUE / 2                          // 负零
			-1 / Infiity                                   // 负零
			-0                     
 - NaN 和任何值都不等，包括本身。判断是否为NaN，使用 x != x，true则为NaN，反之亦然。isNaN（）函数
 - isFinite（），参数不为NaN，Infinity或-Infinity时为true
+ 二进制浮点数和四舍五入错误
二进制浮点数不能精确表示类似0.1这样简单的数字，计算结果也不精确

### 2. 文本
* 字符串直接量，即由单引号或双引号括起来的字符序列
	注： ECMAScript3中，字符串直接量必须写在一行中。
			ECMAScript5中，可拆分为数行，每行必须Yi反斜线（\）结束
* 转义字符

		\o                        //NULL字符
		\b                        //退格符
		\t                        //制表符
		\n                        //换行符
		\v                        //垂直制表符
		\f                        //换页符
		\r                        //回车符
		\"                        //双引号
		\'                        // 单引号或撇号
		\\                        // 反斜线

* 字符串的使用
	+ 字符串连接，+
	+ 字符串长度， length属性
### 3.  布尔值，true和false
undefined， null，0，-0，NaN，""  ---> false
所有其他值，包括所有对象（数组）---> true
### 4.  null和undefined
* null，描述“空值”，typeof null --> "object"
* undefined，表示值的空缺，未定义，变量没有初始化。 typeof undefined --> "undefined"
null == undefined but  null !== undefined
### 5. 不可变的原始值和可变的对象引用
* 原始值是不可更改的：任何方法都无法更改一个原始值
* 原始值的比较是值的比较
* 对象的比较是引用的比较，如比较两个认读的对象或者数组

		function equalArrays(a, b){
			if(a.length != b.length ) return false;
			for(var i = 0; i < a.length; i++)
				if(a[i] !== b[i]) return false;
			return true;
		}

### 6.类型转换
| 值              | 转换为字符串 | 数字| 布尔值 | 对象|
| -------------| ----------------: | :-----| :-------- | -----|
| undefined    | “undefined” | NaN | false | throws TypeError |
| null         | "null" | 0 | false | throws TypeError |
| true | "true" | 1 | | new Boolean(true)|
| false | "false" | 0 | | new Boolean(false)|
| ""(空字符串) | | 0 | false | new String("")|
| "1.2"(非空，数字) |  | 1.2 | true |  new String("1.2") |
| "one"(非空，非数字) | | NaN | true | new String("one") |
| 0 | "0" | | false | new Number(0) |
| -0 | "0" | | false |new Number(-0)|
| NaN | "NaN" |  | false | new Number(NaN) |
| Infinity | "Infinity" | | true | new Number(Infinity)|
| -Infinity | "-Infinity" | | true | new Number(-Infinity)|
| 1(无穷大，非零) | "1" | | true | new Number(1)|
| {} (任意对象) | 参考6.3 | 参考6.3 | true| |
| [] (任意数组) | "" | 0 | true| |
| [9] (1个数字元素) | "9" | 9 | true | |
| ['a'] (其他数组) | 使用join()方法| NaN | true | |
| function(){} (任意函数)| 参考6.3 | NaN | true| |

* 6.1. 转换和相等性 ，一个值转换为另一个值并不意味着两个值相等
* 6.2
	+ 显示类型转换，最简单的方法是使用Boolean()、Number()、String()或Object()函数。注：除了null或undefined之外的任何值都具有toString（）方法
	+ 隐式类型转换，如使用一元"+"，一元"!"。 Number类定义的toString（）可接受表示转换基数的可选参数，parseInt（）第二个可选参数也为转换基数
* 6.3 对象转换为原始值。
  + 对象转换布尔值：所有的对象都转换为true
  + 对象转换字符串和数字：
 对象到字符串，先toString(),若没有该方法则valueOf（）。否则抛出类型错误异常。
对象到数字，先valueOf(),若没有该方法则toString（），否则抛出类型错误异常。
	  - toString()，返回一个反映这个对象的字符串
		  * 数组类的toString()方法将每个数组元素转换为字符串，并在元素之间添加逗号后合并成结果字符串
		  * 函数类的toString()方法返回了这个函数的实现定义的表示方式，即该函数的JavaScript源代码字符串
		  * 日期类的toString()方法返回一个可读的日期和时间字符串
		  * RegExp类的toString()将其转换为表示正则表达式直接量的字符串

					 [1, 2, 3].toString()  // "1,2,3"
					 (function(x) { f(x); }).toString(); // "function(x){\n f(x); \n}"
					 /\d+/g.toString(); // "/\d+/g"
					 new Date(2010, 0, 1).toString(); // "Mon Jun 19 2017 00:00:00 GMT+0800 (中国标准时间)"
	  - valueOf()，返回对象本身，日期类返回1970.01.01以来的毫秒数

				var now = new Date()
				typeof(now + 1);  // "string", "+"将日期转换为字符串
				typeof(now - 1); // "number"， “-”使用对象到数字的转换
				now == now.toString(); // true， 隐式的和显示的字符串转换
				now > (now - 1); // true， “>” 将日期转换为数字
* 6.4 变量声明，使用关键字var来声明 ，一个var可声明多个变量，也可将变量的初始赋值和变量声明合写在一起。未赋值的初始值为undefined
* 6.5 变量作用域，全局变量拥有全局作用域，函数体内的变量是局部变量，函数参数也是局部变量，作用域为该函数。在函数体内，局部变量的优先级高于同名的全局变量
	* 函数作用域和声明提前。函数朱用语是指在函数内声明的所有变量在函数体内始终是可见的。声明提前是指变量在声明之前可以使用，实际上是变量被提前至函数体的顶部或者全局顶部进行声明，当然值为undefined

			var scope = 'global';
			function f(){
				console.log(scope); // undefined
				var scope = 'local';
				console.log(scope); // local
			}
	* 作为属性的变量，使用var声明的变量不能通过delete删除。在非严格模式给一个未声明的变量赋值，可以删除
	* 作用域链，是一个对象列表或者链表。在js的最顶层代码中，作用域链由一个全局对象组成。在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象。在一个嵌套的函数体内，作用域链上至少有三个对象.
