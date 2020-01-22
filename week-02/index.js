console.log ("JavaScript text to test out my HTML page.")
let week = prompt("Enter the week number",2);
exercise = parseInt(week) - 1;
let msg = `This is week number ${week}, exercise number ${exercise}.`;
document.write(msg);

function True() {
    alert("Great!");
};

function False() {
    location.reload(false);
};