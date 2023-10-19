function change() {
    var menu = document.getElementById("menu");
    var spinner = document.getElementById("spinner")
    var backgroundImage = document.getElementById('background-image')

    menu.classList.toggle("active");
    spinner.classList.toggle("spin");
    document.body.classList.toggle("dark");
    backgroundImage.classList.toggle("transparent");
}