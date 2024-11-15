"use client";

import { motion } from "framer-motion";
import { Milestone } from "lucide-react";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    title: "Lunar Launch",
    description: "First 10,000 holders reached! 🚀",
    completed: true,
  },
  {
    title: "Asteroid Belt",
    description: "Listed on major exchanges 🌟",
    completed: true,
  },
  {
    title: "Mars Landing",
    description: "RocketPup NFT Collection Launch 🎨",
    completed: false,
  },
  {
    title: "Jupiter Orbit",
    description: "RocketPup Metaverse Beta 🌍",
    completed: false,
  },
];

export default function Roadmap() {
  return (
    <Card className="p-6 border border-primary/20 shadow-lg shadow-primary/5">
      <h3 className="text-2xl font-bold mb-6 clip-text">Mission Roadmap</h3>
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              className={`p-2 rounded-full ${
                milestone.completed ? "bg-secondary" : "bg-muted"
              }`}
            >
              <Milestone className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div>
              <h4 className="text-lg font-semibold">{milestone.title}</h4>
              <p className="text-muted-foreground">{milestone.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}