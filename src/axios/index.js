/**
 * Created by weichao on 2019/5/13.
 */
import Vue from 'vue';
const host = 'http://localhost:10000';

class Request {
  constructor() {
    this.$http = Vue.axios;
  }

  async getNewsList(tag, page, pageSize) {
    const path = `${host}/v1/news?tag=${tag}&page=${page}&pageSize=${pageSize}`;
    const result = await this.$http.get(path);
    return result.data;
  }
}

export default Request;
