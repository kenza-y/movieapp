import React from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import MovieCardList from './components/MovieCardList';

const App = () => {
  return (
    <div className="App">
      <Container>
          <MovieCardList/>
      </Container>
    </div>
  );
}

export default App;
