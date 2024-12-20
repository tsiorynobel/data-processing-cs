import React, { useState } from "react";
import TradeService from "../../services/TradeService";
import "./TradeForm.css";     

const TradeForm = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 
  const handleFilter = (e) => {
    e.preventDefault();
 
    // Ensure both dates are provided
    if (!startDate || !endDate) {
      alert("Veuillez fournir les deux dates.");
      return;
    }
 
    // Call the TradeService to fetch filtered trades
    TradeService.fetchTradesByDateRange(startDate, endDate)
      .then((data) => {
        onFilter(data); // Pass filtered trades back to parent
      })
      .catch((error) => console.error("Erreur lors du filtrage :", error));
  };
 
  return (
<div>
<h2>Recherche par dates</h2>
<form onSubmit={handleFilter} className="filter-form">
<div>
<label htmlFor="startDate">Date de début:</label>
<input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
</div>
<div>
<label htmlFor="endDate">Date de fin:</label>
<input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
</div>
<button type="submit">Rechercher</button>
</form>
</div>
  );
};
 
export default TradeForm;