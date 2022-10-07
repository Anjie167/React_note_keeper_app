// import logo from './logo.svg';
import './App.css';
import Note from './components/note';
import Header from "./components/header";
import Footer from "./components/footer";
import Notes from "./components/notes";


function App() {
  return (
    <div>
      <Header />
      {Notes.map((props) => (<Note key={props.key} title={props.title} content={props.content} />))}
      <Footer />
    </div>
  );
}

export default App;
