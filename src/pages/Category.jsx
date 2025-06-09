// SidebarMenu.jsx
import { useState } from 'react';
import { FaBook, FaMobileAlt, FaTv, FaLaptop, FaGamepad, FaCar, FaUtensils } from 'react-icons/fa';

const categories = [
  { name: 'Книги', icon: <FaBook /> },
  { name: 'Телефоны и гаджеты', icon: <FaMobileAlt /> },
  { name: 'Бытовая техника', icon: <FaTv /> },
  { name: 'Климатическая техника', icon: <FaLaptop /> },
  { name: 'Компьютерная техника', icon: <FaLaptop /> },
  { name: 'Спорт и отдых', icon: <FaGamepad /> },
  { name: 'Товары для дома и офиса', icon: <FaUtensils /> },
  { name: 'Телевизоры, видео и аудио', icon: <FaTv /> },
  { name: 'Товары для геймеров', icon: <FaGamepad /> },
  { name: 'Авотовары', icon: <FaCar /> },
  { name: 'Посуда', icon: <FaUtensils /> },
];

const submenuColumns = [
  {
    title: 'Ручки',
    items: ['Все товары'],
  },
  {
    title: 'Записные книжки и блокноты',
    items: ['Все товары', 'Магнитные блокноты', 'Пухлые блокноты'],
  },
  {
    title: 'Учебные товары',
    items: ['Все товары', 'Азбука', 'Школьные наборы', 'Канцелярские ножницы', 'Цветная бумага', 'Линейки', 'Тетради'],
  },
  {
    title: 'Товары для рисования',
    items: ['Все товары', 'Раскраски', 'Наборы для рисования', 'Пластилин'],
  },
];

export default function category() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex w-[90%] lg:w-[85%] m-auto bg-white min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-60 border-r">
        {categories.map((cat, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="flex items-center gap-2 p-4 bg-purple-300 hover:bg-purple-400 text-purple-900 hover:text-white transition-[0.3s] cursor-pointer m-2 rounded-2xl"
          >
            <span className="text-xl">{cat.icon}</span>
            <span className="hidden md:inline">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Submenu */}
      {activeIndex !== null && (
        <div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white shadow-md"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {submenuColumns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2">{col.title}</h4>
              <ul className="text-sm space-y-1">
                {col.items.map((item, i) => (
                  <li key={i} className="text-blue-600 hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
