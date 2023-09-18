import "./App.css";
import React from "react";
import AccountSummaryCard from "./components/AccountSummaryCard";
import RecentTransactionCard from "./components/RecentTransactionCard";
import RecentNotificationCard from "./components/RecentNotificationCard";
import PaymentHistoryDropDown from "./components/PaymentHistoryDropdown";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AccountSummaryCard
        bankName="Barclays Current"
        cardName="********1234"
        amount="£10,000.95"
      />
      <br /> <br />
      <RecentTransactionCard
        text1="Costa"
        amount1="-$12"
        text2="18 Aug, 2023 • Category • Barclays current"
        amount2="+$3"
      />
      <br /> <br />
      <RecentNotificationCard
        title="Rewards for recent transaction has been claimed"
        subtitle="A £3 cashback from your purchase at Costa on 18 Aug, 2023..."
        time="18:20"
      />{" "}
      <br /> <br />
      <PaymentHistoryDropDown /> <br /> <br /> <br /> <br />
      <br /> <br />
    </div>
  );
}

export default App;
