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
        window.addEventListener('resize', () => {
            this.setState({windowWidth: window.innerWidth})
        })
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
            if (margin + ww - 100 >= 0 && side === 1) {
                if (margin === 0) {
                    margin = maxWidth
                } else {
                    margin = 0
                }
            } else {
                if (maxWidthPredict <= ww - 100 && side === -1) {
                    if (margin === maxWidth) {
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
        //Nothing Before this

        const slider = document.querySelector(`.imgs`);
        let isDown = false;
        let startX;
        let scrollLeft;

        if (slider) {
        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
        isDown = false;
        });

        slider.addEventListener('mouseup', () => {
        isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        });
        }

        //NOthing after this

        return (
            <article>
                <h1>{this.props.title}</h1>
                <div className='imgs-cont'>
                    <button className='btn arrow ai-c arrow-left hide-for-tablet'><FontAwesomeIcon className='tran-2' icon={faAngleLeft} onClick={() => changeMargin(1, this.props.keyProp, this.state.windowWidth)}/></button>
                    <button className='btn arrow ai-c arrow-right hide-for-tablet'><FontAwesomeIcon className='tran-2' icon={faAngleRight} onClick={() => changeMargin(-1, this.props.keyProp, this.state.windowWidth)}/></button>
                    <div className='imgs flex tran-8' id={this.props.keyProp} style={ this.props.top10 ? { width: 310 * 10 } : { width: this.state.width }}>
                    {this.props.top10 
                    ? 
                    this.state.result.map((movie, i) => {
                        if (i < 10) {
                            return (
                                <div className='topDiv flex ai-c mr-10' key={movie.title || movie.name}>
                                    <span>{i + 1}</span>
                                    <img src={imgUrl + 'w342' + movie.poster_path} className='tran-2 point' alt={movie.title || movie.name}/>
                                </div>
                            )
                        }
                    })
                    :
                    this.state.result.map(movie => {
                        return (
                            <img src={ imgUrl + 'w342' + movie.poster_path } key={movie.id} alt={movie.name || movie.title} className='mr-10 tran-2 point'/>
                        )
                    })}
                    </div>
                </div>
            </article>
        )
    }
}