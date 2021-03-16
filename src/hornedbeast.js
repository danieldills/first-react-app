import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return(
        <div id="beast">
            <h2>{this.props.title}</h2>
            <img src={this.props.url} alt={this.props.alt} title={this.props.title}/>
            <p>{this.props.description}</p>
        </div>
        )
    }
}

export default HornedBeast;