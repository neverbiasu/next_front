import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundColor: {
        'baidu-blue': '#4e6ef2',
        'tropical-indigo': '#9683EC'
      },
      borderColor: {
        'baidu-blue': '#4e6ef2',
        'baidu-gray': '#c5c7ce'
      }
    }
  },
  plugins: []
} satisfies Config;
