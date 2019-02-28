import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: #000000 2px solid;
    cursor: ${(props: DragHandleProps) => (props.isHorizontal ? 'row-resize' : 'col-resize')};
`;

export interface DragHandleProps {
    isHorizontal: boolean;
}

export default function DragHandle(props: DragHandleProps): JSX.Element {
    return <Wrapper className="drag-handle" {...props} />;
}
