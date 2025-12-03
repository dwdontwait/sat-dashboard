'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { useMockInteractions } from '@/hooks/useMockInteractions'
import { TrendingUp, Calendar, Target, Clock } from 'lucide-react'

export function ProgressOverview() {
  const { mockAction } = useMockInteractions()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <p className="text-gray-600 mt-2">You're making great progress on your SAT preparation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Overall Progress */}
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => mockAction('viewProgress', 'View detailed progress breakdown by topic')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">
              You've completed 34 of 50 study modules
            </p>
          </CardContent>
        </Card>

        {/* Days Until Exam */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Until Exam</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground mt-2">
              Exam date: January 15, 2025
            </p>
            <Badge variant="outline" className="mt-2">
              On Track
            </Badge>
          </CardContent>
        </Card>

        {/* Current Score */}
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => mockAction('viewProgress', 'View detailed score history and analytics')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Practice Score</CardTitle>
            <Target className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1180</div>
            <p className="text-xs text-muted-foreground mt-2">
              +120 from baseline (1060)
            </p>
            <div className="text-xs text-emerald-600 mt-1">
              Target: 1400
            </div>
          </CardContent>
        </Card>

        {/* Study Time */}
        <Card 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => mockAction('viewProgress', 'View detailed study time analytics and streaks')}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47h</div>
            <p className="text-xs text-muted-foreground mt-2">
              This month: 18h 30m
            </p>
            <div className="text-xs text-blue-600 mt-1">
              Daily avg: 35m
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
