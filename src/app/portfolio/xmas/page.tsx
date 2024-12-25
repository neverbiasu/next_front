'use client';
import { useEffect } from 'react';

export default function ChristmasTree() {
  useEffect(() => {
    const tree = document.getElementById('tree');
    if (tree) {
      let treeContent = '';
      const height = 15;

      for (let i = 0; i < height; i++) {
        const spaces = ' '.repeat(height - i - 1);
        let line = '';

        // 创建每一行的星号，并随机添加装饰
        for (let j = 0; j < 2 * i + 1; j++) {
          const random = Math.random();
          if (random < 0.1) {
            line += '<span class="text-red-500">o</span>';
          } else if (random < 0.2) {
            line += '<span class="text-yellow-400">o</span>';
          } else {
            line += '*';
          }
        }

        treeContent += spaces + line + '\n';
      }

      // 添加树干
      treeContent += ' '.repeat(height - 2) + '|||' + '\n';
      treeContent += ' '.repeat(height - 2) + '|||';

      tree.innerHTML = treeContent; // 注意：这里改用 innerHTML
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <pre id="tree" className="text-green-500 font-bold" />
    </div>
  );
}
