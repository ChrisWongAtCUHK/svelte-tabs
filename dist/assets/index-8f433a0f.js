(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();function $(){}function ve(e){return e()}function ue(){return Object.create(null)}function A(e){e.forEach(ve)}function te(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function qe(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function $e(e){return Object.keys(e).length===0}function le(e){return e??""}function N(e,t){e.appendChild(t)}function d(e,t,i){e.insertBefore(t,i||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function h(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function q(){return E(" ")}function be(){return E("")}function X(e,t,i,s){return e.addEventListener(t,i,s),()=>e.removeEventListener(t,i,s)}function g(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function ye(e){return Array.from(e.childNodes)}function ge(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t){return new e(t)}let ie;function B(e){ie=e}const k=[],ae=[];let T=[];const ce=[],xe=Promise.resolve();let Y=!1;function we(){Y||(Y=!0,xe.then(he))}function Z(e){T.push(e)}const W=new Set;let C=0;function he(){if(C!==0)return;const e=ie;do{try{for(;C<k.length;){const t=k[C];C++,B(t),Le(t.$$)}}catch(t){throw k.length=0,C=0,t}for(B(null),k.length=0,C=0;ae.length;)ae.pop()();for(let t=0;t<T.length;t+=1){const i=T[t];W.has(i)||(W.add(i),i())}T.length=0}while(k.length);for(;ce.length;)ce.pop()();Y=!1,W.clear(),B(e)}function Le(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function Ce(e){const t=[],i=[];T.forEach(s=>e.indexOf(s)===-1?t.push(s):i.push(s)),i.forEach(s=>s()),T=t}const U=new Set;let w;function se(){w={r:0,c:[],p:w}}function ne(){w.r||A(w.c),w=w.p}function y(e,t){e&&e.i&&(U.delete(e),e.i(t))}function L(e,t,i,s){if(e&&e.o){if(U.has(e))return;U.add(e),w.c.push(()=>{U.delete(e),s&&(i&&e.d(1),s())}),e.o(t)}else s&&s()}function ee(e){e&&e.c()}function D(e,t,i,s){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,i),s||Z(()=>{const r=e.$$.on_mount.map(ve).filter(te);e.$$.on_destroy?e.$$.on_destroy.push(...r):A(r),e.$$.on_mount=[]}),o.forEach(Z)}function F(e,t){const i=e.$$;i.fragment!==null&&(Ce(i.after_update),A(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(k.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(e,t,i,s,n,o,r,m=[-1]){const c=ie;B(e);const f=e.$$={fragment:null,ctx:[],props:o,update:$,not_equal:n,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ue(),dirty:m,skip_bound:!1,root:t.target||c.$$.root};r&&r(f.root);let l=!1;if(f.ctx=i?i(e,t.props||{},(_,u,...b)=>{const x=b.length?b[0]:u;return f.ctx&&n(f.ctx[_],f.ctx[_]=x)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](x),l&&ke(e,_)),u}):[],f.update(),l=!0,A(f.before_update),f.fragment=s?s(f.ctx):!1,t.target){if(t.hydrate){const _=ye(t.target);f.fragment&&f.fragment.l(_),_.forEach(p)}else f.fragment&&f.fragment.c();t.intro&&y(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),he()}B(c)}class Q{$destroy(){F(this,1),this.$destroy=$}$on(t,i){if(!te(i))return $;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(i),()=>{const n=s.indexOf(i);n!==-1&&s.splice(n,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ne(e){let t,i,s,n,o,r,m,c,f,l,_,u,b,x,K,O,z,I,G,j,J,V,R,M;return{c(){t=h("h2"),t.textContent="Now we can have expanded content like this",i=q(),s=h("p"),s.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat recusandae est! Nesciunt consectetur, fuga voluptatem accusantium iste molestias aliquid!",n=q(),o=h("p"),o.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti natus temporibus eius quam. Id ullam quaerat itaque dicta rem, molestiae adipisci corrupti blanditiis sunt eveniet. Vero illo labore eligendi? Nobis molestiae facere maxime repudiandae nemo veritatis quae earum velit.",r=q(),m=h("img"),f=q(),l=h("p"),l.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos praesentium ut cupiditate earum error quidem aperiam quae, voluptates cumque. Incidunt, mollitia exercitationem harum tempora possimus sed impedit animi accusantium explicabo dolorum voluptatibus vero autem fugiat ratione dolore magni? Cum rerum quod doloribus culpa impedit quo quos quidem nostrum, libero aliquam nulla laudantium dolor possimus quaerat eum autem nihil sapiente magnam sit. Autem, sunt. Ipsa at, sint labore ipsam omnis, eligendi delectus numquam laborum hic est, deserunt minima repudiandae quaerat aut adipisci exercitationem perferendis animi. Quidem harum incidunt porro fugiat pariatur a placeat, architecto voluptatem, quos corporis voluptatum deserunt quibusdam animi sequi est labore magnam? Ad delectus debitis impedit inventore hic deleniti, temporibus facilis, expedita obcaecati adipisci eius ipsam earum?",_=q(),u=h("p"),u.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quaerat. Nostrum officia aspernatur nemo iure accusantium consequuntur cupiditate esse atque blanditiis fuga perferendis modi explicabo voluptatum vitae unde, velit magni a molestiae magnam neque, distinctio, hic praesentium dolores optio. Beatae?",b=q(),x=h("blockquote"),x.textContent="Some inspiring quotes are better than others, but this one is the best",K=q(),O=h("p"),O.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum facere beatae commodi magnam molestiae non ad cum, sequi distinctio explicabo quaerat temporibus error ex esse incidunt doloribus ducimus earum excepturi et cupiditate corporis laudantium deleniti! Error libero natus incidunt quam recusandae amet non fugit tenetur, temporibus quis odit blanditiis nulla voluptatum voluptate rerum corporis pariatur eius. Numquam tenetur quam autem aspernatur officiis cupiditate odio rerum repellat alias nesciunt. Quae saepe corrupti est, vero ipsa odio nesciunt rerum ad ex.",z=q(),I=h("div"),I.innerHTML=`<div><p class="svelte-1l9e1gp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum dolore vel necessitatibus nulla sit, molestias quia nesciunt delectus maiores eum culpa porro, ducimus deserunt natus facere mollitia voluptatibus! Voluptatibus.</p> 
    <br/> 
    <p class="svelte-1l9e1gp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nisi laboriosam error fuga porro quisquam voluptatum enim similique provident nam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum illo amet temporibus praesentium nemo harum, earum autem veritatis qui!</p></div> 
  <div><img src="https://i.picsum.photos/id/237/320/320.jpg" alt="doggo" class="svelte-1l9e1gp"/></div>`,G=q(),j=h("div"),j.innerHTML=`<div><img src="https://i.picsum.photos/id/169/320/320.jpg" alt="doggo" class="svelte-1l9e1gp"/></div> 
  <div><p class="svelte-1l9e1gp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum dolore vel necessitatibus nulla sit, molestias quia nesciunt delectus maiores eum culpa porro, ducimus deserunt natus facere mollitia voluptatibus! Voluptatibus.</p> 
    <br/> 
    <p class="svelte-1l9e1gp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nisi laboriosam error fuga porro quisquam voluptatum enim similique provident nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id, rem libero consequuntur autem delectus cum ipsam ipsum eos eveniet.</p></div>`,J=q(),V=h("p"),V.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos praesentium ut cupiditate earum error quidem aperiam quae, voluptates cumque. Incidunt, mollitia exercitationem harum tempora possimus sed impedit animi accusantium explicabo dolorum voluptatibus vero autem fugiat ratione dolore magni? Cum rerum quod doloribus culpa impedit quo quos quidem nostrum, libero aliquam nulla laudantium dolor possimus quaerat eum autem nihil sapiente magnam sit. Autem, sunt. Ipsa at, sint labore ipsam omnis, eligendi delectus numquam laborum hic est, deserunt minima repudiandae quaerat aut adipisci exercitationem perferendis animi. Quidem harum incidunt porro fugiat pariatur a placeat, architecto voluptatem, quos corporis voluptatum deserunt quibusdam animi sequi est labore magnam? Ad delectus debitis impedit inventore hic deleniti, temporibus facilis, expedita obcaecati adipisci eius ipsam earum?",R=q(),M=h("p"),M.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quaerat. Nostrum officia aspernatur nemo iure accusantium consequuntur cupiditate esse atque blanditiis fuga perferendis modi explicabo voluptatum vitae unde, velit magni a molestiae magnam neque, distinctio, hic praesentium dolores optio. Beatae?",g(s,"class","svelte-1l9e1gp"),g(o,"class","svelte-1l9e1gp"),qe(m.src,c="https://i.picsum.photos/id/1062/680/400.jpg")||g(m,"src",c),g(m,"alt","puppy in sheet"),g(m,"class","svelte-1l9e1gp"),g(l,"class","svelte-1l9e1gp"),g(u,"class","svelte-1l9e1gp"),g(x,"class","svelte-1l9e1gp"),g(O,"class","svelte-1l9e1gp"),g(I,"class","split svelte-1l9e1gp"),g(j,"class","split svelte-1l9e1gp"),g(V,"class","svelte-1l9e1gp"),g(M,"class","svelte-1l9e1gp")},m(a,v){d(a,t,v),d(a,i,v),d(a,s,v),d(a,n,v),d(a,o,v),d(a,r,v),d(a,m,v),d(a,f,v),d(a,l,v),d(a,_,v),d(a,u,v),d(a,b,v),d(a,x,v),d(a,K,v),d(a,O,v),d(a,z,v),d(a,I,v),d(a,G,v),d(a,j,v),d(a,J,v),d(a,V,v),d(a,R,v),d(a,M,v)},p:$,i:$,o:$,d(a){a&&p(t),a&&p(i),a&&p(s),a&&p(n),a&&p(o),a&&p(r),a&&p(m),a&&p(f),a&&p(l),a&&p(_),a&&p(u),a&&p(b),a&&p(x),a&&p(K),a&&p(O),a&&p(z),a&&p(I),a&&p(G),a&&p(j),a&&p(J),a&&p(V),a&&p(R),a&&p(M)}}}class Te extends Q{constructor(t){super(),P(this,t,null,Ne,H,{})}}function Ee(e){let t,i,s,n,o,r,m,c,f,l,_;return{c(){t=h("h2"),t.textContent="And we can have interactive content like this",i=q(),s=h("p"),n=E("The count is: "),o=E(e[0]),r=q(),m=h("button"),m.textContent="Increment",c=q(),f=h("button"),f.textContent="Decrement",g(m,"class","svelte-s3xnt0"),g(f,"class","svelte-s3xnt0")},m(u,b){d(u,t,b),d(u,i,b),d(u,s,b),N(s,n),N(s,o),d(u,r,b),d(u,m,b),d(u,c,b),d(u,f,b),l||(_=[X(m,"click",e[1]),X(f,"click",e[2])],l=!0)},p(u,[b]){b&1&&ge(o,u[0])},i:$,o:$,d(u){u&&p(t),u&&p(i),u&&p(s),u&&p(r),u&&p(m),u&&p(c),u&&p(f),l=!1,A(_)}}}function Ae(e,t,i){let s=1;return[s,()=>i(0,s+=1),()=>i(0,s-=1)]}class Oe extends Q{constructor(t){super(),P(this,t,Ae,Ee,H,{})}}function Ie(e){let t;return{c(){t=E("Or just content")},m(i,s){d(i,t,s)},p:$,i:$,o:$,d(i){i&&p(t)}}}class je extends Q{constructor(t){super(),P(this,t,null,Ie,H,{})}}function me(e,t,i){const s=e.slice();return s[3]=t[i],s}function fe(e,t,i){const s=e.slice();return s[3]=t[i],s}function pe(e){let t,i,s=e[3].label+"",n,o,r,m,c;return{c(){t=h("li"),i=h("span"),n=E(s),o=q(),g(i,"class","svelte-1tc2w0"),g(t,"class",r=le(e[0]===e[3].value?"active":"")+" svelte-1tc2w0")},m(f,l){d(f,t,l),N(t,i),N(i,n),N(t,o),m||(c=X(i,"click",function(){te(e[2](e[3].value))&&e[2](e[3].value).apply(this,arguments)}),m=!0)},p(f,l){e=f,l&2&&s!==(s=e[3].label+"")&&ge(n,s),l&3&&r!==(r=le(e[0]===e[3].value?"active":"")+" svelte-1tc2w0")&&g(t,"class",r)},d(f){f&&p(t),m=!1,c()}}}function de(e){let t,i,s,n;var o=e[3].component;function r(m){return{}}return o&&(i=re(o,r())),{c(){t=h("div"),i&&ee(i.$$.fragment),s=q(),g(t,"class","box svelte-1tc2w0")},m(m,c){d(m,t,c),i&&D(i,t,null),N(t,s),n=!0},p(m,c){if(c&2&&o!==(o=m[3].component)){if(i){se();const f=i;L(f.$$.fragment,1,0,()=>{F(f,1)}),ne()}o?(i=re(o,r()),ee(i.$$.fragment),y(i.$$.fragment,1),D(i,t,s)):i=null}},i(m){n||(i&&y(i.$$.fragment,m),n=!0)},o(m){i&&L(i.$$.fragment,m),n=!1},d(m){m&&p(t),i&&F(i)}}}function _e(e){let t,i,s=e[0]==e[3].value&&de(e);return{c(){s&&s.c(),t=be()},m(n,o){s&&s.m(n,o),d(n,t,o),i=!0},p(n,o){n[0]==n[3].value?s?(s.p(n,o),o&3&&y(s,1)):(s=de(n),s.c(),y(s,1),s.m(t.parentNode,t)):s&&(se(),L(s,1,1,()=>{s=null}),ne())},i(n){i||(y(s),i=!0)},o(n){L(s),i=!1},d(n){s&&s.d(n),n&&p(t)}}}function Ve(e){let t,i,s,n,o=e[1],r=[];for(let l=0;l<o.length;l+=1)r[l]=pe(fe(e,o,l));let m=e[1],c=[];for(let l=0;l<m.length;l+=1)c[l]=_e(me(e,m,l));const f=l=>L(c[l],1,1,()=>{c[l]=null});return{c(){t=h("ul");for(let l=0;l<r.length;l+=1)r[l].c();i=q();for(let l=0;l<c.length;l+=1)c[l].c();s=be(),g(t,"class","svelte-1tc2w0")},m(l,_){d(l,t,_);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);d(l,i,_);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(l,_);d(l,s,_),n=!0},p(l,[_]){if(_&7){o=l[1];let u;for(u=0;u<o.length;u+=1){const b=fe(l,o,u);r[u]?r[u].p(b,_):(r[u]=pe(b),r[u].c(),r[u].m(t,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}if(_&3){m=l[1];let u;for(u=0;u<m.length;u+=1){const b=me(l,m,u);c[u]?(c[u].p(b,_),y(c[u],1)):(c[u]=_e(b),c[u].c(),y(c[u],1),c[u].m(s.parentNode,s))}for(se(),u=m.length;u<c.length;u+=1)f(u);ne()}},i(l){if(!n){for(let _=0;_<m.length;_+=1)y(c[_]);n=!0}},o(l){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)L(c[_]);n=!1},d(l){l&&p(t),oe(r,l),l&&p(i),oe(c,l),l&&p(s)}}}function Me(e,t,i){let{items:s=[]}=t,{activeTabValue:n=1}=t;const o=r=>()=>i(0,n=r);return e.$$set=r=>{"items"in r&&i(1,s=r.items),"activeTabValue"in r&&i(0,n=r.activeTabValue)},[n,s,o]}class Be extends Q{constructor(t){super(),P(this,t,Me,Ve,H,{items:1,activeTabValue:0})}}function He(e){let t,i;return t=new Be({props:{items:e[0]}}),{c(){ee(t.$$.fragment)},m(s,n){D(t,s,n),i=!0},p:$,i(s){i||(y(t.$$.fragment,s),i=!0)},o(s){L(t.$$.fragment,s),i=!1},d(s){F(t,s)}}}function Pe(e){return[[{label:"Content",value:1,component:Te},{label:"Interactions",value:2,component:Oe},{label:"Tab 3",value:3,component:je}]]}class Qe extends Q{constructor(t){super(),P(this,t,Pe,He,H,{})}}new Qe({target:document.getElementById("app")});
