import Link from 'next/link';
import Layout from '../components/layout';

const Portfolio = () => {
  const projects = [
    { id: 'project1', title: 'Project 1' },
    { id: 'project2', title: 'Project 2' },
    { id: 'project3', title: 'Project 3' },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/portfolio/${project.id}`} legacyBehavior>
              <a className="text-blue-500">{project.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Portfolio;
