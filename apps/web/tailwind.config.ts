import * as UiTailwindConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const tailwindConfig = {
  content: [],
  ...UiTailwindConfig,
  extend: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
  },
} satisfies Config;

export default tailwindConfig;
