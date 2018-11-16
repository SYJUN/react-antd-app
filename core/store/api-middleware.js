/**
 * @property types {array} api action 的三种类型 - "request, success, error"
 * @property callAPI {function} 调用 API
 * @property shouldCallAPI {function} 是否调用 API，比如有缓存时就不需要再次调用了，return {boolean} 类型
 * @property handleData {function} 处理 success action 的 data
 * @property onRequest {function} 开始请求时回调
 * @property onSuccess {function} 请求成功后回调
 * @property onError {function} 请求失败后回调
 */
export default function APIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      handleData = (data) => data,
      onRequest,
      onSuccess,
      onError,
      ...props
    } = action;

    // 如果没有 types 参数，那么就不需要此 middleware
    if (!types) return next(action);

    // 如果不需要请求 API，那么直接返回
    if (!shouldCallAPI(getState())) return;

    const [requestType, successType, errorType] = types;

    // dispatch
    dispatch({ ...props, type: requestType });
    if (onRequest) onRequest();

    return callAPI().then((resp) => {
      // 根据以下格式属性来判断业务逻辑，如果 API 返回结果不是此格式，请自行转换
      // success {boolean} 判断请求是否成功
      // err {string} 原始异常信息，帮助接口工程师排查问题
      // message {string} 描述性异常信息，用于给用户的提示
      if (!resp.success) {
        dispatch({ ...props, type: errorType, err: resp.err, errMsg: resp.message });
        if (onError) onError(resp);
        return;
      }

      // 使用 data 属性来获取数据，如果 API 返回结果不是此格式，请自行转换
      dispatch({ ...props, type: successType, data: handleData(resp.data) });
      if (onSuccess) onSuccess(getState());
    });
  };
}
