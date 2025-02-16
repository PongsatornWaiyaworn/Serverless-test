async function sendName() {
    const name = document.getElementById("nameInput").value;
    if (!name.trim()) {
        document.getElementById("result").textContent = "Please enter your name.";
        return;
    }
    const response = await fetch(`/.netlify/functions/hello?name=${encodeURIComponent(name)}`);
    const data = await response.json();
    document.getElementById("result").textContent = data.message;
}
