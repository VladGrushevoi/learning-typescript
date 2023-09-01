
export const useLocalStorage = () => {
    function putUserTo(key: string, object: any){
        localStorage.setItem(key, JSON.stringify(object));
    }

    function getFromLocalStorage(key : string) {
        return localStorage.getItem(key);
    }

    return {
        putRoLocalStorage: putUserTo,
        getFromLocalStorage
    }
}