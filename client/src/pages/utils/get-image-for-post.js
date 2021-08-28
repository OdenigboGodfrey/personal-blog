/**
 * @description Helper function to get the image for a post
 * @param {Number} postIndex
 * @returns {String}
 */
export default function getImageForPost(postIndex) {
  const postImages = [
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-1.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-2.jpg",
    "https://decentralized-mvp.s3.amazonaws.com/blog/post-photo-3.jpg"
  ];
  const normalizedPostIndex = postIndex + 1;

  if (normalizedPostIndex % 3 === 0) {
    return postImages[2];
  } else if (normalizedPostIndex % 2 === 0) {
    return postImages[1];
  } else {
    return postImages[0];
  }
}