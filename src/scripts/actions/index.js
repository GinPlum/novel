import axios from "axios"
axios.defaults.baseURL="http://112.74.49.86:1234"
export function change_title(pload){
    return{
        type:"change_title",
        pload
    }
}
export function showmask(){
    return{
        type:"show_mask"
    }
}
export function hidemask(){
    return{
        type:"hide_mask"
    }
}
export function getOrigin(pload){
    return{
        type:"get_origin",
        pload
    }
}
export function dolastfoot(pload){
    return{
        type:"last_foot",
        pload
    }
}
export function userlogin(pload){
    return{
        type:"user_login",
        pload
    }
}
export function showpassword(pload){
    return{
        type:"show_password",
        pload
    }
}
export function doCollect(){
    return{
        type:"do_Collect"
    }
}
export function unCollect(){
    return{
        type:"un_Collect"
    }
}
export function stateCollect(phone,id,dispatch){
    return axios.post("/iscollect",{
             phone:phone,
             id:id
        }
        ).then(res=>{
            return res.data
        }).then(json=>{
            return dispatch({type:"state_Collect",json})
        })
}
export function getshelf(phone,dispatch){
    return axios.get("/usercollect",{
           params:{ phone:phone
           }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"get_shelf",json})
    })
}
export function getuser(phone,dispatch){
    return axios.post("/userinfo",{
            phone:phone
    }).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"get_user",json})
    })
}
export function searchbook(val,dispatch){
    return axios.get("/searchbook",{params:{
        bookname:val
    }}).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"search_book",json})  
    })
}
export function searchType(val,dispatch){
    return axios.get("/searchtype",{params:{
        id:val
    }}).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"search_type",json})  
    })
}
export function hotsearch(dispatch){
    return axios.get("/hotsearch").then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"hot_search",json})
    })
}
export function getDetail(id,dispatch){
    return axios.get("/bookdetail",{
        params:{
            bookid:id
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"book_detail",json})
    })
}
export function getMore(dispatch){
    return axios.get("/morebook").then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"get_more",json})
    })
}
export function getAuhtorBook(authorid,dispatch){
    return axios.get("/authorbook",{
        params:{
            authorId:authorid
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"get_Auhtor_Book",json})
    })
}
export function femalecommend(dispatch){
    return axios.get("/female").then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"female_commend",json})
    })
}
export function malecommend(dispatch){
    return axios.get("/male").then(res=>{
        return res.data
    }).then(json=>{
        return dispatch({type:"male_commend",json})
    })
}
// export function doCollect(dispatch){
//     return axios.get("/docollect").then(res=>{
//         return res.data
//     }).then(json=>{
//         return dispatch({type:"male_commend",json})
//     })
// }
