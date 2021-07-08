let nav = document.querySelector("#nav");
document.querySelector("#expand_menu_btn").addEventListener('click', () =>
{
    nav.style.visibility = "visible";
    nav.classList.add("expand");
});
document.querySelector("#collapse_menu_btn").addEventListener('click', () =>
{
    nav.style.visibility = "hidden";
    nav.classList.remove("expand");
});