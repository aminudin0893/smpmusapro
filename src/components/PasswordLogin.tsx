
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordLoginProps {
  onLogin: () => void;
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'smpmusapro') {
      onLogin();
    } else {
      setError('Password salah! Silakan coba lagi.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen school-background flex items-center justify-center">
      <div className="glass-effect rounded-2xl p-8 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">Portal Login</h1>
          <p className="text-white/80 text-sm">
            SMP Muhammadiyah Al Mujahidin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="bg-white/20 border-white/30 text-white placeholder-white/60 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
          >
            Masuk
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            Portal Resmi SMP Muhammadiyah Al Mujahidin
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
