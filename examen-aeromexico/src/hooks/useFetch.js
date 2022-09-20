
export const useFetch = async() => {
    
    
    try {
         const data =await fetch('../../json/hp-characters');
            const resp = await data.json();
         return {
            resp,
            error:null
        };

    } catch (error) {
        console.log(error)
        return {
            resp:null,
            error
        }
    }


};