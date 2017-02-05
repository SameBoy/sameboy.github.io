---
layout: page
title: Downloads
permalink: /downloads/
---

{% for post in site.posts %}
{% if post.group == page.title %}
  <h2>
    <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
  </h2>
  <p>Released {{ post.date | date: "%b %-d, %Y" }}</p>
  <ul>
    {% if post.cocoa %}
    <li><a href="{{post.cocoa}}">Download for macOS</a></li>
    {%  endif %}
    {% if post.windows %}
    <li><a href="{{post.windows}}">Download for Windows</a></li>
    {%  endif %}
    {% if post.source %}
    <li><a href="{{post.source}}">Download source code</a></li>
    {%  endif %}
    <li><a href="{{post.url}}">More info</a></li>
  </ul>
{% endif %}
{% endfor %}