import fetch from 'isomorphic-fetch';
import { stringify } from 'qs';
import { camelizeKeys } from 'humps';

class APIRequest {
  /**
   *
   * @param domain {string} 域名，如： https://dingtalk.e.ikcrm.com
   * @param pathPrefix {string} API 路径前缀，如 /api/v2
   * @param headers {object} http request headers
   * @param fetchOpts {object} fetch 的除 Headers 之外的参数
   * @param interceptor {object} 请求拦截器，可以用于请求之前或之后的数据处理，包含以下参数：
   *   - request {function(fetchOpts)} 请求之前执行，返回 fetchOpts
   *   - response {function(data)} 请求结果返回之后执行，返回处理过 data 后的 promise。注：如果在具体请求里也设置了 response，
   *     那么会替换这里的 response
   *   - responseAfter {function(data)} response 执行后执行。注：不会替换 response 方法，但是如果在具体请求里设置了 responseAfter，
   *     那么会替换这里的 responseAfter
   */
  constructor({ domain, pathPrefix, headers = {}, fetchOpts = {}, interceptor = {}}) {
    this.domain = domain || window.location.origin;
    this.pathPrefix = pathPrefix || '/';
    this.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    };
    this.fetchOpts = fetchOpts;
    this.interceptor = interceptor;
  }

  get(endpoint, opts = {}) {
    return this.request('GET', endpoint, opts);
  }

  post(endpoint, opts = {}) {
    return this.request('POST', endpoint, opts);
  }

  put(endpoint, opts = {}) {
    return this.request('PUT', endpoint, opts);
  }

  delete(endpoint, opts = {}) {
    return this.request('DELETE', endpoint, opts);
  }

  /**
   *
   * @param method {string} http method GET|PUT|POST|DELETE
   * @param endpoint {string} API 功能路径，如：/api/v2/customers/1 里的 customers/1
   * @param params {object} url 上的参数
   * @param body {object} fetch body 参数
   * @param headers {object} http request headers
   * @param fetchOpts {object} 除 headers 之外的 fetch 参数
   * @param interceptor {object} 用法参考 constructor
   * @returns {promise} API 请求 Promise
   */
  request(method, endpoint, { params, body, headers = {}, fetchOpts = {}, interceptor = {} }) {
    const reqInterceptor = interceptor.request || this.interceptor.request;
    const respInterceptor = interceptor.response || this.interceptor.response;
    const respAfterInterceptor = interceptor.responseAfter || this.interceptor.responseAfter;
    const respErrorInterceptor = interceptor.responseError || this.interceptor.responseError;

    let opts = {
      headers: { ...this.headers, ...headers },
      fetchOpts: { ...this.fetchOpts, ...fetchOpts },
    };

    if (params) {
      opts.params = params;
    }

    if (method !== 'GET' && body) {
      opts.body = body;
    }

    if (reqInterceptor) {
      opts = reqInterceptor(opts);
    }

    const url = this.fullUrl(endpoint, opts.params);
    const fetchInit = { method, headers: opts.headers, ...opts.fetchOpts };
    if (opts.body) {
      fetchInit.body = JSON.stringify(opts.body);
    }
    return fetch(url, fetchInit).then((response) => {
      const reqOpts = { url, ...fetchInit };

      if (!response.ok) {
        let result = { success: false, err: response.status, message: response.statusText };
        if (respErrorInterceptor) {
          result = respErrorInterceptor(result, reqOpts);
        }
        return result;
      }

      return response.json().then(json => {
        let result = camelizeKeys(json);

        if (respInterceptor) {
          result = respInterceptor(result, reqOpts);
        }

        if (respAfterInterceptor) {
          result = respAfterInterceptor(result, reqOpts);
        }

        return result;
      });
    });
  }

  fullUrl(endpoint, params) {
    let pathname;
    let url;
    let queryString = '';

    if (params) {
      const _params = { ...params };
      pathname = endpoint.indexOf(':') > -1 ? this.fillPath(endpoint, _params) : endpoint;
      if (Object.keys(_params).length) {
        queryString = stringify(_params, { arrayFormat: 'brackets' });
      }
    } else {
      pathname = endpoint;
    }

    if (pathname[0] === '/') {
      url = `${this.domain}${pathname}`;
    } else {
      url = `${this.domain}${this.pathPrefix}/${pathname}`;
    }

    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  }

  fillPath(pathname, params) {
    return pathname.split('/').map((str) => {
      if (str[0] === ':') {
        const str1 = str.substr(1);
        const fill = params[str1];
        delete params[str1];
        return fill;
      }

      return str;
    }).join('/');
  }
}

export default APIRequest;
