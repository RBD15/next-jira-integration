import { JiraAdapter } from "@/utils/JiraAdapter";
import Main from "./Main";
import { getIssues, getProjects } from "@/utils/jiraData";


export const getStaticProps = async () => {
  const issues = await processData()
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

export default function Home({issues,projects}) {
  return (
    <Main issues={issues} projects={projects} ></Main>
  )
}
