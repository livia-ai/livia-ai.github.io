# Machines Reading Metadata

We are now six weeks into our project, and it's time for an update on the work of our tech team! The tech team, by the way, that's us: intern and Machine Learning student [Bernhard](#) and me, [Rainer](#), Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology.

As we explained in our [introductory post](#), the main goal of LiviaAI is to find out whether we can teach computers to judge "similarity" of artworks. Why? 
For two reasons: first, this will enable museums in the future to __more easily connect their collections to those of other museums__. Computers would autonomously handle the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will also enable __new forms of online museum experiences that cross institutional boundaries__. Interested in the [Wiener Moderne](https://en.wikipedia.org/wiki/Wiener_Moderne)? Then why stay within the confines of the one or two largest museums, when other, smaller, museums might house many lesser known treasures, too?

## Similar or Not?

The big question, of course, is: what _does_ make two artworks similar? And, as a next step, how do we get the right data for teaching computers to mimic our understanding of similarity? Approaches which have been used previously look, for example, at similar colours. Or they use artificial intelligence to detect the depicted objects. But would you consider two artworks to be similar, just because they both use yellow as their primary color? Or because they both depict a flower?

[...]

We will proceed in two stages:

- First, we will collect examples of images that are "similar" in some way. We will also collect counter-examples, so that the
  computer can learn what "different" images look like. (More on the ways in which images might resemble or differ later.) 
- Second, we will use the examples to train an AI algorithm, so that it learns how "similarity" manifests itself in the image. Or, 
  in other words: so that it learns what to look for in similar vs. different images. (This process is called 
  [representation or feature learning](https://en.wikipedia.org/wiki/Feature_learning)).

The bad news: we need __a lot__ of examples to train the AI. We expect that we'll need at least 10.000 examples as the absolute minimum. And that's a much bigger training set than we could ever assemble by hand.

## Understanding our Partner Collections 

The first step in our journey is therefore to get a better understanding of our partner collections. What's actually inside them? What information have curators added to the items? And can we leverage all this existing knowledge - and their hard work - to pick those examples for us?

[...TODO...]

<iframe 
  src="/embeds/blog/2022-04/embeddings-example.html"
  style="width:800px; height:600px;">
</iframe>




