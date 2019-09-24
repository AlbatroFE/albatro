export interface GridCommand {
    name: string;
    title: string;
    route: string;
    api: string;
    action: (e?: any) => void;
    visible: (dataItem: any) => boolean;
    param?: any;
    is?: boolean;
    index: number;
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
    
    format?: string | Function | undefined | null;
    command?: GridCommand[];
    index?: number;
    hidden?: boolean;
    values?: any[];
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
