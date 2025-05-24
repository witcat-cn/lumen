import { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(component: T): SFCWithInstall<T> & typeof component => {
    (component as SFCWithInstall<T>).install = (app: any): void => {
        const {name} = component as unknown as { name: string }
        app.component(name, component)
    }
    return component as SFCWithInstall<T> & typeof component
}