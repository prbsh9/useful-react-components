import React from "react";

function NotificationIcon() {
  return (
    <svg
      width="11"
      className=" shrink-0 absolute top-1.5 right-0"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.5" cy="5" r="5" fill="#FF8552" />
    </svg>
  );
}

export default function RecentNotificationCard(props) {
  return (
    <div aria-label="" className="flex w-[695px] items-center gap-[23px]">
      <div className="relative inline">
        <img
          src="./images/avatar.png"
          alt="avatar"
          className="w-12 h-12 shrink-0 relative"
        />
        <NotificationIcon />
      </div>
      <div
        aria-label="notification"
        className="flex justify-between items-start grow shrink-0 basis-0"
      >
        <div
          aria-label="content-notification"
          className="flex flex-col items-start gap-1"
        >
          <span
            aria-label="notification-title"
            className="text-gray-800 text-base font-[590] "
          >
            {props.title}
          </span>
          <span
            aria-label="notification-subtitle"
            className=" text-gray-400 text-xs font-weight510"
          >
            {props.subtitle}
          </span>
        </div>
        <span
          aria-label="notification-time"
          className=" text-gray-500 text-xs font-weight510 "
        >
          {props.time}
        </span>
      </div>
    </div>
  );
}
