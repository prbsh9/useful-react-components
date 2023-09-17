# React Application with Tailwind CSS Components

This React application contains a collection of reusable components built with Tailwind CSS. These components can be easily integrated into your projects to enhance UI and functionality.

## Components

### Account Summary Card

The `AccountSummaryCard.jsx` component is designed to display an account summary. It includes an avatar, bank name, card name, and amount.

### Recent Notifications Card

The `RecentNotificationsCard.jsx` component provides a way to display recent notifications. It includes an avatar, notification title, subtitle, and timestamp.

### Recent Transaction Card

The `RecentTransactionCard.jsx` component is used to display recent transactions. It includes an avatar, transaction details, and an optional indicator for new transactions.

## Getting Started

To use these components in your React application, follow these steps:

1. Clone or download this repository to your local machine.

2. Copy the desired component files (e.g., `AccountSummaryCard.jsx`, `RecentNotificationsCard.jsx`, etc.) into your project's component directory.

3. Import and use the components in your React application as needed:

```jsx
import React from "react";
import AccountSummaryCard from "./path-to-components/AccountSummaryCard";

function App() {
  return (
    <div className="App">
      <AccountSummaryCard /* props here */ />
    </div>
  );
}

export default App;
```
