const imgUrl = 'https://image.tmdb.org/t/p/'
const url = 'https://api.themoviedb.org/3'
const cats = ["movie","tv","trending"]
const language = navigator.language

const { REACT_APP_API_KEY } = process.env

function makeUrl ( cat, id, page ) {
    if (!page) {page = 1}
    return `${url}/${cat}/${id}?api_key=${REACT_APP_API_KEY}&language=${language}&page=${page}`
}

export { imgUrl, url, cats, language, makeUrl }