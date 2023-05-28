import { makeRequest } from "../../makeRequest";
import { useEffect,useState } from "react";
const useFetch =  (url) =>{

    const [data, setdata] =useState([]);
    const [loading, setloading] =useState(false);
    const [error, seteror] =useState(false);

    useEffect(() => {
        const fechData =async () => {
          
           try{
            setloading(true);
          const res = await makeRequest.get(url);
            setdata(res.data.data);         
       
           }           
            catch(err){
               seteror(true);              
            }
            setloading(false)
          };
          fechData();

  },[url]);


return{data,loading,error};

}
export default useFetch;