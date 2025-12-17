import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

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
      <WidgetsGrid />
    </div>
  );
}