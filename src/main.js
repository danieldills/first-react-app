import React from 'react';
import HornedBeasts from './hornedbeast';
import Data from './assets/data.json'

class Main extends React.Component {
  
    render() {
        return (
            <div>
                <ul>
                   {Data.map((item) =>{
                       return (
                           <HornedBeasts
                           title={item.title}
                           image={item.image_url}
                           description={item.description}/>
                       )
                   }
                   )
                   }
                </ul>
            </div>  
        )
    }
}


export default Main;