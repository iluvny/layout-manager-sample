import * as React from 'react';
import { PANEL_TYPES } from '../Constants';
import ImageView, { ImageViewProps } from './ImageView';
import styled from 'styled-components';
import DragHandle from './DragHandle';

export interface PanelProps {
    type: string;
    component?: string;
    panels?: Array<any>;
    props?: Object;
    width?: string;
    height?: string;
    activeIndex?: number;
}

const Wrapper = styled.div`
    width: ${(props: PanelProps) => props.width || '100%'};
    height: ${(props: PanelProps) => props.height || '100%'};
`;

const ContainerPanel = styled(Wrapper)`
    display: flex;
    flex-direction: ${(props: PanelProps) => (props.type === PANEL_TYPES.COLUMN ? 'column' : 'row')};
`;

function renderComponentType(props: PanelProps): JSX.Element {
    return (
        <Wrapper className="panel" {...props}>
            {createComponent(props.component, props.props)}
        </Wrapper>
    );
}

function renderStackType(props: PanelProps): JSX.Element {
    const activeIndex = props.activeIndex || 0;
    const panel = props.panels[activeIndex];

    return (
        <Wrapper className="panel" {...props}>
            {createComponent(panel.component, panel.props)}
        </Wrapper>
    );
}

function renderContainerType(props: PanelProps): JSX.Element {
    return (
        <ContainerPanel className="panel" {...props}>
            {renderPanels(props.panels, props.type)}
        </ContainerPanel>
    );
}

function createComponent(component: string, props: Object): JSX.Element {
    switch (component) {
        case 'ImageView':
            return <ImageView {...props as ImageViewProps} />;
        default:
            return null;
    }
}

export function renderPanels(panels: Array<PanelProps>, parentType?: string): JSX.Element[] {
    const divided = 100 / panels.length;

    return panels.map((panel, index) => {
        const newPanelProps: PanelProps = {
            ...panel
        };
        const isLast = index + 1 === panels.length;
        const isHorizontal = parentType === PANEL_TYPES.COLUMN;
        const canHaveDragHandler = parentType === PANEL_TYPES.COLUMN || parentType === PANEL_TYPES.ROW;

        if (parentType === PANEL_TYPES.COLUMN && !newPanelProps.height) {
            newPanelProps.height = `${divided}%`;
        } else if (parentType === PANEL_TYPES.ROW && !newPanelProps.width) {
            newPanelProps.width = `${divided}%`;
        }

        return (
            <React.Fragment key={index}>
                <Panel key={index} {...newPanelProps} />
                {canHaveDragHandler && !isLast && <DragHandle key={`dragHandle${index}`} isHorizontal={isHorizontal} />}
            </React.Fragment>
        );
    });
}

export default function Panel(props: PanelProps): JSX.Element {
    if (props.type === PANEL_TYPES.COMPONENT) {
        return renderComponentType(props);
    } else if (props.type === PANEL_TYPES.STACK) {
        return renderStackType(props);
    } else {
        return renderContainerType(props);
    }
}
