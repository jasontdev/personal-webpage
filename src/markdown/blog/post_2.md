---
template: blog
slug: /blog/my-most-used-flexbox-responsive-layout
date: 2022-03-03-13T
description: A quick and easy responsive layout using Flexbox only
---

# My most used Flexbox responsive layout

## Old faithful
While learning web development, one thing I have found myself
doing frequently is starting new projects. Most of them are 
just for testing out new libraries or ideas, so I need to try and
get something working quickly.  
  
Enter my favourite responsive layout. It features a box 
that is centered on desktop, but takes up the full viewport
on mobile.

## Implementation
### index.css
    .layout-container { 
        display: flex;
        justify-content: center;
        width: 100hw;
        maxWidth: 100%;
    }

    .content {
        width: min(650px, 100hw)
    }    
### index.html
    <!DOCTYPE html>
    <html>
      <head>
        <link href="./index.css" rel="stylesheet" />
      </head>
      <body>
        <div class="layout">
            <div class="content">
                <h1>Centered content</h1>
            </div>
        </div>
      </body>
    </html>
