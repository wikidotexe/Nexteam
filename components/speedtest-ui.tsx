"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, 
  ArrowDown, 
  ArrowUp, 
  Activity, 
  Play, 
  RotateCcw,
  Gauge,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SpeedStats {
  ping: number | null;
  download: number | null;
  upload: number | null;
}

interface NetworkInfo {
  ip: string;
  isp: string;
  location: string;
}

export default function SpeedtestUI() {
  const [testing, setTesting] = useState(false);
  const [phase, setPhase] = useState<"idle" | "ping" | "download" | "upload" | "finished">("idle");
  const [stats, setStats] = useState<SpeedStats>({
    ping: null,
    download: null,
    upload: null,
  });
  const [currentValue, setCurrentValue] = useState(0);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    ip: "Detecting...",
    isp: "Detecting...",
    location: "Detecting...",
  });

  useEffect(() => {
    const fetchNetworkInfo = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setNetworkInfo({
          ip: data.ip || "Unknown",
          isp: data.org || "Unknown",
          location: `${data.city}, ${data.country_name}` || "Unknown",
        });
      } catch (e) {
        console.error("Failed to fetch network info", e);
        setNetworkInfo({
          ip: "Unavailable",
          isp: "Unavailable",
          location: "Unavailable",
        });
      }
    };
    fetchNetworkInfo();
  }, []);

  const runPingTest = async (): Promise<number> => {
    const pings: number[] = [];
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      try {
        await fetch("https://speed.cloudflare.com/__down?bytes=0", { cache: "no-store", mode: "cors" });
        pings.push(performance.now() - start);
      } catch (e) {
        console.error("Ping error", e);
      }
      await new Promise(r => setTimeout(r, 100));
    }
    return Math.round(Math.min(...pings));
  };

const runDownloadTest = async (
  onProgress: (speed: number) => void
): Promise<number> => {
  const TEST_DURATION = 15000; // 15 seconds for more stability
  const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB chunks
  const url = "https://speed.cloudflare.com/__down?bytes=" + CHUNK_SIZE;

  let downloaded = 0;
  const start = performance.now();

  while (performance.now() - start < TEST_DURATION) {
    try {
      const res = await fetch(url, { cache: "no-store", mode: "cors" });
      const buffer = await res.arrayBuffer();
      downloaded += buffer.byteLength;

      const elapsed = (performance.now() - start) / 1000;
      const speed = (downloaded * 8) / (elapsed * 1024 * 1024);
      onProgress(speed);
    } catch (e) {
      console.error("Download error", e);
      break;
    }
  }

  const totalTime = (performance.now() - start) / 1000;
  return (downloaded * 8) / (totalTime * 1024 * 1024);
};


const runUploadTest = async (
  onProgress: (speed: number) => void
): Promise<number> => {
  const TEST_DURATION = 12000; // 12 seconds
  const size = 25 * 1024 * 1024; // 25MB
  const data = new Uint8Array(size);

  let totalUploaded = 0;
  const start = performance.now();

  // We loop to ensure it lasts longer as per user request
  while (performance.now() - start < TEST_DURATION) {
    try {
      const uploadStart = performance.now();
      await fetch("https://speed.cloudflare.com/__up", {
        method: "POST",
        body: data,
        mode: "cors",
      });
      totalUploaded += size;
      const elapsed = (performance.now() - start) / 1000;
      const speed = (totalUploaded * 8) / (elapsed * 1024 * 1024);
      onProgress(speed);
    } catch (e) {
      console.error("Upload error", e);
      break;
    }
  }

  const totalTime = (performance.now() - start) / 1000;
  return (totalUploaded * 8) / (totalTime * 1024 * 1024);
};


  const startTest = useCallback(async () => {
    setTesting(true);
    setStats({ ping: null, download: null, upload: null });
    
    // Ping Phase
    setPhase("ping");
    const pings = [];
    for(let i=0; i<3; i++) {
        pings.push(await runPingTest());
        setCurrentValue(pings[i]);
    }
    const avgPing = Math.round(pings.reduce((a, b) => a + b) / pings.length);
    setStats(prev => ({ ...prev, ping: avgPing }));
    
    // Download Phase
    setPhase("download");
    setCurrentValue(0);
    const dlSpeed = await runDownloadTest((s) => setCurrentValue(s));
    setStats(prev => ({ ...prev, download: dlSpeed }));
    
    // Upload Phase
    setPhase("upload");
    setCurrentValue(0);
    const ulSpeed = await runUploadTest((s) => setCurrentValue(s));
    setStats(prev => ({ ...prev, upload: ulSpeed }));
    
    setPhase("finished");
    setTesting(false);
    setCurrentValue(0);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8 relative">
      <div className="absolute left-4 top-0 -mt-8 md:-mt-12">
        <Button variant="ghost" asChild size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="text-center space-y-4 pt-4 md:pt-0">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Network Speed Test
        </h2>
        <p className="text-muted-foreground text-lg">
          Measure your connection performance in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
            title="Ping / Latency" 
            value={stats.ping} 
            unit="ms" 
            icon={<Activity className="w-5 h-5 text-emerald-500" />}
            active={phase === "ping"}
            color="emerald"
        />
        <StatCard 
            title="Download" 
            value={stats.download} 
            unit="Mbps" 
            icon={<ArrowDown className="w-5 h-5 text-blue-500" />}
            active={phase === "download"}
            color="blue"
        />
        <StatCard 
            title="Upload" 
            value={stats.upload} 
            unit="Mbps" 
            icon={<ArrowUp className="w-5 h-5 text-purple-500" />}
            active={phase === "upload"}
            color="purple"
        />
      </div>

      <Card className="relative overflow-hidden border-2 border-primary/10 shadow-xl bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Gauge Background */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
                strokeDasharray="212 283"
                strokeLinecap="round"
              />
              {/* Active Gauge */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="8"
                strokeDasharray={`${(currentValue / 100) * 212} 283`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
                animate={{
                    strokeDasharray: `${Math.min((currentValue / 100) * 212, 212)} 283`
                }}
              />
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={phase === "ping" ? "#10b981" : phase === "download" ? "#3b82f6" : phase === "upload" ? "#a855f7" : "#3b82f6"} />
                  <stop offset="100%" stopColor={phase === "ping" ? "#34d399" : phase === "download" ? "#60a5fa" : phase === "upload" ? "#c084fc" : "#8b5cf6"} />
                </linearGradient>
              </defs>
            </svg>

            {/* Value Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-1"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {phase === "idle" ? "Ready" : phase}
                  </span>
                </motion.div>
              </AnimatePresence>
              <div className="text-6xl md:text-7xl font-extrabold tracking-tighter tabular-nums">
                {Math.floor(currentValue)}
              </div>
              <div className="text-muted-foreground font-medium">
                {phase === "ping" ? "ms" : "Mbps"}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-bold rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
              disabled={testing}
              onClick={startTest}
            >
              {testing ? (
                <>
                  <RotateCcw className="mr-2 h-5 w-5 animate-spin" />
                  Testing...
                </>
              ) : phase === "finished" ? (
                <>
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Test Again
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Start Speed Test
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground text-center">
        <div className="p-4 border rounded-xl bg-muted/30">
            <strong>Server Location:</strong> {networkInfo.location}
        </div>
        <div className="p-4 border rounded-xl bg-muted/30">
            <strong>ISP:</strong> {networkInfo.isp}
        </div>
        <div className="p-4 border rounded-xl bg-muted/30">
            <strong>IP Address:</strong> {networkInfo.ip}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, unit, icon, active, color }: { 
    title: string, 
    value: number | null, 
    unit: string, 
    icon: React.ReactNode, 
    active: boolean,
    color: string
}) {
  return (
    <Card className={cn(
        "relative overflow-hidden transition-all duration-500",
        active && `ring-2 ring-${color}-500/50 shadow-lg shadow-${color}-500/10 scale-105 z-10`,
        !active && "opacity-80 grayscale-[0.5]"
    )}>
      <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold tabular-nums">
            {value !== null ? (title === "Ping / Latency" ? value : value.toFixed(1)) : "---"}
          </span>
          <span className="text-xs text-muted-foreground font-medium">{unit}</span>
        </div>
        {active && (
            <motion.div 
                className={cn("absolute bottom-0 left-0 h-1 bg-current", `text-${color}-500`)}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
            />
        )}
      </CardContent>
    </Card>
  );
}
