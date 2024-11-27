import React from 'react';
import './App.css';
import UserProfile from './UserProfile'; // Assuming the UserProfile component is in the components folder
import MoviesList from './MoviesList';   // Assuming the MoviesList component is in the components folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <section>
          <h2>User Profile</h2>
          <UserProfile />
        </section>
        <section>
          <h2>Favorite Movies</h2>
          <MoviesList />
        </section>
      </main>
    </div>
  );
}

export default App;
