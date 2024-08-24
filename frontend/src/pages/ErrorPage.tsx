import { useRouteError } from 'react-router-dom';


export default function Errorpage() {
  const error = useRouteError();
  console.error(error);

  return <div>Dang!</div>;
}
