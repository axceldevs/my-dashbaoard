import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoGameController, IoHeart, IoHeartOutline } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import path from "path";

const menuItem = () => [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter client side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generación de Pokémons",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favorites",
    subTitle: "Pokémon favoritos",
  }

];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div
        id="logo"
        className="flex items-center justify-center h-20 border-b-2 border-slate-700 border-slate-600/50"
      >
        <Image
          src="/images/logo.png"
          alt="Innuvos Logo"
          width={248}
          height={140}
          priority
          className="object-contain"
        />
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={32}
              height={32}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Hector Bambague
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItem().map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
