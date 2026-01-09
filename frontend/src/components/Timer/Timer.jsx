import { useEffect, useRef, useState } from 'react'

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// Simple working timer for focus sessions
export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.35)]">
      <div className="mb-2 text-sm font-semibold text-white">Timer</div>
      <div className="mb-3 font-mono text-3xl font-bold text-white">{formatTime(seconds)}</div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
        <button
          className="rounded-full border border-emerald-300/60 bg-emerald-300/20 px-3 py-2 text-emerald-100 transition hover:bg-emerald-300/30"
          type="button"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="rounded-full border border-rose-300/60 bg-rose-300/15 px-3 py-2 text-rose-100 transition hover:bg-rose-300/30"
          type="button"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
