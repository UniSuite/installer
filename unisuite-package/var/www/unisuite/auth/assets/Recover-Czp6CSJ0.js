import{_ as l,u as p,c,b as t,w as u,t as s,d as r,f as m,g as f,r as b,o as _}from"./index-hv4Y3Rmp.js";const a=p(),h={data(){return{year:new Date().getFullYear()}},mounted(){a.appSidebarHide=!0,a.appHeaderHide=!0,a.appFooter=!1,a.appContentClass="p-0"},beforeUnmount(){a.appSidebarHide=!1,a.appHeaderHide=!1,a.appFooter=!0,a.appContentClass=""},methods:{submitForm:function(){this.$router.push("/")}}},v={class:"recover"},E={class:"recover-content"},C={class:"text-center"},R={class:"text-inverse text-opacity-50 text-center"},g={class:"mb-3"},x={class:"d-flex"},O={class:"form-label"},$={class:"mb-3"},k={class:"form-check"},A={class:"form-check-label",for:"customCheck1"},H={class:"mb-3"},T={type:"submit",class:"btn btn-outline-theme btn-lg d-block w-100"},y={class:"text-inverse text-opacity-50 text-center"},L={class:"fixed-bottom mb-2 text-center small text-inverse text-opacity-50"},N={href:"https://triotechcloud.de/",target:"_blank"};function V(o,e,w,I,n,i){const d=b("RouterLink");return _(),c("div",v,[t("div",E,[t("form",{onSubmit:e[0]||(e[0]=u(S=>i.submitForm(),["prevent"])),method:"POST",name:"recover_form"},[t("h1",C,s(o.$t("AUTH.RECOVER.TITLE")),1),t("p",R,s(o.$t("AUTH.RECOVER.DESC")),1),t("div",g,[t("div",x,[t("label",O,[r(s(o.$t("GENERAL.EMAIL"))+" ",1),e[1]||(e[1]=t("span",{class:"text-danger"},"*",-1))])]),e[2]||(e[2]=t("div",{class:"input-group flex-nowrap"},[t("i",{class:"fa-solid fa-image-portrait input-group-text",id:"addon-wrapping"}),t("input",{type:"email",class:"form-control form-control-lg bg-white bg-opacity-5",value:"",required:""})],-1))]),t("div",$,[t("div",k,[e[4]||(e[4]=t("input",{class:"form-check-input",type:"checkbox",value:"",id:"customCheck1",required:""},null,-1)),t("label",A,[r(s(o.$t("AUTH.RECOVER.CONFIRM"))+" ",1),e[3]||(e[3]=t("span",{class:"text-danger"},"*",-1))])])]),t("div",H,[t("button",T,s(o.$t("AUTH.RECOVER.TITLE")),1)]),t("div",y,[r(s(o.$t("AUTH.RECOVER.KNOWLOGIN"))+" ",1),m(d,{to:"/"},{default:f(()=>[r(s(o.$t("AUTH.RECOVER.LOGIN")),1)]),_:1})])],32),t("div",L,[r(" © "+s(n.year)+" ",1),t("a",N,s(o.$t("APP.NAME")),1),r(" - "+s(o.$t("APP.LIC"))+". ",1)])])])}const F=l(h,[["render",V]]);export{F as default};
