let pre = null;
let curr = null;

let preId;
let currId;

document.querySelectorAll(".drag-item").forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});

const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});


dropZone.addEventListener("drop", async (e) => {
  let result = document.querySelector('.result');
  e.preventDefault();
  const dataSetValue = e.dataTransfer.getData("text/plain");

  let box = document.querySelector("#drop-zone");
  let sel = document.querySelector(`#${dataSetValue}`);
  curr = sel.getAttribute("data-set");
  currId = dataSetValue;
  box.innerHTML += `
                <div class="drag-item ${curr}" draggable="true" data-set="${curr}" id="${currId}">
                    ${sel.innerHTML}
                </div>
            `;

  if (curr === pre) {
    result.innerHTML = "correct";
    await setTimeout(() => {
      document.querySelectorAll(`.${curr}`).forEach((item) => {
        item.style.visibility = "hidden";
      });
      box.innerHTML = "";
      curr = null;
      pre = null;
      currId = null;
      preId = null;
      result.innerHTML = "";
    }, 500);
  } else if (curr != null && pre != null) {
    result.innerHTML = "Wrong";
    curr = null;
    pre = null;
    currId = null;
    preId = null;
    await setTimeout(() => {
      box.innerHTML = "";
      result.innerHTML = "";
    }, 500);
  }

  pre = curr;
  preId = currId;
  
});
