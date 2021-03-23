import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import React, { Component } from 'react'
import '../css/MostWatched.css'
import '../css/movies-Globals.css'

const url = 'https://api.themoviedb.org/3';

const {REACT_APP_API_KEY} = process.env;

const recivedJSON = {
    "url":url,
    "cat":"movie",
    "id":"popular",
    "key":REACT_APP_API_KEY,
    "lang":navigator.language
}

function makeUrl ({ url, cat, id, key, lang }) {
    return `${url}/${cat}/${id}?api_key=${key}&language=${lang}`
}

export default class MostWatched extends Component {
    state = {
        title: '',
        overview: '',
        background: '',
        grade: '',
        date: ''
    }

    componentDidMount() {
        axios.get(makeUrl(recivedJSON))
        .then(res => {
            const data = res.data
            const result = data.results[Math.floor(Math.random() * data.results.length)]
            this.setState({ 
                title: result.title,
                overview: result.overview,
                background: result.backdrop_path,
                grade: result.vote_average,
                date: result.release_date.substring(0,4)
            })
        })
    }
    
    render() {
        return (
            <>
            <div className='mostWatched'>
                <div className="text pd-10">
                    <h1>{this.state.title}</h1>
                    <div className='desc flex ai-c'>
                        <h3 className='mr-10 rate'>{this.state.grade} Rating</h3>
                        <h4 className='mh-10 date'>{this.state.date}</h4>
                        <h5 className='mh-10 info'>HD</h5>
                        <h5 className='ml-10 info'>5.1</h5>
                    </div>
                    <p className='desc-info'>{this.state.overview}</p>
                    <div className="buttons">
                        <button className='btn desc-btn mr-10 play tran-2'><FontAwesomeIcon icon={faPlay} className='mr-10'/>Play</button>
                        <button className='btn desc-btn my-list tran-2'><FontAwesomeIcon icon={faPlus} className='mr-10'/>My list</button>
                    </div>
                </div>
                <div className="img-background">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.background}`} alt="Background Image"/>
                </div>
            </div>
            </>
        )
    }
}
