import React from "react";
export default function Lista({ nombre, otro }) {
  return (
    <>
      <li>
        {nombre} , {otro}
      </li>
    </>
  );
}
// .toUpperCase()
