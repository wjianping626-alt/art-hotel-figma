import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const tags = ["全部", "探索观景", "餐饮享受", "庆祝活动", "康体养生", "休闲娱乐", "艺术展览", "艺术沙龙"];

const activities = [
  { id: 1, name: "黄土峡谷徒步探索", nameEn: "Loess Canyon Trek", tag: "探索观景", duration: "3小时", price: "¥ 180/人", desc: "在专业向导带领下深入麻黄梁峡谷腹地，探索黄土地貌的自然奥秘。", img: "/activities/lounge.png" },
  { id: 2, name: "日落观景台私宴", nameEn: "Sunset Terrace Dining", tag: "餐饮享受", duration: "2小时", price: "¥ 680/桌", desc: "在天空露台享用本地食材精心烹制的私家晚宴，以峡谷日落为幕布。", img: "/activities/restaurant.png" },
  { id: 3, name: "自助餐厅", nameEn: "Buffet Restaurant", tag: "餐饮享受", duration: "全天", price: "¥ 168/人", desc: "提供本地特色与中西融合的自助餐饮，食材取自黄土高原生态农场。", img: "/activities/buffet.png" },
  { id: 4, name: "大堂咖啡吧", nameEn: "Lobby Coffee Bar", tag: "餐饮享受", duration: "08:00-22:00", price: "¥ 38起", desc: "在暖色灯光与黄土肌理的空间中，品味手冲咖啡与精致甜点。", img: "/activities/coffee.png" },
  { id: 5, name: "酒吧·微醺之夜", nameEn: "Evening Bar", tag: "餐饮享受", duration: "19:00-01:00", price: "¥ 68起", desc: "以黄土大地为灵感调制的特色鸡尾酒，在深夜与艺术对话。", img: "/activities/bar.png" },
  { id: 6, name: "当代艺术展览", nameEn: "Contemporary Art Exhibition", tag: "艺术展览", duration: "自由参观", price: "免费", desc: "驻场艺术家以麻黄梁黄土地貌为灵感的当代艺术创作，定期更换展览主题。", img: "/activities/gallery.png" },
  { id: 7, name: "艺术家工作坊沙龙", nameEn: "Artist Workshop Salon", tag: "艺术沙龙", duration: "4小时", price: "¥ 320/人", desc: "与驻场艺术家面对面交流，参与现场创作示范，体验黄土艺术创作魅力。", img: "/activities/art-lounge.png" },
  { id: 8, name: "书吧阅读时光", nameEn: "Book Café Reading", tag: "休闲娱乐", duration: "自由使用", price: "免费", desc: "在黄土暖光中翻阅艺术与人文书籍，享受安静的独处时光。", img: "/activities/book-cafe.png" },
  { id: 9, name: "乒乓球与台球", nameEn: "Table Tennis & Billiards", tag: "休闲娱乐", duration: "自由使用", price: "免费", desc: "休闲运动空间，适合旅人之间轻松互动与娱乐。", img: "/activities/table-tennis.png" },
  { id: 10, name: "瑜伽与冥想清晨", nameEn: "Sunrise Yoga & Meditation", tag: "康体养生", duration: "90分钟", price: "¥ 120/人", desc: "在黄土峡谷日出的陪伴下，开启一天的身心修复与内在静养。", img: "/activities/gym.png" },
  { id: 11, name: "私人庆典定制", nameEn: "Private Celebration", tag: "庆祝活动", duration: "按需定制", price: "¥ 2,800起", desc: "生日、求婚、纪念日——在麻黄梁的壮阔天地间，定制专属纪念时刻。", img: "/activities/meeting.png" },
];

export function ActivitiesPage() {
  const [activeTag, setActiveTag] = useState("全部");
  const [expanded, setExpanded] = useState<number | null>(null);
  const filtered = activeTag === "全部" ? activities : activities.filter((a) => a.tag === activeTag);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    // Reset to first on tag change
    emblaApi.scrollTo(0);
  }, [emblaApi, filtered.length, activeTag]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full h-full overflow-hidden" style={{ background: "#F4F0EA", fontFamily: "var(--font-sans)" }}>
      <div className="px-6 pt-14 pb-4">
        <p style={{ fontSize: "10px", color: "#A8673A", letterSpacing: "0.3em", fontWeight: 500 }} className="mb-2">ACT IV · EXPERIENCE</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "30px", fontWeight: 600, color: "#3C342C", lineHeight: 1.2 }}>活动与<br />体验</h1>
      </div>

      <div className="overflow-x-auto px-4 pb-3" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-2 w-max">
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)} className="rounded-full px-4 py-2 transition-all duration-200 whitespace-nowrap"
              style={{ background: activeTag === tag ? "#A8673A" : "#E9E2D8", color: activeTag === tag ? "#F4F0EA" : "#3C342C", fontSize: "12px", fontWeight: activeTag === tag ? 600 : 400, border: activeTag === tag ? "none" : "1px solid rgba(60,52,44,0.1)" }}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Book-like carousel */}
      <div className="relative flex-1" style={{ height: "calc(100% - 180px)", paddingBottom: "120px" }}>
        <div className="overflow-hidden w-full h-full px-1" ref={emblaRef}>
          <div className="flex h-full">
            {filtered.map((item, i) => (
              <div key={item.id} className="relative flex-none w-[85%] h-full mr-4 last:mr-0" style={{ transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                <motion.div
                  animate={{ scale: i === current ? 1 : 0.82, opacity: i === current ? 1 : 0.4 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  className="w-full h-full rounded-3xl overflow-hidden cursor-pointer origin-center"
                  style={{ background: "#E9E2D8", border: "1px solid rgba(60,52,44,0.08)" }}
                >
                  <div className="relative" style={{ height: "55%" }}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" style={{ filter: "saturate(0.82)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,6,3,0.65) 100%)" }} />
                    <div className="absolute top-3 left-3 rounded-full px-2.5 py-1" style={{ background: "rgba(168,103,58,0.85)", backdropFilter: "blur(4px)" }}>
                      <span style={{ fontSize: "9px", color: "#F4F0EA", fontWeight: 600, letterSpacing: "0.1em" }}>{item.tag}</span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#F4F0EA", fontWeight: 600 }}>{item.price}</span>
                    </div>
                  </div>

                  <div className="px-5 pt-4 pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 600, color: "#3C342C", marginBottom: "2px" }}>{item.name}</h3>
                        <p style={{ fontSize: "9px", color: "#A8673A", letterSpacing: "0.15em" }}>{item.nameEn}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Clock size={11} color="#7A6E64" /><span style={{ fontSize: "11px", color: "#7A6E64" }}>{item.duration}</span>
                    </div>
                    <motion.div
                      animate={{ height: expanded === item.id ? "auto" : "0px", opacity: expanded === item.id ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p style={{ fontSize: "12px", color: "#7A6E64", lineHeight: 1.75, marginTop: "10px", fontWeight: 300 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Page curl shadow */}
                <div className="absolute top-0 right-0 w-4 h-full pointer-events-none" style={{ background: "linear-gradient(to left, rgba(60,52,44,0.06), transparent)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-0 right-0 flex items-center justify-between px-4 z-10" style={{ bottom: "72px" }}>
          <div className="flex items-center gap-1.5">
            {filtered.map((_, i) => (
              <button key={i} onClick={() => emblaApi?.scrollTo(i)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "20px" : "4px",
                  height: "4px",
                  background: i === current ? "#A8673A" : "rgba(60,52,44,0.15)",
                }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={scrollPrev}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all active:scale-90"
              style={{ background: "rgba(60,52,44,0.08)", border: "1px solid rgba(60,52,44,0.1)" }}>
              <ChevronLeft size={14} color="#3C342C" />
            </button>
            <button onClick={scrollNext}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all active:scale-90"
              style={{ background: "#A8673A", border: "1px solid rgba(168,103,58,0.5)" }}>
              <ChevronRight size={14} color="#F4F0EA" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
