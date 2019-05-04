import React, { Component } from 'react';
import './GameList.css';
import Game from './Game';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            value: "",
        };
    }

    themeGame = (event) => {
        this.setState({ value: event.target.value })
    }

    deleteGame = (index) => {
        const games = Object.assign([], this.state.games);
        games.splice(index, 1);
        this.setState({ games: games })
    }

    componentDidMount() {
        const url = "http://www.campus-bordeaux.ovh:3002/joysticks/api/games"
        fetch(url)
            .then(response => response.json())
            .then(response =>
                this.setState({
                    games: response,
                })
            );
    }

    render() {
        return (
            <div className="GameList">
                <div className="maintitle">
                <h1>LA SELEC' DU MOIS</h1><img src="https://cdn.icon-icons.com/icons2/1525/PNG/128/976605-appliances-console-controller-dualshock-gamepad-games-videogame_106553.png" alt="controller" />
                </div>
                    <select className="custom-select" onChange={this.themeGame}>
                        <option value="">Tous les thèmes </option>
                        <option value="Plates-formes">Plates-formes</option>
                        <option value="Aventure">Aventure</option>
                        <option value="RPG">RPG</option>
                        <option value="Sport">Sport</option>
                        <option value="FPS">FPS</option>
                        <option value="Action">Action</option>
                        <option value="Puzzle">Puzzle</option>
                    </select>
                {this.state.games.filter(x => x.theme.includes(this.state.value)).map((x,i) =>
                    <Game
                        id={x.id}
                        name={x.name}
                        pochette={x.pochette}
                        description={x.description}
                        image1={x.image1}
                        image2={x.image2}
                        theme={x.theme}
                        promo={x.promo}
                        delete={this.deleteGame}
                        key={i}
                    />
                )}
            </div>
        );
    };
}

export default GameList;