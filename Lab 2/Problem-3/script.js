var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    alert(originalName)

    fetch("https://api.github.com/users/" + originalName)

        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("result").innerHTML = `
            <a target="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}"/>

            `
            document.getElementById("name").innerHTML = `
            ${data.name}
            `
            document.getElementById("login").innerHTML = `
            ${data.login}
            `
            document.getElementById("email").innerHTML = `
            ${data.email}
            `
            document.getElementById("location").innerHTML = `
            ${data.location}
            `
            document.getElementById("public_gists").innerHTML = `
            ${data.public_gists}
            `

            function httpGetAsync(theUrl, callback) {
                theUrl = "https://www.github.com/users/" + originalName + "/repos"
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                        callback(xmlHttp.responseText);
                }
                xmlHttp.open("GET", theUrl, true); // true for asynchronous 
                xmlHttp.send(null);
            }
        })
})
