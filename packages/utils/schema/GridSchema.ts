export interface GridCommand {
  name: string;
  title: string;
  text?: string;
  click: (e?: any) => void;
  visible: any;
  param?: any;
  is?: boolean;
  iconClass?: string;
  className?: string;
  index?: number;
  route: string;
  api: string;
}

export enum FieldTypeEnum {
  String = "string",
  Number = "number",
  Date = "date",
  Enums = "enums",
  Command = "command"
}

export interface GridColumnSchema {
  field?: string;
  title: string;
  width?: string;
  filterable: boolean;
  sortable: boolean;
  editable: boolean;
  type: FieldTypeEnum;
  menu: boolean;
  format?: string | Function;
  command?: GridCommand[];
  index?: number;
  hidden?: boolean;
  values?: any[];
  fixed?: boolean | string;
}

export interface GridModelSchemaType {
  filterable: boolean;
  sortable: boolean;
  editable: boolean;
  nullable: boolean;
  type: FieldTypeEnum;
}

export interface GridModelSchema {
  [key: string]: GridModelSchemaType;
}
