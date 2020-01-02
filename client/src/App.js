import React, { useState } from 'react';
import { Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  console.log('Saved list', savedList);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    console.log(movie);
  }; 

  return ( 
    <div> 
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movies/:id/">
        <Movie items={MovieList} addToSavedList={addToSavedList}/>
      </Route>
    </div>
  );
};

export default App;
  