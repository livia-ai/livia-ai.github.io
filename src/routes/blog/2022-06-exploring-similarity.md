---
title: "Exploring Similarity: Triplets and How to Choose Them"
description: "Help us understand the quality of our data by participating in a small crowdsourcing experiment."
url: https://liviaai.at/blog/2022-06-exploring-similarity
date: June 15, 2022
---

Following [our partner workshop in May](/blog/2022-05-community-data), we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop 
were:

1. When measuring similarity of metadata records, we should focus only on the metadata fields that concern
   __subject__ and __theme__. This lead us to exclude some fields from our Sentence Embedding workflow (read about
   it [in our earlier blogpost here](/blog/2022-04-machines-reading-metadata)), in particular those related to
   style, collection, and artist.

2. We should consider measuring similarity based __exclusively__ on the curator-assigned subject tags, even if 
   other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
   machine learning technology referred to as [Graph Embedding](https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4).

Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well __when combining data from multiple museums__. As the image below illustrates, each museum's records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content.

<div style="display:flex; justify-content:center; padding-top:30px;">
  <img src="/blog/2022-06-exploring-similarity/3d_sentence_embeddings_all.png" alt="3D scatterplot of metadata sentence embedding vectors for all museums combined" />
</div>
<div style="width:100%" class="image-caption centered">Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green).</div>

This outcome doesn't exactly make our lives easier - after all, connecting collections is [one of LiviaAI's three main 
goals](/blog/2022-04-hello-world). But it isn't entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!

The goal of LiviaAI is to teach computers how to recognize similar __images__, rather than similar __metadata__. To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are similar to each other, but also images that are different, so that it learns what similarity looks like, __without depending on the metadata__.

## Triplets

In AI terminology, a group of three images, where the first two are examples of similar images, and the third one is an example of a different image, is called a __triplet__. Good triplets will produce an AI model that can measure similarity in a useful way, allowing us to identify related images, no matter which collection they come from. To summarize our workflow:

- First, we compile lots of triplets, i.e. examples of images that are __similar__, and images that are __different__ in terms of theme and subject.
- We feed the triplets into the AI, so it learns to "understand" what similarity looks like.

It is important to understand that the method we use to __select__ our triplets is still based on the metadata: similar metadata means we'll show it to the AI as an example of similar images; and because similar subject and themes are described in similar terms __within one museum collection__, this approach is sensible. But ultimately, the AI is supposed to learn the __visual representation__ of similarity. And that, in turn, means it will have much less problems dealing with mixed content from different collections.  

## Comparing Approaches

So far, we've built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of both approaches.

Each approach presents us with a quantitative measure of similarity that's... technically... accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) will be reliably identified as similar. But the real world isn't that simple, of course. Metadata isn't always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection.

__That's why we need your help:__ Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below. 

Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B.

__We know that ratings are subjective. That's no problem!__ We want to collect as much & as diverse feedback 
as possible. If you feel unsure about the process, we recommend:
* Don't overthink it.
* Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,...)
* Trust your instincts and rate according to your first impression.
* If a triplet looks confusing, this is likely due to ambiguous keywords. In this case, you can simply skip it.

<iframe 
  src="https://rate-this-triplet.no5.at/embed.html"
  style="width:100%; height:700px; margin:0">
</iframe>


After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the "Skip this Triplet" link. Please do this only in cases where you really (really!) cannot decide, or if there's a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all.

## What Happens with the Data?

First of all: the data we collect is, of course, completely anonymous. All we record is your "Good" or "Bad" rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection "works better", as it were, with the two methods.

If we collect enough feedback (and that's a big if!), we will also be able to train the AI __only__ (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model.

__You can also access the rating app without the blog post here: [https://rate-this-triplet.no5.at](https://rate-this-triplet.no5.at)__

<footer>
  <div class="previous-post">
    <h4>Previous post</h4> 
    <a href="/blog/2022-05-community-data/">Community and Data</a>
  </div>
</footer>
