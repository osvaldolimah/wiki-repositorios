import githubLogo from '../assets/git-logo.png';
import { Container } from './style';

function App() {
  return (
    <Container>
      <img src={githubLogo} alt="logo do github" width={72} height={72}/>
    </Container>
  );
}

export default App;
