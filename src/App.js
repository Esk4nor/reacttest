import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./component/simpsonComponent/simpsonComponent";
import RickAndMortie from "./component/RickAndMortie/RickAndMortie";

function App() {
  return (<>

 <SimpsonComponent
     name={'Bart'}
     surName={'Simpson'}
     age={'10'}
     photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
     gender={'male'}
 /> <SimpsonComponent
     name={'lisa'}
     surName={'Simpson'}
     age={'9'}
     photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
     gender={'female'}
 /> <SimpsonComponent
     name={'Homer'}
     surName={'Simpson'}
     age={'40'}
     photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
     gender={'male'}
 /> <SimpsonComponent
     name={'Marge'}
     surName={'Simpson'}
     age={'38'}
     photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
     gender={'female'}
 /> <SimpsonComponent
     name={'Maggie'}
     surName={'Simpson'}
     age={'1'}
     photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
     gender={'female'}
 />
          <h1>Rick And Mortie API</h1>
          <RickAndMortie
          name={'Scary Terry'}
          alive={'Mythological Creature'}
          location={'Mr. Goldenfolds dream'}
          firstSeeIn={'Lawnmower Dog'}
          photo={'https://rickandmortyapi.com/api/character/avatar/306.jpeg'}
          />
          <RickAndMortie
          name={'Tumblorkian'}
          alive={'Alien'}
          location={'Plopstar'}
          firstSeeIn={'Interdimensional Cable 2: Tempting Fate'}
          photo={'https://rickandmortyapi.com/api/character/avatar/371.jpeg'}
          />
          <RickAndMortie
          name={'PC Basketball Player'}
          alive={'Human'}
          location={'Earth (Replacement Dimension)'}
          firstSeeIn={'Rattlestar Ricklactica'}
          photo={'https://rickandmortyapi.com/api/character/avatar/586.jpeg'}
          />
          <RickAndMortie
          name={'Baby Mouse Skin Morty'}
          alive={'Human'}
          location={'Citadel of Ricks'}
          firstSeeIn={'Rickmurai Jack'}
          photo={'https://rickandmortyapi.com/api/character/avatar/805.jpeg'}
          />
          <RickAndMortie
          name={'High Pilot'}
          alive={'Human'}
          location={'Earth (Replacement Dimension)'}
          firstSeeIn={'Rattlestar Ricklactica'}
          photo={'https://rickandmortyapi.com/api/character/avatar/590.jpeg'}
          />
          <RickAndMortie
          name={'Train Cop'}
          alive={'Human'}
          location={'Story Train'}
          firstSeeIn={'Never Ricking Morty'}
          photo={'https://rickandmortyapi.com/api/character/avatar/632.jpeg'}
          />
      </>
  );
}

export default App;
