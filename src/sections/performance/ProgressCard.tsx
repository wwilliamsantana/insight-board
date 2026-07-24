"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  value: number;
  color: string;
}

export function ProgressCard({ title, value, color }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white p-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        <span className="font-bold">{value}%</span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${value}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.article>
  );
}
