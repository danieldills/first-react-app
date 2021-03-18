import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    }
    
    render() {
      const numberOfClicks = () => {
            this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
            popOut(this.props.index);
            }
            
        const popOut = (index) => {
            this.props.displayModal(index);
        }

        return (
            <div id="Horned Beasts">
                <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        💜 = {this.state.numberOfClicks}
                    </Card.Text>
                    <Card.Img
                    onClick={numberOfClicks}  
                    src={this.props.image} 
                    description={this.props.description} 
                    title={this.props.title} />
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;