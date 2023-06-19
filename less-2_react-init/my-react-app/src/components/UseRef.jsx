import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const [keyword, setKeyword] = useState("");
  const [fetchState, setFetchState] = useState("idle");

  const debounceRef = useRef();

  const onChange = (e) => {
    setKeyword(e.target.value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setFetchState("loading");
      delay(3000);
      setFetchState("idle");
    }, 800);
  };

  const delay = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  return (
    <div>
      <h1>UseRef</h1>
      <input value={keyword} onChange={onChange} />
      <p>{fetchState}</p>
    </div>
  );
};

export default UseRef;
