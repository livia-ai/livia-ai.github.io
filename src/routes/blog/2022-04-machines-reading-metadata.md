# Machines Reading Metadata

We are now six weeks into our project, and it's about time to give an update on initial results from our tech team! The tech team, by the way, that's us: intern and Machine Learning student [Bernhard](#) and me, [Rainer](#), Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology. (And, yes, Bernhard is totally doing all the smart work, while I'm mostly writing the blog posts.)

As we explained in our [introductory post](#), the main goal of LiviaAI is to find out whether we can teach computers to judge "similarity" of artworks. We will proceed in two stages:

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




