import React from "react";

export default function RecentTransactionCard(props) {
  const { text1, amount1, text2, amount2 } = props;
  return (
    <div aria-label="payment" className="flex items-center gap-3 w-[438px]">
      <div aria-label="avatar" className="w-[46px] h-[46px] ">
        <img
          src="./images/avatar.png"
          alt="avatar"
          className="rounded-[46px] "
        />
      </div>
      <div
        aria-label="payment-detail"
        className="w-full flex flex-col items-start gap-1 flex-grow shrink basis-0 "
      >
        <div
          aria-label="heading"
          className="flex content-between items-start justify-between self-stretch"
        >
          <span
            aria-label="transaction-name"
            className=" text-gray-800 text-base  font-weight510"
          >
            {text1}
          </span>

          <span
            aria-label="amount-cost"
            className=" w-[68px] text-gray-800 text-right text-base font-weight510"
          >
            {amount1}
          </span>
        </div>
        <div
          aria-label="info-row"
          className=" flex content-between justify-between items-center self-stretch"
        >
          <span
            aria-label="name"
            className="text-gray-800 text-xs font-weight510"
          >
            {text2}
          </span>
          <div aria-label="amount-return" className="flex items-center gap-1.5">
            <span className="text-[#10B981] text-xs font-weight510 ">
              {amount2}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
