import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

export const Loader = () => {
    return (
        <Spiner>
            <Spin />
        </Spiner>
    )
}

const Spiner = styled.div`
    text-align: center;
`;