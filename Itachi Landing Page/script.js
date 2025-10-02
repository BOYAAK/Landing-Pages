document.getElementById("readStory").addEventListener("click", function(event){
    event.preventDefault(); // ⬅️ Stops the page from navigating
    this.innerHTML = "Loading...";
    setTimeout(() => {
        this.innerHTML = "Read Story";
    }, 2000);
});
