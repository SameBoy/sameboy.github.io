---
layout: page
title: Home
permalink: /
---

<div id="gallery">
<div class="gallery-item">
<img src="screenshots/pokemongold.png" alt="Pokémon Gold" width="320"/>
<figcaption class="game-title">Pokémon Gold</figcaption>
<figcaption class="platform">Game Boy Color</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/kirby.png" alt="Kirby's Dream Land 2" width="320"/>
<figcaption class="game-title">Kirby's Dream Land 2</figcaption>
<figcaption class="platform">Game Boy</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/picross.png" alt="Mario's Picross" width="384" class="sgb"/>
<figcaption class="game-title">Mario's Picross</figcaption>
<figcaption class="platform">Super Game Boy</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/daffyduck.png" alt="Daffy Duck – Fowl Play" width="320"/>
<figcaption class="game-title">Daffy Duck – Fowl Play</figcaption>
<figcaption class="platform">Game Boy Color</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/prehistorikman.png" alt="Prehistorik Man" width="320"/>
<figcaption class="game-title">Prehistorik Man</figcaption>
<figcaption class="platform">Game Boy</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/pokemonblue.png" alt="Pokémon Blue" width="384" class="sgb"/>
<figcaption class="game-title">Pokémon Blue</figcaption>
<figcaption class="platform">Super Game Boy</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/zelda.png" alt="The Legend of Zelda – Link's Awakening DX" width="320"/>
<figcaption class="game-title">Link's Awakening DX</figcaption>
<figcaption class="platform">Game Boy Color</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/sml2.png" alt="Super Mario Land 2" width="320"/>
<figcaption class="game-title">Super Mario Land 2</figcaption>
<figcaption class="platform">Game Boy</figcaption>
</div>

<div class="gallery-item">
<img src="screenshots/donkeykong.png" alt="Donkey Kong" width="384" class="sgb"/>
<figcaption class="game-title">Donkey Kong</figcaption>
<figcaption class="platform">Super Game Boy</figcaption>
</div>


</div>
SameBoy is a user friendly, powerful and [open source](https://github.com/LIJI32/SameBoy) Game Boy, Game Boy Color and Super Game Boy emulator for macOS, Windows and Unix-like platforms. SameBoy is extremely [accurate](/features/#accuracy) and includes a wide range of both [powerful debugging features](/features/#debugging) and [user-facing features](/features/#user-interface), making it ideal for both casual players and developers. Of course, SameBoy also has [every feature](/features/) one would expect from an emulator – from save states to [scaling filters](/scaling/).

{% for post in site.posts %}
{% if post.group == "Downloads" %}
  <a id="download-link" class="download-link" href="{{ post.url | relative_url }}">Download {{ post.title | escape }}</a>
  <p class="download-link"><a id="appstore-link" href="https://apps.apple.com/us/app/sameboy/id6496971295">SameBoy for iOS is available on the App Store</a></p>
  <script src="/assets/jquery-3.1.1.min.js"></script>
  <script src="/assets/home-slideshow.js"></script>
  <script>// <!-- 
  var iPad = navigator.userAgent.indexOf("Macintosh") != -1 && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  var iOS = navigator.userAgent.indexOf("iOS") != -1 || navigator.userAgent.indexOf("iPadOS") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || iPad;
  if (iOS) {
      appstoreLink = document.getElementById("appstore-link");
      downloadLink = document.getElementById("download-link");
      appstoreLink.parentElement.remove()
      downloadLink.parentElement.insertBefore(appstoreLink.parentElement, downloadLink)
      appstoreLink.innerHTML = '<img src="appstore.svg" alt="Download on the App Store" />';
      downloadLink.outerHTML = '<span class="download-link">Running iOS 11 or 12?</span><ul>' +
      '<li><a href="{{ post.ipa }}">{{ post.title | escape }} IPA for side-loading</a></li>' +
      '<li><a href="zbra://sources/add/https://sameboy.github.io/repo">Add to SameBoy Zebra</a></li>' +
      '</ul>';
     
  }
  else if (navigator.userAgent.indexOf("Macintosh") != -1) {
      document.getElementById("download-link").innerHTML += " for macOS";
      document.getElementById("download-link").href = "{{ post.cocoa }}";
  }
  else if (navigator.userAgent.indexOf("Windows") != -1) {
      document.getElementById("download-link").innerHTML += " for Windows";
      document.getElementById("download-link").href = "{{ post.windows }}";
  }
  // -->
  </script>
  {% break %}
{% endif %}
{% endfor %}