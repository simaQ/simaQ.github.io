---
layout: post
category : css
title: 总结使div居中的方法
tagline: "Supporting tagline"
tags : [css]
---
{% include JB/setup %}

总结下使DIV居中的不同方法。

#### 1.the better method:

&nbsp;&nbsp;可参考[How to Center Anything With CSS](http://designshack.net/articles/css/how-to-center-anything-with-css)

1. **设置高度**
2. 运用以下规则
{% highlight css linenos %}  
    position: absolute;
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: auto;
{% endhighlight %}

&nbsp;&nbsp;多浏览器兼容性： display: table  or display: inline-block;

#### 2.宽度高度不固定DIV水平居中

&nbsp;&nbsp;html部分
{% highlight css linenos %} 
     <div class="container">
     <div class="center"><a href="#">1</a><a href="#">2</a><a href="#">3</a>
     <div style="clear:both"></div></div>  
{% endhighlight %}
&nbsp;&nbsp;css部分
{% highlight css linenos %} 
     .container{width:500px;height:80px;background:#C2300B;margin-left:50px;padding-top:10px;text-align:center;}
     .center{display:inline-block;border:2px solid #fff;}
     .center{_display:inline;} /*针对ie6 hack*/
     .center a{float:left;border:1px solid #fff;padding:5px 10px;margin:10px;color:#fff;text-decoration:none;}
{% endhighlight %}
&nbsp;&nbsp;**代码要点：**
+ 父容器container加css属性 text-align:center;
+ 子容器center加css属性display:inline-block;
+ .center{_display:inline;} 为针对ie6的hack

#### 3.宽度高度不固定DIV垂直居中
     
&nbsp;&nbsp;html部分
{% highlight css linenos %} 
     <div id="vc"><div id="vci"><div id="content">
     我们垂直居中了，我们水平居中了
     </div></div></div>
{% endhighlight %}   
&nbsp;&nbsp;css部分
{% highlight css linenos %} 
     #vc { display:table; background-color:#C2300B; width:500px; height:200px; overflow:hidden; margin-left:50px; _position:relative; }
     #vci { vertical-align:middle; display:table-cell; text-align:center; _position:absolute; _top:50%; _left:50%; }
     #content { color:#fff; border:1px solid #fff; display:inline-block; _position:relative; _top:-50%; _left:-50%; }
 {% endhighlight %}    
&nbsp;&nbsp;**代码要点：**
+ 父容器vc的css属性 display:table;overflow:hidden;
+ 子容器vci的css属性 vertical-align:middle;display:table-cell;
+ 针对ie6的hack，vci容器的 _position:absolute;_top:50%; 和content容器的 _position:relative; _top:-50%;
+ 如果不需要水平居中的话，需要注释掉vci容器的text-align:center;_left:50%;以及content的display:inline-block;_left:-50%;

#### 4.宽度高度固定水平垂直居中
     
&nbsp;&nbsp;html部分
{% highlight css linenos %} 
     <div class="guding"><div class="gd">居中了</div></div>
{% endhighlight %}     
&nbsp;&nbsp;css部分
{% highlight css linenos %} 
    .guding{width:500px;height:200px;background:#c2300b;margin-left:50px;position:relative;}
    .gd{width:50px;height:20px;background:#fff;position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-25px;}
{% endhighlight %}    
&nbsp;&nbsp;**代码要点:**
+ 父容器要用相对定位position:relative;否则的话子元素会相对于浏览器窗口进行绝对定位。
+ 子容器绝对定位，top:50%;left:50%;margin-top，margin-left的值取该容器高度，宽度的一半的负值。