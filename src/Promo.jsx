import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Promo.css';

class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            promo: "",
            trailer: "",
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://www.campus-bordeaux.ovh:3002/joysticks/api/games/${id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    ...response,
                });
            });
    };

    render() {
        return (
            <div className="Promo">
                <h1>*{this.state.name}*</h1>
                <img className="image-promo" src={this.state.promo} alt="promo" />
                <div>
                    <iframe 
                    title={this.state.name} width="600" height="370" 
                    src={`https://www.youtube.com/embed/${this.state.trailer.slice(-11)}`} 
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                <button><Link exact to={"/"} >Retour à l'accueil</Link></button>
            </div>
        );
    };
}

export default Promo;