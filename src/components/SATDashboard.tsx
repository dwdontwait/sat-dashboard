'use client'

import React from 'react'
import { Header } from './Header'
import { ProgressOverview } from './ProgressOverview'
import { StudyPlan } from './StudyPlan'
import { RecentActivity } from './RecentActivity'
import { PracticeTests } from './PracticeTests'

export function SATDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Progress Overview */}
          <ProgressOverview />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <StudyPlan />
              <PracticeTests />
            </div>
            <div className="space-y-8">
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
