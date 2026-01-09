export default function TimerCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_12px_40px_rgba(15,23,42,0.35)]">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Timer</h3>
      <div className="my-5 font-mono text-4xl font-bold text-white sm:text-5xl">00:00</div>
      <div className="flex flex-wrap justify-center gap-2">
        <button className="rounded-full border border-emerald-300/60 bg-emerald-300/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100 transition hover:bg-emerald-300/30">
          Start
        </button>
        <button className="rounded-full border border-rose-300/60 bg-rose-300/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100 transition hover:bg-rose-300/30">
          Stop
        </button>
      </div>
    </div>
  )
}
