import { JiraAdapter } from '@/utils/JiraAdapter'
import { getIssues, getProjects } from '@/utils/jiraData'
import React, { useEffect, useState } from 'react'
import { Gantt } from 'react-virtual-gantt'

export const GanttChart = () => {

  const [issues,setIssues] = useState([])
  const [projects,setProjects] = useState([])
  
  const getIssuesByProjectId = async()=>{
    const idProject = 10000
    return await getIssues(idProject)
  }
  
  const processData = async() => {
    const rawIssues = await getIssuesByProjectId();
    setIssues(rawIssues);
    const jira = new JiraAdapter(rawIssues)
    setIssues(jira.get());
  }
  
  const getProject = async()=>{
    const projects = await getProjects();
    setProjects(projects);
  }
  
  useEffect(()=>{
    processData()
    getProject();
  },[])


  return (
      (()=>{
        if(issues.length==0){
        return(<h4>Loading</h4>)
        }else{
          return(
          <main style={{ padding: "16px" }}>
            <Gantt>
              <Gantt.Controls />
              <Gantt.Chart data={issues} />
            </Gantt>
          </main>
        )
        }
      })()
  )
}
