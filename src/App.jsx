import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">A Book By Me</h1>
      <p className="subtitle">The papers missed you — الأوراق اشتاقت لك</p>
      <div className="content-box">
        <p>Start writing your 500-page story here...</p>
        <textarea rows="20" placeholder="Write your book here..."></textarea>
        <br />
        <button onClick={() => alert("You're a real author now!")}>
          Finish My Book
        </button>
      </div>
      <footer>
        <p>Created by Abir Derouich – abirderouich7@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
