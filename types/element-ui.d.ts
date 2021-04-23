import Vue, { PluginObject } from 'vue'
import { QkyUIComponent, QkyUIComponentSize, QkyUIHorizontalAlignment } from './component'


import { QkyButton } from './button'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = QkyUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = QkyUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment =QkyUIHorizontalAlignment

/** Button Component */
export class Button extends QkyButton {}
