'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AchievableLogo } from './AchievableLogo'
import { useMockInteractions } from '@/hooks/useMockInteractions'
import { Bell, BookOpen, Calendar, User } from 'lucide-react'

export function Header() {
  const { mockAction, isLoading } = useMockInteractions()
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <AchievableLogo />
              <span className="text-xl font-semibold text-gray-900">Achievable</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => mockAction('startStudy', 'Navigate to study modules')}
                disabled={isLoading}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Study
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => mockAction('scheduleStudy', 'Open calendar integration')}
                disabled={isLoading}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
            </nav>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              SAT Prep
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => mockAction('notification', 'View recent achievements and updates')}
              disabled={isLoading}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
