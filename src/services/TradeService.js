import axios from "axios"; 
import { API_BASE_URL } from "../data/api";

const forceDateWith19Hours = (date) => {
   const d = new Date(date); // Crée un objet Date
   d.setUTCHours(19, 0, 0, 0); // Définit l'heure à 19:00:00.000 en UTC
   return d.toISOString(); // Retourne la date formatée en ISO
 };
  
 // Exemple d'utilisation
 const startDate = "2024-12-19";
 const formattedDate = forceDateWith19Hours(startDate);
 console.log(formattedDate); // Résultat: 2024-12-19T19:00:00.000Z
const TradeService = {
    fetchTrades: async () => {
        const response = await axios.get(`${API_BASE_URL}`);
        console.log(response.data);
        return response.data;
 },
 /*{{api-trade}}/calculate?symbol={{xb_5}}&startTime=2014-11-06T20:54:00.000Z&endTime=2024-12-19T19:10:00.000Z */

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