import React from 'react';
import CreatePostModal from './CreatePostModal';

export default {
  title: 'Pages/CreatePostModal',
  component: CreatePostModal
};

const Template = (args) => <CreatePostModal {...args}/>;

export const CreatePostModalStory = Template.bind({});
CreatePostModalStory.args = {
  onChange: undefined,
  onClose: undefined,
  onSubmit: event => event.preventDefault(),
  show: true
};