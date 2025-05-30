import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Search, ShoppingBag, Menu, X } from "lucide-react";


export default function Header() {
  const icons = [
  { id: 0, icon: Home, label: "Home" },
  { id: 1, icon: Search, label: "Search" },
  {
    id: 2,
    icon: ShoppingBag,
    label: "Cart",
    badgeCount: 3
  },
  { id: 3, icon: User, label: "Profile" },
];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set the initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm w-full z-50 sticky top-0">
      {/* Desktop Header */}

      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <a href="" className="flex items-center space-x-2 gap-2">
          <img src="https://play-lh.googleusercontent.com/CsOjLbIX7Pg8NUjf5U6Gtqdst1KMm7MbKdMpeo47Qiz4qA7Y7MDiXbbrtr4d7pR2ToA=w240-h480-rw" alt="" className="w-10" />
          <p className="text-purple-950 font-bold text-2xl">uzum</p>
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          {icons.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <div className="flex items-center space-x-3">
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>
              {item.id === 2 && item.badgeCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {item.badgeCount}
                </span>
              )}
            </a>
          ))}
          <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Sign In
          </button>
        </div>
      )}

      {isMobile && (
        <div className="md:hidden flex flex-1 flex-col fixed bottom-2 items-center w-full px-4">
          <div className="relative flex bg-blue-300 p-4 gap-8 rounded-full shadow-md w-full max-w-[320px]">
            {icons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => {
                      setActiveIndex(index);
                      setMobileMenuOpen(false);
                    }}
                    className="text-white text-xl relative z-10 p-3 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    <div className="relative">
                      <IconComponent
                        color={activeIndex === index ? "white" : "black"}
                        size={24}
                      />
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
      )}
    </header>
  );
}