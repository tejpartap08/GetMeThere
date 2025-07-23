document.addEventListener("DOMContentLoaded", () => {
  const plannerForm = document.getElementById("planner-form");
  const resultDiv = document.getElementById("planner-result");

  plannerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (from && to && from !== to) {
      resultDiv.innerHTML = `✅ Fastest route from <strong>${from}</strong> to <strong>${to}</strong> is 15 mins via Bus 731.`;
    } else if (from === to) {
      resultDiv.innerHTML = `⚠️ Departure and destination cannot be the same.`;
    } else {
      resultDiv.innerHTML = `⚠️ Please select both locations.`;
    }
  });
});
