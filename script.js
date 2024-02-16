const page1 = document.getElementsByTagName("button")[0];
const main = document.getElementsByClassName("main")[0];

page1.onclick = function() {
    fetch("test.html")
        .then(response => response.text())
        .then(data => {
            main.innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            main.innerHTML = "<p>Error: Could not fetch test.txt</p>";
        });
};
