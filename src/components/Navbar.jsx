import { Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const Location = [
    { name: "O'zbekiston", code: 'UZ' },
    { name: 'Россия', code: 'RU' },
    { name: 'США', code: 'US' },
    { name: 'Казахстан', code: 'KZ' },
    { name: 'Кыргызстан', code: 'KG' },
    { name: 'Турция', code: 'TR' },
  ]

  const language = [
    { name: "O'zbekcha", code: 'uz' },
    { name: 'Русский', code: 'ru' },
    { name: 'English', code: 'en' },
  ]

  return (
    <>
      <div className="w-full h-8 bg-gray-200 flex items-center justify-center px-4">
        <div className="w-[80%] flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Search className='w-4 h-4' />
              <select className="bg-transparent border-none text-sm focus:ring-0">
                {
                  Location.map((location, index) => {
                    return (
                      <option key={index}>
                        {location.name}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="">
              {/* <NavLink to="/" className="text-sm text-gray-600 hover:text-gray-800">
              </NavLink> */}
            </div>
          </div>

          <div className="">
            <select className="bg-transparent border-none text-sm focus:ring-0">
              <option>O'zbekcha</option>
              <option>Русский</option>
              <option>English</option>
            </select>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
