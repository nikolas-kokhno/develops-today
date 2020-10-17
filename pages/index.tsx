import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { PostsList } from '../components/PostList';

export default function Home() {
  return (
    <MainPage>
      <Navbar />
      <Container>
        <PostsList />
      </Container>
    </MainPage>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px 10px 10px;
`;

const MainPage = styled.div`
  background-color: #ececec;
  min-height: 100vh;
`;