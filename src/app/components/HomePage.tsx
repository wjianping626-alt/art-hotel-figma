import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type UserType = "A" | "B" | null;

interface HomePageProps {
  onSelectUser: (type: UserType) => void;
  selectedUser: UserType;
  onNavigate: (page: string) => void;
}

export function HomePage({ onSelectUser, selectedUser, onNavigate }: HomePageProps) {
  const [hovered, setHovered] = useState<"A" | "B" | null>(null);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-poster.png"
          alt="麻黄梁艺术家酒店"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(1.05) contrast(1.05)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,3,0.05) 0%, rgba(10,6,3,0.05) 50%, rgba(10,6,3,0.35) 75%, rgba(10,6,3,0.55) 100%)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 flex flex-col items-center pt-16 z-10"
      >
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", letterSpacing: "0.3em", color: "#A8673A", fontWeight: 500 }} className="mb-3">
          SLOW REALM ART HOTEL
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "52px", fontWeight: 600, color: "#F4F0EA", letterSpacing: "0.12em", lineHeight: 1 }}>
          慢境
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "rgba(244,240,234,0.75)", letterSpacing: "0.25em", marginTop: "10px" }}>
          麻黄梁艺术家酒店
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ paddingBottom: "30px" }}
      >
        <div className="px-5">
          <div className="rounded-3xl p-4 backdrop-blur-lg" style={{ background: "rgba(10,6,3,0.35)", border: "1px solid rgba(244,240,234,0.12)" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(244,240,234,0.5)", letterSpacing: "0.3em", fontWeight: 300 }} className="mb-3 text-center">
              抵达 · Arrival · 请选择您的身份
            </p>
            <div className="flex gap-2.5">
              <motion.button
                onHoverStart={() => setHovered("A")}
                onHoverEnd={() => setHovered(null)}
                onClick={() => { onSelectUser("A"); onNavigate("route"); }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 rounded-2xl py-3.5 px-3 text-left transition-all duration-300"
                style={{
                  background: selectedUser === "A" || hovered === "A" ? "rgba(168,103,58,0.85)" : "rgba(244,240,234,0.08)",
                  border: selectedUser === "A" ? "1px solid #A8673A" : "1px solid rgba(244,240,234,0.1)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div style={{ width: "16px", height: "2px", background: hovered === "A" || selectedUser === "A" ? "#F4F0EA" : "#A8673A", borderRadius: "1px" }} />
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 600, color: "#F4F0EA" }}>艺术旅客</div>
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(244,240,234,0.6)", lineHeight: 1.5 }}>
                  艺术家 · 独行旅客 · 观光团队
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", color: "#A8673A", marginTop: "6px", letterSpacing: "0.15em" }}>
                  住宿流线 →
                </div>
              </motion.button>

              <motion.button
                onHoverStart={() => setHovered("B")}
                onHoverEnd={() => setHovered(null)}
                onClick={() => { onSelectUser("B"); onNavigate("route"); }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 rounded-2xl py-3.5 px-3 text-left transition-all duration-300"
                style={{
                  background: selectedUser === "B" || hovered === "B" ? "rgba(168,103,58,0.85)" : "rgba(244,240,234,0.08)",
                  border: selectedUser === "B" ? "1px solid #A8673A" : "1px solid rgba(244,240,234,0.1)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div style={{ width: "12px", height: "12px", border: `1.5px solid ${hovered === "B" || selectedUser === "B" ? "#F4F0EA" : "#A8673A"}`, borderRadius: "50%" }} />
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 600, color: "#F4F0EA" }}>外来旅客</div>
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(244,240,234,0.6)", lineHeight: 1.5 }}>
                  观景探索 · 一日游访客
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", color: "#A8673A", marginTop: "6px", letterSpacing: "0.15em" }}>
                  观景流线 →
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
