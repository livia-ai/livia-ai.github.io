---
title: Machines Reading Metadata
description: "It's time for the first update from the tech team! The tech team, that's us: intern Bernhard, student of Artificial Intelligence at the University of Linz, and me, Rainer, Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."
url: https://liviaai.at/blog/2022-04-machines-reading-metadata
---

# Machines Reading Metadata

It's time for the first update from the tech team! The tech team, that's us: intern [Bernhard](#), student of Artificial Intelligence at the University of Linz, and me, [Rainer](#), Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology.

As we explained in our [introductory post](2022-04-hello-world), one of the goals of LiviaAI is to find out if we can teach computers to recognize "similarity" of artworks. Why? For two reasons: first, because this will allow museums in the future to __connect their collections to those of other museums more easily__. Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable __new forms of online museum experiences that cross institutional boundaries__. Interested in the [Wiener Moderne](https://en.wikipedia.org/wiki/Wiener_Moderne)? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?

## Similar or Not?

The big question is, of course: what _does_ make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?

In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar _images_, we first want to understand how curators have been describing them - and search for similarity in these _descriptions_.

Once we have identified artworks that are described in similar terms, we will use the images as examples to train the algorithm. This is also called [representation or feature learning](https://en.wikipedia.org/wiki/Feature_learning), because the algorithm learns - by itself - how the representation of similiarity manifests itself in the images.

## Understanding Our Partner Collections 

The first step in our journey is therefore to gain an understanding of our partner collections. What's inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?

Our three partners, the [Belvedere](https://www.belvedere.at/), the [MAK](https://www.mak.at) and the [Wien Museum](https://www.wienmuseum.at/) have given us access to metadata for all artworks they display in their public online collections. In total, that's more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc.

Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not exist (or be relevant!) in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the metadata says - is not as straightforward as one might hope.

## Reading Metadata - From a Distance

Luckily, AI can help us here, too. In LiviaAI, we use a technique called [Sentence Embedding](https://en.wikipedia.org/wiki/Sentence_embedding) to get a better picture of the structure, themes and topics of our collections. Sentence Embedding is a computational method that transforms written text - such as a sentence or a paragraph - to a _vector_, a numeric representation that we can treat as a point in space. Sentences that share similar semantics will be located nearby in that space, which means we can deduct information about the similarity of two texts simply by measuring the distance between them. 

There are different ways to compute embeddings. Some algorithms (like [LSI](https://en.wikipedia.org/wiki/Latent_semantic_analysis) or [Doc2Vec](https://medium.com/wisio/a-gentle-introduction-to-doc2vec-db3e8c0cce5e)) start from a blank state, with no prior knowledge of language or vocabulary. They take the full dataset as input (say, the fulltext of a novel), and fit the sentence representations so that sentences that use (or are surrounded by) similar vocabulary will end up close together. Other approaches start from pre-trained models, which means they will already come pre-loaded with knowledge trained from a large text corpus. In our case, we use [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) a large language model developed in 2018 by Google researchers, which was shortly after adapted for the purpose of high-performance [sentence embedding](https://arxiv.org/abs/1908.10084). 

The advantage of a pre-trained model is that it already encodes a lot of language context. In simplified terms, BERT can already tell you that a "pair of boots" is closer in meaning to a "pair of sneakers" than a "pair of pants". The terms for "pencil drawing" would have a certain distance from "photograph". But the distance between a "pencil drawing of a person" and a "photograph of a person" would be smaller.

Here's an example for how BERT grants us a new perspective on our data. The diagram below visualizes 6.200 records from the Wien Museum. (That's only about 10% of their total collection. But it helps to make the diagram load a bit faster in this blogpost.) Each metadata record from the collection is represented as a point in 3D space<a class="footnote" href="#footnote-1">1</a>. We have colored the dots according to the categories that curators have assigned them in the collection management system. This means we'd expect a to see a pattern where dots of similar color should form clusters. And - luckily - that's the case. The diagram is interactive! Try zooming/panning with mouse or touch, and explore the clusters that have emerged. 

<iframe 
  src="/embeds/blog/2022-04/embeddings-example.html"
  style="width:800px; height:600px;">
</iframe>

<span class="image-caption centered">Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum. Color represents a distinct combination of classifications assigned by the curators.</span>

We are currently sifting through our data, and are starting to draw samples of "similar" and "different" images to get a better grip on the possiblities and limitations of the approach. Picking training data based on sentence embeddings is an idea that was initially developed - and tested successfully - [in a different context by AIT colleague Alexander Schindler et al.](https://arxiv.org/pdf/2003.12265.pdf), who also inspired and advised on the preparation of this project. Which means we are... sort of... confident that this will work. But it's all crucially dependent on the data - quality, level of detail, whether curators have used free text vs. keywords, whether individual records differ sufficiently from each other, or whether information is often sparse, formulaic or repetitive, etc.

For now, the goal is only to prepare enough material for discussion at our upcoming workshop. But our journey is guaranteed to remain exciting!

<ol class="footnotes">
  <li id="footnote-1">For the sake of completeness: sentence embeddings work in higher dimensional space. In our case, for example, we compute clusters and distances in 50 dimensions. I.e. technically, what you see in the diagram are 50-dimensional embeddings projected to three dimensions for the purpose of visualization. This also means that the 3D visualization isn't always able to capture the true geometry of the cluster patterns.</li>
</ol>



