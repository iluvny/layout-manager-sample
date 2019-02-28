import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import layout from '../src/layout';
import Workbench from '../src/components/Workbench';
import Panel from '../src/components/Panel';
import ImageView from '../src/components/ImageView';
import DragHandle from '../src/components/DragHandle';

storiesOf('Button', module)
  .add('Workbench', () => (
    <Workbench layout={layout} />
  ))
  .add('Panel', () => {
    const props = {
      type: 'component',
      component: 'ImageView',
      props: {
          src: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          width: '800px',
          height: '600px'
      }
    };

    return <Panel {...props} />;
  })
  .add('ImageView', () => {
    const props = {
      src: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      width: '800px',
      height: '600px'
    };

    return <ImageView {...props} />;
  })
  .add('DragHandle', () => (
    <DragHandle isHorizontal />
  ));
