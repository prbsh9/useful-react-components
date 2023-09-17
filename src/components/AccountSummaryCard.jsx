import React from "react";

export default function AccountSummaryCard(props) {
  const { bankName, cardName, amount } = props;

  return (
    <div className=" flex w-[405px] items-center gap-3 grow-1 shrink-0 basis-0">
      <div className="avatar ">
        <img
          src="./images/avatar.png"
          alt="avatar"
          className="w-[46px] h-[46px] shrink-0 rounded-[46px]"
        />
      </div>
      <div className="relative w-full justify-between flex content-start flex-row">
        <div alt="bank-card-no" className="flex flex-col items-start gap-1 ">
          <span alt="bank-number" className="text-[#151C2A] text-base">
            {bankName}
          </span>
          <span alt="card-number" className="text-[#151C2A] text-sm">
            {cardName}
          </span>
        </div>
        <div
          alt="bank-amount"
          className="text-[#151C2A] text-xl absolute top-1 right-[5px]"
        >
          {amount}
        </div>
      </div>
    </div>
  );
}
