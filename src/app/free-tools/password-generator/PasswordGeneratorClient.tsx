"use client";

import { useState, useCallback } from "react";
import UtilityLayout from "@/components/utilities/UtilityLayout";
import { copyToClipboard } from "@/lib/utils";

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("");
      return;
    }

    let result = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const handleCopy = async () => {
    await copyToClipboard(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = (): { label: string; color: string; width: string } => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (uppercase && lowercase) score++;
    if (numbers) score++;
    if (symbols) score++;

    if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
    if (score <= 3) return { label: "Medium", color: "bg-yellow-500", width: "w-2/4" };
    if (score <= 4) return { label: "Strong", color: "bg-green-500", width: "w-3/4" };
    return { label: "Very Strong", color: "bg-emerald-400", width: "w-full" };
  };

  const strength = getStrength();

  return (
    <UtilityLayout title="Password Generator" description="Generate strong, secure passwords with customizable options">
      <div className="space-y-6">
        {/* Output */}
        {password && (
          <div className="flex items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10">
            <code className="flex-1 text-lg text-white font-mono break-all">{password}</code>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-dark-300 hover:text-white hover:bg-white/20 transition-all flex-shrink-0"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}

        {/* Strength */}
        {password && (
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-dark-400">Strength</span>
              <span className="text-dark-300">{strength.label}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full ${strength.color} ${strength.width} rounded-full transition-all`} />
            </div>
          </div>
        )}

        {/* Options */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={64}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-dark-500 mt-1">
              <span>6</span>
              <span>64</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Toggle label="Uppercase (A-Z)" checked={uppercase} onChange={setUppercase} />
            <Toggle label="Lowercase (a-z)" checked={lowercase} onChange={setLowercase} />
            <Toggle label="Numbers (0-9)" checked={numbers} onChange={setNumbers} />
            <Toggle label="Symbols (!@#)" checked={symbols} onChange={setSymbols} />
          </div>
        </div>

        <button
          onClick={generate}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all w-full"
        >
          Generate Password
        </button>
      </div>
    </UtilityLayout>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500"
      />
      <span className="text-sm text-dark-300">{label}</span>
    </label>
  );
}
