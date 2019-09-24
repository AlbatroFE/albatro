import { AlbatroUIComponent } from "./component"

/** GridCommand */
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

/** FieldType */
export enum FieldTypeEnum {
    String = "string",
    Number = "number",
    Date = "date",
    Enums = "enums",
    Command = "command"
}

/** GridColumnSchema */
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

/** Fetch Url Parameters */
export interface IUrlParameterSchema {
    [key: string]: string | number;
}

/** Table Component */
export declare class AlTable extends AlbatroUIComponent {
    /** Fetch Url */
    fetchUrl: string

    /** Grid Columns */
    columns: GridColumnSchema[]

    /** Page Size */
    pageSize: number

    /** Fetch Url Parameters */
    queryParameters: IUrlParameterSchema

    /** error callback function */
    errorFn: Function
}