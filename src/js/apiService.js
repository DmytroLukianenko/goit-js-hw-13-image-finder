const fetchImages = (query, page, API_KEY) => {

    const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`
    return fetch(URL).then(response => {
        if (response.status === 200) {
            return response.json()
        }
    })
        .then(data => {
            //console.log(data)
            return data.hits;
        })
    //.catch(err => console.log((err)))
}
export default fetchImages