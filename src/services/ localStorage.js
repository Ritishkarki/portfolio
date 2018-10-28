const store = window.localStorage

export const setStorageItem = (key, data) =>{
    store.setItem(key, JSON.stringify(data))
}

export const getStorageItem = (key) =>{
    let value = store.getItem(key)
    return value && JSON.parse(value)
}

export const checkItemsExistence = (key) =>{
    if (store.getItem(key) === null ){
        return false
    }else{
        return true
    }
}