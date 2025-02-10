import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/app/components/layout';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'src/app/portfolio');
  const files = await fs.promises.readdir(dirPath);
  const directories = files.filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());

  return directories.map((dir) => ({
    dir
  }));
}

const Portfolio = async () => {
  const dirPath = path.join(process.cwd(), 'src/app/portfolio');
  const files = await fs.promises.readdir(dirPath);
  const directories = files.filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <div className="flex flex-wrap gap-4 justify-start mt-10">
        {directories.map((dir) => (
          <div
            key={dir}
            className="border p-4 rounded shadow-md w-auto h-1/12 transform transition-transform duration-300 hover:scale-105 m-2 flex items-center justify-center bg-zinc-900"
          >
            <Link href={`/portfolio/${dir}`} className="text-blue-500 text-2xl">
              {dir}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Portfolio;
