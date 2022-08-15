export interface DateList {
  data_list?: Array<DateVo>;
}

export interface DateVo {
  id?: string | number;
  label: string;
  maitukebi: Date;
}
