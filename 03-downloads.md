---
layout: page
title: Downloads
permalink: /downloads/
---

{% assign first = 1 %}
{% for post in site.posts %}
{% if post.group == page.title %}
{% if first == 1 %}
<section class="latest release">
  <p>Latest version</p>
  <h2>
    <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
  </h2>
  <p>Released {{ post.date | date: "%b %-d, %Y" }}</p>
  <ul>
    {% if post.cocoa %}
    <li class="mac"><a href="{{post.cocoa}}">Download for macOS</a></li>
    {%  endif %}
    {% if post.windows %}
    {% if post.windows_js %}
    <li class="windows"><a onclick="return DownloadUnique(this);" href="{{post.windows}}">Download for Windows</a></li>
    {% else %}
    <li class="windows"><a href="{{post.windows}}">Download for Windows</a></li>
    {% endif %}
    {%  endif %}
    {% if post.appstore %}
    <li class="ios"><a href="https://apps.apple.com/us/app/sameboy/id6496971295">iOS App Store Page</a></li>
    {%  endif %}
    {% if post.ipa %}
    <li class="ios"><a href="{{post.ipa}}">Download for iOS (IPA)</a></li>
    {%  endif %}
    {% if post.ios-deb %}
    <li class="ios"><a href="{{post.ios-deb}}">Download for iOS (Deb)</a></li>
    {%  endif %}
    {% if post.source %}
    <li class="source"><a href="{{post.source}}">Download source code</a></li>
    {%  endif %}
    <li class="info"><a href="{{post.url}}">More info</a></li>
  </ul>
</section>
<h2> Older Versions </h2>
{% assign first = 0 %}
{% else %}
<section class="release">
<h3 class="collapse">
<a class="post-link" href="{{ post.url | relative_url }}" onclick="return collapse(this)">{{ post.title | escape }}</a>
</h3>
<div class="collapsable">
    <p>Released {{ post.date | date: "%b %-d, %Y" }}</p>
    <ul>
        {% if post.cocoa %}
        <li class="mac"><a href="{{post.cocoa}}">Download for macOS</a></li>
        {%  endif %}
        {% if post.windows %}
        {% if post.windows_js %}
        <li class="windows"><a onclick="return DownloadUnique(this);" href="{{post.windows}}">Download for Windows</a></li>
        {% else %}
        <li class="windows"><a href="{{post.windows}}">Download for Windows</a></li>
        {% endif %}
        {%  endif %}
        {% if post.ipa %}
        <li class="ios"><a href="{{post.ipa}}">Download for iOS (IPA)</a></li>
        {%  endif %}
        {% if post.ios-deb %}
        <li class="ios"><a href="{{post.ios-deb}}">Download for iOS (DEB)</a></li>
        {%  endif %}
        {% if post.source %}
        <li class="source"><a href="{{post.source}}">Download source code</a></li>
        {%  endif %}
        <li class="info"><a href="{{post.url}}">More info</a></li>
    </ul>
</div>
</section>
{% endif %}
{% endif %}
{% endfor %}
<script src="/assets/jquery-3.1.1.min.js"></script>
<script>
document.body.onload = function () {
    $(".collapsable").height(0);
    $(".collapse").prepend('<div class="arrow" />');
}
function collapse(element)
{
    collapsable = $(element.parentElement.nextElementSibling);
    arrow = $(element.parentElement).children(".arrow")
    if (collapsable.height()) {
        collapsable.animate({
            height: "0"
          }, 400);
        $({deg: 0}).animate({deg: -90}, {
            duration: 400,
            step: function(now) {
                arrow.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
        return false;
    }
    else {
        target = collapsable.css('height', 'auto').height();
        collapsable.height(0).animate({
            height: target
          }, 400);
        $({deg: -90}).animate({deg: 0}, {
            duration: 400,
            step: function(now) {
                arrow.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
        return false;
    }
}
</script>