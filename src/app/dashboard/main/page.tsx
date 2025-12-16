import { SimpleWidget } from "@/components";
import { IoCalculatorOutline, IoCarOutline, IoCartOutline, IoPeopleCircleOutline } from "react-icons/io5"

export const metadata = {
  title: 'Dashboard',
  description: 'Panel de administración con widgets informativos',
}

export default function MainPage() {
  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-5xl font-extrabold my-4 text-center tracking-wide">
        Dashboard
        <span className="block text-xl text-blue-600 font-semibold">
          Bienvenido al panel de administración
        </span>
      </h1>
      <div className="flex flex-wrap p-2">
        <SimpleWidget title="Contador" icon={<IoCalculatorOutline size={50} />} value="123" subtitle="Contador de visitas"/>
        <SimpleWidget title="Usuarios" icon={<IoPeopleCircleOutline size={50} />} value="456" subtitle="Usuarios activos"/>
        <SimpleWidget title="Ventas" icon={<IoCartOutline size={50} />} value="789" subtitle="Ventas realizadas"/>
      </div>
    </div>
  );
}