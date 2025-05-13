import type { ButtonPassThroughMethodOptions, PrimeVuePTOptions } from 'primevue'
import type { ButtonProps } from 'primevue/button'

const GlobalPT: PrimeVuePTOptions = {
  button: {
    root: ({ props, context }: ButtonPassThroughMethodOptions<ButtonProps>) => {
      const heightClass = props?.size === 'small' ? 'h-6' : 'h-8'
      const fontSizeClass = props?.size === 'small' ? '' : '!text-sm'
      const disabledClass = context.disabled ? 'bg-base-3 text-base-6 border-base-3' : ''
      return `${heightClass} ${fontSizeClass} ${disabledClass}`.trim()
    },
  },
  togglebutton: {
    root: 'h-8',
  },
  inputtext: {
    root: 'h-8 !text-sm',
  },
  textarea: {
    root: '!text-sm',
  },
  select: {
    root: 'h-8',
    label: '!flex !items-center',
    dropdownIcon: '!w-[12px] !h-[12px]',
    clearIcon: '!w-[12px] !h-[12px]',
  },
  multiselect: {
    root: 'h-8',
    label: '!flex !items-center',
    pcChip: {
      root: 'h-[22px]',
      label: 'text-[12px]',
      removeIcon: '!w-[12px] !h-[12px]',
    },
    dropdownIcon: '!w-[12px] !h-[12px]',
  },
  card: {
    title: 'leading-[28px]',
    subtitle: 'font-semibold leading-[22px]',
    content: 'leading-[22px]',
  },
}

export default GlobalPT
