(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],[,,,,function(e,t,a){e.exports={header:"Header_header__3uZM9",header__wrapper:"Header_header__wrapper__vQKkf",header__nav:"Header_header__nav__3JeZP",header__nav_active:"Header_header__nav_active__Hx36i",header__list:"Header_header__list__1UdxG",header__link:"Header_header__link__2V0oV",header__link_active:"Header_header__link_active__3Gl6T",header__login:"Header_header__login__YSFML",header__right:"Header_header__right__21RYd",header__search:"Header_header__search__19NwG",header__search_active:"Header_header__search_active__1s0KQ",search__wrap:"Header_search__wrap__1xtz9",header__logo:"Header_header__logo__37IEL",header__searched_list:"Header_header__searched_list__2iVPg",header__searched_list_active:"Header_header__searched_list_active__3bcTW",header__searched_item:"Header_header__searched_item__2wJOX",header__searched_link:"Header_header__searched_link__315xd",header__searched_info:"Header_header__searched_info__nTkK-",header__searched_indicator:"Header_header__searched_indicator__3upX8",header__search_btn:"Header_header__search_btn__hgIjg",search:"Header_search__-HKzH",search__active:"Header_search__active__1NcwJ",burger:"Header_burger__31zbt",burger_active:"Header_burger_active__2cHHH"}},,,,,,function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__1E0e4",sidebar_close:"Sidebar_sidebar_close__24mwi",sidebar__item:"Sidebar_sidebar__item__3ND4e",sidebar__title:"Sidebar_sidebar__title__1FSBL",sidebar__subtitle:"Sidebar_sidebar__subtitle__1FsE7",sidebar__list:"Sidebar_sidebar__list__23mBg",sidebar__list_item:"Sidebar_sidebar__list_item__2RZb8",sidebar__link:"Sidebar_sidebar__link__2nwyd",sidebar__link_active:"Sidebar_sidebar__link_active__2OEmG"}},function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a.n(n),c=a(6),i="https://api.themoviedb.org/3",s="api_key=5daf90e431960f20b1aca24657c54316",o="&language=ru-RU",l={getMovies:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l,_,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"movie",a=d.length>1&&void 0!==d[1]?d[1]:"popular",n=d.length>2&&void 0!==d[2]?d[2]:"1",e.next=5,fetch("".concat(i,"/").concat(t,"/").concat(a,"?").concat(s).concat(o,"&page=").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:return l=e.sent,_=l.results,u=l.total_pages,e.abrupt("return",[_,u]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getGenres:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"movie",e.next=3,fetch("".concat(i,"/genre/").concat(t,"/list?").concat(s).concat(o));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.genres,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieWithGenre:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l,_,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"movie",a=d.length>1&&void 0!==d[1]?d[1]:80,n=d.length>2&&void 0!==d[2]?d[2]:"1",e.next=5,fetch("".concat(i,"/discover/").concat(t,"?").concat(s).concat(o,"&sort_by=popularity.desc&page=500&with_genres=").concat(a,"&page=").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:return l=e.sent,_=l.results,u=l.total_pages,e.abrupt("return",[_,u]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),search:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,l,_,u,d,h=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>2&&void 0!==h[2]?h[2]:"1",e.next=3,fetch("".concat(i,"/search/").concat(a,"?").concat(s).concat(o,"&query=").concat(t,"&page=").concat(n));case 3:return c=e.sent,e.next=6,c.json();case 6:return l=e.sent,_=l.results,u=l.total_pages,d=l.total_results,e.abrupt("return",[_,u,d]);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getMovie:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"movie",a=l.length>1?l[1]:void 0,e.next=4,fetch("".concat(i,"/").concat(t,"/").concat(a,"?").concat(s).concat(o));case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getCredits:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"movie",a=l.length>1?l[1]:void 0,e.next=4,fetch("".concat(i,"/").concat(t,"/").concat(a,"/credits?").concat(s).concat(o));case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAnotherMovieInfo:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,o,l,_,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"movie",a=d.length>1?d[1]:void 0,n=d.length>2?d[2]:void 0,c=d.length>3&&void 0!==d[3]?d[3]:"",e.next=6,fetch("".concat(i,"/").concat(t,"/").concat(a,"/").concat(n,"?").concat(s).concat(c));case 6:return o=e.sent,e.next=9,o.json();case 9:if(l=e.sent,_=l.results,u=l.keywords,void 0===_){e.next=16;break}return e.abrupt("return",_);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMoviesWithKeywords:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,l,_,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"movie",a=u.length>1?u[1]:void 0,n=u.length>2&&void 0!==u[2]?u[2]:1,e.next=5,fetch("".concat(i,"/discover/").concat(t,"?").concat(s).concat(o,"&sort_by=popularity.desc&with_keywords=").concat(a,"&page=").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:return l=e.sent,_=l.results,e.abrupt("return",_);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getNewToken:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/authentication/token/new?").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.request_token,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getSessionId:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/authentication/session/new?request_token=").concat(t,"&").concat(s));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},,,,function(e,t,a){e.exports={pagination:"Pagination_pagination__3YGWL",pagination__list:"Pagination_pagination__list__2Xg4E",pagination__item:"Pagination_pagination__item__2Igva",pagination__item_active:"Pagination_pagination__item_active__1Ickp",pagination__link:"Pagination_pagination__link__7q00J",pagination__prev:"Pagination_pagination__prev__Jtn-u",pagination__next:"Pagination_pagination__next__1B197",pagination__disabled:"Pagination_pagination__disabled__2Opl6"}},,,function(e,t,a){e.exports={cards:"Cards_cards__2kQZ2",cards__list:"Cards_cards__list__s_z0X",item:"Cards_item__mdb5-",item__hovered:"Cards_item__hovered__aIuH8",item__image:"Cards_item__image__3LmF0",item__rating:"Cards_item__rating__26_BX",item__bottom:"Cards_item__bottom__3zWlH",item__title:"Cards_item__title__a6SSw",item__info:"Cards_item__info__1IV03",cards__pagination:"Cards_cards__pagination__ksePk",cards__pagination_item:"Cards_cards__pagination_item__33Eog",cards__pagination_link:"Cards_cards__pagination_link__1Tmft"}},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3),r=a(1),c=(a(0),a(33)),i=function(){var e=Object(c.b)({loading:!0,indicator:Object(r.jsx)(c.a,{width:"80"})}),t=e.containerProps,a=e.indicatorEl;return Object(r.jsx)("section",Object(n.a)(Object(n.a)({style:{width:"100%",textAlign:"center"}},t),{},{children:a}))}},,function(e,t,a){e.exports={main:"Main_main__R59FI",main__offer:"Main_main__offer__2Vovb",main__search:"Main_main__search__1-2wC",main__title:"Main_main__title__qCF9I",search__btn:"Main_search__btn__34kBV",search__btn_tooltip:"Main_search__btn_tooltip__Qfl0w"}},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=(a(0),a(40)),c=a.n(r),i=function(e){var t=e.children;return Object(n.jsx)("div",{className:c.a.container,children:t})}},,,,,function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return g}));var n=a(2),r=a.n(n),c=a(9),i=a(6),s=a(3),o=a(11),l="react-movie/mainSearch/GET_SEARCH_RESULTS",_="react-movie/mainSearch/SET_INITIAL_SETTINGS",u="react-movie/mainSearch/UPDATE_SEARCH_TEXT",d="react-movie/mainSearch/ZERO_OUT_SEARCH_RESULTS",h={searchText:"",results:[],totalPages:1,totalResults:0,currentPage:1,isFetchingResults:!0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{results:t.results,totalPages:t.totalPages,totalResults:t.totalResults,isFetchingResults:!1});case u:return Object(s.a)(Object(s.a)({},e),{},{searchText:t.text});case _:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.page,isFetchingResults:!0});case d:return Object(s.a)(Object(s.a)({},e),{},{results:[],totalResults:0});default:return e}},v=function(e){return{type:u,text:e}},b=function(e,t,a){return{type:l,results:e,totalPages:t,totalResults:a}},p=function(e){return{type:_,page:e}},f=function(){return{type:d}},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(){var n=Object(i.a)(r.a.mark((function n(i){var s,l,_,u,d;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(p(a)),n.next=4,o.a.search(e,t,a);case 4:s=n.sent,l=Object(c.a)(s,3),_=l[0],u=l[1],d=l[2],i(b(_,u,d)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),alert("Please refresh the page! Unfortunately, we cannot load the search results!",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}},,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(9),c=a(0),i=a(15),s=a.n(i),o=a(8),l=function(e){var t=e.totalPages,a=e.currentPage,i=e.rangeOfItems,l=void 0===i?10:i,_=e.genreFormat,u=e.url,d=void 0===u?"":u,h=Object(c.useState)(l),j=Object(r.a)(h,2),v=j[0],b=j[1],p=Math.ceil(t/v);Object(c.useEffect)((function(){var e=window.matchMedia("(max-width: 768px)"),t=function(){e.matches?b(4):b(10)};return e.addListener(t),t(),k(m(p,v,a)),function(){e.removeListener(t)}}),[a,v,p]);for(var f=[],g=1;g<=t;g++)f.push(g);var m=function(e,t,a){for(var n=1;n<=e;n++)if((n-1)*t+1<=a&&a<=n*t)return n},O=Object(c.useState)(m(p,v,a)),x=Object(r.a)(O,2),w=x[0],k=x[1],M=(w-1)*v+1,S=w*v;return Object(n.jsxs)("div",{className:s.a.pagination,children:[Object(n.jsx)("button",{className:w>1?"".concat(s.a.pagination__prev):"".concat(s.a.pagination__prev," ").concat(s.a.pagination__disabled),onClick:function(){k(w-1)}}),Object(n.jsx)("ul",{className:s.a.pagination__list,children:f.filter((function(e){return e>=M&&e<=S})).map((function(e){return Object(n.jsx)("li",{className:+e===+a?"".concat(s.a.pagination__item," ").concat(s.a.pagination__item_active):"".concat(s.a.pagination__item),children:Object(n.jsx)(o.b,{className:s.a.pagination__link,to:"/".concat(_).concat(""===d?"":"/".concat(d),"/page/").concat(e),children:e})},e)}))}),Object(n.jsx)("button",{className:p>w?"".concat(s.a.pagination__next):"".concat(s.a.pagination__next," ").concat(s.a.pagination__disabled),onClick:function(){k(w+1)}})]})}},function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),r=a(0),c=function(e,t){var a=Object(r.useState)(e),c=Object(n.a)(a,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),i}},function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),r=a(0),c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(r.useState)(t),c=Object(n.a)(a,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){var t=window.matchMedia(e),a=function(){t.matches?s(!0):s(!1)};return t.addListener(a),a(),function(){t.removeListener(a)}}),[e]),i}},function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(2),r=a.n(n),c=a(6),i=a(3),s=a(11),o="react-movie/catalog/GET_MOVIE_INFO",l="react-movie/catalog/LOADING_MOVIE",_={movie:[],credits:[],reviews:[],keywords:[],recommend:[],isFetchingMovie:!0},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{movie:t.movie,credits:t.credits,reviews:t.reviews,keywords:t.keywords,recommend:t.recommend,isFetchingMovie:!1});case l:return Object(i.a)(Object(i.a)({},e),{},{isFetchingMovie:!0});default:return e}},d=function(e,t,a,n,r){return{type:o,movie:e,credits:t,reviews:a,keywords:n,recommend:r}},h=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c,i,o,_,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:l}),a.next=4,s.a.getMovie(e,t);case 4:return c=a.sent,a.next=7,s.a.getCredits(e,t);case 7:return i=a.sent,a.next=10,s.a.getAnotherMovieInfo(e,t,"reviews");case 10:return o=a.sent,a.next=13,s.a.getAnotherMovieInfo(e,t,"keywords");case 13:return _=a.sent,a.next=16,s.a.getAnotherMovieInfo(e,t,"recommendations","&language=ru-RU");case 16:u=a.sent,n(d(c,i,o,_,u)),a.next=23;break;case 20:a.prev=20,a.t0=a.catch(0),alert("Sorry we caannot load info about the movie or tv! Try it later!",a.t0);case 23:case"end":return a.stop()}}),a,null,[[0,20]])})));return function(e){return a.apply(this,arguments)}}()}},,function(e,t,a){e.exports={container:"Container_container__35CeP"}},function(e,t,a){e.exports={main__wrapper:"MainTemplate_main__wrapper__3UBYs"}},function(e,t,a){e.exports={main:"Main_main__1gOzt"}},,,,,,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(25),s=a.n(i),o=a(16),l=a(8),_=(a(53),a(7)),u=a(27),d=a(22),h=a(21),j=a.n(h),v=Object(o.b)((function(e){return{searchText:e.mainSearch.searchText}}),{updateSearchText:u.c})((function(e){var t=e.searchText,a=e.updateSearchText,r=Object(_.f)();return Object(n.jsx)("section",{className:j.a.main,children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:j.a.main__offer,children:[Object(n.jsx)("h1",{className:j.a.main__title,children:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0435 \u043a\u0438\u043d\u043e \u0437\u0434\u0435\u0441\u044c"}),Object(n.jsxs)("div",{className:j.a.main__search,children:[Object(n.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b...",value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&t.length>0&&r.push("/search/movie")}}),Object(n.jsxs)("button",{className:j.a.search__btn,onClick:function(){r.push("/search/movie")},"aria-label":"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0432\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c",disabled:0===t.length,children:["\u041f\u043e\u0438\u0441\u043a",0===t.length&&Object(n.jsx)("span",{className:j.a.search__btn_tooltip,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0432 \u043f\u043e\u0438\u0441\u043a"})]})]})]})})})})),b=a(2),p=a.n(b),f=a(9),g=a(6),m=a(3),O=a(11),x="react-movie/movies/SET_PAGE_PARAMS",w="react-movie/movies/GET_GENRES",k="react-movie/movies/GET_MOVIES",M={sortedMovies:[{name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",link:"popular"},{name:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0441\u043c\u043e\u0442\u0440\u044f\u0442",link:"now_playing"},{name:"\u041b\u0443\u0447\u0448\u0435\u0435",link:"top_rated"},{name:"\u0421\u043a\u043e\u0440\u043e",link:"upcoming"}],sortedTvs:[{name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",link:"popular"},{name:"\u0412 \u044d\u0444\u0438\u0440\u0435",link:"airing_today"},{name:"\u041b\u0443\u0447\u0448\u0435\u0435",link:"top_rated"},{name:"\u041f\u043e \u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u044c\u044e",link:"on_the_air"}],format:["tv","movie"],isFetchingMovies:!0,isFetchingGenres:!0,movies:[],genres:[],currentPage:"1",totalPages:1,url:"popular"},S=function(e,t){return{type:k,movies:e,totalPages:t}},N=function(e,t){return{type:x,filter:e,page:t}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"popular",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";return function(){var n=Object(g.a)(p.a.mark((function n(r){var c,i,s,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(N(t,a)),n.next=4,O.a.getMovies(e,t,a);case 4:c=n.sent,i=Object(f.a)(c,2),s=i[0],o=i[1],r(S(s,o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),alert("Refresh the page! We cannot load movies!",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(g.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.getGenres(e);case 3:n=t.sent,a({type:w,genres:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Refresh the page! We cannot load genres!",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";return function(){var n=Object(g.a)(p.a.mark((function n(r){var c,i,s,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(N(t,a)),n.next=4,O.a.getMovieWithGenre(e,t,a);case 4:c=n.sent,i=Object(f.a)(c,2),s=i[0],o=i[1],r(S(s,o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),alert("Refresh the page! We cannot load movies!",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},T=a(35),I=a(18),z=a.n(I),H=function(e){var t=e.movies,a=e.genres,c=e.genreFormat,i=e.currentPage,s=e.totalPages,o=e.url;Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]);var _=function(e){if(void 0!==e)return e.split("-").reverse().join(".")},u=function(e){var t=[];return e.forEach((function(e){a.forEach((function(a){e===a.id&&t.push(a.name)}))})),t.join(", ")};return Object(n.jsxs)("div",{className:z.a.cards,children:[Object(n.jsx)("ul",{className:z.a.cards__list,children:t.map((function(e){return Object(n.jsxs)("li",{className:z.a.item,children:[Object(n.jsx)("div",{className:z.a.item__image,children:Object(n.jsx)(l.b,{to:"/catalog/".concat(c,"/").concat(e.id),className:z.a.item__link,children:Object(n.jsx)("img",{src:null!==e.poster_path?"https://image.tmdb.org/t/p/w342".concat(e.poster_path):"https://dummyimage.com/275x412/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0",alt:e.title||e.original_title||e.name||e.original_name,title:e.title||e.original_title||e.name||e.original_name,loading:"lazy"})})}),Object(n.jsx)("div",{className:z.a.item__rating,children:Object(n.jsx)("span",{children:e.vote_average.toFixed(1)})}),Object(n.jsxs)("div",{className:z.a.item__bottom,children:[Object(n.jsx)("div",{className:z.a.item__title,children:Object(n.jsx)(l.b,{to:"/catalog/".concat(c,"/").concat(e.id),children:e.title||e.original_title||e.name||e.original_name})}),Object(n.jsx)("div",{className:z.a.item__date,children:_(e.release_date)||_(e.first_air_date)})]}),Object(n.jsx)("div",{className:z.a.item__hovered,children:Object(n.jsx)(l.b,{to:"/catalog/".concat(c,"/").concat(e.id),children:Object(n.jsxs)("div",{className:z.a.item__info,children:[Object(n.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"," ",Object(n.jsx)("span",{children:e.title||e.original_title||e.name||e.original_name})]}),Object(n.jsxs)("p",{children:["\u0416\u0430\u043d\u0440\u044b:"," ",Object(n.jsx)("span",{children:u(e.genre_ids)})]}),Object(n.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430:"," ",Object(n.jsx)("span",{children:_(e.release_date)||_(e.first_air_date)})]})]})})})]},e.id)}))}),Object(n.jsx)(T.a,{totalPages:s,currentPage:i,genreFormat:c,url:o})]})},C=a(19),F=a(41),R=a.n(F),G=function(e){var t=e.children;return Object(n.jsx)("section",{children:Object(n.jsx)(d.a,{children:Object(n.jsx)("div",{className:R.a.main__wrapper,children:t})})})},A=a(10),L=a.n(A),D=function(e){var t=e.genres,a=e.sort,c=e.genreFormat,i=Object(r.useState)(!1),s=Object(f.a)(i,2),o=s[0],_=s[1];return Object(n.jsxs)("aside",{className:"".concat(L.a.sidebar," ").concat(o?L.a.sidebar_close:""),children:[Object(n.jsx)("h2",{className:L.a.sidebar__title,onClick:function(){return _((function(e){return!e}))},children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"}),Object(n.jsx)("div",{className:L.a.sidebar__item,children:Object(n.jsxs)("div",{className:L.a.sidebar__main,children:[Object(n.jsx)("h3",{className:L.a.sidebar__subtitle,children:"\u0416\u0430\u043d\u0440"}),Object(n.jsx)("ul",{className:L.a.sidebar__list,children:t.map((function(e){return Object(n.jsx)("li",{className:L.a.sidebar__list_item,children:Object(n.jsx)(l.c,{activeClassName:L.a.sidebar__link_active,className:L.a.sidebar__link,to:"/".concat(c,"/").concat(e.id),children:(t=e.name,t.charAt(0).toUpperCase()+t.substring(1))})},e.id);var t}))})]})}),Object(n.jsx)("div",{className:L.a.sidebar__item,children:Object(n.jsxs)("div",{className:L.a.sidebar__main,children:[Object(n.jsx)("h3",{className:L.a.sidebar__subtitle,children:"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435"}),Object(n.jsx)("ul",{className:L.a.sidebar__list,children:a.map((function(e,t){return Object(n.jsx)("li",{className:L.a.sidebar__list_item,children:Object(n.jsx)(l.c,{activeClassName:L.a.sidebar__link_active,className:L.a.sidebar__link,to:"/".concat(c,"/").concat(e.link),children:e.name})},t)}))})]})})]})},B=c.a.memo(D);var U=Object(o.b)((function(e){return{movies:e.moviesPage.movies,isFetchingGenres:e.moviesPage.isFetchingGenres,isFetchingMovies:e.moviesPage.isFetchingMovies,sorted:e.moviesPage.sortedMovies,genres:e.moviesPage.genres,format:e.moviesPage.format[1],currentPage:e.moviesPage.currentPage,totalPages:e.moviesPage.totalPages,url:e.moviesPage.url}}),{loadGenres:P,loadMovies:y,loadMovieWithGenre:E})((function(e){var t=e.movies,a=e.isFetchingGenres,c=e.isFetchingMovies,i=e.sorted,s=e.genres,o=e.format,l=e.currentPage,_=e.totalPages,u=e.url,d=e.loadGenres,h=e.loadMovies,j=e.loadMovieWithGenre,v=e.match.params,b=v.id,p=v.pageId;return Object(r.useEffect)((function(){16===s.length||0===s.length?d(o):void 0===b?h(o):isNaN(parseInt(b))?h(o,b,p):!1===isNaN(parseInt(b))?j(o,b,p):h(o,b,p)}),[o,s.length,b,d,j,h,p]),Object(n.jsxs)(G,{children:[!1===a?Object(n.jsx)(B,{genres:s,sort:i,genreFormat:o}):Object(n.jsx)(C.a,{}),!1===c?Object(n.jsx)(H,{genreFormat:o,movies:t,genres:s,currentPage:l,totalPages:_,url:u}):Object(n.jsx)(C.a,{})]})}));var W=Object(o.b)((function(e){return{movies:e.moviesPage.movies,isFetchingGenres:e.moviesPage.isFetchingGenres,isFetchingMovies:e.moviesPage.isFetchingMovies,sorted:e.moviesPage.sortedTvs,genres:e.moviesPage.genres,format:e.moviesPage.format[0],currentPage:e.moviesPage.currentPage,totalPages:e.moviesPage.totalPages,url:e.moviesPage.url}}),{loadGenres:P,loadMovies:y,loadMovieWithGenre:E})((function(e){var t=e.movies,a=e.isFetchingGenres,c=e.isFetchingMovies,i=e.sorted,s=e.genres,o=e.format,l=e.currentPage,_=e.totalPages,u=e.url,d=e.loadGenres,h=e.loadMovies,j=e.loadMovieWithGenre,v=e.match.params,b=v.id,p=v.pageId;return Object(r.useEffect)((function(){19===s.length||0===s.length?d(o):void 0===b?h(o):isNaN(parseInt(b))?h(o,b,p):!1===isNaN(parseInt(b))?j(o,b,p):h(o,b,p)}),[o,s.length,b,d,j,h,p]),Object(n.jsxs)(G,{children:[!1===a?Object(n.jsx)(B,{genres:s,sort:i,genreFormat:o}):Object(n.jsx)(C.a,{}),!1===c?Object(n.jsx)(H,{genreFormat:o,movies:t,genres:s,currentPage:l,totalPages:_,url:u}):Object(n.jsx)(C.a,{})]})})),V=a(4),q=a.n(V),X="react-movie/header/GET_SEARCHED_MOVIES",J="react-movie/header/SET_IS_SEARCH_OPEN",K="react-movie/header/SET_IS_SEARCH_CLOSE",Z="react-movie/header/UPDATE_TEXT",Q="react-movie/header/ZERO_OUT_SEARCH_RESULTS",Y={searchedMovies:[],searchText:"",isSearchOpen:!1},$="react-movie/auth/SET_NEW_SESSION",ee="react-movie/auth/LOGOUT",te={sessionId:null,isAuth:!1},ae=function(e){return{type:$,sessionId:e}},ne=function(){return localStorage.removeItem("sessionId"),{type:ee}},re=function(e){return function(t){setTimeout((function(){t(ne())}),e)}},ce=a(36),ie=a(37);var se=Object(o.b)((function(e){return{searchText:e.headerSearch.searchText,movies:e.headerSearch.searchedMovies,isSearchOpen:e.headerSearch.isSearchOpen,isAuth:e.auth.isAuth}}),{updateText:function(e){return{type:Z,text:e}},getSearchResults:function(e,t){return function(){var a=Object(g.a)(p.a.mark((function a(n){var r,c,i;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.search(e,t);case 3:r=a.sent,c=Object(f.a)(r,1),i=c[0],n({type:X,movies:i}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),alert("Please, refresh the page, search is not working",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},zeroOutSearchResults:function(){return{type:Q}},setIsSearchOpen:function(){return{type:J}},requestNewToken:function(){return function(){var e=Object(g.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ne()),e.next=4,O.a.getNewToken();case 4:a=e.sent,localStorage.setItem("token",a),window.location.replace("https://www.themoviedb.org/authenticate/".concat(a,"?redirect_to=").concat(window.location.href)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Sorry we cannot get token in order to register you! Try later, please!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:ne,setIsSearchClose:function(){return{type:K}}})((function(e){var t=e.updateText,a=e.searchText,c=e.getSearchResults,i=e.movies,s=e.zeroOutSearchResults,o=e.isSearchOpen,_=e.setIsSearchOpen,u=e.setIsSearchClose,h=e.requestNewToken,j=e.isAuth,v=e.logout,b=Object(ie.a)("(max-width: 568px)",!0),p=Object(r.useState)(!1),g=Object(f.a)(p,2),m=g[0],O=g[1],x=Object(ce.a)(a,400);Object(r.useEffect)((function(){document.body.style.overflow=m?"hidden":""}),[m]),Object(r.useEffect)((function(){x.length>0?c(x,"multi"):s()}),[x,c,s]);return Object(n.jsx)("header",{className:q.a.header,children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:q.a.header__wrapper,children:[Object(n.jsx)("div",{className:q.a.header__logo,onClick:u,children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(n.jsx)("circle",{cx:"256",cy:"256",r:"256",fill:"#ff0037"}),Object(n.jsx)("path",{d:"M512 256a257.75 257.75 0 00-3.485-42.218l-118.15-118.15-289.608 124.09v192.24l92.208 92.208C213.131 509.277 234.247 512 256 512c141.385 0 256-114.615 256-256z",fill:"#d30f0f"}),Object(n.jsx)("path",{fill:"#414952",d:"M100.76 219.72h310.48v192.24H100.76z"}),Object(n.jsx)("path",{fill:"#23272b",d:"M255.76 219.72h155.48v192.24H255.76z"}),Object(n.jsx)("path",{fill:"#fff",d:"M100.76 219.72h310.48v53.57H100.76z"}),Object(n.jsx)("path",{fill:"#f7f7f7",d:"M255.76 219.72h155.48v53.57H255.76z"}),Object(n.jsx)("path",{fill:"#707789",d:"M259 273.295h-28.667L253 219.722h28.667z"}),Object(n.jsx)("path",{fill:"#636978",d:"M281.667 219.722h-25.905v53.573H259z"}),Object(n.jsx)("g",{fill:"#707789",children:Object(n.jsx)("path",{d:"M194.212 273.295h-28.666l22.666-53.573h28.667zM129.424 273.295h-28.666l22.666-53.573h28.667z"})}),Object(n.jsx)("g",{fill:"#636978",children:Object(n.jsx)("path",{d:"M323.788 273.295h-28.667l22.667-53.573h28.666zM388.576 273.295h-28.667l22.667-53.573h28.666z"})}),Object(n.jsx)("path",{fill:"#fff",d:"M88.344 167.617L390.39 95.645l12.418 52.115-302.046 71.972z"}),Object(n.jsx)("path",{fill:"#f7f7f7",d:"M390.365 95.632L255.762 127.71v55.072l147.022-35.037z"}),Object(n.jsx)("path",{fill:"#707789",d:"M254.689 183.037l-27.885 6.646 9.63-57.367 27.886-6.646z"}),Object(n.jsx)("path",{fill:"#636978",d:"M255.762 127.71v48.938l8.558-50.978z"}),Object(n.jsx)("g",{fill:"#707789",children:Object(n.jsx)("path",{d:"M191.667 198.056l-27.886 6.646 9.63-57.367 27.886-6.646zM128.644 213.076l-27.886 6.645 9.631-57.367 27.885-6.646z"})}),Object(n.jsx)("g",{fill:"#636978",children:Object(n.jsx)("path",{d:"M317.712 168.018l-27.886 6.646 9.631-57.367 27.886-6.646zM380.735 152.999l-27.886 6.646 9.631-57.367 27.885-6.646z"})})]})})}),Object(n.jsx)("nav",{className:m?"".concat(q.a.header__nav," ").concat(q.a.header__nav_active):"".concat(q.a.header__nav),children:Object(n.jsxs)("ul",{className:q.a.header__list,children:[Object(n.jsx)("li",{className:q.a.header__item,children:Object(n.jsx)(l.c,{activeClassName:q.a.header__link_active,className:q.a.header__link,to:"/movie",onClick:function(){u(),O(!1)},children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(n.jsx)("li",{className:q.a.header__item,children:Object(n.jsx)(l.c,{activeClassName:q.a.header__link_active,className:q.a.header__link,to:"/tv",onClick:function(){u(),O(!1)},children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"})})]})}),Object(n.jsxs)("div",{className:q.a.header__right,children:[Object(n.jsx)("button",{className:q.a.header__search_btn,onClick:function(){return _()},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512.005 512.005",children:Object(n.jsx)("path",{d:"M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z",fill:"#fff","data-original":"#000000",xmlns:"http://www.w3.org/2000/svg"})})}),Object(n.jsxs)("div",{className:!0===o?"".concat(q.a.header__search," ").concat(q.a.header__search_active):"".concat(q.a.header__search),children:[Object(n.jsx)("div",{className:q.a.search__wrap,children:Object(n.jsx)("input",{className:!0===o?"".concat(q.a.search," ").concat(q.a.search__active):"".concat(q.a.search),placeholder:"\u0418\u0449\u0438\u0442\u0435 \u043a\u0438\u043d\u043e \u043f\u0440\u044f\u043c\u043e \u0437\u0434\u0435\u0441\u044c...",type:"text",value:a,onChange:function(e){t(e.target.value)}})}),Object(n.jsx)("ul",{className:!0===o?"".concat(q.a.header__searched_list," ").concat(q.a.header__searched_list_active):"".concat(q.a.header__searched_list),children:function(){if(0===i.length&&a.length>0)return Object(n.jsx)("li",{className:q.a.header__searched_info,children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044f, \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \ud83d\ude14"});if(0===i.length&&0===a.length)return Object(n.jsx)("li",{className:q.a.header__searched_info,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"});var e=new RegExp(a,"g");return i.filter((function(e){return"person"!==e.media_type})).map((function(t){var r=(t.title||t.original_title||t.name||t.original_name).replace(e,'<span style="background-color: var(--color-highlight)" class="s.header__search_highlited">'.concat(a,"</span>"));return Object(n.jsx)("li",{className:q.a.header__searched_item,onClick:function(){_(),s()},children:Object(n.jsxs)(l.b,{to:"/catalog/".concat(t.media_type,"/").concat(t.id),className:q.a.header__searched_link,children:["movie"===t.media_type?Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(n.jsx)("circle",{cx:"256",cy:"256",r:"256",fill:"#ff0037"}),Object(n.jsx)("path",{d:"M512 256a257.75 257.75 0 00-3.485-42.218l-118.15-118.15-289.608 124.09v192.24l92.208 92.208C213.131 509.277 234.247 512 256 512c141.385 0 256-114.615 256-256z",fill:"#d30f0f"}),Object(n.jsx)("path",{fill:"#414952",d:"M100.76 219.72h310.48v192.24H100.76z"}),Object(n.jsx)("path",{fill:"#23272b",d:"M255.76 219.72h155.48v192.24H255.76z"}),Object(n.jsx)("path",{fill:"#fff",d:"M100.76 219.72h310.48v53.57H100.76z"}),Object(n.jsx)("path",{fill:"#f7f7f7",d:"M255.76 219.72h155.48v53.57H255.76z"}),Object(n.jsx)("path",{fill:"#707789",d:"M259 273.295h-28.667L253 219.722h28.667z"}),Object(n.jsx)("path",{fill:"#636978",d:"M281.667 219.722h-25.905v53.573H259z"}),Object(n.jsx)("g",{fill:"#707789",children:Object(n.jsx)("path",{d:"M194.212 273.295h-28.666l22.666-53.573h28.667zM129.424 273.295h-28.666l22.666-53.573h28.667z"})}),Object(n.jsx)("g",{fill:"#636978",children:Object(n.jsx)("path",{d:"M323.788 273.295h-28.667l22.667-53.573h28.666zM388.576 273.295h-28.667l22.667-53.573h28.666z"})}),Object(n.jsx)("path",{fill:"#fff",d:"M88.344 167.617L390.39 95.645l12.418 52.115-302.046 71.972z"}),Object(n.jsx)("path",{fill:"#f7f7f7",d:"M390.365 95.632L255.762 127.71v55.072l147.022-35.037z"}),Object(n.jsx)("path",{fill:"#707789",d:"M254.689 183.037l-27.885 6.646 9.63-57.367 27.886-6.646z"}),Object(n.jsx)("path",{fill:"#636978",d:"M255.762 127.71v48.938l8.558-50.978z"}),Object(n.jsx)("g",{fill:"#707789",children:Object(n.jsx)("path",{d:"M191.667 198.056l-27.886 6.646 9.63-57.367 27.886-6.646zM128.644 213.076l-27.886 6.645 9.631-57.367 27.885-6.646z"})}),Object(n.jsx)("g",{fill:"#636978",children:Object(n.jsx)("path",{d:"M317.712 168.018l-27.886 6.646 9.631-57.367 27.886-6.646zM380.735 152.999l-27.886 6.646 9.631-57.367 27.885-6.646z"})})]}):Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(n.jsx)("path",{d:"M0 61h512v300H0zM341 421v-30H171v30h-50v30h270v-30z"})}),Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:"".concat(r)}}),Object(n.jsx)("span",{className:q.a.header__searched_indicator,children:"movie"===t.media_type?"\u0424\u0438\u043b\u044c\u043c":"\u0421\u0435\u0440\u0438\u0430\u043b"})]})},t.id)}))}()})]}),j?Object(n.jsx)("button",{className:q.a.header__login,onClick:v,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(n.jsx)("button",{className:q.a.header__login,onClick:h,children:"\u0412\u043e\u0439\u0442\u0438"})]}),b&&Object(n.jsx)("button",{className:m?"".concat(q.a.burger," ").concat(q.a.burger_active):"".concat(q.a.burger),onClick:function(){return O((function(e){return!e}))},"aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c/\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",children:Object(n.jsx)("span",{})})]})})})})),oe=a(42),le=a.n(oe),_e=function(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(se,{}),Object(n.jsx)("main",{className:le.a.main,children:t})]})},ue=Object(r.lazy)((function(){return a.e(4).then(a.bind(null,74))})),de=Object(r.lazy)((function(){return Promise.all([a.e(5),a.e(3)]).then(a.bind(null,73))})),he=Object(o.b)(null,{requestSessionId:function(e){return function(){var t=Object(g.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.getSessionId(e);case 3:n=t.sent,localStorage.setItem("sessionId",n.session_id),a(ae(n.session_id)),a(re(36e5)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert("Sorry we cannot create session! Try later, please!",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},autoLogin:function(e){return function(t){t(ae(e)),t(re(36e5))}}})((function(e){var t=e.requestSessionId,a=e.autoLogin;return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),n=localStorage.getItem("sessionId");e?(t(e),localStorage.removeItem("token")):n&&a(n)}),[a,t]),Object(n.jsx)(_e,{children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(C.a,{}),children:Object(n.jsxs)(_.c,{children:[Object(n.jsx)(_.a,{exact:!0,path:"/",component:v}),Object(n.jsx)(_.a,{path:"/movie/:id?/:page?/:pageId?",component:U}),Object(n.jsx)(_.a,{path:"/tv/:id?/:page?/:pageId?",component:W}),Object(n.jsx)(_.a,{path:"/catalog/:format/:id",component:de}),Object(n.jsx)(_.a,{path:"/search/:format/:page?/:pageId?",component:ue})]})})})})),je=a(20),ve=a(43),be=a(38),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,fe=Object(je.e)(Object(je.c)({moviesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{movies:t.movies,isFetchingMovies:!1,totalPages:t.totalPages});case w:return Object(m.a)(Object(m.a)({},e),{},{genres:t.genres,isFetchingGenres:!1});case x:return Object(m.a)(Object(m.a)({},e),{},{isFetchingMovies:!0,url:t.filter,currentPage:t.page});default:return e}},catalogPage:be.a,headerSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(m.a)(Object(m.a)({},e),{},{searchText:t.text});case X:return Object(m.a)(Object(m.a)({},e),{},{searchedMovies:t.movies});case Q:return Object(m.a)(Object(m.a)({},e),{},{searchedMovies:[],searchText:""});case J:return Object(m.a)(Object(m.a)({},e),{},{isSearchOpen:!e.isSearchOpen});case K:return Object(m.a)(Object(m.a)({},e),{},{isSearchOpen:!1});default:return e}},mainSearch:u.b,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(m.a)(Object(m.a)({},e),{},{token:t.token,isAuth:!0});case ee:return{isAuth:!1};default:return e}}}),pe(Object(je.a)(ve.a)));s.a.render(Object(n.jsx)(o.a,{store:fe,children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(he,{})})})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.1021e8fa.chunk.js.map