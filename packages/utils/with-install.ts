import { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(component: T) {
    (component as SFCWithInstall<T>).install = function (app: any) {
        const {name} = component as unknown as { name: string }
        app.component(name, component)
    }
    return component as SFCWithInstall<T> & typeof component
}