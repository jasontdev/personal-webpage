import React from "react";

interface FriendlyDateProps {
  date: Date;
}

export default function FriendlyDate({ date }: FriendlyDateProps) {
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

  let datePostfix = "rd";
  const day = date.getDate();
  if (day == 1 || day == 21 || day == 31) {
    datePostfix = "st";
  }

  if (day == 2 || day == 22) {
    datePostfix = "nd";
  }

  const friendlyDate = `${
    months[date.getMonth()]
  } ${day}${datePostfix}, ${date.getFullYear()}`;

  return <div>{friendlyDate}</div>;
}
