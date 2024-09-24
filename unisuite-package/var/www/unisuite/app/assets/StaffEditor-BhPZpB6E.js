import{_ as x,E as g,c as p,d as t,a as l,w as s,r as n,o as f,b as a,F as v,p as w}from"./index-CgD85CHz.js";import{_ as y}from"./MSidebar.vue_vue_type_script_setup_true_lang-XsMhQyXZ.js";import{d as h}from"./Datepicker-77JywlP3.js";import{_}from"./user-9-vICLs4w5.js";import{_ as k}from"./user-7-CBONfcwy.js";const d=g(),N={mounted(){d.appSidebarMinified=!0,d.appContentFullHeight=!0,d.appContentClass="p-0"},components:{AppMSidebar:y,datepicker:h},beforeUnmount(){d.appContentFullHeight=!1,d.appSidebarMinified=!1,d.appContentClass=""}},S={class:"d-block d-xl-flex align-items-stretch h-100"},A={class:"gallery-content-container"},B={class:"page-header mb-3 d-flex justify-content-between align-items-center"},E={class:"text-end"},M={class:"btn-group",role:"group","aria-label":"Button group with nested dropdown"},C={class:"row gx-4"},V={class:"col-xl-8"},F={class:"row row-space-10 mb-3"},L={class:"col-xl-2"},I={class:"col-xl-4"},R={class:"table-responsive"},D={class:"table table-hover text-nowrap"},P={class:"align-middle text-end"};function q(z,e,H,$,W,Z){const u=n("AppMSidebar"),c=n("RouterLink"),o=n("card-header"),m=n("datepicker"),r=n("card-body"),i=n("card"),b=n("perfect-scrollbar");return f(),p("div",S,[t(u),l("div",A,[t(b,{class:"h-100 p-4"},{default:s(()=>[l("h1",B,[e[3]||(e[3]=a(" Max Mustermann ")),l("div",E,[t(c,{to:"/management/staff",class:"btn btn-theme me-2"},{default:s(()=>e[0]||(e[0]=[l("i",{class:"fa fa-arrow-left fa-fw me-1"},null,-1),a(" Zurück zur Übersicht")])),_:1}),l("div",M,[t(c,{to:"/management/staff",class:"btn btn-outline-success disabled"},{default:s(()=>e[1]||(e[1]=[l("i",{class:"fa fa-circle-check fa-fw me-1"},null,-1),a(" Änderungen speichern")])),_:1}),e[2]||(e[2]=l("div",{class:"btn-group",role:"group"},[l("button",{type:"button",class:"btn btn-outline-success dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"}),l("ul",{class:"dropdown-menu"},[l("li",null,[l("a",{class:"dropdown-item disabled",href:"#"},"Zurücksetzen")])])],-1))])])]),l("div",C,[l("div",V,[t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center bg-inverse bg-opacity-10 fw-400"},{default:s(()=>e[4]||(e[4]=[a(" Mitarbeiterinformationen ")])),_:1}),t(r,null,{default:s(()=>[l("div",F,[e[6]||(e[6]=l("div",{class:"col-xl-2"},[l("label",{class:"form-label"},"Anrede"),l("select",{class:"form-select"},[l("option",{value:"theme",selected:""},"Herr (Aktuell)"),l("option",{value:"gray"},"Frau")])],-1)),e[7]||(e[7]=l("div",{class:"col-xl-4"},[l("label",{class:"form-label mt-2"},"Vorname"),l("input",{type:"text",class:"form-control"})],-1)),e[8]||(e[8]=l("div",{class:"col-xl-4"},[l("label",{class:"form-label mt-2"},"Nachname"),l("input",{type:"text",class:"form-control"})],-1)),l("div",L,[e[5]||(e[5]=l("label",{class:"form-label mt-2"},"Geburtsdatum",-1)),t(m,{placeholder:"xx.xx.xxxx",tabindex:"4",id:"birth"})])]),e[9]||(e[9]=l("div",{class:"mb-3"},[l("div",{class:"row row-space-10"},[l("div",{class:"col-xl-4"},[l("label",{class:"form-label mt-2"},"Straße"),l("input",{type:"text",class:"form-control",required:""})]),l("div",{class:"col-xl-1"},[l("label",{class:"form-label mt-2"},"Nr."),l("input",{type:"number",class:"form-control",required:""})]),l("div",{class:"col-xl-2"},[l("label",{class:"form-label mt-2"},"PLZ"),l("input",{type:"number",class:"form-control",required:""})]),l("div",{class:"col-xl-5"},[l("label",{class:"form-label mt-2"},"Stadt"),l("input",{type:"text",class:"form-control",required:""})])]),l("div",{class:"row row-space-10 mt-2"},[l("div",{class:"col-xl-6"},[l("label",{class:"form-label mt-2"},"Bundesland"),l("select",{class:"form-select"},[l("option",{value:"theme",selected:""},"Nordrhein-Westfalen"),l("option",{value:"gray"},"Weiblich"),l("option",{value:"green"},"Divers")])]),l("div",{class:"col-xl-6"},[l("label",{class:"form-label mt-2"},"Land"),l("select",{class:"form-select"},[l("option",{value:"theme",selected:""},"Deutschland"),l("option",{value:"gray"},"Weiblich"),l("option",{value:"green"},"Divers")])])])],-1))]),_:1})]),_:1}),t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center bg-inverse bg-opacity-10 fw-400"},{default:s(()=>e[10]||(e[10]=[a(" Lohnabrechnung ")])),_:1}),t(r,null,{default:s(()=>e[11]||(e[11]=[l("div",{class:"row row-space-10 justify-content-center"},[l("div",{class:"col-xl-4"},[l("label",{class:"form-label mt-2"},"IBAN"),l("input",{type:"text",class:"form-control",placeholder:"xx xxxx xxxx xxxx xxxx xxxx",minlength:"22",maxlength:"27"})]),l("div",{class:"col-xl-2"},[l("label",{class:"form-label mt-2"},"BIC"),l("input",{type:"text",class:"form-control",placeholder:""})])],-1),l("div",{class:"row row-space-10 mb-3 justify-content-center"},[l("div",{class:"col-xl-2"},[l("label",{class:"form-label mt-2"},"Versicherungsnummer"),l("input",{type:"text",class:"form-control",placeholder:"xx xxxxxx x xxx",minlength:"12",maxlength:"15"})]),l("div",{class:"col-xl-2"},[l("label",{class:"form-label mt-2"},"Steuerklasse"),l("select",{class:"form-select"},[l("option",{value:"theme",selected:""},"1 (Aktuell)"),l("option",{value:"gray"},"2"),l("option",{value:"gray"},"3"),l("option",{value:"gray"},"4"),l("option",{value:"gray"},"5"),l("option",{value:"gray"},"6")])]),l("div",{class:"col-xl-2"},[l("label",{class:"form-label mt-2"},"Steuer-IdNr."),l("input",{type:"text",class:"form-control",placeholder:"xx xxx xxx xxx",minlength:"11",maxlength:"14"})])],-1)])),_:1})]),_:1}),t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center bg-inverse bg-opacity-10 fw-400"},{default:s(()=>e[12]||(e[12]=[a(" Dateien ")])),_:1}),t(r,{class:"pb-2"},{default:s(()=>e[13]||(e[13]=[l("div",{class:"mb-2"},[l("div",{class:"d-block d-lg-flex align-items-center"},[l("button",{class:"btn btn-theme fileinput-button me-2 mb-1"},[l("i",{class:"fa fa-fw fa-upload"}),l("span",null,"Hochladen")]),l("button",{type:"reset",class:"btn btn-default me-2 mb-1 cancel"},[l("i",{class:"fa fa-fw fa-download"}),l("span",null,"Herunterladen")]),l("button",{type:"button",class:"btn btn-default me-2 mb-1 delete"},[l("i",{class:"fa fa-fw fa-trash"}),l("span",null,"Löschen")])])],-1),l("div",{id:"error-msg"},null,-1)])),_:1}),e[14]||(e[14]=l("table",{class:"table table-card mb-0 fs-13px"},[l("thead",null,[l("tr",{class:"fs-12px"},[l("th",{class:"pt-2 pb-2 w-10"}),l("th",{class:"pt-2 pb-2 w-25"},"PREVIEW"),l("th",{class:"pt-2 pb-2 w-25"},"FILENAME"),l("th",{class:"pt-2 pb-2 w-25"},"SIZE"),l("th",{class:"pt-2 pb-2 w-25"},"ACTION")])]),l("tbody",{class:"files"},[l("tr",{class:"empty-row"},[l("td",{colspan:"5",class:"text-center p-3"},[l("div",{class:"text-body text-opacity-30 mb-2"},[l("i",{class:"fa fa-file-archive fa-3x"})]),a(" Keine Dateien gefunden ")])])])],-1))]),_:1})]),l("div",I,[t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center fw-400 bg-inverse bg-opacity-15"},{default:s(()=>e[15]||(e[15]=[l("div",{class:"flex-1"},[l("div",null,"Profilbild")],-1)])),_:1}),t(r,null,{default:s(()=>e[16]||(e[16]=[l("div",{class:"mb-4 text-center"},[l("img",{src:_,class:"rounded",alt:"User Profile Picture",height:"200"})],-1),l("div",{class:"btn-group d-flex mb-3",role:"group"},[l("button",{type:"button",class:"btn btn-outline-theme"},[l("i",{class:"fa-solid fa-trash-can text-danger"}),a(" Foto entfernen")]),l("button",{type:"button",class:"btn btn-outline-theme"},[l("i",{class:"fa-solid fa-upload text-green"}),a(" Foto hochladen")])],-1)])),_:1})]),_:1}),t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center fw-400 bg-inverse bg-opacity-15"},{default:s(()=>e[17]||(e[17]=[l("div",{class:"flex-1"},[l("div",null,"Beschäftigungsstatus")],-1)])),_:1}),t(r,null,{default:s(()=>e[18]||(e[18]=[l("div",{class:"form-group mb-4"},[l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"radio",name:"radio_1",id:"defaultRadio1",checked:""}),l("label",{class:"form-check-label",for:"defaultRadio1"},"Vollzeit")]),l("div",{class:"form-check"},[l("input",{class:"form-check-input",type:"radio",name:"radio_1",id:"defaultRadio2",disabled:""}),l("label",{class:"form-check-label",for:"defaultRadio2"},"Teilzeit")])],-1),l("p",{class:"mb-0 small text-body text-opacity-50"},[l("i",{class:"fa fa-question-circle fa-fw"}),a(" Diese Einstellung kann nicht geändert werden, da dies Vertraglich geregelt ist. ")],-1)])),_:1})]),_:1}),t(i,{class:"mb-4"},{default:s(()=>[t(o,{class:"d-flex align-items-center fw-400 bg-inverse bg-opacity-15"},{default:s(()=>e[19]||(e[19]=[l("div",{class:"flex-1"},[l("div",null,"Notfallkontakte")],-1)])),_:1}),t(r,null,{default:s(()=>[l("div",R,[l("table",D,[e[27]||(e[27]=l("thead",null,[l("tr",null,[l("th",{class:"pt-0 pb-2"}),l("th",{class:"pt-0 pb-2"},"Name"),l("th",{class:"pt-0 pb-2"},"Beziehung"),l("th",{class:"pt-0 pb-2"},"E-Mail"),l("th",{class:"pt-0 pb-2"})])],-1)),l("tbody",null,[(f(),p(v,null,w(2,j=>l("tr",null,[e[23]||(e[23]=l("td",{class:"d-flex align-middle"},[l("div",{class:"w-75px h-75px bg-gray-100 d-flex rounded"},[l("img",{alt:"User Avatar",class:"rounded-circle",src:k})])],-1)),e[24]||(e[24]=l("td",{class:"align-middle"},"Papa Mustermann",-1)),e[25]||(e[25]=l("td",{class:"align-middle"},"Vater",-1)),e[26]||(e[26]=l("td",{class:"align-middle"},"papa.mustermann@wo.anders",-1)),l("td",P,[e[21]||(e[21]=l("button",{class:"btn btn-warning me-2"},[l("i",{class:"fa-regular fa-message"}),a(" Benachrichtigen")],-1)),t(c,{to:"/management/staff/1",class:"btn btn-outline-theme me-2"},{default:s(()=>e[20]||(e[20]=[l("i",{class:"fa-solid fa-user-pen"},null,-1),a(" Bearbeiten ")])),_:1}),e[22]||(e[22]=l("button",{class:"btn btn-outline-danger"},[l("i",{class:"fa-solid fa-trash-can"}),a(" Entfernen")],-1))])])),64))])])])]),_:1})]),_:1})])])]),_:1})])])}const J=x(N,[["render",q]]);export{J as default};
