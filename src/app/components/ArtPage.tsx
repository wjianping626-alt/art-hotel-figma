import { motion } from "motion/react";
import { Calendar, User, Image as ImageIcon } from "lucide-react";
import { img } from "@/lib/img";

const exhibitions = [
  { id: 1, name: "黄土·呼吸", nameEn: "Loess · Breathe", artist: "张明远", artistEn: "Zhang Mingyuan", period: "2026.05 — 2026.08", type: "装置艺术", desc: "以麻黄梁黄土为材料，探索大地肌理与生命律动之间的内在联系。", img: "/art/earth-sculpture.jpg" },
  { id: 2, name: "光影叙事", nameEn: "Light Narrative", artist: "陈柔萱", artistEn: "Chen Rouxuan", period: "2026.06 — 2026.09", type: "摄影展览", desc: "用一年四季追踪麻黄梁的光影变迁，记录黄土大地的时间诗学。", img: "/art/exhibition.jpg" },
  { id: 3, name: "旅人之境", nameEn: "Traveler's Realm", artist: "多位艺术家", artistEn: "Group Exhibition", period: "2026.07 — 2026.10", type: "综合媒介", desc: "来自不同背景的艺术家以「旅程」为主题，在此共同探索人与空间的意义。", img: "/art/paintings.jpg" },
];

const folkArt = [
  { name: "剪纸", nameEn: "Paper-cut", desc: "陕北民间剪纸艺术，以黄土高原生活为题材，刀工细腻、造型朴拙。", img: "/art/papercut.png" },
  { name: "柳编", nameEn: "Willow Weaving", desc: "利用当地柳条编织的实用器物，天然材质散发大地温度。", img: "/art/willow-weave.png" },
  { name: "泥塑", nameEn: "Clay Sculpture", desc: "麻黄梁特有的红胶泥土塑，塑造黄土地上的人与生灵。", img: "/art/clay-sculpture.png" },
  { name: "面花", nameEn: "Dough Flower", desc: "陕北传统面塑艺术，巧手捏出百态人生，寓意吉祥。", img: "/art/dough-flower.jpg" },
  { name: "刺绣", nameEn: "Embroidery", desc: "陕绣传承，以黄土色系丝线绣出大地的纹路与记忆。", img: "/art/embroidery.jpg" },
  { name: "石雕", nameEn: "Stone Carvings", desc: "以本地石材雕刻，粗犷中见精细，呈现黄土高原的坚韧之美。", img: "/art/stone-carvings.jpg" },
  { name: "腰鼓", nameEn: "Waist Drum", desc: "陕北腰鼓舞动黄土，鼓声与大地共鸣，传递原始生命力。", img: "/art/waist-drum.jpg" },
];

export function ArtPage() {
  return (
    <div className="w-full h-full overflow-y-auto" style={{ background: "#F4F0EA", fontFamily: "var(--font-sans)" }}>
      {/* Hero */}
      <div className="relative" style={{ height: "280px" }}>
        <img src={img("/art/earth-sculpture.jpg")} alt="艺术展厅" className="w-full h-full object-cover" style={{ filter: "saturate(0.7) brightness(0.75)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,3,0.3) 0%, rgba(10,6,3,0.7) 100%)" }} />
        <div className="absolute bottom-0 left-0 px-6 pb-8">
          <p style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.3em", fontWeight: 500, marginBottom: "8px" }}>ART · 艺术</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "32px", fontWeight: 600, color: "#F4F0EA", lineHeight: 1.2 }}>麻黄梁<br />艺术现场</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 py-6">
        <p style={{ fontSize: "13px", color: "#7A6E64", lineHeight: 1.85, fontWeight: 300 }}>慢境以常设展厅与驻场艺术家项目为核心，将黄土地貌的原始能量转化为当代艺术表达，邀请旅客在游览中与艺术相遇。</p>
      </div>

      <div className="mx-6 mb-6" style={{ height: "1px", background: "rgba(60,52,44,0.1)" }} />

      {/* Current Exhibitions */}
      <div className="px-4 flex flex-col gap-4 pb-6">
        <p className="px-2" style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.25em", fontWeight: 600 }}>当前展览</p>
        {exhibitions.map((ex, i) => (
          <motion.div key={ex.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl overflow-hidden" style={{ background: "#E9E2D8" }}>
            <div className="relative" style={{ height: "200px" }}>
              <img src={img(ex.img)} alt={ex.name} className="w-full h-full object-cover" style={{ filter: "saturate(0.75)" }} />
              <div className="absolute top-3 left-3 rounded-full px-3 py-1" style={{ background: "rgba(244,240,234,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(244,240,234,0.25)" }}>
                <span style={{ fontSize: "10px", color: "#F4F0EA", fontWeight: 500 }}>{ex.type}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 600, color: "#3C342C" }}>{ex.name}</h3>
                <p style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.2em", marginTop: "2px" }}>{ex.nameEn}</p>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <div className="flex items-center gap-2"><User size={11} color="#7A6E64" /><span style={{ fontSize: "11px", color: "#7A6E64" }}>{ex.artist} · {ex.artistEn}</span></div>
                <div className="flex items-center gap-2"><Calendar size={11} color="#7A6E64" /><span style={{ fontSize: "11px", color: "#7A6E64" }}>{ex.period}</span></div>
              </div>
              <p style={{ fontSize: "12px", color: "#7A6E64", lineHeight: 1.75, fontWeight: 300 }}>{ex.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Folk Art Gallery */}
      <div className="px-4 pb-28">
        <div className="mx-2 mb-5" style={{ height: "1px", background: "rgba(60,52,44,0.1)" }} />
        <p className="px-2 mb-4" style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.25em", fontWeight: 600 }}>黄土民艺</p>
        <div className="grid grid-cols-2 gap-3">
          {folkArt.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden" style={{ background: "#E9E2D8" }}>
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <img src={img(item.img)} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,6,3,0.5) 100%)" }} />
                <div className="absolute bottom-2 left-2 right-2">
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", fontWeight: 600, color: "#F4F0EA" }}>{item.name}</p>
                  <p style={{ fontSize: "9px", color: "rgba(244,240,234,0.7)", letterSpacing: "0.1em" }}>{item.nameEn}</p>
                </div>
              </div>
              <div className="p-2.5">
                <p style={{ fontSize: "11px", color: "#7A6E64", lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
