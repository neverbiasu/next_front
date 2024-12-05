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
        'tropical-indigo': '#9683EC',
        'github-gray-2': '#f8f8f8'
      },
      borderColor: {
        'baidu-blue': '#4e6ef2',
        'baidu-gray': '#c5c7ce',
        'github-gray-0': '#cccccc',
        'github-gray-1': '#d5d5d5'
      },
      textColor: {
        'github-gray-0': '#cccccc',
        'github-gray-3': '#666666'
      }
    }
  },
  plugins: []
} satisfies Config;
