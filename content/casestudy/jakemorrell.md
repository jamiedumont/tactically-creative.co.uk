+++
date = "2015-04-22T15:07:03+01:00"
title = "Jake Morrell"
image = "/images/jakemorrelllogo.png"
subheader = "Should a band be treated like a small business?"
originurl = "http://www.jakemorrell.co.uk"
sitelink = "www.jakemorrell.co.uk"
heroimage = ""
heroImgDescription = ""
summary = "I re-designed Jake's existing site and built a future-proof platform that acts as a focal-point for his social media network, and will evolve with the band as they grow."

+++

A band’s need of a website is not uncommon, but finding the right
website can prove tricky for the uninitiated. A band’s site functions
very much as a small business’ site does, yet without the clear & direct
financial objective; which can make it very difficult to build.

The site also has to become the band’s online ‘home’ that grows with
them. Needing something so personal makes finding an off-the-shelf
solution tough.

Country roots
-------------

When Jake Morrell approached me, he was a musician who had recently
decided that his band should start taking their music seriously, and
start building up a reputation and solid fanbase. Up until that point,
he had been an enthusiastic and talented musician, but had yet to treat
his music as a career.

Once the decision was made to make a go of it, Jake recognised that his
current website was not up to the task. If he wanted the band to grow in
popularity, it was clear that their website needed attention if it was
to capture everything that was brilliant about their music.

Templates without soul
----------------------

As I’ve already said, finding an off-the-shelf solution for a website
as personal as a band’s can be really tough; even more-so when that
band’s identity & sound is as unique and different as Jake’s. He had
been finding that none of the templates and themes he had found really
felt ‘right’ for his band, and the designer in him kept thinking there
must be a better alternative.

He wanted to avoid becoming ‘just another band’, and blending in with
the herd. Jake’s music instantly solves that issue in the flesh, but how
could he stand out online? After looking through his options, he was
confidant that a theme or template, no matter how well designed and
built could never quite capture the band’s identity and their
aspirations for the future.

Jake wanted a site that would act as a hub for all his online
communication with his fanbase. Social media was working well in
generating interest, but without a focal point it was lacking impact.
Consolidating his band’s identity into a central site would allow him to
manage and cultivate the band’s image as it grew.

He also had a problem with his current site that needed solving; he
couldn’t update it! If the site was to grow and become the band’s focal
point, it would need to be simple to update and keep current. The
existing site also didn’t offer any responsive design elements for
mobile viewers. Jake had no analytics to confirm that many of his views
came from portable devices, but was fairly sure that a significant
percentage would have benefited from it. That instantly told me that I
needed to incorporate responsive design into the build, but also some
analytics tools to provide data for later optimisation.

A new perspective
-----------------

Working with a band was a new experience for me. Whilst I'm very
comfortable working with small businesses and their objectives; I was
left scratching my head when it came to the music industry.

This is where a strong process and working relationship between clients
and their designers comes into play. I could have gone away and done
mounds of research on the music industry and discovered what makes a
successful website in this industry. That would have given me a very
broad overview of the issues facing Jake, but would have left me
with exactly that: a broad view. I needed specific, actionable insights
into Jake’s industry, and what issues it was that he saw and needed
solving.

By working closely with Jake throughout, I was able to use him as the
project’s compass. He would indicate a direction or potential problem;
and I would dig through the available data and come up with a suitable,
relevant solution. I’ll happily hold me hands up and say that I
missed the mark on occasions, which only proves why I advocate a close
and ongoing relationship with clients. Any wrong turns
were quickly identified in our regular meetings and conversations, and
we got back on track with little time or resources lost.

The personal touch
------------------

Designing an experience for something as personal as a band’s site was
always going to be a challenge. In business, often data and good
practises based on the financial objectives for the site can inform much
of the design. The design decisions for a band, or any personal site,
can be much more arbitrary.

Initially, I was concerned whether I was the right choice for Jake,
as there are other design companies who concentrate on this sector
exclusively. However, he already had a very clear vision of what he
wanted from the site. What he needed from me was the knowledge and
experience needed to make the strong visual direction he had decided
upon a reality.

As an experienced designer (career pre-music) Jake took on the design
himself. The results had exactly the right tone and atmosphere that
suited the band down to the ground. It needed to be simple, honest and
friendly; all sentiments that were captured perfectly because they came
direct from the original source of the band’s identity: Jake.

Over to Me - Act I
------------------

This left me focussing heavily on the technical side of the site. When
Jake initially approached me he was asking for a site based on the
almost ubiquitous platform, Wordpress. As I had extensive experience
creating and managing Wordpress sites, I started without a second thought.

Jake’s two key prerequisites were responsive design, and an easy way of
updating the site regularly. Whilst Wordpress was (and always has) been
geared around ‘Posts’, I knew that ‘Custom Post Types’ and various
other plugins would provide the functionality we required for managing
content such as a listing of Jake’s upcoming gigs.

Responsive design was something that I had worked with before, but
never from the ‘ground up’ on a new build. For this reason I used a popular and well
documented framework: Foundation. This gave me a good solid system to
work from, and an array of elements that would cover the initial site
build, and any future feature requests.

I felt that using two widely available, well established pillars of the
web development world would give Jake a future proof website that could
be easily worked on by almost any developer.

A wrong turn
------------

Foundation provided a very strong framework to begin building on, however
it was not without it’s problems. Most popular frameworks such as
Bootstrap and Foundation are quite opinionated as standard, and I found
myself overriding much of Foundation’s default styling. This was, I
felt, was a price worth paying to keep the site’s codebase future proof.

However, once I had completed the site and began testing it, I became
increasingly upset with what I had made. Whilst Jake was very happy
with the site, I felt that the code supporting it was heavy,
overworked, and thanks to the number of overrides required; far less
future-proof than I had hoped.

To top it off, I felt that Wordpress, as with Foundation, was too
prescriptive for this project. It forced upon us the notion of ‘Posts’,
when really we wanted nothing of the sort! The editing interface was, as
with all Wordpress sites, very ‘messy’. Wordpress as standard displays
far too many options and menu items for someone who wants to update
their gigs and write the odd blog post. This can of course be hidden
away, but why should we have to distort the system like this?

I knew that Jake was self-hosting the site, and I likely wouldn’t have any
input on the site once it was launched. This begged the question of how
to manage the Wordpress updates. Did I really want to burden Jake
with updating the install and it’s associated plugins himself, or having
to get me to do it periodically; just to keep the site secure? All of
this seemed unnecessary for what should be a simple site.

I went back to the drawing board…

Back to Me - Act II
-------------------

The first thing I wanted to resolve was the restrictions that Wordpress
was imposing on the site. It was bloated, complicated and needlessly
complex for this project; so I set out to find the antithesis of this.
I was sure that the answer would be found in ditching the database,
and relying on ‘static’ web pages.

At the time, I had been playing around with the static site generator,
Jekyll. For those unfamiliar, Jekyll takes templates written in Liquid,
combines that with content files written in Markdown, and builds the
site into flat, static HTML documents. This results in an incredibly
fast, stable site that can be hosted almost anywhere. Jekyll was always
considered a blogging tool for ‘hackers’, but it’s press as the basis of
Obama’s online fundraising campaign has caused a resurgence in the
popularity of static sites.

I had enough experience building small, quick sites with it to know
that it would work well in this situation; the only issue was how to add
content in a non technical manner. At that time, there was no easy way
to manage content in non-technical manner, everything was done through
Markdown files. I needed something with a suitable interface for Jake
to easily keep the site current, and manage logic surrounding gig listings.

The solution came in the form of a half-way house between Wordpress and
Jekyll: a flat-file CMS called Statamic. Whilst akin to Wordpress in
functionality, it had a structure far closer to a pre-build Jekyll site;
using templates, YAML config files and Markdown content files to
dynamically render the page. Fortunately, Statamic has brilliant
HTML-rendered caching, effectively allowing the site to serve static files to
users, but with a dynamic twist when required. This provided the all
important GUI for Jake to work with, and a lightweight system that could
output static files in most instances, reducing load times and improving
the user experience.

My concern over Foundation caused me to take a deeper look at the way I
build my websites. I no longer considered an all-encompassing
framework to be a universal ally. Foundation, like Bootstrap, works well
for quick prototyping but, as I found; poorly in production.

The solution came from creating a bespoke, SASS-based framework loosely
based Harry Robert’s InuitCSS. I used Object-Orientated-CSS (OOCSS)
methodology to build functionality ‘outwards’ from the core of what the
site needed to do right now; rather than ‘inwards’ from a rather
speculative position of what the site *might* need to do in the future.
The result was a lightweight, fast, highly extensible and future proof
framework that could support the site for years to come.

A Semi-Static Renaissance
-------------------------

The results speak for themselves. Not only does Jake prefer the vastly
simplified user-interface of Statamic, but the performance meets my
expectations. We’ve managed to achieve some solid loading times, and
Statamic has proved incredibly stable, with straightforward development.
I hope to spend more time with Statamic in the upcoming months to make
it even faster for my clients and their users, as I feel it has great
promise as my “go to” solution for small websites.

The lack of a database means that the site is far less vulnerable to
security risks, and whilst theoretically still at risk due to the
dynamic nature of the site; it is far, far less likely to be
compromised. In the event it is, getting the site back online is as
simple as replacing some files in a directory, which is the work of 10
minutes!

The OOCSS framework has allowed for simple ongoing development of the
site. Adding new features is simple, as they either extend or modify
existing ones, or bolt-on with no complications.

What I Learned
---------------

#### Wordpress is not the solution

After exploring various CMS options, I have concluded that Wordpress
should no longer be my standard solution, as in most cases, it’s
probably not the best tool for the job. In fact, the more time I spend
with other systems such as Statamic, and static-site-generators (SSGs);
the more I believe that Wordpress will very rarely be the best tool for
my projects now, if ever.

#### An intelligent CSS architecture is worth it’s weight in gold.

That’s probably not the best way to articulate what I'm trying to say,
as such an architecture probably weighs next to nothing! However, it
can’t be denied that a considered approach to writing (S)CSS pays
dividends the longer you expect a website to last. Having a well written
one is not only beneficial for performance and ease of development
initially, but can prove to be cost-saving in the long term, when
compared to refactoring the CSS over the lifetime of a website to
accommodate new features.

#### Communication is key

I learnt so much on this project, both generally, but also from Jake.
I learnt how to deal with the objectives of a website when there’s no
direct financial correlation to site performance and it’s traffic.

However, the most important thing I learnt was that my process of
constant communication and involvement with the client directly, can’t
be undervalued. Compared to, perhaps more ‘traditional’, methods of
running a project where the client is kept at arms-length and
periodically presented to; the new approach saved both Jake and I time,
and meant we were both much happier with the final outcome.

Update: 03 March 2015
---------------------

*I thought I’d attach a quick update to this case study. I’ve
continued work on Jake’s site over the past few months, something
neither of us thought would happen. This ongoing work is partly due to
the affinity that I feel towards the project and the band, but also the
results that I’ve produced.*

After working further on optimising the site and the server setup for
Statamic, I’ve been able to achieve some incredible page load times
(\~200ms from a cold cache!). This sort of speed increase has
dramatically improved the UX of the site, and it’s suitability for use
on mobile devices; even those with slow connections!

My work with Statamic on subsequent projects has also confirmed that
Wordpress is no longer a relevant tool for my work. I’ve completely
fallen for Statamic and other static systems. I’ve since updated all of
my previous client work to be based on Statamic at zero cost. Replacing
the legacy Wordpress sites from my portfolio was a large time
investment for me, but completely worth it. All my clients are
reporting that they love the new CMS, and it means that I can manage
fewer systems. Everyone wins!
