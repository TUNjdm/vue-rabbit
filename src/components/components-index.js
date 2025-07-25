import ImageView from './ImageView/ImageView-index.vue'
import XtxSku from './XtxSku/index.vue'
//  把组件注册到全局通过插件方式
export const componentsPlugin = {
  install(app) {
    // 1.注册组件
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
