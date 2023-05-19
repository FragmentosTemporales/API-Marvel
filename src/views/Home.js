import useFetch from "../useFetch";

function Home() {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e4fd356549043ba5ec47548f878038b7&hash=b9d97f5b9446948a1964dc720615cda3";
  const { data, loading } = useFetch(url);

  return (
    <main 
    style={{backgroundColor: "black", color: "white", display: "flex", flexDirection: "column", placeItems: "center", maxWidth: "800px", margin: "0"}}
    className="App">
      <h1>Fetch like a pro</h1>
      <ul>
        {loading && <li>Cargando...</li>}
        {data &&
          data.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              {item.description ? (
                <p>{item.description}</p>
              ) : (
                <p>No hay descripción de este personaje</p>
              )}
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Home;

