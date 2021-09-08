import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AppContext from '../../appContext';
import CreatePostModal from './create-post-modal/CreatePostModal';
import getImageForPost from '../utils/get-image-for-post';

import './Home.css';

export function Home({
  closeModal,
  onChange,
  onSubmit,
  modalVisible,
  openModal,
  posts
}) {
  return (
    <Container fluid="lg" className="home">
      <CreatePostModal
        onChange={onChange}
        onClose={closeModal}
        onSubmit={onSubmit}
        show={modalVisible}
      />
      <Row>
        <Col className="home-top-section">
          <div className="home-top-section-overlay"></div>
          <div className="home-button-header-container">
            <h2>Welcome to the Blockchain Blog</h2>
            <p>A decentralized blog running on the blockchain.</p>
            <Button onClick={openModal} variant="primary">Create Post</Button>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col>
          <h2>Posts</h2>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} style={{ marginBottom: '10px' }}>
            <PostMetadata
              postIndex={post.id}
              title={post.title}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function PostMetadata({
  postIndex,
  title
}) {
  const history = useHistory();
  const postImage = getImageForPost(postIndex);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={postImage}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={() => history.push(`/post/${postIndex}`)}>Read Post</Button>
      </Card.Body>
    </Card>
  );
}

export function HomeWrapper() {
  const [createPostForm, setCreatePostForm] = useState({ post: '', postTitle: '' });
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  // const { dependencies } = useContext(AppContext);
  // const { blog, account } = dependencies;

  // const history = useHistory();

  useEffect(() => {
    (async function() {
      // setupCreatePostListener();
      setPosts(await getPosts());
      setLoading(true);
    })();
  }, []);

  /**
   * @description Hack for constructing the "posts"
   * array, which is the array used for this component's state
   * (i.e. posts). This is needed since the back-end
   * returns two separate arrays for home data.
   * @param {Array<Array>} homeData
   * @return {Array<Object>}
   */
  // function constructPostsArray(homeData) {
  //   const updatedPostArray = [];
  //   const postIds = homeData[0];
  //   const postTitles = homeData[1];
  //   const numPosts = postIds.length;

  //   for (let i = 0; i < numPosts; i++) {
  //     updatedPostArray.push({ title: postTitles[i], id: postIds[i] });
  //   }

  //   return updatedPostArray;
  // }

  /**
   * @description Function used to get the posts
   */
  async function getPosts() {
    return new Promise(resolve => {
      resolve([{ title: 'First Post', id: 0 }, { title: 'Second Post', id: 1 }, { title: 'Third Post', id: 2 }, { title: 'Fourth Post', id: 3 }]);
    });
    // const homeData = await blog.methods.getHomeData().call();
    // return constructPostsArray(homeData);
  }

  /**
   * @description On change handler for post modal
   * @param {Object} event
   */
  function onChange(event) {
    const { target } = event;
    setCreatePostForm(previousState => ({ ...previousState, [target.name]: target.value }));
  }

  /**
   * @description Submit handler for new post
   * @param {Object} event 
   */
  async function onSubmit(event) {
    event.preventDefault();
    const { post, postTitle } = createPostForm;
    
    console.log(post, postTitle);
    
    // await blog.methods.createPost(postTitle, post).send({ from: account });
  }

  /**
   * @description Setup the create post listener
   */
  // function setupCreatePostListener() {
  //   blog.events.PostCreated({}, (error, contractEvent) => {
  //     const { id } = contractEvent.returnValues;
  //     history.push(`/post/${id}`);
  //   });
  // }

  return (
    loading ?
      <Home
        closeModal={() => setModalVisible(false)}
        onChange={onChange}
        onSubmit={onSubmit}
        modalVisible={modalVisible}
        openModal={() => setModalVisible(true)}
        posts={posts}
      /> :
      <div>loading...</div>
  );
}