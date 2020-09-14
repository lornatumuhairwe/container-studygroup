import React from 'react';
import './Weather.css'

export default class Weather extends React.Component {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {city: '', temperature: 0, description: '', toSearch: 'Kampala', icon: ''}
    }

    componentDidMount() {
        this.fetchWeather()
    }

    fetchWeather = () => {
        let city = this.state.toSearch;
        fetch(`http://localhost:4001?q=${city}`)
        .then(res => res.json())
        .then(result => {
            this.setState({
                city: `${result.name}, ${result.sys.country}`,
                temperature: Math.round((result.main.feels_like-273)),
                description: result.weather[0].description,
                toSearch: '',
                icon: result.weather[0].icon
            })
        })
    }

    render() {
        return <>
        <input type="text" placeholder="City eg Kampala" value={this.state.toSearch} onChange={event =>{this.setState({toSearch: event.target.value})}} onKeyPress={event => {
            if (event.key === "Enter") {
                this.fetchWeather();
            }
        }}/>
        <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} width="100px" height="100px" alt="" />
        <main>
            <p id="temperature">
                {this.state.temperature} <span id="units">&deg;C</span>
            </p>
            <p id="description">
                {this.state.description}
            </p>
            <p className="App-link" id="location">
            {this.state.city}
            </p>
        </main>
        </>
    }
}
