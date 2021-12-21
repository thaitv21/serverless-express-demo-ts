export interface Database {
  rawQuery: (query: any) => Promise<any>
}