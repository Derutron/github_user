import {useContext} from 'react';
import './App.css'
import Navigation from './components/Navigation';
import Search from './components/Search';
import Card from './components/Card';
import { ThemeContext } from './components/ContextTheme'


function App() {
  const {darkTheme} = useContext(ThemeContext)

  const bgLight = "App"
  const bgDark = "Appdark"
 
  return (
      <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
      <Navigation />
      <Search />
      <Card/>
    </div>
  );
}

export default App;



// import {useContext} from 'react';
// import Navigation from './components/Navigation';
// import './App.css'
// import SearchInput from './components/SearchInput';
// import Card from './components/Card';
// import { ThemeContext } from './components/ContextTheme';



// function App() {
//   const {darkTheme} = useContext(ThemeContext)

//   const bgLight = "App"
//   const bgDark = "App dark"
//   return (
   
//     <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
//         <Navigation />
//         <SearchInput />
//         <Card/>
//     </div>
//   );
// }

// export default App;#ffffff