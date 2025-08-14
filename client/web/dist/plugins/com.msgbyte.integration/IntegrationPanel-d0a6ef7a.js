definePlugin(
  '@plugins/com.msgbyte.integration/IntegrationPanel-d0a6ef7a.js',
  [
    'exports',
    'react',
    '@capital/component',
    'styled-components',
    '@capital/common',
    './index-7a9729d3',
  ],
  function (exports, React, component, styled, common, index) {
    'use strict';

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { default: e };
    }

    var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
    var styled__default = /*#__PURE__*/ _interopDefaultLegacy(styled);

    const Tip = styled__default['default'].div`
  color: #999;
  margin-bottom: 10px;
`;
    const Row = styled__default['default'].div`
  display: flex;
`;
    const AppInfoCard = styled__default['default'].div({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 3,
      padding: 10,
      marginTop: 10,
      '.app-info': {
        flex: 1,
        marginLeft: 10,
        '.title': {
          fontSize: 18,
          fontWeight: 'bold',
        },
        '.action': {
          marginTop: 10,
        },
      },
    });
    const IntegrationPanel = React__default['default'].memo(() => {
      const [appId, setAppId] = React.useState('');
      const [openAppInfo, setOpenAppInfo] = React.useState(null);
      const groupId = common.useGroupIdContext();
      const [{ loading }, handleQueryApp] = common.useAsyncRequest(async () => {
        const { data } = await common.postRequest('/openapi/app/get', {
          appId,
        });
        if (!data) {
          common.showErrorToasts(index.Translate.notFoundApp);
          return;
        }
        setOpenAppInfo(data);
      }, [appId]);
      const [{ loading: addBotLoading }, handleAddBotIntoGroup] =
        common.useAsyncRequest(async () => {
          await common.postRequest('/openapi/integration/addBotUser', {
            appId,
            groupId,
          });
          common.showSuccessToasts();
        }, [appId]);
      return /* @__PURE__ */ React__default['default'].createElement(
        'div',
        null,
        /* @__PURE__ */ React__default['default'].createElement(
          Tip,
          null,
          index.Translate.onlyAllowManualAddition
        ),
        /* @__PURE__ */ React__default['default'].createElement(
          Row,
          null,
          /* @__PURE__ */ React__default['default'].createElement(
            component.Input,
            {
              placeholder: index.Translate.appId,
              value: appId,
              onChange: (e) => setAppId(e.target.value),
            }
          ),
          /* @__PURE__ */ React__default['default'].createElement(
            component.Button,
            {
              type: 'primary',
              disabled: !appId,
              loading,
              onClick: handleQueryApp,
            },
            index.Translate.search
          )
        ),
        openAppInfo &&
          /* @__PURE__ */ React__default['default'].createElement(
            'div',
            null,
            /* @__PURE__ */ React__default['default'].createElement(
              AppInfoCard,
              null,
              /* @__PURE__ */ React__default['default'].createElement(
                Row,
                null,
                /* @__PURE__ */ React__default['default'].createElement(
                  component.Avatar,
                  {
                    size: 56,
                    src: openAppInfo.appIcon,
                    name: openAppInfo.appName,
                  }
                ),
                /* @__PURE__ */ React__default['default'].createElement(
                  'div',
                  {
                    className: 'app-info',
                  },
                  /* @__PURE__ */ React__default['default'].createElement(
                    'div',
                    null,
                    openAppInfo.appName
                  ),
                  /* @__PURE__ */ React__default['default'].createElement(
                    'div',
                    null,
                    openAppInfo.appDesc
                  ),
                  /* @__PURE__ */ React__default['default'].createElement(
                    Row,
                    null,
                    /* @__PURE__ */ React__default['default'].createElement(
                      'div',
                      null,
                      index.Translate.developer,
                      ':'
                    ),
                    /* @__PURE__ */ React__default['default'].createElement(
                      component.UserName,
                      {
                        userId: openAppInfo.owner,
                      }
                    )
                  ),
                  /* @__PURE__ */ React__default['default'].createElement(
                    'div',
                    {
                      className: 'action',
                    },
                    openAppInfo.capability.includes('bot')
                      ? /* @__PURE__ */ React__default['default'].createElement(
                          component.Button,
                          {
                            type: 'primary',
                            size: 'small',
                            loading: addBotLoading,
                            onClick: handleAddBotIntoGroup,
                          },
                          index.Translate.addBot
                        )
                      : /* @__PURE__ */ React__default['default'].createElement(
                          component.Button,
                          {
                            type: 'primary',
                            size: 'small',
                            disabled: true,
                          },
                          index.Translate.cannotAddBot
                        )
                  )
                )
              )
            )
          )
      );
    });
    IntegrationPanel.displayName = 'IntegrationPanel';

    exports['default'] = IntegrationPanel;
  }
);
//# sourceMappingURL=IntegrationPanel-d0a6ef7a.js.map
