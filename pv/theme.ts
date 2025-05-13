// Refer to https://zeroheight.com/27f5e6b45/p/7294c7-cloudvision-design-system for style guide

import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const CustomPreset = definePreset(Aura, {
  components: {
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/button/index.ts for more information
    button: {
      root: {
        label: {
          fontWeight: '400',
        },
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
            danger: {
              background: '{red.6}',
              hoverBackground: '{red.7}',
              activeBackground: '{red.8}',
            },
            warn: {
              background: '{red.1}',
              hoverBackground: '{red.2}',
              activeBackground: '{red.3}',
              borderColor: '{red.1}',
              hoverBorderColor: '{red.2}',
              activeBorderColor: '{red.3}',
              color: '{red.7}',
              hoverColor: '{red.8}',
              activeColor: '{red.9}',
            },
            secondary: {
              color: '{blue.7}',
              hoverColor: '{blue.8}',
              activeColor: '{blue.9}',
            },
          },
          text: {
            primary: {
              hoverBackground: '{blue.1}',
            },
          },
        },
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/togglebutton/index.ts for more information
    togglebutton: {
      root: {
        padding: '0',
        fontWeight: '400',
      },
      colorScheme: {
        light: {
          root: {
            background: '{base.2}',
            checkedBackground: '{blue.1}',
            color: '{base.8}',
            checkedColor: '{blue.7}',
          },
          content: {
            checkedBackground: '{blue.1}',
          },
        },
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/card/index.ts for more information
    card: {
      root: {
        borderRadius: '{border.radius.sm}',
      },
      title: {
        fontWeight: '600',
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/tabs/index.ts for more information
    tabs: {
      tab: {
        borderWidth: '0 0 2px 0',
        padding: '0.75rem',
        fontWeight: '400',
        activeColor: '{blue.6}',
        color: '{base.7}',
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/chip/index.ts for more information
    chip: {
      colorScheme: {
        light: {
          root: {
            background: '{base.2}',
            color: '{base.7}',
          },
        },
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/checkbox/index.ts for more information
    checkbox: {
      root: {
        width: '14px',
        height: '14px',
      },
    },
    // Refer to https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/radiobutton/index.ts for more information
    radiobutton: {
      root: {
        width: '16px',
        height: '16px',
        checkedDisabledBorderColor: '{base.4}',
        borderColor: '{base.4}',
        checkedBorderColor: '{blue.6}',
        checkedHoverBorderColor: '{blue.6}',
      },
      icon: {
        size: '0.5rem',
        disabledColor: '{base.2}',
      },
    },
  },
  semantic: {
    // https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/base/index.ts
    iconSize: '14px',
    formField: {
      borderRadius: '{border.radius.sm}',
      paddingY: '5px',
    },
    colorScheme: {
      'light': {
        text: {
          color: '{base.8}',
          mutedColor: '{base.8}',
        },
        formField: {
          borderColor: '{base.4}',
          placeholderColor: '{base.6}',
          hoverBorderColor: '{blue.4}',
          focusBorderColor: '{blue.8}',
          invalidBorderColor: '{red.6}',
          invalidPlaceholderColor: '{red.7}',
          validBorderColor: '{green.6}',
          disabledBackground: '{base.2}',
          color: '{base.8}',
        },
      },
      'blue': {
        1: '#E7EDF7',
        2: '#CCDAF2',
        3: '#A9C2EA',
        4: '#83A8E2',
        5: '#5588D8',
        6: '#3875CC',
        7: '#2F65B3',
        8: '#27569B',
        9: '#20467F',
        10: '#16325B',
      },
      'base': {
        1: '#FAFAFD',
        2: '#F5F5F8',
        3: '#E8E8EB',
        4: '#D9D9DC',
        5: '#BBBBBE',
        6: '#75757A',
        7: '#58585B',
        8: '#262629',
      },
      'green': {
        1: '#EAF7E8',
        2: '#C8E9C4',
        3: '#AADEA2',
        4: '#84CE79',
        5: '#55BC46',
        6: '#15A301',
        7: '#129200',
        8: '#138000',
        9: '#0F6901',
        10: '#0A4B00',
      },
      'red': {
        1: '#FFE7E7',
        2: '#FEC9C9',
        3: '#FFAAAA',
        4: '#FE8181',
        5: '#FF5656',
        6: '#EB1414',
        7: '#D80000',
        8: '#BE0000',
        9: '#9C0000',
        10: '#710000',
      },
      'yellow': {
        1: '#FCF5DF',
        2: '#FAECBB',
        3: '#F8E195',
        4: '#F5D46B',
        5: '#F2C739',
        6: '#EFB700',
        7: '#D8A500',
        8: '#B18800',
        9: '#8C6B00',
        10: '#725700',
      },
      'cyan': {
        1: '#E3F6F8',
        2: '#D1EFF4',
        3: '#AFE5EB',
        4: '#99E4EC',
        5: '#77D8E3',
        6: '#39BFCC',
        7: '#32AFBA',
        8: '#2C97A1',
        9: '#217A82',
        10: '#166970',
      },
      'purple': {
        1: '#F2E8F9',
        2: '#E3D1F4',
        3: '#D8BCEE',
        4: '#C299EC',
        5: '#B16DE1',
        6: '#8E38CC',
        7: '#792EAD',
        8: '#632291',
        9: '#5C2483',
        10: '#411266',
      },
      'sci-fi': {
        1: '#98E8E7',
        2: '#1CADAC',
        3: '#006666',
      },
      'sharkey': {
        1: '#8DB9F6',
        2: '#4A81DF',
        3: '#003697',
      },
      'plum': {
        1: '#E7B8FF',
        2: '#C06EC0',
        3: '#820D58',
      },
      'primary': {
        50: '{blue.50}',
        100: '{blue.100}',
        200: '{blue.200}',
        300: '{blue.300}',
        400: '{blue.400}',
        500: '{blue.6}',
        600: '{blue.7}',
        700: '{blue.8}',
        800: '{blue.800}',
        900: '{blue.900}',
        950: '{blue.950}',
      },
      'slate': {
        100: '{blue.1}',
        200: '{blue.2}',
        300: '{blue.3}',
      },
    },
  },
})

export default {
  preset: CustomPreset,
  options: {
    darkModeSelector: 'none', // disable dark mode
  },
}
