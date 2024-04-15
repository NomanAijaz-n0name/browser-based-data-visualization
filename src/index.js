const { getTheTokenHolders } = require('./getTokenHolders');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Enable CORS for all origins
app.use(cors());

app.get('/token-holders', async (req, res) => {
    const holders = await getTheTokenHolders(); 
        
    if (holders && holders.length) {
        res.json(holders.map(holder => {
            return { address: holder.address, balance: holder.balance, location: holder.location };
        }));
    } else {
        res.json({ status_code:404, message: "Not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
