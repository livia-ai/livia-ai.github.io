---
title: "Exploring Similarity: Triplets and How to Choose Them"
description: "Lorem ipsum"
url: https://liviaai.at/blog/2022-06-exploring-similarity
date: June 15, 2022
---

Following [our partner workshop in May](/blog/2022-05-community-data), we have started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop 
were:

1. When measuring similarity of metadata records, we should focus __only__ on those metadata fields that concern
   __subject__ and __theme__. This lead us to exclude some fields from our Sentence Embedding workflow (read about
   it [in our earlier blogpost here](/blog/2022-04-machines-reading-metadata)), in particular those related to
   style, collection, and artist.

2. We should consider measuring similarity based __exclusively__ on the curator-assigned subject tags, even if 
   other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
   machine learning technology called [Graph Embedding](https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4).

Another important outcome of our first experiments - which the workshop confirmed - were that the similarity scores we
had computed did not work well __when combining data from multiple museums__. This may be because the vocabularies and curating practices differ; or because the collections are inherently too different in terms of their materials.

This outcome doesn't exactly make our lives easier - after all, connecting collections is [one of LiviaAI's three main 
goals](/blog/2022-04-hello-world). But it isn't entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed the this project in the first place! Our goal is to, first, select artworks with __similar metadata from one collection__, and then use __their images as input__ to train an AI model to recognize the similarity in the images.

## Triplets

In practice, however, we need more than just pairs of similar images. In order to learn visual similarity, the AI also needs to see examples of images that are __different__ from each other. In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a __triplet__.

Good triplets will produce an AI model that can measure similarity in a useful way, thus allowing us to identify related images between collections, regardless of their metadata is being recorded in different institutions. To summarize our workflow:

- First, we compile lots of triplets, i.e. examples of images that are __similar__, and images that are __different__ in terms of theme and subject.
- We feed the triplets into the AI, so it learns to "understand" what similarity looks like in the images.
- In order to get our examples, we rely on the metadata: because similar subject and themes are described in similar terms __within one museum collection__, records with high metadata similarity should provide us with good image training
material.

## Comparing Approaches

So far, we've built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches.

Both approaches present us with a quantitative measure of similarity that's... technically... accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) _will_ be reliably identified as similar. But the real world isn't that simple, of course. Metadata isn't always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection.

__That's why we need your help:__ Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below. 

Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B.

<iframe 
  src="https://rate-this-triplet.no5.at/ui/"
  style="width:100%; height:700px; margin:0">
</iframe>

__We know that ratings are subjective. That's no problem!__ We want to collect as much & as diverse feedback 
as possible. Don't overthink it. Just focus on image motives and themes, and rate according to your intuition.

After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the "Skip this Triplet" link. Please do this only in cases where you really (really!) cannot decide, or if there's a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all.

## What Happens with the Data?

[...]

<footer>
  <div class="previous-post">
    <h4>Previous post</h4> 
    <a href="/blog/2022-05-community-data/">Community and Data - The Kick-Off Workshop</a>
  </div>
</footer>
