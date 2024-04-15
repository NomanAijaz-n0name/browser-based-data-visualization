const axios = require('axios');

// Correct usage of string literals for URLs and proper variable handling
const contractAddress = process.env.CONTRACT_ADDRESS
const apiKey = process.env.API_KEY;
const baseURL = `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/token_holders/`;

 const getTheTokenHolders = async () => {
    try {
        const holders=[]
        const locations = [
            { "lat": 40.7128, "lon": -74.0060 }, // New York City
            { "lat": 34.0522, "lon": -118.2437 }, // Los Angeles
            { "lat": 51.5074, "lon": -0.1278 },  // London
            { "lat": 35.6895, "lon": 139.6917 }, // Tokyo
            { "lat": 41.8781, "lon": -87.6298 }, // Chicago
            { "lat": 37.7749, "lon": -122.4194 }, // San Francisco
            { "lat": 52.5200, "lon": 13.4050 },  // Berlin
            { "lat": 55.7558, "lon": 37.6173 },  // Moscow
            { "lat": -33.8688, "lon": 151.2093 },// Sydney
            { "lat": 48.8566, "lon": 2.3522 },   // Paris
            { "lat": -22.9068, "lon": -43.1729 },// Rio de Janeiro
            { "lat": 25.7617, "lon": -80.1918 }, // Miami
            { "lat": 55.9533, "lon": -3.1883 },  // Edinburgh
            { "lat": 37.5665, "lon": 126.9780 }, // Seoul
            { "lat": -37.8136, "lon": 144.9631 },// Melbourne
            { "lat": 45.5017, "lon": -73.5673 }, // Montreal
            { "lat": 40.4168, "lon": -3.7038 },  // Madrid
            { "lat": 55.7558, "lon": -3.9863 },  // Edinburgh
            { "lat": -12.0464, "lon": -77.0428 },// Lima
            { "lat": -41.2865, "lon": 174.7762 } // Wellington
          ]
          
        const responsePage = await axios.get(`${baseURL}?quote-currency=USD&format=JSON&block-height=latest&page-number=1&page-size=50&key=${apiKey}`);
        
        responsePage.data.data.items.forEach((element) => {
            const randomIndex = Math.floor(Math.random() * locations.length);
            holders.push({  
                address:element.address,
                balance:element.balance,
                location:locations[randomIndex],
                balance:element.balance
            })
        });

     return holders   
    } catch (error) {
        console.error("Error fetching token holders:", error);
        return []
    }
};

module.exports = { getTheTokenHolders };
