import{S as Aa,i as Ta,s as Ia,C as $t,w as Sa,x as Ma,y as Ba,z as Pa,A as ba,q as ja,o as Ra,B as Wa,O as _a,e as s,t as o,k as u,c as n,a as l,h as r,d as t,m,b as c,N as za,f as ka,g as h,J as a}from"../../chunks/vendor-b56f9969.js";import{P as La}from"../../chunks/_post-749b8f63.js";function Oa(G){let f,b,_,p,d,w,K,Le,V,Oe,De,ue,g,Fe,J,qe,$e,ne,Ce,He,le,Ne,Ue,j,Ge,Ke,me,Q,Ve,pe,I,Je,he,Qe,Xe,we,k,Ye,ce,Ze,et,fe,tt,at,ge,S,ot,R,rt,it,ve,X,st,ye,Y,nt,be,y,lt,W,ht,ct,z,ft,dt,L,ut,mt,_e,Z,pt,ke,ee,wt,Ee,E,gt,O,vt,yt,de,bt,_t,xe,v,kt,D,Et,xt,F,At,Tt,q,It,St,$,Mt,Bt,Ae,te,Pt,Te,M,jt,C,Rt,Wt,Ie,T,Ct,Se,H,zt,Me,B,Lt,N,Ot,Dt,Be,ae,Ft,Pe,U,oe,qt;return{c(){f=s("h1"),b=o("Machines Reading Metadata"),_=u(),p=s("p"),d=o("It\u2019s time for the first update from the tech team! The tech team, that\u2019s us: intern "),w=s("a"),K=o("Bernhard"),Le=o(", student of Artificial Intelligence at the University of Linz, and me, "),V=s("a"),Oe=o("Rainer"),De=o(", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),ue=u(),g=s("p"),Fe=o("As we explained in our "),J=s("a"),qe=o("introductory post"),$e=o(", one of the goals of LiviaAI is to find out if we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),ne=s("strong"),Ce=o("connect their collections to those of other museums more easily"),He=o(". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),le=s("strong"),Ne=o("new forms of online museum experiences that cross institutional boundaries"),Ue=o(". Interested in the "),j=s("a"),Ge=o("Wiener Moderne"),Ke=o("? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),me=u(),Q=s("h2"),Ve=o("Similar or Not?"),pe=u(),I=s("p"),Je=o("The big question is, of course: what "),he=s("em"),Qe=o("does"),Xe=o(" make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),we=u(),k=s("p"),Ye=o("In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),ce=s("em"),Ze=o("images"),et=o(", we first want to understand how curators have been describing them - and search for similarity in these "),fe=s("em"),tt=o("descriptions"),at=o("."),ge=u(),S=s("p"),ot=o("Once we have identified artworks that are described in similar terms, we will use the images as examples to train the algorithm. This is also called "),R=s("a"),rt=o("representation or feature learning"),it=o(", because the algorithm learns - by itself - how the representation of similiarity manifests itself in the images."),ve=u(),X=s("h2"),st=o("Understanding Our Partner Collections"),ye=u(),Y=s("p"),nt=o("The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),be=u(),y=s("p"),lt=o("Our three partners, the "),W=s("a"),ht=o("Belvedere"),ct=o(", the "),z=s("a"),ft=o("MAK"),dt=o(" and the "),L=s("a"),ut=o("Wien Museum"),mt=o(" have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),_e=u(),Z=s("p"),pt=o("Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not exist (or be relevant!) in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the metadata says - is not as straightforward as one might hope."),ke=u(),ee=s("h2"),wt=o("Reading Metadata - From a Distance"),Ee=u(),E=s("p"),gt=o("Luckily, AI can help us here, too. In LiviaAI, we use a technique called "),O=s("a"),vt=o("Sentence Embedding"),yt=o(" to get a better picture of the structure, themes and topics of our collections. Sentence Embedding is a computational method that transforms written text - such as a sentence or a paragraph - to a "),de=s("em"),bt=o("vector"),_t=o(", a numeric representation that we can treat as a point in space. Sentences that share similar semantics will be located nearby in that space, which means we can deduct information about the similarity of two texts simply by measuring the distance between them."),xe=u(),v=s("p"),kt=o("There are different ways to compute embeddings. Some algorithms (like "),D=s("a"),Et=o("LSI"),xt=o(" or "),F=s("a"),At=o("Doc2Vec"),Tt=o(") start from a blank state, with no prior knowledge of language or vocabulary. They take the full dataset as input (say, the fulltext of a novel), and fit the sentence representations so that sentences that use (or are surrounded by) similar vocabulary will end up close together. Other approaches start from pre-trained models, which means they will already come pre-loaded with knowledge trained from a large text corpus. In our case, we use "),q=s("a"),It=o("BERT"),St=o(" a large language model developed in 2018 by Google researchers, which was shortly after adapted for the purpose of high-performance "),$=s("a"),Mt=o("sentence embedding"),Bt=o("."),Ae=u(),te=s("p"),Pt=o("The advantage of a pre-trained model is that it already encodes a lot of language context. In simplified terms, BERT can already tell you that a \u201Cpair of boots\u201D is closer in meaning to a \u201Cpair of sneakers\u201D than a \u201Cpair of pants\u201D. The terms for \u201Cpencil drawing\u201D would have a certain distance from \u201Cphotograph\u201D. But the distance between a \u201Cpencil drawing of a person\u201D and a \u201Cphotograph of a person\u201D would be smaller."),Te=u(),M=s("p"),jt=o("Here\u2019s an example for how BERT grants us a new perspective on our data. The diagram below visualizes 6.200 records from the Wien Museum. (That\u2019s only about 10% of their total collection. But it helps to make the diagram load a bit faster in this blogpost.) Each metadata record from the collection is represented as a point in 3D space"),C=s("a"),Rt=o("1"),Wt=o(". We have colored the dots according to the categories that curators have assigned them in the collection management system. This means we\u2019d expect a to see a pattern where dots of similar color should form clusters. And - luckily - that\u2019s the case. The diagram is interactive! Try zooming/panning with mouse or touch, and explore the clusters that have emerged."),Ie=u(),T=s("iframe"),Se=u(),H=s("span"),zt=o("Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum. Color represents a distinct combination of classifications assigned by the curators."),Me=u(),B=s("p"),Lt=o("We are currently sifting through our data, and are starting to draw samples of \u201Csimilar\u201D and \u201Cdifferent\u201D images to get a better grip on the possiblities and limitations of the approach. Picking training data based on sentence embeddings is an idea that was initially developed - and tested successfully - "),N=s("a"),Ot=o("in a different context by AIT colleague Alexander Schindler et al."),Dt=o(", who also inspired and advised on the preparation of this project. Which means we are\u2026 sort of\u2026 confident that this will work. But it\u2019s all crucially dependent on the data - quality, level of detail, whether curators have used free text vs. keywords, whether individual records differ sufficiently from each other, or whether information is often sparse, formulaic or repetitive, etc."),Be=u(),ae=s("p"),Ft=o("For now, the goal is only to prepare enough material for discussion at our upcoming workshop. But our journey is guaranteed to remain exciting!"),Pe=u(),U=s("ol"),oe=s("li"),qt=o("For the sake of completeness: sentence embeddings work in higher dimensional space. In our case, for example, we compute clusters and distances in 50 dimensions. I.e. technically, what you see in the diagram are 50-dimensional embeddings projected to three dimensions for the purpose of visualization. This also means that the 3D visualization isn't always able to capture the true geometry of the cluster patterns."),this.h()},l(e){f=n(e,"H1",{});var i=l(f);b=r(i,"Machines Reading Metadata"),i.forEach(t),_=m(e),p=n(e,"P",{});var re=l(p);d=r(re,"It\u2019s time for the first update from the tech team! The tech team, that\u2019s us: intern "),w=n(re,"A",{href:!0});var Ht=l(w);K=r(Ht,"Bernhard"),Ht.forEach(t),Le=r(re,", student of Artificial Intelligence at the University of Linz, and me, "),V=n(re,"A",{href:!0});var Nt=l(V);Oe=r(Nt,"Rainer"),Nt.forEach(t),De=r(re,", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),re.forEach(t),ue=m(e),g=n(e,"P",{});var x=l(g);Fe=r(x,"As we explained in our "),J=n(x,"A",{href:!0});var Ut=l(J);qe=r(Ut,"introductory post"),Ut.forEach(t),$e=r(x,", one of the goals of LiviaAI is to find out if we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),ne=n(x,"STRONG",{});var Gt=l(ne);Ce=r(Gt,"connect their collections to those of other museums more easily"),Gt.forEach(t),He=r(x,". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),le=n(x,"STRONG",{});var Kt=l(le);Ne=r(Kt,"new forms of online museum experiences that cross institutional boundaries"),Kt.forEach(t),Ue=r(x,". Interested in the "),j=n(x,"A",{href:!0,rel:!0});var Vt=l(j);Ge=r(Vt,"Wiener Moderne"),Vt.forEach(t),Ke=r(x,"? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),x.forEach(t),me=m(e),Q=n(e,"H2",{});var Jt=l(Q);Ve=r(Jt,"Similar or Not?"),Jt.forEach(t),pe=m(e),I=n(e,"P",{});var je=l(I);Je=r(je,"The big question is, of course: what "),he=n(je,"EM",{});var Qt=l(he);Qe=r(Qt,"does"),Qt.forEach(t),Xe=r(je," make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),je.forEach(t),we=m(e),k=n(e,"P",{});var ie=l(k);Ye=r(ie,"In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),ce=n(ie,"EM",{});var Xt=l(ce);Ze=r(Xt,"images"),Xt.forEach(t),et=r(ie,", we first want to understand how curators have been describing them - and search for similarity in these "),fe=n(ie,"EM",{});var Yt=l(fe);tt=r(Yt,"descriptions"),Yt.forEach(t),at=r(ie,"."),ie.forEach(t),ge=m(e),S=n(e,"P",{});var Re=l(S);ot=r(Re,"Once we have identified artworks that are described in similar terms, we will use the images as examples to train the algorithm. This is also called "),R=n(Re,"A",{href:!0,rel:!0});var Zt=l(R);rt=r(Zt,"representation or feature learning"),Zt.forEach(t),it=r(Re,", because the algorithm learns - by itself - how the representation of similiarity manifests itself in the images."),Re.forEach(t),ve=m(e),X=n(e,"H2",{});var ea=l(X);st=r(ea,"Understanding Our Partner Collections"),ea.forEach(t),ye=m(e),Y=n(e,"P",{});var ta=l(Y);nt=r(ta,"The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),ta.forEach(t),be=m(e),y=n(e,"P",{});var P=l(y);lt=r(P,"Our three partners, the "),W=n(P,"A",{href:!0,rel:!0});var aa=l(W);ht=r(aa,"Belvedere"),aa.forEach(t),ct=r(P,", the "),z=n(P,"A",{href:!0,rel:!0});var oa=l(z);ft=r(oa,"MAK"),oa.forEach(t),dt=r(P," and the "),L=n(P,"A",{href:!0,rel:!0});var ra=l(L);ut=r(ra,"Wien Museum"),ra.forEach(t),mt=r(P," have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),P.forEach(t),_e=m(e),Z=n(e,"P",{});var ia=l(Z);pt=r(ia,"Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not exist (or be relevant!) in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the metadata says - is not as straightforward as one might hope."),ia.forEach(t),ke=m(e),ee=n(e,"H2",{});var sa=l(ee);wt=r(sa,"Reading Metadata - From a Distance"),sa.forEach(t),Ee=m(e),E=n(e,"P",{});var se=l(E);gt=r(se,"Luckily, AI can help us here, too. In LiviaAI, we use a technique called "),O=n(se,"A",{href:!0,rel:!0});var na=l(O);vt=r(na,"Sentence Embedding"),na.forEach(t),yt=r(se," to get a better picture of the structure, themes and topics of our collections. Sentence Embedding is a computational method that transforms written text - such as a sentence or a paragraph - to a "),de=n(se,"EM",{});var la=l(de);bt=r(la,"vector"),la.forEach(t),_t=r(se,", a numeric representation that we can treat as a point in space. Sentences that share similar semantics will be located nearby in that space, which means we can deduct information about the similarity of two texts simply by measuring the distance between them."),se.forEach(t),xe=m(e),v=n(e,"P",{});var A=l(v);kt=r(A,"There are different ways to compute embeddings. Some algorithms (like "),D=n(A,"A",{href:!0,rel:!0});var ha=l(D);Et=r(ha,"LSI"),ha.forEach(t),xt=r(A," or "),F=n(A,"A",{href:!0,rel:!0});var ca=l(F);At=r(ca,"Doc2Vec"),ca.forEach(t),Tt=r(A,") start from a blank state, with no prior knowledge of language or vocabulary. They take the full dataset as input (say, the fulltext of a novel), and fit the sentence representations so that sentences that use (or are surrounded by) similar vocabulary will end up close together. Other approaches start from pre-trained models, which means they will already come pre-loaded with knowledge trained from a large text corpus. In our case, we use "),q=n(A,"A",{href:!0,rel:!0});var fa=l(q);It=r(fa,"BERT"),fa.forEach(t),St=r(A," a large language model developed in 2018 by Google researchers, which was shortly after adapted for the purpose of high-performance "),$=n(A,"A",{href:!0,rel:!0});var da=l($);Mt=r(da,"sentence embedding"),da.forEach(t),Bt=r(A,"."),A.forEach(t),Ae=m(e),te=n(e,"P",{});var ua=l(te);Pt=r(ua,"The advantage of a pre-trained model is that it already encodes a lot of language context. In simplified terms, BERT can already tell you that a \u201Cpair of boots\u201D is closer in meaning to a \u201Cpair of sneakers\u201D than a \u201Cpair of pants\u201D. The terms for \u201Cpencil drawing\u201D would have a certain distance from \u201Cphotograph\u201D. But the distance between a \u201Cpencil drawing of a person\u201D and a \u201Cphotograph of a person\u201D would be smaller."),ua.forEach(t),Te=m(e),M=n(e,"P",{});var We=l(M);jt=r(We,"Here\u2019s an example for how BERT grants us a new perspective on our data. The diagram below visualizes 6.200 records from the Wien Museum. (That\u2019s only about 10% of their total collection. But it helps to make the diagram load a bit faster in this blogpost.) Each metadata record from the collection is represented as a point in 3D space"),C=n(We,"A",{class:!0,href:!0});var ma=l(C);Rt=r(ma,"1"),ma.forEach(t),Wt=r(We,". We have colored the dots according to the categories that curators have assigned them in the collection management system. This means we\u2019d expect a to see a pattern where dots of similar color should form clusters. And - luckily - that\u2019s the case. The diagram is interactive! Try zooming/panning with mouse or touch, and explore the clusters that have emerged."),We.forEach(t),Ie=m(e),T=n(e,"IFRAME",{src:!0,style:!0});var xa=l(T);xa.forEach(t),Se=m(e),H=n(e,"SPAN",{class:!0});var pa=l(H);zt=r(pa,"Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum. Color represents a distinct combination of classifications assigned by the curators."),pa.forEach(t),Me=m(e),B=n(e,"P",{});var ze=l(B);Lt=r(ze,"We are currently sifting through our data, and are starting to draw samples of \u201Csimilar\u201D and \u201Cdifferent\u201D images to get a better grip on the possiblities and limitations of the approach. Picking training data based on sentence embeddings is an idea that was initially developed - and tested successfully - "),N=n(ze,"A",{href:!0,rel:!0});var wa=l(N);Ot=r(wa,"in a different context by AIT colleague Alexander Schindler et al."),wa.forEach(t),Dt=r(ze,", who also inspired and advised on the preparation of this project. Which means we are\u2026 sort of\u2026 confident that this will work. But it\u2019s all crucially dependent on the data - quality, level of detail, whether curators have used free text vs. keywords, whether individual records differ sufficiently from each other, or whether information is often sparse, formulaic or repetitive, etc."),ze.forEach(t),Be=m(e),ae=n(e,"P",{});var ga=l(ae);Ft=r(ga,"For now, the goal is only to prepare enough material for discussion at our upcoming workshop. But our journey is guaranteed to remain exciting!"),ga.forEach(t),Pe=m(e),U=n(e,"OL",{class:!0});var va=l(U);oe=n(va,"LI",{id:!0});var ya=l(oe);qt=r(ya,"For the sake of completeness: sentence embeddings work in higher dimensional space. In our case, for example, we compute clusters and distances in 50 dimensions. I.e. technically, what you see in the diagram are 50-dimensional embeddings projected to three dimensions for the purpose of visualization. This also means that the 3D visualization isn't always able to capture the true geometry of the cluster patterns."),ya.forEach(t),va.forEach(t),this.h()},h(){c(w,"href","#"),c(V,"href","#"),c(J,"href","2022-04-hello-world"),c(j,"href","https://en.wikipedia.org/wiki/Wiener_Moderne"),c(j,"rel","nofollow"),c(R,"href","https://en.wikipedia.org/wiki/Feature_learning"),c(R,"rel","nofollow"),c(W,"href","https://www.belvedere.at/"),c(W,"rel","nofollow"),c(z,"href","https://www.mak.at"),c(z,"rel","nofollow"),c(L,"href","https://www.wienmuseum.at/"),c(L,"rel","nofollow"),c(O,"href","https://en.wikipedia.org/wiki/Sentence_embedding"),c(O,"rel","nofollow"),c(D,"href","https://en.wikipedia.org/wiki/Latent_semantic_analysis"),c(D,"rel","nofollow"),c(F,"href","https://medium.com/wisio/a-gentle-introduction-to-doc2vec-db3e8c0cce5e"),c(F,"rel","nofollow"),c(q,"href","https://en.wikipedia.org/wiki/BERT_(language_model)"),c(q,"rel","nofollow"),c($,"href","https://arxiv.org/abs/1908.10084"),c($,"rel","nofollow"),c(C,"class","footnote"),c(C,"href","#footnote-1"),za(T.src,Ct="/embeds/blog/2022-04/embeddings-example.html")||c(T,"src",Ct),ka(T,"width","800px"),ka(T,"height","600px"),c(H,"class","image-caption centered"),c(N,"href","https://arxiv.org/pdf/2003.12265.pdf"),c(N,"rel","nofollow"),c(oe,"id","footnote-1"),c(U,"class","footnotes")},m(e,i){h(e,f,i),a(f,b),h(e,_,i),h(e,p,i),a(p,d),a(p,w),a(w,K),a(p,Le),a(p,V),a(V,Oe),a(p,De),h(e,ue,i),h(e,g,i),a(g,Fe),a(g,J),a(J,qe),a(g,$e),a(g,ne),a(ne,Ce),a(g,He),a(g,le),a(le,Ne),a(g,Ue),a(g,j),a(j,Ge),a(g,Ke),h(e,me,i),h(e,Q,i),a(Q,Ve),h(e,pe,i),h(e,I,i),a(I,Je),a(I,he),a(he,Qe),a(I,Xe),h(e,we,i),h(e,k,i),a(k,Ye),a(k,ce),a(ce,Ze),a(k,et),a(k,fe),a(fe,tt),a(k,at),h(e,ge,i),h(e,S,i),a(S,ot),a(S,R),a(R,rt),a(S,it),h(e,ve,i),h(e,X,i),a(X,st),h(e,ye,i),h(e,Y,i),a(Y,nt),h(e,be,i),h(e,y,i),a(y,lt),a(y,W),a(W,ht),a(y,ct),a(y,z),a(z,ft),a(y,dt),a(y,L),a(L,ut),a(y,mt),h(e,_e,i),h(e,Z,i),a(Z,pt),h(e,ke,i),h(e,ee,i),a(ee,wt),h(e,Ee,i),h(e,E,i),a(E,gt),a(E,O),a(O,vt),a(E,yt),a(E,de),a(de,bt),a(E,_t),h(e,xe,i),h(e,v,i),a(v,kt),a(v,D),a(D,Et),a(v,xt),a(v,F),a(F,At),a(v,Tt),a(v,q),a(q,It),a(v,St),a(v,$),a($,Mt),a(v,Bt),h(e,Ae,i),h(e,te,i),a(te,Pt),h(e,Te,i),h(e,M,i),a(M,jt),a(M,C),a(C,Rt),a(M,Wt),h(e,Ie,i),h(e,T,i),h(e,Se,i),h(e,H,i),a(H,zt),h(e,Me,i),h(e,B,i),a(B,Lt),a(B,N),a(N,Ot),a(B,Dt),h(e,Be,i),h(e,ae,i),a(ae,Ft),h(e,Pe,i),h(e,U,i),a(U,oe),a(oe,qt)},d(e){e&&t(f),e&&t(_),e&&t(p),e&&t(ue),e&&t(g),e&&t(me),e&&t(Q),e&&t(pe),e&&t(I),e&&t(we),e&&t(k),e&&t(ge),e&&t(S),e&&t(ve),e&&t(X),e&&t(ye),e&&t(Y),e&&t(be),e&&t(y),e&&t(_e),e&&t(Z),e&&t(ke),e&&t(ee),e&&t(Ee),e&&t(E),e&&t(xe),e&&t(v),e&&t(Ae),e&&t(te),e&&t(Te),e&&t(M),e&&t(Ie),e&&t(T),e&&t(Se),e&&t(H),e&&t(Me),e&&t(B),e&&t(Be),e&&t(ae),e&&t(Pe),e&&t(U)}}}function Da(G){let f,b;const _=[G[0],Ea];let p={$$slots:{default:[Oa]},$$scope:{ctx:G}};for(let d=0;d<_.length;d+=1)p=$t(p,_[d]);return f=new La({props:p}),{c(){Sa(f.$$.fragment)},l(d){Ma(f.$$.fragment,d)},m(d,w){Ba(f,d,w),b=!0},p(d,[w]){const K=w&1?Pa(_,[w&1&&ba(d[0]),w&0&&ba(Ea)]):{};w&2&&(K.$$scope={dirty:w,ctx:d}),f.$set(K)},i(d){b||(ja(f.$$.fragment,d),b=!0)},o(d){Ra(f.$$.fragment,d),b=!1},d(d){Wa(f,d)}}}const Ea={title:"Machines Reading Metadata",description:"It's time for the first update from the tech team! The tech team, that's us: intern Bernhard, student of Artificial Intelligence at the University of Linz, and me, Rainer, Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology.",url:"https://liviaai.at/blog/2022-04-machines-reading-metadata"};function Fa(G,f,b){return G.$$set=_=>{b(0,f=$t($t({},f),_a(_)))},f=_a(f),[f]}class Ca extends Aa{constructor(f){super();Ta(this,f,Fa,Da,Ia,{})}}export{Ca as default,Ea as metadata};
