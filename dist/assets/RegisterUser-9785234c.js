import{u as l,a as n,r as m,y as c,j as e,L as u}from"./index-4e049095.js";import{u as x,c as b,a as r}from"./index.esm-5deec958.js";const g=()=>{const i=l(),[t,{isSuccess:o}]=n(),s=x({initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:b({name:r().required("Enter name"),email:r().required("Enter email"),mobile:r().required("Enter mobile"),password:r().required("Enter password")}),onSubmit:(a,{resetForm:d})=>{t(a),d()}});return m.useEffect(()=>{o&&(c.success("signup success"),i("/login"))},[o]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:e.jsxs("div",{className:"w-full max-w-md bg-white rounded-lg shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-center mb-6",children:"Register"}),e.jsxs("form",{onSubmit:s.handleSubmit,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Enter name",...s.getFieldProps("name"),className:`mt-1 block w-full px-3 py-2 border ${s.touched.name&&s.errors.name?"border-red-500":"border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}),s.touched.name&&s.errors.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.errors.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"Enter email",...s.getFieldProps("email"),className:`mt-1 block w-full px-3 py-2 border ${s.touched.email&&s.errors.email?"border-red-500":"border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}),s.touched.email&&s.errors.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mobile",className:"block text-sm font-medium text-gray-700",children:"Mobile"}),e.jsx("input",{id:"mobile",name:"mobile",type:"tel",placeholder:"Enter mobile",...s.getFieldProps("mobile"),className:`mt-1 block w-full px-3 py-2 border ${s.touched.mobile&&s.errors.mobile?"border-red-500":"border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}),s.touched.mobile&&s.errors.mobile&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.errors.mobile})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"Enter password",...s.getFieldProps("password"),className:`mt-1 block w-full px-3 py-2 border ${s.touched.password&&s.errors.password?"border-red-500":"border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}),s.touched.password&&s.errors.password&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.errors.password})]}),e.jsxs("div",{children:[e.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"Register"}),e.jsx("div",{children:e.jsx(u,{to:"/login",className:"text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Don't have an account? Sign In"})})]})]})]})})})};export{g as default};