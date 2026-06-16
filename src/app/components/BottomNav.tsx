import { Home, Map, Palette, BedDouble, Sparkles, User } from "lucide-react";

type Page = "home" | "route" | "art" | "stay" | "activity" | "profile";

interface BottomNavProps {
  current: Page;
  onChange: (page: Page) => void;
}

const items: { id: Page; icon: React.ReactNode; label: string }[] = [
  { id: "home", icon: <Home size={20} />, label: "首页" },
  { id: "route", icon: <Map size={20} />, label: "路线" },
  { id: "art", icon: <Palette size={20} />, label: "艺术" },
  { id: "stay", icon: <BedDouble size={20} />, label: "住宿" },
  { id: "activity", icon: <Sparkles size={20} />, label: "活动" },
  { id: "profile", icon: <User size={20} />, label: "我的" },
];

export function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav style={{ fontFamily: "var(--font-sans)" }} className="flex items-center justify-around border-t bg-[#F4F0EA]/95 border-[rgba(60,52,44,0.1)]" aria-label="主导航">
      {items.map(({ id, icon, label }) => {
        const active = current === id;
        return (
          <button key={id} onClick={() => onChange(id)} className="flex flex-col items-center gap-0.5 py-2 px-3 min-w-0 flex-1 transition-all duration-200"
            style={{ color: active ? "#A8673A" : "#2D2D2D", opacity: active ? 1 : 0.55 }} aria-current={active ? "page" : undefined}>
            <span className={active ? "scale-110 transition-transform" : "transition-transform"}>{icon}</span>
            <span style={{ fontSize: "10px", fontWeight: active ? 600 : 400 }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
