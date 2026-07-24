"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
  color: string;
}

export function MetricCard({ title, value, growth, icon: Icon, color }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${color}`}
        >
          <Icon size={26} />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-semibold text-green-600">{growth}</span>

        <span className="text-sm text-slate-500">Compared to last 30 days</span>
      </div>
    </motion.article>
  );
}
