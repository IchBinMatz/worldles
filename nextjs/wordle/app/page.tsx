export default function Home() {
  const keyboardletters = ["qwertzuiopü", "asdfghjklöä", "0yxcvbnm1"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <p>Wordle</p>
      <div className="grid grid-rows-6 gap-4">
        {[...Array(6)].map((s, rid) => (
          <div className="grid grid-cols-5 gap-4" key={rid}>
            {[...Array(5)].map((c, cid) => (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 w-12 h-12 rounded"
                key={cid}
              >
                {" "}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* keyboard */}
      <div className="grid grid-rows-12 gap-1">
        {keyboardletters.map((letters, row_index) => (
          <div className="grid grid-flow-col gap-1" key={row_index}>
            {Array.from(letters).map((letter, col_index) => (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
                key={col_index}
              >
                {letter === "0" ? "ENTER" : letter === "1" ? "BACK" : letter}
              </button>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
