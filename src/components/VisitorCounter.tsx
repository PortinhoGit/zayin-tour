"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("visitor-count");
    const current = stored ? parseInt(stored, 10) : 1247;
    const next = current + 1;
    localStorage.setItem("visitor-count", String(next));
    setCount(next);
  }, []);

  if (count === 0) return null;

  return (
    <div className="flex items-center gap-2 text-white/50 text-xs">
      <Users className="w-3.5 h-3.5" />
      <span>{count.toLocaleString()} visitantes</span>
    </div>
  );
}
