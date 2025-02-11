---
title: Bob Reynolds Quartet
description: Bob Reynolds Quartet
tags: [memo]
layout: layouts/memo
date: 2025-02-11
data:
  videos: [
    { url: "https://www.youtube.com/embed/aytG-itz5dU", title: "Crush" },
    { url: "https://www.youtube.com/embed/dep7kUpqzZo", title: "Down South" },
    { url: "https://www.youtube.com/embed/G1wadmyNPrk", title: "Hollywood Startup" },
    { url: "https://www.youtube.com/embed/kHbExJK0NU4", title: "Sway" },
    { url: "https://www.youtube.com/embed/hXcWrNjbw20", title: "Hush" },
    { url: "https://www.youtube.com/embed/-adM7w4NxZI", title: "Stray Voltage" },
    { url: "https://www.youtube.com/embed/tx6wsQLBniY", title: "Resistance" },
    { url: "https://www.youtube.com/embed/u_Bf6IHoDs8", title: "Closer" },
  ]
---

{% for data in data.videos %}
<h3>{{ data.title }} - Bob Reynolds (Quartet {{ forloop.index }} of {{ forloop.length }})</h3>
{% renderFile "./src/_includes/partials/video.liquid", data %}
<br />
{% endfor %}
