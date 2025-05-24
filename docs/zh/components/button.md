# Button 按钮

常规的操作按钮。

### 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。
:::preview
demo-preview=../../examples/Button.vue
:::

### 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

:::preview
demo-preview=../../examples/ButtonDisabled.vue
:::

### 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加\<i\>标签来添加图标， 你也可以使用自定义图标。

:::preview
demo-preview=../../examples/IconButton.vue
:::

### API

| 属性名   | 说明 | 类型                                                                  | 默认值 
:------|:---|---------------------------------------------------------------------|----:
| size  | 尺寸 | <lm-popper text="enum" popper="`'large' \| 'default' \| 'small'`"/> |   - |
| color | 图标 | string                                                              |   - |