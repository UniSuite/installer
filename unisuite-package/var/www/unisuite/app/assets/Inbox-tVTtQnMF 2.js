import{_ as b,E as x,c as n,a as e,d as i,w as a,r as p,o as r,b as l,F as v,p as h,q as _,t as d}from"./index-BLO21noA.js";const g="/assets/img/page/email.svg",c=x(),f={data(){return{mailData:[{id:1,sender:"Apple",time:"1 hour ago",title:"Your payment is received",desc:"Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...",hasAttachment:!0,unread:!0},{id:2,sender:"Chance Graham",time:"5 hours ago",title:"Trip to South America",desc:"Quisque luctus sapien sodales pulvinar porta. In pretium accumsan elit, vitae blandit arcu suscipit eu. Ut tortor libero, gravida ut nisl tincidunt, efficitur laoreet mauris.",hasAttachment:!0,unread:!0},{id:3,sender:"Paypal Inc",time:"Aug 11",title:"Important information about your order #019244",desc:"Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.",hasAttachment:!0},{id:4,sender:"Fitbit",time:"Aug 09",title:"Stylish accessories for your Charge 2",desc:'How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled.'},{id:5,sender:"Apple",time:"Aug 09",title:"Your invoice from Apple.",desc:"Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls."},{id:6,sender:"Hotels.com",time:"Aug 09",title:"[Ends tonight!] 48 Hour Sale - Save up to 50% + save an extra 10%",desc:"Phasellus vulputate, ligula ac hendrerit euismod, nunc metus maximus tellus, aliquam finibus justo lorem a augue."},{id:7,sender:"Google Calendar",time:"Aug 08",title:"Daily schedule on Tuesday, May 9, 2017",desc:"Suspendisse potenti. Praesent ac ullamcorper sem. Mauris luctus accumsan felis"},{id:8,sender:"Facebook Blueprint",time:"Aug 08",title:"April 2017 – Blueprint Highlights",desc:"Phasellus pretium viverra tortor, eu sagittis erat aliquam nec. Nunc et volutpat ligula. Duis viverra posuere enim, ac bibendum massa viverra id."},{id:9,sender:"Customer Care",time:"Aug 08",title:"Re: [Case #1567940] - Re: [Important] Exabytes",desc:"Nam imperdiet molestie arcu, et gravida quam lacinia lobortis."},{id:10,sender:"Flight Status",time:"Aug 07",title:"[Case#2017022137015743] *FLIGHT RETIMED* **MH2713/15JUL17**",desc:"Etiam condimentum orci ut velit suscipit, ut accumsan elit aliquet. Nulla cursus mi at]"}]}},mounted(){c.appContentFullHeight=!0,c.appContentClass="p-0"},beforeUnmount(){c.appContentFullHeight=!1,c.appContentClass=""}},k={class:"mailbox"},y={class:"mailbox-toolbar"},A={class:"mailbox-toolbar-item"},C={class:"mailbox-toolbar-item ms-3"},q={class:"mailbox-toolbar-item ms-3"},w={class:"mailbox-toolbar-item ms-3"},z={class:"mailbox-toolbar-item ms-auto"},j={class:"mailbox-body"},F={class:"mailbox-sidebar"},N={class:"mailbox-list"},S={class:"mailbox-checkbox"},D={class:"form-check"},I=["id"],B=["for"],H={class:"mailbox-message"},E={class:"mailbox-sender"},M={class:"mailbox-sender-name"},T={class:"mailbox-time"},J={class:"mailbox-title"},L={class:"mailbox-desc"},P={key:1,class:"mailbox-list-item"},R={class:"mailbox-content d-none d-lg-block"};function Q(G,t,U,V,u,O){const o=p("RouterLink"),m=p("perfect-scrollbar");return r(),n("div",k,[e("div",y,[t[5]||(t[5]=e("div",{class:"mailbox-toolbar-item me-3"},[e("span",{class:"mailbox-toolbar-text"},"Mailboxes")],-1)),e("div",A,[i(o,{to:"/mail/inbox",class:"mailbox-toolbar-link active"},{default:a(()=>t[0]||(t[0]=[l("Inbox")])),_:1})]),e("div",C,[i(o,{to:"/mail/inbox",class:"mailbox-toolbar-link"},{default:a(()=>t[1]||(t[1]=[l("Sent")])),_:1})]),e("div",q,[i(o,{to:"/mail/inbox",class:"mailbox-toolbar-link"},{default:a(()=>t[2]||(t[2]=[l("Drafts (1)")])),_:1})]),e("div",w,[i(o,{to:"/mail/inbox",class:"mailbox-toolbar-link"},{default:a(()=>t[3]||(t[3]=[l("Junk")])),_:1})]),e("div",z,[i(o,{to:"/mail/compose",class:"mailbox-toolbar-link"},{default:a(()=>t[4]||(t[4]=[l("New Message "),e("i",{class:"fa fa-pen fs-12px ms-1"},null,-1)])),_:1})])]),e("div",j,[e("div",F,[i(m,{class:"h-100"},{default:a(()=>[e("div",N,[u.mailData?(r(!0),n(v,{key:0},h(u.mailData,s=>(r(),n("div",{class:_(["mailbox-list-item",{"has-attachment":s.hasAttachment,unread:s.unread,active:s.active}])},[e("div",S,[e("div",D,[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"mailCheckbox"+s.id},null,8,I),e("label",{class:"form-check-label",for:"mailCheckbox"+s.id},null,8,B)])]),e("div",H,[i(o,{to:"/mail/detail",class:"mailbox-list-item-link"},{default:a(()=>[e("div",E,[e("span",M,d(s.sender),1),e("span",T,d(s.time),1)]),e("div",J,d(s.title),1),e("div",L,d(s.desc),1)]),_:2},1024)])],2))),256)):(r(),n("div",P," No records found "))])]),_:1})]),e("div",R,[i(m,{class:"h-100"},{default:a(()=>t[6]||(t[6]=[e("div",{class:"mailbox-empty-message"},[e("div",{class:"mailbox-empty-message-img"},[e("img",{src:g,alt:""})]),e("div",{class:"mailbox-empty-message-title"},"No message selected")],-1)])),_:1})])])])}const Y=b(f,[["render",Q]]);export{Y as default};
