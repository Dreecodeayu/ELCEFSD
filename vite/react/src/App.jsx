import React from 'react';
import MovieList from "./components/MovieList";
function App() {
  
  return (
    <>
    <div>
      <h1
      style = {{

        backgroundColor: "black",
        color: 'white',
        fontSize: "40px",
        textAlign: "center",

      }}
      >
      Netfilx Clone App</h1>
      <MovieList />
    </div>
    </>
  );
}

export default App
