import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <div className="w-[90%] md:w-[85%] m-auto mt-8 flex gap-3 h-auto">
      <div className="flex flex-col items-center mb-6 h-full flex-1 gap-2">
        <button
        onClick={() => navigate('/profile/profilorders')}
          className="w-full py-3 bg-white shadow-sm rounded-sm hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          {t('profile.orders')}
        </button>
        <button
          onClick={() => navigate('/profile')}
          className="w-full py-3 bg-white shadow-sm rounded-sm hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          {t('profile.profile')}
        </button>
      </div>
      <div className="flex-2 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
