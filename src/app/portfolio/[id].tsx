import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Project {id}</h1>
      <p>This is the detail page for project {id}.</p>
    </Layout>
  );
};

export default Project;
