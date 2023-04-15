export const UserModel = function(){
    let id;
    let cIC;
    let userName;
    let name;
    let doB;
    let address;
    let jsonData;

    const setJsonData = (j) => {
        jsonData =j;
    }

    const getJsonData = () =>{
        return jsonData;
    }

    const setId = (i) => {
        id = i;
    }

    const getId = () =>{
        return id;
    }

    const setCIC = (c) => {
        cIC = c;
    }

    const getCIC = () => {
        return cIC;
    }

    const setUserName = (u) => {
        userName = u;
    }

    const getUserName = () => {
        return userName;
    }

    const setName = (n) => {
        name = n;
    }

    const getName = () => {
        return name;
    }

    const setDoB = (d) =>{
        doB = d;
    }

    const getDoB = () => {
        return doB;
    }

    const setAddress = (a) => {
        address = a;
    }

    const getAddress = () => {
        return address;
    }

    const setData = (data) => {
        setId(data.id);
        setCIC(data.cIC);
        setUserName(data.userName);
        setName(data.name);
        setDoB(data.doB);
        setAddress(data.address);
    }

    const resetData = () => {
        setId("");
        setCIC("");
        setUserName("");
        setName("");
        setDoB("");
        setAddress("");
        setJsonData("");
    }

    resetData();

    return {
        setId,
        getId,
        setCIC,
        getCIC,
        setName,
        getName,
        setUserName,
        getUserName,
        setDoB,
        getDoB,
        setAddress,
        getAddress,
        setData,
        resetData,
        setJsonData,
        getJsonData
    }
}();