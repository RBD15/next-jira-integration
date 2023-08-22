import { GanttDataType } from "react-virtual-gantt";

export class JiraAdapter{

  private rawData: any;
  private data: GanttDataType[];
  
  constructor(rawData: any) {
    this.rawData = rawData
    this.transform()
  }

  private transform(){
    this.data = this.rawData.map((item: any, index: string) => {
        if(item.fields.customfield_10015){
          return {
           key: index,
           title: item.fields.summary,
           children: [],
           data: {
             startDate: new Date(item.fields.customfield_10015+' 23:59:59').toISOString(),
             endDate: new Date(item.fields.duedate+' 23:59:59').toISOString(),
           }
          }
        }else{
          return {
            key: index,
            title: item.fields.summary,
            color: 'green',
            children: [],
            data: {
              startDate: '2023-08-12T08:00:00.000Z',
              endDate: '2023-08-12T08:00:01.000Z',
            }
           }
          
        }
      })
    }
    
    public get(): GanttDataType[] {
      return this.data
    }
  }
