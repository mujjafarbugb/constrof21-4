import{u as $,b as q,r as o,j as a,a as e,F as S,Q as g}from"./index.81de7608.js";import"./index.esm.b0dae23c.js";import{B as J}from"./index.ec51c02f.js";import{M as Q,B as z}from"./Modal.c4889181.js";import{T as G}from"./Textinput.5c99e78c.js";import{c as H,u as K,o as W}from"./array.c4379bca.js";import{u as X}from"./formik.esm.a73e9a74.js";import{a as p}from"./axios.74c9240f.js";import{b as Y}from"./index.b3e2825e.js";import"./iconBase.a00758a9.js";const P=H({}),me=()=>{$();const{id:w}=q();console.log(9,w);const F=localStorage.getItem("profile"),u=JSON.parse(F);console.log(31,u._id);const[f,D]=o.exports.useState(""),[y,R]=o.exports.useState([]),[v,N]=o.exports.useState([]),[_,b]=o.exports.useState(!1),[j,M]=o.exports.useState(!1),[s,i]=o.exports.useState({projectName:"",buildings:"",city:"",location:"",remark:""}),L=()=>new Date().toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),[l,d]=o.exports.useState({receiverId:u._id,buildings:"",projectName:"",city:"",location:"",remark:"",regFrom:"web",regOn:L(),isActive:!0}),A=t=>{if(console.log(87,l),l){if(!l.projectName||!l.city||!l.location||!l.remark||!l.buildings){g.error("Please fill all required fields",{position:"top-right"});return}({...l},p.post("https://constrobackend17-4.onrender.com/api/post_projects",l).then(r=>{r.data,console.log(46,r),g.success("Submission successful!",{position:"top-right"}),b(!1),M(!j)}).catch(r=>{console.error("API Error:",r)}))}};o.exports.useEffect(()=>{p.get("https://constrobackend17-4.onrender.com/api/getAll_Cities_ddl").then(t=>{console.log(79,t.data.Result),R(t.data.Result),i(t.data.Result),i(l)}).catch(t=>{console.log(t)}),p.get(`https://constrobackend17-4.onrender.com/api/getProjectByReceiver/${u._id}`).then(t=>{console.log(100,t.data.Result),N(t.data.Result)}).catch(t=>{console.log(t)})},[j]);const{register:n,formState:{errors:m},handleSubmit:Z}=K({resolver:W(P),mode:"all"});X({initialValues:{},validationSchema:P,onSubmit:t=>{console.log(122,t)}});const C=t=>{const r=t.target.value;D(r),d({...l,city:r})},B=t=>{console.log(600,t),i(t)},U=t=>{const{_id:r,projectName:k,buildings:E,city:ee,location:I,remark:O,selectedCity:V}=t,c={projectName:k,buildings:E,city:V,location:I,remark:O};console.log(199,"Updated Data:",c),p.put(`https://constrobackend17-4.onrender.com/api/update_projects/${r}`,c).then(h=>{console.log(46,h),g.success("Update Project Successfully!",{position:"top-right"});const T=v.map(x=>x._id===r?{...x,projectName:c.projectName,buildings:c.buildings,city:c.city,location:c.location,remark:c.remark}:x);N(T)}).catch(h=>{console.error("API Error:",h)})};return console.log(601,s),a("div",{className:"shadow-md p-4",children:[a("div",{className:"flex justify-between items-center",children:[e("span",{className:"my-2 text-lg font-semibold text-slate-500",children:"All Projects"}),e("div",{children:e(Q,{title:"",label:" + Add Projects ",labelClass:"bg-[#00adee] hover:bg-[#6fcaeb] text-white",uncontrol:!0,isOpen:_,onClose:()=>b(!1),footerContent:e(z,{text:"Add Project",className:"bg-[#00adee] hover:bg-[#6fcaeb] text-white ",onClick:()=>{A(),b(!1),onClose()}}),children:a("div",{className:"text-xs text-slate-600 dark:text-slate-300 mt-2",children:[a("div",{class:"input-group mb-2 mt-3",children:[e("label",{for:"formFile",class:"form-label",children:"Project Name"}),e("input",{type:"text",name:"projectName",class:"form-control",placeholder:"","aria-label":"Recipient's username","aria-describedby":"button-addon2",register:n,error:m.projectName,value:l.projectName,onChange:t=>{d({...l,projectName:t.target.value})}})]}),a("div",{class:"input-group mb-2 mt-3",children:[e("label",{for:"formFile",class:"form-label",children:"Building Name"}),e("input",{type:"text",name:"buildings",class:"form-control",placeholder:"","aria-label":"Recipient's username","aria-describedby":"button-addon2",register:n,error:m.buildings,value:l.buildings,onChange:t=>{d({...l,buildings:t.target.value})}})]}),a("div",{class:"input-group mb-3 mt-3",children:[e("label",{for:"formFile",class:"form-label",children:"Select City"}),a("select",{name:"city",class:"form-select text-sm text-slate-500","aria-label":"Default select example",onChange:C,value:f,children:[e("option",{value:"",selected:!0,children:"Select city"}),y.map((t,r)=>e(S,{children:e("option",{value:t._id,children:t.city})}))]})]}),a("div",{class:"input-group mb-2 mt-3",children:[e("label",{for:"formFile",class:"form-label",children:"Location"}),e("input",{type:"text",name:"location",class:"form-control",placeholder:"","aria-label":"Recipient's username","aria-describedby":"button-addon2",register:n,error:m.location,value:l.location,onChange:t=>{d({...l,location:t.target.value})}})]}),a("div",{class:"input-group mb-2 mt-3",children:[e("label",{for:"formFile",class:"form-label",children:"Remark"}),e("input",{type:"text",name:"remark",class:"form-control",placeholder:"","aria-label":"Recipient's username","aria-describedby":"button-addon2",register:n,error:m.remark,value:l.remark,onChange:t=>{d({...l,remark:t.target.value})}})]})]})})})]}),e("div",{class:"overflow-x-auto",children:a("table",{class:"table-auto w-full shadow-sm rounded-md mt-3",children:[e("thead",{class:"border border-collapse bg-[#00adee] hover:bg-[#6fcaeb] text-white",children:a("tr",{className:" rounded-md",children:[e("th",{class:"px-4 py-2 text-center border",children:"Project"}),e("th",{class:"px-4 py-2 text-center border",children:"Buildings"}),e("th",{class:"px-4 py-2 text-center border",children:"City"}),e("th",{class:"px-4 py-2 text-center border",children:"Location"}),e("th",{class:"px-4 py-2 text-center border",children:"Remark"}),e("th",{class:"px-4 py-2 text-center border",children:"Action"})]})}),a("tbody",{children:[e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:e("div",{class:"modal-dialog",children:a("div",{class:"modal-content",children:[a("div",{class:"modal-header text-white bg-[#00adee]",children:[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"}),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{class:"modal-body",children:a("form",{children:[a("div",{class:"mb-3",children:[e("label",{for:"projectName",class:"form-label text-left",children:"Project name"}),e("div",{className:"shadow-sm p-2",children:e("span",{className:"text-slate-500 text-sm ",children:s.projectName})})]}),a("div",{className:"input-group mb-2 mt-2",children:[e("label",{htmlFor:"formFile",className:"form-label text-left",children:"Building Name"}),e("input",{type:"text",name:"buildings",className:"form-control",placeholder:"","aria-label":"Recipient's username","aria-describedby":"button-addon2",register:n,value:s.buildings,defaultValue:s.buildings,onChange:t=>i({...s,buildings:t.target.value})})]}),a("div",{className:"input-group mb-3 mt-2",children:[e("label",{htmlFor:"formFile",className:"form-label text-left",children:"Select City"}),a("select",{name:"city",className:"form-select text-sm text-slate-500","aria-label":"Default select example",onChange:t=>{C(t),i({...s,selectedCity:t.target.value})},defaultValue:s.selectedCity,children:[e("option",{value:"",disabled:!0,children:"Select city"}),y.map((t,r)=>e("option",{value:t._id,children:t.city},r))]})]}),e("label",{for:"projectName",class:"form-label text-left",children:"Location"}),e("div",{className:"shadow-sm p-2",children:e("span",{className:"text-slate-500 text-sm ",children:s.location})}),e("label",{for:"projectName",class:"form-label text-left my-2",children:"Remark"}),e(G,{name:"remark",type:"text",placeholder:"",register:n,className:"",value:s.remark,defaultValue:s.remark,onChange:t=>i({...s,remark:t.target.value})})]})}),a("div",{class:"modal-footer",children:[e("button",{type:"button",class:"btn btn-secondary border-0","data-bs-dismiss":"modal",children:"Cancel"}),e("button",{type:"button",class:"btn btn-primary border-0 bg-[#00adee]",onClick:t=>{U(s)},children:"Update Project"})]})]})})}),v.map((t,r)=>e(S,{children:a("tr",{className:"hover:bg-[#f8f8f8] shadow-sm",children:[e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.projectName}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.buildings}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.city.city}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.location}),e("td",{class:"px-4 py-2 text-center text-sm text-slate-500",children:t.remark}),e("td",{className:" py-2 text-center flex justify-center text-sm text-slate-500 ",children:a("div",{className:"cursor-pointer  ",children:[e("button",{type:"button",class:"btn border-0 text-slate-400 hover:text-[#00adee]","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",onClick:k=>{B(t)},children:e(J,{className:"text-3xl"})}),e("button",{type:"button",class:"btn border-0 text-slate-400 hover:text-red-500","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo",children:e(Y,{className:"text-3xl"})})]})})]})}))]})]})})]})};export{me as default};
