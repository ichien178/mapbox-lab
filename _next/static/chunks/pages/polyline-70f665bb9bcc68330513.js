_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{HElE:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/polyline",function(){return t("eQ85")}])},eQ85:function(e,n,t){"use strict";t.r(n);var a=t("R/WZ"),i=t("Ji2X"),r=t("bXiM"),o=t("lO0E"),c=t("tRbT"),l=t("ofer"),u=t("Sgle"),s=t("4ZJM"),f=t.n(s),p=t("YFqc"),m=t.n(p),d=t("q1tI"),O=t.n(d),w=t("gTWD");var b=t("vuIU"),E=t("rePB"),T=t("bxWQ"),_=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),Object(E.a)(this,"map",null),Object(E.a)(this,"initialized",!1),Object(E.a)(this,"init",(function(e){return n.initialized&&(n.map.remove(),n.map=null),f.a.accessToken=T.a.ACCESS_TOKEN,n.map=new f.a.Map({container:e,style:T.a.StyleId.STREET,center:[T.a.POINT_TOKYO_STATION.lng,T.a.POINT_TOKYO_STATION.lat],zoom:11}),n.map}))}return Object(b.a)(e,[{key:"getMap",value:function(){return this.map?this.map:null}}]),e}();Object(E.a)(_,"instance",void 0),Object(E.a)(_,"getInstance",(function(){return _.instance||(_.instance=new _),_.instance}));var h=_,g=O.a.createElement,y=Object(a.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));n.default=function(){var e=y(),n=Object(d.useRef)(null);return Object(d.useEffect)((function(){var e=h.getInstance().init(n.current);return e.setCenter(new f.a.LngLat(-122.486052,37.830348)),e.setZoom(15),e.once("load",(function(){e.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-122.48369693756104,37.83381888486939],[-122.48348236083984,37.83317489144141],[-122.48339653015138,37.83270036637107],[-122.48356819152832,37.832056363179625],[-122.48404026031496,37.83114119107971],[-122.48404026031496,37.83049717427869],[-122.48348236083984,37.829920943955045],[-122.48356819152832,37.82954808664175],[-122.48507022857666,37.82944639795659],[-122.48610019683838,37.82880236636284],[-122.48695850372314,37.82931081282506],[-122.48700141906738,37.83080223556934],[-122.48751640319824,37.83168351665737],[-122.48803138732912,37.832158048267786],[-122.48888969421387,37.83297152392784],[-122.48987674713133,37.83263257682617],[-122.49043464660643,37.832937629287755],[-122.49125003814696,37.832429207817725],[-122.49163627624512,37.832564787218985],[-122.49223709106445,37.83337825839438],[-122.49378204345702,37.83368330777276]]}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#0000ff","line-width":8}})})),function(){return e.remove()}}),[]),g(O.a.Fragment,null,g(i.a,{maxWidth:!1},g(r.a,{position:"static",color:"inherit"},g(o.a,null,g(c.a,{container:!0,className:e.root,spacing:2,justify:"flex-start",alignItems:"center"},g(c.a,{item:!0},g(l.a,{variant:"h6",className:e.title},"\u7d4c\u8def\u8868\u793a")),g(c.a,{item:!0},g(u.a,{"aria-label":"breadcrumb"},g(m.a,{href:"/"},"Home")))))),g(w.a,{mapRef:n})))}}},[["HElE",0,2,5,1,3,4,6]]]);