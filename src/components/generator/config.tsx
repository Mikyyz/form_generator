import { IconArticle, IconCalendar, IconTextRectangle } from '@douyinfe/semi-icons';

// 表单属性 右侧面板
export const formConf = {
  formRef: 'form',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'left',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true,
};
// 左侧面板 输入型组件
export const inputComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'Input',
      tagIcon: <IconArticle size="small"/>,
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://semi.design/zh-CN/input/input',
      // 正则校验规则
      regList: [],
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: '',
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    prefix: '',
    suffix: '',
    showClear: false,
    borderless: false,
    disabled: false,
    readonly: false,
  },
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'Input',
      tagIcon: <IconTextRectangle size="small" />,
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://semi.design/zh-CN/input/input',
      // 正则校验规则
      regList: [],
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: '',
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    prefix: '',
    suffix: '',
    showClear: false,
    borderless: false,
    disabled: false,
    readonly: false,
  },
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'Input',
      tagIcon: <IconCalendar size="small"/>,
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://semi.design/zh-CN/input/input',
      // 正则校验规则
      regList: [],
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: '',
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    prefix: '',
    suffix: '',
    showClear: false,
    borderless: false,
    disabled: false,
    readonly: false,
  },
];