import React from "react";
import { Zap, Wrench } from "lucide-react";

export default function CredentialsBanner() {
  return (
    <div style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,215,0,0.15)", borderBottom: "1px solid rgba(255,215,0,0.15)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.2)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,215,0,0.1)", color: "#FFD700" }}>
              <Zap size={24} />
            </div>
            <div>
              <p className="text-white font-black text-base leading-tight">Journeyman Electrician</p>
              <p className="text-gray-400 text-sm">Certified 2007</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,215,0,0.2)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,215,0,0.1)", color: "#FFD700" }}>
              <Wrench size={24} />
            </div>
            <div>
              <p className="text-white font-black text-base leading-tight">Journeyman Plumber</p>
              <p className="text-gray-400 text-sm">Licensed</p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Both are compulsory-certification trades in Alberta — most contractors hold one. Yaya holds both.
        </p>
      </div>
    </div>
  );
}
