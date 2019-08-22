import { GET_EXAM_DATA, REFRESH_EXAM_DATA, SUBMIT_EXAM } from '../action-types/exam';
import * as _ from 'lodash';

const setExtraKey = (data) => {
  return data.map(item => {
    if (item.options && item.options.length) {
      item.options = item.options.map(option => {
        if (_.isString(option)) {
          return {
            value: option.split('．')[0],
            name: option.split('．')[1],
          };
        }

        return option;
      });
    }

    // 阅读次数
    item.hits = !_.isUndefined(item.hits) ? item.hits : 0;
    // item.isDelete = !_.isUndefined(item.isDelete) ? item.isDelete : false;

    return item;
  });
};

const getFilterDataByHits = (data, maxCount = 15, isRefresh) => {
  let filterList = [...data];
  if (isRefresh) {
    _.forEach(data, item => {
      delete item.isRight;
      delete item.selectValue;
      delete item.name;
      delete item.title;
    });
    filterList = _.filter(data, o => o.hits === 0);
  }

  return getRandomData(filterList, maxCount);
};

const getRandomData = (data, maxCount = 15) => {
  const randomData = [];
  const dataLen = data.length;

  maxCount = dataLen >= maxCount ? maxCount : dataLen;

  while (randomData.length < maxCount) {
    const random = data[Math.floor(Math.random() * dataLen)];
    const findRandomData = randomData.find(item => item.id === random.id);
    if (!findRandomData) {
      randomData.push(random);
    }
  }

  randomData.forEach((item, idx) => (item.questionNum = idx + 1));

  return randomData;
};

const handleSubmit = (data) => {
  if (!data) return [];
  return data.map(item => {
    if (!_.isUndefined(item.isRight)) {
      item.hits += 1;
    }
    return item;
  });
};

export default function(state = [], action) {
  switch (action.type) {
    case GET_EXAM_DATA: {
      const limits = action.data.limits || [];
      const result = _.map(action.data.list, item => {
        let maxCount = 15;
        const currentItem = _.find(limits, { name: item.name });
        if (currentItem) {
          maxCount = currentItem.maxCount;
        }
        return _.assign({}, item, { data: getFilterDataByHits(setExtraKey(item.data), maxCount) });
      });

      return [...result];
    }

    case REFRESH_EXAM_DATA: {
      const limits = action.data.limits || [];
      const result = _.map(action.data.list, item => {
        let maxCount = 15;
        const currentItem = _.find(limits, { name: item.name });
        if (currentItem) {
          maxCount = currentItem.maxCount;
        }

        return _.assign({}, item, { data: getFilterDataByHits(setExtraKey(item.data), maxCount, true) });
      });

      return [...result];
    }

    case SUBMIT_EXAM: {
      const result = _.map(action.data, item => {
        return _.assign(item, { data: handleSubmit(item.data) });
      });
      return [...result];
    }


    default: return state;
  }
}
