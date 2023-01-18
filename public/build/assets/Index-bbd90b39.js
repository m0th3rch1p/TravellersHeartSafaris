import{_ as ze}from"./MainLayout-85ffb79f.js";import{o as he,a as m,c as p,e,E as _e,F as Q,A as Z,b as I,w as M,g as K,t as y,d,L as Le,j as ge,G as k,r as v,I as x,J as R,K as T,M as Pe,m as We,p as ue,N as de,O as je,f as me,q as N,u as He,h as W,y as H,i as A}from"./app-662d399e.js";import{_ as Re}from"./_plugin-vue_export-helper-c27b6911.js";const Fe={id:"banner",class:"carousel slide carousel-fade","data-ride":"carousel","data-pause":"false"},qe=e("div",{class:"carousel-inner",role:"listbox"},[e("div",{class:"item",style:{"background-image":"url(/main/img/banner/1.jpg)"}},[e("div",{class:"caption-info"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-sm-12 col-md-8 col-md-offset-2"},[e("div",{class:"caption-info-inner text-center"},[e("h1",{class:"animated fadeInDown"},"Welcome to Traveller's Heart Safaris"),e("p",{class:"animated fadeInUp"},"We are a proficient team with zeal interest in tours and travel at heart. We boast about our good knowledge and experience of all leading destinations at first hand and better understanding of the ground with supportive agents to provide excellent customer services worth your budget. You are guaranteed with confidence and peace of mind during your safari with us on your side for we are there before you go, while you are traveling and upon your return.We are committed to create heavenly experiences with our endless incomparable choices in adventure; The wild bush experience, high altitude adventure, beach safaris, historical and cultural tours. We are the hub of all great adventures."),e("a",{href:"#packages",class:"animated fadeInUp btn btn-primary page-scroll"},"See Packages")])])])])])]),e("div",{class:"item",style:{"background-image":"url(/main/img/banner/2.jpg)"}},[e("div",{class:"caption-info"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-sm-12 col-md-8 col-md-offset-2"},[e("div",{class:"caption-info-inner text-center"},[e("h1",{class:"animated zoomIn"},"Mission"),e("p",{class:"animated zoomIn"},"To inspire people to step out their box, create heavenly experiences for them and better their traveling moments and wellness."),e("a",{href:"#contact-us",class:"animated zoomIn btn btn-primary page-scroll"},"Contact Us")])])])])])]),e("div",{class:"item active",style:{"background-image":"url(/main/img/banner/3.jpg)"}},[e("div",{class:"caption-info"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-sm-12 col-md-8 col-md-offset-2"},[e("div",{class:"caption-info-inner text-center"},[e("h1",{class:"animated fadeInLeft"},"Vision"),e("p",{class:"animated fadeInLeft"},"To provide hassle free travel arrangements in regards to each person’s preference."),e("a",{href:"#hot-deals",class:"animated fadeInLeft btn btn-primary page-scroll"},"Find a tour")])])])])])])],-1),Ge=e("a",{class:"control left",href:"#banner","data-slide":"prev"},[e("i",{class:"fa fa-long-arrow-left"})],-1),Xe=e("a",{class:"right control",href:"#banner","data-slide":"next"},[e("i",{class:"fa fa-long-arrow-right"})],-1),Ye=[qe,Ge,Xe],Je={__name:"Banner",setup(s){return he(()=>{function a(l){var i="webkitAnimationEnd animationend";l.each(function(){var c=$(this),b=c.data("animation");c.addClass(b).one(i,function(){c.removeClass(b)})})}var t=$("#banner"),n=t.find(".item:first").find("[data-animation ^= 'animated']");t.carousel(),a(n),t.carousel("pause"),t.on("slide.bs.carousel",function(l){var i=$(l.relatedTarget).find("[data-animation ^= 'animated']");a(i)})}),(a,t)=>(m(),p("div",Fe,Ye))}},Ke={},Qe={id:"services"},Ze=_e('<div class="container-fluid"><div class="row"><div class="col-xs-12"><div class="section-title text-center"><h1>Our Services</h1></div></div></div><div class="row"><div class="col-xs-6 col-md-4"><div class="service-list text-center wow fadeInUp" style="visibility:visible;animation-name:fadeInUp;"><i class="fa fa-bed"></i><h3>Hotel Booking</h3><p>Accommodation &amp; Conference rooms</p></div></div><div class="col-xs-6 col-md-4"><div class="service-list text-center wow fadeInUp" style="visibility:visible;animation-name:fadeInUp;"><i class="fa fa-ticket"></i><h3>Ticket Booking</h3><p>Both Local and International Tickets</p></div></div><div class="col-xs-6 col-md-4"><div class="service-list text-center wow fadeInUp" style="visibility:visible;animation-name:fadeInUp;"><i class="fa fa-road"></i><h3>Amazing tours</h3><p>FIT travel, Group travel &amp; Family holidays, and Honey moon packages</p></div></div></div></div>',1),et=[Ze];function tt(s,a){return m(),p("section",Qe,et)}const st=Re(Ke,[["render",tt]]),at={id:"packages",class:"inverse"},nt={class:"container-fluid"},it=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("div",{class:"section-title text-center"},[e("h1",null,"Our Packages")])])],-1),ot={class:"row"},lt={class:"package-list wow fadeInUp",style:{visibility:"visible","animation-name":"fadeInUp"}},rt={class:"package-thumb"},ct=["data-src"],dt={class:"duration"},ut=e("br",null,null,-1),mt={class:"package-info"},vt={__name:"Package",props:{packages:Array},setup(s){return(a,t)=>(m(),p("section",at,[e("div",nt,[it,e("div",ot,[(m(!0),p(Q,null,Z(s.packages,n=>(m(),p("div",{class:"col-xs-6 col-sm-6 col-md-3",key:n.slug},[e("div",lt,[I(d(Le),{href:`/package/${n.slug}`},{default:M(()=>[e("div",rt,[e("img",{class:"lazy",src:"/main/img/loader.gif","data-src":`/storage/${n.feature_image}`,alt:""},null,8,ct),e("div",dt,[K(y(n.days)+" days",1),ut,K(y(n.nights)+" nights ",1)])]),e("div",mt,[e("h3",null,y(n.title),1),e("p",null,y(n.description),1)])]),_:2},1032,["href"])])]))),128))])])]))}},ft={id:"hot-deals"},pt=e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("div",{class:"section-title text-center"},[e("h1",null,"Excursions and Getaways")])])])],-1),ht={class:"tour-list"},_t={class:"tour-thumb"},gt=["data-src"],bt={class:"overlay"},yt={class:"ovelay-inner text-center"},xt={__name:"HotelDeal",props:{excursions:Array},setup(s){return(a,t)=>(m(),p("section",ft,[pt,e("ul",ht,[(m(!0),p(Q,null,Z(s.excursions,n=>(m(),p("li",{key:n.slug},[e("div",_t,[e("img",{class:"lazy",src:"/main/img/loader.gif","data-src":`/storage/${n.feature_image}`,alt:""},null,8,gt),e("div",bt,[e("div",yt,[e("h2",null,y(n.title),1),e("p",null,[e("em",null,y(n.description),1)]),I(d(Le),{href:`/package/${n.slug}`,class:"btn btn-primary"},{default:M(()=>[K("More...")]),_:2},1032,["href"])])])])]))),128))])]))}};/**
 * Vue 3 Carousel 0.2.9
 * (c) 2022
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Ce={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},snapAlign:{default:g.snapAlign,validator(s){return["start","end","center","center-even","center-odd"].includes(s)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(s){return["rtl","ltr"].includes(s)}},settings:{default(){return{}},type:Object}};function wt({config:s,slidesCount:a}){const{snapAlign:t,wrapAround:n,itemsToShow:l=1}=s;if(n)return Math.max(a-1,0);let i;switch(t){case"start":i=a-l;break;case"end":i=a-1;break;case"center":case"center-odd":i=a-Math.ceil((l-.5)/2);break;case"center-even":i=a-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function kt({config:s,slidesCount:a}){const{wrapAround:t,snapAlign:n,itemsToShow:l=1}=s;let i=0;if(t||l>a)return i;switch(n){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function ve({val:s,max:a,min:t}){return a<t?s:Math.min(Math.max(s,t),a)}function St({config:s,currentSlide:a,slidesCount:t}){const{snapAlign:n,wrapAround:l,itemsToShow:i=1}=s;let c=a;switch(n){case"center":case"center-odd":c-=(i-1)/2;break;case"center-even":c-=(i-2)/2;break;case"end":c-=i-1;break}return l?c:ve({val:c,max:t-i,min:0})}function $t(s){var a,t,n,l;return s?((a=s[0])===null||a===void 0?void 0:a.children)==="v-if"||((n=(t=s[0])===null||t===void 0?void 0:t.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?s.filter(i=>{var c;return((c=i.type)===null||c===void 0?void 0:c.name)==="CarouselSlide"}):((l=s[0])===null||l===void 0?void 0:l.children)||[]:[]}function fe({val:s,max:a,min:t=0}){return s>a?fe({val:s-(a+1),max:a,min:t}):s<t?fe({val:s+(a+1),max:a,min:t}):s}function At(s,a){let t;return function(...n){const l=this;t||(s.apply(l,n),t=!0,setTimeout(()=>t=!1,a))}}function Tt(s,a){let t;return function(...n){t&&clearTimeout(t),t=setTimeout(()=>{s(...n),t=null},a)}}var It=ge({name:"ARIA",setup(){const s=k("currentSlide",v(0)),a=k("slidesCount",v(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${s.value+1} of ${a.value}`)}}),Oe=ge({name:"Carousel",props:Ce,setup(s,{slots:a,emit:t,expose:n}){var l;const i=v(null),c=v([]),b=v(0),h=v(0);let S=v({}),E=Object.assign({},g);const r=R(Object.assign({},E)),u=v((l=s.modelValue)!==null&&l!==void 0?l:0),j=v(0),F=v(0),B=v(0),U=v(0);let V,ee;T("config",r),T("slidesCount",h),T("currentSlide",u),T("maxSlide",B),T("minSlide",U),T("slideWidth",b);function te(){const o=Object.assign(Object.assign({},s),s.settings);S=v(Object.assign({},o.breakpoints)),E=Object.assign(Object.assign({},o),{settings:void 0,breakpoints:void 0}),be(E)}function q(){const o=Object.keys(S.value).map(f=>Number(f)).sort((f,O)=>+O-+f);let _=Object.assign({},E);o.some(f=>window.matchMedia(`(min-width: ${f}px)`).matches?(_=Object.assign(Object.assign({},_),S.value[f]),!0):!1),be(_)}function be(o){Object.entries(o).forEach(([_,f])=>r[_]=f)}const ye=Tt(()=>{Object.keys(S.value).length&&(q(),z()),G()},16);function G(){if(!i.value)return;const o=i.value.getBoundingClientRect();b.value=o.width/r.itemsToShow}function z(){h.value<=0||(F.value=Math.ceil((h.value-1)/2),B.value=wt({config:r,slidesCount:h.value}),U.value=kt({config:r,slidesCount:h.value}),r.wrapAround||(u.value=ve({val:u.value,max:B.value,min:U.value})))}he(()=>{Object.keys(S.value).length&&q(),Pe(()=>{z(),G(),t("init")}),Se(),window.addEventListener("resize",ye,{passive:!0})}),We(()=>{ee&&clearTimeout(ee),V&&clearInterval(V),window.removeEventListener("resize",ye,{passive:!0})});let w=!1;const X={x:0,y:0},Y={x:0,y:0},C=R({x:0,y:0}),se=v(!1),Ve=()=>{se.value=!0},De=()=>{se.value=!1};function xe(o){["INPUT","TEXTAREA"].includes(o.target.tagName)||(w=o.type==="touchstart",!(!w&&o.button!==0||D.value)&&(w||o.preventDefault(),X.x=w?o.touches[0].clientX:o.clientX,X.y=w?o.touches[0].clientY:o.clientY,document.addEventListener(w?"touchmove":"mousemove",we,!0),document.addEventListener(w?"touchend":"mouseup",ke,!0)))}const we=At(o=>{Y.x=w?o.touches[0].clientX:o.clientX,Y.y=w?o.touches[0].clientY:o.clientY;const _=Y.x-X.x,f=Y.y-X.y;C.y=f,C.x=_},16);function ke(){const o=r.dir==="rtl"?-1:1,_=Math.sign(C.x)*.4,f=Math.round(C.x/b.value+_)*o;if(f&&!w){const O=oe=>{oe.stopPropagation(),window.removeEventListener("click",O,!0)};window.addEventListener("click",O,!0)}L(u.value-f),C.x=0,C.y=0,document.removeEventListener(w?"touchmove":"mousemove",we,!0),document.removeEventListener(w?"touchend":"mouseup",ke,!0)}function Se(){!r.autoplay||r.autoplay<=0||(V=setInterval(()=>{r.pauseAutoplayOnHover&&se.value||J()},r.autoplay))}function $e(){V&&(clearInterval(V),V=null),Se()}const D=v(!1);function L(o){const _=r.wrapAround?o:ve({val:o,max:B.value,min:U.value});u.value===_||D.value||(t("slide-start",{slidingToIndex:o,currentSlideIndex:u.value,prevSlideIndex:j.value,slidesCount:h.value}),D.value=!0,j.value=u.value,u.value=_,ee=setTimeout(()=>{if(r.wrapAround){const f=fe({val:_,max:B.value,min:0});f!==u.value&&(u.value=f,t("loop",{currentSlideIndex:u.value,slidingToIndex:o}))}t("update:modelValue",u.value),t("slide-end",{currentSlideIndex:u.value,prevSlideIndex:j.value,slidesCount:h.value}),D.value=!1,$e()},r.transition))}function J(){L(u.value+r.itemsToScroll)}function ae(){L(u.value-r.itemsToScroll)}const Ae={slideTo:L,next:J,prev:ae};T("nav",Ae),T("isSliding",D);const Te=ue(()=>St({config:r,currentSlide:u.value,slidesCount:h.value}));T("slidesToScroll",Te);const Ue=ue(()=>{const o=r.dir==="rtl"?-1:1,_=Te.value*b.value*o;return{transform:`translateX(${C.x-_}px)`,transition:`${D.value?r.transition:0}ms`,margin:r.wrapAround?`0 -${h.value*b.value}px`:"",width:"100%"}});function Ie(){te(),q(),z(),G(),$e()}Object.keys(Ce).forEach(o=>{["modelValue"].includes(o)||de(()=>s[o],Ie)}),de(()=>s.modelValue,o=>{o!==u.value&&L(Number(o))}),de(h,z),te();const Me={config:r,slidesCount:h,slideWidth:b,next:J,prev:ae,slideTo:L,currentSlide:u,maxSlide:B,minSlide:U,middleSlide:F};n({updateBreakpointsConfigs:q,updateSlidesData:z,updateSlideWidth:G,initDefaultConfigs:te,restartCarousel:Ie,slideTo:L,next:J,prev:ae,nav:Ae,data:Me});const ne=a.default||a.slides,ie=a.addons,Ee=R(Me);return()=>{const o=$t(ne==null?void 0:ne(Ee)),_=(ie==null?void 0:ie(Ee))||[];o.forEach((le,re)=>le.props.index=re);let f=o;if(r.wrapAround){const le=o.map((ce,P)=>je(ce,{index:-o.length+P,isClone:!0,key:`clone-before-${P}`})),re=o.map((ce,P)=>je(ce,{index:o.length+P,isClone:!0,key:`clone-after-${P}`}));f=[...le,...o,...re]}c.value=o,h.value=Math.max(o.length,1);const O=x("ol",{class:"carousel__track",style:Ue.value,onMousedown:r.mouseDrag?me(xe,["capture"]):null,onTouchstart:r.touchDrag?me(xe,["capture"]):null},f),oe=x("div",{class:"carousel__viewport"},O);return x("section",{ref:i,class:{carousel:!0,"carousel--rtl":r.dir==="rtl"},dir:r.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Ve,onMouseleave:De},[oe,_,x(It)])}}});const Mt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},pe=s=>{const a=s.name;if(!a||typeof a!="string")return;const t=Mt[a],n=x("path",{d:t}),l=s.title||a,i=x("title",l);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:l},[i,n])};pe.props={name:String,title:String};const Ne=(s,{slots:a,attrs:t})=>{const{next:n,prev:l}=a||{},i=k("config",R(Object.assign({},g))),c=k("maxSlide",v(1)),b=k("minSlide",v(1)),h=k("currentSlide",v(1)),S=k("nav",{}),{dir:E,wrapAround:r}=i,u=E==="rtl",j=x("button",{type:"button",class:["carousel__prev",!r&&h.value<=b.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":"Navigate to previous slide",onClick:S.prev},(l==null?void 0:l())||x(pe,{name:u?"arrowRight":"arrowLeft"})),F=x("button",{type:"button",class:["carousel__next",!r&&h.value>=c.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":"Navigate to next slide",onClick:S.next},(n==null?void 0:n())||x(pe,{name:u?"arrowLeft":"arrowRight"}));return[j,F]};var Be=ge({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(s,{slots:a}){const t=k("config",R(Object.assign({},g))),n=k("currentSlide",v(0)),l=k("slidesToScroll",v(0)),i=k("slideWidth",v(0)),c=k("isSliding",v(!1)),b=ue(()=>({width:i.value?`${i.value}px`:"100%"})),h=()=>s.index===n.value,S=()=>s.index===n.value-1,E=()=>s.index===n.value+1,r=()=>{const u=Math.floor(l.value),j=Math.ceil(l.value+t.itemsToShow-1);return s.index>=u&&s.index<=j};return()=>{var u;return x("li",{style:b.value,class:{carousel__slide:!0,"carousel_slide--clone":s.isClone,"carousel__slide--visible":r(),"carousel__slide--active":h(),"carousel__slide--prev":S(),"carousel__slide--next":E(),"carousel__slide--sliding":c.value},"aria-hidden":!r()},(u=a.default)===null||u===void 0?void 0:u.call(a))}}});const Et={id:"gallery"},jt=_e('<div class="container"><div class="row"><div class="col-xs-12"><div class="section-title text-center"><h1>Gallery</h1></div></div></div><div class="row"><div class="col-xs-12"><ul id="filter-list"><li class="filter active" data-filter="all"><a style="color:#ffffff;" href="https://www.instagram.com/travellersheart_safaris/" target="_blank">Visit Our Page</a></li></ul></div></div></div>',1),Ct={class:"carousel__item"},Lt=["innerHTML"],Ot={__name:"Gallery",props:{links:Array},setup(s){const a={700:{itemsToShow:2.5,snapAlign:"center"},1024:{itemsToShow:3.5,snapAlign:"start"}};return he(()=>{let t=document.createElement("script");t.setAttribute("src","https://instagram.com/embed.js"),document.head.appendChild(t)}),(t,n)=>(m(),p("section",Et,[jt,I(d(Oe),{autoplay:2e3,"items-to-show":1,"wrap-around":!0,breakpoints:a},{addons:M(()=>[I(d(Ne))]),default:M(()=>[(m(!0),p(Q,null,Z(s.links,l=>(m(),N(d(Be),{key:l},{default:M(()=>[e("div",Ct,[e("div",{class:"thumb",innerHTML:l.link},null,8,Lt)])]),_:2},1024))),128))]),_:1})]))}},Nt={id:"testimonials"},Bt={class:"container"},Vt=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("div",{class:"section-title text-center"},[e("h1",null,"What our clients say...")])])],-1),Dt={class:"carousel__item"},Ut={class:"testimonial-item text-center"},zt=e("i",{class:"fa fa-quote-left"},null,-1),Pt={class:"author-comments"},Wt={class:"designation"},Ht={__name:"Testimonials",props:{testimonials:Array},setup(s){return(a,t)=>(m(),p("section",Nt,[e("div",Bt,[Vt,I(d(Oe),{autoplay:2e3,"items-to-show":1,"wrap-around":!0},{addons:M(()=>[I(d(Ne))]),default:M(()=>[(m(!0),p(Q,null,Z(s.testimonials,n=>(m(),N(d(Be),{key:n.testimonial},{default:M(()=>[e("div",Dt,[e("div",Ut,[zt,e("div",Pt,[e("p",null,y(n.testimonial),1)]),e("div",Wt,y(n.author),1)])])]),_:2},1024))),128))]),_:1})])]))}},Rt={id:"contact-us",class:"parallax","data-stellar-background-ratio":"0.5",style:{"background-image":"url(/main/img/bg/contact-bg.jpg)","background-position":"50% -749.617px"}},Ft={class:"container"},qt=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("div",{class:"section-title text-center"},[e("h1",null,"Get in touch")])])],-1),Gt={class:"row"},Xt=_e('<div class="col-xs-12 col-sm-6 col-md-4"><div class="contact-left"><ul><li><div class="icon"><i class="fa fa-phone"></i></div><div class="contact-info"><p>Mobile: (+254)724 507 189</p></div></li><li><div class="icon"><i class="fa fa-envelope"></i></div><div class="contact-info"><p><a href="mailto:info@@travellersheartsafaris.com">info@travellersheartsafaris.com</a><br><a href="mailto:safaris@travellersheartsafaris.com">safaris@travellersheartsafaris.com</a></p></div></li></ul></div></div>',1),Yt={class:"col-xs-12 col-sm-6 col-md-8"},Jt={class:"contact-right"},Kt=["onSubmit"],Qt={class:"row"},Zt={class:"col-sm-12 col-md-6"},es={class:"form-group"},ts={key:0,class:"invalid-feedback"},ss={class:"col-sm-12 col-md-6"},as={class:"form-group"},ns={key:0,class:"invalid-feedback"},is={class:"form-group"},os={key:0,class:"invalid-feedback"},ls={class:"form-group"},rs={key:0,class:"invalid-feedback"},cs={class:"form-group"},ds={key:0,class:"invalid-feedback"},us=e("input",{type:"submit",id:"submitBtn",class:"btn btn-primary",name:"submit",value:"Submit"},null,-1),ms={key:0,class:"alert alert-success alert-dismissible fade show",role:"alert"},vs=e("strong",null,"Message Sent Succefully!",-1),fs=e("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")],-1),ps={__name:"Contact",setup(s){const a=v(!1),t=He({first_name:"",last_name:"",email:"",subject:"",message:""}),n=()=>{if(t.clearErrors(),(!t.first_name||t.first_name.trim()=="")&&t.setError("first_name","First name is required"),(!t.last_name||t.last_name.trim()=="")&&t.setError("last_name","Last name is required"),(!t.email||t.email.trim()=="")&&t.setError("email","Email is required"),(!t.subject||t.subject.trim()=="")&&t.setError("subject","Subject is required"),(!t.message||t.message.trim()=="")&&t.setError("message","Message is required"),t.errors&&Object.keys(t.errors).length)return;const l=document.getElementById("submitBtn");l.value="Submitting",l.setAttribute("disabled",!0),t.post("/contact",{onSuccess:()=>{t.reset(),a.value=!0},onFinish:()=>{l.value="Submit",l.removeAttribute("disabled")}})};return(l,i)=>(m(),p("section",Rt,[e("div",Ft,[qt,e("div",Gt,[Xt,e("div",Yt,[e("div",Jt,[e("form",{onSubmit:me(n,["prevent"])},[e("div",Qt,[e("div",Zt,[e("div",es,[W(e("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=c=>d(t).first_name=c),name:"fname",class:"form-control",placeholder:"First Name"},null,512),[[H,d(t).first_name]]),d(t).errors.first_name?(m(),p("div",ts,y(d(t).errors.first_name),1)):A("",!0)])]),e("div",ss,[e("div",as,[W(e("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=c=>d(t).last_name=c),name:"lname",class:"form-control",placeholder:"Last Name"},null,512),[[H,d(t).last_name]]),d(t).errors.last_name?(m(),p("div",ns,y(d(t).errors.last_name),1)):A("",!0)])])]),e("div",is,[W(e("input",{type:"text","onUpdate:modelValue":i[2]||(i[2]=c=>d(t).email=c),name:"email",class:"form-control",placeholder:"Email Address"},null,512),[[H,d(t).email]]),d(t).errors.email?(m(),p("div",os,y(d(t).errors.email),1)):A("",!0)]),e("div",ls,[W(e("input",{type:"text","onUpdate:modelValue":i[3]||(i[3]=c=>d(t).subject=c),name:"subject",class:"form-control",placeholder:"Subject"},null,512),[[H,d(t).subject]]),d(t).errors.subject?(m(),p("div",rs,y(d(t).errors.subject),1)):A("",!0)]),e("div",cs,[W(e("textarea",{class:"form-control",rows:"6",cols:"20",placeholder:"Write Something","onUpdate:modelValue":i[4]||(i[4]=c=>d(t).message=c)},null,512),[[H,d(t).message]]),d(t).errors.message?(m(),p("div",ds,y(d(t).errors.message),1)):A("",!0)]),us,a.value?(m(),p("div",ms,[vs,K(" You will receive a reply from our support staff as soon as possible. "),fs])):A("",!0)],40,Kt)])])])])]))}};const bs={__name:"Index",props:{packages:Array,excursions:Array,links:Array,testimonials:Array},setup(s){return(a,t)=>(m(),N(ze,null,{default:M(()=>[I(Je),I(st),s.packages.length?(m(),N(vt,{key:0,packages:s.packages},null,8,["packages"])):A("",!0),s.excursions.length?(m(),N(xt,{key:1,excursions:s.excursions},null,8,["excursions"])):A("",!0),s.links.length?(m(),N(Ot,{key:2,links:s.links},null,8,["links"])):A("",!0),s.testimonials.length?(m(),N(Ht,{key:3,testimonials:s.testimonials},null,8,["testimonials"])):A("",!0),I(ps)]),_:1}))}};export{bs as default};