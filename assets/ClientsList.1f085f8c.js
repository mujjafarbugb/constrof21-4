import{r as d,a as e,F as l,j as a,L as o}from"./index.81de7608.js";import{H as i}from"./HomeBredCurbs.76dfab29.js";import{T as n}from"./index.8d175e62.js";import{I as m}from"./index.ad25d36c.js";import{M as h}from"./index.b3e2825e.js";import{a as p}from"./axios.74c9240f.js";import"./index.esm.b0dae23c.js";import"./iconBase.a00758a9.js";const x=s=>(d.exports.useState(s.data),console.log(55,s.data),e(l,{children:e("div",{className:"overflow-x-auto",children:a("table",{className:"min-w-full border-collapse  border-0",children:[e("thead",{children:a("tr",{className:"bg-[#18b9f9] text-white ",children:[e("th",{className:"px-4 py-2 border border-gray-200",children:"User id"}),e("th",{className:"px-4 py-2 border border-gray-200  ",style:{width:"100rem"},children:"Username"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Email"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Mobile"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Firm Name"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Firm Representative"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Representative Designation"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Website"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Year Of Estimation"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Registration On"}),e("th",{className:"px-4 py-2 border border-gray-200",children:"Action "})]})}),e("tbody",{children:s.data.map((r,c)=>e(l,{children:a("tr",{className:"hover:bg-black-50 text-sm",children:[e("td",{className:"px-4 py-2  shadow-md",children:r.userCode}),e("td",{className:"px-4 py-2  shadow-md",children:r.userName}),e("td",{className:"px-4 py-2  shadow-md",children:r.email}),e("td",{className:"px-4 py-2  shadow-md",children:r.mobile}),e("td",{className:"px-4 py-2  shadow-md",children:r.firmName}),e("td",{className:"px-4 py-2  shadow-md",children:r.firmRepresentative}),e("td",{className:"px-4 py-2  shadow-md",children:r.representativeDesignation}),e("td",{className:"px-4 py-2  shadow-md",children:r.website}),e("td",{className:"px-4 py-2  shadow-md",children:r.yearOfEst}),e("td",{className:"px-4 py-2  shadow-md",children:r.regOn}),e("td",{className:"px-4 py-2  shadow-md",children:e(o,{to:"/detailsView",children:e(n,{className:"text-3xl text-slate-400 hover:text-[#18b9f9] cursor-pointer ml-3"})})})]},c)}))})]})})})),k=()=>{const[s,r]=d.exports.useState([]);return d.exports.useEffect(()=>{p.get("https://constrobackend17-4.onrender.com/api/get_all_receiver").then(t=>{console.log(16,t.data.Result),r(t.data.Result)}).catch(t=>{console.log(t)})},[]),a(l,{children:[e(i,{title:"Clients List "}),a("div",{className:"flex items-center text-slate-400 ",children:[a(o,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:()=>{window.history.back()},children:[e(m,{className:"text-xl font-semibold"}),"Back"]}),e("span",{className:"mx-2",children:" / "}),a(o,{to:"/AdminDash",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[e(h,{className:"text-lg font-semibold"}),"Home"]})]}),e("div",{className:"container mx-auto mt-2",children:e(x,{data:s})})]})};export{k as default};
