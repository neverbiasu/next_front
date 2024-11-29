import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/app/components/layout';

export const revalidate = 60; // Revalidate every 60 seconds

export async function getStatic() {
  const dirPath = path.join(process.cwd(), 'src/app/portfolio');
  const files = await fs.promises.readdir(dirPath);
  const directories = files.filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());

  return {
    directories
  };
}

const Portfolio = async () => {
  const { directories } = await getStatic();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul>
        {directories.map((dir) => (
          <li key={dir}>
            <Link href={`/portfolio/${dir}`} className="text-blue-500 hover:underline">
              {dir}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Portfolio;
