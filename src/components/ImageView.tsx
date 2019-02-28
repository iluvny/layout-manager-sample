import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-image: url("${(props: ImageViewProps) => props.src}");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: ${(props: ImageViewProps) => props.width || '100%'};
    height: ${(props: ImageViewProps) => props.width || '100%'};
`;

export interface ImageViewProps {
    src: string;
    width?: string;
    height?: string;
}

export default function ImageView(props: ImageViewProps): JSX.Element {
    return <Wrapper className="image-view" {...props} />;
}

// export default function ImageView({ src = '' }: ImageViewProps): JSX.Element {
//     return (
//         <div className="image-view">
//             <img src={src} />
//         </div>
//     );
// }
