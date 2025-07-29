'use client'

import { useTheme } from './ThemeProvider'

export function AnimatedBackground() {
  const { themeMode, isDark } = useTheme()

  const getGradientColors = () => {
    switch (themeMode) {
      case 'sunrise':
        return isDark 
          ? 'from-pink-900/30 via-orange-900/30 to-yellow-900/30'
          : 'from-pink-200/40 via-orange-200/40 to-yellow-200/40'
      case 'sunset':
        return isDark
          ? 'from-red-900/30 via-orange-900/30 to-purple-900/30'
          : 'from-red-200/40 via-orange-200/40 to-purple-200/40'
      case 'moonrise':
        return isDark
          ? 'from-blue-900/30 via-purple-900/30 to-indigo-900/30'
          : 'from-blue-200/40 via-purple-200/40 to-indigo-200/40'
      case 'moonset':
        return isDark
          ? 'from-gray-900/30 via-slate-900/30 to-gray-800/30'
          : 'from-gray-200/40 via-slate-200/40 to-gray-300/40'
      default:
        return isDark
          ? 'from-pink-900/30 via-orange-900/30 to-yellow-900/30'
          : 'from-pink-200/40 via-orange-200/40 to-yellow-200/40'
    }
  }

  const getSecondaryGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return isDark
          ? 'from-orange-800/25 via-pink-800/25 to-red-800/25'
          : 'from-orange-300/35 via-pink-300/35 to-red-300/35'
      case 'sunset':
        return isDark
          ? 'from-purple-800/25 via-red-800/25 to-orange-800/25'
          : 'from-purple-300/35 via-red-300/35 to-orange-300/35'
      case 'moonrise':
        return isDark
          ? 'from-indigo-800/25 via-blue-800/25 to-cyan-800/25'
          : 'from-indigo-300/35 via-blue-300/35 to-cyan-300/35'
      case 'moonset':
        return isDark
          ? 'from-slate-800/25 via-gray-800/25 to-zinc-800/25'
          : 'from-slate-300/35 via-gray-300/35 to-zinc-300/35'
      default:
        return isDark
          ? 'from-orange-800/25 via-pink-800/25 to-red-800/25'
          : 'from-orange-300/35 via-pink-300/35 to-red-300/35'
    }
  }

  const getTertiaryGradient = () => {
    switch (themeMode) {
      case 'sunrise':
        return isDark
          ? 'from-yellow-800/20 via-orange-800/20 to-pink-800/20'
          : 'from-yellow-300/30 via-orange-300/30 to-pink-300/30'
      case 'sunset':
        return isDark
          ? 'from-orange-800/20 via-purple-800/20 to-red-800/20'
          : 'from-orange-300/30 via-purple-300/30 to-red-300/30'
      case 'moonrise':
        return isDark
          ? 'from-cyan-800/20 via-purple-800/20 to-blue-800/20'
          : 'from-cyan-300/30 via-purple-300/30 to-blue-300/30'
      case 'moonset':
        return isDark
          ? 'from-zinc-800/20 via-slate-800/20 to-gray-800/20'
          : 'from-zinc-300/30 via-slate-300/30 to-gray-300/30'
      default:
        return isDark
          ? 'from-yellow-800/20 via-orange-800/20 to-pink-800/20'
          : 'from-yellow-300/30 via-orange-300/30 to-pink-300/30'
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary animated gradient - moves horizontally */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${getGradientColors()} animate-gradient-x`}
        style={{ 
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Secondary animated gradient - moves vertically */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tl ${getSecondaryGradient()} animate-gradient-y`}
        style={{ 
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Tertiary gradient for more depth - slower diagonal movement */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr ${getTertiaryGradient()}`}
        style={{ 
          backgroundSize: '600% 600%',
          animation: 'gradient-diagonal 25s ease infinite'
        }}
      />
      
      {/* Subtle overlay for texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }}
      />
    </div>
  )
}