// import logo from './logo.svg';
import './App.css';
import Note from './components/note';
import Header from "./components/header";
import Footer from "./components/footer";
import CreateInput from "./components/input";
import { useState } from 'react';


function App() {
  const [notes, setNotes] = useState([]);


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      prevNotes.filter((noteItem, index)=>{
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateInput onAdd={addNote} />
      {notes?.map((noteItem, index) => {
        return (<Note 
        key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote} 
          />
          );
      })}
      <Footer />
    </div>
  );
}

export default App;
