import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PostItem } from './PostItem';

import { Col, Row } from 'antd';
import { Loader } from './Loader';

export const PostsList = () => {
    const store = useSelector((data:any) => {
        return data.posts;
    });

    console.log(store);

    return(
        <List>
            <Row gutter={16}>
                {store.loading 
                    ? <Loader />
                    : store.posts && store.posts.map((post:any) => (
                        <Col span={8}>
                            <PostItem 
                                post={post}
                                key={post.id}
                            />
                        </Col>
                    )
                )}
            </Row>
        </List>
    )
}

const List = styled.div`
    
`;