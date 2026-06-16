import { motion } from "motion/react";
import { useState } from "react";
import { Eye, Wind, Star } from "lucide-react";

const rooms = [
  { id: "single", name: "观景单人间", nameEn: "Scenic Single", price: "¥ 680", priceUnit: "/ 晚", tags: ["峡谷景观", "独立卫浴", "免费早餐"], highlights: "麻黄梁黄土峡谷全景，静谧独处，适合独行旅客与艺术创作。", rating: "4.8", size: "28㎡", img: "/room-single.png" },
  { id: "suite", name: "豪华观景套房", nameEn: "Deluxe Canyon Suite", price: "¥ 1,480", priceUnit: "/ 晚", tags: ["大面积观景窗", "独立客厅", "私属露台"], highlights: "超大落地观景窗，三面峡谷视野，配备独立客厅与私属户外露台。", rating: "5.0", size: "65㎡", img: "/room-suite.png", featured: true },
  { id: "mini", name: "迷你观景套房", nameEn: "Mini Scenic Suite", price: "¥ 980", priceUnit: "/ 晚", tags: ["性价比之选", "观景飘窗", "艺术软装"], highlights: "精致紧凑的观景空间，艺术软装融入地域文化，轻奢品质首选。", rating: "4.9", size: "38㎡", img: "/room-mini.png" },
];

export function StayPage() {
  const [booked, setBooked] = useState<string | null>(null);

  return (
    <div className="w-full h-full overflow-y-auto" style={{ background: "#F4F0EA", fontFamily: "var(--font-sans)" }}>
      <div className="px-6 pt-14 pb-6">
        <p style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.3em", fontWeight: 500 }} className="mb-2">ACT III · STAY</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "30px", fontWeight: 600, color: "#3C342C", lineHeight: 1.2 }}>选择您的<br />栖居之所</h1>
        <p style={{ fontSize: "12px", color: "#7A6E64", lineHeight: 1.8, marginTop: "10px", fontWeight: 300 }}>每间客房皆朝向麻黄梁峡谷，以黄土地貌为窗景，在慢境中安住一晚。</p>
      </div>
      <div className="px-4 flex flex-col gap-4 pb-28">
        {rooms.map((room, i) => (
          <motion.div key={room.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-3xl overflow-hidden" style={{ background: "#E9E2D8", border: room.featured ? "1.5px solid #A8673A" : "1px solid rgba(60,52,44,0.1)" }}>
            {room.featured && (
              <div className="flex items-center gap-1.5 px-4 pt-3 pb-1">
                <Star size={11} fill="#A8673A" color="#A8673A" />
                <span style={{ fontSize: "10px", color: "#A8673A", fontWeight: 600, letterSpacing: "0.2em" }}>精选推荐</span>
              </div>
            )}
            <div className={`relative overflow-hidden ${room.featured ? "mx-3 rounded-2xl" : ""}`} style={{ height: room.featured ? "200px" : "180px" }}>
              <img src={room.img} alt={room.name} className="w-full h-full object-cover" style={{ filter: "saturate(0.85)" }} />
              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 backdrop-blur-sm" style={{ background: "rgba(10,6,3,0.55)" }}>
                <Star size={10} fill="#A8673A" color="#A8673A" /><span style={{ fontSize: "11px", color: "#F4F0EA", fontWeight: 600 }}>{room.rating}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 600, color: "#3C342C" }}>{room.name}</h3>
                  <p style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.18em", fontWeight: 400, marginTop: "2px" }}>{room.nameEn}</p>
                </div>
                <div className="text-right">
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "20px", fontWeight: 600, color: "#3C342C" }}>{room.price}</span>
                  <span style={{ fontSize: "11px", color: "#7A6E64", marginLeft: "2px" }}>{room.priceUnit}</span>
                </div>
              </div>
              <p style={{ fontSize: "11px", color: "#7A6E64", marginBottom: "10px" }}>面积 {room.size}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {room.tags.map((tag) => (<span key={tag} className="rounded-full px-2.5 py-1" style={{ background: "rgba(168,103,58,0.1)", fontSize: "10px", color: "#A8673A", fontWeight: 500 }}>{tag}</span>))}
              </div>
              <p style={{ fontSize: "12px", color: "#7A6E64", lineHeight: 1.75, marginBottom: "14px", fontWeight: 300 }}>{room.highlights}</p>
              <button onClick={() => setBooked(room.id)} className="w-full rounded-2xl py-3 transition-all duration-300" style={{ background: booked === room.id ? "#2D2D2D" : "#A8673A", color: "#F4F0EA", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>
                {booked === room.id ? "✓ 已加入预订" : "立即预订"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
