import * as React from 'react';
import layout from '../layout';
import Workbench from './Workbench';

export interface AppProps {
    compiler: string;
    framework: string;
}

export const App = (props: AppProps) => <Workbench layout={layout} />;
