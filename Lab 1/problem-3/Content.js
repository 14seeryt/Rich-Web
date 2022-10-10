//array of images
let errorMessage = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fhow-to-write-helpful-error-messages-to-improve-your-apps-ux%2F&psig=AOvVaw2h5hX7Z-YVXqFPr2DPYGwa&ust=1665477333804000&source=images&cd=vfe&ved=2ahUKEwjSjZbYoNX6AhULIsAKHZlgCSsQr4kDegUIARDbAQ"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * errorMessage.length)
    imgs[i].src = errorMessage[randomImg]
}

const input = document.getElementsByTagName("input");
for (let i = 0; i < 10; i++) {
    length[i].innerText = alert("Hello! This webpage is broken please try again!")
}

//do the same for footer elements
const footer = document.getElementsByTagName("footer");
for (let i = 0; i < footer.length; i++) {
    footer[i].innerText = "This webpage is broken!";
}

const form = document.getElementsByTagName("form");
for (let i = 0; i < form.length; i++) {
    form[i.innerText = <p>"This should be a form but it is not!"</p>]
}




