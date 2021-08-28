import React from 'react';
import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home
};

const Template = (args) => <Home {...args}/>;

export const HomeStory = Template.bind({});
HomeStory.args = {
  postTitles: [
    'First Post',
    'Second Post',
    'Third Post',
    'Fourth Post'
  ]
};