// Dynamic Market Price Simulator
// Generates realistic fluctuating prices for Indian crops

const basePrices = {
  'Rice': 2100,
  'Wheat': 1950,
  'Cotton': 6400,
  'Soybean': 4200,
  'Maize': 1850,
  'Mustard': 5100
};

let currentPrices = { ...basePrices };
let priceTrends = Object.keys(basePrices).map(crop => ({ crop, up: true, change: '0%' }));

// Simulate price fluctuations every time the API is called
const getMarketPrices = (req, res) => {
  try {
    const marketData = Object.keys(basePrices).map(crop => {
      const base = basePrices[crop];
      // Random fluctuation between -3% and +3%
      const fluctuationPercent = (Math.random() * 6) - 3; 
      const newPrice = Math.round(base * (1 + fluctuationPercent / 100));
      
      const isUp = newPrice >= base;
      const changeText = `${fluctuationPercent > 0 ? '+' : ''}${fluctuationPercent.toFixed(1)}%`;
      
      return {
        crop,
        price: `₹${newPrice.toLocaleString('en-IN')}`,
        change: changeText,
        up: isUp
      };
    });
    
    // Return only top 3 or a selected mix
    const selectedData = marketData.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    res.json(selectedData);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getMarketPrices };
