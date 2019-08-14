import communicativeEnglishDB from './communicative-english.db';
import vocabularyEnglishDB from './vocabulary-english.db';
import englishChineseTranslation from './english-chinese-translation.db';

const setExtraKey = (data) => {
  return data.map(item => {
    if (item.options && item.options.length) {
      item.options = item.options.map(option => {
        return {
          value: option.split('．')[0],
          name: option.split('．')[1],
        };
      });
    }

    // 阅读次数
    item.hits = 0;
    item.isDelete = false;

    return item;
  });
};

const getRandomData = (data, randomNum = 15) => {
  const randomData = [];
  randomNum = data.length >= randomNum ? randomNum : data.length;

  while (randomData.length < randomNum) {
    const random = data[Math.floor(Math.random() * data.length)];
    const findRandomData = randomData.find(item => item.id === random.id);
    if (!findRandomData) {
      randomData.push(random);
    }
  }

  randomData.forEach((item, idx) => (item.questionNum = idx + 1));

  return randomData;
};

export default {
  code: 1,
  message: 'success',
  data: [
    // {
    //   name: 'communicative_english',
    //   type: 'choice',
    //   title: '交际英语',
    //   description: '',
    //   data: getRandomData(setExtraKey(communicativeEnglishDB), 15),
    // },
    {
      name: 'vocabulary_english',
      type: 'choice',
      title: '词汇与结构',
      description: '',
      data: getRandomData(setExtraKey(vocabularyEnglishDB), 15),
    },
    {
      name: 'english_chinese_translation',
      type: 'translation',
      title: '英译汉',
      description: '',
      data: getRandomData(setExtraKey(englishChineseTranslation), 15),
    },
  ],
};
