#《JavaScript权威指南》笔记
## 一、词法结构
###1. 字符集
*  区分大小写，关键字、变量、函数名和所有的标识符都必须采取一致的大小写形式。
*  空格、换行符和格式控制符， js一般会忽略空格和换行符，Unicode格式控制符可用在注释、字符串直接量和正则表达式直接量中，不能用在标识符（如变量名）中
*  Unicode转义序列，以\u为前缀，用法同上
###2.注释

    // 这里是单行注释
    /*这里是一段注释*/ // 这里是另一段注释
    /*
     *这又是一段注释
     *这里的注释可以连写多行
     */

###3.直接量
即程序中直接使用的数据值，如12,1.2，“hello world”等
###4.标识符和保留字
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




