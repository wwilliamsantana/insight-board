"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
  color: string;
};

export function StatsCard({ title, value, growth, icon: Icon, color }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900  p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-3 font-mono text-4xl font-bold">{value}</h2>
        </div>

        <div className={`rounded-2xl p-4 text-white ${color}`}>
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <span className="font-semibold text-green-600">{growth}</span>
        <span className="text-slate-500">vs last month</span>
      </div>
    </motion.article>
  );
}
