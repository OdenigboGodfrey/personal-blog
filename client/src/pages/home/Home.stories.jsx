import React, { useState } from 'react';
import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home
};

const Template = (args) => {
  const [modalVisible, setModalVisible] = useState(false);

  args = { ...args, modalVisible, closeModal: () => setModalVisible(false), openModal: () => setModalVisible(true) };

  return <Home {...args}/>;
};

export const HomeStory = Template.bind({});
HomeStory.args = {
  // closeModal, (defined above)
  onChange: undefined,
  onSubmit: event => event.preventDefault(),
  // modalVisible, (defined above)
  // openModal, (defined above)
  posts: [
    'First Post',
    'Second Post',
    'Third Post',
    'Fourth Post'
  ]
};