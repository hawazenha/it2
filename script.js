
    let mode = localStorage.getItem("theme");

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        let checkBtn = document.getElementById("btn") ;
        if (checkBtn){
            checkBtn.innerHTML= "Light Mode";
    }

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
};
