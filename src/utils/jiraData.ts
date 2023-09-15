import axios from "axios";

const username = process.env.JIRA_USERNAME
const password = process.env.JIRA_PASSWORD
const baseUrl = `${process.env.API_URL}`

export const getProjects = async() => {
  const url = `${baseUrl}/project`
  const headers = {
    Authorization: 'Basic '+btoa(`${username}:${password}`)
  }
  const result = await axios.get(url, {headers})
  return result.data
}

export const getIssues = async(idProject: number) => {
  const url = `${baseUrl}/search?jql=project=${idProject}&maxResults=100`
  const headers = {
    Authorization: 'Basic '+btoa(`${username}:${password}`)
  }
 
  return await axios.get(url, {headers}).then((res)=> { console.log(res);  return res.data.issues}).catch((error)=>console.log('Error',error))
}