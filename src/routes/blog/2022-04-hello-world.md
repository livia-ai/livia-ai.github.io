---
title: Hello World
description: Welcome to the blog for the project Linking Viennese Art through Artificial Intelligence (or, as we like to call it - LiviaAI), a one-year long investigation, funded by the Jubiläumsfond of the City of Vienna/Austrian Academy of Sciences, based at the Universität für Weiterbildung, Krems and in partnership with the Austrian Institute of Technology, the Belvedere Museum Wien, the Museum für Angewandte Kunst and the Wien Museum.
url: https://liviaai.at/blog/2022-04-hello-world
---

# Hello World! 

Welcome to the blog for the project __Linking Viennese Art through Artificial Intelligence__ or, as we like to call it - LiviaAI. LiviaAI will be a one-year long investigation, funded by the [Jubiläumsfond of the City of Vienna/Austrian Academy of Sciences](https://www.oeaw.ac.at/foerderungen/jubilaeumsfonds), based at the [Universität für Weiterbildung, Krems](https://www.donau-uni.ac.at/de.html) and in partnership with the [Austrian Institute of Technology](https://www.ait.ac.at), the [Belvedere Museum Wien](https://www.belvedere.at), the [Museum für Angewandte Kunst](https://www.mak.at) and the [Wien Museum](https://www.wienmuseum.at). 

Over the next months, we will reporting on our progress here, keeping you up to date on where we are and what we find, what we don’t find and what surprises might be in store. But first, a bit of background...

## The What

LiviaAI investigates the potential of Artificial Intelligence (AI) to find patterns, connections and associations between digitised objects in Viennese art collections. There are three main goals to the project:

- to explore the use of AI as a tool for Digital Humanists and museum curators to study the use of classification systems and vocabularies across museum collections; 
- to establish connections between online collections of our three museum partners, so that the associations between them and their individual objects become more visible; 
- to demonstrate how AI can support new online exhibition formats that emphasise serendipitous browsing, exploration of contextual connections, and playful engagement with Vienna's collected heritage.

Sounds simple, right? Well, sort of...

## The Why

Vienna is home to world famous art collections, but at the moment, it is not possible for researchers, visitors to Vienna or interested users to search _across_ these collections. We want to help build this capacity. To do so, we are partnering with three very different, but equally well-known Viennese museums:

The [Belvedere](https://www.belvedere.at), which is renowned for its small but spectacular collection of art works by Viennese artists; the [Wien Museum](https://www.wienmuseum.at), with a large, heterogeneous collection documenting Vienna’s cultural history, and the [Museum für Angewandte Kunst (MAK)](https://www.mak.at), which holds a large collection documenting Austria’s artistic and design history of the 19th and 20th century.

The collections data from these museums has already been digitised and much of it can be searched online. But at the moment it is not possible to search across them, even though all three contain materials from similar periods of Vienna’s history, and have considerable overlap of artists (e.g. Klimt, Schiele), art groups, and design ideas. By building on cutting-edge deep learning techniques and natural language processing methods – most notably representation learning, triplet loss networks and sentence transoformers (more on those in later posts) LiviaAI will enable museum professionals to design their own AI processes without the need for the complicated and expensive manual data annotation work which is normally required to train AI models. This way, we can build expertise and lay the groundwork for embedding AI-supported methods and tools more deeply in future digital humanities curricula and, ultimately, everyday professional scholarly and curatorial practice. 

## The How

LiviaAI makes use of some of the most recent approaches in machine learning and natural language processing. Our project goal is to develop an __AI model that  recognizes similarity between images of artworks, based on their visual content__. In order to do this, we will collect examples of images that are "similar", and those that are "different", so that the AI can learn from them. The bad news: in order to make this work, we need __a lot__ of examples. We estimate somewhere between 20.000 and 50.000 - which is a lot more than we can assemble by hand!

So, how will we get enough examples, without spending years collecting them manually? And how do we even define what "similarity" is, or looks like? This is where natural language processing comes in: Before we even start to work with the images, we will collect the __image metadata records__ from our museum partners - the descriptions, keywords, notes that the curators have entered into their collection databases, the people and places connected to the artworks, etc. We will apply a technique called [Sentence Embedding](https://en.wikipedia.org/wiki/Sentence_embedding) to group and cluster our metadata records, and then pick our training examples automatically.

Will this work? [First experiments](https://arxiv.org/pdf/2003.12265.pdf) have suggested it _might_ - which is why we have proposed this project! Bear with us as we work out the details, and keep you updated on this blog!

## The Who

The LiviaAI team comes from all sorts of backgrounds - we’re a diverse bunch! The Co-PIs of the the project are [Dr Nicole High-Steskal](https://www.donau-uni.ac.at/de/universitaet/organisation/mitarbeiterinnen/person/4295316299), Research Associate in the Department for Arts and Cultural Studies at the Universität für Weiterbildung, Krems, and [Dr Rainer Simon](https://rsimon.github.io), Senior Scientist in the Data Science and Artificial Intelligence unit at the Austrian Institute of Technology. The project staff is rounded out by [Michaela Feurstein-Prasser](https://at.linkedin.com/in/michaela-feurstein-prasser-51a55367?challengeId=AQF6Z4XU1IYQPQAAAYBA6IJQuEshOJuiUTDHWOIpql-E5bpOhZ7tCMoPH3UgZsFpj0nuqTriv_Lwb56DmY_Jn4dGu9ms19HJPQ&submissionId=6829cdbe-6b3e-e716-fa7d-4e1a0f07935a), a freelance curator and cultural mediator based in Vienna, and Bernhard Franzl, student of Artificial Intelligence at the University of Linz. [Dr Rebecca Kahn](https://rewire.univie.ac.at/fellows/kahn-rebecca-josina), a post-doctoral researcher in the History Department at the University of Vienna and leader of the project TSLIM - a Marie Sklodowska Curie Actions COFUND project funded by the European Commission - is also involved in LiviaAI as a project consultant. 

## Where We Are Now

The project is beginning to gather steam! We collected the metadata from our museum partners and are now starting to experiment with different clustering approaches in April. We are also organising a workshop in early May to meet with the museum partners, share our initial results, and get some ideas from them about how their data is used by researchers and visitors, so that we can plan the next phase of data explorations. We’re planning to share regular updates on our progress at every stage, so keep an eye on things here!
