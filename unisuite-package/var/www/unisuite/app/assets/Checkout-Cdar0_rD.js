import{_ as H,E as z,M as N,c as r,a as t,d as b,w as v,F as m,p as h,t as a,b as x,G as O,q as _,x as M,l as Q,z as p,r as g,o as d,n as k,i as S,v as q,H as F,I}from"./index-CgD85CHz.js";import{a as A}from"./axios-BimPEqV4.js";const f=z(),P={data(){return{menu:"",order:"",orderHistory:"",orderNo:"#0000",tableNo:"0",modal:"",modalData:"",modalQuantity:"",modalSelectedSize:"",modalSelectedAddon:[],mobileSidebarToggled:!1}},mounted(){f.appSidebarHide=!0,f.appHeaderHide=!0,f.appContentClass="p-0",f.appContentFullHeight=!0,A.get("/assets/data/pos/customer-order.json").then(l=>{this.menu=l.data,this.order=l.data.order,this.orderNo=l.data.orderNo,this.orderHistory=l.data.orderHistory,this.tableNo=l.data.tableNo})},beforeUnmount(){f.appSidebarHide=!1,f.appHeaderHide=!1,f.appContentClass="",f.appContentFullHeight=!1},methods:{toggleMobileSidebar:function(){this.mobileSidebarToggled=!this.mobileSidebarToggled},getOrderTotal:function(){return this.order?this.order.length:0},getOrderHistoryTotal:function(){return this.orderHistory?this.orderHistory.length:0},getSubTotalPrice:function(){for(var l=0,s=0;s<this.order.length;s++)l+=parseFloat(this.order[s].price)*parseInt(this.order[s].quantity);return l.toFixed(2)},getTaxesPrice:function(){for(var l=0,s=0;s<this.order.length;s++)l+=parseFloat(this.order[s].price)*parseInt(this.order[s].quantity)*.06;return l.toFixed(2)},getTotalPrice:function(){for(var l=0,s=0;s<this.order.length;s++)l+=parseFloat(this.order[s].price)*parseInt(this.order[s].quantity),l+=parseFloat(this.order[s].price)*parseInt(this.order[s].quantity)*.06;return l.toFixed(2)},deductQty:function(l,s){l.preventDefault();for(var o=0;o<this.order.length;o++)if(this.order[o].id==s){var u=parseInt(this.order[o].quantity)-1;u<1&&(u=1),this.order[o].quantity=u}},addQty:function(l,s){l.preventDefault();for(var o=0;o<this.order.length;o++)if(this.order[o].id==s){var u=parseInt(this.order[o].quantity)+1;this.order[o].quantity=u}},showType:function(l,s){l.preventDefault();for(var o=0;o<this.menu.category.length;o++)this.menu.category[o].type==s?this.menu.category[o].active=!0:this.menu.category[o].active=!1;for(var o=0;o<this.menu.food.length;o++)this.menu.food[o].type==s||s=="all"?this.menu.food[o].hide=!1:this.menu.food[o].hide=!0},showFoodModal:function(l,s){l.preventDefault();for(var o=0;o<this.menu.food.length;o++)this.menu.food[o].id==s&&(this.modalData=this.menu.food[o]);this.modalData.options&&this.modalData.options.size&&(this.modalSelectedSize=this.modalData.options.size[0].text),this.modalQuantity=1,this.modalSelectedAddon=[],this.modal=new N(this.$refs.modalPosItem),this.modal.show()},addModalQty:function(l){l.preventDefault(),this.modalQuantity=this.modalQuantity+1},deductModalQty:function(l){l.preventDefault();var s=parseInt(this.modalQuantity)-1;s<1&&(s=1),this.modalQuantity=s},addToCart:function(l){l.preventDefault(),this.modal.hide();var s=[];if(this.modalSelectedSize){var o={key:"size",value:this.modalSelectedSize};s.push(o)}if(this.modalSelectedAddon)for(var u=0;u<this.modalSelectedAddon.length;u++){var o={key:"addon",value:this.modalSelectedAddon[u]};s.push(o)}this.order.push({id:this.order.length+1,image:this.modalData.image,title:this.modalData.title,price:this.modalData.price,quantity:this.modalQuantity,options:s}),setTimeout(()=>{this.$refs.posSidebarBody.$el.scrollTop=9999,this.$refs.posSidebarBody.ps.update()},500)},toggleConfirmation:function(l,s,o){l.preventDefault();for(var u=0;u<this.order.length;u++)this.order[u].id==s&&(this.order[u].confirmation=o)},removeOrder:function(l,s){l.preventDefault();for(var o=0;o<this.order.length;o++)this.order[o].id==s&&this.order.splice(o,1)}}},V={class:"pos-container"},j={class:"pos-menu"},B={class:"logo"},U={class:"nav-container"},R={class:"nav nav-tabs"},L={class:"nav-item"},E=["onClick"],G={class:"pos-content"},Y={class:"pos-content-container h-100"},J={class:"row gx-4"},K={key:0,class:"col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"},W=["onClick"],X={class:"info"},Z={class:"title"},$={class:"desc"},tt={class:"price"},st={key:0,class:"not-available-text"},et={class:"pos-sidebar"},ot={class:"h-100 d-flex flex-column p-0"},lt={class:"pos-sidebar-header"},it={class:"back-btn"},at={class:"title"},nt={class:"order"},dt={class:"pos-sidebar-nav"},rt={class:"nav nav-tabs nav-fill"},ct={class:"nav-item"},ut={class:"nav-link active",href:"#","data-bs-toggle":"tab","data-bs-target":"#newOrderTab"},mt={class:"nav-item"},ft={class:"nav-link",href:"#","data-bs-toggle":"tab","data-bs-target":"#orderHistoryTab"},pt={class:"tab-pane fade h-100 show active",id:"newOrderTab"},ht={class:"pos-order"},vt={class:"pos-order-product"},bt={class:"flex-1"},_t={class:"h6 mb-1"},gt={class:"small"},yt={class:"small mb-2"},xt={class:"d-flex"},kt=["onClick"],St=["onUpdate:modelValue"],wt=["onClick"],Ct={class:"pos-order-price d-flex flex-column"},Tt={class:"text-end mt-auto"},Dt=["onClick"],Ht={key:0,class:"pos-order-confirmation text-center d-flex flex-column justify-content-center"},zt=["onClick"],Nt=["onClick"],Ot={key:1,class:"h-100 d-flex align-items-center justify-content-center text-center p-20"},Mt={class:"pos-sidebar-footer"},Qt={class:"d-flex align-items-center mb-2"},qt={class:"flex-1 text-end h6 mb-0"},Ft={class:"d-flex align-items-center"},It={class:"flex-1 text-end h6 mb-0"},At={class:"d-flex align-items-center mb-2"},Pt={class:"flex-1 text-end h4 mb-0"},Vt={class:"badge"},jt={class:"modal modal-pos fade",ref:"modalPosItem"},Bt={class:"modal-dialog modal-lg"},Ut={class:"modal-content border-0"},Rt={class:"modal-pos-product"},Lt={class:"modal-pos-product-img"},Et={class:"modal-pos-product-info d-flex flex-column"},Gt={class:"h4 mb-2"},Yt={class:"text-body text-opacity-50 mb-2"},Jt={class:"h4 mb-3"},Kt={class:"d-flex mb-3"},Wt=["value"],Xt={key:0,class:"mb-2"},Zt={class:"option-list"},$t={class:"option"},ts=["id","value"],ss=["for"],es={class:"option-text"},os={class:"option-price"},ls={key:1,class:"mb-2"},is={class:"option-list"},as={class:"option"},ns=["name","value","id"],ds=["for"],rs={class:"option-text"},cs={class:"option-price"};function us(l,s,o,u,n,c){const C=g("RouterLink"),w=g("perfect-scrollbar"),T=g("card-body"),D=g("card");return d(),r(m,null,[t("div",{class:_(["pos pos-with-menu pos-with-sidebar",{"pos-mobile-sidebar-toggled":n.mobileSidebarToggled}])},[t("div",V,[t("div",j,[t("div",B,[b(C,{to:"/"},{default:v(()=>s[7]||(s[7]=[t("div",{class:"logo-img"},[t("i",{class:"fa fa-bowl-rice"})],-1),t("div",{class:"logo-text"},"Pine & Dine",-1)])),_:1})]),t("div",U,[b(w,{class:"h-100"},{default:v(()=>[t("ul",R,[(d(!0),r(m,null,h(n.menu.category,e=>(d(),r("li",L,[t("a",{class:_(["nav-link",{active:e.active}]),href:"#",onClick:i=>c.showType(i,e.type)},[t("i",{class:_(e.icon)},null,2),x(" "+a(e.text),1)],10,E)]))),256))])]),_:1})])]),t("div",G,[t("div",Y,[t("div",J,[(d(!0),r(m,null,h(n.menu.food,e=>(d(),r(m,null,[e.hide?p("",!0):(d(),r("div",K,[t("a",{href:"#",class:_(["pos-product",{"not-available":!e.available}]),onClick:i=>c.showFoodModal(i,e.id)},[t("div",{class:"img",style:k({backgroundImage:"url("+e.image+")"})},null,4),t("div",X,[t("div",Z,a(e.title),1),t("div",$,a(e.description),1),t("div",tt,"$"+a(e.price),1)]),e.available?p("",!0):(d(),r("div",st,s[8]||(s[8]=[t("div",null,"Not Available",-1)])))],10,W)]))],64))),256))])])]),t("div",et,[t("div",ot,[t("div",lt,[t("div",it,[t("button",{type:"button",onClick:s[0]||(s[0]=e=>c.toggleMobileSidebar()),class:"btn"},s[9]||(s[9]=[t("i",{class:"bi bi-chevron-left"},null,-1)]))]),s[11]||(s[11]=t("div",{class:"icon"},[t("i",{class:"fa fa-plate-wheat"})],-1)),t("div",at,"Table "+a(n.tableNo),1),t("div",nt,[s[10]||(s[10]=x("Order: ")),t("b",null,a(n.orderNo),1)])]),t("div",dt,[t("ul",rt,[t("li",ct,[t("a",ut,"New Order ("+a(c.getOrderTotal())+")",1)]),t("li",mt,[t("a",ft,"Order History ("+a(c.getOrderHistoryTotal())+")",1)])])]),b(w,{ref:"posSidebarBody",class:"pos-sidebar-body tab-content"},{default:v(()=>[t("div",pt,[n.order.length>0?(d(!0),r(m,{key:0},h(n.order,e=>(d(),r("div",ht,[t("div",vt,[t("div",{class:"img",style:k({backgroundImage:"url("+e.image+")"})},null,4),t("div",bt,[t("div",_t,a(e.title),1),t("div",gt,"$"+a(e.price),1),t("div",yt,[(d(!0),r(m,null,h(e.options,i=>(d(),r("div",null,"- "+a(i.key)+": "+a(i.value),1))),256))]),t("div",xt,[t("a",{href:"#",class:"btn btn-secondary btn-sm",onClick:i=>c.deductQty(i,e.id)},s[12]||(s[12]=[t("i",{class:"fa fa-minus"},null,-1)]),8,kt),S(t("input",{type:"text","onUpdate:modelValue":i=>e.quantity=i,class:"form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center"},null,8,St),[[q,e.quantity]]),t("a",{href:"#",class:"btn btn-secondary btn-sm",onClick:i=>c.addQty(i,e.id)},s[13]||(s[13]=[t("i",{class:"fa fa-plus"},null,-1)]),8,wt)])])]),t("div",Ct,[t("div",null,"$"+a((e.price*e.quantity).toFixed(2)),1),t("div",Tt,[t("a",{href:"#",onClick:i=>c.toggleConfirmation(i,e.id,!0),class:"btn btn-default btn-sm"},s[14]||(s[14]=[t("i",{class:"fa fa-trash"},null,-1)]),8,Dt)])]),e.confirmation?(d(),r("div",Ht,[s[15]||(s[15]=t("div",{class:"mb-1"},[t("i",{class:"fa fa-trash fs-36px lh-1"})],-1)),s[16]||(s[16]=t("div",{class:"mb-2"},"Remove this item?",-1)),t("div",null,[t("a",{href:"#",onClick:i=>c.toggleConfirmation(i,e.id,!1),class:"btn btn-default btn-sm ms-auto me-2 width-100px"},"No",8,zt),t("a",{href:"#",onClick:i=>c.removeOrder(i,e.id),class:"btn btn-theme btn-sm width-100px"},"Yes",8,Nt)])])):p("",!0)]))),256)):(d(),r("div",Ot,s[17]||(s[17]=[t("div",null,[t("div",{class:"mb-3 mt-n5"},[t("i",{class:"fa fa-utensils text-body text-opacity-25",style:{"font-size":"5em"}})]),t("h5",null,"No order found")],-1)])))]),s[18]||(s[18]=t("div",{class:"tab-pane fade h-100",id:"orderHistoryTab"},[t("div",{class:"h-100 d-flex align-items-center justify-content-center text-center p-20"},[t("div",null,[t("div",{class:"mb-3 mt-n5"},[t("i",{class:"fa fa-shopping-bag text-body text-opacity-25",style:{"font-size":"5em"}})]),t("h5",null,"No order history found")])])],-1))]),_:1},512),t("div",Mt,[t("div",Qt,[s[19]||(s[19]=t("div",null,"Subtotal",-1)),t("div",qt,"$"+a(c.getSubTotalPrice()),1)]),t("div",Ft,[s[20]||(s[20]=t("div",null,"Taxes (6%)",-1)),t("div",It,"$"+a(c.getTaxesPrice()),1)]),s[22]||(s[22]=t("hr",null,null,-1)),t("div",At,[s[21]||(s[21]=t("div",null,"Total",-1)),t("div",Pt,"$"+a(c.getTotalPrice()),1)]),s[23]||(s[23]=O('<div class="mt-3"><div class="d-flex"><a href="#" class="btn btn-default w-70px me-10px d-flex align-items-center justify-content-center"><span><i class="fa fa-bell fa-lg my-10px d-block"></i><span class="small fw-semibold">Service</span></span></a><a href="#" class="btn btn-default w-70px me-10px d-flex align-items-center justify-content-center"><span><i class="fa fa-receipt fa-fw fa-lg my-10px d-block"></i><span class="small fw-semibold">Bill</span></span></a><a href="#" class="btn btn-theme flex-fill d-flex align-items-center justify-content-center"><span><i class="fa fa-cash-register fa-lg my-10px d-block"></i><span class="small fw-semibold">Submit Order</span></span></a></div></div>',1))])])])])],2),t("a",{href:"#",class:"pos-mobile-sidebar-toggler",onClick:s[1]||(s[1]=e=>c.toggleMobileSidebar())},[s[24]||(s[24]=t("i",{class:"bi bi-bag"},null,-1)),t("span",Vt,a(c.getOrderTotal()),1)]),t("div",jt,[t("div",Bt,[t("div",Ut,[t("form",{onSubmit:s[6]||(s[6]=M((...e)=>c.addToCart&&c.addToCart(...e),["prevent"]))},[n.modalData?(d(),Q(D,{key:0},{default:v(()=>[b(T,{class:"p-0"},{default:v(()=>[s[32]||(s[32]=t("a",{href:"#","data-bs-dismiss":"modal",class:"btn-close position-absolute top-0 end-0 m-4"},null,-1)),t("div",Rt,[t("div",Lt,[t("div",{class:"img",style:k({backgroundImage:"url("+n.modalData.image+")"})},null,4)]),t("div",Et,[t("div",Gt,a(n.modalData.title),1),t("div",Yt,a(n.modalData.description),1),t("div",Jt,"$"+a(n.modalData.price),1),t("div",Kt,[t("a",{href:"#",class:"btn btn-secondary",onClick:s[2]||(s[2]=e=>c.deductModalQty(e))},s[25]||(s[25]=[t("i",{class:"fa fa-minus"},null,-1)])),t("input",{type:"text",class:"form-control w-50px fw-bold mx-2 text-center",name:"qty",value:n.modalQuantity},null,8,Wt),t("a",{href:"#",class:"btn btn-secondary",onClick:s[3]||(s[3]=e=>c.addModalQty(e))},s[26]||(s[26]=[t("i",{class:"fa fa-plus"},null,-1)]))]),n.modalData.options?(d(),r(m,{key:0},[s[29]||(s[29]=t("hr",{class:"opacity-1"},null,-1)),n.modalData.options.size?(d(),r("div",Xt,[s[27]||(s[27]=t("div",{class:"fw-bold"},"Size:",-1)),t("div",Zt,[(d(!0),r(m,null,h(n.modalData.options.size,(e,i)=>(d(),r("div",$t,[S(t("input",{type:"radio",id:"size["+i+"]",name:"size",class:"option-input","onUpdate:modelValue":s[4]||(s[4]=y=>n.modalSelectedSize=y),value:e.text},null,8,ts),[[F,n.modalSelectedSize]]),t("label",{class:"option-label",for:"size["+i+"]"},[t("span",es,a(e.text),1),t("span",os,"+"+a(e.price),1)],8,ss)]))),256))])])):p("",!0),n.modalData.options.addon?(d(),r("div",ls,[s[28]||(s[28]=t("div",{class:"fw-bold"},"Add On:",-1)),t("div",is,[(d(!0),r(m,null,h(n.modalData.options.addon,(e,i)=>(d(),r("div",as,[S(t("input",{type:"checkbox",name:"addon["+i+"]",value:e.text,"onUpdate:modelValue":s[5]||(s[5]=y=>n.modalSelectedAddon=y),class:"option-input",id:"addon["+i+"]"},null,8,ns),[[I,n.modalSelectedAddon]]),t("label",{class:"option-label",for:"addon["+i+"]"},[t("span",rs,a(e.text),1),t("span",cs,"+"+a(e.price),1)],8,ds)]))),256))])])):p("",!0)],64)):p("",!0),s[30]||(s[30]=t("hr",{class:"opacity-1"},null,-1)),s[31]||(s[31]=t("div",{class:"row"},[t("div",{class:"col-4"},[t("a",{href:"#",class:"btn btn-default fw-semibold mb-0 d-block py-3 w-100","data-bs-dismiss":"modal"},"Cancel")]),t("div",{class:"col-8"},[t("button",{type:"submit",class:"btn btn-theme fw-semibold d-flex justify-content-center align-items-center py-3 m-0 w-100"},[x("Add to cart "),t("i",{class:"fa fa-plus ms-2 my-n3"})])])],-1))])])]),_:1})]),_:1})):p("",!0)],32)])])],512)],64)}const ps=H(P,[["render",us]]);export{ps as default};
