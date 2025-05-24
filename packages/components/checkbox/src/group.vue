<script setup lang="ts">
import { provide, toRef } from 'vue'
import { checkboxGroupProps, type CheckboxGroupEmits } from './group'
import { createNamespace } from '@lumen-ui/utils/create'

defineOptions({ name: 'lm-checkbox-group' })
const bem = createNamespace('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emit = defineEmits<CheckboxGroupEmits>()

const modelValue = toRef(props, 'modelValue')
const disabled = toRef(props, 'disabled')

const updateModelValue = (arr: any[]) => { emit('update:modelValue', arr); emit('change', arr) }

const GROUP_KEY = Symbol.for('lm-checkbox-group')
provide(GROUP_KEY, { modelValue, disabled, updateModelValue })
</script>

<template>
  <div :class="bem.b()">
    <slot />
  </div>
</template>

