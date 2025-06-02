import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Combo = () => {
    const { t } = useTranslation();
    const { user } = useAppContext()

    const combo = [
        {
            id: 1,
            title: "Combo1",
            description: "Description for Combo 1",
            price: 19.99,
            image: "https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b"
        },
        {
            id: 2,
            title: "Combo2",
            description: "Description for Combo 2",
            price: 29.99,
            image: "https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8"
        },
        {
            id: 3,
            title: "Combo3",
            description: "Description for Combo 3",
            price: 39.99,
            image: "https://static.uzum.uz/static/promo_images/66eaead4-ce8b-45b2-8691-592ced656ccf"
        }
    ]

    return (
        <>
            <div className="w-[90%] md:w-[85%] m-auto mt-8">
                {!user ? (
                    <div className=""></div>
                ) : (
                    <div className="">
                        <h1 className="text-xl font-sans mb-4">{t('Combo.Combo')}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {combo.map((item, index) => (
                                <NavLink key={index} className="flex items-center justify-center gap-2 borde cursor-pointer rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-100 transition">
                                    <img className='w-10' src={item.image} alt="" />
                                    <h1>{t(`Combo.${item.title}`)}</h1>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Combo
