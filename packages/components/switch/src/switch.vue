<script setup lang="ts">
import { computed } from 'vue'
import { switchProps, type SwitchEmits } from './switch'
import { createNamespace } from '@lumen-ui/utils/create'

defineOptions({ name: 'lm-switch' })
const bem = createNamespace('switch')
const props = defineProps(switchProps)
const emit = defineEmits<SwitchEmits>()

const checked = computed({
  get: () => props.modelValue,
  set: (v: boolean) => { if (!props.disabled) { emit('update:modelValue', v); emit('change', v) } }
})
</script>

<template>
  <label :class="[bem.b(), bem.is('small', size==='small'), bem.is('disabled', disabled)]">
    <input :class="bem.e('input')" type="checkbox" v-model="checked" :disabled="disabled" />
    <span :class="bem.e('track')">
      <span :class="bem.e('thumb')"></span>
    </span>
    <span v-if="activeText || inactiveText" :class="bem.e('label')">{{ checked ? activeText : inactiveText }}</span>
  </label>
</template>

