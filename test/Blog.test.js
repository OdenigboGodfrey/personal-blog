const Blog = artifacts.require('./Blog.sol');
// const truffleAssert = require('truffle-assert');

contract('Blog', accounts => {
  let blog;
  
  before(async () => {
    blog = await Blog.deployed();
  });
});
