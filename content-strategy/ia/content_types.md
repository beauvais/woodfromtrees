# Content types



---

## Home page

### Short description: 

There is only one of these, it lives at /. It's the homepage for the whole project.

### Type string

type = "site-home"

### Components

* Hero image using {{ partial "hero-image" .}}

### Front matter

Default?

---

## Story page

### Short description:

These are pages that tell a story about Wood from Trees. Not testimonials or case studies, but the stories of making wooden craft. They express themes of skill, craft, wood, greenwood, etc...

### Type string

type = "story-page"

### Components

* Small hero image using {{ partial "hero-node" . }}

### Front matter

*Default +*

subtitle: "Foot-powered lathe-turned wooden bowls"
banner: "bowls/bowls-header.jpg"

---

## Product page

### Short description

These are pages that host information about a kind of product (e.g. bowls, spoons)

### Type string

type = "product-page"

### Components

* Small hero image using {{ partial "hero-node" . }}
* Sections that introduce each product:
    - Spoons
    - Bowls
    - Kuksas

### Front matter

*Default +*

subtitle: ""
banner: ""


