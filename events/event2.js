
const content = document.getElementById("content");
const button = document.getElementById("stop");



const changetext = function(){
    content.textContent = "Hi! this is reweel haider";
}
const changeme = setTimeout(changetext, 2000);


button.addEventListener("click", function(){
    clearTimeout(changeme)
    console.log('stopped')
    // content.textContent = "Button clicked! Text changed.";
});
