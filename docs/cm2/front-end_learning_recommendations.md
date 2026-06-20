# 前端学习建议

### web 开发方面学习
  * vue3  react
    * 这两个是国内使用比较多的两个 web 前端使用框架
    * 适用于 spa mpa 的开发，但是缺点的话就是大型项目的效能方面的支撑具备很大不足
    * 这个时候就需要进行项目的同构实现对应的开发即可
  * uniapp taro
    * 小程序开发框架，uniapp 简直垃圾，不建议学习
    * 主要两个都是跨端实现方案，主要是用来开发小程序的，直接学习 taro 吧
  * electron  tarui
    * 两个的话都是可以的，都是很不错的框架选择
    * 主要是跨平台的桌面端开发框架
    * 建议先学习 electron 因为书写其代码主要就是书写前端代码即可
    * tarui 还需要了解一些 rust 的知识，学习成本很大很大
  * next  nuxt
    * 对于 vue3 和 react 的 ssr 同构实现的框架
    * 内部主要使用使用了官方的 约定式的开发模式，开发十分的不自由
    * 但是学习了这两个框架，可以对 SEO 有更深的理解
  * garfish qiankun single-spa 无界 模块联邦
    * 前端微服务方面的学习
    * 学习了这个，可以更好的理解后端微服务的实现策略


### 前端打包编译工具的学习

  * 打包工具
    * 业务偏向的打包工具了解
      * vite webpack turbopack
    * 库打包工具了解
      * tsup rollup gulp
  * 编译工具的了解
    * babel
    * postcss
    * swc
    * oxc


### 数据库的学习

  * 学习 mysql --> 注意简历上的话不要用 mysql 使用 postgresql 进行平替
  * 学习 redis


### nodejs 后端的学习

  * express 的学习
  * koa 的学习
  * fastify 的学习
  * nestjs 的学习


### 一些概念的了解

  * 对比 mutlirepo 和 monorepo 
  * 了解 CSS 的实现方案有哪些
    * CSS 原生实现
    * less sass stylus 预处理器的实现
    * css.module 的实现
    * unocss tailwindcss 原子化的选择
  * typescript 的了解使用
    * 尤其关注 extend infer interface type 关键字
    * 了解几个 ts 的泛型工具
  * 算法的了解
    * 滑动窗口的了解
    * 动态规划问题的了解
    * 字符串和数组的处理
    * 二叉树的处理
    * 回溯算法的了解
  * 打包构建工具的性能优化策略
  * 了解图片（媒体资源）的处理策略
  * 了解大量DOM渲染出现的问题处理策略
  * 学会处理前端长任务的处理
  * 前端原型链和执行机制以及异步了解
  * 学习计算机网络
  * 优化方案： webworker wasm 
  * 学习http外的协议类型： socket 协议


### 运维方面的学习

  * 学习 docker --> 进军 docker-compose 服务编排，这个没学习的话，docker 方面的支持不要上简历，会 k8s 更优
  * 学习 CI/CD --> 持续化集成和继续化部署，自动化流程，github-actions
  * 学习 Jenkins
  * 学习 nginx


### 前端测试工具的了解

  * jest 
  * vitest
  * cypress
  * Playwright 


### 其他推荐了解

  * flutter 可以了解了解，很不错的一个跨端开发框架

### 最后建议：
>
> * 八股文不要背，也不要记忆
>   * 主要是面试官天天听，你如果按照八股来回答，那么一点创新都体现不出来
>   * 面试官主要听的是你的思路，如果只是背的八股，他们知道的呐
> 
> * 最后建议 
>   * 简历上准备的内容对应的官网一定要看，很多开放性问题在官网都是具备答案的
>   * https://developer.mozilla.org/en-US/docs/Web/APIMDN 文档这一页一定要看一半以上吧，很多比平时不知道的处理API在这个上面的
> 
> * 简历项目推荐准备
>   * 后台管理系统任然可以上
>     * 但是一定要结合 ssr 或者说 微前端的后台管理系统才上得了分
>   * 低代码平台的搭建
>   * 组件库的实现（可以写，但是不要写屎）
>   * cli 工具的构建
>   * 全栈型项目可以写：主要推荐使用：nestjs 或者 fastify 作为后端，亮点更多
>     * express 和 koa 太 low 了同时也太大众化了