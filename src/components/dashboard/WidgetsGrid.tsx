'use client'

import { SimpleWidget } from "@/components/dashboard/SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCalculatorOutline} from "react-icons/io5"

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 text-center justify-center gap-4">
        <SimpleWidget title="Contador" icon={<IoCalculatorOutline size={50} />} subtitle="Contador de visitas" value={count} href="/dashboard/counter/"/>
    </div>
  )
}