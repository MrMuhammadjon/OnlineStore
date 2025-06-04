import { Outlet, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] md:w-[85%] m-auto mt-8 flex gap-3 h-[500px]">
      <div className="flex flex-col items-center mb-6 h-full flex-1 gap-2">
        <button
        onClick={() => navigate('/profile/profilorders')}
          className="w-full py-3 bg-white shadow-sm rounded-sm hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          Buyurtmalarim
        </button>
        <button
          onClick={() => navigate('/profile')}
          className="w-full py-3 bg-white shadow-sm rounded-sm hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          Mening Ma'lumotlarim
        </button>
      </div>
      <div className="flex-2 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
