function validateForm() {
    var valid = true;

    if (!validateField(this, 'name'))
        valid = false;

    if (!validateField(this, 'email'))
        valid = false;

    if (!validateField(this, 'number'))
        valid = false;

    return valid;
}

function validateField(context, fieldName) {
    var field = document.forms['entForm'][fieldName],
        msg = 'Please enter your ' + fieldName,
        errorField = document.getElementById(fieldName + '_error');
    console.log(context);
    if (context instanceof HTMLFormElement || context.id === fieldName)
        errorField.innerHTML = (field.value === '') ? msg : '';

    return field.value !== ''; // return if the field is fulfilled
}

function lettersAndSpaceCheck(name) {
    var regEx = /^[a-z][a-z\s]*$/;
    if (name.value.match(regEx)) {
        return true;
    }
    else {
        alert("Please enter letters and space only.");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () { // when the DOM is ready
    // add event handlers when changing the fields' value
    document.getElementById('name').addEventListener('input', validateForm);
    document.getElementById('number').addEventListener('input', validateForm);
    document.getElementById('email').addEventListener('input', validateForm);

    // add the event handler for the submit event
    document.getElementById('entForm').addEventListener('submit', validateForm);
});
