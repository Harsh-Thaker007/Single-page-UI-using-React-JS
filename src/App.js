import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Card from './component/Card';
import Detail from './component/Detail';
import Head from './component/Head';
import Car from './component/Car';
import Slidebar from './component/Slidebar';
import Range from './component/Range';

function App(){
  //logic

  return (
    <>    
    <Head></Head>
    <Header></Header>
    <Card></Card><br />
    <Range></Range>
    <Detail></Detail>
    <Car></Car>
    <Slidebar></Slidebar>
    <Footer></Footer>
    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
