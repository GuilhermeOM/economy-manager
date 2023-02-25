import { useState } from "react";
import { Card } from "@/components/Card";
import dynamic from "next/dynamic";
import Link from "next/link";

const AreaChart = dynamic(() => import("../components/AreaGraphic"), {
  ssr: false,
});

export default function Home() {
  const [patrimony, setPatrimony] = useState(1234.56);

  return (
    <div>
      <main className="mx-4 mt-20 p-4">
        <div className="mb-4">
          <h3 className="font-bold">Bem vindo Guilherme</h3>
          <p>
            Você teve uma variação negativa com seus investimentos. Essas{" "}
            <Link href="/" className="text-indigo-500 hover:text-indigo-600 ">
              notícias
            </Link>{" "}
            podem ser úteis para você!
          </p>
        </div>
        <div className="block gap-2 2xl:flex">
          <div className="w-full mb-2">
            <Card>
              <h2 className="mb-4 font-bold flex gap-2 text-xl">
                Patrimônio: <p>R$ {patrimony}</p>
              </h2>
              <AreaChart
                data={[
                  { name: "Jan", value: 12 },
                  { name: "Fev", value: 15 },
                  { name: "Mar", value: 9 },
                  { name: "Abr", value: 30 },
                  { name: "Mai", value: 12 },
                  { name: "Jun", value: 15 },
                  { name: "Jul", value: 9 },
                  { name: "Ago", value: 30 },
                  { name: "Set", value: 12 },
                  { name: "Out", value: 15 },
                  { name: "Nov", value: 9 },
                  { name: "Dez", value: 70 },
                ]}
                height={300}
              />
            </Card>
          </div>
          <div className="flex gap-2 2xl:w-screen mb-2">
            <div className="flex flex-col gap-2 w-full">
              <Card tailwindcss="h-1/2 flex flex-col">
                <h3>Lorem ipsum dolor sit amet:</h3>

                <div className="mt-auto">
                  <h1 className="text-xl font-bold">R$2500.00</h1>
                  <h3>50.00% (30 dias)</h3>
                </div>
              </Card>
              <Card tailwindcss="h-1/2 flex flex-col">
                <h3>Lorem ipsum dolor sit amet:</h3>

                <div className="mt-auto">
                  <h1 className="text-xl font-bold">R$30000.00</h1>
                  <h3>1205.43% (240 dias)</h3>
                </div>
              </Card>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Card tailwindcss="h-1/2 flex flex-col">
                <h3>Lorem ipsum dolor sit amet</h3>

                <div className="mt-auto">
                  <h1 className="text-xl font-bold">R$2500.00</h1>
                  <h3>50.00% (30 dias)</h3>
                </div>
              </Card>
              <Card tailwindcss="h-1/2 flex flex-col">
                <h3>Lorem ipsum dolor sit amet:</h3>

                <div className="mt-auto">
                  <h1 className="text-xl font-bold">R$30000.00</h1>
                  <h3>1205.43% (240 dias)</h3>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
