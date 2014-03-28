---
layout: page
title: Sima 码字的地方
---
{% include JB/setup %}


<h2> 最新文章 </h2>
<ul class="posts">
  {% for post in site.posts limit:20 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

