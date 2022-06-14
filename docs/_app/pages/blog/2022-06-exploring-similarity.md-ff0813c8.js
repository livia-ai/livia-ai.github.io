import{S as Si,i as Gi,s as Bi,C as Oa,w as Pi,x as Oi,y as ji,z as Wi,A as ki,q as Ri,o as Ni,B as Li,Q as Ai,e as s,t as i,k as h,c as l,a as r,h as o,d as a,m as d,b as c,O as xi,f as q,g as m,H as t}from"../../chunks/vendor-f435face.js";import{P as Ci}from"../../chunks/_post-4f5578a2.js";function Mi(Y){let f,E,p,M,u,w,b,ne,_,ht,me,dt,ft,he,ut,ct,z,pt,wt,vt,de,A,yt,fe,gt,bt,D,_t,Et,je,I,kt,ue,At,xt,We,x,K,ja,Re,S,Tt,Ne,G,It,V,St,Gt,Le,v,Bt,ce,Pt,Ot,pe,jt,Wt,we,Rt,Nt,Ce,U,Lt,Me,B,Ct,ve,Mt,Dt,De,P,T,Ft,ye,Ht,$t,ge,qt,Yt,zt,be,Kt,Fe,y,Vt,_e,Ut,Jt,Ee,Qt,Xt,ke,Zt,ea,He,J,ta,$e,Q,aa,qe,O,ia,Ae,oa,sa,Ye,F,xe,la,ra,ze,X,na,Ke,H,Te,ma,ha,Ve,g,Ie,da,fa,Se,ua,ca,Ge,pa,wa,Be,va,Ue,k,Wa,Je,Z,ya,Qe,ee,ga,Xe,te,ba,Ze,j,_a,Pe,Ea,ka,et,ae,ie,Aa,$,xa,tt,oe,W,Oe,Ta,Ia,se,Sa;return{c(){f=s("p"),E=i("Following "),p=s("a"),M=i("our partner workshop in May"),u=i(`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),w=h(),b=s("ol"),ne=s("li"),_=s("p"),ht=i(`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),me=s("strong"),dt=i("subject"),ft=i(" and "),he=s("strong"),ut=i("theme"),ct=i(`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),z=s("a"),pt=i("in our earlier blogpost here"),wt=i(`), in particular those related to
style, collection, and artist.`),vt=h(),de=s("li"),A=s("p"),yt=i("We should consider measuring similarity based "),fe=s("strong"),gt=i("exclusively"),bt=i(` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),D=s("a"),_t=i("Graph Embedding"),Et=i("."),je=h(),I=s("p"),kt=i(`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),ue=s("strong"),At=i("when combining data from multiple museums"),xt=i(". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),We=h(),x=s("div"),K=s("img"),Re=h(),S=s("div"),Tt=i("Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),Ne=h(),G=s("p"),It=i("This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),V=s("a"),St=i(`one of LiviaAI\u2019s three main
goals`),Gt=i(`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),Le=h(),v=s("p"),Bt=i("The goal of LiviaAI is to teach computers how to recognize similar "),ce=s("strong"),Pt=i("images"),Ot=i(", rather than similar "),pe=s("strong"),jt=i("metadata"),Wt=i(". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are similar to each other, but also images that are different, so that it learns what similarity looks like, "),we=s("strong"),Rt=i("without depending on the metadata"),Nt=i("."),Ce=h(),U=s("h2"),Lt=i("Triplets"),Me=h(),B=s("p"),Ct=i("In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),ve=s("strong"),Mt=i("triplet"),Dt=i(". Good triplets will produce an AI model that can measure similarity in a useful way, allowing us to identify related images, no matter which collection they come from. To summarize our workflow:"),De=h(),P=s("ul"),T=s("li"),Ft=i("First, we compile lots of triplets, i.e. examples of images that are "),ye=s("strong"),Ht=i("similar"),$t=i(", and images that are "),ge=s("strong"),qt=i("different"),Yt=i(" in terms of theme and subject."),zt=h(),be=s("li"),Kt=i("We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like."),Fe=h(),y=s("p"),Vt=i("It is important to understand that the method we use to "),_e=s("strong"),Ut=i("select"),Jt=i(" our triplets is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images; and because similar subject and themes are described in similar terms "),Ee=s("strong"),Qt=i("within one museum collection"),Xt=i(", this approach is sensible. But ultimately, the AI is supposed to learn the "),ke=s("strong"),Zt=i("visual representation"),ea=i(" of similarity. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),He=h(),J=s("h2"),ta=i("Comparing Approaches"),$e=h(),Q=s("p"),aa=i("So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),qe=h(),O=s("p"),ia=i("Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),Ae=s("em"),oa=i("will"),sa=i(" be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),Ye=h(),F=s("p"),xe=s("strong"),la=i("That\u2019s why we need your help:"),ra=i(" Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),ze=h(),X=s("p"),na=i("Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),Ke=h(),H=s("p"),Te=s("strong"),ma=i("We know that ratings are subjective. That\u2019s no problem!"),ha=i(` We want to collect as much & as diverse feedback
as possible. If you feel unsure about the process, we recommend:`),Ve=h(),g=s("ul"),Ie=s("li"),da=i("Don\u2019t overthink it."),fa=h(),Se=s("li"),ua=i("Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),ca=h(),Ge=s("li"),pa=i("Trust your instincts and rate according to your first impression."),wa=h(),Be=s("li"),va=i("If a triple is confusing, this is likely due to ambiguous keywords. Simply skip the triplet."),Ue=h(),k=s("iframe"),Je=h(),Z=s("p"),ya=i("After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the \u201CSkip this Triplet\u201D link. Please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),Qe=h(),ee=s("h2"),ga=i("What Happens with the Data?"),Xe=h(),te=s("p"),ba=i("First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),Ze=h(),j=s("p"),_a=i("If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Pe=s("strong"),Ea=i("only"),ka=i(" (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),et=h(),ae=s("p"),ie=s("strong"),Aa=i("You can also access the rating app without the blog post here: "),$=s("a"),xa=i("https://rate-this-triplet.no5.at"),tt=h(),oe=s("footer"),W=s("div"),Oe=s("h4"),Ta=i("Previous post"),Ia=h(),se=s("a"),Sa=i("Community and Data"),this.h()},l(e){f=l(e,"P",{});var n=r(f);E=o(n,"Following "),p=l(n,"A",{href:!0});var Ra=r(p);M=o(Ra,"our partner workshop in May"),Ra.forEach(a),u=o(n,`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),n.forEach(a),w=d(e),b=l(e,"OL",{});var at=r(b);ne=l(at,"LI",{});var Na=r(ne);_=l(Na,"P",{});var R=r(_);ht=o(R,`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),me=l(R,"STRONG",{});var La=r(me);dt=o(La,"subject"),La.forEach(a),ft=o(R," and "),he=l(R,"STRONG",{});var Ca=r(he);ut=o(Ca,"theme"),Ca.forEach(a),ct=o(R,`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),z=l(R,"A",{href:!0});var Ma=r(z);pt=o(Ma,"in our earlier blogpost here"),Ma.forEach(a),wt=o(R,`), in particular those related to
style, collection, and artist.`),R.forEach(a),Na.forEach(a),vt=d(at),de=l(at,"LI",{});var Da=r(de);A=l(Da,"P",{});var le=r(A);yt=o(le,"We should consider measuring similarity based "),fe=l(le,"STRONG",{});var Fa=r(fe);gt=o(Fa,"exclusively"),Fa.forEach(a),bt=o(le,` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),D=l(le,"A",{href:!0,rel:!0});var Ha=r(D);_t=o(Ha,"Graph Embedding"),Ha.forEach(a),Et=o(le,"."),le.forEach(a),Da.forEach(a),at.forEach(a),je=d(e),I=l(e,"P",{});var it=r(I);kt=o(it,`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),ue=l(it,"STRONG",{});var $a=r(ue);At=o($a,"when combining data from multiple museums"),$a.forEach(a),xt=o(it,". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),it.forEach(a),We=d(e),x=l(e,"DIV",{style:!0});var qa=r(x);K=l(qa,"IMG",{src:!0,alt:!0}),qa.forEach(a),Re=d(e),S=l(e,"DIV",{style:!0,class:!0});var Ya=r(S);Tt=o(Ya,"Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),Ya.forEach(a),Ne=d(e),G=l(e,"P",{});var ot=r(G);It=o(ot,"This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),V=l(ot,"A",{href:!0});var za=r(V);St=o(za,`one of LiviaAI\u2019s three main
goals`),za.forEach(a),Gt=o(ot,`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),ot.forEach(a),Le=d(e),v=l(e,"P",{});var N=r(v);Bt=o(N,"The goal of LiviaAI is to teach computers how to recognize similar "),ce=l(N,"STRONG",{});var Ka=r(ce);Pt=o(Ka,"images"),Ka.forEach(a),Ot=o(N,", rather than similar "),pe=l(N,"STRONG",{});var Va=r(pe);jt=o(Va,"metadata"),Va.forEach(a),Wt=o(N,". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are similar to each other, but also images that are different, so that it learns what similarity looks like, "),we=l(N,"STRONG",{});var Ua=r(we);Rt=o(Ua,"without depending on the metadata"),Ua.forEach(a),Nt=o(N,"."),N.forEach(a),Ce=d(e),U=l(e,"H2",{});var Ja=r(U);Lt=o(Ja,"Triplets"),Ja.forEach(a),Me=d(e),B=l(e,"P",{});var st=r(B);Ct=o(st,"In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),ve=l(st,"STRONG",{});var Qa=r(ve);Mt=o(Qa,"triplet"),Qa.forEach(a),Dt=o(st,". Good triplets will produce an AI model that can measure similarity in a useful way, allowing us to identify related images, no matter which collection they come from. To summarize our workflow:"),st.forEach(a),De=d(e),P=l(e,"UL",{});var lt=r(P);T=l(lt,"LI",{});var re=r(T);Ft=o(re,"First, we compile lots of triplets, i.e. examples of images that are "),ye=l(re,"STRONG",{});var Xa=r(ye);Ht=o(Xa,"similar"),Xa.forEach(a),$t=o(re,", and images that are "),ge=l(re,"STRONG",{});var Za=r(ge);qt=o(Za,"different"),Za.forEach(a),Yt=o(re," in terms of theme and subject."),re.forEach(a),zt=d(lt),be=l(lt,"LI",{});var ei=r(be);Kt=o(ei,"We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like."),ei.forEach(a),lt.forEach(a),Fe=d(e),y=l(e,"P",{});var L=r(y);Vt=o(L,"It is important to understand that the method we use to "),_e=l(L,"STRONG",{});var ti=r(_e);Ut=o(ti,"select"),ti.forEach(a),Jt=o(L," our triplets is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images; and because similar subject and themes are described in similar terms "),Ee=l(L,"STRONG",{});var ai=r(Ee);Qt=o(ai,"within one museum collection"),ai.forEach(a),Xt=o(L,", this approach is sensible. But ultimately, the AI is supposed to learn the "),ke=l(L,"STRONG",{});var ii=r(ke);Zt=o(ii,"visual representation"),ii.forEach(a),ea=o(L," of similarity. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),L.forEach(a),He=d(e),J=l(e,"H2",{});var oi=r(J);ta=o(oi,"Comparing Approaches"),oi.forEach(a),$e=d(e),Q=l(e,"P",{});var si=r(Q);aa=o(si,"So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),si.forEach(a),qe=d(e),O=l(e,"P",{});var rt=r(O);ia=o(rt,"Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),Ae=l(rt,"EM",{});var li=r(Ae);oa=o(li,"will"),li.forEach(a),sa=o(rt," be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),rt.forEach(a),Ye=d(e),F=l(e,"P",{});var Ga=r(F);xe=l(Ga,"STRONG",{});var ri=r(xe);la=o(ri,"That\u2019s why we need your help:"),ri.forEach(a),ra=o(Ga," Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),Ga.forEach(a),ze=d(e),X=l(e,"P",{});var ni=r(X);na=o(ni,"Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),ni.forEach(a),Ke=d(e),H=l(e,"P",{});var Ba=r(H);Te=l(Ba,"STRONG",{});var mi=r(Te);ma=o(mi,"We know that ratings are subjective. That\u2019s no problem!"),mi.forEach(a),ha=o(Ba,` We want to collect as much & as diverse feedback
as possible. If you feel unsure about the process, we recommend:`),Ba.forEach(a),Ve=d(e),g=l(e,"UL",{});var C=r(g);Ie=l(C,"LI",{});var hi=r(Ie);da=o(hi,"Don\u2019t overthink it."),hi.forEach(a),fa=d(C),Se=l(C,"LI",{});var di=r(Se);ua=o(di,"Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),di.forEach(a),ca=d(C),Ge=l(C,"LI",{});var fi=r(Ge);pa=o(fi,"Trust your instincts and rate according to your first impression."),fi.forEach(a),wa=d(C),Be=l(C,"LI",{});var ui=r(Be);va=o(ui,"If a triple is confusing, this is likely due to ambiguous keywords. Simply skip the triplet."),ui.forEach(a),C.forEach(a),Ue=d(e),k=l(e,"IFRAME",{src:!0,style:!0});var Ii=r(k);Ii.forEach(a),Je=d(e),Z=l(e,"P",{});var ci=r(Z);ya=o(ci,"After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the \u201CSkip this Triplet\u201D link. Please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),ci.forEach(a),Qe=d(e),ee=l(e,"H2",{});var pi=r(ee);ga=o(pi,"What Happens with the Data?"),pi.forEach(a),Xe=d(e),te=l(e,"P",{});var wi=r(te);ba=o(wi,"First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),wi.forEach(a),Ze=d(e),j=l(e,"P",{});var nt=r(j);_a=o(nt,"If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Pe=l(nt,"STRONG",{});var vi=r(Pe);Ea=o(vi,"only"),vi.forEach(a),ka=o(nt," (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),nt.forEach(a),et=d(e),ae=l(e,"P",{});var yi=r(ae);ie=l(yi,"STRONG",{});var Pa=r(ie);Aa=o(Pa,"You can also access the rating app without the blog post here: "),$=l(Pa,"A",{href:!0,rel:!0});var gi=r($);xa=o(gi,"https://rate-this-triplet.no5.at"),gi.forEach(a),Pa.forEach(a),yi.forEach(a),tt=d(e),oe=l(e,"FOOTER",{});var bi=r(oe);W=l(bi,"DIV",{class:!0});var mt=r(W);Oe=l(mt,"H4",{});var _i=r(Oe);Ta=o(_i,"Previous post"),_i.forEach(a),Ia=d(mt),se=l(mt,"A",{href:!0});var Ei=r(se);Sa=o(Ei,"Community and Data"),Ei.forEach(a),mt.forEach(a),bi.forEach(a),this.h()},h(){c(p,"href","/blog/2022-05-community-data"),c(z,"href","/blog/2022-04-machines-reading-metadata"),c(D,"href","https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4"),c(D,"rel","nofollow"),xi(K.src,ja="/blog/2022-06-exploring-similarity/3d_sentence_embeddings_all.png")||c(K,"src",ja),c(K,"alt","3D scatterplot of metadata sentence embedding vectors for all museums combined"),q(x,"display","flex"),q(x,"justify-content","center"),q(x,"padding-top","30px"),q(S,"width","100%"),c(S,"class","image-caption centered"),c(V,"href","/blog/2022-04-hello-world"),xi(k.src,Wa="https://rate-this-triplet.no5.at/embed.html")||c(k,"src",Wa),q(k,"width","100%"),q(k,"height","700px"),q(k,"margin","0"),c($,"href","https://rate-this-triplet.no5.at"),c($,"rel","nofollow"),c(se,"href","/blog/2022-05-community-data/"),c(W,"class","previous-post")},m(e,n){m(e,f,n),t(f,E),t(f,p),t(p,M),t(f,u),m(e,w,n),m(e,b,n),t(b,ne),t(ne,_),t(_,ht),t(_,me),t(me,dt),t(_,ft),t(_,he),t(he,ut),t(_,ct),t(_,z),t(z,pt),t(_,wt),t(b,vt),t(b,de),t(de,A),t(A,yt),t(A,fe),t(fe,gt),t(A,bt),t(A,D),t(D,_t),t(A,Et),m(e,je,n),m(e,I,n),t(I,kt),t(I,ue),t(ue,At),t(I,xt),m(e,We,n),m(e,x,n),t(x,K),m(e,Re,n),m(e,S,n),t(S,Tt),m(e,Ne,n),m(e,G,n),t(G,It),t(G,V),t(V,St),t(G,Gt),m(e,Le,n),m(e,v,n),t(v,Bt),t(v,ce),t(ce,Pt),t(v,Ot),t(v,pe),t(pe,jt),t(v,Wt),t(v,we),t(we,Rt),t(v,Nt),m(e,Ce,n),m(e,U,n),t(U,Lt),m(e,Me,n),m(e,B,n),t(B,Ct),t(B,ve),t(ve,Mt),t(B,Dt),m(e,De,n),m(e,P,n),t(P,T),t(T,Ft),t(T,ye),t(ye,Ht),t(T,$t),t(T,ge),t(ge,qt),t(T,Yt),t(P,zt),t(P,be),t(be,Kt),m(e,Fe,n),m(e,y,n),t(y,Vt),t(y,_e),t(_e,Ut),t(y,Jt),t(y,Ee),t(Ee,Qt),t(y,Xt),t(y,ke),t(ke,Zt),t(y,ea),m(e,He,n),m(e,J,n),t(J,ta),m(e,$e,n),m(e,Q,n),t(Q,aa),m(e,qe,n),m(e,O,n),t(O,ia),t(O,Ae),t(Ae,oa),t(O,sa),m(e,Ye,n),m(e,F,n),t(F,xe),t(xe,la),t(F,ra),m(e,ze,n),m(e,X,n),t(X,na),m(e,Ke,n),m(e,H,n),t(H,Te),t(Te,ma),t(H,ha),m(e,Ve,n),m(e,g,n),t(g,Ie),t(Ie,da),t(g,fa),t(g,Se),t(Se,ua),t(g,ca),t(g,Ge),t(Ge,pa),t(g,wa),t(g,Be),t(Be,va),m(e,Ue,n),m(e,k,n),m(e,Je,n),m(e,Z,n),t(Z,ya),m(e,Qe,n),m(e,ee,n),t(ee,ga),m(e,Xe,n),m(e,te,n),t(te,ba),m(e,Ze,n),m(e,j,n),t(j,_a),t(j,Pe),t(Pe,Ea),t(j,ka),m(e,et,n),m(e,ae,n),t(ae,ie),t(ie,Aa),t(ie,$),t($,xa),m(e,tt,n),m(e,oe,n),t(oe,W),t(W,Oe),t(Oe,Ta),t(W,Ia),t(W,se),t(se,Sa)},d(e){e&&a(f),e&&a(w),e&&a(b),e&&a(je),e&&a(I),e&&a(We),e&&a(x),e&&a(Re),e&&a(S),e&&a(Ne),e&&a(G),e&&a(Le),e&&a(v),e&&a(Ce),e&&a(U),e&&a(Me),e&&a(B),e&&a(De),e&&a(P),e&&a(Fe),e&&a(y),e&&a(He),e&&a(J),e&&a($e),e&&a(Q),e&&a(qe),e&&a(O),e&&a(Ye),e&&a(F),e&&a(ze),e&&a(X),e&&a(Ke),e&&a(H),e&&a(Ve),e&&a(g),e&&a(Ue),e&&a(k),e&&a(Je),e&&a(Z),e&&a(Qe),e&&a(ee),e&&a(Xe),e&&a(te),e&&a(Ze),e&&a(j),e&&a(et),e&&a(ae),e&&a(tt),e&&a(oe)}}}function Di(Y){let f,E;const p=[Y[0],Ti];let M={$$slots:{default:[Mi]},$$scope:{ctx:Y}};for(let u=0;u<p.length;u+=1)M=Oa(M,p[u]);return f=new Ci({props:M}),{c(){Pi(f.$$.fragment)},l(u){Oi(f.$$.fragment,u)},m(u,w){ji(f,u,w),E=!0},p(u,[w]){const b=w&1?Wi(p,[w&1&&ki(u[0]),w&0&&ki(Ti)]):{};w&2&&(b.$$scope={dirty:w,ctx:u}),f.$set(b)},i(u){E||(Ri(f.$$.fragment,u),E=!0)},o(u){Ni(f.$$.fragment,u),E=!1},d(u){Li(f,u)}}}const Ti={title:"Exploring Similarity: Triplets and How to Choose Them",description:"Help us understand the quality of our data by participating in a small crowdsourcing experiment.",url:"https://liviaai.at/blog/2022-06-exploring-similarity",date:"June 15, 2022"};function Fi(Y,f,E){return Y.$$set=p=>{E(0,f=Oa(Oa({},f),Ai(p)))},f=Ai(f),[f]}class qi extends Si{constructor(f){super();Gi(this,f,Fi,Di,Bi,{})}}export{qi as default,Ti as metadata};
