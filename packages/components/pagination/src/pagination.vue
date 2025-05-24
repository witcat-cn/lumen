<script setup lang="ts">
import { computed, ref } from 'vue'
import { paginationProps, type PaginationEmits } from './pagination'
import { createNamespace } from '@lumen-ui/utils/create'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// name is required for withInstall to register correctly
defineOptions({ name: 'lm-pagination' })
const bem = createNamespace('pagination')
const props = defineProps(paginationProps)
const emit = defineEmits<PaginationEmits>()

const layoutStr = computed(() => (props.layout || '').toLowerCase())
const show = (part: string) => layoutStr.value.includes(part)

const pageCount = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)))
const currentPage = computed({
  get: () => Math.min(Math.max(1, props.currentPage), pageCount.value),
  set: (v: number) => {
    const nv = Math.min(Math.max(1, v), pageCount.value)
    emit('update:currentPage', nv)
    emit('current-change', nv)
  }
})
const pageSize = computed({
  get: () => props.pageSize,
  set: (v: number) => {
    const nv = Number(v) || props.pageSize
    emit('update:pageSize', nv)
    emit('size-change', nv)
    // clamp current page if page count reduced
    if (currentPage.value > Math.ceil(props.total / nv)) {
      currentPage.value = Math.ceil(props.total / nv) || 1
    }
  }
})

const pages = computed(() => {
  const count = pageCount.value
  const pagerCount = Math.max(5, props.pagerCount | 0)
  const half = Math.floor(pagerCount / 2)
  const cur = currentPage.value
  const showSet = new Set<number>()
  showSet.add(1); showSet.add(count)
  for (let i = -half; i <= half; i++) showSet.add(cur + i)
  const arr = Array.from(showSet).filter(n => n >= 1 && n <= count).sort((a,b)=>a-b)
  const result: Array<number | '...'> = []
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (i > 0 && n! > (arr[i-1] as number) + 1) result.push('...')
    result.push(n as number)
  }
  return result
})

const Prev = computed(() => ChevronLeft)
const Next = computed(() => ChevronRight)

const change = (n: number) => { if (!props.disabled) currentPage.value = n }
const prev = () => change(currentPage.value - 1)
const next = () => change(currentPage.value + 1)

const jumperVal = ref('')
const onJumperEnter = () => {
  const v = parseInt(jumperVal.value as any, 10)
  if (!Number.isNaN(v)) change(v)
  jumperVal.value = ''
}
</script>

<template>
  <nav v-if="!(hideOnSinglePage && pageCount <= 1)" :class="[
        bem.b(),
        bem.is('background', background),
        bem.is('small', small),
        bem.is('disabled', disabled),
      ]" role="navigation" aria-label="Pagination Navigation">
    <!-- sizes -->
    <div v-if="show('sizes')" :class="bem.e('sizes')">
      <select :disabled="disabled" v-model.number="pageSize">
        <option v-for="s in pageSizes" :key="s" :value="s">{{ s }}/page</option>
      </select>
    </div>

    <!-- prev -->
    <button v-if="show('prev')" :class="[bem.e('btn'), bem.m('prev'), bem.is('disabled', currentPage<=1 || disabled)]" :disabled="currentPage<=1 || disabled" @click="prev">
      <span v-if="prevText">{{ prevText }}</span>
      <component v-else :is="Prev" class="icon"/>
    </button>

    <!-- pager -->
    <template v-if="show('pager')" v-for="(p, idx) in pages" :key="idx">
      <span v-if="p==='...'" :class="bem.e('ellipsis')">…</span>
      <button v-else :class="[bem.e('page'), bem.is('active', p===currentPage)]" :disabled="disabled" @click="change(p as number)">{{ p }}</button>
    </template>

    <!-- next -->
    <button v-if="show('next')" :class="[bem.e('btn'), bem.m('next'), bem.is('disabled', currentPage>=pageCount || disabled)]" :disabled="currentPage>=pageCount || disabled" @click="next">
      <span v-if="nextText">{{ nextText }}</span>
      <component v-else :is="Next" class="icon"/>
    </button>

    <!-- jumper -->
    <div v-if="show('jumper')" :class="bem.e('jumper')">
      <span class="label">Go to</span>
      <input :disabled="disabled" type="number" v-model="jumperVal" @keyup.enter="onJumperEnter" />
    </div>

    <!-- total -->
    <div v-if="show('total')" :class="bem.e('total')">Total: {{ total }}</div>
  </nav>
</template>

