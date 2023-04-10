function practice2() {
    var r_border = document.getElementById("r_border").value;
    var g_border = document.getElementById("g_border").value;
    var b_border = document.getElementById("b_border").value;
    var r_background = document.getElementById("r_background").value;
    var g_background = document.getElementById("g_background").value;
    var b_background = document.getElementById("b_background").value;
    var border_width = document.getElementById("border_width").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${r_border},${g_border},${b_border})`;
    tag.style.borderWidth = border_width + "px";
    tag.style.backgroundColor = `rgb(${r_background},${g_background},${b_background})`;
}

function practice3() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8 || password2.length < 8) {
        alert("Password must be at least 8 characters long");
    } else if (password1 != password2) {
        alert("Passwords do not match");
    }else {
        alert("Passwords match");
    }
}