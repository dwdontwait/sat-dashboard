'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useMockInteractions } from '@/hooks/useMockInteractions'
import { PlayCircle, CheckCircle2, BookOpen, Clock } from 'lucide-react'

const studyModules = [
  {
    id: 1,
    title: "Algebra & Functions",
    description: "Linear equations, systems, and function analysis",
    progress: 85,
    status: "current",
    timeEstimate: "45 min",
    questionsCompleted: 127,
    totalQuestions: 150
  },
  {
    id: 2,
    title: "Geometry & Trigonometry",
    description: "Area, volume, similarity, and basic trig functions",
    progress: 100,
    status: "completed",
    timeEstimate: "60 min",
    questionsCompleted: 98,
    totalQuestions: 98
  },
  {
    id: 3,
    title: "Statistics & Data Analysis",
    description: "Interpreting graphs, probability, and data collection",
    progress: 45,
    status: "in_progress",
    timeEstimate: "50 min",
    questionsCompleted: 34,
    totalQuestions: 75
  },
  {
    id: 4,
    title: "Reading Comprehension",
    description: "Literature, history, science passages and analysis",
    progress: 0,
    status: "upcoming",
    timeEstimate: "90 min",
    questionsCompleted: 0,
    totalQuestions: 120
  }
]

export function StudyPlan() {
  const { mockAction, isLoading } = useMockInteractions()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5" />
          <span>Study Plan</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {studyModules.map((module) => (
          <div key={module.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-lg">{module.title}</h3>
                  <Badge 
                    variant={
                      module.status === 'completed' ? 'default' : 
                      module.status === 'current' ? 'secondary' : 
                      module.status === 'in_progress' ? 'outline' : 'secondary'
                    }
                    className={
                      module.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      module.status === 'current' ? 'bg-blue-100 text-blue-800' :
                      module.status === 'in_progress' ? 'border-orange-200 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }
                  >
                    {module.status === 'completed' ? 'Complete' :
                     module.status === 'current' ? 'Current' :
                     module.status === 'in_progress' ? 'In Progress' :
                     'Upcoming'}
                  </Badge>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                
                <div className="flex items-center space-x-6 mb-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{module.timeEstimate}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {module.questionsCompleted}/{module.totalQuestions} questions
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              </div>
              
              <div className="ml-4">
                {module.status === 'completed' ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                ) : (
                  <Button 
                    variant={module.status === 'current' ? 'default' : 'outline'}
                    size="sm"
                    disabled={module.status === 'upcoming' || isLoading}
                    onClick={() => mockAction('startStudy', `${module.status === 'current' ? 'Continue' : module.status === 'in_progress' ? 'Resume' : 'Start'} ${module.title} module`)}
                  >
                    <PlayCircle className="h-4 w-4 mr-1" />
                    {module.status === 'current' ? 'Continue' : 
                     module.status === 'in_progress' ? 'Resume' : 'Start'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
