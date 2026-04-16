# 💰 FinanceOS — Personal Finance Dashboard

A modern, dark-themed personal finance tracking web app built with **vanilla HTML, CSS, and JavaScript**. FinanceOS helps you track income, expenses, and financial trends — all in one clean interface.

---

## 📸 Features

- **Dashboard Overview** — Real-time stats for total balance, income, expenses, and transaction count
- **Transaction Management** — Add, edit, delete, search, and filter transactions
- **Charts & Visualizations** — Pie chart for spending by category + line chart for balance trend over time
- **Smart Insights** — Automatically highlights your top spending category
- **Role-Based Access** — Switch between Admin (full access) and Viewer (read-only) modes
- **Responsive Design** — Mobile-friendly layout with collapsible sidebar
- **Live Filtering** — Search by keyword, filter by type (Income/Expense) or category

---

## 🗂️ Project Structure

```
project/
├── index.html      # Main HTML — layout, panels, modal, table
├── style.css       # Custom dark theme with CSS variables
└── script.js       # All logic — data, rendering, charts, events
```

---

## 🚀 How to Run
https://subhashbisen.github.io/Financial-dashboard/

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and modal |
| CSS3 | Dark theme, responsive layout, animations |
| Vanilla JavaScript (ES6+) | Logic, DOM manipulation, event handling |
| [Chart.js](https://www.chartjs.org/) | Pie chart and line chart |
| Google Fonts | Syne (headings) + DM Sans (body) |

---

## 📊 Dashboard Panels

### 1. Dashboard
- 4 stat cards: Total Balance, Income, Expenses, Transaction count
- **Pie Chart** — Expense breakdown by category
- **Line Chart** — Monthly income, expenses, and running balance trend

### 2. Transactions
- Full transaction table with date, description, category, type, and amount
- **Search** — Real-time keyword search
- **Filter by Type** — All / Income / Expense
- **Filter by Category** — Food, Rent, Salary, Freelance, etc.
- **Sort** — Click column headers to sort by Date or Amount
- **Admin Only** — Add, Edit, Delete buttons hidden from Viewer role

### 3. Insights
- Top spending category with total amount spent

---

## 👥 Role System

| Feature | Admin | Viewer |
|---------|-------|--------|
| View Dashboard | ✅ | ✅ |
| View Transactions | ✅ | ✅ |
| Add Transaction | ✅ | ❌ |
| Edit Transaction | ✅ | ❌ |
| Delete Transaction | ✅ | ❌ |

Switch roles using the dropdown in the sidebar.

---

## 📁 Sample Data

The app comes pre-loaded with **27 transactions** spanning October 2025 – April 2026, covering categories like Salary, Rent, Food, Transport, Freelance, Shopping, Entertainment, Health, Utilities, and Investment.

---

## 🔮 Possible Future Improvements

- LocalStorage / backend persistence for saving data across sessions
- Monthly budget goals and progress bars
- Export transactions to CSV
- Dark/light theme toggle
- Multi-currency support

---

## 👨‍💻 Author

Built as a frontend assessment project demonstrating DOM manipulation, charting, dynamic filtering, and role-based UI in plain JavaScript — no frameworks used.
