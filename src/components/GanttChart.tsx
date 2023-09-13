import React from 'react'
import { Gantt} from 'react-virtual-gantt'
import { GanttDataType } from "react-virtual-gantt";

export const GanttChart = ({issues, projects}: {issues: GanttDataType[], projects: any}) => {

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
