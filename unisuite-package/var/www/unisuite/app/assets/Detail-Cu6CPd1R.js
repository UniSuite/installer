import{_ as p,E as v,c as r,a as e,d as i,w as o,r as b,o as n,b as t,F as h,p as x,q as f,t as c}from"./index-CgD85CHz.js";import{_ as g}from"./user-1-72gfUzfH.js";const _="/assets/img/gallery/gallery-10.jpg",d=v(),k={data(){return{mailData:[{id:1,sender:"Apple",time:"1 hour ago",title:"Your payment is received",desc:"Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...",hasAttachment:!0,unread:!0,active:!0},{id:2,sender:"Chance Graham",time:"5 hours ago",title:"Trip to South America",desc:"Quisque luctus sapien sodales pulvinar porta. In pretium accumsan elit, vitae blandit arcu suscipit eu. Ut tortor libero, gravida ut nisl tincidunt, efficitur laoreet mauris.",hasAttachment:!0,unread:!0},{id:3,sender:"Paypal Inc",time:"Aug 11",title:"Important information about your order #019244",desc:"Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.",hasAttachment:!0},{id:4,sender:"Fitbit",time:"Aug 09",title:"Stylish accessories for your Charge 2",desc:'How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled.'},{id:5,sender:"Apple",time:"Aug 09",title:"Your invoice from Apple.",desc:"Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls."},{id:6,sender:"Hotels.com",time:"Aug 09",title:"[Ends tonight!] 48 Hour Sale - Save up to 50% + save an extra 10%",desc:"Phasellus vulputate, ligula ac hendrerit euismod, nunc metus maximus tellus, aliquam finibus justo lorem a augue."},{id:7,sender:"Google Calendar",time:"Aug 08",title:"Daily schedule on Tuesday, May 9, 2017",desc:"Suspendisse potenti. Praesent ac ullamcorper sem. Mauris luctus accumsan felis"},{id:8,sender:"Facebook Blueprint",time:"Aug 08",title:"April 2017 – Blueprint Highlights",desc:"Phasellus pretium viverra tortor, eu sagittis erat aliquam nec. Nunc et volutpat ligula. Duis viverra posuere enim, ac bibendum massa viverra id."},{id:9,sender:"Customer Care",time:"Aug 08",title:"Re: [Case #1567940] - Re: [Important] Exabytes",desc:"Nam imperdiet molestie arcu, et gravida quam lacinia lobortis."},{id:10,sender:"Flight Status",time:"Aug 07",title:"[Case#2017022137015743] *FLIGHT RETIMED* **MH2713/15JUL17**",desc:"Etiam condimentum orci ut velit suscipit, ut accumsan elit aliquet. Nulla cursus mi at]"}]}},mounted(){d.appContentFullHeight=!0,d.appContentClass="p-0"},beforeUnmount(){d.appContentFullHeight=!1,d.appContentClass=""}},y={class:"mailbox"},C={class:"mailbox-toolbar"},q={class:"mailbox-toolbar-item"},A={class:"mailbox-toolbar-item"},w={class:"mailbox-toolbar-item"},j={class:"mailbox-toolbar-item"},z={class:"mailbox-toolbar-item ms-auto"},N={class:"mailbox-body"},S={class:"mailbox-sidebar d-none d-lg-block"},D={class:"mailbox-list"},F={class:"mailbox-checkbox"},H={class:"form-check"},I=["id"],B=["for"],E={class:"mailbox-message"},P={class:"mailbox-sender"},T={class:"mailbox-sender-name"},J={class:"mailbox-time"},L={class:"mailbox-title"},M={class:"mailbox-desc"},R={key:1,class:"mailbox-list-item"},Q={class:"mailbox-content"};function U(G,s,V,Y,m,O){const l=b("RouterLink"),u=b("perfect-scrollbar");return n(),r("div",y,[e("div",C,[s[5]||(s[5]=e("div",{class:"mailbox-toolbar-item"},[e("span",{class:"mailbox-toolbar-text"},"Mailboxes")],-1)),e("div",q,[i(l,{to:"/email/inbox",class:"mailbox-toolbar-link active"},{default:o(()=>s[0]||(s[0]=[t("Inbox")])),_:1})]),e("div",A,[i(l,{to:"/email/inbox",class:"mailbox-toolbar-link"},{default:o(()=>s[1]||(s[1]=[t("Sent")])),_:1})]),e("div",w,[i(l,{to:"/email/inbox",class:"mailbox-toolbar-link"},{default:o(()=>s[2]||(s[2]=[t("Drafts (1)")])),_:1})]),e("div",j,[i(l,{to:"/email/inbox",class:"mailbox-toolbar-link"},{default:o(()=>s[3]||(s[3]=[t("Junk")])),_:1})]),e("div",z,[i(l,{to:"/mail/compose",class:"mailbox-toolbar-link"},{default:o(()=>s[4]||(s[4]=[t("New Message "),e("i",{class:"fa fa-pen fs-12px ms-1"},null,-1)])),_:1})])]),e("div",N,[e("div",S,[i(u,{class:"h-100"},{default:o(()=>[e("div",D,[m.mailData?(n(!0),r(h,{key:0},x(m.mailData,a=>(n(),r("div",{class:f(["mailbox-list-item",{"has-attachment":a.hasAttachment,unread:a.unread,active:a.active}])},[e("div",F,[e("div",H,[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"mailCheckbox"+a.id},null,8,I),e("label",{class:"form-check-label",for:"mailCheckbox"+a.id},null,8,B)])]),e("div",E,[i(l,{to:"/email/detail",class:"mailbox-list-item-link"},{default:o(()=>[e("div",P,[e("span",T,c(a.sender),1),e("span",J,c(a.time),1)]),e("div",L,c(a.title),1),e("div",M,c(a.desc),1)]),_:2},1024)])],2))),256)):(n(),r("div",R," No records found "))])]),_:1})]),e("div",Q,[i(u,{class:"h-100"},{default:o(()=>s[6]||(s[6]=[e("div",{class:"mailbox-detail"},[e("div",{class:"mailbox-detail-header"},[e("div",{class:"d-flex"},[e("a",{href:"#"},[e("img",{src:g,alt:"",width:"40",class:"rounded-circle"})]),e("div",{class:"flex-fill ms-3"},[e("div",{class:"d-lg-flex align-items-center"},[e("div",{class:"flex-1"},[e("div",{class:"fw-600"},"John Smith <support@seantheme.com>"),e("div",{class:"fs-13px"},[e("span",{class:"me-1"},"to"),t(),e("a",{href:"#",class:"text-decoration-none"},"support@seantheme.com"),t(", "),e("a",{href:"#",class:"text-decoration-none"},"seantheme@admin.com")])]),e("div",{class:"fs-12px text-white text-opacity-50 text-lg-end mt-lg-0 mt-3"},[t("Nov 27, 2022 "),e("span",{class:"d-none d-lg-inline"},[e("br")]),t("at 7.00pm")])])])])]),e("div",{class:"mailbox-detail-content"},[e("h4",{class:"mb-3"},"Your payment is received"),e("div",{class:"mailbox-detail-attachment"},[e("div",{class:"mailbox-attachment"},[e("a",{href:"#"},[e("div",{class:"document-file"},[e("i",{class:"fa fa-file-archive"})]),e("div",{class:"document-name"},"invoice.zip")])]),e("div",{class:"mailbox-attachment"},[e("a",{href:"#"},[e("div",{class:"document-file"},[e("i",{class:"fa fa-file-video"})]),e("div",{class:"document-name"},"video.mp4")])]),e("div",{class:"mailbox-attachment"},[e("a",{href:"#"},[e("div",{class:"document-file"},[e("img",{src:_,alt:""})]),e("div",{class:"document-name"},"image.jpg")])])]),e("div",{class:"mb-3"},[e("a",{href:"#",class:"btn btn-rounded px-3 btn-sm bg-theme bg-opacity-20 text-theme fw-600 rounded"},"Download")]),e("div",{class:"mailbox-detail-body"},[t(" Hi Dear Customer,"),e("br"),e("br"),t(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor nisi, vel auctor orci. "),e("br"),t(" Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac enim porttitor vestibulum vitae at erat."),e("br"),e("br"),t(" Curabitur auctor non orci a molestie. Nunc non justo quis orci viverra pretium id ut est. "),e("br"),t(" Nullam vitae dolor id enim consequat fermentum. Ut vel nibh tellus. "),e("br"),t(" Duis finibus ante et augue fringilla, vitae scelerisque tortor pretium. "),e("br"),t(" Phasellus quis eros erat. Nam sed justo libero."),e("br"),e("br"),t(" Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."),e("br"),t(" Sed tempus dapibus libero ac commodo."),e("br"),e("br"),e("br"),t(" Regards,"),e("br"),t(" Twitter Inc,"),e("br"),t(" 795 Folsom Ave, Suite 600"),e("br"),t(" San Francisco, CA 94107"),e("br"),t(" P: (123) 456-7890"),e("br")])])],-1)])),_:1})])])])}const K=p(k,[["render",U]]);export{K as default};
