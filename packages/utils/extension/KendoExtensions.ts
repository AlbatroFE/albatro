import TzRequest from "./TzRequest";

export default class KendoExtension {
  private kendoJQuery: any;

  constructor(kendoJQuery: any) {
    this.kendoJQuery = kendoJQuery;
  }

  public onDataBound(e: any) {
    e.sender.element
      .data("kendoGrid").thead
      .find("[data-field=RowNumber]>.k-header-column-menu").remove();
  }

  public onDataBinding(e: any) {
    var page = e.sender.pager.page();
    var pageSize = e.sender.pager.pageSize();
    e.items.forEach((ele: any, i: number) => {
      ele.RowNumber = (page - 1) * pageSize + i + 1;
    });
  }

  public onBeforeSend(xhr: any) {
    return new Promise((resolve, reject) => {});
  }

  public onSearch(dataSource: any, schema: any, textSearch: string) {
    let filter = TzRequest.onRequest(schema, textSearch);
    if (dataSource && dataSource.kendoDataSource) {
      dataSource.kendoDataSource.filter(filter.filter);
    }
  }

  public dataItem(e: any) {
    var grid = this.kendoJQuery(e.delegateTarget).data("kendoGrid");
    var tr = this.kendoJQuery(e.currentTarget).closest("tr");
    var data = grid.dataItem(tr);
    return data;
  }

  public onRowDoubleClick(e: any, callback: any) {
    var that = this;
    e.sender.element
      .data("kendoGrid").element
      .undelegate("tbody tr[data-uid]", "dblclick");
    e.sender.element
      .data("kendoGrid").element
      .on("dblclick", "tbody tr[data-uid]", function (ev:any) {
        if (callback) {
          callback(e.sender.element.data("kendoGrid").dataItem(that.kendoJQuery(ev.target).closest("tr")));
        }
    });
  }

  public getRowData(e: any) {
    var data = this.dataItem(e);
    e.preventDefault();
    return data;
  }
}
