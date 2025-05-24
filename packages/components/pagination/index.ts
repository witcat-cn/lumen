import _Pagination from './src/pagination.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

export * from './src/pagination'

const Pagination = withInstall(_Pagination)
export default Pagination

declare module 'vue' {
  export interface GlobalComponents {
    LmPagination: typeof Pagination
  }
}

