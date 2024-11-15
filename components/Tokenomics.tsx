"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Megaphone, Coins, Users, Lock, Sparkles, Rocket } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const TOTAL_SUPPLY = "420,690,000,000,000";

const tokenomicsData = [
  { name: "Marketing & Memes", value: 40, color: "hsl(var(--primary))", icon: Megaphone },
  { name: "Liquidity Pool", value: 25, color: "hsl(var(--secondary))", icon: Coins },
  { name: "Community Airdrops", value: 20, color: "hsl(var(--accent))", icon: Users },
  { name: "Team (Locked)", value: 10, color: "hsl(var(--muted-foreground))", icon: Lock },
  { name: "Development", value: 5, color: "hsl(var(--destructive))", icon: Rocket }
];

const TokenInfoCard = ({ title, value, icon: Icon, description }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-card p-4 rounded-lg border border-primary/20 shadow-lg shadow-primary/5"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-full bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-2xl font-bold text-primary mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

export default function Tokenomics() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 clip-text">
            Tokenomics
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-2xl font-bold text-primary">
              Total Supply: {TOTAL_SUPPLY}
            </p>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            RocketPup&apos;s tokenomics are designed for maximum meme potential and sustainable growth.
            With a focus on marketing and community engagement, we&apos;re ready to take this rocket to Mars! 🚀
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tokenomicsData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {tokenomicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card p-2 rounded-lg border border-border shadow-lg">
                        <p className="text-sm font-semibold">{payload[0].name}</p>
                        <p className="text-sm text-primary">{payload[0].value}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid gap-4"
        >
          <TokenInfoCard
            title="Buy Tax"
            value="4.20%"
            icon={Coins}
            description="2% Marketing, 1.2% LP, 1% Development"
          />
          <TokenInfoCard
            title="Initial Burn"
            value="42,069,000,000,000"
            icon={Lock}
            description="10% of total supply burned at launch 🔥"
          />
          <TokenInfoCard
            title="Max Wallet"
            value="8,413,800,000,000"
            icon={Users}
            description="2% of total supply per wallet"
          />
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card p-4 rounded-lg border border-primary/20 shadow-lg shadow-primary/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">{item.name}</h4>
            </div>
            <p className="text-2xl font-bold text-primary">{item.value}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}