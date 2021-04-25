---
layout: none
permalink: /raw_changes
---

{% for post in site.posts %}
{% if post.group == "Downloads" %}
<!--({{ post.title | replace: "SameBoy ", "" }})-->
<h2>{{ post.title }}</h2>
{{ post.content }}
{% endif %}
{% endfor %}