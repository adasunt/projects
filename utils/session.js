function getSession(key){
    return sessionStorage.getItem(key)
}
function setSession(key,val){
    sessionStorage.setItem(key,val)

}
function clearToken(key){
    sessionStorage.removeItem(key)
}
export{getSession,setSession,clearToken}