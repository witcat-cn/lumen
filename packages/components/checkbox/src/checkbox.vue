<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue'
import type { CheckboxProps, CheckboxEmits } from './checkbox'
import { createNamespace } from '@lumen-ui/utils/create'
import { Check, Minus } from 'lucide-vue-next'

defineOptions({ name: 'lm-checkbox' })

const bem = createNamespace('checkbox')
const props = defineProps<CheckboxProps>()
const emit = defineEmits<CheckboxEmits>()

const GROUP_KEY = Symbol.for('lm-checkbox-group')
const group = inject<any | null>(GROUP_KEY, null)

const isGroup = computed(() => !!group)

const checked = computed<boolean>({
  get: () =>
      isGroup.value
          ? group!.modelValue.value.includes(props.label)
          : props.modelValue,
  set: (v: boolean) => {
    if (props.disabled || (group && group.disabled?.value)) return
    if (isGroup.value) {
      const arr = [...group!.modelValue.value]
      const i = arr.findIndex((x: any) => x === props.label)
      if (v && i === -1) arr.push(props.label)
      if (!v && i !== -1) arr.splice(i, 1)
      group!.updateModelValue(arr)
    } else {
      emit('update:modelValue', v)
      emit('change', v)
    }
  },
})

const inputRef = ref<HTMLInputElement | null>(null)

watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.indeterminate && !checked.value
  }
})

const ariaChecked = computed(() =>
    props.indeterminate ? 'mixed' : checked.value ? 'true' : 'false'
)
</script>

<template>
  <label :class="[bem.b(), bem.is('disabled', disabled || group?.disabled?.value), bem.is('indeterminate', indeterminate)]">
    <input
        ref="inputRef"
        type="checkbox"
        :class="bem.e('input')"
        v-model="checked"
        :disabled="disabled || group?.disabled?.value"
        :aria-checked="ariaChecked"
    />
    <span :class="bem.e('box')">
      <Check v-if="checked" class="icon" />
      <Minus v-else-if="indeterminate" class="icon" />
    </span>
    <span :class="bem.e('label')"><slot>{{ label }}</slot></span>
  </label>
</template>