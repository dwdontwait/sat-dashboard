'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, CheckCircle2, TrendingUp, Award } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'completed',
    title: 'Completed Practice Test #3',
    description: 'Math Section: 720/800',
    timestamp: '2 hours ago',
    icon: CheckCircle2,
    color: 'text-emerald-600'
  },
  {
    id: 2,
    type: 'study',
    title: 'Studied Algebra Functions',
    description: '15 questions completed',
    timestamp: '1 day ago',
    icon: BookOpen,
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Score Improvement!',
    description: '+40 points from last test',
    timestamp: '2 days ago',
    icon: TrendingUp,
    color: 'text-purple-600'
  },
  {
    id: 4,
    type: 'milestone',
    title: 'Weekly Goal Achieved',
    description: '5 study sessions completed',
    timestamp: '3 days ago',
    icon: Award,
    color: 'text-orange-600'
  },
  {
    id: 5,
    type: 'study',
    title: 'Reading Comprehension',
    description: 'Literature passages review',
    timestamp: '4 days ago',
    icon: BookOpen,
    color: 'text-blue-600'
  }
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = activity.icon
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className={`flex-shrink-0 ${activity.color}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
              {activity.type === 'achievement' && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  New
                </Badge>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
