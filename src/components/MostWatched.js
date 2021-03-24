import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import React, { Component } from 'react'
import '../css/MostWatched.css'
import '../css/movies-Globals.css'
import { imgUrl, cats, makeUrl } from '../config'

export default class MostWatched extends Component {
    state = {
        title: '',
        overview: '',
        background: '',
        grade: '',
        date: ''
    }

    componentDidMount() {
        axios.get(makeUrl(cats[2],"all/week"))
        .then(res => {
            const data = res.data
            const result = data.results[Math.floor(Math.random() * data.results.length)]
            function getDate () {
                if (result.release_date) {
                    return result.release_date.substring(0,4)
                } else {
                    return result.first_air_date.substring(0,4)
                }
            }
            this.setState({ 
                title: result.title || result.name,
                overview: result.overview,
                background: result.backdrop_path,
                grade: result.vote_average,
                date: getDate()
            })
        })
    }
    
    render() {
        return (
            <>
            <div className='mostWatched'>
                <div className="text pd-10 pd-50">
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
                    <img src={ imgUrl + 'original' + this.state.background } alt="Background"/>
                    <div className='shadow'></div>
                </div>
            </div>
            </>
        )
    }
}
