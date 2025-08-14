definePlugin(
  '@plugins/com.msgbyte.integration/index-7a9729d3.js',
  ['require', 'exports', '@capital/common'],
  function (require, exports, common) {
    'use strict';

    const Translate = {
      groupdetail: common.localTrans({
        'zh-CN': '\u96C6\u6210',
        'en-US': 'Integration',
      }),
      notFoundApp: common.localTrans({
        'zh-CN': '\u6CA1\u627E\u5230\u8BE5\u5E94\u7528',
        'en-US': 'Not found application',
      }),
      onlyAllowManualAddition: common.localTrans({
        'zh-CN':
          '\u76EE\u524D\u4EC5\u652F\u6301\u901A\u8FC7\u5E94\u7528ID\u624B\u52A8\u6DFB\u52A0',
        'en-US': 'Currently only supports manual addition via app ID',
      }),
      appId: common.localTrans({
        'zh-CN': '\u5E94\u7528ID',
        'en-US': 'Application ID',
      }),
      search: common.localTrans({
        'zh-CN': '\u67E5\u8BE2',
        'en-US': 'Search',
      }),
      developer: common.localTrans({
        'zh-CN': '\u5F00\u53D1\u8005',
        'en-US': 'Developer',
      }),
      addBot: common.localTrans({
        'zh-CN': '\u6DFB\u52A0\u5E94\u7528\u673A\u5668\u4EBA\u5230\u7FA4\u7EC4',
        'en-US': 'Add app bot to group',
      }),
      cannotAddBot: common.localTrans({
        'zh-CN':
          '\u8BE5\u5E94\u7528\u673A\u5668\u4EBA\u6CA1\u6709\u5F00\u653E\u804A\u5929\u529F\u80FD',
        'en-US': 'This application does not enable chat feature',
      }),
    };

    const PLUGIN_NAME = '\u7B2C\u4E09\u65B9\u96C6\u6210';
    console.log(`Plugin ${PLUGIN_NAME} is loaded`);
    common.regCustomPanel({
      position: 'groupdetail',
      name: 'com.msgbyte.integration/groupdetail',
      icon: '',
      label: Translate.groupdetail,
      render: common.Loadable(
        () =>
          new Promise(function (resolve, reject) {
            require(['./IntegrationPanel-d0a6ef7a'], resolve, reject);
          })
      ),
    });

    exports.Translate = Translate;
  }
);
//# sourceMappingURL=index-7a9729d3.js.map
