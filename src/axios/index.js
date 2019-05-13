/**
 * Created by weichao on 2019/5/13.
 */
import Vue from 'vue';

class Request {
  constructor() {
    this.$http = Vue.axios;
  }

  async getNewsList(tag, page, pageSize) {
    const path = `${process.env.API_ROOT}/v1/news?tag=${tag}&page=${page}&pageSize=${pageSize}`;
    const result = await this.$http.get(path);
    return result.data;
  }
}

export default Request;
