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
    numberOfClicks = () => {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
        }
    render() {
        
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img src={this.props.image} alt={this.props.title} onClick={this.numberOfClicks} />
                <Card.Body>
                    <Card.Title>{this.props.title} 💜 = {this.state.numberOfClicks}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;