import { GetStaticProps} from 'next'
import { TrainingSession } from '../../model/session';


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/getTraining');
  const data = await res.json();

  return { props: { data} };
}
export interface Props {
  data: TrainingSession;
}

export default function Testing({data}: Props) {
  
  return (
    <>
      <h1>testing data</h1>
      <pre>
        {JSON.stringify(data)}
      </pre>
    </>

  );
}
