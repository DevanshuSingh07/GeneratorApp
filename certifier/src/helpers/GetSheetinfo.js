async function getsheetinfo() {
    try {
      const response = await fetch("https://58e8-2401-4900-8834-8009-b824-a326-4c5d-2570.ngrok-free.app/data", {
        method: 'GET',
       headers:{
         "ngrok-skip-browser-warning":"true",
       }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse JSON data
      console.log("Fetched data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  }
  
  export default getsheetinfo;
  