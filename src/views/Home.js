import React, { useEffect } from 'react';
function Home() {
   // https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e4fd356549043ba5ec47548f878038b7&hash=b9d97f5b9446948a1964dc720615cda3
  
  // key privada: 0754ae586cfdf4835bf4019a3a549b549bbb9890
  // key publica: e4fd356549043ba5ec47548f878038b7
  // ts: 1
  // 10754ae586cfdf4835bf4019a3a549b549bbb9890e4fd356549043ba5ec47548f878038b7

  // hash: b9d97f5b9446948a1964dc720615cda3

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e4fd356549043ba5ec47548f878038b7&hash=b9d97f5b9446948a1964dc720615cda3');
        const data = await response.json();
        console.log(data);
        // Realiza operaciones con los datos obtenidos aquí
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);
    return (
      <div className="App">
        <button className="btn btn-primary">HOME BTN!</button>

      </div>
    );
  }
  
  export default Home;