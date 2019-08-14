import basicDB from './basic.db';
import windowsDB from './windows.db';
import wordDB from './word.db';

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
    {
      name: 'basic',
      type: 'choice',
      title: '计算机基础知识',
      description: '',
      data: getRandomData(setExtraKey(basicDB), 20),
    },
    {
      name: 'windows',
      type: 'choice',
      title: 'Windows操作系统及其应用',
      description: '',
      data: getRandomData(setExtraKey(windowsDB), 10),
    },
    {
      name: 'word',
      type: 'choice',
      title: 'Word 文字编辑',
      description: '',
      data: getRandomData(setExtraKey(wordDB), 10),
    },
  ],
};
