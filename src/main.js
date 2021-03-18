import React from 'react';
import HornedBeasts from './hornedbeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './assets/data.json';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Data
        }
    }
    render() {
        return (
            <div>
                <CardDeck>
                    {Data.map((item, index) => (
                        <div key={index}>
                            <HornedBeasts
                                title={item.title}
                                image={item.image_url}
                                description={item.description}
                                displayModal = {this.props.displayModal}
                                index={index}
                                />
                        </div>
                    ))}
                </CardDeck>
            </div>
        )
    }
}


export default Main;