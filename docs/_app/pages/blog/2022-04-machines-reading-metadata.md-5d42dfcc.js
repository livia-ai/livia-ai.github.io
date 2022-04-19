import{S as Pt,i as jt,s as Wt,e as s,t as r,k as u,c as n,a as l,h as i,d as t,m,b as c,N as Lt,f as Mt,g as h,J as a,K as rt}from"../../chunks/vendor-ea2447eb.js";function Ot(Tt){let b,me,V,p,fe,j,de,pe,W,we,ve,X,f,ye,L,ge,be,D,ke,_e,H,Ee,xe,x,Ae,Ie,Y,O,Me,Z,k,Te,U,Se,Pe,$,w,je,G,We,Le,J,Oe,Re,ee,_,qe,A,ze,Be,te,R,Fe,ae,q,Ce,re,z,Ne,ie,d,Ke,I,De,He,M,Ue,Ge,T,Je,Qe,oe,B,Ve,se,F,Xe,ne,v,Ye,S,Ze,$e,Q,et,tt,le,g,it,he,P,at;return{c(){b=s("h1"),me=r("Machines Reading Metadata"),V=u(),p=s("p"),fe=r("It\u2019s time for an update on the work of our tech team! The tech team, that\u2019s us: intern "),j=s("a"),de=r("Bernhard"),pe=r(", student of Artificial Intelligence at the University of Linz, and me, "),W=s("a"),we=r("Rainer"),ve=r(", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),X=u(),f=s("p"),ye=r("As we explained in our "),L=s("a"),ge=r("introductory post"),be=r(", the main goal of LiviaAI is to find out whether we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),D=s("strong"),ke=r("connect their collections to those of other museums more easily"),_e=r(". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),H=s("strong"),Ee=r("new forms of online museum experiences that cross institutional boundaries"),xe=r(". Interested in the "),x=s("a"),Ae=r("Wiener Moderne"),Ie=r("? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),Y=u(),O=s("h2"),Me=r("Similar or Not?"),Z=u(),k=s("p"),Te=r("The big question is, of course: what "),U=s("em"),Se=r("does"),Pe=r(" make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),$=u(),w=s("p"),je=r("In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),G=s("em"),We=r("images"),Le=r(", we first want to understand how curators have been describing them - and search for similarity in these "),J=s("em"),Oe=r("descriptions"),Re=r("."),ee=u(),_=s("p"),qe=r("Once we have identified artworks that are described in similar terms, we will use their images to train the algorithm. This approach is also called"),A=s("a"),ze=r("representation or feature learning"),Be=r(", because the algorithm learns how the representation of similiarity manifests itself in the images."),te=u(),R=s("h2"),Fe=r("Understanding Our Partner Collections"),ae=u(),q=s("p"),Ce=r("The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),re=u(),z=s("p"),Ne=r("[\u2026perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?\u2026]"),ie=u(),d=s("p"),Ke=r("Our three partners, the "),I=s("a"),De=r("Belvedere Museum Wien"),He=r(", the "),M=s("a"),Ue=r("Museum f\xFCr angewandte Kunst"),Ge=r(" and the "),T=s("a"),Je=r("Wien Museum"),Qe=r(" have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),oe=u(),B=s("p"),Ve=r("Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not be relevant in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the curators tell us about them in the metadata - is not quite straightforward."),se=u(),F=s("h2"),Xe=r("Reading Metadata - From a Distance"),ne=u(),v=s("p"),Ye=r("Luckily, artificial intelligence can help us here, too. In LiviaAI, we use a technique called "),S=s("a"),Ze=r("Sentence Embedding"),$e=r(" to get a better picture of the structure, themes and topics of our collections. Sentence embedding transforms written text - such as a sentence or a paragraph - to a "),Q=s("em"),et=r("vector"),tt=r(", a numeric representation we can treat as a point in space. There are different algorithms for doing that."),le=u(),g=s("iframe"),he=u(),P=s("span"),at=r("Fig. 2. Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum, projected to 3 dimensions. Color represents a distinct combination of classifications assigned by the curators."),this.h()},l(e){b=n(e,"H1",{});var o=l(b);me=i(o,"Machines Reading Metadata"),o.forEach(t),V=m(e),p=n(e,"P",{});var C=l(p);fe=i(C,"It\u2019s time for an update on the work of our tech team! The tech team, that\u2019s us: intern "),j=n(C,"A",{href:!0});var ot=l(j);de=i(ot,"Bernhard"),ot.forEach(t),pe=i(C,", student of Artificial Intelligence at the University of Linz, and me, "),W=n(C,"A",{href:!0});var st=l(W);we=i(st,"Rainer"),st.forEach(t),ve=i(C,", Senior Researcher at the Data Science & Artificial Intelligence group at the Austrian Institute of Technology."),C.forEach(t),X=m(e),f=n(e,"P",{});var y=l(f);ye=i(y,"As we explained in our "),L=n(y,"A",{href:!0});var nt=l(L);ge=i(nt,"introductory post"),nt.forEach(t),be=i(y,", the main goal of LiviaAI is to find out whether we can teach computers to recognize \u201Csimilarity\u201D of artworks. Why? For two reasons: first, because this will allow museums in the future to "),D=n(y,"STRONG",{});var lt=l(D);ke=i(lt,"connect their collections to those of other museums more easily"),lt.forEach(t),_e=i(y,". Computers can handle most of the tedious, time-consuming work of sorting through thousands of artworks, and finding relevant related material in other museums, thus saving museum curators many hours of their valuable time. Second, we believe that these new connections will enable "),H=n(y,"STRONG",{});var ht=l(H);Ee=i(ht,"new forms of online museum experiences that cross institutional boundaries"),ht.forEach(t),xe=i(y,". Interested in the "),x=n(y,"A",{href:!0,rel:!0});var ct=l(x);Ae=i(ct,"Wiener Moderne"),ct.forEach(t),Ie=i(y,"? Then why stay within the confines of just one or two famous museums, when other, smaller, museums might house some lesser known treasures, too?"),y.forEach(t),Y=m(e),O=n(e,"H2",{});var ut=l(O);Me=i(ut,"Similar or Not?"),ut.forEach(t),Z=m(e),k=n(e,"P",{});var ce=l(k);Te=i(ce,"The big question is, of course: what "),U=n(ce,"EM",{});var mt=l(U);Se=i(mt,"does"),mt.forEach(t),Pe=i(ce," make two artworks similar? And how do we even get enough of the right data to teach a machine to mimic our understanding of similarity? Previous approaches have been looking, for example, at similar colours. Or they used artificial intelligence to detect common objects in the artworks. But would you necessarily consider two artworks similar just because they both use yellow as their primary color? Or because they both depict flowers?"),ce.forEach(t),$=m(e),w=n(e,"P",{});var N=l(w);je=i(N,"In LiviaAI, we want to take a different approach. Instead of coming up with our own metrics for similarity, or relying on technical properties like color, we want to leverage the existing knowledge that museum curators have accumulated in their collections over many years. In order to teach computers how to recognize similar "),G=n(N,"EM",{});var ft=l(G);We=i(ft,"images"),ft.forEach(t),Le=i(N,", we first want to understand how curators have been describing them - and search for similarity in these "),J=n(N,"EM",{});var dt=l(J);Oe=i(dt,"descriptions"),dt.forEach(t),Re=i(N,"."),N.forEach(t),ee=m(e),_=n(e,"P",{});var ue=l(_);qe=i(ue,"Once we have identified artworks that are described in similar terms, we will use their images to train the algorithm. This approach is also called"),A=n(ue,"A",{href:!0,rel:!0});var pt=l(A);ze=i(pt,"representation or feature learning"),pt.forEach(t),Be=i(ue,", because the algorithm learns how the representation of similiarity manifests itself in the images."),ue.forEach(t),te=m(e),R=n(e,"H2",{});var wt=l(R);Fe=i(wt,"Understanding Our Partner Collections"),wt.forEach(t),ae=m(e),q=n(e,"P",{});var vt=l(q);Ce=i(vt,"The first step in our journey is therefore to gain an understanding of our partner collections. What\u2019s actually inside them? What information have curators added to the items as metadata? And how can we translate all this existing knowledge (and years of work!) into data that can teach computers to recognize similar art?"),vt.forEach(t),re=m(e),z=n(e,"P",{});var yt=l(z);Ne=i(yt,"[\u2026perhaps two examples of artworks + metadata - maybe the Lusthaus from two partners?\u2026]"),yt.forEach(t),ie=m(e),d=n(e,"P",{});var E=l(d);Ke=i(E,"Our three partners, the "),I=n(E,"A",{href:!0,rel:!0});var gt=l(I);De=i(gt,"Belvedere Museum Wien"),gt.forEach(t),He=i(E,", the "),M=n(E,"A",{href:!0,rel:!0});var bt=l(M);Ue=i(bt,"Museum f\xFCr angewandte Kunst"),bt.forEach(t),Ge=i(E," and the "),T=n(E,"A",{href:!0,rel:!0});var kt=l(T);Je=i(kt,"Wien Museum"),kt.forEach(t),Qe=i(E," have given us access to metadata for all artworks they display in their public online collections. In total, that\u2019s more than 300.000 objects! The metadata includes a mix of information such as: title and description text, subjects keywords and classification terms, artist names, summary information on provenance or exhibition history, information about material, production, places and time periods relevant to the artwork, etc."),E.forEach(t),oe=m(e),B=n(e,"P",{});var _t=l(B);Ve=i(_t,"Each partner uses different documentation practices, and has different priorities when describing their artworks. Properties that are recorded in the MAK collection, for example, may not be relevant in the Belvedere collection. Therefore, figuring out which artworks might be similar - according to what the curators tell us about them in the metadata - is not quite straightforward."),_t.forEach(t),se=m(e),F=n(e,"H2",{});var Et=l(F);Xe=i(Et,"Reading Metadata - From a Distance"),Et.forEach(t),ne=m(e),v=n(e,"P",{});var K=l(v);Ye=i(K,"Luckily, artificial intelligence can help us here, too. In LiviaAI, we use a technique called "),S=n(K,"A",{href:!0,rel:!0});var xt=l(S);Ze=i(xt,"Sentence Embedding"),xt.forEach(t),$e=i(K," to get a better picture of the structure, themes and topics of our collections. Sentence embedding transforms written text - such as a sentence or a paragraph - to a "),Q=n(K,"EM",{});var At=l(Q);et=i(At,"vector"),At.forEach(t),tt=i(K,", a numeric representation we can treat as a point in space. There are different algorithms for doing that."),K.forEach(t),le=m(e),g=n(e,"IFRAME",{src:!0,style:!0});var St=l(g);St.forEach(t),he=m(e),P=n(e,"SPAN",{class:!0});var It=l(P);at=i(It,"Fig. 2. Sentence embeddings for 6,200 metadata records from the online collection of the Wien Museum, projected to 3 dimensions. Color represents a distinct combination of classifications assigned by the curators."),It.forEach(t),this.h()},h(){c(j,"href","#"),c(W,"href","#"),c(L,"href","#"),c(x,"href","https://en.wikipedia.org/wiki/Wiener_Moderne"),c(x,"rel","nofollow"),c(A,"href","https://en.wikipedia.org/wiki/Feature_learning"),c(A,"rel","nofollow"),c(I,"href","https://www.belvedere.at/"),c(I,"rel","nofollow"),c(M,"href","https://www.mak.at"),c(M,"rel","nofollow"),c(T,"href","https://www.wienmuseum.at/"),c(T,"rel","nofollow"),c(S,"href","https://arxiv.org/abs/1908.10084"),c(S,"rel","nofollow"),Lt(g.src,it="/embeds/blog/2022-04/embeddings-example.html")||c(g,"src",it),Mt(g,"width","800px"),Mt(g,"height","600px"),c(P,"class","image-caption")},m(e,o){h(e,b,o),a(b,me),h(e,V,o),h(e,p,o),a(p,fe),a(p,j),a(j,de),a(p,pe),a(p,W),a(W,we),a(p,ve),h(e,X,o),h(e,f,o),a(f,ye),a(f,L),a(L,ge),a(f,be),a(f,D),a(D,ke),a(f,_e),a(f,H),a(H,Ee),a(f,xe),a(f,x),a(x,Ae),a(f,Ie),h(e,Y,o),h(e,O,o),a(O,Me),h(e,Z,o),h(e,k,o),a(k,Te),a(k,U),a(U,Se),a(k,Pe),h(e,$,o),h(e,w,o),a(w,je),a(w,G),a(G,We),a(w,Le),a(w,J),a(J,Oe),a(w,Re),h(e,ee,o),h(e,_,o),a(_,qe),a(_,A),a(A,ze),a(_,Be),h(e,te,o),h(e,R,o),a(R,Fe),h(e,ae,o),h(e,q,o),a(q,Ce),h(e,re,o),h(e,z,o),a(z,Ne),h(e,ie,o),h(e,d,o),a(d,Ke),a(d,I),a(I,De),a(d,He),a(d,M),a(M,Ue),a(d,Ge),a(d,T),a(T,Je),a(d,Qe),h(e,oe,o),h(e,B,o),a(B,Ve),h(e,se,o),h(e,F,o),a(F,Xe),h(e,ne,o),h(e,v,o),a(v,Ye),a(v,S),a(S,Ze),a(v,$e),a(v,Q),a(Q,et),a(v,tt),h(e,le,o),h(e,g,o),h(e,he,o),h(e,P,o),a(P,at)},p:rt,i:rt,o:rt,d(e){e&&t(b),e&&t(V),e&&t(p),e&&t(X),e&&t(f),e&&t(Y),e&&t(O),e&&t(Z),e&&t(k),e&&t($),e&&t(w),e&&t(ee),e&&t(_),e&&t(te),e&&t(R),e&&t(ae),e&&t(q),e&&t(re),e&&t(z),e&&t(ie),e&&t(d),e&&t(oe),e&&t(B),e&&t(se),e&&t(F),e&&t(ne),e&&t(v),e&&t(le),e&&t(g),e&&t(he),e&&t(P)}}}class qt extends Pt{constructor(b){super();jt(this,b,null,Ot,Wt,{})}}export{qt as default};
