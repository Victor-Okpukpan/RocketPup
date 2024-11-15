"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function TokenPrice() {
  const [price, setPrice] = useState(0.00042);
  const [trend, setTrend] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.48) * 0.00001;
      setPrice(prev => {
        const newPrice = prev + change;
        setTrend(change > 0 ? 1 : -1);
        return Number(newPrice.toFixed(6));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 relative overflow-hidden shadow-xl shadow-primary/5">
      <motion.div
        animate={{ rotate: trend > 0 ? 45 : -45 }}
        className="absolute top-4 right-4"
      >
        <Rocket className={trend > 0 ? "text-secondary" : "text-destructive"} />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">Current Price</h3>
      <motion.p
        key={price}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold ${
          trend > 0 ? "text-secondary" : "text-destructive"
        }`}
      >
        ${price}
      </motion.p>
      <p className="text-sm text-muted-foreground mt-2">
        Price updates every 3 seconds
      </p>
    </Card>
  );
}