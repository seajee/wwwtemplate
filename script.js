const buttons = document.getElementsByTagName("button");
const main = document.getElementsByClassName("main")[0];

for (let i = 0; i < buttons.length; ++i) {
    const button = buttons[i];

    button.onclick = function() {
        fetch(button.innerHTML)
            .then(response => response.text())
            .then(data => {
                main.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                main.innerHTML = "<p>Error: Could not fetch test.txt</p>";
            });
    }
}
