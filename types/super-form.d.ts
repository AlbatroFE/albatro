import { AlbatroUIComponent } from "./component"

export interface TzSuperFormGroup {
    key: string;
    name: string;
    title: string;
    isCollapsed: boolean;
    rows: TzSuperFormRow[];
}

export interface TzSuperFormRow {
    key: string;
    name: string;
    fields: TzSuperFormField[]
}

export interface TzSuperFormField {
    key: string;
    name: string;
    label: string;
    type: TzSuperFormType | string;
    title: string;
    format?: string | undefined | null;
    options?: any;
    cols?: number; //当前元素占用列个数，默认1
    attrs?: any;
    slots?: any;
    class?: string;
    style?: string;
    on?: any;
    valueFormatter?: any;
}

export enum TzSuperFormType {
    /// <summary>
    /// 静态文本
    /// </summary>
    Text = "text",
    /// <summary>
    /// 单行文本
    /// </summary>
    Input = "input",
    /// <summary>
    /// 多行文本
    /// </summary>
    Textarea = "textarea",
    /// <summary>
    /// 数字
    /// </summary>
    Number = "number",
    /// <summary>
    /// 选择器
    /// </summary>
    Select = "select",
    /// <summary>
    /// 弹框数据
    /// </summary>
    Dialog = "dialog",
    /// <summary>
    /// 弹框数据
    /// </summary>
    Switch = "switch",
    /// <summary>
    /// 超级外壳
    /// </summary>
    Shell = "shell",
    /// <summary>
    /// 时间
    /// </summary>
    Time = "time",
    /// <summary>
    /// 标签
    /// </summary>
    Tag = "tag",
    /// <summary>
    /// 单选
    /// </summary>
    Radio = "radio",
    /// <summary>
    /// 多选
    /// </summary>
    Checkbox = "checkbox",
    /// <summary>
    /// 日期
    /// </summary>
    Date = "date",
    /// <summary>
    /// 日期时间
    /// </summary>
    DateTime = "datetime",
    /// <summary>
    /// 评分
    /// </summary>
    Rate = "rate",
    /// <summary>
    /// 滑块
    /// </summary>
    Slider = "slider",
    /// <summary>
    /// 密码
    /// </summary>
    Password = "password",
    /// <summary>
    /// 密码
    /// </summary>
    Year = "year",
    /// <summary>
    /// 密码
    /// </summary>
    Month = "month",
    /// <summary>
    /// 密码
    /// </summary>
    DateRange = "daterange",
    /// <summary>
    /// 密码
    /// </summary>
    MonthRange = "monthrange",
    /// <summary>
    /// 密码
    /// </summary>
    DateTimeRange = "datetimerange",
    /// <summary>
    /// 多个日期
    /// </summary>
    Dates = "dates",
    /// <summary>
    /// 多个日期
    /// </summary>
    Week = "week",
    /// <summary>
    /// 时间范围
    /// </summary>
    TimeRange = "timerange",
    /// <summary>
    /// 按钮
    /// </summary>
    Button = "button",
    /// <summary>
    /// 建议输入框
    /// </summary>
    Autocomplete = "autocomplete",
    /// <summary>
    /// 级联选择
    /// </summary>
    Cascader = "cascader",
    /// <summary>
    /// 动态列表
    /// </summary>
    Grid = "grid"
}

/** SuperForm Component */
export declare class AlSuperForm extends AlbatroUIComponent {
    /** Form description object of super-form component */
    form: TzSuperFormGroup[]

    /** Data of form component */
    formData: any

    /** Validation rules of form */
    rules: any

    /** Determine whether it"s loading */
    isLoading: boolean

    /** Custom submit request callback function */
    requestFn: Function

    /** whether the form hidden submit button */
    isHideSubmitBtn: boolean

    /** whether the form hidden back button */
    isHideBackBtn: boolean

    /** Submit button text */
    submitBtnText: string

    /** Back button text */
    backBtnText: string

    /** Width of the form-item label */
    labelWidth: number

    /** Whether the form is only one group */ 
    single: boolean
    
    /** Whether to customize the processing of submit request */ 
    isCustomHandleRequest: boolean
    
    /** Whether the form automatically process submit requests internally */ 
    isAutoHandlePost: boolean

    /** Submit request url */
    action: string
}
