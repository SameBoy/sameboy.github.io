---
layout: page
title: Overview
permalink: /
---

{{image_url}}
{% include image.html src="icon" width="160" class="float-image" %}

SameBoy is a user friendly Game Boy, Game Boy Color and Super Game Boy emulator for macOS, Windows and Unix-like platforms. SameBoy is extremely [accurate](/features/#accuracy) and includes a wide range of powerful [debugging features](/features/#debugging), making it ideal for both casual players and developers. In addition to accuracy and developer capabilities, SameBoy has all the [features](/features/) one would expect from an emulator – from save states to [scaling filters](/scaling/).

{% for post in site.posts %}
{% if post.group == "Downloads" %}
  <a id="download-link" class="download-link" href="{{ post.url | relative_url }}">Download {{ post.title | escape }}</a>
  <script>
  if (navigator.userAgent.indexOf("Macintosh") != -1) {
      document.getElementById("download-link").innerHTML += " for macOS";
      document.getElementById("download-link").href = "{{ post.cocoa }}";
  }
  else if (navigator.userAgent.indexOf("Windows") != -1) {
      document.getElementById("download-link").innerHTML += " for Windows";
      document.getElementById("download-link").href = "{{ post.windows }}";
  }
  </script>
  {% break %}
{% endif %}
{% endfor %}