let income = 0, expense = 0, balance = 0;
let chart;

function addEntry() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  if (!desc || isNaN(amount)) return;

  const list = document.getElementById("history");
  const li = document.createElement("li");
  li.textContent = `${type.toUpperCase()}: ₹${amount} - ${desc}`;
  list.appendChild(li);

  if (type === "income") income += amount;
  else expense += amount;

  balance = income - expense;

  document.getElementById("income").textContent = income;
  document.getElementById("expense").textContent = expense;
  document.getElementById("balance").textContent = balance;

  updateChart();
}

function updateChart() {
  const ctx = document.getElementById("chart").getContext("2d");
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [income, expense],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });
}