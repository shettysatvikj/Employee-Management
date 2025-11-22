const Header1 = () => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center bg-[#161a21] p-6 rounded-xl shadow-md border border-[#22262e]">
      
      <div>
        <h1 className="text-xl text-gray-300">Welcome Back,</h1>
        <h2 className="text-4xl font-semibold text-white tracking-wide">Admin 👋</h2>
      </div>

      <button
        onClick={logOut}
        className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-5 py-2 rounded-lg shadow-md active:scale-95 transition-all"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header1;
