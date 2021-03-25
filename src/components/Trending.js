import React, { Component } from 'react'
import { cats } from '../config'
import TrendingArticle from './TrendingArticle'
import '../scss/Articles.scss'

const arrayForUser = [
    {
        "title":"Trending Now",
        "cats": cats[2],
        "id": "all/week"
    },
    {
        "title": "Top 10 Today",
        "cats": cats[2],
        "id": "all/day",
        "top": true
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
    },
    {
        "title": "Up Coming",
        "cats": cats[0],
        "id": "upcoming"
    },
    {
        "title": "On Air Series",
        "cats": cats[1],
        "id": "on_the_air"
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
                            top10={obj.top}
                        />
                    )
                })}
            </section>
        )
    }
}
