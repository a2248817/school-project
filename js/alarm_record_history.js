//開啟及關閉條件篩選清單
let filter_menu_expand = document.querySelector("#filter_menu_expand");
let filter_menu = document.querySelector("#filter_menu");
let filter_menu_collapse = document.querySelector("#filter_menu_collapse");
filter_menu_expand.addEventListener("click", () => filter_menu.style.visibility = "visible");
filter_menu_collapse.addEventListener("click", () => filter_menu.style.visibility = "hidden");

//開啟及關閉各個條件選項的清單，並將篩選條件變更為選取的選項
let filter_buttons = Array.from(document.querySelectorAll("#filter_menu>button"))
    .filter(button => button.nextElementSibling != null && button.nextElementSibling.tagName == "DIV");
filter_buttons.forEach(button =>
{
    let options = button.nextElementSibling;
    button.addEventListener("click", () => options.style.visibility = options.style.visibility == "visible" ? "hidden" : "visible");
    options.querySelectorAll("div>p").forEach(option => option.addEventListener("click", () =>
    {
        button.textContent = option.textContent;
        options.style.visibility = "hidden";
    }));

});

//執行條件篩選查詢，並將結果顯示出來
let query_button = document.querySelector("#query_button");
let record_items = Array.from(document.querySelectorAll("#records>.record_item"));
let query_result = [];
query_button.addEventListener("click", () =>
{
    query_result = record_items.filter(record =>
    {
        record.addEventListener("click", () => window.open("../html/alarm_record_details.html", "_self"));
        return record.querySelector(".location").textContent == filter_menu.querySelector("#filter_location").textContent &&
            record.querySelector(".method").textContent == filter_menu.querySelector("#filter_method").textContent;
        // record.querySelector(".dateTime").textContent == filter_menu.querySelector("#filter_location").textContent;
    });
    document.querySelector("#query_result_text").style.display = "flex";
    document.querySelector("#records").innerHTML = "";
    query_result.forEach(record => document.querySelector("#records").appendChild(record));
});