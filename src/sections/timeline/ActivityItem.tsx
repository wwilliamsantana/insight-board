"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  time: string;
  color: string;
  icon: LucideIcon;
}

export function ActivityItem({
  title,
  description,
  time,
  color,
  icon: Icon,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
      }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="relative flex flex-col items-center">
        <div className={`rounded-xl p-3 text-white ${color}`}>
          <Icon size={18} />
        </div>

        <div className="mt-2 h-full w-px bg-slate-200 last:hidden" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm text-slate-500">{description}</p>

        <span className="mt-2 block text-xs text-slate-400">{time}</span>
      </div>
    </motion.article>
  );
}
