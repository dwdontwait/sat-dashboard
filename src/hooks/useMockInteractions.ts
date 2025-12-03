'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export function useMockInteractions() {
  const [isLoading, setIsLoading] = useState(false)

  const mockAction = async (actionName: string, description?: string) => {
    setIsLoading(true)
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Show feedback based on action type
    switch (actionName) {
      case 'startStudy':
        toast.success('Study session started!', {
          description: description || 'Opening study module...'
        })
        break
      case 'startTest':
        toast.success('Practice test launching!', {
          description: description || 'Loading test interface...'
        })
        break
      case 'viewProgress':
        toast.info('Detailed analytics', {
          description: description || 'Opening progress breakdown...'
        })
        break
      case 'scheduleStudy':
        toast.success('Study scheduled!', {
          description: description || 'Added to your calendar...'
        })
        break
      case 'notification':
        toast.info('Notifications', {
          description: description || 'You have 3 new achievements!'
        })
        break
      default:
        toast.success('Action completed!', {
          description: description || `${actionName} functionality would execute here`
        })
    }
    
    setIsLoading(false)
  }

  return { mockAction, isLoading }
}
