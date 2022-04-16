# Machines Reading Metadata

We are now six weeks into our project, and it's time for an update on the work of our tech team! The tech team, by the way, that's us: intern and Machine Learning student [Bernhard](#), and me, [Rainer](#), Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology.

As we explained in our [introductory post](#), the main goal of LiviaAI is to find out whether we can teach computers to judge "similarity" of artworks. Why? 
For two reasons: first, this way museums in the future will be able to __more easily connect their collections to those of other museums__. Computers would handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable __new forms of online museum experiences that cross institutional boundaries__. Interested in the [Wiener Moderne](https://en.wikipedia.org/wiki/Wiener_Moderne)? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?

## Similar or Not?

The big question is, of course: what _does_ make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?

In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over the years. Before teaching computers how to recognize similarity in the _images_, we first want to understand how curators have been _describing_ their artworks, and search for similarities there. 

## Understanding our Partner Collections 

The first step in our journey is therefore to get a better understanding of our partner collections. What's actually inside them? What information have curators added to the items as metadata over the years? And how can we translate all this existing knowledge - and hard work - into data that computers can use to learn about similarity?

[...perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?...]

Our three partners, the [Belvedere Museum Wien](https://www.belvedere.at/), the [Museum für angewandte Kunst](https://www.mak.at) and the [Wien Museum](https://www.wienmuseum.at/) have given us access to collection metadata that pertains to all artworks displayed in their public online collections. That's more than 300.000 objects in total! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary data on provenance, and, where applicable, information about material, production, places and time periods relevant to the artwork.

Each partner manages their metadata in slightly different ways. Therefore, figuring out which metadata records might lead us to artworks that are similar - according to what the curators tell us about them - is not quite straightforward yet.

## Reading Metadata - from a Distance









[...unfinished... material for re-use ...]


- First, we will collect examples of images that are "similar" in some way. We will also collect counter-examples, so that the
  computer can learn what "different" images look like. (More on the ways in which images might resemble or differ later.) 
- Second, we will use the examples to train an AI algorithm, so that it learns how "similarity" manifests itself in the image. Or, 
  in other words: so that it learns what to look for in similar vs. different images. (This process is called 
  [representation or feature learning](https://en.wikipedia.org/wiki/Feature_learning)).

The bad news: we need __a lot__ of examples to train the AI. We expect that we'll need at least 10.000 examples as the absolute minimum. And that's a much bigger training set than we could ever assemble by hand.

<iframe 
  src="/embeds/blog/2022-04/embeddings-example.html"
  style="width:800px; height:600px;">
</iframe>




