import GlassCard from '../../components/GlassCard/GlassCard'
import TimerCard from '../../components/TimerCard/TimerCard'
import Button from '../../components/Button/Button'

export default function Showcase() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Components</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">UI Showcase</h1>
        <p className="text-base text-slate-200/85">
          This page surfaces reusable components that are easy to miss in the main flow. Use it as a playground when polishing the UI.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white">Glass Card</h3>
          <p className="mt-2 text-sm text-slate-200/85">
            A floating panel with sheen and depth. Use for feature callouts, metrics, or short content blocks.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </GlassCard>

        <TimerCard />
      </div>
    </div>
  )
}
