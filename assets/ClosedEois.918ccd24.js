import{u as p,r as a,j as s,a as e,L as l,F as h}from"./index.81de7608.js";import{H as m}from"./HomeBredCurbs.1ad3222c.js";import{T as u}from"./index.8d175e62.js";import{I as b}from"./index.ad25d36c.js";import{M as f}from"./index.b3e2825e.js";import{a as y}from"./axios.74c9240f.js";import"./index.esm.b0dae23c.js";import"./iconBase.a00758a9.js";const j=()=>{const o=p(),c=()=>{o("/eoiDetail")},n=()=>{window.history.back()},[d,i]=a.exports.useState([]),x=localStorage.getItem("profile"),r=JSON.parse(x);return a.exports.useEffect(()=>{y.get(`https://constrobackend17-4.onrender.com/api/get_closed_tenders//${r==null?void 0:r._id}`).then(t=>{console.log(t.data.Result),i(t.data.Result)}).catch(t=>{console.log(t)})},[]),s("div",{children:[e(m,{title:"Closed EOI "}),s("div",{className:"flex items-center text-slate-400 ",children:[s(l,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:n,children:[e(b,{className:"text-xl font-semibold"}),"Back"]}),e("span",{className:"mx-2",children:" / "}),s(l,{to:"/dashboard",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[e(f,{className:"text-lg font-semibold"}),"Home"]})]}),e("div",{class:"overflow-x-auto mt-3",children:s("table",{class:"table-auto w-full shadow-sm rounded-md",children:[e("thead",{class:"border border-collapse bg-[#00adee] text-white",children:s("tr",{className:" rounded-md",children:[e("th",{class:"px-4 py-3 text-center border",children:"Eoi NO "}),e("th",{class:"px-4 py-3 text-center border",children:"Project "}),e("th",{class:"px-4 py-3 text-center border",children:"Building"}),e("th",{class:"px-4 py-3 text-center border",children:"Scope"}),e("th",{class:"px-4 py-3 text-center border",children:"Approximate EOI Value"}),e("th",{class:"px-4 py-2 text-center border",children:"Last Day Of Application"}),e("th",{class:"px-4 py-2 text-center border",children:"EOI Details"})]})}),e("tbody",{children:d.map((t,N)=>e(h,{children:s("tr",{className:"hover:bg-[#f8f8f8] shadow-sm",children:[e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.eoiNo}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.projectName}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.building}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.scopeName}),s("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:["\u20B9 ",t.maxContractValue]}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.lastDate}),e("td",{className:"px-4 py-2 text-center flex justify-center text-sm text-slate-500",children:e("div",{onClick:c,className:"cursor-pointer hover:text-[#00adee]",children:e(u,{className:"text-3xl"})})})]})}))})]})}),"\u200B"]})};export{j as default};
