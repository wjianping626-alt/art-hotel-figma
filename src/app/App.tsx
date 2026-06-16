import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./components/HomePage";
import { RoutePage } from "./components/RoutePage";
import { StayPage } from "./components/StayPage";
import { ActivitiesPage } from "./components/ActivitiesPage";
import { ArtPage } from "./components/ArtPage";
import { ProfilePage } from "./components/ProfilePage";

type Page = "home" | "route" | "art" | "stay" | "activity" | "profile";
type UserType = "A" | "B" | null;

const pageOrder: Page[] = ["home", "route", "art", "stay", "activity", "profile"];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [userType, setUserType] = useState<UserType>(null);
  const [prevPage, setPrevPage] = useState<Page>("home");

  const navigate = (next: Page | string) => {
    const p = next as Page;
    setPrevPage(page);
    setPage(p);
  };

  const isForward = pageOrder.indexOf(page) >= pageOrder.indexOf(prevPage);

  return (
    <div className="size-full flex items-center justify-center" style={{ background: "#2D2D2D" }}>
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          width: "min(390px, 100vw)",
          height: "min(844px, 100vh)",
          background: "#F4F0EA",
          borderRadius: "min(44px, 0px)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: isForward ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isForward ? -30 : 30 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {page === "home" && <HomePage onSelectUser={setUserType} selectedUser={userType} onNavigate={navigate} />}
              {page === "route" && <RoutePage userType={userType} onNavigate={navigate} />}
              {page === "art" && <ArtPage />}
              {page === "stay" && <StayPage />}
              {page === "activity" && <ActivitiesPage />}
              {page === "profile" && <ProfilePage />}
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={{ position: "relative", zIndex: 50 }}>
          <BottomNav current={page} onChange={(p) => navigate(p)} />
        </div>
      </div>
    </div>
  );
}
