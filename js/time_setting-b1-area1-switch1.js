
//顯示及關閉時程設定視窗
let item_setting = document.querySelector("#item_setting");
document.querySelector("#add_btn").addEventListener("click", evt => item_setting.style.visibility = "visible");
document.querySelector("#close_btn").addEventListener("click", evt => item_setting.style.visibility = "hidden");


//建立時間選單
let list = document.createElement("ul");
list.classList.add("time_list");
let content = document.createElement(`div`);
for (let i = 0; i < 24; i++)
{
    let item = document.createElement("li");
    item.textContent = i;
    content.appendChild(item);
}
list.appendChild(content);

let hour = item_setting.querySelectorAll(`[id*="hour"]`);

hour.forEach(ele => 
{
    ele.appendChild(list.cloneNode(true));
    ele.addEventListener(`click`, evt =>
    {
        if (evt.target.tagName == "LI")
        {
            ele.setAttribute(`value`, evt.target.textContent);
            ele.firstChild.textContent = evt.target.textContent;
        }
        ele.firstElementChild.style.visibility = ele.firstElementChild.style.visibility === `visible` ? `hidden` : `visible`;
        evt.stopPropagation();
    });
}
);

let minute = item_setting.querySelectorAll(`[id*="minute"]`);

list = document.createElement("ul");
list.classList.add("time_list");
content = document.createElement(`div`);
for (let i = 0; i < 60; i += 15)
{
    let item = document.createElement("li");
    item.textContent = i;
    content.appendChild(item);
}
list.appendChild(content);

minute.forEach(ele => 
{
    ele.appendChild(list.cloneNode(true));
    ele.addEventListener(`click`, evt =>
    {
        if (evt.target.tagName == "LI")
        {
            ele.setAttribute(`value`, evt.target.textContent);
            ele.firstChild.textContent = evt.target.textContent;
        }
        ele.firstElementChild.style.visibility = ele.firstElementChild.style.visibility === `visible` ? `hidden` : `visible`;
        evt.stopPropagation();
    });
}
);

let add_item_btn = document.querySelector("#add_item_btn");
add_item_btn.addEventListener(`click`, evt =>
{
    let values = [];
    hour.forEach(e => values.push(e.getAttribute(`value`)));
    minute.forEach(e => values.push(e.getAttribute(`value`)));
    values.forEach(v =>
    {
        if (v == null) return;
    });
    let item = document.createElement(`button`);
    item.innerHTML = `${values[0]}:${values[2]} 到 ${values[1]}:${values[3]}`;
    document.querySelector("#items").appendChild(item);
    evt.stopPropagation();
});