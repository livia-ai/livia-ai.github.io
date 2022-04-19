import{S as Ut,i as Ht,s as Gt,e as s,t as r,k as m,c as n,a as l,h as o,d as t,m as u,b as c,N as Jt,f as Nt,g as h,J as a,K as wt}from"../../chunks/vendor-ea2447eb.js";function Qt(Dt){let b,ge,Z,w,ke,j,_e,Ee,L,xe,Ae,$,f,Ie,R,Me,Te,H,Se,We,G,Pe,Oe,A,je,Le,ee,F,Re,te,g,Fe,J,qe,ze,ae,p,Be,Q,Ce,Ne,V,De,Ke,re,q,Ue,oe,z,He,ie,B,Ge,se,d,Je,I,Qe,Ve,M,Xe,Ye,T,Ze,$e,ne,C,et,le,N,tt,he,k,at,S,rt,ot,me,y,pt,ue,W,it,ce,D,st,fe,_,X,nt,lt,P,ht,O,mt,ut,de,E,ct,Y,ft,dt;return{c(){b=s("h1"),ge=r("Machines Reading Metadata"),Z=m(),w=s("p"),ke=r("It\u2019s time for an update on the work of our tech team! The tech team, that\u2019s us: intern "),j=s("a"),_e=r("Bernhard"),Ee=r(", student of Artificial Intelligence at the University of Linz, and me, "),L=s("a"),xe=r("Rainer"),Ae=r(", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),$=m(),f=s("p"),Ie=r("As we explained in our "),R=s("a"),Me=r("introductory post"),Te=r(", the main goal of LiviaAI is to find out whether we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),H=s("strong"),Se=r("connect their collections to those of other museums more easily"),We=r(". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),G=s("strong"),Pe=r("new forms of online museum experiences that cross institutional boundaries"),Oe=r(". Interested in the "),A=s("a"),je=r("Wiener Moderne"),Le=r("? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),ee=m(),F=s("h2"),Re=r("Similar or Not?"),te=m(),g=s("p"),Fe=r("The big question is, of course: what "),J=s("em"),qe=r("does"),ze=r(" make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),ae=m(),p=s("p"),Be=r("In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),Q=s("em"),Ce=r("images"),Ne=r(", we first want to understand how curators have been describing them - and search for similarity in these "),V=s("em"),De=r("descriptions"),Ke=r("."),re=m(),q=s("h2"),Ue=r("Understanding Our Partner Collections"),oe=m(),z=s("p"),He=r("The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),ie=m(),B=s("p"),Ge=r("[\u2026perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?\u2026]"),se=m(),d=s("p"),Je=r("Our three partners, the "),I=s("a"),Qe=r("Belvedere Museum Wien"),Ve=r(", the "),M=s("a"),Xe=r("Museum f\xFCr angewandte Kunst"),Ye=r(" and the "),T=s("a"),Ze=r("Wien Museum"),$e=r(" have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),ne=m(),C=s("p"),et=r("Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not be relevant in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the curators tell us about them in the metadata - is not quite straightforward."),le=m(),N=s("h2"),tt=r("Reading Metadata - From a Distance"),he=m(),k=s("p"),at=r("Luckily, artificial intelligence can help us here, too. In LiviaAI, we use a technique called "),S=s("a"),rt=r("Sentence Embedding"),ot=r(" to get a better picture of the structure, themes and topics of our collections. [..TODO\u2026]"),me=m(),y=s("iframe"),ue=m(),W=s("span"),it=r("Fig. 2. Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum, projected to 3 dimensions. Color represents a distinct combination of classifications assigned by the curators."),ce=m(),D=s("p"),st=r("[\u2026unfinished\u2026 material for re-use \u2026]"),fe=m(),_=s("ul"),X=s("li"),nt=r(`First, we will collect examples of images that are \u201Csimilar\u201D in some way. We will also collect counter-examples, so that the
computer can learn what \u201Cdifferent\u201D images look like. (More on the ways in which images might resemble or differ later.)`),lt=m(),P=s("li"),ht=r(`Second, we will use the examples to train an AI algorithm, so that it learns how \u201Csimilarity\u201D manifests itself in the image. Or,
in other words: so that it learns what to look for in similar vs. different images. (This process is called
`),O=s("a"),mt=r("representation or feature learning"),ut=r(")."),de=m(),E=s("p"),ct=r("The bad news: we need "),Y=s("strong"),ft=r("a lot"),dt=r(" of examples to train the AI. We expect that we\u2019ll need at least 10.000 examples as the absolute minimum. And that\u2019s a much bigger training set than we could ever assemble by hand."),this.h()},l(e){b=n(e,"H1",{});var i=l(b);ge=o(i,"Machines Reading Metadata"),i.forEach(t),Z=u(e),w=n(e,"P",{});var K=l(w);ke=o(K,"It\u2019s time for an update on the work of our tech team! The tech team, that\u2019s us: intern "),j=n(K,"A",{href:!0});var vt=l(j);_e=o(vt,"Bernhard"),vt.forEach(t),Ee=o(K,", student of Artificial Intelligence at the University of Linz, and me, "),L=n(K,"A",{href:!0});var yt=l(L);xe=o(yt,"Rainer"),yt.forEach(t),Ae=o(K,", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),K.forEach(t),$=u(e),f=n(e,"P",{});var v=l(f);Ie=o(v,"As we explained in our "),R=n(v,"A",{href:!0});var bt=l(R);Me=o(bt,"introductory post"),bt.forEach(t),Te=o(v,", the main goal of LiviaAI is to find out whether we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),H=n(v,"STRONG",{});var gt=l(H);Se=o(gt,"connect their collections to those of other museums more easily"),gt.forEach(t),We=o(v,". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),G=n(v,"STRONG",{});var kt=l(G);Pe=o(kt,"new forms of online museum experiences that cross institutional boundaries"),kt.forEach(t),Oe=o(v,". Interested in the "),A=n(v,"A",{href:!0,rel:!0});var _t=l(A);je=o(_t,"Wiener Moderne"),_t.forEach(t),Le=o(v,"? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),v.forEach(t),ee=u(e),F=n(e,"H2",{});var Et=l(F);Re=o(Et,"Similar or Not?"),Et.forEach(t),te=u(e),g=n(e,"P",{});var we=l(g);Fe=o(we,"The big question is, of course: what "),J=n(we,"EM",{});var xt=l(J);qe=o(xt,"does"),xt.forEach(t),ze=o(we," make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),we.forEach(t),ae=u(e),p=n(e,"P",{});var U=l(p);Be=o(U,"In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),Q=n(U,"EM",{});var At=l(Q);Ce=o(At,"images"),At.forEach(t),Ne=o(U,", we first want to understand how curators have been describing them - and search for similarity in these "),V=n(U,"EM",{});var It=l(V);De=o(It,"descriptions"),It.forEach(t),Ke=o(U,"."),U.forEach(t),re=u(e),q=n(e,"H2",{});var Mt=l(q);Ue=o(Mt,"Understanding Our Partner Collections"),Mt.forEach(t),oe=u(e),z=n(e,"P",{});var Tt=l(z);He=o(Tt,"The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),Tt.forEach(t),ie=u(e),B=n(e,"P",{});var St=l(B);Ge=o(St,"[\u2026perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?\u2026]"),St.forEach(t),se=u(e),d=n(e,"P",{});var x=l(d);Je=o(x,"Our three partners, the "),I=n(x,"A",{href:!0,rel:!0});var Wt=l(I);Qe=o(Wt,"Belvedere Museum Wien"),Wt.forEach(t),Ve=o(x,", the "),M=n(x,"A",{href:!0,rel:!0});var Pt=l(M);Xe=o(Pt,"Museum f\xFCr angewandte Kunst"),Pt.forEach(t),Ye=o(x," and the "),T=n(x,"A",{href:!0,rel:!0});var Ot=l(T);Ze=o(Ot,"Wien Museum"),Ot.forEach(t),$e=o(x," have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),x.forEach(t),ne=u(e),C=n(e,"P",{});var jt=l(C);et=o(jt,"Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not be relevant in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the curators tell us about them in the metadata - is not quite straightforward."),jt.forEach(t),le=u(e),N=n(e,"H2",{});var Lt=l(N);tt=o(Lt,"Reading Metadata - From a Distance"),Lt.forEach(t),he=u(e),k=n(e,"P",{});var pe=l(k);at=o(pe,"Luckily, artificial intelligence can help us here, too. In LiviaAI, we use a technique called "),S=n(pe,"A",{href:!0,rel:!0});var Rt=l(S);rt=o(Rt,"Sentence Embedding"),Rt.forEach(t),ot=o(pe," to get a better picture of the structure, themes and topics of our collections. [..TODO\u2026]"),pe.forEach(t),me=u(e),y=n(e,"IFRAME",{src:!0,style:!0});var Kt=l(y);Kt.forEach(t),ue=u(e),W=n(e,"SPAN",{class:!0});var Ft=l(W);it=o(Ft,"Fig. 2. Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum, projected to 3 dimensions. Color represents a distinct combination of classifications assigned by the curators."),Ft.forEach(t),ce=u(e),D=n(e,"P",{});var qt=l(D);st=o(qt,"[\u2026unfinished\u2026 material for re-use \u2026]"),qt.forEach(t),fe=u(e),_=n(e,"UL",{});var ve=l(_);X=n(ve,"LI",{});var zt=l(X);nt=o(zt,`First, we will collect examples of images that are \u201Csimilar\u201D in some way. We will also collect counter-examples, so that the
computer can learn what \u201Cdifferent\u201D images look like. (More on the ways in which images might resemble or differ later.)`),zt.forEach(t),lt=u(ve),P=n(ve,"LI",{});var ye=l(P);ht=o(ye,`Second, we will use the examples to train an AI algorithm, so that it learns how \u201Csimilarity\u201D manifests itself in the image. Or,
in other words: so that it learns what to look for in similar vs. different images. (This process is called
`),O=n(ye,"A",{href:!0,rel:!0});var Bt=l(O);mt=o(Bt,"representation or feature learning"),Bt.forEach(t),ut=o(ye,")."),ye.forEach(t),ve.forEach(t),de=u(e),E=n(e,"P",{});var be=l(E);ct=o(be,"The bad news: we need "),Y=n(be,"STRONG",{});var Ct=l(Y);ft=o(Ct,"a lot"),Ct.forEach(t),dt=o(be," of examples to train the AI. We expect that we\u2019ll need at least 10.000 examples as the absolute minimum. And that\u2019s a much bigger training set than we could ever assemble by hand."),be.forEach(t),this.h()},h(){c(j,"href","#"),c(L,"href","#"),c(R,"href","#"),c(A,"href","https://en.wikipedia.org/wiki/Wiener_Moderne"),c(A,"rel","nofollow"),c(I,"href","https://www.belvedere.at/"),c(I,"rel","nofollow"),c(M,"href","https://www.mak.at"),c(M,"rel","nofollow"),c(T,"href","https://www.wienmuseum.at/"),c(T,"rel","nofollow"),c(S,"href","https://arxiv.org/abs/1908.10084"),c(S,"rel","nofollow"),Jt(y.src,pt="/embeds/blog/2022-04/embeddings-example.html")||c(y,"src",pt),Nt(y,"width","800px"),Nt(y,"height","600px"),c(W,"class","image-caption"),c(O,"href","https://en.wikipedia.org/wiki/Feature_learning"),c(O,"rel","nofollow")},m(e,i){h(e,b,i),a(b,ge),h(e,Z,i),h(e,w,i),a(w,ke),a(w,j),a(j,_e),a(w,Ee),a(w,L),a(L,xe),a(w,Ae),h(e,$,i),h(e,f,i),a(f,Ie),a(f,R),a(R,Me),a(f,Te),a(f,H),a(H,Se),a(f,We),a(f,G),a(G,Pe),a(f,Oe),a(f,A),a(A,je),a(f,Le),h(e,ee,i),h(e,F,i),a(F,Re),h(e,te,i),h(e,g,i),a(g,Fe),a(g,J),a(J,qe),a(g,ze),h(e,ae,i),h(e,p,i),a(p,Be),a(p,Q),a(Q,Ce),a(p,Ne),a(p,V),a(V,De),a(p,Ke),h(e,re,i),h(e,q,i),a(q,Ue),h(e,oe,i),h(e,z,i),a(z,He),h(e,ie,i),h(e,B,i),a(B,Ge),h(e,se,i),h(e,d,i),a(d,Je),a(d,I),a(I,Qe),a(d,Ve),a(d,M),a(M,Xe),a(d,Ye),a(d,T),a(T,Ze),a(d,$e),h(e,ne,i),h(e,C,i),a(C,et),h(e,le,i),h(e,N,i),a(N,tt),h(e,he,i),h(e,k,i),a(k,at),a(k,S),a(S,rt),a(k,ot),h(e,me,i),h(e,y,i),h(e,ue,i),h(e,W,i),a(W,it),h(e,ce,i),h(e,D,i),a(D,st),h(e,fe,i),h(e,_,i),a(_,X),a(X,nt),a(_,lt),a(_,P),a(P,ht),a(P,O),a(O,mt),a(P,ut),h(e,de,i),h(e,E,i),a(E,ct),a(E,Y),a(Y,ft),a(E,dt)},p:wt,i:wt,o:wt,d(e){e&&t(b),e&&t(Z),e&&t(w),e&&t($),e&&t(f),e&&t(ee),e&&t(F),e&&t(te),e&&t(g),e&&t(ae),e&&t(p),e&&t(re),e&&t(q),e&&t(oe),e&&t(z),e&&t(ie),e&&t(B),e&&t(se),e&&t(d),e&&t(ne),e&&t(C),e&&t(le),e&&t(N),e&&t(he),e&&t(k),e&&t(me),e&&t(y),e&&t(ue),e&&t(W),e&&t(ce),e&&t(D),e&&t(fe),e&&t(_),e&&t(de),e&&t(E)}}}class Xt extends Ut{constructor(b){super();Ht(this,b,null,Qt,Gt,{})}}export{Xt as default};
