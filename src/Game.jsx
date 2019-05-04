import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Game.css'

class Game extends Component {
    render(){
        return(
            <div className="Game">
                <p className="name">{this.props.name} </p>
                <img className="promo" src={this.props.promo} alt="promo" />
                <p className="theme" >[ {this.props.theme} ]</p>
                <p className="description" >" {this.props.description} "</p>
                <img className="image1" src={this.props.image1} alt="image1" />
                <img className="image2" src={this.props.image2} alt="image2" />
                <br />
                <button ><Link exact to={`/jeu/promo/${this.props.id}`}>Voir la promo du jeu {this.props.name}</Link></button>
                <button onClick={this.props.delete} >Supprimer</button>
                <hr />
            </div>
        )
    };
};

export default Game; 