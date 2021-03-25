import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Item from './Item'
import App from '../App'
import {QueryClient,QueryClientProvider} from 'react-query';
const client=new QueryClient();

export default {
  title: 'Item',
  component: Item,
  
} as Meta;

export const Template: Story = (args) =>  <QueryClientProvider client={client}>
<App {...args} />
</QueryClientProvider>


