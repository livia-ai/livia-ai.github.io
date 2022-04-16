import{S as rt,i as it,s as st,e as s,t as a,k as m,c as n,a as l,h as r,d as t,m as f,b as k,N as nt,f as tt,g as h,J as o,K as Fe}from"../../chunks/vendor-ea2447eb.js";function lt(ot){let y,oe,G,c,ae,A,re,ie,I,se,ne,H,u,le,T,he,ue,O,me,fe,P,ce,we,_,de,pe,U,M,ye,D,v,ve,B,ge,be,J,w,ke,F,_e,xe,N,Ee,Ae,K,S,Ie,z,W,Te,Q,j,Me,V,g,C,Se,We,x,je,E,Re,Le,X,b,Oe,q,Pe,Be,Y,p,Ne;return{c(){y=s("h1"),oe=a("Machines Reading Metadata"),G=m(),c=s("p"),ae=a("We are now six weeks into our project, and it\u2019s time for an update on the work of our tech team! The tech team, by the way, that\u2019s us: intern and Machine Learning student "),A=s("a"),re=a("Bernhard"),ie=a(" and me, "),I=s("a"),se=a("Rainer"),ne=a(", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),H=m(),u=s("p"),le=a("As we explained in our "),T=s("a"),he=a("introductory post"),ue=a(`, the main goal of LiviaAI is to find out whether we can teach computers to judge \u201Csimilarity\u201D of artworks. Why?
For two reasons: first, this will enable museums in the future to `),O=s("strong"),me=a("more easily connect their collections to those of other museums"),fe=a(". Computers would autonomously handle the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will also enable "),P=s("strong"),ce=a("new forms of online museum experiences that cross institutional boundaries"),we=a(". Interested in the "),_=s("a"),de=a("Wiener Moderne"),pe=a("? Then why stay within the confines of the one or two largest museums, when other, smaller, museums might house many lesser known treasures, too?"),U=m(),M=s("h2"),ye=a("Similar or Not?"),D=m(),v=s("p"),ve=a("The big question, of course, is: what "),B=s("em"),ge=a("does"),be=a(" make two artworks similar? And how do we even get enough of the right data for teaching a machine to mimic our understanding of similarity? Approaches which have been used previously look, for example, at similar colours. Or they use artificial intelligence to detect objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict a flower?"),J=m(),w=s("p"),ke=a("In LiviaAI, we want to take a different approach. Instead of coming up with our own definitions of similarity, or relying on simple metrics like color, we want to leverage the knowledge that museum curators have already accumulated into their collections over the years. Before teaching computers how to "),F=s("em"),_e=a("measure"),xe=a(" similarity, we first want to understand how curators have been "),N=s("em"),Ee=a("describing"),Ae=a(" similar artworks in their collections."),K=m(),S=s("h2"),Ie=a("Understanding our Partner Collections"),z=m(),W=s("p"),Te=a("The first step in our journey is therefore to get a better understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items over the years? And how can we translate all this existing knowledge - and hard work - into data that computers can work with?"),Q=m(),j=s("p"),Me=a("[\u2026unfinished\u2026 material for re-use \u2026]"),V=m(),g=s("ul"),C=s("li"),Se=a(`First, we will collect examples of images that are \u201Csimilar\u201D in some way. We will also collect counter-examples, so that the
computer can learn what \u201Cdifferent\u201D images look like. (More on the ways in which images might resemble or differ later.)`),We=m(),x=s("li"),je=a(`Second, we will use the examples to train an AI algorithm, so that it learns how \u201Csimilarity\u201D manifests itself in the image. Or,
in other words: so that it learns what to look for in similar vs. different images. (This process is called
`),E=s("a"),Re=a("representation or feature learning"),Le=a(")."),X=m(),b=s("p"),Oe=a("The bad news: we need "),q=s("strong"),Pe=a("a lot"),Be=a(" of examples to train the AI. We expect that we\u2019ll need at least 10.000 examples as the absolute minimum. And that\u2019s a much bigger training set than we could ever assemble by hand."),Y=m(),p=s("iframe"),this.h()},l(e){y=n(e,"H1",{});var i=l(y);oe=r(i,"Machines Reading Metadata"),i.forEach(t),G=f(e),c=n(e,"P",{});var R=l(c);ae=r(R,"We are now six weeks into our project, and it\u2019s time for an update on the work of our tech team! The tech team, by the way, that\u2019s us: intern and Machine Learning student "),A=n(R,"A",{href:!0});var Ce=l(A);re=r(Ce,"Bernhard"),Ce.forEach(t),ie=r(R," and me, "),I=n(R,"A",{href:!0});var qe=l(I);se=r(qe,"Rainer"),qe.forEach(t),ne=r(R,", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),R.forEach(t),H=f(e),u=n(e,"P",{});var d=l(u);le=r(d,"As we explained in our "),T=n(d,"A",{href:!0});var Ge=l(T);he=r(Ge,"introductory post"),Ge.forEach(t),ue=r(d,`, the main goal of LiviaAI is to find out whether we can teach computers to judge \u201Csimilarity\u201D of artworks. Why?
For two reasons: first, this will enable museums in the future to `),O=n(d,"STRONG",{});var He=l(O);me=r(He,"more easily connect their collections to those of other museums"),He.forEach(t),fe=r(d,". Computers would autonomously handle the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will also enable "),P=n(d,"STRONG",{});var Ue=l(P);ce=r(Ue,"new forms of online museum experiences that cross institutional boundaries"),Ue.forEach(t),we=r(d,". Interested in the "),_=n(d,"A",{href:!0,rel:!0});var De=l(_);de=r(De,"Wiener Moderne"),De.forEach(t),pe=r(d,"? Then why stay within the confines of the one or two largest museums, when other, smaller, museums might house many lesser known treasures, too?"),d.forEach(t),U=f(e),M=n(e,"H2",{});var Je=l(M);ye=r(Je,"Similar or Not?"),Je.forEach(t),D=f(e),v=n(e,"P",{});var Z=l(v);ve=r(Z,"The big question, of course, is: what "),B=n(Z,"EM",{});var Ke=l(B);ge=r(Ke,"does"),Ke.forEach(t),be=r(Z," make two artworks similar? And how do we even get enough of the right data for teaching a machine to mimic our understanding of similarity? Approaches which have been used previously look, for example, at similar colours. Or they use artificial intelligence to detect objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict a flower?"),Z.forEach(t),J=f(e),w=n(e,"P",{});var L=l(w);ke=r(L,"In LiviaAI, we want to take a different approach. Instead of coming up with our own definitions of similarity, or relying on simple metrics like color, we want to leverage the knowledge that museum curators have already accumulated into their collections over the years. Before teaching computers how to "),F=n(L,"EM",{});var ze=l(F);_e=r(ze,"measure"),ze.forEach(t),xe=r(L," similarity, we first want to understand how curators have been "),N=n(L,"EM",{});var Qe=l(N);Ee=r(Qe,"describing"),Qe.forEach(t),Ae=r(L," similar artworks in their collections."),L.forEach(t),K=f(e),S=n(e,"H2",{});var Ve=l(S);Ie=r(Ve,"Understanding our Partner Collections"),Ve.forEach(t),z=f(e),W=n(e,"P",{});var Xe=l(W);Te=r(Xe,"The first step in our journey is therefore to get a better understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items over the years? And how can we translate all this existing knowledge - and hard work - into data that computers can work with?"),Xe.forEach(t),Q=f(e),j=n(e,"P",{});var Ye=l(j);Me=r(Ye,"[\u2026unfinished\u2026 material for re-use \u2026]"),Ye.forEach(t),V=f(e),g=n(e,"UL",{});var $=l(g);C=n($,"LI",{});var Ze=l(C);Se=r(Ze,`First, we will collect examples of images that are \u201Csimilar\u201D in some way. We will also collect counter-examples, so that the
computer can learn what \u201Cdifferent\u201D images look like. (More on the ways in which images might resemble or differ later.)`),Ze.forEach(t),We=f($),x=n($,"LI",{});var ee=l(x);je=r(ee,`Second, we will use the examples to train an AI algorithm, so that it learns how \u201Csimilarity\u201D manifests itself in the image. Or,
in other words: so that it learns what to look for in similar vs. different images. (This process is called
`),E=n(ee,"A",{href:!0,rel:!0});var $e=l(E);Re=r($e,"representation or feature learning"),$e.forEach(t),Le=r(ee,")."),ee.forEach(t),$.forEach(t),X=f(e),b=n(e,"P",{});var te=l(b);Oe=r(te,"The bad news: we need "),q=n(te,"STRONG",{});var et=l(q);Pe=r(et,"a lot"),et.forEach(t),Be=r(te," of examples to train the AI. We expect that we\u2019ll need at least 10.000 examples as the absolute minimum. And that\u2019s a much bigger training set than we could ever assemble by hand."),te.forEach(t),Y=f(e),p=n(e,"IFRAME",{src:!0,style:!0});var at=l(p);at.forEach(t),this.h()},h(){k(A,"href","#"),k(I,"href","#"),k(T,"href","#"),k(_,"href","https://en.wikipedia.org/wiki/Wiener_Moderne"),k(_,"rel","nofollow"),k(E,"href","https://en.wikipedia.org/wiki/Feature_learning"),k(E,"rel","nofollow"),nt(p.src,Ne="/embeds/blog/2022-04/embeddings-example.html")||k(p,"src",Ne),tt(p,"width","800px"),tt(p,"height","600px")},m(e,i){h(e,y,i),o(y,oe),h(e,G,i),h(e,c,i),o(c,ae),o(c,A),o(A,re),o(c,ie),o(c,I),o(I,se),o(c,ne),h(e,H,i),h(e,u,i),o(u,le),o(u,T),o(T,he),o(u,ue),o(u,O),o(O,me),o(u,fe),o(u,P),o(P,ce),o(u,we),o(u,_),o(_,de),o(u,pe),h(e,U,i),h(e,M,i),o(M,ye),h(e,D,i),h(e,v,i),o(v,ve),o(v,B),o(B,ge),o(v,be),h(e,J,i),h(e,w,i),o(w,ke),o(w,F),o(F,_e),o(w,xe),o(w,N),o(N,Ee),o(w,Ae),h(e,K,i),h(e,S,i),o(S,Ie),h(e,z,i),h(e,W,i),o(W,Te),h(e,Q,i),h(e,j,i),o(j,Me),h(e,V,i),h(e,g,i),o(g,C),o(C,Se),o(g,We),o(g,x),o(x,je),o(x,E),o(E,Re),o(x,Le),h(e,X,i),h(e,b,i),o(b,Oe),o(b,q),o(q,Pe),o(b,Be),h(e,Y,i),h(e,p,i)},p:Fe,i:Fe,o:Fe,d(e){e&&t(y),e&&t(G),e&&t(c),e&&t(H),e&&t(u),e&&t(U),e&&t(M),e&&t(D),e&&t(v),e&&t(J),e&&t(w),e&&t(K),e&&t(S),e&&t(z),e&&t(W),e&&t(Q),e&&t(j),e&&t(V),e&&t(g),e&&t(X),e&&t(b),e&&t(Y),e&&t(p)}}}class ut extends rt{constructor(y){super();it(this,y,null,lt,st,{})}}export{ut as default};
