import{S as Ki,i as Vi,s as Yi,C as Ka,w as Ui,x as Ji,y as Qi,z as Xi,A as qi,q as Zi,o as eo,B as to,Q as Fi,e as s,t as i,k as m,c as l,a as r,h as o,d as a,m as d,b as c,O as Hi,f as q,g as h,H as t}from"../../chunks/vendor-f435face.js";import{P as ao}from"../../chunks/_post-4f5578a2.js";function io(K){let u,k,p,F,f,w,_,ue,E,gt,fe,bt,_t,ce,Et,kt,V,At,It,xt,pe,A,Tt,we,Gt,St,H,Bt,jt,Ce,G,Pt,ye,Ot,Rt,Me,I,Y,Va,qe,S,Nt,Fe,B,Wt,U,Lt,Dt,He,y,Ct,ve,Mt,qt,ge,Ft,Ht,be,$t,zt,$e,J,Kt,ze,j,Vt,_e,Yt,Ut,Ke,P,x,Jt,Ee,Qt,Xt,ke,Zt,ea,ta,Ae,aa,Ve,v,ia,Ie,oa,sa,xe,la,ra,Te,na,ha,Ye,Q,ma,Ue,X,da,Je,Z,ua,Qe,$,Ge,fa,ca,Xe,ee,pa,Ze,te,wa,et,T,Se,ya,va,Be,ga,ba,tt,ae,_a,at,g,je,Ea,ka,Pe,Aa,Ia,Oe,xa,Ta,Re,Ga,it,b,Ya,ot,ie,Sa,st,oe,Ba,lt,se,ja,rt,O,Pa,Ne,Oa,Ra,nt,le,re,Na,z,Wa,ht,R,N,We,La,Da,ne,Ca,Ma,W,Le,qa,Fa,he,Ha;return{c(){u=s("p"),k=i("Following "),p=s("a"),F=i("our partner workshop in May"),f=i(`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),w=m(),_=s("ol"),ue=s("li"),E=s("p"),gt=i(`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),fe=s("strong"),bt=i("subject"),_t=i(" and "),ce=s("strong"),Et=i("theme"),kt=i(`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),V=s("a"),At=i("in our earlier blogpost here"),It=i(`), in particular those related to
style, collection, and artist.`),xt=m(),pe=s("li"),A=s("p"),Tt=i("We should consider measuring similarity based "),we=s("strong"),Gt=i("exclusively"),St=i(` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),H=s("a"),Bt=i("Graph Embedding"),jt=i("."),Ce=m(),G=s("p"),Pt=i(`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),ye=s("strong"),Ot=i("when combining data from multiple museums"),Rt=i(". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),Me=m(),I=s("div"),Y=s("img"),qe=m(),S=s("div"),Nt=i("Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),Fe=m(),B=s("p"),Wt=i("This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),U=s("a"),Lt=i(`one of LiviaAI\u2019s three main
goals`),Dt=i(`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),He=m(),y=s("p"),Ct=i("The goal of LiviaAI is to teach computers how to recognize similar "),ve=s("strong"),Mt=i("images"),qt=i(", rather than similar "),ge=s("strong"),Ft=i("metadata"),Ht=i(". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are similar to each other, but also images that are different, so that it learns what similarity looks like, "),be=s("strong"),$t=i("without depending on the metadata"),zt=i("."),$e=m(),J=s("h2"),Kt=i("Triplets"),ze=m(),j=s("p"),Vt=i("In AI terminology, a group of three images, where the first two are examples of similar images, and the third one is an example of a different image, is called a "),_e=s("strong"),Yt=i("triplet"),Ut=i(". Good triplets will produce an AI model that can measure similarity in a useful way, allowing us to identify related images, no matter which collection they come from. To summarize our workflow:"),Ke=m(),P=s("ul"),x=s("li"),Jt=i("First, we compile lots of triplets, i.e. examples of images that are "),Ee=s("strong"),Qt=i("similar"),Xt=i(", and images that are "),ke=s("strong"),Zt=i("different"),ea=i(" in terms of theme and subject."),ta=m(),Ae=s("li"),aa=i("We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like."),Ve=m(),v=s("p"),ia=i("It is important to understand that the method we use to "),Ie=s("strong"),oa=i("select"),sa=i(" our triplets is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images; and because similar subject and themes are described in similar terms "),xe=s("strong"),la=i("within one museum collection"),ra=i(", this approach is sensible. But ultimately, the AI is supposed to learn the "),Te=s("strong"),na=i("visual representation"),ha=i(" of similarity. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),Ye=m(),Q=s("h2"),ma=i("Comparing Approaches"),Ue=m(),X=s("p"),da=i("So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of both approaches."),Je=m(),Z=s("p"),ua=i("Each approach presents us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) will be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),Qe=m(),$=s("p"),Ge=s("strong"),fa=i("That\u2019s why we need your help:"),ca=i(" Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),Xe=m(),ee=s("p"),pa=i("Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),Ze=m(),te=s("p"),wa=i("Remember: what the computer thinks is a good triplet and what a person might think may be quite divergent, which is exactly why we need the human input (ie: your help). A human-made judgement on similarity and difference will always be valuable - whether the person making ith as professional art historical training or not."),et=m(),T=s("p"),Se=s("strong"),ya=i("We know that ratings are subjective. That\u2019s no problem!"),va=i(` We want to collect as much & as diverse feedback
as possible. If people disagree, that will help us spot the difficult cases. It\u2019s also worth bearing in mind that sometimes it is easier to judge what makes a `),Be=s("strong"),ga=i("bad"),ba=i(" triplet, than what makes a good one. Trust your instincts!"),tt=m(),ae=s("p"),_a=i("If you feel unsure about the process, we recommend:"),at=m(),g=s("ul"),je=s("li"),Ea=i("Don\u2019t overthink it."),ka=m(),Pe=s("li"),Aa=i("Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),Ia=m(),Oe=s("li"),xa=i("Trust your instincts and rate according to your first impression."),Ta=m(),Re=s("li"),Ga=i("If a triplet looks confusing, this is likely due to ambiguous keywords. In this case, you can simply skip it."),it=m(),b=s("iframe"),ot=m(),ie=s("p"),Sa=i("After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. If you need to skip a triplet, click the \u201CSkip this Triplet\u201D link. But please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),st=m(),oe=s("h2"),Ba=i("What Happens with the Data?"),lt=m(),se=s("p"),ja=i("First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),rt=m(),O=s("p"),Pa=i("If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Ne=s("strong"),Oa=i("only"),Ra=i(" (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),nt=m(),le=s("p"),re=s("strong"),Na=i("You can also access the rating app without the blog post here: "),z=s("a"),Wa=i("https://rate-this-triplet.no5.at"),ht=m(),R=s("footer"),N=s("div"),We=s("h4"),La=i("Next post"),Da=m(),ne=s("a"),Ca=i("Developing LiviaAI by Bernhard"),Ma=m(),W=s("div"),Le=s("h4"),qa=i("Previous post"),Fa=m(),he=s("a"),Ha=i("Community Data"),this.h()},l(e){u=l(e,"P",{});var n=r(u);k=o(n,"Following "),p=l(n,"A",{href:!0});var Ua=r(p);F=o(Ua,"our partner workshop in May"),Ua.forEach(a),f=o(n,`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),n.forEach(a),w=d(e),_=l(e,"OL",{});var mt=r(_);ue=l(mt,"LI",{});var Ja=r(ue);E=l(Ja,"P",{});var L=r(E);gt=o(L,`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),fe=l(L,"STRONG",{});var Qa=r(fe);bt=o(Qa,"subject"),Qa.forEach(a),_t=o(L," and "),ce=l(L,"STRONG",{});var Xa=r(ce);Et=o(Xa,"theme"),Xa.forEach(a),kt=o(L,`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),V=l(L,"A",{href:!0});var Za=r(V);At=o(Za,"in our earlier blogpost here"),Za.forEach(a),It=o(L,`), in particular those related to
style, collection, and artist.`),L.forEach(a),Ja.forEach(a),xt=d(mt),pe=l(mt,"LI",{});var ei=r(pe);A=l(ei,"P",{});var me=r(A);Tt=o(me,"We should consider measuring similarity based "),we=l(me,"STRONG",{});var ti=r(we);Gt=o(ti,"exclusively"),ti.forEach(a),St=o(me,` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),H=l(me,"A",{href:!0,rel:!0});var ai=r(H);Bt=o(ai,"Graph Embedding"),ai.forEach(a),jt=o(me,"."),me.forEach(a),ei.forEach(a),mt.forEach(a),Ce=d(e),G=l(e,"P",{});var dt=r(G);Pt=o(dt,`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),ye=l(dt,"STRONG",{});var ii=r(ye);Ot=o(ii,"when combining data from multiple museums"),ii.forEach(a),Rt=o(dt,". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),dt.forEach(a),Me=d(e),I=l(e,"DIV",{style:!0});var oi=r(I);Y=l(oi,"IMG",{src:!0,alt:!0}),oi.forEach(a),qe=d(e),S=l(e,"DIV",{style:!0,class:!0});var si=r(S);Nt=o(si,"Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),si.forEach(a),Fe=d(e),B=l(e,"P",{});var ut=r(B);Wt=o(ut,"This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),U=l(ut,"A",{href:!0});var li=r(U);Lt=o(li,`one of LiviaAI\u2019s three main
goals`),li.forEach(a),Dt=o(ut,`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),ut.forEach(a),He=d(e),y=l(e,"P",{});var D=r(y);Ct=o(D,"The goal of LiviaAI is to teach computers how to recognize similar "),ve=l(D,"STRONG",{});var ri=r(ve);Mt=o(ri,"images"),ri.forEach(a),qt=o(D,", rather than similar "),ge=l(D,"STRONG",{});var ni=r(ge);Ft=o(ni,"metadata"),ni.forEach(a),Ht=o(D,". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are similar to each other, but also images that are different, so that it learns what similarity looks like, "),be=l(D,"STRONG",{});var hi=r(be);$t=o(hi,"without depending on the metadata"),hi.forEach(a),zt=o(D,"."),D.forEach(a),$e=d(e),J=l(e,"H2",{});var mi=r(J);Kt=o(mi,"Triplets"),mi.forEach(a),ze=d(e),j=l(e,"P",{});var ft=r(j);Vt=o(ft,"In AI terminology, a group of three images, where the first two are examples of similar images, and the third one is an example of a different image, is called a "),_e=l(ft,"STRONG",{});var di=r(_e);Yt=o(di,"triplet"),di.forEach(a),Ut=o(ft,". Good triplets will produce an AI model that can measure similarity in a useful way, allowing us to identify related images, no matter which collection they come from. To summarize our workflow:"),ft.forEach(a),Ke=d(e),P=l(e,"UL",{});var ct=r(P);x=l(ct,"LI",{});var de=r(x);Jt=o(de,"First, we compile lots of triplets, i.e. examples of images that are "),Ee=l(de,"STRONG",{});var ui=r(Ee);Qt=o(ui,"similar"),ui.forEach(a),Xt=o(de,", and images that are "),ke=l(de,"STRONG",{});var fi=r(ke);Zt=o(fi,"different"),fi.forEach(a),ea=o(de," in terms of theme and subject."),de.forEach(a),ta=d(ct),Ae=l(ct,"LI",{});var ci=r(Ae);aa=o(ci,"We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like."),ci.forEach(a),ct.forEach(a),Ve=d(e),v=l(e,"P",{});var C=r(v);ia=o(C,"It is important to understand that the method we use to "),Ie=l(C,"STRONG",{});var pi=r(Ie);oa=o(pi,"select"),pi.forEach(a),sa=o(C," our triplets is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images; and because similar subject and themes are described in similar terms "),xe=l(C,"STRONG",{});var wi=r(xe);la=o(wi,"within one museum collection"),wi.forEach(a),ra=o(C,", this approach is sensible. But ultimately, the AI is supposed to learn the "),Te=l(C,"STRONG",{});var yi=r(Te);na=o(yi,"visual representation"),yi.forEach(a),ha=o(C," of similarity. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),C.forEach(a),Ye=d(e),Q=l(e,"H2",{});var vi=r(Q);ma=o(vi,"Comparing Approaches"),vi.forEach(a),Ue=d(e),X=l(e,"P",{});var gi=r(X);da=o(gi,"So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of both approaches."),gi.forEach(a),Je=d(e),Z=l(e,"P",{});var bi=r(Z);ua=o(bi,"Each approach presents us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) will be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),bi.forEach(a),Qe=d(e),$=l(e,"P",{});var $a=r($);Ge=l($a,"STRONG",{});var _i=r(Ge);fa=o(_i,"That\u2019s why we need your help:"),_i.forEach(a),ca=o($a," Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),$a.forEach(a),Xe=d(e),ee=l(e,"P",{});var Ei=r(ee);pa=o(Ei,"Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),Ei.forEach(a),Ze=d(e),te=l(e,"P",{});var ki=r(te);wa=o(ki,"Remember: what the computer thinks is a good triplet and what a person might think may be quite divergent, which is exactly why we need the human input (ie: your help). A human-made judgement on similarity and difference will always be valuable - whether the person making ith as professional art historical training or not."),ki.forEach(a),et=d(e),T=l(e,"P",{});var De=r(T);Se=l(De,"STRONG",{});var Ai=r(Se);ya=o(Ai,"We know that ratings are subjective. That\u2019s no problem!"),Ai.forEach(a),va=o(De,` We want to collect as much & as diverse feedback
as possible. If people disagree, that will help us spot the difficult cases. It\u2019s also worth bearing in mind that sometimes it is easier to judge what makes a `),Be=l(De,"STRONG",{});var Ii=r(Be);ga=o(Ii,"bad"),Ii.forEach(a),ba=o(De," triplet, than what makes a good one. Trust your instincts!"),De.forEach(a),tt=d(e),ae=l(e,"P",{});var xi=r(ae);_a=o(xi,"If you feel unsure about the process, we recommend:"),xi.forEach(a),at=d(e),g=l(e,"UL",{});var M=r(g);je=l(M,"LI",{});var Ti=r(je);Ea=o(Ti,"Don\u2019t overthink it."),Ti.forEach(a),ka=d(M),Pe=l(M,"LI",{});var Gi=r(Pe);Aa=o(Gi,"Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),Gi.forEach(a),Ia=d(M),Oe=l(M,"LI",{});var Si=r(Oe);xa=o(Si,"Trust your instincts and rate according to your first impression."),Si.forEach(a),Ta=d(M),Re=l(M,"LI",{});var Bi=r(Re);Ga=o(Bi,"If a triplet looks confusing, this is likely due to ambiguous keywords. In this case, you can simply skip it."),Bi.forEach(a),M.forEach(a),it=d(e),b=l(e,"IFRAME",{class:!0,src:!0,style:!0});var zi=r(b);zi.forEach(a),ot=d(e),ie=l(e,"P",{});var ji=r(ie);Sa=o(ji,"After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. If you need to skip a triplet, click the \u201CSkip this Triplet\u201D link. But please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),ji.forEach(a),st=d(e),oe=l(e,"H2",{});var Pi=r(oe);Ba=o(Pi,"What Happens with the Data?"),Pi.forEach(a),lt=d(e),se=l(e,"P",{});var Oi=r(se);ja=o(Oi,"First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),Oi.forEach(a),rt=d(e),O=l(e,"P",{});var pt=r(O);Pa=o(pt,"If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Ne=l(pt,"STRONG",{});var Ri=r(Ne);Oa=o(Ri,"only"),Ri.forEach(a),Ra=o(pt," (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),pt.forEach(a),nt=d(e),le=l(e,"P",{});var Ni=r(le);re=l(Ni,"STRONG",{});var za=r(re);Na=o(za,"You can also access the rating app without the blog post here: "),z=l(za,"A",{href:!0,rel:!0});var Wi=r(z);Wa=o(Wi,"https://rate-this-triplet.no5.at"),Wi.forEach(a),za.forEach(a),Ni.forEach(a),ht=d(e),R=l(e,"FOOTER",{});var wt=r(R);N=l(wt,"DIV",{class:!0});var yt=r(N);We=l(yt,"H4",{});var Li=r(We);La=o(Li,"Next post"),Li.forEach(a),Da=d(yt),ne=l(yt,"A",{href:!0});var Di=r(ne);Ca=o(Di,"Developing LiviaAI by Bernhard"),Di.forEach(a),yt.forEach(a),Ma=d(wt),W=l(wt,"DIV",{class:!0});var vt=r(W);Le=l(vt,"H4",{});var Ci=r(Le);qa=o(Ci,"Previous post"),Ci.forEach(a),Fa=d(vt),he=l(vt,"A",{href:!0});var Mi=r(he);Ha=o(Mi,"Community Data"),Mi.forEach(a),vt.forEach(a),wt.forEach(a),this.h()},h(){c(p,"href","/blog/2022-05-community-data"),c(V,"href","/blog/2022-04-machines-reading-metadata"),c(H,"href","https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4"),c(H,"rel","nofollow"),Hi(Y.src,Va="/blog/2022-06-exploring-similarity/3d_sentence_embeddings_all.png")||c(Y,"src",Va),c(Y,"alt","3D scatterplot of metadata sentence embedding vectors for all museums combined"),q(I,"display","flex"),q(I,"justify-content","center"),q(I,"padding-top","30px"),q(S,"width","100%"),c(S,"class","image-caption centered"),c(U,"href","/blog/2022-04-hello-world"),c(b,"class","exploring-similarity-iframe"),Hi(b.src,Ya="https://rate-this-triplet.no5.at/embed.html")||c(b,"src",Ya),q(b,"width","100%"),q(b,"height","700px"),q(b,"margin","0"),q(b,"transform","none"),c(z,"href","https://rate-this-triplet.no5.at"),c(z,"rel","nofollow"),c(ne,"href","/blog/2022-10-developing-livia-bernhard/"),c(N,"class","next-post"),c(he,"href","/blog/2022-05-community-data/"),c(W,"class","previous-post")},m(e,n){h(e,u,n),t(u,k),t(u,p),t(p,F),t(u,f),h(e,w,n),h(e,_,n),t(_,ue),t(ue,E),t(E,gt),t(E,fe),t(fe,bt),t(E,_t),t(E,ce),t(ce,Et),t(E,kt),t(E,V),t(V,At),t(E,It),t(_,xt),t(_,pe),t(pe,A),t(A,Tt),t(A,we),t(we,Gt),t(A,St),t(A,H),t(H,Bt),t(A,jt),h(e,Ce,n),h(e,G,n),t(G,Pt),t(G,ye),t(ye,Ot),t(G,Rt),h(e,Me,n),h(e,I,n),t(I,Y),h(e,qe,n),h(e,S,n),t(S,Nt),h(e,Fe,n),h(e,B,n),t(B,Wt),t(B,U),t(U,Lt),t(B,Dt),h(e,He,n),h(e,y,n),t(y,Ct),t(y,ve),t(ve,Mt),t(y,qt),t(y,ge),t(ge,Ft),t(y,Ht),t(y,be),t(be,$t),t(y,zt),h(e,$e,n),h(e,J,n),t(J,Kt),h(e,ze,n),h(e,j,n),t(j,Vt),t(j,_e),t(_e,Yt),t(j,Ut),h(e,Ke,n),h(e,P,n),t(P,x),t(x,Jt),t(x,Ee),t(Ee,Qt),t(x,Xt),t(x,ke),t(ke,Zt),t(x,ea),t(P,ta),t(P,Ae),t(Ae,aa),h(e,Ve,n),h(e,v,n),t(v,ia),t(v,Ie),t(Ie,oa),t(v,sa),t(v,xe),t(xe,la),t(v,ra),t(v,Te),t(Te,na),t(v,ha),h(e,Ye,n),h(e,Q,n),t(Q,ma),h(e,Ue,n),h(e,X,n),t(X,da),h(e,Je,n),h(e,Z,n),t(Z,ua),h(e,Qe,n),h(e,$,n),t($,Ge),t(Ge,fa),t($,ca),h(e,Xe,n),h(e,ee,n),t(ee,pa),h(e,Ze,n),h(e,te,n),t(te,wa),h(e,et,n),h(e,T,n),t(T,Se),t(Se,ya),t(T,va),t(T,Be),t(Be,ga),t(T,ba),h(e,tt,n),h(e,ae,n),t(ae,_a),h(e,at,n),h(e,g,n),t(g,je),t(je,Ea),t(g,ka),t(g,Pe),t(Pe,Aa),t(g,Ia),t(g,Oe),t(Oe,xa),t(g,Ta),t(g,Re),t(Re,Ga),h(e,it,n),h(e,b,n),h(e,ot,n),h(e,ie,n),t(ie,Sa),h(e,st,n),h(e,oe,n),t(oe,Ba),h(e,lt,n),h(e,se,n),t(se,ja),h(e,rt,n),h(e,O,n),t(O,Pa),t(O,Ne),t(Ne,Oa),t(O,Ra),h(e,nt,n),h(e,le,n),t(le,re),t(re,Na),t(re,z),t(z,Wa),h(e,ht,n),h(e,R,n),t(R,N),t(N,We),t(We,La),t(N,Da),t(N,ne),t(ne,Ca),t(R,Ma),t(R,W),t(W,Le),t(Le,qa),t(W,Fa),t(W,he),t(he,Ha)},d(e){e&&a(u),e&&a(w),e&&a(_),e&&a(Ce),e&&a(G),e&&a(Me),e&&a(I),e&&a(qe),e&&a(S),e&&a(Fe),e&&a(B),e&&a(He),e&&a(y),e&&a($e),e&&a(J),e&&a(ze),e&&a(j),e&&a(Ke),e&&a(P),e&&a(Ve),e&&a(v),e&&a(Ye),e&&a(Q),e&&a(Ue),e&&a(X),e&&a(Je),e&&a(Z),e&&a(Qe),e&&a($),e&&a(Xe),e&&a(ee),e&&a(Ze),e&&a(te),e&&a(et),e&&a(T),e&&a(tt),e&&a(ae),e&&a(at),e&&a(g),e&&a(it),e&&a(b),e&&a(ot),e&&a(ie),e&&a(st),e&&a(oe),e&&a(lt),e&&a(se),e&&a(rt),e&&a(O),e&&a(nt),e&&a(le),e&&a(ht),e&&a(R)}}}function oo(K){let u,k;const p=[K[0],$i];let F={$$slots:{default:[io]},$$scope:{ctx:K}};for(let f=0;f<p.length;f+=1)F=Ka(F,p[f]);return u=new ao({props:F}),{c(){Ui(u.$$.fragment)},l(f){Ji(u.$$.fragment,f)},m(f,w){Qi(u,f,w),k=!0},p(f,[w]){const _=w&1?Xi(p,[w&1&&qi(f[0]),w&0&&qi($i)]):{};w&2&&(_.$$scope={dirty:w,ctx:f}),u.$set(_)},i(f){k||(Zi(u.$$.fragment,f),k=!0)},o(f){eo(u.$$.fragment,f),k=!1},d(f){to(u,f)}}}const $i={title:"Exploring Similarity: Triplets and How to Choose Them",description:"Help us understand the quality of our data by participating in a small crowdsourcing experiment.",url:"https://liviaai.at/blog/2022-06-exploring-similarity",date:"June 15, 2022"};function so(K,u,k){return K.$$set=p=>{k(0,u=Ka(Ka({},u),Fi(p)))},u=Fi(u),[u]}class no extends Ki{constructor(u){super();Vi(this,u,so,oo,Yi,{})}}export{no as default,$i as metadata};
