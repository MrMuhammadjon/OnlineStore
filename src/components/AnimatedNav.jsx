import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PieChart, Clock, Bell } from "lucide-react";

const icons = [
  { id: 0, icon: <Home />, label: "Home" },
  { id: 1, icon: <PieChart />, label: "Chart" },
  { id: 2, icon: <Clock />, label: "Time" },
  { id: 3, icon: <Bell />, label: "Notify" },
];

export default function AnimatedNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % icons.length);
  };

  return (
    <div className="flex flex-1 flex-col fixed bottom-2 items-center space-y-4 mt-10">
      <div className="relative flex bg-gray-900 p-4 rounded-full gap-8">
        {icons.map((item, index) => (
          <div key={item.id} className="relative">
            <button
              onClick={() => setActiveIndex(index)}
              className="text-white text-xl relative z-10 md-2 p-3 rounded-ful transition-colors duration-200 cursor-pointer"
            >
              {item.icon}
            </button>

            {activeIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-orange-500 rounded-full w-12 h-12 m-auto z-0 flex items-center justify-center"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
