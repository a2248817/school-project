
//顯示及關閉時程設定視窗
let item_setting = document.querySelector("#item_setting");
document.querySelector("#add_btn").addEventListener("click", evt => item_setting.style.visibility = "visible");
document.querySelector("#close_btn").addEventListener("click", evt => item_setting.style.visibility = "hidden");

let list = document.createElement("ul");
list.style.listStyle = "none";
list.style.position = "absolute";
list.style.zIndex = 100;
list.style.overflow = "hidden";
list.style.overflowY = "visible"
list.style.height = "40vh";
list.style.width = "100px";
for (let i = 0; i < 100; i++)
{
    let item = document.createElement("li");
    item.textContent = i;
    list.appendChild(item);
}

let hour = item_setting.querySelector("#hour").appendChild(list);