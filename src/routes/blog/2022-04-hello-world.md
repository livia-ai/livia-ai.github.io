---
title: Hello World!
description: Welcome to the blog for the project Linking Viennese Art through Artificial Intelligence (or, as we like to call it - LiviaAI), a one-year long investigation, funded by the Jubiläumsfond of the City of Vienna/Austrian Academy of Sciences, based at the Universität für Weiterbildung, Krems and in partnership with the Austrian Institute of Technology, the Belvedere Museum Wien, the Museum für Angewandte Kunst and the Wien Museum.
url: https://liviaai.at/blog/2022-04-hello-world
date: April 19, 2022
---

![Lusthaus im Prater, views from different partner collections](/blog/2022-04-hello-world/lusthaus.jpg)

<span class="image-caption">Images, left to right: "<a href=" https://sammlung.belvedere.at/objects/4831/lusthaus-im-prater">Lusthaus im Prater</a>", Anton Hans Karlinsky (1929), Belvedere Museum; "<a href="https://sammlung.mak.at/sammlung_online?id=collect-222246">Postkarte Nr. 135, Wien: Lusthaus im Prater</a>", Urban Janke (1908), Museum für Angewandte Kunst; "<a href="https://sammlung.wienmuseum.at/objekt/134151-das-lusthaus-im-prater/">Cafe-Restauration. Lusthaus im k. k. Prater, Wien II</a>", Paul Ledermann (1909), Wien Museum.</span>

Welcome to the new blog for our project __Linking Viennese Art through Artificial Intelligence__ or, as we like to call it - __LiviaAI!__ LiviaAI will be a one-year long investigation, funded by the [Jubiläumsfond of the City of Vienna/Austrian Academy of Sciences](https://www.oeaw.ac.at/foerderungen/jubilaeumsfonds), based at the [Universität für Weiterbildung, Krems](https://www.donau-uni.ac.at/de.html) and in partnership with the [Austrian Institute of Technology](https://www.ait.ac.at), the [Belvedere Museum Wien](https://www.belvedere.at), the [Museum für Angewandte Kunst](https://www.mak.at) and the [Wien Museum](https://www.wienmuseum.at). 

Over the next months, we will report on our progress here, and keep you up to date on where we are and what we find, what we don’t find and what surprises might be in store. But first, a bit of background...

## The What

LiviaAI investigates the potential of Artificial Intelligence (AI) to find patterns, connections and associations between digitised objects in Viennese art collections. There are three main goals to the project:

- to explore the use of AI as a tool for Digital Humanists and museum curators to study the use of classification systems and vocabularies across museum collections; 
- to establish connections between online collections of our three museum partners, so that the associations between them and their individual objects become more visible; 
- to demonstrate how AI can support new online exhibition formats that emphasise serendipitous browsing, exploration of contextual connections, and playful engagement with Vienna's collected heritage.

Sounds simple, right? Well, sort of...

## The Why

Vienna is home to world famous art collections, but at the moment, it is not possible for researchers, visitors to Vienna or interested users to search across these collections. We want to help build this capacity. To do so, we are partnering with three very different, but equally well-known Viennese museums:

The [Belvedere](https://www.belvedere.at), which is renowned for its small but spectacular collection of art works by Viennese artists; the [Wien Museum](https://www.wienmuseum.at), with a large, heterogeneous collection documenting Vienna’s cultural history, and the [Museum für Angewandte Kunst (MAK)](https://www.mak.at), which holds a large collection documenting Austria’s artistic and design history of the 19th and 20th century.

The collections data from these museums has already been digitised and much of it can be searched online. But at the moment it is not possible to search _across_ them, even though all three contain materials from similar periods of Vienna’s history, and have considerable overlap of artists (e.g. Klimt, Schiele), art groups, and design ideas. By building on cutting-edge deep learning techniques and natural language processing methods – most notably representation learning, triplet loss networks and sentence transformers (more on those in later posts) LiviaAI will enable museum professionals to more easily and seamlessly link between collections, without the need for complicated and expensive manual data annotation work. As a side-effect, we also aim to build AI expertise more generally, and lay the groundwork for embedding AI-supported methods and tools more deeply in future digital humanities curricula and, ultimately, everyday professional scholarly and curatorial practice. 

## The How

LiviaAI makes use of some of the most recent approaches in machine learning and natural language processing. Our project goal is to develop an AI model that  recognizes similarity between images of artworks, based on their visual content. In order to do this, we will collect examples of images that are "similar", and those that are "different", so that the AI can learn from them. The bad news: in order to make this work, we need __a lot__ of examples. We estimate somewhere between 20.000 and 50.000 - which is a lot more than we can assemble by hand!

So, how will we get enough examples, without spending years collecting them manually? And how do we even define what "similarity" is, or looks like? This is where natural language processing comes in: Before we even start to work with the images, we will collect the image metadata records from our museum partners - the descriptions, keywords, notes that the curators have entered into their collection databases, the people and places connected to the artworks, etc. We will apply a technique called [Sentence Embedding](https://en.wikipedia.org/wiki/Sentence_embedding) to group and cluster our metadata records, and then pick our training examples automatically.

Will this work? Well, let's just say [previous experiments reported in the literature](https://arxiv.org/pdf/2003.12265.pdf) have made us confident enough that it _can_ work - which is why we proposed this project! Bear with us as we work out the details, and follow our blog for the updates. 

## The Who

The LiviaAI team comes from all sorts of backgrounds - we’re a diverse bunch! The Co-PIs of the the project are [Dr Nicole High-Steskal](https://www.donau-uni.ac.at/de/universitaet/organisation/mitarbeiterinnen/person/4295316299), Research Associate in the Department for Arts and Cultural Studies at the Universität für Weiterbildung, Krems, and [Dr Rainer Simon](https://rsimon.github.io), Senior Scientist in the Data Science and Artificial Intelligence unit at the Austrian Institute of Technology. The project staff is rounded out by [Michaela Feurstein-Prasser](http://www.xhibit.at/feurstein/vita_dt), a freelance curator and cultural mediator based in Vienna, and Bernhard Franzl, student of Artificial Intelligence at the University of Linz. [Dr Rebecca Kahn](https://rewire.univie.ac.at/fellows/kahn-rebecca-josina), a post-doctoral researcher in the History Department at the University of Vienna and leader of the project TSLIM - a Marie Sklodowska Curie Actions COFUND project funded by the European Commission - is also involved in LiviaAI as a project consultant. 

## Where We Are Now

The project is beginning to gather steam! We have already collected the metadata from our museum partners and harvested most of the available image content, and are now starting to experiment with different metadata clustering approaches in April. (A blog post about our first experiences with Sentence Embedding and similarity is coming soon!)

We are also organising a workshop in early May to meet with the museum partners, share our initial results, and get some ideas from them about how their data is used by researchers and visitors, so that we can plan the next phase of data explorations. We’re planning to share regular updates on our progress at every stage, so keep an eye on things here!

<footer>
  <h4>Next post</h4> 
  <a href="/blog/2022-04-machines-reading-metadata">Machines Reading Metadata</a>
</footer>
