---
layout: automation_frame
permalink: /automation_frame/
---

{%- capture rawContent -%}
{% include_relative automation/results.html %}
{%- endcapture -%}
{{ rawContent | split: "</head>" | last | split "</body>" | first }}

