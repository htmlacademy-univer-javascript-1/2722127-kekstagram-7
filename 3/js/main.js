const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Иван','Артем','Татьяна','Игорь','Мария','Анна','Михаил'];

const generatePhotoId = createIdGenerator();
const generateUrlI = createIdGenerator();
const generateCommentId = createIdGenerator();

function createMessages(){
  let count=getRandomInteger(1,2);
  let message = '';
  for (let i=0;i<count;i++){
    if (i>0){
      message+=' ';
    }
    message+=getRandomArrayElement(messages);
  }
  return message;
}

const createComment = () => ({
  id: generateCommentId(),
  avatar: 'img/avatar-'+getRandomInteger(1,6)+'.svg',
  message: createMessages(),
  name: getRandomArrayElement(names),
});

function createComments(count){
  let commentsArray = [];
  for (let i=0;i<count;i++){
    commentsArray.push(createComment());
  }
  return commentsArray;
}

const createPhoto = () => ({
  id: generatePhotoId(),
  url: 'photos/'+generateUrlI()+'.jpg',
  description: 'Прогулка по городу',
  likes: getRandomInteger(15,200),
  comments: createComments(getRandomInteger(0,30)),
});

function createPhotos(count){
  let photosArray = [];
  for (let i=0;i<count;i++){
    photosArray.push(createPhoto());
  }
  return photosArray;
}

const photosCount = 25;

console.log(createPhotos(photosCount));
