import axios from "axios"; 
import { API_BASE_URL } from "../data/api";


const forceDateWith19Hours = (date) => {

   const d = new Date(date); 
   d.setUTCHours(19, 0, 0, 0); 
   return d.toISOString(); 

 };
  
 const startDate = "2024-12-19";
 const formattedDate = forceDateWith19Hours(startDate);
 console.log(formattedDate);

const TradeService = {

    fetchTrades: async () => {
        const response = await axios.get(`${API_BASE_URL}`);
        console.log(response.data);
        return response.data;
 },

 fetchTradesByDateRange: async (startDate, endDate) => {  

    const startTime = forceDateWith19Hours(startDate); 
    const endTime = forceDateWith19Hours(endDate);

    console.log("startTime", startTime);
      console.log("endTime", endTime);

       try {    

         const response = await axios.get(`${API_BASE_URL}/calculate`, 
            {       
                params: { symbol:'.BXBT', startTime, endTime },     
            });      

            return response.data;  

         } catch (error) {  

           console.error("Erreur lors du fetch des trades par plage de dates :", error); 
           
           throw error; } 
        },

};

export default TradeService;