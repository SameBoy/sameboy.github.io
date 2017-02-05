---
layout: page
title: Changes
permalink: /changelog/
---

{% for post in site.posts %}
{% if post.group == "Downloads" %}
<h2>{{ post.title | replace: "SameBoy", "Version" }}</h2>
{{ post.content }}
{% endif %}
{% endfor %}