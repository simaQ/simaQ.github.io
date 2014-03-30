---
layout: post
category : css
title: 使用CSS绘制箭头
tagline: "Supporting tagline"
tags : [css]
---
{% include JB/setup %}

转载于[网址](http://ourjs.com/detail/532bc9f36922aa7e1d000001)

原文介绍了使用纯CSS绘制各种箭头的方法，在此基础上，本文再加上使用CSS3的方法

## 基本原理

通过截取border的部分拐角实现。

### 梯形

<p id="demo1"  markdown="1"></p>
{% highlight css linenos %}  
    #demo1 {
        border: 10px solid black;
        width: 10px;
        height: 10px;
        border-left-color: red; 
    } 
    
    <div id="demo1"></div>
{% endhighlight %}

### 三角形

<p id="demo2"  markdown="1"></p>
{% highlight css linenos %}  
    #demo2 {
        border: 10px solid #fff;
        border-left-color: red;
        width: 0;
        height: 0;
    }
    
    <div id="demo2"></div>
{% endhighlight %}
### 任意角度的三角形

调整边框的宽度就可以配置出任意角度的三角形（这里的角度是指三角形三个角的度数）

<p id="demo3"  markdown="1"></p>
{% highlight css linenos %}  
    #demo3 {
        border: 10px solid transparent;
        border-left: 20px solid #000;
        width: 0;
        height: 0;
    }

    <div id="demo3"></div>
{% endhighlight %}
### 通过CSS的伪元素实现

<span id="demo4"  markdown="1">伪元素实现</span>
{% highlight css linenos %}  
    #demo4 {
        position: relative;         
    }

    #demo4:after {
        border: 10px solid transparent;
        border-left-color: red;
        position: absolute;
        width: 0;
        height: 0;
        content: "";
    }

    <span id="demo4">伪元素实现</span>
{% endhighlight %}
### 伪元素实现三角线箭头

通过伪元素绘制出的两个，一个与背景色相同覆盖部分红色箭头，形成三角线

<span id="demo5"  markdown="1">伪元素实现2</span>
{% highlight css linenos %}  
    #demo5 {
        position: relative;         
    }
    
    #demo5:after, #demo5:before {
        border: 10px solid transparent;
        border-left: 10px solid #fff;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: -20px;
        content: ' '
    }

    #demo5:before {
        border-left-color: #f00;
        right: -26px;
    }

    <span id="demo5">伪元素实现2</span>
{% endhighlight %}
### 三角线分割的Tab页

<p>
<ul id="demo6"  markdown="1">
<li>TAB1</li>
<li>TAB2</li>
<li>TAB3</li>
<li>TAB4</li>
</ul>
</p>
{% highlight css linenos %}  
    ul#demo6 {
        list-style: none;
        height: 24px;
        overflow: hidden;
    }

    #demo6 li {
        float: left;
        padding-left: 12px;
        position: relative;
        margin: 0 20px 12px -19px;
    }

    #demo6 li:after, #demo6 li:before {
        border: 10px solid transparent;
        border-left: 10px solid #fff;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: -20px;
        content: ' '
    }

    #demo6 li:before {
        border-left-color: blue;
        right: -21px;
    }

    <ul id="demo6">
        <li>TAB1</li>
        <li>TAB2</li>
        <li>TAB3</li>
        <li>TAB4</li>
    </ul>
{% endhighlight %}
### 三角形跟矩形组合成提示框

这里还有另一种效果，使用三角形跟矩形组合成提示框，代码来自这篇文章： [Css arrows and shapes without markup](http://www.yuiblog.com/blog/2010/11/22/css-quick-tip-css-arrows-and-shapes-without-markup/)

<p id="demo"  markdown="1"></p>
{% highlight css linenos %}  
    #demo {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        position: relative;
        border: 4px solid #333;
    }

    #demo:after, #demo:before {
        border: solid transparent;
        content: ' ';
        height: 0;
        left: 100%;
        position: absolute;
        width: 0;
    }

    #demo:after {
        border-width: 9px;
        border-left-color: #ccc;
        top: 15px;
    }

    #demo:before {
        border-width: 14px;
        border-left-color: #333;
        top: 10px;
    }

    <div id="demo"></div>
{% endhighlight %}
### CSS3 transform实现

使用旋转
<p id="demo7"  markdown="1"></p>
{% highlight css linenos %}  
    #demo7 {
        border:#666 solid;
        border-width:2px 2px 0 0;
        width:15px;
        height:15px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    <div id="demo7"></div>
{% endhighlight %}