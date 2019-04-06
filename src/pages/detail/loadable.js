import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
  // 异步加载
  loader: () => import('./'),
  // 临时显示的组件
  loading () {
      return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/> 
