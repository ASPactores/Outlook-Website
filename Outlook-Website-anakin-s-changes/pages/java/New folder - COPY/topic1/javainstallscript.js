function dropdownApp() {
    document.getElementById("navtext-content").classList.toggle("show");
}

function show() {
    document.getElementById("side-menu-container").classList.toggle("active");
}
function show() {
    document.getElementById("side-menu-container").classList.toggle("active");
}

function toggleForm() {
    var blur1 = document.getElementById('blurhead');
    var blur2 = document.getElementById('blurbody');
    var blur4 = document.getElementById('blurfooter');
    var popup = document.getElementById('myform');
    blur1.classList.toggle('active');
    blur2.classList.toggle('active');
    blur4.classList.toggle('active');
    popup.classList.toggle('active');
  }

function dropdownApp1() {
    var owo = document.getElementById("navtext-content1");
    owo.classList.toggle("showlist");
    console.log(owo);
}

function dropdownApp2() {
    var owo = document.getElementById("navtext-content2");
    owo.classList.toggle("showlist");
    console.log(owo);
}

function mobileNav() {
    var owo = document.getElementById("mobile-navigation");
    owo.classList.toggle("showlist");
}

window.onclick = function(e) {
    if (!e.target.matches('.navtext')) {
    var myDropdown1 = document.getElementById("navtext-content1");
        if (myDropdown1.classList.contains('showlist')) {
            myDropdown1.classList.remove('showlist');
        }
    var myDropdown2 = document.getElementById("navtext-content2");
        if (myDropdown2.classList.contains('showlist')) {
            myDropdown2.classList.remove('showlist');
        }
    }
}

function something(){
    var editor = CodeMirror.fromTextArea(document.getElementById('editor'),
    {
        mode: "python",
        theme: "ayu-mirage",
        lineNumbers: true
    });
    editor.setSize("100%", "100");
    console.log("YES");
}

function somethingelse(){
    var output = CodeMirror.fromTextArea(document.getElementById('output'),
    {
        mode: "python",
        theme: "ayu-mirage",
        lineNumbers: true
    });
    editor.setSize("100%", "100");
    console.log("NO");
}
