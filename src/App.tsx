import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <main className="mx-auto flex max-w-2xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Minimal Starter
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            React + Vite + Tailwind CSS + Biome Starter
          </h1>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Counter</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">
                {count}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                onClick={() => setCount((value) => value - 1)}
                type="button"
              >
                -1
              </button>
              <button
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                onClick={() => setCount((value) => value + 1)}
                type="button"
              >
                +1
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
