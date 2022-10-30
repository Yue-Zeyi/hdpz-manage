/* 环境配置文件
开发环境 测试环境 线上环境 */

// 当前的环境
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/dea7af6d09cc1c3b91292fa431d477a7/api',
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://www.fastmock.site/mock/dea7af6d09cc1c3b91292fa431d477a7/api',
  },
  pro: {
    baseApi: '///future.com/api',
    mockApi: 'https://www.fastmock.site/mock/dea7af6d09cc1c3b91292fa431d477a7/api',
  },
};

export default {
  env,
  // mock的总开关
  mock: true,
  ...EnvConfig[env],
};
