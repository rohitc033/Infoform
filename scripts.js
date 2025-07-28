document.getElementById("applicationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  const response = await fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  document.getElementById("response").innerText = result;
});

function clearForm() {
  const form = document.querySelector("form");
  form.reset(); 
  document.getElementById("response").textContent = ""; 
}

