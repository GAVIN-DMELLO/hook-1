import { useState, useEffect } from "react";

export default function Network() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Event handlers to update the same state variable
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Attach listeners on mount
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className=" min-h-screen flex bg-zinc-950 items-center justify-center p-6">
      <div
        className={`flex items-center gap-3 px-4 py-2.5 rounded-full font-medium text-sm border shadow-sm transition-all duration-300 ${
          isOnline
            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
            : "bg-rose-50 text-rose-700 border-rose-200"
        }`}
      >
        {/* Status Dot with pulse effect */}
        <span className="relative flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isOnline ? "bg-emerald-400" : "bg-rose-400"
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              isOnline ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
        </span>

        {/* Conditional Status Text */}
        <span>{isOnline ? "Online — Connection active" : "Offline — No connection"}</span>
      </div>
    </div>
  );
}