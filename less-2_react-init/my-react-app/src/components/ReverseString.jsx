import React, { useState, useMemo, useEffect } from "react";

let reverseStringCount = 0,
  memoizedReversedStringCount = 0;

function ReverseString() {
  const [input, setInput] = useState("");

  // Misalkan kita memiliki fungsi rekursif untuk membalikkan string
  const reverseString = (str) => {
    if (str === "") {
      return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
  };

  useEffect(() => {
    reverseStringCount++;
    console.log(`reverString rerender: ${reverseStringCount}`);
  }, [reverseString]);

  // Gunakan useMemo untuk menyimpan hasil string yang dibalik
  const memoizedReversedString = useMemo(() => reverseString(input), [input]);

  useEffect(() => {
    memoizedReversedStringCount++;
    console.log(`memoizedReverString rerender: ${memoizedReversedStringCount}`);
  }, [memoizedReversedString]);

  return (
    <div>
      <h1>Kalkulator String Terbalik</h1>
      <label>Masukkan string: </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>String Terbalik: {memoizedReversedString}</p>
    </div>
  );
}

export default ReverseString;
