// ── DATA ──
let transactions = [
  {
    id: 1,
    date: "2025-10-05",
    description: "Monthly Salary",
    category: "Salary",
    type: "income",
    amount: 75000,
  },
  {
    id: 2,
    date: "2025-10-07",
    description: "Rent Payment",
    category: "Rent",
    type: "expense",
    amount: 18000,
  },
  {
    id: 3,
    date: "2025-10-09",
    description: "Grocery Store",
    category: "Food",
    type: "expense",
    amount: 3200,
  },
  {
    id: 4,
    date: "2025-10-12",
    description: "Uber Ride",
    category: "Transport",
    type: "expense",
    amount: 450,
  },
  {
    id: 5,
    date: "2025-10-14",
    description: "Netflix",
    category: "Entertainment",
    type: "expense",
    amount: 649,
  },
  {
    id: 6,
    date: "2025-10-16",
    description: "Freelance Project",
    category: "Freelance",
    type: "income",
    amount: 22000,
  },
  {
    id: 7,
    date: "2025-10-18",
    description: "Electricity Bill",
    category: "Utilities",
    type: "expense",
    amount: 1800,
  },
  {
    id: 8,
    date: "2025-10-20",
    description: "Pharmacy",
    category: "Health",
    type: "expense",
    amount: 860,
  },
  {
    id: 9,
    date: "2025-10-22",
    description: "Amazon Shopping",
    category: "Shopping",
    type: "expense",
    amount: 4200,
  },
  {
    id: 10,
    date: "2025-10-25",
    description: "Restaurant Dinner",
    category: "Food",
    type: "expense",
    amount: 1400,
  },
  {
    id: 11,
    date: "2025-11-01",
    description: "Monthly Salary",
    category: "Salary",
    type: "income",
    amount: 75000,
  },
  {
    id: 12,
    date: "2025-11-03",
    description: "Rent Payment",
    category: "Rent",
    type: "expense",
    amount: 18000,
  },
  {
    id: 13,
    date: "2025-11-06",
    description: "Grocery Store",
    category: "Food",
    type: "expense",
    amount: 2900,
  },
  {
    id: 14,
    date: "2025-11-10",
    description: "Gym Membership",
    category: "Health",
    type: "expense",
    amount: 1500,
  },
  {
    id: 15,
    date: "2025-11-13",
    description: "Bus Pass",
    category: "Transport",
    type: "expense",
    amount: 600,
  },
  {
    id: 16,
    date: "2025-11-15",
    description: "Mutual Fund Return",
    category: "Investment",
    type: "income",
    amount: 8500,
  },
  {
    id: 17,
    date: "2025-11-19",
    description: "Movie Tickets",
    category: "Entertainment",
    type: "expense",
    amount: 800,
  },
  {
    id: 18,
    date: "2025-11-22",
    description: "New Shoes",
    category: "Shopping",
    type: "expense",
    amount: 3500,
  },
  {
    id: 19,
    date: "2025-11-26",
    description: "Internet Bill",
    category: "Utilities",
    type: "expense",
    amount: 999,
  },
  {
    id: 20,
    date: "2025-11-28",
    description: "Freelance Design",
    category: "Freelance",
    type: "income",
    amount: 15000,
  },
  {
    id: 21,
    date: "2025-12-01",
    description: "Monthly Salary",
    category: "Salary",
    type: "income",
    amount: 75000,
  },
  {
    id: 22,
    date: "2025-12-03",
    description: "Rent Payment",
    category: "Rent",
    type: "expense",
    amount: 18000,
  },
  {
    id: 23,
    date: "2025-12-08",
    description: "Holiday Shopping",
    category: "Shopping",
    type: "expense",
    amount: 8500,
  },
  {
    id: 24,
    date: "2025-12-12",
    description: "Flight Ticket",
    category: "Transport",
    type: "expense",
    amount: 6200,
  },
  {
    id: 25,
    date: "2025-12-20",
    description: "Year-end Bonus",
    category: "Salary",
    type: "income",
    amount: 25000,
  },
 
];

let totalBalence = document.getElementById("totalBal");
let totalIncome = document.getElementById("totalIncome");
let totalExpense = document.getElementById("totalExpense");
let totalTrans = document.getElementById("totalTrans");
let totalIncometrans = document.getElementById("totalIncometrans");
let totalExpensetrans = document.getElementById("totalExpensetrans");
let filterType = document.getElementById("filterType");
let tableBody = document.getElementById("txBody");
let filterCat = document.getElementById("filterCat");
let searchBox = document.getElementById("searchBox");
let addTransaction = document.getElementById("addTransaction");
let modalOverlay = document.getElementById("modalOverlay");
let closeModel = document.getElementById("closeModel");
let roleSelect = document.getElementById("roleSelect");
let tabs = document.querySelectorAll(".nav-item");
let PanalTabs = document.querySelectorAll(".tab");
let panelDashboard = document.getElementById("panel-dashboard");
let panelTransactions = document.getElementById("panel-transactions");
let panelInsights = document.getElementById("panel-insights");
let topcategory = document.getElementById("topcategory");
let topAmount = document.getElementById("topamount");
let saveButton = document.getElementById("saveButton");
// console.log(totalBalence, totalIncome, totalExpense, totalTrans);

let initial = () => {
  updatecardsdetail(transactions);
  updateChart(transactions);
  setUser("admin");
  switchpanel("Dashboard");
  showTopCategory();
};

let updatecardsdetail = (transactions) => {
  let income = transactions.filter(
    (transaction) => transaction.type === "income",
  );

  let expense = transactions.filter(
    (transaction) => transaction.type === "expense",
  );

  let totalIncomes = income.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  let totalexpenses = expense.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );

  let totalincometrans = 0;
  let totalExpensetransation = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      totalincometrans++;
    }
  });

  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      totalExpensetransation++;
    }
  });

  let totalBalences = totalIncomes - totalexpenses;

  totalBalence.textContent = "₹" + totalBalences.toLocaleString("en-IN");
  totalIncome.textContent = "₹" + totalIncomes.toLocaleString("en-IN");
  totalExpense.textContent = "₹" + totalexpenses.toLocaleString("en-IN");
  totalTrans.textContent = transactions.length;
  totalIncometrans.textContent = totalincometrans + " transactions ";
  totalExpensetrans.textContent = totalExpensetransation + " transactions ";
};

// updatecardsdetail(transactions);

let pieChart;
let lineChart;

//* chart logic
let updateChart = (transactions) => {
  console.log("chart bana");
  const ctx = document.getElementById("myChart");
  const ctx2 = document.getElementById("myChart2");

  //* Sirf expense waale filter
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};

  expenses.forEach((t) => {
    if (categoryTotals[t.category]) {
      categoryTotals[t.category] += t.amount;
    } else {
      categoryTotals[t.category] = t.amount;
    }
  });

  // chart ke liye labels & data
  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  // ✅ Destroy old pie chart
  if (pieChart) {
    pieChart.destroy();
  }

  pieChart = new Chart(ctx, {
    type: "pie", // bar, line, pie etc.
    data: {
      labels: labels,
      datasets: [
        {
          label: "Expenses by Category",
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });

  // =========================
  // Line Chart
  // =========================
  // Month-wise grouping
  const monthlyData = {};
  transactions.forEach((tx) => {
    const month = new Date(tx.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      monthlyData[month].income += tx.amount;
    } else {
      monthlyData[month].expense += tx.amount;
    }
  });

  console.log(monthlyData, "hhh");

  const monthlabels = Object.keys(monthlyData);

  const incomeData = monthlabels.map((m) => monthlyData[m].income);
  const expenseData = monthlabels.map((m) => monthlyData[m].expense);
  console.log(incomeData, expenseData, "kkk");

  // Balance calculate
  let balance = 0;
  const balanceData = monthlabels.map((m) => {
    balance += monthlyData[m].income - monthlyData[m].expense;
    return balance;
  });

  // ✅ Destroy old line chart
  if (lineChart) {
    lineChart.destroy();
  }

  lineChart = new Chart(ctx2, {
    type: "line",
    data: {
      labels: monthlabels,
      datasets: [
        {
          label: "Balance",
          data: balanceData,
          borderColor: "#7c6cff",
          backgroundColor: "rgba(124,108,255,0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Income",
          data: incomeData,
          borderColor: "#22c55e",
          borderDash: [5, 5],
          tension: 0.4,
        },
        {
          label: "Expenses",
          data: expenseData,
          borderColor: "#ef4444",
          borderDash: [5, 5],
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff",
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#aaa" },
        },
        y: {
          ticks: { color: "#aaa" },
        },
      },
    },
  });
};

// * month wise data

// ── UTILS ──
const now = new Date();

// ── INIT ──
document.getElementById("dateChip").textContent = now.toLocaleDateString(
  "en-IN",
  { weekday: "short", year: "numeric", month: "short", day: "numeric" },
);

let switchpanel = (value) => {
  console.log(value);

  panelDashboard.classList.remove("active");
  panelTransactions.classList.remove("active");
  panelInsights.classList.remove("active");

  if (value === "Dashboard") {
    panelDashboard.classList.add("active");
  } else if (value === "Transactions") {
    panelTransactions.classList.add("active");
  } else if (value === "Insights") {
    panelInsights.classList.add("active");
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchpanel(tab.textContent.trim());
  });
});

PanalTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchpanel(tab.textContent.trim());
  });
});

let switchTab = (tab) => {};
roleSelect.addEventListener("change", (e) => {
  let user = e.target.value;
  console.log(user, "user");

  setUser(user);
});

let setUser = (user) => {
  const badge = document.getElementById("roleBadge");
  if (user === "admin") {
    badge.textContent = "● Admin";
    addTransaction.style.display = "block";
  } else {
    badge.textContent = "● Viewer";
    addTransaction.style.display = "none";
  }
};

// Transaction part
let renderTables = (value) => {
  const filterValue = value;

  let filterdata = transactions.filter((transaction) => {
    // SEARCH logic (partial match)
    let isSearchMatch =
      transaction.category.toLowerCase().includes(value) ||
      transaction.type.toLowerCase().includes(value);

    // FILTER logic (exact match)
    let isFilterMatch =
      transaction.category === value || transaction.type === value;

    return isSearchMatch || isFilterMatch;
  });

  if (filterdata.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><div class="empty-icon">⊘</div>No transactions found</div></td></tr>`;
    return;
  }

  tableBody.innerHTML = filterdata
    .map((data) => {
      return `<tr>
                            <td class="tx-date">${data.date}</td>
                            <td>${data.description}</td>
                            <td><span class="cat-chip">${data.category}</span></td>
                            <td><span class="badge ${data.type === "income" ? "inc" : "exp"}">${data.type === "income" ? "↑" : "↓"} ${data.type}</span></td>
                            <td class="td-amount ${data.type === "income" ? "inc" : "exp"}">${data.type === "income" ? "+" : "−"} ₹${data.amount.toLocaleString("en-IN")}</td>
                            <td class="admin-only">
                                <div style="display:flex;gap:5px">
                                    <button class="btn btn-sm">Edit</button>
                                    <button class="btn btn-sm btn-danger">Del</button>
                                </div>
                            </td>
                        </tr>`;
    })
    .join("");

  console.log(filterdata, "data"); // income / expense / ""};
  console.log(filterValue, "render"); // income / expense / ""};
};

filterType.addEventListener("change", (e) => {
  let value = e.target.value;
  renderTables(value);
});

filterCat.addEventListener("change", (e) => {
  let value = e.target.value;
  renderTables(value);
});
searchBox.addEventListener("input", () => {
  renderTables(searchBox.value);
});

addTransaction.addEventListener("click", () => {
  modalOverlay.classList.add("open");
});

closeModel.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});

let refreshpage = () => {
  updatecardsdetail(transactions);
  renderTables(income);
};

let addnewData = () => {
  const date = document.getElementById("fDate").value;
  const desc = document.getElementById("fDesc").value.trim();
  const amt = parseFloat(document.getElementById("fAmt").value);
  const type = document.getElementById("fType").value;
  const cat = document.getElementById("fCat").value;
  if (!date || !desc || isNaN(amt) || amt <= 0) {
    alert("Please fill all fields correctly.");
    return;
  }

  transactions.push({
    id: Date.now(),
    date: date,
    description: desc,
    category: cat,
    type: type,
    amount: amt,
  });

  modalOverlay.classList.remove("open");
  updatecardsdetail(transactions);
  updateChart(transactions);
};

saveButton.addEventListener("click", () => {
  addnewData();
});

let getTopCategory = (transactions) => {
  const categoryTotals = {};

  transactions.forEach((t) => {
    // 👉 sirf expense ke liye (optional)
    if (t.type === "expense") {
      if (categoryTotals[t.category]) {
        categoryTotals[t.category] += t.amount;
      } else {
        categoryTotals[t.category] = t.amount;
      }
    }
  });

  return categoryTotals;
};

let findTopCategory = (categoryTotals) => {
  let topCategory = "";
  let maxAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      topCategory = category;
    }
  }

  return { topCategory, maxAmount };
};

let showTopCategory = () => {
  const totals = getTopCategory(transactions);
  const { topCategory, maxAmount } = findTopCategory(totals);
  topcategory.textContent = `Top Category: ${topCategory}`;
  topAmount.textContent = `₹${maxAmount.toLocaleString("en-IN")}`;
};

function deleteTx(id) {
  if (!confirm("Delete this transaction?")) return;
  transactions = transactions.filter((x) => x.id !== id);
  refresh();
}

initial();
