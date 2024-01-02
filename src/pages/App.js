import githubLogo from '../assets/git-logo.png';
import { Container } from './style';
import Input from '../components/input';
import ItemRepo from '../components/ItemRepo';

function App() {
  return (
    <Container>
      <img src={githubLogo} alt="logo do github" width={72} height={72}/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
