import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component } from 'react'
import { imgUrl, makeUrl } from '../config'

export default class TrendingArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            windowWidth: window.innerWidth,
            result: [],
            width: ''
        };
    }
    
    componentDidMount() {
        var url = makeUrl(this.props.cats, this.props.id )
        axios.get(url)
        .then(res => {
            const data = res.data
            this.setState({ 
                result: data.results,
                width: 186 * data.results.length
            })
        })
    }     
    render() {
        var margin = 0
        function changeMargin(side, id, ww) {
            const element = document.getElementById(id)
            const maxWidthPredict = Number(element.style.width.replace(/\D/g,'')) + (margin - (ww - 100 - 186))
            const maxWidth = -Number(element.style.width.replace(/\D/g,'')) + ww - 108
            if (margin + ww - 100 >= 0 && side == 1) {
                if (margin == 0) {
                    margin = maxWidth
                } else {
                    margin = 0
                }
            } else {
                if (maxWidthPredict <= ww - 100 && side == -1) {
                    if (margin == maxWidth) {
                        margin = 0
                    } else {
                        margin = maxWidth
                    }
                } else {
                    margin = margin + side*(ww - 100 - 186)
                }
            }
            element.style.marginLeft = margin + 'px'
        }

        return (
            <article className='pd-50'>
                <h1>{this.props.title}</h1>
                <div className='imgs-cont'>
                    <button className='btn arrows ai-c arrow-left '><FontAwesomeIcon className='tran-2' icon={faAngleLeft} onClick={() => changeMargin(1, this.props.keyProp, this.state.windowWidth)}/></button>
                    <button className='btn arrows ai-c arrow-right '><FontAwesomeIcon className='tran-2' icon={faAngleRight} onClick={() => changeMargin(-1, this.props.keyProp, this.state.windowWidth)}/></button>
                    <div className='imgs flex tran-8' id={this.props.keyProp} style={{ width: this.state.width }}>
                    {this.state.result.map(movie => {
                        return (
                            <img src={ imgUrl + 'w342' + movie.poster_path } key={movie.id} alt={movie.name || movie.title} className='mr-10 tran-2'/>
                        )
                    })}
                    </div>
                </div>
            </article>
        )
    }
}
