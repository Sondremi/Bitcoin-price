const pkrEl = document.querySelector("#pkr")
const pdollarEl = document.querySelector("#pdollar")

function bitcoinKurs() {
    const key = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
  
    fetch(key)
      .then(response => response.json())
      .then(data => {
        const krypto = data.symbol;
        const pris = data.price;
        const prisInt = parseFloat(pris);
  
        const kr = prisInt * 10.5;
        console.log(`Bitcoin kursen er på ${prisInt} dollar.`);
        console.log(`Bitcoin kursen er på ${kr} kr.`);

        pdollarEl.innerHTML = (`Bitcoin kursen er på ${prisInt} dollar.`)
        pkrEl.innerHTML = (`Bitcoin kursen er på ${kr} kr.`)
      })
      .catch(error => {
        console.error('En feil oppstod ved henting av data:', error);
      });
  }
  
bitcoinKurs();


function oppdater() {
  bitcoinKurs()
}