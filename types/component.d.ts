import Vue from 'vue'

/** ElementUI component common definition */
export declare class QkyUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type QkyUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type QkyUIHorizontalAlignment = 'left' | 'center' | 'right'
