const nav = document.getElementById('subsections');
const hidenav = () => {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};

const project1 = document.getElementById('project-1d');
    const hideproject = () => {
        if (project1.style.display === "none") {
            project1.style.display = "block";
        }
        else {
            project1.style.display = "none";
        }
 };
 const project2 = document.getElementById('project-2d');
 const hideproject2 = () => {
     if (project2.style.display === "none") {
         project2.style.display = "block";
     }
     else {
         project2.style.display = "none";
     }
};

const project3 = document.getElementById('project-3d');
    const hideproject3 = () => {
        if (project3.style.display === "none") {
            project3.style.display = "block";
        }
        else {
            project3.style.display = "none";
        }
 };

 var modal = document.getElementById('myModal');
 var btn = document.getElementById("modalButton");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myImages");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
};