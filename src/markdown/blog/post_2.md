---
template: blog
slug: /blog/my-most-used-flexbox-responsive-layout
date: 2022-03-05T10:03:00.000+10:00
title: My most used Flexbox responsive layout
description: A quick and easy responsive layout using Flexbox only
---

# My most used responsive layout
 
While learning web development, one thing I have done a lot of is
start new projects. The goal is generally to get up and running 
as quick as possible so I can try out new ideas, techniques, libraries
etc.
  
After countless new project starts, this wound up becoming my favourite
way to get responsive without using a framework. It features a box 
that is centered on desktop, but takes up the full viewport
on mobile. Although simple, it makes for a great base on which to build
a more elaborate layouts.

## Implementation

Here is the skeleton of our layout.

```html
<!DOCTYPE html>
  <html>
    <link rel="stylesheet" href="index.css" />
  <body>
    <div class="layout-container">
      <div class="content-container">
        <h1>Centered content</h1>
      </div>
    </div>
  </body>
</html>
```
First we start by setting the outermost container to the width of the 
viewport while centering its contents.

```css
.layout-container { 
  display: flex;
  justify-content: center;
  width: 100hw;
}
```

Now for the part that makes the layout responsive. This container needs to 
take up the full viewport width on mobile, but be centered and comfortably
narrow on desktop and tablet.

```css
.content-container {
  width: min(650px, 100hw)
}  
```

Using `min(650px, 100hw)` makes the layout responsive by 
setting the width of the content container to the smallest of `100hw` or `650px`.  
  
On desktop, tablets and phones held horizontally, the viewport width will
exceed `650px`, resulting in the width of the content container being set to
`650px`. This will result in our content being focussed in the middle of
viewport.

However, on vertical mobile, the viewport width will be smaller than `650px`
thus making sure our content takes up the full width of the viewport.



