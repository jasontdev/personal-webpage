---
template: blog
slug: /blog/welcome-to-my-blog
date: 2022-01-13T09:00:00.000+10:00
title: Welcome to my blog
description: Introduction to me and what I am trying to acheive.
---
## Purpose

This blog is a place for me to record my journey in web development, share my knowledge
and showcase some of my finished projects.

It's very much bare-bones at the moment but will
become more elaborate as I continue to explore Gatsby. There will likely be a lot of chopping
and changing as I experiment with different approaches. Hopefully I will turn some of that
learning and experimentation in tutorials.

## The stack

**Hosting:** [Vultr](https://www.vultr.com) VPS

Running Ubuntu Server 20.04. Cheaper than the
big cloud providers and without the productivity-killing complexity.
New content uploaded with rsync (via SSH). As easy as it gets.

**Web server:** [Nginx](https://www.nginx.org)

Serving static content only. HTTPS configuration provided by certbot.

**Caching/CDN:** [Cloudflare](https://www.cloudflare.com)

Not exactly a high traffic website but as I'm just serving static content, pairing with
Cloudlfare means I can use the cheapest Vultr VPS and still have a performant website.

**JS framework:** [React](https://www.reactjs.org)

Started learning React because of its popularity but JSX/components proved to be a superior way of structuring code, encapsulating functionality and seperating concerns.

**Static site generation:** [Gatsby](https://www.gatsbyjs.com)

When I first learned about the way Gatsby works it almost sounded like a joke. Why would a
static site generator need GraphQL? In practice, the
developer experience is wonderful.
