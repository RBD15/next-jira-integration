import Main from "./Main";
import { GanttDataType } from "react-virtual-gantt";
import Login from "./login";

import { JiraAdapter } from "@/utils/JiraAdapter";
import { getIssues, getProjects } from "@/utils/jiraData";
import { useContext } from "react"
import { authContext } from "@/context/global";

import 'bootstrap/dist/css/bootstrap.min.css'

export const getStaticProps = async () => {
  const issues: GanttDataType[] = await processData()
  const projects = await getProject();
  return {
    props: {
      issues,
      projects
    }
  }
}

const getIssuesByProjectId = async()=>{
  const idProject = 10000
  return await getIssues(idProject)
}

const processData = async() => {
  const rawIssues = await getIssuesByProjectId();
  const jira = new JiraAdapter(rawIssues)
  return jira.get();
}

const getProject = async()=>{
  return await getProjects();
}

export default function Home({issues, projects}: {issues: GanttDataType[], projects: any}) {
  const {auth} = useContext(authContext)
  return (
      (auth.email == undefined) 
      ? <Login/>
      : <Main issues={issues} projects={projects}/>
  )
}
