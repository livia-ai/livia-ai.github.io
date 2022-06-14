import{S as Li,i as Mi,s as Ni,C as Ca,w as Ci,x as Di,y as Fi,z as Hi,A as Pi,q as $i,o as qi,B as Yi,Q as ji,e as s,t as i,k as h,c as l,a as r,h as o,d as a,m as d,b as p,O as Wi,f as q,g as m,H as t}from"../../chunks/vendor-f435face.js";import{P as zi}from"../../chunks/_post-4f5578a2.js";function Ki(Y){let f,_,w,N,u,g,y,he,b,ut,de,ct,pt,fe,wt,gt,z,vt,yt,bt,ue,I,_t,ce,Et,kt,C,xt,At,Le,G,It,pe,Tt,St,Me,T,K,Da,Ne,B,Gt,Ce,P,Bt,V,Pt,jt,De,c,Wt,we,Ot,Rt,ge,Lt,Mt,ve,Nt,Ct,ye,Dt,Ft,Fe,E,Ht,be,$t,qt,_e,Yt,zt,He,U,Kt,$e,j,Vt,Ee,Ut,Jt,qe,k,S,Qt,ke,Xt,Zt,xe,ea,ta,aa,Ae,ia,oa,D,sa,Ie,la,ra,Ye,J,na,ze,Q,ma,Ke,W,ha,Te,da,fa,Ve,F,Se,ua,ca,Ue,X,pa,Je,H,Ge,wa,ga,Qe,v,Be,va,ya,Pe,ba,_a,je,Ea,ka,We,xa,Xe,x,Fa,Ze,Z,Aa,et,ee,Ia,tt,te,Ta,at,O,Sa,Oe,Ga,Ba,it,ae,ie,Pa,$,ja,ot,oe,R,Re,Wa,Oa,se,Ra;return{c(){f=s("p"),_=i("Following "),w=s("a"),N=i("our partner workshop in May"),u=i(`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),g=h(),y=s("ol"),he=s("li"),b=s("p"),ut=i(`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),de=s("strong"),ct=i("subject"),pt=i(" and "),fe=s("strong"),wt=i("theme"),gt=i(`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),z=s("a"),vt=i("in our earlier blogpost here"),yt=i(`), in particular those related to
style, collection, and artist.`),bt=h(),ue=s("li"),I=s("p"),_t=i("We should consider measuring similarity based "),ce=s("strong"),Et=i("exclusively"),kt=i(` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),C=s("a"),xt=i("Graph Embedding"),At=i("."),Le=h(),G=s("p"),It=i(`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),pe=s("strong"),Tt=i("when combining data from multiple museums"),St=i(". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),Me=h(),T=s("div"),K=s("img"),Ne=h(),B=s("div"),Gt=i("Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),Ce=h(),P=s("p"),Bt=i("This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),V=s("a"),Pt=i(`one of LiviaAI\u2019s three main
goals`),jt=i(`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),De=h(),c=s("p"),Wt=i("The goal of LiviaAI is to teach computers how to recognize similar "),we=s("em"),Ot=i("images"),Rt=i(", rather than similar "),ge=s("em"),Lt=i("metadata"),Mt=i(". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are "),ve=s("strong"),Nt=i("similar"),Ct=i(" to each other, but also images that are "),ye=s("strong"),Dt=i("different"),Ft=i(" to that pair."),Fe=h(),E=s("p"),Ht=i("It is important to understand that the method we use to "),be=s("em"),$t=i("select"),qt=i(" those examples is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images. But ultimately, the AI is supposed to learn what this similarity "),_e=s("strong"),Yt=i("looks like"),zt=i(", without looking at the metadata. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),He=h(),U=s("h2"),Kt=i("Triplets"),$e=h(),j=s("p"),Vt=i("In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),Ee=s("strong"),Ut=i("triplet"),Jt=i(". Good triplets will produce an AI model that can measure similarity in a useful way, thus allowing us to identify related images between collections, no matter which collection they come from. To summarize our workflow:"),qe=h(),k=s("ul"),S=s("li"),Qt=i("First, we compile lots of triplets, i.e. examples of images that are "),ke=s("strong"),Xt=i("similar"),Zt=i(", and images that are "),xe=s("strong"),ea=i("different"),ta=i(" in terms of theme and subject."),aa=h(),Ae=s("li"),ia=i("We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like in the images."),oa=h(),D=s("li"),sa=i("In order to get our examples, we rely on the metadata: because similar subject and themes are described in similar terms "),Ie=s("strong"),la=i("within one museum collection"),ra=i(", records with high metadata similarity should provide us with good image training material."),Ye=h(),J=s("h2"),na=i("Comparing Approaches"),ze=h(),Q=s("p"),ma=i("So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),Ke=h(),W=s("p"),ha=i("Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),Te=s("em"),da=i("will"),fa=i(" be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),Ve=h(),F=s("p"),Se=s("strong"),ua=i("That\u2019s why we need your help:"),ca=i(" Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),Ue=h(),X=s("p"),pa=i("Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),Je=h(),H=s("p"),Ge=s("strong"),wa=i("We know that ratings are subjective. That\u2019s no problem!"),ga=i(` We want to collect as much & as diverse feedback
as possible. If you feel unsure about the process, we recommend:`),Qe=h(),v=s("ul"),Be=s("li"),va=i("Don\u2019t overthink it."),ya=h(),Pe=s("li"),ba=i("Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),_a=h(),je=s("li"),Ea=i("Trust your instincts and rate according to your first impression."),ka=h(),We=s("li"),xa=i("If a triple is confusing, this is likely due to ambiguous keywords. Simply skip the triplet."),Xe=h(),x=s("iframe"),Ze=h(),Z=s("p"),Aa=i("After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the \u201CSkip this Triplet\u201D link. Please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),et=h(),ee=s("h2"),Ia=i("What Happens with the Data?"),tt=h(),te=s("p"),Ta=i("First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),at=h(),O=s("p"),Sa=i("If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Oe=s("strong"),Ga=i("only"),Ba=i(" (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),it=h(),ae=s("p"),ie=s("strong"),Pa=i("You can also access the rating app without the blog post here: "),$=s("a"),ja=i("https://rate-this-triplet.no5.at"),ot=h(),oe=s("footer"),R=s("div"),Re=s("h4"),Wa=i("Previous post"),Oa=h(),se=s("a"),Ra=i("Community and Data"),this.h()},l(e){f=l(e,"P",{});var n=r(f);_=o(n,"Following "),w=l(n,"A",{href:!0});var Ha=r(w);N=o(Ha,"our partner workshop in May"),Ha.forEach(a),u=o(n,`, we started to re-assess our
technical processes based on the feedback we received. Two take-away points from the workshop
were:`),n.forEach(a),g=d(e),y=l(e,"OL",{});var st=r(y);he=l(st,"LI",{});var $a=r(he);b=l($a,"P",{});var L=r(b);ut=o(L,`When measuring similarity of metadata records, we should focus only on the metadata fields that concern
`),de=l(L,"STRONG",{});var qa=r(de);ct=o(qa,"subject"),qa.forEach(a),pt=o(L," and "),fe=l(L,"STRONG",{});var Ya=r(fe);wt=o(Ya,"theme"),Ya.forEach(a),gt=o(L,`. This lead us to exclude some fields from our Sentence Embedding workflow (read about
it `),z=l(L,"A",{href:!0});var za=r(z);vt=o(za,"in our earlier blogpost here"),za.forEach(a),yt=o(L,`), in particular those related to
style, collection, and artist.`),L.forEach(a),$a.forEach(a),bt=d(st),ue=l(st,"LI",{});var Ka=r(ue);I=l(Ka,"P",{});var le=r(I);_t=o(le,"We should consider measuring similarity based "),ce=l(le,"STRONG",{});var Va=r(ce);Et=o(Va,"exclusively"),Va.forEach(a),kt=o(le,` on the curator-assigned subject tags, even if
other free-text fields (specifically, title and description) exist. This lead us to experiment with an alternative
machine learning technology referred to as `),C=l(le,"A",{href:!0,rel:!0});var Ua=r(C);xt=o(Ua,"Graph Embedding"),Ua.forEach(a),At=o(le,"."),le.forEach(a),Ka.forEach(a),st.forEach(a),Le=d(e),G=l(e,"P",{});var lt=r(G);It=o(lt,`Another important outcome from our first experiments - which the workshop confirmed - was that the similarity scores we
had computed did not work well `),pe=l(lt,"STRONG",{});var Ja=r(pe);Tt=o(Ja,"when combining data from multiple museums"),Ja.forEach(a),St=o(lt,". As the image below illustrates, each museum\u2019s records remain fairly separated from each other. This may be because vocabularies and curating practices differ too much; or, simply, because the collections are inherently too different in terms of their content."),lt.forEach(a),Me=d(e),T=l(e,"DIV",{style:!0});var Qa=r(T);K=l(Qa,"IMG",{src:!0,alt:!0}),Qa.forEach(a),Ne=d(e),B=l(e,"DIV",{style:!0,class:!0});var Xa=r(B);Gt=o(Xa,"Sentence embeddings vectors for metadata from all museums combined: MAK (blue), Wien Museum (red), Belvedere (green)."),Xa.forEach(a),Ce=d(e),P=l(e,"P",{});var rt=r(P);Bt=o(rt,"This outcome doesn\u2019t exactly make our lives easier - after all, connecting collections is "),V=l(rt,"A",{href:!0});var Za=r(V);Pt=o(Za,`one of LiviaAI\u2019s three main
goals`),Za.forEach(a),jt=o(rt,`. But it isn\u2019t entirely unexpected either. In fact, we had expected that metadata alone
would be insufficent to connect across collections. Which is why we proposed this project in the first place!`),rt.forEach(a),De=d(e),c=l(e,"P",{});var A=r(c);Wt=o(A,"The goal of LiviaAI is to teach computers how to recognize similar "),we=l(A,"EM",{});var ei=r(we);Ot=o(ei,"images"),ei.forEach(a),Rt=o(A,", rather than similar "),ge=l(A,"EM",{});var ti=r(ge);Lt=o(ti,"metadata"),ti.forEach(a),Mt=o(A,". To do this, we need to provide examples: the AI needs to see (lots of!) pairs of images that are "),ve=l(A,"STRONG",{});var ai=r(ve);Nt=o(ai,"similar"),ai.forEach(a),Ct=o(A," to each other, but also images that are "),ye=l(A,"STRONG",{});var ii=r(ye);Dt=o(ii,"different"),ii.forEach(a),Ft=o(A," to that pair."),A.forEach(a),Fe=d(e),E=l(e,"P",{});var re=r(E);Ht=o(re,"It is important to understand that the method we use to "),be=l(re,"EM",{});var oi=r(be);$t=o(oi,"select"),oi.forEach(a),qt=o(re," those examples is still based on the metadata: similar metadata means we\u2019ll show it to the AI as an example of similar images. But ultimately, the AI is supposed to learn what this similarity "),_e=l(re,"STRONG",{});var si=r(_e);Yt=o(si,"looks like"),si.forEach(a),zt=o(re,", without looking at the metadata. And that, in turn, means it will have much less problems dealing with mixed content from different collections."),re.forEach(a),He=d(e),U=l(e,"H2",{});var li=r(U);Kt=o(li,"Triplets"),li.forEach(a),$e=d(e),j=l(e,"P",{});var nt=r(j);Vt=o(nt,"In AI terminology, a group of three images, where the first two are an example of similar images, and the third one is an example of a different image, is called a "),Ee=l(nt,"STRONG",{});var ri=r(Ee);Ut=o(ri,"triplet"),ri.forEach(a),Jt=o(nt,". Good triplets will produce an AI model that can measure similarity in a useful way, thus allowing us to identify related images between collections, no matter which collection they come from. To summarize our workflow:"),nt.forEach(a),qe=d(e),k=l(e,"UL",{});var ne=r(k);S=l(ne,"LI",{});var me=r(S);Qt=o(me,"First, we compile lots of triplets, i.e. examples of images that are "),ke=l(me,"STRONG",{});var ni=r(ke);Xt=o(ni,"similar"),ni.forEach(a),Zt=o(me,", and images that are "),xe=l(me,"STRONG",{});var mi=r(xe);ea=o(mi,"different"),mi.forEach(a),ta=o(me," in terms of theme and subject."),me.forEach(a),aa=d(ne),Ae=l(ne,"LI",{});var hi=r(Ae);ia=o(hi,"We feed the triplets into the AI, so it learns to \u201Cunderstand\u201D what similarity looks like in the images."),hi.forEach(a),oa=d(ne),D=l(ne,"LI",{});var mt=r(D);sa=o(mt,"In order to get our examples, we rely on the metadata: because similar subject and themes are described in similar terms "),Ie=l(mt,"STRONG",{});var di=r(Ie);la=o(di,"within one museum collection"),di.forEach(a),ra=o(mt,", records with high metadata similarity should provide us with good image training material."),mt.forEach(a),ne.forEach(a),Ye=d(e),J=l(e,"H2",{});var fi=r(J);na=o(fi,"Comparing Approaches"),fi.forEach(a),ze=d(e),Q=l(e,"P",{});var ui=r(Q);ma=o(ui,"So far, we\u2019ve built triplets for two different museums (the Belvedere and the Wien Museum), and - as written above - using two different methods: Sentence Embeddings and Graph Embeddings. As a next step, we want to understand more about the real-world applicability of these two approaches."),ui.forEach(a),Ke=d(e),W=l(e,"P",{});var ht=r(W);ha=o(ht,"Both approaches present us with a quantitative measure of similarity that\u2019s\u2026 technically\u2026 accurate: metadata records that include many identical terms, keywords and wording (perhaps with the odd synonym thrown in) "),Te=l(ht,"EM",{});var ci=r(Te);da=o(ci,"will"),ci.forEach(a),fa=o(ht," be reliably identified as similar. But the real world isn\u2019t that simple, of course. Metadata isn\u2019t always rich enough to provide enough material for the algorithm (or even humans!) to judge whether two images are similar enough in terms of subject and themes; and curation may not always be consistent, even within the same institution and collection."),ht.forEach(a),Ve=d(e),F=l(e,"P",{});var La=r(F);Se=l(La,"STRONG",{});var pi=r(Se);ua=o(pi,"That\u2019s why we need your help:"),pi.forEach(a),ca=o(La," Below, you see a random triplet. Based on the metdata, our algorithm has selected images A and B as similar; and image C as different. Does the choice make sense? You can vote using the two buttons below."),La.forEach(a),Ue=d(e),X=l(e,"P",{});var wi=r(X);pa=o(wi,"Give us a thumbs-up if images A and B show similar motives or themes, and image C is different from A and B. Give us a thumbs-down if there is little similarity between A and B, or C is too similar to A or B."),wi.forEach(a),Je=d(e),H=l(e,"P",{});var Ma=r(H);Ge=l(Ma,"STRONG",{});var gi=r(Ge);wa=o(gi,"We know that ratings are subjective. That\u2019s no problem!"),gi.forEach(a),ga=o(Ma,` We want to collect as much & as diverse feedback
as possible. If you feel unsure about the process, we recommend:`),Ma.forEach(a),Qe=d(e),v=l(e,"UL",{});var M=r(v);Be=l(M,"LI",{});var vi=r(Be);va=o(vi,"Don\u2019t overthink it."),vi.forEach(a),ya=d(M),Pe=l(M,"LI",{});var yi=r(Pe);ba=o(yi,"Focus on image motives and themes, ignore the medium (e.g. painting, sculpture,\u2026)"),yi.forEach(a),_a=d(M),je=l(M,"LI",{});var bi=r(je);Ea=o(bi,"Trust your instincts and rate according to your first impression."),bi.forEach(a),ka=d(M),We=l(M,"LI",{});var _i=r(We);xa=o(_i,"If a triple is confusing, this is likely due to ambiguous keywords. Simply skip the triplet."),_i.forEach(a),M.forEach(a),Xe=d(e),x=l(e,"IFRAME",{src:!0,style:!0});var Ri=r(x);Ri.forEach(a),Ze=d(e),Z=l(e,"P",{});var Ei=r(Z);Aa=o(Ei,"After your vote, a new random triplet will load. Keep going as long as you want - the more data we collect, the better. You can also skip a triplet by clicking the \u201CSkip this Triplet\u201D link. Please do this only in cases where you really (really!) cannot decide, or if there\u2019s a problem loading a particular triplet. When in doubt, your gut feeling helps us more than no vote at all."),Ei.forEach(a),et=d(e),ee=l(e,"H2",{});var ki=r(ee);Ia=o(ki,"What Happens with the Data?"),ki.forEach(a),tt=d(e),te=l(e,"P",{});var xi=r(te);Ta=o(xi,"First of all: the data we collect is, of course, completely anonymous. All we record is your \u201CGood\u201D or \u201CBad\u201D rating on each triplet. The data we collect will help us, most importantly, to understand whether there is any significant difference between triplets selected using Sentence Embeddings or Graph Embeddings. It will also help us get a better feel for which museum collection \u201Cworks better\u201D, as it were, with the two methods."),xi.forEach(a),at=d(e),O=l(e,"P",{});var dt=r(O);Sa=o(dt,"If we collect enough feedback (and that\u2019s a big if!), we will also be able to train the AI "),Oe=l(dt,"STRONG",{});var Ai=r(Oe);Ga=o(Ai,"only"),Ai.forEach(a),Ba=o(dt," (or, at least, mainly) with triplets that have been confirmed by a human, which will significantly improve the quality of the model."),dt.forEach(a),it=d(e),ae=l(e,"P",{});var Ii=r(ae);ie=l(Ii,"STRONG",{});var Na=r(ie);Pa=o(Na,"You can also access the rating app without the blog post here: "),$=l(Na,"A",{href:!0,rel:!0});var Ti=r($);ja=o(Ti,"https://rate-this-triplet.no5.at"),Ti.forEach(a),Na.forEach(a),Ii.forEach(a),ot=d(e),oe=l(e,"FOOTER",{});var Si=r(oe);R=l(Si,"DIV",{class:!0});var ft=r(R);Re=l(ft,"H4",{});var Gi=r(Re);Wa=o(Gi,"Previous post"),Gi.forEach(a),Oa=d(ft),se=l(ft,"A",{href:!0});var Bi=r(se);Ra=o(Bi,"Community and Data"),Bi.forEach(a),ft.forEach(a),Si.forEach(a),this.h()},h(){p(w,"href","/blog/2022-05-community-data"),p(z,"href","/blog/2022-04-machines-reading-metadata"),p(C,"href","https://towardsdatascience.com/overview-of-deep-learning-on-graph-embeddings-4305c10ad4a4"),p(C,"rel","nofollow"),Wi(K.src,Da="/blog/2022-06-exploring-similarity/3d_sentence_embeddings_all.png")||p(K,"src",Da),p(K,"alt","3D scatterplot of metadata sentence embedding vectors for all museums combined"),q(T,"display","flex"),q(T,"justify-content","center"),q(T,"padding-top","30px"),q(B,"width","100%"),p(B,"class","image-caption centered"),p(V,"href","/blog/2022-04-hello-world"),Wi(x.src,Fa="https://rate-this-triplet.no5.at/embed.html")||p(x,"src",Fa),q(x,"width","100%"),q(x,"height","700px"),q(x,"margin","0"),p($,"href","https://rate-this-triplet.no5.at"),p($,"rel","nofollow"),p(se,"href","/blog/2022-05-community-data/"),p(R,"class","previous-post")},m(e,n){m(e,f,n),t(f,_),t(f,w),t(w,N),t(f,u),m(e,g,n),m(e,y,n),t(y,he),t(he,b),t(b,ut),t(b,de),t(de,ct),t(b,pt),t(b,fe),t(fe,wt),t(b,gt),t(b,z),t(z,vt),t(b,yt),t(y,bt),t(y,ue),t(ue,I),t(I,_t),t(I,ce),t(ce,Et),t(I,kt),t(I,C),t(C,xt),t(I,At),m(e,Le,n),m(e,G,n),t(G,It),t(G,pe),t(pe,Tt),t(G,St),m(e,Me,n),m(e,T,n),t(T,K),m(e,Ne,n),m(e,B,n),t(B,Gt),m(e,Ce,n),m(e,P,n),t(P,Bt),t(P,V),t(V,Pt),t(P,jt),m(e,De,n),m(e,c,n),t(c,Wt),t(c,we),t(we,Ot),t(c,Rt),t(c,ge),t(ge,Lt),t(c,Mt),t(c,ve),t(ve,Nt),t(c,Ct),t(c,ye),t(ye,Dt),t(c,Ft),m(e,Fe,n),m(e,E,n),t(E,Ht),t(E,be),t(be,$t),t(E,qt),t(E,_e),t(_e,Yt),t(E,zt),m(e,He,n),m(e,U,n),t(U,Kt),m(e,$e,n),m(e,j,n),t(j,Vt),t(j,Ee),t(Ee,Ut),t(j,Jt),m(e,qe,n),m(e,k,n),t(k,S),t(S,Qt),t(S,ke),t(ke,Xt),t(S,Zt),t(S,xe),t(xe,ea),t(S,ta),t(k,aa),t(k,Ae),t(Ae,ia),t(k,oa),t(k,D),t(D,sa),t(D,Ie),t(Ie,la),t(D,ra),m(e,Ye,n),m(e,J,n),t(J,na),m(e,ze,n),m(e,Q,n),t(Q,ma),m(e,Ke,n),m(e,W,n),t(W,ha),t(W,Te),t(Te,da),t(W,fa),m(e,Ve,n),m(e,F,n),t(F,Se),t(Se,ua),t(F,ca),m(e,Ue,n),m(e,X,n),t(X,pa),m(e,Je,n),m(e,H,n),t(H,Ge),t(Ge,wa),t(H,ga),m(e,Qe,n),m(e,v,n),t(v,Be),t(Be,va),t(v,ya),t(v,Pe),t(Pe,ba),t(v,_a),t(v,je),t(je,Ea),t(v,ka),t(v,We),t(We,xa),m(e,Xe,n),m(e,x,n),m(e,Ze,n),m(e,Z,n),t(Z,Aa),m(e,et,n),m(e,ee,n),t(ee,Ia),m(e,tt,n),m(e,te,n),t(te,Ta),m(e,at,n),m(e,O,n),t(O,Sa),t(O,Oe),t(Oe,Ga),t(O,Ba),m(e,it,n),m(e,ae,n),t(ae,ie),t(ie,Pa),t(ie,$),t($,ja),m(e,ot,n),m(e,oe,n),t(oe,R),t(R,Re),t(Re,Wa),t(R,Oa),t(R,se),t(se,Ra)},d(e){e&&a(f),e&&a(g),e&&a(y),e&&a(Le),e&&a(G),e&&a(Me),e&&a(T),e&&a(Ne),e&&a(B),e&&a(Ce),e&&a(P),e&&a(De),e&&a(c),e&&a(Fe),e&&a(E),e&&a(He),e&&a(U),e&&a($e),e&&a(j),e&&a(qe),e&&a(k),e&&a(Ye),e&&a(J),e&&a(ze),e&&a(Q),e&&a(Ke),e&&a(W),e&&a(Ve),e&&a(F),e&&a(Ue),e&&a(X),e&&a(Je),e&&a(H),e&&a(Qe),e&&a(v),e&&a(Xe),e&&a(x),e&&a(Ze),e&&a(Z),e&&a(et),e&&a(ee),e&&a(tt),e&&a(te),e&&a(at),e&&a(O),e&&a(it),e&&a(ae),e&&a(ot),e&&a(oe)}}}function Vi(Y){let f,_;const w=[Y[0],Oi];let N={$$slots:{default:[Ki]},$$scope:{ctx:Y}};for(let u=0;u<w.length;u+=1)N=Ca(N,w[u]);return f=new zi({props:N}),{c(){Ci(f.$$.fragment)},l(u){Di(f.$$.fragment,u)},m(u,g){Fi(f,u,g),_=!0},p(u,[g]){const y=g&1?Hi(w,[g&1&&Pi(u[0]),g&0&&Pi(Oi)]):{};g&2&&(y.$$scope={dirty:g,ctx:u}),f.$set(y)},i(u){_||($i(f.$$.fragment,u),_=!0)},o(u){qi(f.$$.fragment,u),_=!1},d(u){Yi(f,u)}}}const Oi={title:"Exploring Similarity: Triplets and How to Choose Them",description:"Help us understand the quality of our data by participating in a small crowdsourcing experiment.",url:"https://liviaai.at/blog/2022-06-exploring-similarity",date:"June 15, 2022"};function Ui(Y,f,_){return Y.$$set=w=>{_(0,f=Ca(Ca({},f),ji(w)))},f=ji(f),[f]}class Xi extends Li{constructor(f){super();Mi(this,f,Ui,Vi,Ni,{})}}export{Xi as default,Oi as metadata};
