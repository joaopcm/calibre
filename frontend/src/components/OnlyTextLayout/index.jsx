import { useHistory } from 'react-router-dom';

import Button from '../Button';
import { Layout } from './styles';

export default function OnlyTextLayout({ text, buttonText, route }) {
  const history = useHistory();

  return (
    <Layout>
      <div>
        <p>{text}</p>

        <Button onClick={() => history.push(route)} backgroundColor="#0a9721">{buttonText}</Button>
      </div>
    </Layout>
  );
}