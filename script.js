const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.remove();
})

let mouse_cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouse_cursor.style.top = e.pageY + "px";
    mouse_cursor.style.left = e.pageX + "px";
}