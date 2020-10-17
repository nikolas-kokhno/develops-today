import React from 'react';
import styled from 'styled-components';

import { Card } from 'antd';
import Link from 'next/link';

export const PostItem = ({ post }: any) => {
    return (
        <Item>
            <Link href={`/posts/${post.id}`}>
                <Card title={post.title} bordered={true}>
                    {post.body}
                </Card>
            </Link>
        </Item>
    )
}

const Item = styled.div`
    margin-top: 15px;
    cursor: pointer;
`;