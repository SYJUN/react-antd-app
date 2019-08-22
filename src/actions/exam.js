import {
  GET_EXAM_DATA,
  REFRESH_EXAM_DATA,
  SUBMIT_EXAM,
} from '../action-types/exam';
import reducerRegistry from '@core/store/reducer-registry';
import examReducer from '../reducers/exam';

reducerRegistry.register('exam', examReducer);

/**
 * 获取数据
 * @param data
 * @returns {{data: *, type: string}}
 */
export function getExamDataAction(data) {
  return {
    type: GET_EXAM_DATA,
    data,
  };
}

/**
 * 刷新试卷
 * @param data
 * @returns {{data: *, type: string}}
 */
export function refreshExamDataAction(data) {
  return {
    type: REFRESH_EXAM_DATA,
    data,
  };
}

/**
 * 试卷提交
 * @param data
 * @returns {{data: *, type: string}}
 */
export function submitExamAction(data) {
  return {
    type: SUBMIT_EXAM,
    data,
  };
}
