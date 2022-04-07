---
template: blog
slug: /blog/migrating-to-aws-pt2
date: 2022-04-07T21:04:00.000+10:00
title: Migrating to AWS (again) pt. 2
description: Outcome of the attempt to migrate to AWS. Did it go to plan?
--- 
Fully migrating a website from one DNS provider, CDN and host
has never gone smoothly for me. With so many moving parts
and slow DNS propagation, this can get very broken and very
confusing, very quickly. 

This time, when moving from Cloudflare/VPS to AWS
Route53/Cloudfront/S3, I came up with a 
[plan](https://jasont.dev/blog/migrating-to-aws-pt1) to try and
make things go as smoothly as possible. So, how did I do?

## Outcome
Much to my surprise, the migration happened without a hitch.
No problems were encountered, testing was solid and each
stage flowed into the next. You're now reading this served
dirt cheap from AWS.

## Potential for improvement
While everything did go smoothly with the page remaining 
reachable at all times, there was a big missed opportunity
to make the nameserver cutover happen more quickly.

While checking the page on different clients after passing
through all of the stages, I was surprised to see many clients
still accessing the site via Cloudflare, even 12-24 hours
later. Then it dawned on me, I had forgotten to reduce 
the DNS record TTL on Cloudflare ahead of time. 

A shorter 
TTL would have meant clients were overriding the cached IP
address and querying the nameserver sooner. Doing this would
have had all clients accessing via AWS much sooner.

## Lessons
This exercise has reenforced the value of plannging. A Lesson
that I'm sure I've learned countless times before but 
nonetheless forget all too often.

A big factor in the plan succeeding was that most stages
required testing before passing on to the next. Furthermore,
each stage involved few, isolated changes. This meant if 
things had gone wrong, there the problems would likely
have been confined to a small part of the migration. The
lesson here: change as little as possible, test as much as
possible.


