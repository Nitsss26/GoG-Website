import React, { useState } from 'react';
import EventTemplateBuilder from '../components/admin/EventTemplateBuilder';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (isAuthenticated) {
    return <EventTemplateBuilder />;
  }

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white font-sans p-4">
      <div className="bg-[#0a0a0a] p-8 rounded-xl border border-gray-800 shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#34D562] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#34D562] opacity-10 rounded-full blur-2xl"></div>
        
        <h1 className="text-3xl font-bold mb-2 text-center text-white relative z-10">Admin Portal</h1>
        <p className="text-gray-400 text-center mb-8 relative z-10 text-sm">Enter credentials to access the Event Template Builder</p>
        
        <form onSubmit={handleLogin} className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-700 focus:border-[#34D562]'} rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-transparent transition-all`}
              placeholder="••••••••"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#34D562] hover:bg-[#2ebc55] text-black font-bold py-3 px-4 rounded-lg transition-colors mt-2 shadow-[0_0_15px_rgba(52,213,98,0.2)] hover:shadow-[0_0_20px_rgba(52,213,98,0.4)]"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
