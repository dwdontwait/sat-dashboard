'use client'

import React from 'react'

interface AchievableLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function AchievableLogo({ className = '', size = 'md' }: AchievableLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm ${className}`}>
      <svg 
        viewBox="0 0 24 24" 
        className="w-3/5 h-3/5 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized "A" representing achievement/progress */}
        <path d="M12 2L3 9l1.5 1.5L12 4l7.5 6.5L21 9l-9-7z"/>
        <path d="M12 6l-6 5.5v8.5h3v-6h6v6h3v-8.5L12 6z"/>
        <path d="M9 16h6v2H9v-2z"/>
      </svg>
    </div>
  )
}
