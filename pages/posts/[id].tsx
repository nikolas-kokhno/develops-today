import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { fetchPost } from '../../store/actions/posts';
import { IdType } from '../../types/post';

const Post = () => {
    const router = useRouter();
    const postID = router.query.id;
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPost(postID as IdType));
    }, [postID]);

    const post = useSelector((data: any) => {
        return data.posts.post;
    });

    return (
        <PostPage>
            <Navbar />
            <Container>
                <PostItem>
                    <PostTitle>
                        <strong>Title: </strong> {post.title}
                    </PostTitle>
                    <PostDesc>
                        <strong>Body: </strong>{post.body}
                    </PostDesc>
                </PostItem>
            </Container>
        </PostPage>
    )
}

export default Post;

const PostPage = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px 10px 10px;
`;

const PostItem = styled.div``;
const PostTitle = styled.div``;

const PostDesc = styled.div`
    margin-bottom: 20px;
`;