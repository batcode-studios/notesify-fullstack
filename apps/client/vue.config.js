const path = require('path');

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    chainWebpack: (config) => {

        //config.cache = false;

        // Add our custom loaders
        config.resolveLoader.modules
            .add(path.resolve(__dirname, 'loaders'))
            .end();

        // Configure vue-template-loader
        // @Important not compatible with <template src="./template.html">
        // https://github.com/vuejs/vueify/issues/35
        config.module
            .rule('html')
            .test(/\.html$/)
            .exclude.add(/index\.html/)
            .add(/\.vue\.html/).end()
            .set('loader', 'vue-template-loader')
            .set('options', {
                scoped: false
            })
            .end();

        // Add custom loader to be able to pre-process *.vue files
        config.module
            .rule('vue')
            .use('vue-auto-tmpl-loader')
            .loader('@rouche/vue-auto-tmpl-loader')
            .end();
    }
};
