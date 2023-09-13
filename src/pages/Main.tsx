import { GanttChart } from '@/components/GanttChart'
import React from 'react'

const Main = ({issues, projects}) => {
  return (
    <GanttChart issues={issues} projects={projects} ></GanttChart>
  )
}

export default Main
