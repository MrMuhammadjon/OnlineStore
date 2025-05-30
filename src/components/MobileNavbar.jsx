import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Search, ShoppingBag } from "lucide-react";

const icons = [
  { id: 0, icon: Home, label: "Home" },
  { id: 1, icon: Search, label: "Search" },
  { 
    id: 2, 
    icon: ShoppingBag, 
    label: "Cart",
    badgeCount: 3 // Add badge count here
  },
  { id: 3, icon: User, label: "Profile" },
];

export default function MobileNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-1 flex-col fixed bottom-2 items-center space-y-4 mt-10 w-full">
      <div className="relative flex bg-blue-300 p-4 gap-8 rounded-full shadow-md"> 
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => setActiveIndex(index)}
                className="text-white text-xl relative z-10 p-3 rounded-full transition-colors duration-200 cursor-pointer"
              >
                <div className="relative">
                  <IconComponent 
                    color={activeIndex === index ? "white" : "black"} 
                    size={24}
                  />
                  {/* Shopping Bag Badge */}
                  {item.id === 2 && item.badgeCount > 0 && (
                    <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badgeCount}
                    </span>
                  )}
                </div>
              </button>

              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-blue-500 rounded-full w-12 h-12 m-auto z-0 flex items-center justify-center"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}