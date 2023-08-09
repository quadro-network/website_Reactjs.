import React, { useEffect } from 'react';
import View from './view/View.js';
import ScrollToTopButton from './view/Home/ScrollToTopButton.js';


const App = () => {
  useEffect(() => {
    document.title = "Stake-Take"; 
  }, []);

  return (
    
    <div>


    <View />
   
    <ScrollToTopButton />

    </div>
  );
}

export default App;

