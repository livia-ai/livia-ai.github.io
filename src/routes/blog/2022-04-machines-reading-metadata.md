# Machines Reading Metadata

It's time for an update on the work of our tech team! The tech team, that's us: intern [Bernhard](#), student of Artificial Intelligence at the University of Linz, and me, [Rainer](#), Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology.

As we explained in our [introductory post](#), the main goal of LiviaAI is to find out whether we can teach computers to recognize "similarity" of artworks. Why? For two reasons: first, because this will allow museums in the future to __connect their collections to those of other museums more easily__. Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable __new forms of online museum experiences that cross institutional boundaries__. Interested in the [Wiener Moderne](https://en.wikipedia.org/wiki/Wiener_Moderne)? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?

## Similar or Not?

The big question is, of course: what _does_ make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?

In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar _images_, we first want to understand how curators have been describing them - and search for similarity in these _descriptions_. 

## Understanding Our Partner Collections 

The first step in our journey is therefore to gain an understanding of our partner collections. What's actually inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?

[...perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?...]

Our three partners, the [Belvedere Museum Wien](https://www.belvedere.at/), the [Museum für angewandte Kunst](https://www.mak.at) and the [Wien Museum](https://www.wienmuseum.at/) have given us access to metadata for all artworks they display in their public online collections. In total, that's more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc.

Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not be relevant in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the curators tell us about them in the metadata - is not quite straightforward.

## Reading Metadata - From a Distance

Luckily, artificial intelligence can help us here, too. In LiviaAI, we use a technique called [Sentence Embedding](https://arxiv.org/abs/1908.10084) to get a better picture of the structure, themes and topics of our collections. [..TODO...]

<iframe 
  src="/embeds/blog/2022-04/embeddings-example.html"
  style="width:800px; height:600px;">
</iframe>

<span class="image-caption">Fig. 2. Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum, projected to 3 dimensions. Color represents a distinct combination of classifications assigned by the curators.</span>


[...unfinished... material for re-use ...]


- First, we will collect examples of images that are "similar" in some way. We will also collect counter-examples, so that the
  computer can learn what "different" images look like. (More on the ways in which images might resemble or differ later.) 
- Second, we will use the examples to train an AI algorithm, so that it learns how "similarity" manifests itself in the image. Or, 
  in other words: so that it learns what to look for in similar vs. different images. (This process is called 
  [representation or feature learning](https://en.wikipedia.org/wiki/Feature_learning)).

The bad news: we need __a lot__ of examples to train the AI. We expect that we'll need at least 10.000 examples as the absolute minimum. And that's a much bigger training set than we could ever assemble by hand.



