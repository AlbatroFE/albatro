<template>
  <div class="al-super-form">
      <el-form label-position="top" :label-width="labelWidth + 'px'" :model="formData" ref="form" :rules="rules"
        @submit.native.prevent="handleValidateForm" @keydown.native.enter.prevent ="()=>{}">
        <!-- 默认插槽作为表单项 -->
        <slot />

        <div class="al-super-form-single" v-if="isGroupalbe">
            <el-row :gutter="24">
                <el-col :span="field.cols ? 8 * field.cols : 8" v-for="(field) of formDesc" :key="field.key">
                    <el-form-item :label="field.label ? field.label + '：' : ''" size="medium" :prop="field.name"
                        :class="field.type === 'text' ? 'readonly' : '' ">
                        <!-- 具名 作用域插槽(用于用户自定义显示) -->
                        <slot :data="formData[field.name]" :name="field.name">
                            <component :desc="field" :is="getComponentName(field.type)" v-model="formData[field.name]"
                                v-bind="field.attrs" :class="field.class" :style="field.style" v-on="field.on" />
                        </slot>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>

        <el-collapse class="al-super-form-groups" :value="activeCollapses" v-else>
            <el-collapse-item v-for="(group) of form" :title="group.title" :name="group.name" :key="group.key">
                <el-row :gutter="24" v-for="(row) of group.rows" :key="row.key">
                    <el-col :span="field.cols ? 8 * field.cols : 8" v-for="(field) of row.fields"
                        :key="field.key">

                        <el-form-item :label="field.label ? field.label + '：' : ''" size="medium" :prop="field.name"
                            :class="field.type === 'text' ? 'readonly': '' ">
                            <!-- 具名 作用域插槽(用于用户自定义显示) -->
                            <slot :data="formData[field.name]" :name="field.name">
                                <component :desc="field" :is="getComponentName(field.type)" v-bind="field.attrs"
                                    v-model="formData[field.name]" :class="field.class" :style="field.style"
                                    v-on="field.on" />
                            </slot>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
        <el-row class="al-super-form-command">
            <el-form-item class="al-super-form-command__append">
                <slot name="button-group-append"></slot>
                <el-button type="primary" :loading="isLoading || innerIsLoading" native-type="submit"
                    v-if="showSubmitBtn">{{submitBtnText?submitBtnText:'提交'}}</el-button>
                <el-button @click="goBack" v-if="showBackBtn">{{backBtnText?backBtnText:'返回'}}</el-button>
            </el-form-item>
        </el-row>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator"
import { TzSuperFormGroup, TzSuperFormType, TzSuperFormField, getComponentName } from "./schema/TzSuperFormSchema";
import { TzFetch } from "./extension/TzFetch";
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from "element-ui";
Vue.use(ElementUI);

import TzSuperTextarea from "./components/TzSuperTextarea.vue"
import TzSuperNumber from "./components/TzSuperNumber.vue"
import TzSuperSelect from "./components/TzSuperSelect.vue"
import TzSuperDialog from "./components/TzSuperDialog.vue"
import TzSuperText from "./components/TzSuperText.vue"
import TzSuperSwitch from "./components/TzSuperSwitch.vue"
import TzSuperShell from "./components/TzSuperShell.vue"
import TzSuperTime from "./components/TzSuperTime.vue"
import TzSuperTag from "./components/TzSuperTag.vue"
import TzSuperRadio from "./components/TzSuperRadio.vue"
import TzSuperCheckbox from "./components/TzSuperCheckbox.vue"
import TzSuperDate from "./components/TzSuperDate.vue"
import TzSuperDatetime from "./components/TzSuperDatetime.vue"
import TzSuperRate from "./components/TzSuperRate.vue"
import TzSuperSlider from "./components/TzSuperSlider.vue"
import TzSuperPassword from "./components/TzSuperPassword.vue"
import TzSuperYear from "./components/TzSuperYear.vue"
import TzSuperMonth from "./components/TzSuperMonth.vue"
import TzSuperInput from "./components/TzSuperInput.vue"
import TzSuperDaterange from "./components/TzSuperDateRange.vue"
import TzSuperMonthrange from "./components/TzSuperMonthRange.vue"
import TzSuperDatetimerange from "./components/TzSuperDateTimeRange.vue"
import TzSuperDates from "./components/TzSuperDates.vue"
import TzSuperWeek from "./components/TzSuperWeek.vue"
import TzSuperTimerange from "./components/TzSuperTimeRange.vue"
import TzSuperButton from "./components/TzSuperButton.vue"
import TzSuperAutocomplete from "./components/TzSuperAutocomplete.vue"
import TzSuperGrid from "./components/TzSuperGrid.vue"

@Component({
    props: ["form", "formData", "rules", "isLoading", "formError", "requestFn", "isHideSubmitBtn", "isHideBackBtn", "submitBtnText", "backBtnText", "labelWidth", "single", "isCustomHandleRequest", "action", "isAutoHandlePost"],
    components: {
        TzSuperTextarea,
        TzSuperNumber,
        TzSuperSelect,
        TzSuperDialog,
        TzSuperText,
        TzSuperSwitch,
        TzSuperShell,
        TzSuperTime,
        TzSuperTag,
        TzSuperRadio,
        TzSuperCheckbox,
        TzSuperDate,
        TzSuperDatetime,
        TzSuperRate,
        TzSuperSlider,
        TzSuperPassword,
        TzSuperYear,
        TzSuperMonth,
        TzSuperInput,
        TzSuperDaterange,
        TzSuperMonthrange,
        TzSuperDatetimerange,
        TzSuperDates,
        TzSuperWeek,
        TzSuperTimerange,
        TzSuperButton,
        TzSuperAutocomplete,
        TzSuperGrid
    }
})
export default class AlSuperForm extends Vue{
    @Prop() form!: TzSuperFormGroup[]
    @Prop() formData!: any
    @Prop() rules!: any
    @Prop() isLoading!: boolean
    @Prop() formError!: any
    @Prop() requestFn!: Function
    @Prop({ default: false }) isHideSubmitBtn!: boolean  //是否隐藏submit按钮
    @Prop({ default: false }) isHideBackBtn!: boolean  //是否隐藏back按钮

    @Prop({ default: '提交' }) submitBtnText!: string  //提交按钮文本
    @Prop({ default: '返回' }) backBtnText!: string  //返回按钮文本

    @Prop({ default: 120 }) labelWidth!: Number  //标签宽度

    @Prop({ default: false }) single!: boolean

    @Prop({ default: false }) isCustomHandleRequest!: boolean
    @Prop({ default: true }) isAutoHandlePost!: boolean
    @Prop() action!: string

    // 是否正在请求中
    innerIsLoading: boolean = false;
    // 内部请求出错
    innerFormError: any = {};

    get activeCollapses() {
        return this.form.filter(x => !x.isCollapsed).map(x => x.name)
    }

    get isGroupalbe() {
        return this.single
    }

    get showSubmitBtn() {
        return !this.isHideSubmitBtn;
    }

    get showBackBtn() {
        return !this.isHideBackBtn;
    }

    get formDesc() {
        let fields: TzSuperFormField[] = [];
        this.form.forEach((f, i) => {
            f.rows.forEach((r, j) => {
                fields = fields.concat(r.fields)
            })
        })

        return fields;
    }

    getComponentName(type: TzSuperFormType) {
        return getComponentName(type)
    }

    handleValidateForm(e:any) {
        if (this.rules) {
            (this.$refs['form'] as any).validate((valid:boolean, invalidFields:any) => {
                if (valid) {
                    this.handleSubmitForm()
                } else {
                    return this.processValidError(invalidFields)
                }
            })
        } else {
            this.handleSubmitForm()
        }
    }

    // 提交表单
    async handleSubmitForm() {
        //const data = cloneDeep(this.formData)
        const data = this.formData
        for (const field in data) {
            if (this.formDesc[field as any] && this.formDesc[field as any].valueFormatter) {
                data[field] = this.formDesc[field as any].valueFormatter(data[field])
            }
        }

        if (this.requestFn && !this.isCustomHandleRequest) {
            // 在内部请求
            if (this.innerIsLoading) return
            this.innerIsLoading = true
            try {
                ////设置了自动提交，并存在提交地址，则自动提交请求
                let res: any = data
                if (this.isAutoHandlePost && this.action) {
                    res = await TzFetch.Post(this.action, this.formData)
                }

                ////转交数据到外部函数
                const response = await this.requestFn(res)
                this.$nextTick(() => {
                    ////处理成功
                    this.$emit('request-success', response)
                })
            } catch (error) {
                // 处理异常情况
                if (error instanceof Error) {
                    // 返回的是Error类型, 则进行解析
                    try {
                        const msg = JSON.parse(error.message)
                        if (msg instanceof Object) {
                            this.innerFormError = msg
                        }
                        // eslint-disable-next-line
                    } catch {
                        this.innerFormError = error
                    }
                } else if (error instanceof Object) {
                    // 返回的是对象类型, 则直接设置
                    this.innerFormError = error
                }

                this.$emit('request-error', this.innerFormError)
            } finally {
                this.innerIsLoading = false
                this.$nextTick(() => {
                    this.$emit('request-end')
                })
            }
        } else {
            // 在外部请求
            if (this.isLoading) return
            this.$emit('request', data)
        }
    }

    // 处理表单错误
    processValidError(invalidFields: any) {
        return false;
    }

    goBack() {
        if (this.$router) {
            // vue-router
            this.$router.back()
        } else {
            // 浏览器history API
            history.back()
        }
    }
}
</script>
