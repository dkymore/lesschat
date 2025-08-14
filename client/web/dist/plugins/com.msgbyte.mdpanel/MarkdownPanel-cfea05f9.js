definePlugin(
  '@plugins/com.msgbyte.mdpanel/MarkdownPanel-cfea05f9.js',
  [
    'exports',
    'react',
    '@capital/component',
    'styled-components',
    './index-3c0b9c50',
    '@capital/common',
  ],
  function (exports, React, component, styled, index, common) {
    'use strict';

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { default: e };
    }

    var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
    var styled__default = /*#__PURE__*/ _interopDefaultLegacy(styled);

    const MainContent = styled__default['default'].div`
  padding: 10px;
`;
    const EditModalContent = styled__default['default'].div`
  padding: 10px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .main {
    flex: 1;
    overflow: hidden;

    > div {
      height: 100%;

      > .bytemd {
        height: 100%;
      }
    }
  }
`;
    const MarkdownEditorRender = React__default['default'].memo((props) => {
      const [text, setText] = React.useState(() => props.dataMap['markdown']);
      React.useEffect(() => {
        props.dataMap['markdown'] = text;
      }, [text]);
      return /* @__PURE__ */ React__default['default'].createElement(
        component.MarkdownEditor,
        {
          value: text,
          onChange: (val) => setText(val),
          imageUsage: 'group',
        }
      );
    });
    MarkdownEditorRender.displayName = 'MarkdownEditorRender';
    const MarkdownPanel = React__default['default'].memo(() => {
      return /* @__PURE__ */ React__default['default'].createElement(
        component.GroupExtraDataPanel,
        {
          names: ['markdown'],
          render: (dataMap) => {
            var _a;
            return /* @__PURE__ */ React__default['default'].createElement(
              MainContent,
              null,
              /* @__PURE__ */ React__default['default'].createElement(
                component.Markdown,
                {
                  raw: (_a = dataMap['markdown']) != null ? _a : '',
                  allowIframe: true,
                }
              )
            );
          },
          renderEdit: (dataMap) => {
            return /* @__PURE__ */ React__default['default'].createElement(
              EditModalContent,
              null,
              /* @__PURE__ */ React__default['default'].createElement(
                'div',
                null,
                index.Translate.editTip
              ),
              /* @__PURE__ */ React__default['default'].createElement(
                'div',
                {
                  className: 'main',
                },
                /* @__PURE__ */ React__default['default'].createElement(
                  MarkdownEditorRender,
                  {
                    dataMap,
                  }
                )
              )
            );
          },
        }
      );
    });
    MarkdownPanel.displayName = 'MarkdownPanel';

    exports['default'] = MarkdownPanel;
  }
);
//# sourceMappingURL=MarkdownPanel-cfea05f9.js.map
