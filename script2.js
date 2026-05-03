
/*window.onload = function() {
    let mode = localStorage.getItem("theme");

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("btn").innerHTML = " Light Mode";
    }
};

let btn = document.getElementById("btn");

btn.onclick = function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark"); 
        btn.innerHTML = " Light Mode";
    } else {
        localStorage.setItem("theme", "light"); 
        btn.innerHTML = " Dark Mode";
    }
};*/

function searchDoctor() {
    let text = document.getElementById("doctorSearch").value;

    if (text.trim() === "") {
        alert("Search box is empty");
    } else {
        alert("Finding: " + text);
    }
}

