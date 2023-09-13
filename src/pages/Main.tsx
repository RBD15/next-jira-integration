import { GanttChart } from '@/components/GanttChart'
import React from 'react'
import { GanttDataType } from "react-virtual-gantt";

const Main = ({issues, projects}: {issues: GanttDataType[], projects: any}) => {
  return (
    <GanttChart issues={issues} projects={projects} ></GanttChart>
  )
}

export default Main
