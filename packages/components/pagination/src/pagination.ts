import type { ExtractPropTypes } from 'vue'

export const paginationProps = {
  total: { type: Number, required: true },
  currentPage: { type: Number, default: 1 }, // v-model:current-page
  pageSize: { type: Number, default: 10 },    // v-model:page-size
  pageSizes: { type: Array as () => number[], default: () => [10, 20, 30, 40, 50, 100] },
  pagerCount: { type: Number, default: 7 }, // odd number >= 5
  layout: { type: String, default: 'prev, pager, next, jumper, total' },
  prevText: { type: String, default: '' },
  nextText: { type: String, default: '' },
  background: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  hideOnSinglePage: { type: Boolean, default: false },
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = {
  (e: 'update:currentPage', value: number): void
  (e: 'update:pageSize', value: number): void
  (e: 'size-change', value: number): void
  (e: 'current-change', value: number): void
}

