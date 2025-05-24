<template>
  <span ref="rootRef" :class="[bem.b(),bem.is('visible', showPopper)]">
    <span :class="bem.e('text')">{{ props.text }}</span>
    <lm-button  :icon="Info" ref="triggerRef" :class="bem.e('button')" @click.stop="togglePopper" circle/>
    <transition name="fade">
      <div v-show="showPopper" ref="popperRef" :class="[ bem.e('content'),bem.m(props.placement)]">
        <span :class="bem.e()" v-html="formattedContent"></span>
        <div ref="arrowRef" :class="bem.e('arrow')" data-popper-arrow></div>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import {Info} from 'lucide-vue-next'
import {createNamespace} from '@lumen-ui/utils/create'
import {usePopper} from './popper'

const bem = createNamespace('popper')

defineOptions({name: 'lm-popper'})

export interface PopperProps {
  text: string;
  popper: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  offset?: [number, number];
}

const props = withDefaults(defineProps<PopperProps>(), {
  placement: 'bottom',
  offset: () => [0, 10]
})

const {
  showPopper,
  rootRef,
  popperRef,
  triggerRef,
  arrowRef,
  formattedContent,
  togglePopper,
} = usePopper(props)
</script>