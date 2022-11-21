function count(e) {

    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => console.log(response.json()))
        .then(json => console.log(json(titleLength))) //for titles part
        .then(json => console.log(json.filter(frequency())))


    function titleLength(json) {
        const titles = json.title
        const words = titles.split(" ")
        console.log(words.length > 6)
        return words.length > 6
    }

    function frequency(json) {
        const body = json.body
        const words = body.words.split("")

    }
}