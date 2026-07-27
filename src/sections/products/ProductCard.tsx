import { Package2 } from "lucide-react";

interface Props {
  name: string;
  category: string;
  price: string;
  stock: number;
};

export function ProductCard({
  name,
  category,
  price,
  stock,
}: Props) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Package2 className="text-slate-700" size={28} />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-slate-500">
        {category}
      </p>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-2xl font-bold">
          {price}
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {stock} in stock
        </span>
      </div>
    </article>
  );
}