import React, { ClassAttributes, ReactHTMLElement } from "react";

interface FriendlyDateProps {
  date: Date;
}

export default function FriendlyDate({
  date,
  className,
}: FriendlyDateProps & React.HTMLAttributes<HTMLDivElement>) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let datePostfix = "th";
  const day = date.getDate();
  if (day == 1 || day == 21 || day == 31) {
    datePostfix = "st";
  }

  if (day == 2 || day == 22) {
    datePostfix = "nd";
  }

  if (day == 3 || day == 23) {
    datePostfix = "rd";
  }

  const friendlyDate = `${
    months[date.getMonth()]
  } ${day}${datePostfix}, ${date.getFullYear()}`;

  return <div className={className}>{friendlyDate}</div>;
}
