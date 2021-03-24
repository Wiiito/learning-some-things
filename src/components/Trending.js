import React, { Component } from 'react'
import { cats } from '../config'
import TrendingArticle from './TrendingArticle'
import '../css/Articles.css'

const arrayForUser = [
    {
        "title":"Trending Now",
        "cats": cats[2],
        "id": "all/week"
    },
    {
        "title": "Trending Movies",
        "cats": cats[0],
        "id": "popular"
    },
    {
        "title": "Trending Series",
        "cats": cats[1],
        "id": "popular"
    }
]

export default class Trending extends Component {
    render() {
        return (
            <section>
                {arrayForUser.map(obj => {
                    return (
                        <TrendingArticle
                            key={obj.title}
                            keyProp={obj.title}
                            title={obj.title} 
                            cats={obj.cats}
                            id={obj.id}
                        />
                    )
                })}
            </section>
        )
    }
}
