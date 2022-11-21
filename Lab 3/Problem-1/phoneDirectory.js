import { fromEvent } from 'rxjs';

//Showing and Hidding contents
const btn = document.getElementById(".btnNav");
const myObservable = fromEvent(button, 'click');

// instead of a function, we will pass an object with next, error, and complete methods
const subscription = myObservable.subscribe({
    // on successful emissions
    next: event => console.log(event),
    // on errors
    error: error => console.log(error),
    // called once on completion
    complete: () => console.log('complete!')
  });

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const data = document.querySelector(".showEntry");
//     const entry = document.querySelector(".addEntry");

//     if (e.target.textContent == "Add A New Entry") {
//         e.target.textContent = "Go Back";
//         data.classList.add("hidden");
//         entry.classList.remove("hidden");
//     }
//     else {
//         e.target.textContent = "Add A New Entry";
//         data.classList.remove("hidden");
//         entry.classList.add("hidden");
//     }
// })

//Event Listner For Adding Contacts
const frm = document.querySelector("#entForm");
const list = document.querySelector("#conList");
if (frm != null) {
    frm.addEventListener('submit', function (e) {
        e.preventDefault();

        //create Elements
        var name = document.querySelector("#name");
        var number = document.querySelector("#number");
        var email = document.querySelector("#email");


        if ((name.value && number.value) != "") {
            const nameEl = document.createElement('td');
            const phoneEl = document.createElement('td');
            const emailEl = document.createElement('td');
            const delEl = document.createElement('td');
            const el = document.createElement('tr');

            //Adding content

            nameEl.textContent = name.value;
            phoneEl.textContent = number.value;
            emailEl.textContent = email.value;
            delEl.textContent = "X";

            //Adding Classes
            delEl.classList.add('delete');
            //Adding to table
            el.appendChild(nameEl);
            el.appendChild(phoneEl);
            el.appendChild(emailEl);
            el.appendChild(delEl);
            list.appendChild(el);

            PhoneValidate();



            //Clear Fields
            name.value = null;
            number.value = null;
            email.value = null;
            document.querySelector(".showName").textContent = name.value;
            document.querySelector(".showPhone").textContent = number.value;
            document.querySelector(".showEmail").textContent = email.value;
            //Show Alert

            document.querySelector(".alert").textContent = "Entry Added To Directory";
            document.querySelector(".alert").style.background = "green";
            setTimeout(clearAlert, 1500);
        }
        else {
            document.querySelector(".alert").textContent = "Error";
            document.querySelector(".alert").style.background = "red";
            setTimeout(clearAlert, 1500);
        }
        function clearAlert() {
            document.querySelector(".alert").textContent = "";

        }

    });
}

function PhoneValidate() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("number").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function validation() {
    var letters = /^[A-Za-z]+$/;

    if (frm.name.match(letters)) {
        return true;
    }
    else {
        alert("Please enter letters and space only")
    }
}

//Event Listner For Deleting Contacts

if (list != null) {
    list.addEventListener('click', function (e) {
        if (e.target.className == "delete") {
            const el = e.target.parentElement;
            el.parentElement.removeChild(el);
        }
    });
}



//To Show Real-Time data

frm.addEventListener('input', function () {

    var name = document.querySelector("#name");
    var number = document.querySelector("#number");
    var email = document.querySelector("#email");
    if (name.value != null) {
        document.querySelector(".showName").textContent = name.value;
        document.querySelector(".showPhone").textContent = number.value;
        document.querySelector(".showEmail").textContent = email.value;
    }
    else {
        document.querySelector(".showName").textContent = " ";
        document.querySelector(".showPhone").textContent = " ";
        document.querySelector(".showEmail").textContent = " ";
    }
})