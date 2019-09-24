import { FieldTypeEnum } from '../schema/GridSchema';

var TzRequest = {
    onRequest: function (schema: any, textSearch: string) {
        let filterCondition: any[] = []
        if (schema) {
            Object.keys(schema).forEach((v, i) => {
                if (schema[v] && schema[v].filterable) {
                    if (schema[v].type === FieldTypeEnum.Number && (Number(textSearch) === 0 || Number(textSearch))) {
                        filterCondition.push({ field: v, operator: "eq", value: Number(textSearch) })
                    } else if (schema[v].type === FieldTypeEnum.Date && new Date(textSearch)) {
                        filterCondition.push({ field: v, operator: "eq", value: new Date(textSearch) })
                    } else if (schema[v].type === FieldTypeEnum.String) {
                        filterCondition.push({ field: v, operator: "contains", value: textSearch })
                    } else if (schema[v].type === FieldTypeEnum.Command) {
                        throw new Error("field data type error")
                    }
                }
            })
        }

        let filter = {}
        if (filterCondition.length > 0) {
            filter = { logic: "or", filters: filterCondition }
        }

        return { page: 1, pageSize: 10, filter: filter }
    },
}

export default TzRequest