import React, { useState, useMemo } from "react";

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

function Factorial() {
  const [count, setCount] = useState(0);

  // Misalkan kita memiliki fungsi untuk menghitung faktorial dari suatu angka

  // Gunakan useMemo untuk menyimpan hasil faktorial
  const memoizedFactorial = useMemo(() => factorial(count), [count]);

  return (
    <div>
      <h1>Kalkulator Faktorial</h1>
      <p>Angka saat ini: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <p>Faktorial: {memoizedFactorial}</p>
    </div>
  );
}

// Benchmarking without useMemo
console.time("Factorial Without useMemo");
const factorialResult = factorial(10); // Contoh perhitungan faktorial
console.timeEnd("Factorial Without useMemo");
console.log("Factorial Result:", factorialResult);

// Benchmarking with useMemo
console.time("Factorial With useMemo");
// Render komponen Component dengan prop number
// Pastikan komponen telah dirender sebelum mengukur waktu
console.timeEnd("Factorial With useMemo");

export default Factorial;
