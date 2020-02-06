function changeColor() {
    var elem = document.getElementById('divTest');
    elem.style.backgroundColor = 'pink';
}

function skipIfMax(element) {
    max = parseInt(element.dataset.max);
    if (element.value.length >= max && element.nextElementSibling) {
        element.nextElementSibling.focus();
    }
}

function checkPassWord() {
    var p1 = document.getElementById('password1').value;
    var p2 = document.getElementById('password2').value;
    var elem = document.getElementById('passwordTest');
    if (p1 == p2) {
        elem.style.backgroundColor = 'green';
        elem.innerHTML = "Password matched!";
    } else {
        elem.style.backgroundColor = 'red';
        elem.innerHTML = "Password mismatch!";
    }
}

function checkUserName() {
    var input = document.getElementById('username').value;
    var output = document.getElementById('usernameTest')
    if (input.match("^[a-zA-Z0-9]*$")) {
        output.innerHTML = "Username validated!";
    } else {
        output.innerHTML = "Username failed";
    }
}

function upperConvert() {
    var input = document.getElementById("userInput").value.toUpperCase();
    var output = document.getElementById("UpperOutput");
    output.innerHTML = input;
}

function CheckNameAndAge() {
    var input1 = document.getElementById("name").value;
    var input2 = document.getElementById("age").value;
    var btn = document.getElementById("checkButton");
    if(input1 != "" && input2 != ""){
        btn.removeAttribute('disabled')
    } else {
        btn.disabled="disabled"
        return
    }
}