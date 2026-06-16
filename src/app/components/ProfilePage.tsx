import { motion } from "motion/react";
import { Heart, BookOpen, Bell, Settings, ChevronRight, LogIn } from "lucide-react";

const menuItems = [
  { icon: <BookOpen size={18} />, label: "我的预订", sub: "查看行程与订单" },
  { icon: <Heart size={18} />, label: "我的收藏", sub: "房间 · 活动 · 展览" },
  { icon: <Bell size={18} />, label: "通知消息", sub: "最新活动与优惠" },
  { icon: <Settings size={18} />, label: "设置", sub: "偏好 · 语言 · 隐私" },
];

export function ProfilePage() {
  return (
    <div className="w-full h-full overflow-y-auto" style={{ background: "#F4F0EA", fontFamily: "var(--font-sans)" }}>
      <div className="relative" style={{ height: "220px" }}>
        <img src="https://images.unsplash.com/photo-1537212429608-6b5f5449cdf8?w=800&h=440&fit=crop&auto=format" alt="麻黄梁" className="w-full h-full object-cover" style={{ filter: "saturate(0.7) brightness(0.7)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,3,0.1) 0%, rgba(10,6,3,0.65) 100%)" }} />
        <div className="absolute bottom-0 left-6 transform translate-y-1/2 flex items-end gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#A8673A", border: "3px solid #F4F0EA" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "#F4F0EA", fontWeight: 600 }}>慢</span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 600, color: "#3C342C" }}>旅客</h2>
            <p style={{ fontSize: "11px", color: "#7A6E64", marginTop: "2px" }}>慢境 · 会员</p>
          </div>
          <button className="flex items-center gap-1.5 rounded-full px-4 py-2 transition-all" style={{ background: "#A8673A", color: "#F4F0EA", fontSize: "12px", fontWeight: 600 }}>
            <LogIn size={13} />登录
          </button>
        </div>
        <div className="flex gap-4 mt-5">
          {[{ val: "0", label: "次预订" }, { val: "0", label: "次收藏" }, { val: "0", label: "次游览" }].map(({ val, label }) => (
            <div key={label} className="flex-1 text-center rounded-2xl py-3" style={{ background: "#E9E2D8" }}>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "22px", fontWeight: 600, color: "#3C342C" }}>{val}</div>
              <div style={{ fontSize: "10px", color: "#7A6E64", marginTop: "2px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6 mb-4" style={{ height: "1px", background: "rgba(60,52,44,0.1)" }} />
      <div className="px-4 flex flex-col gap-2 pb-28">
        {menuItems.map((item, i) => (
          <motion.button key={item.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-2xl px-4 py-4 w-full text-left transition-all" style={{ background: "#E9E2D8", border: "1px solid rgba(60,52,44,0.08)" }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-none" style={{ background: "rgba(168,103,58,0.12)", color: "#A8673A" }}>
              {item.icon}
            </div>
            <div className="flex-1">
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#3C342C" }}>{item.label}</div>
              <div style={{ fontSize: "11px", color: "#7A6E64", marginTop: "2px" }}>{item.sub}</div>
            </div>
            <ChevronRight size={16} color="#C4BAB0" />
          </motion.button>
        ))}
      </div>
      <div className="flex flex-col items-center pb-8 gap-1">
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#A8673A", letterSpacing: "0.1em" }}>慢境</p>
        <p style={{ fontSize: "9px", color: "#C4BAB0", letterSpacing: "0.3em" }}>SLOW REALM ART HOTEL</p>
      </div>
    </div>
  );
}
