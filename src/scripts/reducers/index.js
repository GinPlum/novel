var initState = {
   footList:[
           {path:"/bookshelf",txt:"书架" ,icon:"\ue767"},
           {path:"/select",txt:"精选" ,icon:"\ue614"},
           {path:"/bookstore",txt:"书库" ,icon:"\ue6f0"},
           {path:"/discovery",txt:"发现" ,icon:"\ue829"},
   ],
   headTitle:"书架",
   showPassword:"显示密码",
   loginState:false,
   user:"",
   bookshelf:[],
   category:[
           {txt:"我的VIP",icon:"\ue629",path:"/VIP"},
           {txt:"消息中心",icon:"\ue652",path:"/message"},
           {txt:"任务中心",icon:"\ue612",path:"/operation"},
           {txt:"我的云书架",icon:"\ue622",path:"/clouds"},
           {txt:"设置",icon:"\ue628",path:"/setter"},
   ],
   maskState:false,
   originDot:0,
   selectCate:[
           {txt:"男频",icon:"\ue603",path:"male"},
           {txt:"出版",icon:"\ue63a",path:"pub"},
           {txt:"免费",icon:"\ue602",path:"free"},
           {txt:"排行",icon:"\ue600",path:"/rank"},
           {txt:"书坊",icon:"\ue609",path:"/bookstreet"},
   ],
   detail:{},
   commendFemale:[
        ],
   iscollect:false,
   commendMale:[],
   commendFree:[],
   commendPub:[],
   storeCategory:[
           {
                   txt:"原创女生",
                   type:"female",
                   category:[
                        {txt:"现代言情",cateid:"1"},
                        {txt:"古言穿越",cateid:"2"},
                        {txt:"浪漫青春",cateid:"3"},
                        {txt:"幻想言情",cateid:"4"},
                        {txt:"悬疑灵异",cateid:"5"},
                        {txt:"纯爱同人",cateid:"6"}
                   ]
           },
           {
                txt:"原创男生",
                type:"male",
                category:[
                     {txt:"都市小说",cateid:"7"},
                     {txt:"玄幻魔幻",cateid:"8"},
                     {txt:"武侠仙侠",cateid:"9"},
                     {txt:"修真异能",cateid:"10"},
                     {txt:"架空历史",cateid:"11"},
                     {txt:"游戏竞技",cateid:"12"}
                ]
        },
        {
                txt:"出版图书",
                type:"publish",
                category:[
                     {txt:"流行小说",cateid:"13"},
                     {txt:"经典名著",cateid:"14"},
                     {txt:"励志成功",cateid:"15"},
                     {txt:"心灵感情",cateid:"16"},
                     {txt:"侦探推理",cateid:"17"},
                     {txt:"历史军事",cateid:"18"}
                ]
        }
   ],
   more:[],
   disList:[
        {name:"书单",txt:"打包精彩",icon:"\ue67e",path:"/booklist"},
        {name:"VIP专区",txt:"VIP免费畅读",icon:"\ue6b7",path:"/vip"},
        {name:"书评广场",txt:"膜拜深评论",icon:"\ue613",path:"/bookcomment"},
        {name:"书荒求助",txt:"小伙伴们都在这里淘书",icon:"\ue607",path:"/bookhelp"}
   ],
   searchList:[
   ],
   hotList:[],
   authorList:[]
}

export default (state=initState,action)=>{
        switch(action.type){
             case "change_title":
             state.headTitle = action.pload;
             return Object.assign({},state)
             break;
             case "user_login":
             state.user = action.pload;
             state.loginState = true;
             return Object.assign({},state);
             case "show_mask":
             state.maskState = true;
             return Object.assign({},state)
             break;
             case "hide_mask":
             state.maskState = false;
             return Object.assign({},state)
             break;
             case "get_origin":
             state.originDot = action.pload;
             return Object.assign({},state)
             case "get_user":
             state.user = action.json;
             return Object.assign({},state)
             break;
             case "get_shelf":
             if(action.json.status==1){
                state.bookshelf = action.json.data;
             }
             return Object.assign({},state)
             break;
             case "show_password":
             state.showPassword = action.pload;
             return Object.assign({},state)
             break;
             case "book_detail":
             if(action.json.status==1){
                state.detail = action.json.data;
             }else{
                state.detail = [];
             }
             case "get_Auhtor_Book":
             if(action.json.status==1){
                state.authorList = action.json.data;
             }else{
                state.authorList = [];
             }
             
             case "search_book":
             if(action.json.status==1){
                state.searchList = action.json.data;
             }else{
                state.searchList = [];
             }
             return Object.assign({},state);
             break;
             case "hot_search":
             state.hotList = action.json.data;
             return Object.assign({},state);
             break;
             case "search_type":
             state.searchList = action.json.data;
             return Object.assign({},state);
             break;
             case "do_Collect":
             state.iscollect = true;
             return Object.assign({},state);
             break;
             case "un_Collect":
             state.iscollect = false;
             return Object.assign({},state);
             break;
             case "state_Collect":
             state.iscollect = action.json.status;
             return Object.assign({},state);
             break;
             case "female_commend":
             state.commendFemale = action.json.data;
             return Object.assign({},state);
             break;
             case "get_more":
             state.more = action.json.data;
             return Object.assign({},state);
             break;
             case "male_commend":
             state.commendMale = action.json.data;
             return Object.assign({},state);
             break;
             default:
             return Object.assign({},state);
             break;
        }
}