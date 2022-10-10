//array of images
let errorMessage = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fhow-to-write-helpful-error-messages-to-improve-your-apps-ux%2F&psig=AOvVaw2h5hX7Z-YVXqFPr2DPYGwa&ust=1665477333804000&source=images&cd=vfe&ved=2ahUKEwjSjZbYoNX6AhULIsAKHZlgCSsQr4kDegUIARDbAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F08%2F000-http-error-codes.png&imgrefurl=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwordpress%2Fthe-ultimate-guide-to-common-http-error-codes&tbnid=Leystw72I66tAM&vet=12ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygAegUIARDbAQ..i&docid=G84NVnYGVQ80kM&w=1080&h=608&q=error&ved=2ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygAegUIARDbAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.computerhope.com%2Fjargon%2Fe%2Ferror.png&imgrefurl=https%3A%2F%2Fwww.computerhope.com%2Fjargon%2Fe%2Ferror.htm&tbnid=cAx03INsmFse5M&vet=12ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygBegUIARDdAQ..i&docid=Z0ChwtQ5SLVbDM&w=350&h=350&q=error&ved=2ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygBegUIARDdAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.itpro.co.uk%2Fimage%2Fupload%2Fs--X-WVjvBW--%2Ff_auto%2Ct_content-image-full-desktop%401%2Fv1570814016%2Fitpro%2Fblue_screen_of_death.png&imgrefurl=https%3A%2F%2Fwww.itpro.com%2Foperating-systems%2Fmicrosoft-windows%2F358097%2Fhow-to-fix-a-blue-screen-of-death-error-in-windows-10&tbnid=xQ0IjZ2-vynuFM&vet=12ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygFegUIARDmAQ..i&docid=xmD8dWcFVNYIxM&w=1260&h=710&q=error&ved=2ahUKEwiH4ontutb6AhXvTUEAHQC4DkEQMygFegUIARDmAQ"
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
    footer[i].innerText = "This webpage is no longer working !";
}

const paragraph = document.getElementsByTagName("p");
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].innerText = "This webpage is broken!";
}




