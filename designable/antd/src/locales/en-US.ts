const StyleLocale = {
  width: 'Width',
  height: 'Height',
  display: 'Display',
  background: 'Background',
  boxShadow: 'Box Shadow',
  font: 'Font',
  margin: 'Margin',
  padding: 'Padding',
  borderRadius: 'Border Radius',
  border: 'Border',
}

export default {
  'en-US': {
    components: {
      Root: 'Root',
      DesignableForm: 'Form',
      DesignableField: 'Field',
      Input: 'Input',
      Select: 'Select',
      Radio: 'Radio',
      Radio_Group: 'Radio Group',
      Checkbox: 'Checkbox',
      Checkbox_Group: 'Checkbox Group',
      Card: 'Card',
      FormGrid: 'Form Grid',
    },
    settings: {
      title: 'Title',
      required: 'Required',
      description: 'Description',
      default: 'Default Value',
      enum: 'DataSource',
      labelCol: 'Label Col',
      wrapperCol: 'Wrapper Col',
      labelAlign: 'Label Align',
      wrapperAlign: 'Wrapper Align',
      colon: 'Colon',
      labelWrap: 'Label Wrap',
      wrapperWrap: 'Wrap Wrap',
      labelWidth: 'Label Width',
      wrapperWidth: 'Wrapper Width',
      fullness: 'Fullness',
      inset: 'Inset',
      shallow: 'Shallow',
      bordered: 'Bordered',
      'x-validator': 'Validate Rules',
      'x-reactions': 'Reaction Rules',
      style: StyleLocale,
      'x-display': {
        title: 'Display State',
        dataSource: [
          'Visible',
          'Hidden(Preserve Value)',
          'None(No Preserve Value)',
        ],
      },
      'x-pattern': {
        title: 'UI Pattern',
        dataSource: ['Editable', 'Disabled', 'ReadOnly', 'ReadPretty'],
      },
      'x-decorator-props': {
        tab_property: 'Decorator Properties',
        tab_style: 'Decorator Style',
        style: StyleLocale,
      },
      'x-component-props': {
        addonAfter: 'Addon After',
        addonBefore: 'Addon Before',
        tab_property: 'Component Properties',
        tab_style: 'Component Style',
        style: StyleLocale,
      },
    },
  },
}
