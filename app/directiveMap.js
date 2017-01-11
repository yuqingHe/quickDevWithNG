define([

], function (require, factory) {

    return {
        /**
         * 路由和模块的映射关系,即state和module的映射
         */
        config: {
            "textinput": "components/textinput/app"           
        },
      
        /**
         * 根据state获取模块
         */
        getModuleByState: function (name) {
            return this.config[name];
        }
    }
});