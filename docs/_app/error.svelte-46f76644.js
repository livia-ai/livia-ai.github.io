import{S as w,i as y,s as z,e as v,t as E,c as d,a as b,h as P,d as m,g as n,H as R,j,k as H,l as h,m as N,L as q}from"./chunks/vendor-f435face.js";function C(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&j(a,t)},d(l){l&&m(f)}}}function L(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&j(a,t)},d(l){l&&m(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,u,p,i=r[1].frame&&C(r),o=r[1].stack&&L(r);return{c(){f=v("h1"),t=E(r[0]),a=H(),l=v("pre"),c=E(s),k=H(),i&&i.c(),u=H(),o&&o.c(),p=h()},l(e){f=d(e,"H1",{});var _=b(f);t=P(_,r[0]),_.forEach(m),a=N(e),l=d(e,"PRE",{});var S=b(l);c=P(S,s),S.forEach(m),k=N(e),i&&i.l(e),u=N(e),o&&o.l(e),p=h()},m(e,_){n(e,f,_),R(f,t),n(e,a,_),n(e,l,_),R(l,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=C(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=L(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:q,o:q,d(e){e&&m(f),e&&m(a),e&&m(l),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class G extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{G as default,F as load};
