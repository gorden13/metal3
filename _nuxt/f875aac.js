(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{267:function(e,t,n){var map={"./review_image.png":312};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=c,e.exports=o,o.id=267},312:function(e,t,n){e.exports=n.p+"img/review_image.e130a6b.png"},363:function(e,t,n){"use strict";n.r(t);n(19);var o=n(223),c={components:{VueSlickCarousel:n.n(o).a},data:function(){return{isVisibleFormPopup:!1,isVisiblePopup:!1,name:null,phone:null,confChecked:!1,items:[{img:"review_image"},{img:"review_image"},{img:"review_image"}]}},methods:{openPopupForm:function(){this.isVisibleFormPopup=!0},closePopupForm:function(){var e=this,t="Необходимо указать",n=[];this.phone||n.push("".concat(t," телефон")),this.name||n.push("".concat(t," имя")),this.confChecked||n.push("Необходимо дать согласие на передачу информации"),n.length,this.$sendMail(),this.isVisibleFormPopup=!1,setTimeout((function(){e.isVisiblePopup=!0}),200)},closePopup:function(){this.isVisiblePopup=!1}}},r=n(33),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"reviews"},[o("div",{staticClass:"reviews_wrap"},[o("h2",{staticClass:"reviews__title"},[e._v("\n      Отзывы и благодарственные письма\n    ")]),e._v(" "),o("div",{staticClass:"reviews__items"},e._l(e.items,(function(e,t){return o("div",{key:t,staticClass:"reviews__item"},[o("img",{attrs:{src:n(267)("./"+e.img+".png"),alt:"Отзыв"}})])})),0),e._v(" "),o("div",{staticClass:"reviews__mobile-items carousel"},[o("VueSlickCarousel",{attrs:{infinite:!0,draggable:!1,slidesToShow:1,slidesToScroll:1,speed:500,fade:!1,edgeFriction:.35,dots:!0,arrows:!0}},e._l(e.items,(function(e,t){return o("div",{key:t,staticClass:"reviews__mobile-item"},[o("img",{attrs:{src:n(267)("./"+e.img+".png"),alt:"Отзыв"}})])})),0)],1),e._v(" "),o("div",{staticClass:"reviews__btn-block"},[o("button",{attrs:{type:"button"},on:{click:e.openPopupForm}},[e._v("\n        Получить проект и расчет\n      ")])])]),e._v(" "),e.isVisibleFormPopup?o("Popup",{attrs:{type:"form"},on:{"close-hard":function(t){e.isVisibleFormPopup=!1},"close-popup":e.closePopupForm},scopedSlots:e._u([{key:"title",fn:function(){return[o("h4",{staticClass:"form__title"},[e._v("\n        Хотите получить проект и расчёт?\n      ")])]},proxy:!0},{key:"text",fn:function(){return[o("p",{staticClass:"form__text"},[e._v("\n        Оставьте заявку и наш менеджер произведёт точные расчёты для Вашего навеса!\n      ")])]},proxy:!0},{key:"fields",fn:function(){return[o("div",{staticClass:"form__fields"},[o("div",{staticClass:"form__field w100"},[o("label",[e._v("Ваше имя")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Укажите ваше имя"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form__field w100"},[o("label",[e._v("Ваш телефон")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"Укажите ваш телефон"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"form__conf-block"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.confChecked,expression:"confChecked"}],staticClass:"custom-checkbox",attrs:{id:"conf8",type:"checkbox"},domProps:{checked:Array.isArray(e.confChecked)?e._i(e.confChecked,null)>-1:e.confChecked},on:{change:function(t){var n=e.confChecked,o=t.target,c=!!o.checked;if(Array.isArray(n)){var r=e._i(n,null);o.checked?r<0&&(e.confChecked=n.concat([null])):r>-1&&(e.confChecked=n.slice(0,r).concat(n.slice(r+1)))}else e.confChecked=c}}}),e._v(" "),o("label",{attrs:{for:"conf8"}},[e._v("Я согласен(а) с условиями передачи информации")])])]},proxy:!0},{key:"btn-block",fn:function(){return[o("div",{staticClass:"popup__btn-block"},[o("button",{attrs:{type:"button"},on:{click:e.closePopupForm}},[e._v("\n          заказать расчёт\n        ")])])]},proxy:!0}],null,!1,1086538050)}):e._e(),e._v(" "),e.isVisiblePopup?o("Popup",{on:{"close-hard":function(t){e.isVisiblePopup=!1},"close-popup":function(t){e.isVisiblePopup=!1}},scopedSlots:e._u([{key:"title",fn:function(){return[o("h4",{staticClass:"simple__title"},[e._v("\n        Спасибо за заявку!\n      ")])]},proxy:!0},{key:"text",fn:function(){return[o("p",{staticClass:"simple__text"},[e._v("\n        в ближайшее время с вами свяжется наш менеджер\n      ")])]},proxy:!0},{key:"btn-block",fn:function(){return[o("div",{staticClass:"popup__btn-block"},[o("button",{attrs:{type:"button"},on:{click:function(t){e.isVisiblePopup=!1}}},[e._v("\n          готово\n        ")])])]},proxy:!0}],null,!1,971095968)}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Popup:function(){return n.e(16).then(n.bind(null,350)).then((function(e){return e.default||e}))}})}}]);