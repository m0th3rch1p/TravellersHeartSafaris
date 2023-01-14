import{$ as r,D as x,e as S}from"./jquery.dataTables-acfc2288.js";import{_ as P}from"./AuthenticatedLayout-1bce5d82.js";import{o as R,a as O,c as $,b as N,d as I,w as T,F as E,H as B,e as _,L as H,g as L}from"./app-abaf6a0c.js";import"./ApplicationLogo-833537ef.js";import"./_plugin-vue_export-helper-c27b6911.js";/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */r.extend(!0,x.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"});r.extend(x.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});x.ext.renderer.pageButton.bootstrap=function(e,t,i,n,a,d){var s=new x.Api(e),o=e.oClasses,c=e.oLanguage.oPaginate,h=e.oLanguage.oAria.paginate||{},u,l,f=function(b,y){var C,z,D,m,W=function(A){A.preventDefault(),!r(A.currentTarget).hasClass("disabled")&&s.page()!=A.data.action&&s.page(A.data.action).draw("page")};for(C=0,z=y.length;C<z;C++)if(m=y[C],Array.isArray(m))f(b,m);else{switch(u="",l="",m){case"ellipsis":u="&#x2026;",l="disabled";break;case"first":u=c.sFirst,l=m+(a>0?"":" disabled");break;case"previous":u=c.sPrevious,l=m+(a>0?"":" disabled");break;case"next":u=c.sNext,l=m+(a<d-1?"":" disabled");break;case"last":u=c.sLast,l=m+(a<d-1?"":" disabled");break;default:u=m+1,l=a===m?"active":"";break}u&&(D=r("<li>",{class:o.sPageButton+" "+l,id:i===0&&typeof m=="string"?e.sTableId+"_"+m:null}).append(r("<a>",{href:"#","aria-controls":e.sTableId,"aria-label":h[m],"data-dt-idx":m,tabindex:e.iTabIndex,class:"page-link"}).html(u)).appendTo(b),e.oApi._fnBindAction(D,{action:m},W))}},v=r(t),w;try{w=v.find(document.activeElement).data("dt-idx")}catch{}var p=v.children("ul.pagination");p.length?p.empty():p=v.html("<ul/>").children("ul").addClass("pagination"),f(p,n),w!==void 0&&v.find("[data-dt-idx="+w+"]").trigger("focus")};/*! Responsive 2.4.0
 * 2014-2022 SpryMedia Ltd - datatables.net/license
 */var g=function(e,t){if(!x.versionCheck||!x.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={childNodeStore:{},columns:[],current:[],dt:new x.Api(e)},!this.s.dt.settings()[0].responsive&&(t&&typeof t.details=="string"?t.details={type:t.details}:t&&t.details===!1?t.details={type:!1}:t&&t.details===!0&&(t.details={type:"inline"}),this.c=r.extend(!0,{},g.defaults,x.defaults.responsive,t),e.responsive=this,this._constructor())};r.extend(g.prototype,{_constructor:function(){var e=this,t=this.s.dt,i=t.settings()[0],n=r(window).innerWidth();t.settings()[0]._responsive=this,r(window).on("resize.dtr orientationchange.dtr",x.util.throttle(function(){var d=r(window).innerWidth();d!==n&&(e._resize(),n=d)})),i.oApi._fnCallbackReg(i,"aoRowCreatedCallback",function(d,s,o){r.inArray(!1,e.s.current)!==-1&&r(">td, >th",d).each(function(c){var h=t.column.index("toData",c);e.s.current[h]===!1&&r(this).css("display","none")})}),t.on("destroy.dtr",function(){t.off(".dtr"),r(t.table().body()).off(".dtr"),r(window).off("resize.dtr orientationchange.dtr"),t.cells(".dtr-control").nodes().to$().removeClass("dtr-control"),r.each(e.s.current,function(d,s){s===!1&&e._setColumnVis(d,!0)})}),this.c.breakpoints.sort(function(d,s){return d.width<s.width?1:d.width>s.width?-1:0}),this._classLogic(),this._resizeAuto();var a=this.c.details;a.type!==!1&&(e._detailsInit(),t.on("column-visibility.dtr",function(){e._timer&&clearTimeout(e._timer),e._timer=setTimeout(function(){e._timer=null,e._classLogic(),e._resizeAuto(),e._resize(!0),e._redrawChildren()},100)}),t.on("draw.dtr",function(){e._redrawChildren()}),r(t.table().node()).addClass("dtr-"+a.type)),t.on("column-reorder.dtr",function(d,s,o){e._classLogic(),e._resizeAuto(),e._resize(!0)}),t.on("column-sizing.dtr",function(){e._resizeAuto(),e._resize()}),t.on("column-calc.dt",function(d,s){for(var o=e.s.current,c=0;c<o.length;c++){var h=s.visible.indexOf(c);o[c]===!1&&h>=0&&s.visible.splice(h,1)}}),t.on("preXhr.dtr",function(){var d=[];t.rows().every(function(){this.child.isShown()&&d.push(this.id(!0))}),t.one("draw.dtr",function(){e._resizeAuto(),e._resize(),t.rows(d).every(function(){e._detailsDisplay(this,!1)})})}),t.on("draw.dtr",function(){e._controlClass()}).on("init.dtr",function(d,s,o){d.namespace==="dt"&&(e._resizeAuto(),e._resize(),r.inArray(!1,e.s.current)&&t.columns.adjust())}),this._resize()},_childNodes:function(e,t,i){var n=t+"-"+i;if(this.s.childNodeStore[n])return this.s.childNodeStore[n];for(var a=[],d=e.cell(t,i).node().childNodes,s=0,o=d.length;s<o;s++)a.push(d[s]);return this.s.childNodeStore[n]=a,a},_childNodesRestore:function(e,t,i){var n=t+"-"+i;if(this.s.childNodeStore[n]){for(var a=e.cell(t,i).node(),d=this.s.childNodeStore[n],s=d[0].parentNode,o=s.childNodes,c=[],h=0,u=o.length;h<u;h++)c.push(o[h]);for(var l=0,f=c.length;l<f;l++)a.appendChild(c[l]);this.s.childNodeStore[n]=void 0}},_columnsVisiblity:function(e){var t=this.s.dt,i=this.s.columns,n,a,d=i.map(function(p,b){return{columnIdx:b,priority:p.priority}}).sort(function(p,b){return p.priority!==b.priority?p.priority-b.priority:p.columnIdx-b.columnIdx}),s=r.map(i,function(p,b){return t.column(b).visible()===!1?"not-visible":p.auto&&p.minWidth===null?!1:p.auto===!0?"-":r.inArray(e,p.includeIn)!==-1}),o=0;for(n=0,a=s.length;n<a;n++)s[n]===!0&&(o+=i[n].minWidth);var c=t.settings()[0].oScroll,h=c.sY||c.sX?c.iBarWidth:0,u=t.table().container().offsetWidth-h,l=u-o;for(n=0,a=s.length;n<a;n++)i[n].control&&(l-=i[n].minWidth);var f=!1;for(n=0,a=d.length;n<a;n++){var v=d[n].columnIdx;s[v]==="-"&&!i[v].control&&i[v].minWidth&&(f||l-i[v].minWidth<0?(f=!0,s[v]=!1):s[v]=!0,l-=i[v].minWidth)}var w=!1;for(n=0,a=i.length;n<a;n++)if(!i[n].control&&!i[n].never&&s[n]===!1){w=!0;break}for(n=0,a=i.length;n<a;n++)i[n].control&&(s[n]=w),s[n]==="not-visible"&&(s[n]=!1);return r.inArray(!0,s)===-1&&(s[0]=!0),s},_classLogic:function(){var e=this,t=this.c.breakpoints,i=this.s.dt,n=i.columns().eq(0).map(function(s){var o=this.column(s),c=o.header().className,h=i.settings()[0].aoColumns[s].responsivePriority,u=o.header().getAttribute("data-priority");return h===void 0&&(h=u==null?1e4:u*1),{className:c,includeIn:[],auto:!1,control:!1,never:!!c.match(/\b(dtr\-)?never\b/),priority:h}}),a=function(s,o){var c=n[s].includeIn;r.inArray(o,c)===-1&&c.push(o)},d=function(s,o,c,h){var u,l,f;if(!c)n[s].includeIn.push(o);else if(c==="max-")for(u=e._find(o).width,l=0,f=t.length;l<f;l++)t[l].width<=u&&a(s,t[l].name);else if(c==="min-")for(u=e._find(o).width,l=0,f=t.length;l<f;l++)t[l].width>=u&&a(s,t[l].name);else if(c==="not-")for(l=0,f=t.length;l<f;l++)t[l].name.indexOf(h)===-1&&a(s,t[l].name)};n.each(function(s,o){for(var c=s.className.split(" "),h=!1,u=0,l=c.length;u<l;u++){var f=c[u].trim();if(f==="all"||f==="dtr-all"){h=!0,s.includeIn=r.map(t,function(v){return v.name});return}else if(f==="none"||f==="dtr-none"||s.never){h=!0;return}else if(f==="control"||f==="dtr-control"){h=!0,s.control=!0;return}r.each(t,function(v,w){var p=w.name.split("-"),b=new RegExp("(min\\-|max\\-|not\\-)?("+p[0]+")(\\-[_a-zA-Z0-9])?"),y=f.match(b);y&&(h=!0,y[2]===p[0]&&y[3]==="-"+p[1]?d(o,w.name,y[1],y[2]+y[3]):y[2]===p[0]&&!y[3]&&d(o,w.name,y[1],y[2]))})}h||(s.auto=!0)}),this.s.columns=n},_controlClass:function(){if(this.c.details.type==="inline"){var e=this.s.dt,t=this.s.current,i=r.inArray(!0,t);e.cells(null,function(n){return n!==i},{page:"current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control"),e.cells(null,i,{page:"current"}).nodes().to$().addClass("dtr-control")}},_detailsDisplay:function(e,t){var i=this,n=this.s.dt,a=this.c.details;if(a&&a.type!==!1){var d=typeof a.renderer=="string"?g.renderer[a.renderer]():a.renderer,s=a.display(e,t,function(){return d.call(i,n,e[0],i._detailsObj(e[0]))});(s===!0||s===!1)&&r(n.table().node()).triggerHandler("responsive-display.dt",[n,e,s,t])}},_detailsInit:function(){var e=this,t=this.s.dt,i=this.c.details;i.type==="inline"&&(i.target="td.dtr-control, th.dtr-control"),t.on("draw.dtr",function(){e._tabIndexes()}),e._tabIndexes(),r(t.table().body()).on("keyup.dtr","td, th",function(d){d.keyCode===13&&r(this).data("dtr-keyboard")&&r(this).click()});var n=i.target,a=typeof n=="string"?n:"td, th";(n!==void 0||n!==null)&&r(t.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",a,function(d){if(r(t.table().node()).hasClass("collapsed")&&r.inArray(r(this).closest("tr").get(0),t.rows().nodes().toArray())!==-1){if(typeof n=="number"){var s=n<0?t.columns().eq(0).length+n:n;if(t.cell(this).index().column!==s)return}var o=t.row(r(this).closest("tr"));d.type==="click"?e._detailsDisplay(o,!1):d.type==="mousedown"?r(this).css("outline","none"):d.type==="mouseup"&&r(this).trigger("blur").css("outline","")}})},_detailsObj:function(e){var t=this,i=this.s.dt;return r.map(this.s.columns,function(n,a){if(!(n.never||n.control)){var d=i.settings()[0].aoColumns[a];return{className:d.sClass,columnIndex:a,data:i.cell(e,a).render(t.c.orthogonal),hidden:i.column(a).visible()&&!t.s.current[a],rowIndex:e,title:d.sTitle!==null?d.sTitle:r(i.column(a).header()).text()}}})},_find:function(e){for(var t=this.c.breakpoints,i=0,n=t.length;i<n;i++)if(t[i].name===e)return t[i]},_redrawChildren:function(){var e=this,t=this.s.dt;t.rows({page:"current"}).iterator("row",function(i,n){t.row(n),e._detailsDisplay(t.row(n),!0)})},_resize:function(e){var t=this,i=this.s.dt,n=r(window).innerWidth(),a=this.c.breakpoints,d=a[0].name,s=this.s.columns,o,c,h=this.s.current.slice();for(o=a.length-1;o>=0;o--)if(n<=a[o].width){d=a[o].name;break}var u=this._columnsVisiblity(d);this.s.current=u;var l=!1;for(o=0,c=s.length;o<c;o++)if(u[o]===!1&&!s[o].never&&!s[o].control&&i.column(o).visible()){l=!0;break}r(i.table().node()).toggleClass("collapsed",l);var f=!1,v=0;i.columns().eq(0).each(function(w,p){u[p]===!0&&v++,(e||u[p]!==h[p])&&(f=!0,t._setColumnVis(w,u[p]))}),this._redrawChildren(),f&&(r(i.table().node()).trigger("responsive-resize.dt",[i,this.s.current]),i.page.info().recordsDisplay===0&&r("td",i.table().body()).eq(0).attr("colspan",v)),t._controlClass()},_resizeAuto:function(){var e=this.s.dt,t=this.s.columns,i=this;if(this.c.auto&&r.inArray(!0,r.map(t,function(l){return l.auto}))!==-1){r.isEmptyObject(this.s.childNodeStore)||r.each(this.s.childNodeStore,function(l){var f=l.split("-");i._childNodesRestore(e,f[0]*1,f[1]*1)}),e.table().node().offsetWidth,e.columns;var n=e.table().node().cloneNode(!1),a=r(e.table().header().cloneNode(!1)).appendTo(n),d=r(e.table().body()).clone(!1,!1).empty().appendTo(n);n.style.width="auto";var s=e.columns().header().filter(function(l){return e.column(l).visible()}).to$().clone(!1).css("display","table-cell").css("width","auto").css("min-width",0);r(d).append(r(e.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");var o=e.table().footer();if(o){var c=r(o.cloneNode(!1)).appendTo(n),h=e.columns().footer().filter(function(l){return e.column(l).visible()}).to$().clone(!1).css("display","table-cell");r("<tr/>").append(h).appendTo(c)}r("<tr/>").append(s).appendTo(a),this.c.details.type==="inline"&&r(n).addClass("dtr-inline collapsed"),r(n).find("[name]").removeAttr("name"),r(n).css("position","relative");var u=r("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(n);u.insertBefore(e.table().node()),s.each(function(l){var f=e.column.index("fromVisible",l);t[f].minWidth=this.offsetWidth||0}),u.remove()}},_responsiveOnlyHidden:function(){var e=this.s.dt;return r.map(this.s.current,function(t,i){return e.column(i).visible()===!1?!0:t})},_setColumnVis:function(e,t){var i=this,n=this.s.dt,a=t?"":"none";r(n.column(e).header()).css("display",a).toggleClass("dtr-hidden",!t),r(n.column(e).footer()).css("display",a).toggleClass("dtr-hidden",!t),n.column(e).nodes().to$().css("display",a).toggleClass("dtr-hidden",!t),r.isEmptyObject(this.s.childNodeStore)||n.cells(null,e).indexes().each(function(d){i._childNodesRestore(n,d.row,d.column)})},_tabIndexes:function(){var e=this.s.dt,t=e.cells({page:"current"}).nodes().to$(),i=e.settings()[0],n=this.c.details.target;t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),typeof n=="number"?e.cells(null,n,{page:"current"}).nodes().to$().attr("tabIndex",i.iTabIndex).data("dtr-keyboard",1):(n==="td:first-child, th:first-child"&&(n=">td:first-child, >th:first-child"),r(n,e.rows({page:"current"}).nodes()).attr("tabIndex",i.iTabIndex).data("dtr-keyboard",1))}});g.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];g.display={childRow:function(e,t,i){if(t){if(r(e.node()).hasClass("parent"))return e.child(i(),"child").show(),!0}else return e.child.isShown()?(e.child(!1),r(e.node()).removeClass("parent"),!1):(e.child(i(),"child").show(),r(e.node()).addClass("parent"),!0)},childRowImmediate:function(e,t,i){return!t&&e.child.isShown()||!e.responsive.hasHidden()?(e.child(!1),r(e.node()).removeClass("parent"),!1):(e.child(i(),"child").show(),r(e.node()).addClass("parent"),!0)},modal:function(e){return function(t,i,n){if(i)r("div.dtr-modal-content").empty().append(n());else{var a=function(){d.remove(),r(document).off("keypress.dtr")},d=r('<div class="dtr-modal"/>').append(r('<div class="dtr-modal-display"/>').append(r('<div class="dtr-modal-content"/>').append(n())).append(r('<div class="dtr-modal-close">&times;</div>').click(function(){a()}))).append(r('<div class="dtr-modal-background"/>').click(function(){a()})).appendTo("body");r(document).on("keyup.dtr",function(s){s.keyCode===27&&(s.stopPropagation(),a())})}e&&e.header&&r("div.dtr-modal-content").prepend("<h2>"+e.header(t)+"</h2>")}}};g.renderer={listHiddenNodes:function(){return function(e,t,i){var n=this,a=r('<ul data-dtr-index="'+t+'" class="dtr-details"/>'),d=!1;return r.each(i,function(s,o){if(o.hidden){var c=o.className?'class="'+o.className+'"':"";r("<li "+c+' data-dtr-index="'+o.columnIndex+'" data-dt-row="'+o.rowIndex+'" data-dt-column="'+o.columnIndex+'"><span class="dtr-title">'+o.title+"</span> </li>").append(r('<span class="dtr-data"/>').append(n._childNodes(e,o.rowIndex,o.columnIndex))).appendTo(a),d=!0}}),d?a:!1}},listHidden:function(){return function(e,t,i){var n=r.map(i,function(a){var d=a.className?'class="'+a.className+'"':"";return a.hidden?"<li "+d+' data-dtr-index="'+a.columnIndex+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":""}).join("");return n?r('<ul data-dtr-index="'+t+'" class="dtr-details"/>').append(n):!1}},tableAll:function(e){return e=r.extend({tableClass:""},e),function(t,i,n){var a=r.map(n,function(d){var s=d.className?'class="'+d.className+'"':"";return"<tr "+s+' data-dt-row="'+d.rowIndex+'" data-dt-column="'+d.columnIndex+'"><td>'+d.title+":</td> <td>"+d.data+"</td></tr>"}).join("");return r('<table class="'+e.tableClass+' dtr-details" width="100%"/>').append(a)}}};g.defaults={breakpoints:g.breakpoints,auto:!0,details:{display:g.display.childRow,renderer:g.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var k=r.fn.dataTable.Api;k.register("responsive()",function(){return this});k.register("responsive.index()",function(e){return e=r(e),{column:e.data("dtr-index"),row:e.parent().data("dtr-index")}});k.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic()})});k.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize())})});k.register("responsive.hasHidden()",function(){var e=this.context[0];return e._responsive?r.inArray(!1,e._responsive._responsiveOnlyHidden())!==-1:!1});k.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(e,t){return e._responsive?e._responsive._responsiveOnlyHidden()[t]:!1},1)});g.version="2.4.0";r.fn.dataTable.Responsive=g;r.fn.DataTable.Responsive=g;r(document).on("preInit.dt.dtr",function(e,t,i){if(e.namespace==="dt"&&(r(t.nTable).hasClass("responsive")||r(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||x.defaults.responsive)){var n=t.oInit.responsive;n!==!1&&new g(t,r.isPlainObject(n)?n:{})}});const V=_("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Tour Packages",-1),j={class:"py-12 pt-4"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},q={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},X=_("thead",null,[_("tr",null,[_("th",null,"Title"),_("th",null,"Category Name"),_("th",null,"Description"),_("th",null,"Feature Image"),_("th",null,"Created At"),_("th",null,"Updated At"),_("th",null,"Actions")])],-1),Z={__name:"Packages",props:{packages:Array},setup(e){const t=e;return S.use(x),R(()=>{document.getElementById("dt").addEventListener("click",function(i){if(i.target.nodeName!=="BUTTON")return;const n=i.target,a=n.getAttribute("data-type"),d=n.getAttribute("data-id");a==="del"&&confirm("Are you sure you want to delete this package?")&&(n.setAttribute("disabled",!0),n.innerText="Deleting",fetch(`/admin/packages/${d}`,{method:"post",headers:{"X-XSRF-TOKEN":decodeURIComponent(document.cookie.split(";").filter(s=>s.startsWith("XSRF-TOKEN"))[0].split("=")[1])},body:JSON.stringify({_method:"delete"})}).then(s=>s.json()).then(s=>t.packages.filter(o=>o!==d)).catch(s=>console.log(s)))})}),(i,n)=>(O(),$(E,null,[N(I(B),{title:"Tour Packages"}),N(P,null,{header:T(()=>[V]),default:T(()=>[_("div",j,[_("div",F,[_("div",q,[N(I(H),{href:"/admin/packages/create",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mb-3"},{default:T(()=>[L("Add Package")]),_:1}),N(I(S),{id:"dt",options:{responsive:!0},data:e.packages,columns:[{data:"title"},{data:"category",render:a=>a.name},{data:"description"},{data:"feature_image",render:a=>`<img src='/storage/${a}' class='image image-fluid'/>`},{data:"created_at",render:a=>new Date(a).toDateString()},{data:"updated_at",render:a=>new Date(a).toDateString()},{data:null,render:a=>`<a href='/admin/packages/edit/${a.id}' class='inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mr-3'>Edit</a> <button data-type=del data-id=${a.id} class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'>Delete</button>`}],class:"display table table-responsive"},{default:T(()=>[X]),_:1},8,["data","columns"])])])])]),_:1})],64))}};export{Z as default};
