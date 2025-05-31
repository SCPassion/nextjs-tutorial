"use client";

export default function Button() {
  return (
    <button className="cursor-pointer" onClick={() => console.log("clicked")}>
      ClickMe
    </button>
  );
}
