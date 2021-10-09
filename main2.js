const search = document.querySelector(".search");
const list = document.querySelector(".shop-list");
const icon = document.querySelector(".icon");
const btn = document.querySelector(".plus-button");

function onadd() {
  const text = search.value;
  console.log(text);

  const item = createItem(text);
  list.appendChild(item);
}
function createItem(text) {
  const box = document.createElement("li");
  const inText = document.createElement("span");
  inText.innerText = text;
  const del = document.createElement("div");
  del.innerHTML = `<button>삭제</button>`;
  box.appendChild(inText);
  box.appendChild(del);
  return box;
}
btn.addEventListener("click", function () {
  onadd();
});
search.addEventListener("keypress", function (e) {
  if (e.Key === "Enter") console.log("엔터쳤다");
});
