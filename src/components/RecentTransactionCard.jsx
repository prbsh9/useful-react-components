import React from "react";

export default function RecentTransactionCard(props) {
  return (
    <div alt="payment" className="flex items-center gap-3 w-[438px]">
      <div alt="avatar" className="w-[46px] h-[46px] ">
        <img
          src="./images/avatar.png"
          alt="avatar"
          className="rounded-[46px] "
        />
      </div>
      <div
        alt="payment-detail"
        className="w-full flex flex-col items-start gap-1 flex-grow shrink basis-0 "
      >
        <div
          alt="heading"
          className="flex content-between items-start justify-between self-stretch"
        >
          <span
            alt="transaction-name"
            className=" text-gray-800 text-base  font-weight510"
          >
            {props.text1}
          </span>

          <span
            alt="amount-cost"
            className=" w-[68px] text-gray-800 text-right text-base font-weight510"
          >
            {props.amount1}
          </span>
        </div>
        <div
          alt="info-row"
          className=" flex content-between justify-between items-center self-stretch"
        >
          <span alt="name" className="text-gray-800 text-xs font-weight510">
            {props.text2}
          </span>
          <div alt="amount-return" className="flex items-center gap-1.5">
            <span className="text-[#10B981] text-xs font-weight510 ">
              {props.amount2}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
