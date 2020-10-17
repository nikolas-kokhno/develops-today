import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Form, Input, Button, message } from 'antd';
import Navbar from '../../components/Navbar';
import { creareNewPost } from '../../store/actions/posts';

const CreatePost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const submitForm = () => {
        if (title !== '' && body !== '') {
            const data = {
                'title': title,
                'body': body
            }
    
            dispatch(creareNewPost(data));
            message.success('Post added successfully!');
        } else {
            message.error('Failed to add post!');
        }
    }

    return (
        <NewPostPage>
            <Navbar />

            <Container>
                <CreatePostText>
                    Create new Post
                </CreatePostText>

                <Form>
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                            required: true,
                            message: 'Please input title post!',
                            },
                        ]}
                    >
                        <Input value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[
                            {
                            required: true,
                            message: 'Please input description post!',
                            },
                        ]}
                    >
                        <Input value={body} onChange={e => setBody(e.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={submitForm}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Container>
        </NewPostPage>
    )
}

export default CreatePost;

const NewPostPage = styled.div``;

const Container = styled.div`
  max-width: 600px;
  text-align: center;
  margin: auto;
  padding: 20px 10px 10px;
`;

const CreatePostText = styled.h3`
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 600;
`;