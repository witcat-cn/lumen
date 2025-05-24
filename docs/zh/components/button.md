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

### 加载状态

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。

:::preview
demo-preview=../../examples/ButtonLoading.vue
:::

### 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加\<i\>标签来添加图标， 你也可以使用自定义图标。

:::preview
demo-preview=../../examples/IconButton.vue
:::

### Button API

| 属性名            | 说明       | 类型                                                                  |    默认值 
:---------------|:---------|---------------------------------------------------------------------|-------:
| size           | 尺寸       | <lm-popper text="enum" popper="`'large' \| 'default' \| 'small'`"/> |      - |
| color          | 图标       | string                                                              |      - |
| disabled       | 是否为禁用状态  | boolean                                                             |  false |
| icon-placement | 按钮图标位置   | <lm-popper text="enum" popper="`'left' \| 'right'`"/>               |   left |
| native-type    | 原生type属性 | <lm-popper text="enum" popper="`'button' \| 'submit' \| 'reset'`"/> | button |
| plain          | 是否为朴素按钮  | boolean                                                             |  false |
| round          | 是否为圆角按钮  | boolean                                                             |  false |
| circle         | 是否为圆形按钮  | boolean                                                             |  false |
| loading        | 是否为加载状态  | boolean                                                             |  false |