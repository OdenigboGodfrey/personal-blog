import React from 'react';
import Post from './Post';

export default {
  title: 'Pages/Post',
  component: Post
};

const Template = (args) => <Post {...args}/>;

export const PostStory = Template.bind({});
PostStory.args = {
  index: 0,
  post: 'This is a mock post',
  title: 'Mock Post Title'
};