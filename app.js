const number = document.querySelector(".not");
const unread = document.querySelectorAll(".unread");
const btn = document.querySelector(".mark");
number.textContent = unread.length

unread.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.remove("unread")
        const newunread = document.querySelectorAll(".unread");
        number.textContent = newunread.length;
    })
})

btn.addEventListener("click", function() {
    unread.forEach(item=>item.classList.remove("unread"))
    const newunread = document.querySelectorAll(".unread")
    number.textContent = newunread.length;
})