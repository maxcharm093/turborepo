import * as UiTailwindConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const tailwindConfig = {
  content: [],
  ...UiTailwindConfig,
  extend: {
    fontFamily: {
      roboto: ['var(--font-roboto)'],
    },
  },
} satisfies Config;

export default tailwindConfig;
