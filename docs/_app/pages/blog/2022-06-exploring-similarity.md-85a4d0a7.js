import{S as ma,i as ha,s as da,C as Bt,w as fa,x as ca,y as ua,z as pa,A as oa,q as wa,o as ga,B as va,Q as ra,e as o,t as i,k as f,c as r,a as l,h as s,d as a,m as c,b as J,O as ya,f as St,g as m,H as t}from"../../chunks/vendor-f435face.js";import{P as ba}from"../../chunks/_post-4f5578a2.js";function _a(N){let h,y,p,B,d,w,v,Y,u,Ge,Q,Be,Se,U,je,Oe,K,Re,Ne,P,Pe,We,Ce,V,k,Le,X,$e,Me,S,qe,ze,de,T,Fe,Z,De,He,fe,g,Je,W,Ye,Qe,ee,Ue,Ke,te,Ve,Xe,ce,C,Ze,ue,b,et,ae,tt,at,ie,it,st,pe,L,ot,we,_,A,rt,se,lt,nt,oe,mt,ht,dt,re,ft,ct,j,ut,le,pt,wt,ge,$,gt,ve,M,vt,ye,I,yt,ne,bt,_t,be,O,me,Et,xt,_e,q,kt,Ee,R,he,At,Tt,xe,E,jt;return{c(){h=o("p"),y=i("Following "),p=o("a"),B=i("our partner workshop in May"),d=i(`, we have started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),w=f(),v=o("ol"),Y=o("li"),u=o("p"),Ge=i("When measuring similarity of metadata records, we should focus "),Q=o("strong"),Be=i("only"),Se=i(` on those metadata fields that concern
`),U=o("strong"),je=i("subject"),Oe=i(" and "),K=o("strong"),Re=i("theme"),Ne=i(`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),P=o("a"),Pe=i("in our earlier blogpost here"),We=i(`), in particular those related to
style, collection, and artist.`),Ce=f(),V=o("li"),k=o("p"),Le=i("We should consider measuring similarity based "),X=o("strong"),$e=i("exclusively"),Me=i(` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology called `),S=o("a"),qe=i("Graph Embedding"),ze=i("."),de=f(),T=o("p"),Fe=i(`Another important outcome of our first experiments - which the workshop confirmed - were that the similarity scores we
had computed did not work well `),Z=o("strong"),De=i("when combining data from multiple museums"),He=i(". This may be because the vocabularies and curating practices differ; or because the collections are inherently too different in terms of their materials."),fe=f(),g=o("p"),Je=i("This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),W=o("a"),Ye=i(`one of LiviaAI\u2019s three main
goals`),Qe=i(`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed the this project in the first place! Our goal is to, first, select artworks with `),ee=o("strong"),Ue=i("similar metadata from one collection"),Ke=i(", and then use "),te=o("strong"),Ve=i("their images as input"),Xe=i(" to train an AI model to recognize the similarity in the images."),ce=f(),C=o("h2"),Ze=i("Triplets"),ue=f(),b=o("p"),et=i("In practice, however, we need more than just pairs of similar images. In order to learn visual similarity, the AI also needs to see examples of images that are "),ae=o("strong"),tt=i("different"),at=i(" from each other. In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),ie=o("strong"),it=i("triplet"),st=i("."),pe=f(),L=o("p"),ot=i("Good triplets will produce an AI model that can measure similarity in a useful way, thus allowing us to identify related images between collections, regardless of their metadata is being recorded in different institutions. To summarize our workflow:"),we=f(),_=o("ul"),A=o("li"),rt=i("First, we compile lots of triplets, i.e. examples of images that are "),se=o("strong"),lt=i("similar"),nt=i(", and images that are "),oe=o("strong"),mt=i("different"),ht=i(" in terms of theme and subject."),dt=f(),re=o("li"),ft=i("We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like in the images."),ct=f(),j=o("li"),ut=i("In order to get our examples, we rely on the metadata: because similar subject and themes are described in similar terms "),le=o("strong"),pt=i("within one museum collection"),wt=i(`, records with high metadata similarity should provide us with good image training
material.`),ge=f(),$=o("h2"),gt=i("Comparing Approaches"),ve=f(),M=o("p"),vt=i("So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),ye=f(),I=o("p"),yt=i("Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),ne=o("em"),bt=i("will"),_t=i(" be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),be=f(),O=o("p"),me=o("strong"),Et=i("That\u2019s why we need your help:"),xt=i(" Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),_e=f(),q=o("p"),kt=i("Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),Ee=f(),R=o("p"),he=o("strong"),At=i("We know that ratings are subjective. That\u2019s no problem!"),Tt=i(` We want to collect as much & as diverse feedback
as possible. Don\u2019t overthink it. Just focus on image motives and themes, and rate according to your intuition.`),xe=f(),E=o("iframe"),this.h()},l(e){h=r(e,"P",{});var n=l(h);y=s(n,"Following "),p=r(n,"A",{href:!0});var Ot=l(p);B=s(Ot,"our partner workshop in May"),Ot.forEach(a),d=s(n,`, we have started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),n.forEach(a),w=c(e),v=r(e,"OL",{});var ke=l(v);Y=r(ke,"LI",{});var Rt=l(Y);u=r(Rt,"P",{});var x=l(u);Ge=s(x,"When measuring similarity of metadata records, we should focus "),Q=r(x,"STRONG",{});var Nt=l(Q);Be=s(Nt,"only"),Nt.forEach(a),Se=s(x,` on those metadata fields that concern
`),U=r(x,"STRONG",{});var Pt=l(U);je=s(Pt,"subject"),Pt.forEach(a),Oe=s(x," and "),K=r(x,"STRONG",{});var Wt=l(K);Re=s(Wt,"theme"),Wt.forEach(a),Ne=s(x,`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),P=r(x,"A",{href:!0});var Ct=l(P);Pe=s(Ct,"in our earlier blogpost here"),Ct.forEach(a),We=s(x,`), in particular those related to
style, collection, and artist.`),x.forEach(a),Rt.forEach(a),Ce=c(ke),V=r(ke,"LI",{});var Lt=l(V);k=r(Lt,"P",{});var z=l(k);Le=s(z,"We should consider measuring similarity based "),X=r(z,"STRONG",{});var $t=l(X);$e=s($t,"exclusively"),$t.forEach(a),Me=s(z,` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology called `),S=r(z,"A",{href:!0,rel:!0});var Mt=l(S);qe=s(Mt,"Graph Embedding"),Mt.forEach(a),ze=s(z,"."),z.forEach(a),Lt.forEach(a),ke.forEach(a),de=c(e),T=r(e,"P",{});var Ae=l(T);Fe=s(Ae,`Another important outcome of our first experiments - which the workshop confirmed - were that the similarity scores we
had computed did not work well `),Z=r(Ae,"STRONG",{});var qt=l(Z);De=s(qt,"when combining data from multiple museums"),qt.forEach(a),He=s(Ae,". This may be because the vocabularies and curating practices differ; or because the collections are inherently too different in terms of their materials."),Ae.forEach(a),fe=c(e),g=r(e,"P",{});var G=l(g);Je=s(G,"This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),W=r(G,"A",{href:!0});var zt=l(W);Ye=s(zt,`one of LiviaAI\u2019s three main
goals`),zt.forEach(a),Qe=s(G,`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed the this project in the first place! Our goal is to, first, select artworks with `),ee=r(G,"STRONG",{});var Ft=l(ee);Ue=s(Ft,"similar metadata from one collection"),Ft.forEach(a),Ke=s(G,", and then use "),te=r(G,"STRONG",{});var Dt=l(te);Ve=s(Dt,"their images as input"),Dt.forEach(a),Xe=s(G," to train an AI model to recognize the similarity in the images."),G.forEach(a),ce=c(e),C=r(e,"H2",{});var Ht=l(C);Ze=s(Ht,"Triplets"),Ht.forEach(a),ue=c(e),b=r(e,"P",{});var F=l(b);et=s(F,"In practice, however, we need more than just pairs of similar images. In order to learn visual similarity, the AI also needs to see examples of images that are "),ae=r(F,"STRONG",{});var Jt=l(ae);tt=s(Jt,"different"),Jt.forEach(a),at=s(F," from each other. In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),ie=r(F,"STRONG",{});var Yt=l(ie);it=s(Yt,"triplet"),Yt.forEach(a),st=s(F,"."),F.forEach(a),pe=c(e),L=r(e,"P",{});var Qt=l(L);ot=s(Qt,"Good triplets will produce an AI model that can measure similarity in a useful way, thus allowing us to identify related images between collections, regardless of their metadata is being recorded in different institutions. To summarize our workflow:"),Qt.forEach(a),we=c(e),_=r(e,"UL",{});var D=l(_);A=r(D,"LI",{});var H=l(A);rt=s(H,"First, we compile lots of triplets, i.e. examples of images that are "),se=r(H,"STRONG",{});var Ut=l(se);lt=s(Ut,"similar"),Ut.forEach(a),nt=s(H,", and images that are "),oe=r(H,"STRONG",{});var Kt=l(oe);mt=s(Kt,"different"),Kt.forEach(a),ht=s(H," in terms of theme and subject."),H.forEach(a),dt=c(D),re=r(D,"LI",{});var Vt=l(re);ft=s(Vt,"We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like in the images."),Vt.forEach(a),ct=c(D),j=r(D,"LI",{});var Te=l(j);ut=s(Te,"In order to get our examples, we rely on the metadata: because similar subject and themes are described in similar terms "),le=r(Te,"STRONG",{});var Xt=l(le);pt=s(Xt,"within one museum collection"),Xt.forEach(a),wt=s(Te,`, records with high metadata similarity should provide us with good image training
material.`),Te.forEach(a),D.forEach(a),ge=c(e),$=r(e,"H2",{});var Zt=l($);gt=s(Zt,"Comparing Approaches"),Zt.forEach(a),ve=c(e),M=r(e,"P",{});var ea=l(M);vt=s(ea,"So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),ea.forEach(a),ye=c(e),I=r(e,"P",{});var Ie=l(I);yt=s(Ie,"Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),ne=r(Ie,"EM",{});var ta=l(ne);bt=s(ta,"will"),ta.forEach(a),_t=s(Ie," be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),Ie.forEach(a),be=c(e),O=r(e,"P",{});var It=l(O);me=r(It,"STRONG",{});var aa=l(me);Et=s(aa,"That\u2019s why we need your help:"),aa.forEach(a),xt=s(It," Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),It.forEach(a),_e=c(e),q=r(e,"P",{});var ia=l(q);kt=s(ia,"Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),ia.forEach(a),Ee=c(e),R=r(e,"P",{});var Gt=l(R);he=r(Gt,"STRONG",{});var sa=l(he);At=s(sa,"We know that ratings are subjective. That\u2019s no problem!"),sa.forEach(a),Tt=s(Gt,` We want to collect as much & as diverse feedback
as possible. Don\u2019t overthink it. Just focus on image motives and themes, and rate according to your intuition.`),Gt.forEach(a),xe=c(e),E=r(e,"IFRAME",{src:!0,style:!0});var na=l(E);na.forEach(a),this.h()},h(){J(p,"href","/blog/2022-05-community-data"),J(P,"href","/blog/2022-04-machines-reading-metadata"),J(S,"href","https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4"),J(S,"rel","nofollow"),J(W,"href","/blog/2022-04-hello-world"),ya(E.src,jt="https://rate-this-triplet.no5.at/ui/")||J(E,"src",jt),St(E,"width","100%"),St(E,"height","900px"),St(E,"margin","0")},m(e,n){m(e,h,n),t(h,y),t(h,p),t(p,B),t(h,d),m(e,w,n),m(e,v,n),t(v,Y),t(Y,u),t(u,Ge),t(u,Q),t(Q,Be),t(u,Se),t(u,U),t(U,je),t(u,Oe),t(u,K),t(K,Re),t(u,Ne),t(u,P),t(P,Pe),t(u,We),t(v,Ce),t(v,V),t(V,k),t(k,Le),t(k,X),t(X,$e),t(k,Me),t(k,S),t(S,qe),t(k,ze),m(e,de,n),m(e,T,n),t(T,Fe),t(T,Z),t(Z,De),t(T,He),m(e,fe,n),m(e,g,n),t(g,Je),t(g,W),t(W,Ye),t(g,Qe),t(g,ee),t(ee,Ue),t(g,Ke),t(g,te),t(te,Ve),t(g,Xe),m(e,ce,n),m(e,C,n),t(C,Ze),m(e,ue,n),m(e,b,n),t(b,et),t(b,ae),t(ae,tt),t(b,at),t(b,ie),t(ie,it),t(b,st),m(e,pe,n),m(e,L,n),t(L,ot),m(e,we,n),m(e,_,n),t(_,A),t(A,rt),t(A,se),t(se,lt),t(A,nt),t(A,oe),t(oe,mt),t(A,ht),t(_,dt),t(_,re),t(re,ft),t(_,ct),t(_,j),t(j,ut),t(j,le),t(le,pt),t(j,wt),m(e,ge,n),m(e,$,n),t($,gt),m(e,ve,n),m(e,M,n),t(M,vt),m(e,ye,n),m(e,I,n),t(I,yt),t(I,ne),t(ne,bt),t(I,_t),m(e,be,n),m(e,O,n),t(O,me),t(me,Et),t(O,xt),m(e,_e,n),m(e,q,n),t(q,kt),m(e,Ee,n),m(e,R,n),t(R,he),t(he,At),t(R,Tt),m(e,xe,n),m(e,E,n)},d(e){e&&a(h),e&&a(w),e&&a(v),e&&a(de),e&&a(T),e&&a(fe),e&&a(g),e&&a(ce),e&&a(C),e&&a(ue),e&&a(b),e&&a(pe),e&&a(L),e&&a(we),e&&a(_),e&&a(ge),e&&a($),e&&a(ve),e&&a(M),e&&a(ye),e&&a(I),e&&a(be),e&&a(O),e&&a(_e),e&&a(q),e&&a(Ee),e&&a(R),e&&a(xe),e&&a(E)}}}function Ea(N){let h,y;const p=[N[0],la];let B={$$slots:{default:[_a]},$$scope:{ctx:N}};for(let d=0;d<p.length;d+=1)B=Bt(B,p[d]);return h=new ba({props:B}),{c(){fa(h.$$.fragment)},l(d){ca(h.$$.fragment,d)},m(d,w){ua(h,d,w),y=!0},p(d,[w]){const v=w&1?pa(p,[w&1&&oa(d[0]),w&0&&oa(la)]):{};w&2&&(v.$$scope={dirty:w,ctx:d}),h.$set(v)},i(d){y||(wa(h.$$.fragment,d),y=!0)},o(d){ga(h.$$.fragment,d),y=!1},d(d){va(h,d)}}}const la={title:"Exploring Similarity: Triplets and How to Choose Them",description:"Lorem ipsum",url:"https://liviaai.at/blog/2022-06-exploring-similarity",date:"June 15, 2022"};function xa(N,h,y){return N.$$set=p=>{y(0,h=Bt(Bt({},h),ra(p)))},h=ra(h),[h]}class Ta extends ma{constructor(h){super();ha(this,h,xa,Ea,da,{})}}export{Ta as default,la as metadata};
