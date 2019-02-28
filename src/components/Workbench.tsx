import * as React from 'react';
import { PanelProps, renderPanels } from './Panel';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1280px;
    height: 768px;
`;

type Layout = Array<PanelProps>;

interface WorkbenchProps {
    layout: Layout;
}

export default function Workbench({ layout }: WorkbenchProps) {
    return <Wrapper className="workbench">{renderPanels(layout)}</Wrapper>;
}
