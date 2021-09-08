const Blog = artifacts.require('./Blog.sol');
const truffleAssert = require('truffle-assert');

contract('Blog', accounts => {
  const MOCK_TITLE = 'Mock Title';
  const MOCK_CONTENT_FOR_POST = 'Mock content for post...';
  let blog;
  
  before(async () => {
    blog = await Blog.deployed();
  });

  describe('createPost', () => {
    it('should emit an event after creating post', async () => {
      const tx = await blog.createPost(MOCK_TITLE, MOCK_CONTENT_FOR_POST, { from: accounts[0] });
      truffleAssert.eventEmitted(tx, 'PostCreated', (event) => {
        const { id } = event;
        return (
          parseInt(id.toString()) === 0
        );
      });
    });
    
    it('should not allow anyone, other than the contract creator, to create a post', async () => {
      try {
        await blog.createPost(MOCK_TITLE, MOCK_CONTENT_FOR_POST, { from: accounts[1] });
        assert.notOk(false);
      } catch (error) {
        assert.ok(error);
      }
    });
  });

  describe('getPost', () => {
    it('should assume post exists and get post', async () => {
      const post = await blog.getPost(0);
      assert.equal(parseInt(post.id.toString()), 0);
    });
  });

  describe('getHomeData', () => {
    const SECOND_POST_MOCK_TITLE = 'Second Post';

    // create additional post to test multiple posts
    before(async () => {
      await blog.createPost(SECOND_POST_MOCK_TITLE, 'This is my second post, and I love this application.', { from: accounts[0] });
    });

    it('should get home data, which is post id and title for all posts', async () => {
      const data = await blog.getHomeData();
      const postIds = data[0];
      const postTitles = data[1];
      assert.equal(parseInt(postIds[0].toString()), 0);
      assert.equal(postTitles[0], MOCK_TITLE);
      assert.equal(parseInt(postIds[1].toString()), 1);
      assert.equal(postTitles[1], SECOND_POST_MOCK_TITLE);
    });
  });
});
