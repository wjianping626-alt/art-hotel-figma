import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/img";

type UserType = "A" | "B" | null;

interface RoutePageProps {
  userType: UserType;
  onNavigate: (page: string) => void;
}

const routeA = [
  { title: "入口", subtitle: "Entrance", desc: "穿越黄土台地，踏上艺术之旅的起点。", img: "/route/entrance.png", node: "01" },
  { title: "接待大厅", subtitle: "Reception Hall", desc: "以黄土肌理为灵感的现代接待空间，温润石材与极简设计融为一体。", img: "/route/reception.png", node: "02" },
  { title: "客房区", subtitle: "Guest Rooms", desc: "静谧回廊通往私属客房，窗外是无边黄土峡谷与苍茫天际线。", img: "/route/rooms.png", node: "03" },
  { title: "餐厅", subtitle: "Restaurant", desc: "以本地食材为媒，在黄土地貌环绕中品味慢食哲学。", img: "/route/restaurant.png", node: "04" },
  { title: "艺术交流平台", subtitle: "Art Exchange", desc: "艺术家与旅客相遇之地，创意在此流动，对话在此发生。", img: "/route/art-exchange.png", node: "05" },
  { title: "展厅", subtitle: "Exhibition Hall", desc: "驻场艺术家作品展览，以大地为底色的当代艺术对话。", img: "/route/exhibition.png", node: "06" },
  { title: "天空露台", subtitle: "Sky Terrace", desc: "站在麻黄梁之巅，黄土峡谷在脚下铺陈，天际无界。", img: "https://images.unsplash.com/photo-1777881526453-c325e6947b94?w=800&h=1200&fit=crop&auto=format", node: "07" },
  { title: "咖啡书吧", subtitle: "Café & Library", desc: "阅读、思考、沉默——在黄土光影中慢慢消磨一个午后。", img: "/route/cafe.png", node: "08" },
];

const routeB = [
  { title: "入口广场", subtitle: "Entrance Plaza", desc: "黄土高原的壮阔景象从这里铺展开来，令人屏息。", img: "https://images.unsplash.com/photo-1607056720336-9aededc0fa50?w=800&h=1200&fit=crop&auto=format", node: "01" },
  { title: "观景阶梯", subtitle: "Viewing Steps", desc: "沿台阶而上，麻黄梁地质奇观层层叠叠呈现眼前。", img: "/route/rooms.png", node: "02" },
  { title: "艺术平台", subtitle: "Art Platform", desc: "悬于峡谷之上的观景台，自然与艺术在此交融。", img: "/route/art-exchange.png", node: "03" },
  { title: "共享客厅", subtitle: "Shared Lounge", desc: "旅人短暂歇脚之所，黄土暖光与舒适氛围共存。", img: "/route/reception.png", node: "04" },
  { title: "天空露台", subtitle: "Sky Terrace", desc: "麻黄梁最高处的观景终点，360°无遮挡峡谷全景。", img: "/route/restaurant.png", node: "05" },
];

function SlideCard({ item, index, total, isActive }: { item: typeof routeA[0]; index: number; total: number; isActive: boolean }) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [0.96, 1, 0.96]);
  const imgX = useTransform(x, [-100, 0, 100], [-20, 0, 20]);
  const blurActive = useTransform(x, [-50, 0, 50], [3, 0, 3]);
  const infoY = useTransform(x, [-100, 0, 100], [12, 0, 12]);
  const infoOpacity = useTransform(x, [-80, 0, 80], [0.7, 1, 0.7]);

  return (
    <motion.div
      className="relative flex-none w-full h-full overflow-hidden"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.12}
      style={{ x }}
      whileTap={{ cursor: "grabbing" }}
    >
      {/* Full-bleed image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ scale, filter: useTransform(blurActive, (v) => `blur(${v}px)`) }}
      >
        <motion.img
          src={img(item.img)}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ x: imgX, scale: 1.1 }}
          draggable={false}
        />
      </motion.div>

      {/* Gradient overlay - stronger at bottom for text */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,3,0.15) 0%, rgba(10,6,3,0.08) 30%, rgba(10,6,3,0.45) 60%, rgba(10,6,3,0.82) 100%)" }} />

      {/* Top-left accent - minimal */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-14 z-10">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ width: isActive ? "24px" : "12px" }}
            className="h-[2px] rounded-full"
            style={{ background: "#A8673A" }}
          />
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "#F4F0EA", fontWeight: 500, letterSpacing: "0.2em", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
            {item.node} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Bottom info panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-6 z-10"
        style={{ paddingBottom: "104px", y: infoY, opacity: infoOpacity }}
      >
        <div className="mb-3">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 600, color: "#F4F0EA", lineHeight: 1.1, textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            {item.title}
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "#A8673A", letterSpacing: "0.3em", fontWeight: 400, marginTop: "4px" }}>
            {item.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ width: isActive ? "32px" : "16px" }}
            className="h-[1.5px]"
            style={{ background: "#A8673A" }}
          />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(244,240,234,0.45)", letterSpacing: "0.3em", fontWeight: 300 }}>
            {item.node} · {item.subtitle.toUpperCase()}
          </span>
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "rgba(244,240,234,0.7)", lineHeight: 1.75, fontWeight: 300, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
          {item.desc}
        </p>
      </motion.div>

      {/* Drag hint glow */}
      {isActive && (
        <motion.div
          className="absolute inset-y-0 left-0 w-1"
          style={{ background: "linear-gradient(to right, rgba(168,103,58,0.3), transparent)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}

export function RoutePage({ userType, onNavigate }: RoutePageProps) {
  const route = userType === "B" ? routeB : routeA;
  const label = userType === "B" ? "观景流线" : "住宿流线";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", () => setIsDragging(true));
    emblaApi.on("pointerUp", () => setTimeout(() => setIsDragging(false), 100));
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#1a1008" }}>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-5 z-20">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm transition-all active:scale-95" style={{ background: "rgba(244,240,234,0.12)", border: "1px solid rgba(244,240,234,0.18)" }}>
          <ChevronLeft size={14} color="#F4F0EA" />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#F4F0EA", fontWeight: 400 }}>返回</span>
        </button>
        <div className="rounded-full px-3 py-1.5 backdrop-blur-sm" style={{ background: "rgba(168,103,58,0.75)", border: "1px solid rgba(168,103,58,0.5)" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#F4F0EA", fontWeight: 500, letterSpacing: "0.15em" }}>{label}</span>
        </div>
      </div>

      {/* Full-screen carousel */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full" style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          {route.map((item, i) => (
            <SlideCard key={i} item={item} index={i} total={route.length} isActive={i === current} />
          ))}
        </div>
      </div>

      {/* Bottom navigation - dots + arrows */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ paddingBottom: "88px" }}>
        <div className="flex items-center justify-between px-6">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {route.map((_, i) => {
              const isDotActive = i === current;
              return (
                <button key={i} onClick={() => emblaApi?.scrollTo(i)}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: isDotActive ? "28px" : "5px",
                    height: "5px",
                    background: isDotActive ? "#A8673A" : "rgba(244,240,234,0.2)",
                  }}
                />
              );
            })}
          </div>

          {/* Arrows */}
          <div className="flex gap-2.5">
            <button onClick={scrollPrev}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 active:scale-90"
              style={{
                background: current === 0 ? "rgba(244,240,234,0.05)" : "rgba(244,240,234,0.1)",
                border: "1px solid rgba(244,240,234,0.15)",
                opacity: current === 0 ? 0.25 : 1,
              }}>
              <ChevronLeft size={15} color="#F4F0EA" />
            </button>
            <button onClick={scrollNext}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 active:scale-90"
              style={{
                background: current === route.length - 1 ? "rgba(168,103,58,0.5)" : "rgba(244,240,234,0.1)",
                border: "1px solid rgba(244,240,234,0.15)",
                opacity: current === route.length - 1 ? 0.6 : 1,
              }}>
              <ChevronRight size={15} color="#F4F0EA" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
