import{r as m,u as v,o as w,a as g,c as p,b as s,d as n,w as r,F as C,H as S,e,f as A,g as f,t as _,h as D,v as $,T as N,i as k}from"./app-abaf6a0c.js";import{e as x,D as T}from"./jquery.dataTables-acfc2288.js";import{_ as V}from"./AuthenticatedLayout-1bce5d82.js";import{_ as E,a as B,b as U}from"./TextInput-1277f6f7.js";import{_ as F}from"./PrimaryButton-d9966e3a.js";import{_ as q}from"./DangerButton-ea6530e1.js";import"./ApplicationLogo-833537ef.js";import"./_plugin-vue_export-helper-c27b6911.js";const H=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Categories",-1),M={class:"py-12"},I={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},L={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},O=e("div",null,[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Add Category")],-1),j=["onSubmit"],z={class:"flex items-center gap-4"},G={key:0,class:"text-sm text-gray-600"},J={class:"py-12 pt-4"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},P={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},Q=e("div",null,[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Add Category")],-1),R=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"Actions")])],-1),oe={__name:"Categories",props:{categories:Array},setup(c){const h=c;x.use(T);const i=m(!1),d=m(null),t=v({name:""}),b=()=>{if(t.clearErrors(),!t.name||t.name.trim()===""){t.setError("name","name field is required");return}t.processing=!0,i.value?t.put(`/admin/categories/${d.value.id}`,{onSuccess:()=>{i.value=!1,t.processing=!1,t.reset()}}):t.post("/admin/categories",{onSuccess:()=>{t.reset(),t.processing=!1}})};return w(()=>{document.getElementById("dt").addEventListener("click",function(l){if(l.target.nodeName!=="BUTTON")return;const o=l.target,a=o.getAttribute("data-type"),u=o.getAttribute("data-id");a==="del"?confirm("Are you sure you want to delete this category?")&&(o.setAttribute("disabled",!0),o.innerText="Deleting",t.delete("/admin/categories/"+u)):a==="edit"&&(d.value=h.categories.filter(({id:y})=>u==y)[0],t.name=d.value.name,i.value=!0)})}),(l,o)=>(g(),p(C,null,[s(n(S),{title:"Categories"}),s(V,null,{header:r(()=>[H]),default:r(()=>[e("div",M,[e("div",I,[e("div",L,[O,e("form",{onSubmit:A(b,["prevent"]),class:"mt-6 space-y-6"},[e("div",null,[s(E,{for:"name",value:"Name"}),s(B,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:n(t).name,"onUpdate:modelValue":o[0]||(o[0]=a=>n(t).name=a),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(U,{class:"mt-2",message:n(t).errors.name},null,8,["message"])]),e("div",z,[s(F,{disabled:n(t).processing},{default:r(()=>[f(_(i.value?"Update":"Save"),1)]),_:1},8,["disabled"]),D(s(q,null,{default:r(()=>[f("Cancel")]),_:1},512),[[$,i.value]]),s(N,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:r(()=>[n(t).recentlySuccessful?(g(),p("p",G,_(i.value?"Updated":"Saved"),1)):k("",!0)]),_:1})])],40,j)])])]),e("div",J,[e("div",K,[e("div",P,[Q,s(n(x),{id:"dt",options:{responsive:!0},data:c.categories,columns:[{data:"name"},{data:"created_at",render:a=>new Date(a).toDateString()},{data:"updated_at",render:a=>new Date(a).toDateString()},{data:null,render:a=>`<button data-type=edit data-id=${a.id} class='inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mr-3'>Edit</button> <button data-type=del data-id=${a.id} class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'>Delete</button>`}],class:"display table table-responsive"},{default:r(()=>[R]),_:1},8,["data","columns"])])])])]),_:1})],64))}};export{oe as default};