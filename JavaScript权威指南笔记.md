# 《JavaScript权威指南》笔记

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
