function change() {
    const container = document.querySelector('.main-container');
    if (container) {
        container.classList.toggle('active');
            clearData();
    }
}


function Signup(event) {
    event.preventDefault(); 

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-mail').value;
    const password = document.getElementById('user-Pass').value;
    if(name==="" || email==="" || password==""){
        alert("Fill all boxes");
        return;
    }
    const userData = { name, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert("Welcome");


  
    clearData();
    
  
}


function Login(event) {
    event.preventDefault(); 

    const email = document.getElementById('login-mail').value;
    const password = document.getElementById('login-Pass').value;

    if (email==="" || password===""){
        alert("Please enter both email and password");
        return;
    }
    const savedData = localStorage.getItem(email);

    if (savedData) {
        const user = JSON.parse(savedData);
        
        if (user.password === password) {
            alert("Logged in");
            
        
            clearData(); 

            window.location.href="home.html";
        } else {
            alert("Incorrect password.");
        }
    } else {
        alert(" Account not found");
    }
}

window.onload = function() {
    let mode = localStorage.getItem("them");

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("btn").innerHTML= "Light Mode";
    }
};

let btn = document.getElementById("btn");

btn.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("them", "dark");
        btn.innerHTML= "Light Mode";
    } else {
        localStorage.setItem("them", "light");
         btn.innerHTML = "Dark Mode";
    }
};

function clearData() {
    document.getElementById('user-name').value = '';
    document.getElementById('user-mail').value = '';
    document.getElementById('user-Pass').value = '';
}