function (e) {

    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json.filter(titleLength))) //for titles part

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