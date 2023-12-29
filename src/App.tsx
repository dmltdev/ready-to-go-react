import { useState } from "react";
import Logo from "/favicon_1024.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto flex h-screen max-w-[1000px] flex-col items-center justify-center">
      <a href="https://react.dev" target="_blank">
        <img className="w-60" src={Logo} alt="React logo" />
      </a>
      <button
        className="rounded-md bg-slate-300 p-2 transition duration-300 hover:bg-slate-700 hover:text-slate-100"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </main>
  );
}

export default App;
