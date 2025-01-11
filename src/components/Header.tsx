import medibuddy from "@/assets/medibuddyWithName.svg";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearchOutline, IoArrowBack } from "react-icons/io5";
import walletImg from "@/assets/Wallet.png";
import cartImg from "@/assets/Cart.png";

const Header = () => {
  return (
    <>
      {/* larger device */}
      <nav className="py-3 hidden md:block">
        <nav className="w-full flex justify-around items-center ">
          <div className="flex gap-2 items-center">
            <img src={medibuddy} alt="medibuddy-logo" className="w-28" />
            <p className="bg-blue-primary text-white px-4 rounded-full text-sm font-normal py-1">
              Lab
            </p>
          </div>
          <ul className="text-blue-primary text-sm list-none font-medium flex gap-3">
            <li className="">About Us</li>
            <li className="">Login</li>
          </ul>
        </nav>
        <nav className="bg-blue-primary w-full flex items-center gap-5 justify-center py-2 mt-3">
          <div className="bg-blue-400 flex gap-2 text-xs font-normal rounded-lg p-2 text-white">
            <MdOutlineLocationOn className="text-blue-primary text-2xl" />
            <div>
              <p>Telangana</p>
              <p>
                DVFS9+QCR, Korutla, Telangana <br />
                505326, India
              </p>
            </div>
          </div>
          <div className="rounded-2xl w-3/5 px-3 h-14 flex items-center bg-white text-gray-400 shadow-zinc-800">
            <input
              type="search"
              placeholder="Search for Labs Tests, Scans & Health Checkup Packages"
              className="outline-none border-none focus:outline-none w-full text-lg placeholder-gray-400 font-normal border-r "
            />
            <IoSearchOutline
              size={40}
              className="text-blue-primary h-full pl-2 mr-4 border-l"
            />
          </div>
        </nav>
      </nav>

      {/* smaller device */}
      <nav className="block md:hidden">
        <nav className="text-text-navy-primary flex justify-between items-center w-full gap-10 py-5">
          <div className="flex gap-3 items-center">
            <IoArrowBack size={30} />
            <div className="w-40">
              <h2 className="flex gap-2 items-center">
                Telangana <MdOutlineLocationOn className="" />
              </h2>
              <p className="truncate text-xs">
                Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka -
                560076
              </p>
            </div>
          </div>

          <div className="flex justify-center  w-full items-center gap-4">
            <div className="p-4 relative">
              <img src={walletImg} alt="wallet" className="" />
              <p className="text-xs absolute top-0 right-[-10px] bg-blue-primary px-2 text-white rounded-full py-1">
                4321
              </p>
            </div>
            <div className="p-1 relative mr-3">
              <img src={cartImg} alt="cart" className="w-8" />
              <p className="text-xs absolute top-[-5px] right-[-10px] bg-blue-primary px-2 text-white rounded-full py-1">
                1
              </p>
            </div>
          </div>
        </nav>
        <div className="border border-gray-400 h-10 pl-3 rounded-xl shadow-md mx-3 my-3 text-sm flex items-center justify-between">
          <input
            type="search"
            placeholder="Find lab tests, diagnostics center"
            className="border-none outline-none focus:outline-none text-xs w-full"
          />
          <IoSearchOutline
            size={30}
            className="text-gray-500 h-full pl-2 mr-4"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
