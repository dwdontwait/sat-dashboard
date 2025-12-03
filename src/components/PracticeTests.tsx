'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useMockInteractions } from '@/hooks/useMockInteractions'
import { FileText, Play, BarChart3, Clock } from 'lucide-react'

const practiceTests = [
  {
    id: 1,
    title: "Practice Test #4",
    type: "Full Length",
    status: "available",
    duration: "3h 15m",
    sections: ["Math", "Reading", "Writing"],
    description: "Complete diagnostic test covering all sections"
  },
  {
    id: 2,
    title: "Math Section Practice",
    type: "Section Focus",
    status: "available", 
    duration: "80m",
    sections: ["Math"],
    description: "Calculator and non-calculator math problems"
  },
  {
    id: 3,
    title: "Reading Comprehension Drill",
    type: "Targeted Practice",
    status: "available",
    duration: "65m",
    sections: ["Reading"],
    description: "Literature, history, and science passages"
  }
]

const recentScores = [
  { test: "Practice Test #3", score: 1180, date: "Dec 1", math: 580, reading: 600 },
  { test: "Practice Test #2", score: 1140, date: "Nov 24", math: 560, reading: 580 },
  { test: "Practice Test #1", score: 1060, date: "Nov 15", math: 520, reading: 540 }
]

export function PracticeTests() {
  const { mockAction, isLoading } = useMockInteractions()
  return (
    <div className="space-y-6">
      {/* Available Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Practice Tests</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {practiceTests.map((test) => (
            <div key={test.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold">{test.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {test.type}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{test.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Sections:</span>
                      <span>{test.sections.join(", ")}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="ml-4"
                  onClick={() => mockAction('startTest', `Starting ${test.title} - ${test.duration} assessment`)}
                  disabled={isLoading}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Test
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Score History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Recent Scores</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentScores.map((score, index) => (
              <div key={score.test} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium">{score.test}</h4>
                    <Badge variant="secondary" className="text-xs">{score.date}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>Math: {score.math}</span>
                    <span>Reading/Writing: {score.reading}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{score.score}</div>
                  {index === 0 && (
                    <div className="text-sm text-emerald-600">+40 pts</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-900">Score Trend</span>
            </div>
            <p className="text-sm text-blue-800 mt-1">
              You've improved by 120 points since starting! Keep up the great work.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
