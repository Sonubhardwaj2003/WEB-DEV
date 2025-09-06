document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm");
  const sourceInput = document.getElementById("source");
  const priceInput = document.getElementById("price");
  const expencesDiv = document.getElementById("expences"); // note original spelling
  const totalDisplay = document.querySelector(".spTotal");

  // let expencesArr =JSON.parse(localStorage.getItem("expencesArr")) || [];

  let expencesArr = [];

  renderAll();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addExpense();
  }); 

  function addExpense() {
    const text = sourceInput.value.trim();
    const priceStr = priceInput.value.trim();
    const amount = parseFloat(priceStr);

    if (!text) {
      alert("Please enter a source/description.");
      sourceInput.focus();
      return;
    }
    if (priceStr === "" || !isFinite(amount)) {
      alert("Please enter a valid numeric amount.");
      priceInput.focus();
      return;
    }

    const newexp = {
      id: Date.now(),
      text,
      price: +amount,
      completed: false,
    };

    expencesArr.push(newexp);
    // saveToLocalStortage();
    renderAll();
    form.reset();  //clear the form input
    sourceInput.focus();
  }

  function renderAll() {
    expencesDiv.innerHTML = "";
    expencesArr.forEach(renderExpence);
    updateTotal();
  }

  function renderExpence(exp) {
    const item = document.createElement("div");
    item.className = "product" + (exp.completed ? " completed" : "");
    item.dataset.id = exp.id;

    const label = document.createElement("span");
    label.textContent = `${exp.text} : ₹${Number(exp.price).toFixed(2)}`;
    label.style.cursor = "pointer";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.type = "button";

    // ✅ Toggle completion when clicking label
    label.addEventListener("click", () => {
      exp.completed = !exp.completed;
      item.classList.toggle("completed");
      updateTotal();
    });

    // ✅ Delete exp
    delBtn.addEventListener("click", (ev) => {
      ev.stopPropagation(); // prevent completion toggle
      expencesArr = expencesArr.filter((t) => t.id !== exp.id);
      renderAll();
    });

    item.appendChild(label);
    item.appendChild(delBtn);
    expencesDiv.appendChild(item);
  }

  function updateTotal() {
    const total = expencesArr
      .filter((t) => !t.completed) // exclude completed if you want
      .reduce((sum, t) => sum + (Number(t.price) || 0), 0);
    totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
  }


  // function saveToLocalStortage(){
  //   localStorage.setItem("expencesArr",JSON.stringify(expencesArr));
  // }
});
