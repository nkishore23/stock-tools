import React, { useState } from 'react';
import { TrendingUp, Plus, Trash2, Calculator, DollarSign, BarChart3, Sparkles, Target, PieChart } from 'lucide-react';

export default function StockAverageCalculator() {
  const [entries, setEntries] = useState([
    { id: 1, shares: '', price: '' }
  ]);
  const [animate, setAnimate] = useState(false);

  const addEntry = () => {
    setEntries([...entries, { id: Date.now(), shares: '', price: '' }]);
  };

  const removeEntry = (id) => {
    if (entries.length > 1) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  const updateEntry = (id, field, value) => {
    setEntries(entries.map(e =>
      e.id === id ? { ...e, [field]: value } : e
    ));
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
  };

  const calculate = () => {
    const validEntries = entries.filter(e => e.shares && e.price);

    if (validEntries.length === 0) return { totalShares: 0, totalCost: 0, avgPrice: 0 };

    const totalShares = validEntries.reduce((sum, e) => sum + Number(e.shares), 0);
    const totalCost = validEntries.reduce((sum, e) => sum + (Number(e.shares) * Number(e.price)), 0);
    const avgPrice = totalCost / totalShares;

    return { totalShares, totalCost, avgPrice };
  };

  const { totalShares, totalCost, avgPrice } = calculate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Orbs with enhanced glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Sparkle effects */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-violet-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-fuchsia-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 p-4 md:p-8">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-2xl opacity-50"></div>
            <div className="relative p-4 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500">
              <TrendingUp className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-fuchsia-200 to-purple-200 tracking-tight">
                Stock Average
              </h1>
              <div className="absolute -top-4 -right-8">
                <Sparkles className="w-8 h-8 text-fuchsia-400 animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-violet-200 font-light tracking-wide">Calculate your perfect average with precision</p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-violet-200">Live Calculator</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Target className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm text-violet-200">Precision Mode</span>
            </div>
          </div>
        </div>

        {/* Main Glass Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>

            <div className="p-8 md:p-10">
              {/* Entries Section */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="w-6 h-6 text-violet-300" />
                  <h2 className="text-2xl font-bold text-white">Your Stock Purchases</h2>
                </div>

                {entries.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="group relative"
                    style={{ animation: 'slideIn 0.5s ease-out' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-violet-500/10 rounded-2xl transition-all duration-500"></div>

                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group-hover:border-violet-400/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-violet-500/20 group-hover:scale-[1.02]">
                      <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-violet-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          {index + 1}
                        </div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-violet-200 mb-3">
                              <BarChart3 className="w-4 h-4" />
                              Number of Shares
                            </label>
                            <div className="relative group/input">
                              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity"></div>
                              <input
                                type="number"
                                value={entry.shares}
                                onChange={(e) => updateEntry(entry.id, 'shares', e.target.value)}
                                placeholder="100"
                                className="relative w-full px-5 py-4 bg-black/30 border-2 border-white/10 rounded-xl text-white text-lg placeholder-violet-300/40 focus:outline-none focus:border-violet-400 focus:bg-black/50 transition-all duration-300"
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-violet-200 mb-3">
                              <DollarSign className="w-4 h-4" />
                              Price per Share (₹)
                            </label>
                            <div className="relative group/input">
                              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity"></div>
                              <input
                                type="number"
                                step="0.01"
                                value={entry.price}
                                onChange={(e) => updateEntry(entry.id, 'price', e.target.value)}
                                placeholder="150.50"
                                className="relative w-full px-5 py-4 bg-black/30 border-2 border-white/10 rounded-xl text-white text-lg placeholder-violet-300/40 focus:outline-none focus:border-fuchsia-400 focus:bg-black/50 transition-all duration-300"
                              />
                            </div>
                          </div>
                        </div>

                        {entries.length > 1 && (
                          <button
                            onClick={() => removeEntry(entry.id)}
                            className="flex-shrink-0 p-4 bg-gradient-to-br from-red-500/20 to-pink-500/20 hover:from-red-500/40 hover:to-pink-500/40 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 group/btn border border-red-400/20"
                          >
                            <Trash2 className="w-6 h-6 text-red-300 group-hover/btn:text-red-200" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Button */}
              <button
                onClick={addEntry}
                className="relative w-full py-5 rounded-2xl font-bold text-lg text-white overflow-hidden group/add transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 opacity-0 group-hover/add:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/add:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Plus className="w-6 h-6 group-hover/add:rotate-180 transition-transform duration-500" />
                  <span>Add More Entries</span>
                </div>
              </button>

              {/* Results */}
              {totalShares > 0 && (
                <div className={`mt-10 space-y-6 ${animate ? 'animate-pulse' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-7 h-7 text-violet-300" />
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-200">
                      Your Results
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative group/card">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover/card:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-violet-500/30 to-purple-600/30 backdrop-blur-xl rounded-2xl p-7 border border-violet-400/40 transform group-hover/card:scale-105 group-hover/card:-translate-y-2 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-violet-200 text-sm font-semibold uppercase tracking-wide">Total Shares</p>
                          <BarChart3 className="w-5 h-5 text-violet-300" />
                        </div>
                        <p className="text-5xl font-black text-white mb-2">{totalShares.toFixed(2)}</p>
                        <div className="h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="relative group/card">
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover/card:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-fuchsia-500/30 to-pink-600/30 backdrop-blur-xl rounded-2xl p-7 border border-fuchsia-400/40 transform group-hover/card:scale-105 group-hover/card:-translate-y-2 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-fuchsia-200 text-sm font-semibold uppercase tracking-wide">Total Investment</p>
                          <DollarSign className="w-5 h-5 text-fuchsia-300" />
                        </div>
                        <p className="text-5xl font-black text-white mb-2">₹{totalCost.toFixed(2)}</p>
                        <div className="h-1 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="relative group/card">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-50 group-hover/card:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-green-500/30 to-emerald-600/30 backdrop-blur-xl rounded-2xl p-7 border border-green-400/40 transform group-hover/card:scale-105 group-hover/card:-translate-y-2 transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-green-200 text-sm font-semibold uppercase tracking-wide">Average Price</p>
                          <Target className="w-5 h-5 text-green-300" />
                        </div>
                        <p className="text-5xl font-black text-white mb-2">₹{avgPrice.toFixed(2)}</p>
                        <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Premium Footer */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
            <p className="text-violet-200 font-medium">Built for Smart Investors</p>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          to {
            transform: translateX(200%);
          }
        }
        
        @keyframes gridMove {
          to {
            background-position: 50px 50px;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}