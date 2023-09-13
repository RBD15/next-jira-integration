import axios from "axios";

export const getProjects = async() => {
  // const url = 'https://aloproyectos.atlassian.net/rest/api/latest/search'
  const url = 'https://aloproyectos.atlassian.net/rest/api/latest/project'
  const username = 'rdopazo@aloglobal.com'
  const password = 'ATATT3xFfGF0XtCx_MvyVxLZJLX5RKr2GrMTWwlKhd34A2clYM8Myny1e5iOkONXv-ACZr7oLO3Pa8232UWtbZMgWyKzC2fopy7GfSbQQQjs9WEBii1B_eLFCcrkLuTiLYVfH3vExqhMJ2SC9zCtELCL0viMGNZ5BUZJGMigEZVehCECa9gDIJE=30FA4D3D'
  const headers = {
    Authorization: 'Basic '+btoa(`${username}:${password}`)
  }
  const result = await axios.get(url, {headers})
  return result.data

  // return {
  //   props: {projects: result.data}
  // }

}

export const getIssues = async(idProject: number) => {
  const url = `https://aloproyectos.atlassian.net/rest/api/latest/search?jql=project=${idProject}&maxResults=100`
  const username = 'rdopazo@aloglobal.com'
  const password = 'ATATT3xFfGF0XtCx_MvyVxLZJLX5RKr2GrMTWwlKhd34A2clYM8Myny1e5iOkONXv-ACZr7oLO3Pa8232UWtbZMgWyKzC2fopy7GfSbQQQjs9WEBii1B_eLFCcrkLuTiLYVfH3vExqhMJ2SC9zCtELCL0viMGNZ5BUZJGMigEZVehCECa9gDIJE=30FA4D3D'
  const headers = {
    Authorization: 'Basic '+btoa(`${username}:${password}`)
  }
 
  return await axios.get(url, {headers}).then((res)=> { console.log(res);  return res.data.issues}).catch((error)=>console.log('Error',error))
  
   
}