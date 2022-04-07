---
template: blog
slug: /blog/migrating-to-aws-pt1 
date: 2022-04-06T15:28:00.000+10:00
title: Migrating to AWS (again) pt. 1
description: Planning and motivation for moving my blog back to AWS
---
After enjoying the simplicity of hosting my website 
using Vultr VPS, the number of dev jobs looking for AWS/Azure/GCP
experience is too big to ignore. So I have decided its time to start deploying to AWS
again.  
  
## Current setup
At present, this website is served from a VPS running nginx, and fronted by Cloudflare and 
the domain is registered with Namecheap. The pages are statically generated with Gatsby
transferred to the VPS via a one line deployment script:
```bash
npx gatsby build && rsync -avz --delete public/ admin@jasont.dev:/var/www/jasontdev/html

```
The developer experience of deploying this way is absolutely beautiful and required very 
little work to setup.

## The goal
As AWS is far less generous with VPS data transfer than some of the smaller providers like Linode,
Vultr and Digital Ocean, hosting will be moved to an S3 bucket. This requires moving 
from Cloudflare to AWS Cloudfront in order to be able to serve content from the S3 bucket
via https. I will also move from Cloudflare DNS to AWS Route53. This setup is a lot more 
complicated than a VPS running nginx, but the developer experience will be much the same,
using S3's sync tool to synchronise changes.

## The method
For a simple site this is a prickly job with a lot of moving parts and potential for faults.
As I'm currently applying for junior dev jobs, recruiters looking at 
DNS_PROBE_FINISHED_NXDOMAIN errors instead of my blog and portfolio is highly undesirable, 
This migration needs to go as smoothly as possible.

After thinking about how to do this, I've decided to break up the migration into stages, with
each stage having as few changes as possible. This will help isolate problems any problems
occur. The changes should take place outside of business hours and the site must be
reachable during all stages either at the Vultr VPS or S3 bucket

## The plan
### Stage 1
- Clone the DNS records from Cloudflare to Route53. Allow time for records to propagate.
### Stage 2
- Change registrar to point to Route53 rather than Cloudflare. Allow time for changes to propagate.
- Nginx on the jasont.dev VPS is setup with a Let's Encrypt SSL certificate so accessing the page via https will still work without Cloudflare.
- Perform thorough testing of all of the pages before proceeding.
### Stage 3
- Setup S3 bucket with webhosting (http). Make sure its reachable via public traffic to ensure permissions are correctly set.
### Stage 4
- Setup a Cloudfront distribution with https certificate for S3 bucket. AWS can provide a certicate based on records added to Route53 that prove we are the rightful owners of jasont.dev without actually changing the CNAME. This means we can test the Cloudfront distribution of the website in isolation via the distribution URL.
### Stage 5
- Change jasont.dev NS records in Route53 to point to the Cloudfront distribution.
- Thoroughly test before tearing down any of the Cloudflare or Vultr infra.

## Thoughts
At the time of writing, I have complete stage 1 and I'm about to proceed with stage 2. Looking
forward to (hopefully) providing an update on how and why this all went smoothly in part 2. 
wish me luck!
