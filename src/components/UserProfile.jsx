import React from 'react'
import { useState, useEffect  } from 'react';
import { useAppContext } from '../context/AppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserProfile = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        birthDate: '',
        email: '',
        firstName: '',
        gender: '',
        phone: '',
        fatherName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const { user, setUser } = useAppContext();

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        toast.success("Tizimdan chiqdingiz");
        navigate('/');
    }

    useEffect(() => {
        if (user) {
            setFormData({
                ...formData,
                firstName: user.firstName || '',
                email: user.email || '',
                // Add other fields as needed
            });
        }
    }, [user]);
    return (
        <>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md flex-2">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Majumotlarim</h1>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Familiya <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tug'ligan sana
                                </label>
                                <input
                                    type="text"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    placeholder="kk/oo/yyyy"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Elektron pochta <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block border-r border-gray-200"></div>
                    <div className="md:hidden border-b border-gray-200 my-6"></div>

                    {/* Right Column */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">Majumotlarim</h1>
                            <button onClick={logOut} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                                Tizimdan chiqish
                            </button>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ism <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Jins
                                </label>
                                <div className="flex space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === 'male'}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="ml-2">Erak</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === 'female'}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="ml-2">Ayol</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Telefon raqami <span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <div className="flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                        +998
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="91 702-11-75"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Otasining Ismi
                                </label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button
                                onClick={() => toast.success('Ma\'lumotlar saqlandi')}
                                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Saqlash
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
