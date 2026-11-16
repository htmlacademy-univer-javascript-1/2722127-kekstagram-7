const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = avatar;
  image.alt = name;
  image.width = 35;
  image.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = message;

  comment.append(image, text);
  return comment;
};

const onDocumentKeydown = (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const showBigPicture = ({url, description, likes, comments}) => {
  bigPictureImage.src = url;
  bigPictureImage.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  caption.textContent = description;

  const commentFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentFragment.append(createComment(comment));
  });
  commentsList.replaceChildren(commentFragment);

  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', closeBigPicture);

export { showBigPicture };
