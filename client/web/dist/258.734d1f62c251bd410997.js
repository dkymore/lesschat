'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [258],
  {
    75209: (Oe, Y, t) => {
      t.d(Y, { Y: () => xe, d: () => Ze });
      var o = t(52983),
        n = t(26288),
        l = t(21513),
        u = t(93540),
        e = t(40013);
      function a(O) {
        const Z = (0, o.useMemo)(
          () =>
            l.messageInterpreter
              .map(({ name: T, explainMessage: V }) => ({
                name: T,
                render: V(O),
              }))
              .filter(({ render: T }) => T !== null),
          [O]
        );
        return Z.length === 0
          ? null
          : o.createElement(
              'span',
              { className: 'align-middle hidden group-hover:inline-block' },
              o.createElement(
                e.Z,
                {
                  placement: 'topLeft',
                  title: (0, n.t)('\u6D88\u606F\u89E3\u91CA'),
                  content: o.createElement(
                    'div',
                    { className: 'max-w-lg' },
                    Z.map((T, V) => {
                      var ue;
                      return o.createElement(
                        'p',
                        { key: V + ((ue = T.name) != null ? ue : '') },
                        T.name &&
                          o.createElement(
                            'span',
                            null,
                            (0, n.t)('\u6765\u81EA'),
                            ' ',
                            o.createElement(
                              'span',
                              { className: 'font-bold' },
                              T.name
                            ),
                            ' :',
                            ' '
                          ),
                        T.render
                      );
                    })
                  ),
                  trigger: 'click',
                },
                o.createElement(u.JO, {
                  className: 'cursor-pointer text-base',
                  icon: 'mdi:file-question-outline',
                })
              )
            );
      }
      var N = t(96136),
        f = t(75217),
        B = t(66559),
        h = t(14517),
        I = t(84208),
        M = t(86724),
        R = t.n(M),
        b = t(6494),
        F = t.n(b),
        L = (O, Z, T) =>
          new Promise((V, ue) => {
            var ge = (Me) => {
                try {
                  Ce(T.next(Me));
                } catch (we) {
                  ue(we);
                }
              },
              Be = (Me) => {
                try {
                  Ce(T.throw(Me));
                } catch (we) {
                  ue(we);
                }
              },
              Ce = (Me) =>
                Me.done ? V(Me.value) : Promise.resolve(Me.value).then(ge, Be);
            Ce((T = T.apply(O, Z)).next());
          });
      function G(O, Z) {
        var T;
        const V = (0, n.xMc)(),
          ue = (0, n.rE2)(),
          ge = (0, n.Pc$)(),
          [Be] = (0, n.WHr)(
            (T = ue == null ? void 0 : ue._id) != null ? T : '',
            [n.g3S.core.deleteMessage]
          ),
          Ce = (0, o.useCallback)(() => {
            const _e = window.getSelection();
            if (_e && _e.toString().length > 0) {
              R()(_e.toString()),
                (0, n.jiy)(
                  (0, n.t)('\u590D\u5236\u9009\u4E2D\u6587\u672C\u6210\u529F')
                );
              return;
            }
            R()((0, l.getMessageTextDecorators)().serialize(O.content)),
              (0, n.jiy)(
                (0, n.t)('\u590D\u5236\u6D88\u606F\u6587\u672C\u6210\u529F')
              );
          }, [O.content]),
          [, Me] = (0, n.CoE)(
            () =>
              L(this, null, function* () {
                (yield (0, I.aW)()) &&
                  (yield (0, n.peM)(O._id),
                  (0, n.jiy)((0, n.t)('\u6D88\u606F\u64A4\u56DE\u6210\u529F')));
              }),
            [O._id]
          ),
          [, we] = (0, n.CoE)(
            () =>
              L(this, null, function* () {
                (yield (0, I.aW)()) &&
                  (yield (0, n.$Zg)(O._id),
                  (0, n.jiy)((0, n.t)('\u6D88\u606F\u5220\u9664\u6210\u529F')));
              }),
            [O._id]
          ),
          at = ue && ue.owner === (ge == null ? void 0 : ge._id),
          lt = O.author === (ge == null ? void 0 : ge._id);
        return {
          onClick: Z.onClick,
          items: F()([
            {
              key: 'copy',
              label: (0, n.t)('\u590D\u5236'),
              icon: o.createElement(u.JO, { icon: 'mdi:content-copy' }),
              onClick: Ce,
            },
            V.hasContext && {
              key: 'reply',
              label: (0, n.t)('\u56DE\u590D'),
              icon: o.createElement(u.JO, { icon: 'mdi:reply' }),
              onClick: () => n.Agn.emit('replyMessage', O),
            },
            (at || lt) && {
              key: 'recall',
              label: (0, n.t)('\u64A4\u56DE'),
              icon: o.createElement(u.JO, { icon: 'mdi:restore' }),
              onClick: Me,
            },
            Be && {
              key: 'delete',
              label: (0, n.t)('\u5220\u9664'),
              danger: !0,
              icon: o.createElement(u.JO, { icon: 'mdi:delete-outline' }),
              onClick: we,
            },
          ]),
        };
      }
      var re = t(3139),
        te = t(71607),
        ve = t.n(te),
        ne = Object.defineProperty,
        j = Object.defineProperties,
        g = Object.getOwnPropertyDescriptors,
        K = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        A = (O, Z, T) =>
          Z in O
            ? ne(O, Z, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: T,
              })
            : (O[Z] = T),
        S = (O, Z) => {
          for (var T in Z || (Z = {})) C.call(Z, T) && A(O, T, Z[T]);
          if (K) for (var T of K(Z)) x.call(Z, T) && A(O, T, Z[T]);
          return O;
        },
        q = (O, Z) => j(O, g(Z));
      const ie = o.createContext({ closePopover: ve() }),
        Ie = o.memo((O) => {
          const [Z, T] = (0, o.useState)(!1),
            V = (0, o.useCallback)(
              (Be) => {
                T(Be),
                  typeof O.onOpenChange == 'function' && O.onOpenChange(Be);
              },
              [O.onOpenChange]
            ),
            ue = (0, o.useCallback)(() => {
              T(!1), typeof O.onOpenChange == 'function' && O.onOpenChange(!1);
            }, []),
            ge = (0, o.useMemo)(() => ({ closePopover: ue }), [ue]);
          return o.createElement(
            ie.Provider,
            { value: ge },
            o.createElement(e.Z, q(S({}, O), { open: Z, onOpenChange: V }))
          );
        });
      Ie.displayName = 'TcPopover';
      function Ae() {
        var O;
        const Z = (0, o.useContext)(ie);
        return {
          closePopover:
            (O = Z == null ? void 0 : Z.closePopover) != null ? O : ve(),
        };
      }
      var de = (O, Z, T) =>
        new Promise((V, ue) => {
          var ge = (Me) => {
              try {
                Ce(T.next(Me));
              } catch (we) {
                ue(we);
              }
            },
            Be = (Me) => {
              try {
                Ce(T.throw(Me));
              } catch (we) {
                ue(we);
              }
            },
            Ce = (Me) =>
              Me.done ? V(Me.value) : Promise.resolve(Me.value).then(ge, Be);
          Ce((T = T.apply(O, Z)).next());
        });
      function he(O) {
        const Z = (0, n.ysv)(O);
        return (0, o.useMemo)(
          () => () => {
            const { closePopover: V } = Ae(),
              [, ue] = (0, n.CoE)(
                (ge) =>
                  de(this, null, function* () {
                    yield (0, n.rUo)(Z.current._id, ge), V();
                  }),
                []
              );
            return o.createElement(re._, { onSelect: ue });
          },
          []
        );
      }
      var fe = t(39907),
        Re = t.n(fe),
        je = t(3010),
        ze = t.n(je),
        ke = t(89022),
        qe = t.n(ke),
        Xe = t(95268);
      const Ve = o.memo((O) => {
        const { reaction: Z, onClick: T } = O,
          V = (0, n.R8f)(Z.users);
        return o.createElement(
          'div',
          {
            className:
              'py-0.5 px-1 bg-black bg-opacity-20 hover:bg-opacity-40 rounded cursor-pointer',
          },
          o.createElement(
            Xe.Z,
            { title: V.join(', ') },
            o.createElement(
              'div',
              { className: 'flex', onClick: T },
              o.createElement(re.d, { emoji: Z.name }),
              o.createElement(
                'div',
                { className: 'ml-1 text-xs' },
                V.length < 3
                  ? o.createElement('span', null, qe()(V, 2).join(','))
                  : o.createElement(
                      'span',
                      null,
                      qe()(V, 2).join(', '),
                      ', ...+',
                      V.length - 2
                    )
              )
            )
          )
        );
      });
      Ve.displayName = 'ReactionItem';
      function Ye(O) {
        var Z;
        const T = O._id,
          V = (Z = O.reactions) != null ? Z : [],
          ue = (0, n.IIz)(),
          ge = (0, o.useMemo)(() => {
            const Ce = Re()(V, 'name');
            return Object.keys(Ce).map((Me) => {
              const we = ze()(Ce[Me], 'author');
              return {
                name: Me,
                length: we.length,
                users: we.map((at) => at.author),
              };
            });
          }, [V]),
          Be = (0, o.useCallback)(
            (Ce) => {
              !(0, n.YQu)(ue) ||
                (Ce.users.includes(ue)
                  ? (0, n.WOV)(T, Ce.name)
                  : (0, n.rUo)(T, Ce.name));
            },
            [T, ue]
          );
        return o.createElement(
          'div',
          { className: 'flex chat-message-reactions space-x-1 py-0.5' },
          ge.map((Ce) =>
            o.createElement(Ve, {
              key: Ce.name,
              reaction: Ce,
              onClick: () => Be(Ce),
            })
          )
        );
      }
      var et = t(22398),
        se = t(16365),
        $ = t(51052),
        Ee = t(29787),
        Fe = t.n(Ee),
        Le = Object.defineProperty,
        We = Object.defineProperties,
        Ke = Object.getOwnPropertyDescriptors,
        Te = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        z = (O, Z, T) =>
          Z in O
            ? Le(O, Z, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: T,
              })
            : (O[Z] = T),
        H = (O, Z) => {
          for (var T in Z || (Z = {})) W.call(Z, T) && z(O, T, Z[T]);
          if (Te) for (var T of Te(Z)) _.call(Z, T) && z(O, T, Z[T]);
          return O;
        },
        X = (O, Z) => We(O, Ke(Z));
      const ye = o.memo(({ payload: O }) => {
        const Z = (0, o.useMemo)(() => new n.NtG(O).hasReply(), [O]);
        return Z === !1
          ? null
          : o.createElement(
              'div',
              {
                className:
                  'chat-message-item_quote border-l-4 border-black border-opacity-20 pl-2 opacity-80',
              },
              (0, n.t)('\u56DE\u590D'),
              ' ',
              o.createElement(B.v, { userId: String(Z.author) }),
              ':',
              ' ',
              o.createElement('span', null, (0, l.getMessageRender)(Z.content))
            );
      });
      ye.displayName = 'MessageQuote';
      const Pe = (O) =>
          o.createElement(
            'div',
            {
              className:
                'px-0.5 w-6 h-6 flex justify-center items-center opacity-60 hover:opacity-100',
            },
            o.createElement(u.JO, { icon: O.icon })
          ),
        xe = o.memo((O) => {
          var Z;
          const { showAvatar: T, payload: V, hideAction: ue = !1 } = O,
            ge = (0, n.xzJ)((Z = V.author) != null ? Z : ''),
            [Be, Ce] = (0, o.useState)(!1),
            { settings: Me } = (0, n.Flu)(),
            we = Ye(V),
            at = he(V),
            lt = G(V, {
              onClick: () => {
                Ce(!1);
              },
            }),
            _e = ue === !0 || V.isLocal === !0 || V.sendFailed === !0;
          return o.createElement(
            'div',
            {
              className: (0, h.Z)(
                'chat-message-item flex px-2 mobile:px-0 group relative select-text text-sm',
                {
                  'bg-black bg-opacity-10': Be,
                  'hover:bg-black hover:bg-opacity-5': !Be,
                }
              ),
              'data-message-id': V._id,
            },
            o.createElement(
              'div',
              {
                className:
                  'w-18 mobile:w-14 flex items-start justify-center pt-0.5',
              },
              T
                ? o.createElement(
                    e.Z,
                    {
                      content:
                        !Fe()(ge) && o.createElement($.Z, { userInfo: ge }),
                      placement: 'top',
                      trigger: 'click',
                    },
                    o.createElement(u.qE, {
                      className: 'cursor-pointer',
                      size: 40,
                      src: ge.avatar,
                      name: ge.nickname,
                    })
                  )
                : o.createElement(
                    'div',
                    { className: 'hidden group-hover:block opacity-40' },
                    (0, n.vMv)(V.createdAt)
                  )
            ),
            o.createElement(
              N.Z,
              {
                menu: lt,
                placement: 'bottomLeft',
                trigger: ['contextMenu'],
                disabled: Me.disableMessageContextMenu,
                onOpenChange: Ce,
              },
              o.createElement(
                'div',
                {
                  className: 'flex flex-col flex-1 overflow-auto group',
                  onContextMenu: et.UW,
                },
                T &&
                  o.createElement(
                    'div',
                    { className: 'flex items-center' },
                    o.createElement(
                      'div',
                      { className: 'font-bold' },
                      ge.nickname || o.createElement('span', null, '\xA0')
                    ),
                    o.createElement(
                      'div',
                      {
                        className:
                          'hidden group-hover:block opacity-40 ml-1 text-sm',
                      },
                      (0, n.vMv)(V.createdAt)
                    )
                  ),
                o.createElement(
                  u.wb,
                  {
                    maxHeight: 340,
                    backgroundColor: 'var(--tc-content-background-color)',
                    showFullText: o.createElement(
                      'div',
                      {
                        className:
                          'inline-block rounded-full bg-white dark:bg-black opacity-80 py-2 px-3 hover:opacity-100',
                      },
                      (0, n.t)('\u70B9\u51FB\u5C55\u5F00\u66F4\u591A')
                    ),
                  },
                  o.createElement(
                    'div',
                    {
                      className: 'chat-message-item_body leading-6 break-words',
                    },
                    o.createElement(ye, { payload: V }),
                    o.createElement(
                      'span',
                      null,
                      (0, l.getMessageRender)(V.content)
                    ),
                    V.sendFailed === !0 &&
                      o.createElement(u.JO, {
                        className: 'inline-block ml-1',
                        icon: 'emojione:cross-mark-button',
                      }),
                    a(V.content)
                  )
                ),
                o.createElement(
                  'div',
                  null,
                  l.pluginMessageExtraParsers.map((rt) =>
                    o.createElement(o.Fragment, { key: rt.name }, rt.render(V))
                  )
                ),
                we
              )
            ),
            !_e &&
              o.createElement(
                'div',
                {
                  className: (0, h.Z)(
                    'bg-white dark:bg-black rounded absolute right-2 cursor-pointer -top-3 shadow-sm flex',
                    {
                      'opacity-0 group-hover:opacity-100 bg-opacity-80 hover:bg-opacity-100':
                        !Be,
                      'opacity-100 bg-opacity-100': Be,
                    }
                  ),
                },
                o.createElement(
                  Ie,
                  {
                    overlayClassName: 'chat-message-item_action-popover',
                    content: at,
                    placement: 'bottomLeft',
                    trigger: ['click'],
                    onOpenChange: Ce,
                  },
                  o.createElement(
                    'div',
                    null,
                    o.createElement(Pe, { icon: 'mdi:emoticon-happy-outline' })
                  )
                ),
                o.createElement(
                  N.Z,
                  {
                    menu: lt,
                    placement: 'bottomRight',
                    trigger: ['click'],
                    onOpenChange: Ce,
                  },
                  o.createElement(
                    'div',
                    null,
                    o.createElement(Pe, { icon: 'mdi:dots-horizontal' })
                  )
                )
              )
          );
        });
      xe.displayName = 'NormalMessage';
      const Ne = o.memo(({ payload: O }) =>
        o.createElement(
          'div',
          { className: 'text-center' },
          o.createElement(
            'div',
            {
              className:
                'bg-black bg-opacity-20 rounded inline-block py-0.5 px-2 my-1 mx-2 text-sm',
            },
            O.content
          )
        )
      );
      Ne.displayName = 'SystemMessage';
      const Ge = o.memo((O) => {
        const T = (0, n.FDf)(O.userIds).map((V) => V.nickname);
        return o.createElement(
          Ne,
          X(H({}, O), { payload: O.overwritePayload(T) })
        );
      });
      Ge.displayName = 'SystemMessageWithNickname';
      const me = o.memo((O) => {
        var Z;
        const T = O.payload;
        return T.author === n.q6$
          ? o.createElement(Ne, H({}, O))
          : T.hasRecall === !0
          ? o.createElement(
              Ge,
              X(H({}, O), {
                userIds: [(Z = T.author) != null ? Z : n.q6$],
                overwritePayload: (V) =>
                  X(H({}, T), {
                    content: (0, n.t)(
                      '{{nickname}} \u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F',
                      { nickname: V[0] || '' }
                    ),
                  }),
              })
            )
          : o.createElement(xe, H({}, O));
      });
      me.displayName = 'ChatMessageItem';
      function Ze(O, Z) {
        var T, V;
        const ue = O[Z];
        if (!ue) return o.createElement('div', null);
        let ge = !0,
          Be = !0;
        const Ce = new Date((T = ue.createdAt) != null ? T : '');
        if (Z > 0) {
          const Me = O[Z - 1];
          (0, n.Nvc)(new Date((V = Me.createdAt) != null ? V : ''), Ce) ||
            (ge = !1),
            ge === !1 && (Be = Me.author !== ue.author || Me.hasRecall === !0);
        }
        return o.createElement(
          'div',
          { key: ue._id },
          ge &&
            o.createElement(
              f.Z,
              { className: 'text-sm opacity-40 px-6 font-normal select-text' },
              (0, n.omK)(Ce)
            ),
          ue.isLocal === !0
            ? o.createElement(
                'div',
                { className: 'opacity-50' },
                o.createElement(me, { showAvatar: Be, payload: ue })
              )
            : o.createElement(
                se.H,
                { converseId: ue.converseId, messageId: ue._id },
                o.createElement(me, { showAvatar: Be, payload: ue })
              )
        );
      }
    },
    81244: (Oe, Y, t) => {
      t.d(Y, { X: () => B });
      var o = t(52983),
        n = t(26288),
        l = t(93540);
      const u = o.memo((h) =>
        o.createElement(
          'div',
          { className: 'px-5 pb-4 pt-8' },
          o.createElement(
            'div',
            {
              className:
                'font-extrabold mb-2 text-2xl flex items-center space-x-1',
            },
            o.createElement(l.JO, { icon: 'mdi:pound' }),
            o.createElement('div', null, h.title)
          ),
          o.createElement(
            'div',
            { className: 'text-base opacity-80' },
            (0, n.t)(
              '\u8FD9\u91CC\u662F\u6240\u6709\u6D88\u606F\u7684\u5F00\u59CB\uFF0C\u8BF7\u7545\u6240\u6B32\u8A00\u3002'
            )
          )
        )
      );
      u.displayName = 'ChatMessageHeader';
      var e = t(75209),
        a = t(79861);
      const N = 100,
        f = 40,
        B = o.memo((h) => {
          const I = (0, o.useRef)(null),
            M = (0, o.useRef)(!1),
            [R, b] = (0, o.useState)(!1),
            F = (0, n.zX9)(() => {
              var G;
              (G = I.current) == null ||
                G.scrollTo({ top: 0, behavior: 'smooth' });
            });
          (0, o.useEffect)(() => {
            h.messages.length !== 0 && M.current === !1 && F();
          }, [h.messages.length]),
            (0, n.JtK)('sendMessage', F);
          const L = (0, n.zX9)(() => {
            h.messages.length !== 0 &&
              (!I.current ||
                (-I.current.scrollTop <= f
                  ? ((M.current = !1), b(!1))
                  : -I.current.scrollTop + I.current.clientHeight >=
                    I.current.scrollHeight - N
                  ? h.onLoadMore()
                  : ((M.current = !0), b(!0))));
          });
          return o.createElement(
            'div',
            {
              className:
                'flex-1 overflow-y-scroll overflow-x-hidden flex flex-col-reverse',
              ref: I,
              onScroll: L,
            },
            o.createElement(
              'div',
              null,
              h.messages.map((G, re, te) => (0, e.d)(te, re))
            ),
            R && o.createElement(a.a, { onClick: F }),
            h.title &&
              !h.hasMoreMessage &&
              o.createElement(u, { title: h.title })
          );
        });
      B.displayName = 'NormalMessageList';
    },
    79861: (Oe, Y, t) => {
      t.d(Y, { a: () => l });
      var o = t(52983),
        n = t(93540);
      const l = o.memo((u) =>
        o.createElement(
          'div',
          {
            className:
              'absolute right-10 bottom-18 px-3 py-2 rounded-full bg-white dark:bg-black bg-opacity-50 shadow cursor-pointer z-10 w-11 h-11 flex justify-center items-center text-2xl hover:bg-opacity-80',
            onClick: u.onClick,
          },
          o.createElement(n.JO, { icon: 'mdi:chevron-double-down' })
        )
      );
      l.displayName = 'ScrollToBottom';
    },
    96536: (Oe, Y, t) => {
      t.d(Y, { r: () => rt });
      var o = t(21513),
        n = t(52983),
        l = t(26288),
        u = t(21597),
        e = t(55696);
      const a = n.memo(() => {
        const m = { rows: 1 };
        return n.createElement(
          'div',
          { className: 'px-2 w-2/3' },
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          }),
          n.createElement(e.Z, {
            className: 'mb-2',
            active: !0,
            avatar: !0,
            paragraph: m,
          })
        );
      });
      a.displayName = 'ChatBoxPlaceholder';
      var N = t(64750),
        f = t(93540),
        B = t(96136),
        h = t(29254),
        I = t(84208),
        M = t(63933),
        R = t(44411),
        b = t(75526),
        F = (m, P, E) =>
          new Promise((ee, Q) => {
            var ce = (k) => {
                try {
                  ae(E.next(k));
                } catch (J) {
                  Q(J);
                }
              },
              oe = (k) => {
                try {
                  ae(E.throw(k));
                } catch (J) {
                  Q(J);
                }
              },
              ae = (k) =>
                k.done ? ee(k.value) : Promise.resolve(k.value).then(ce, oe);
            ae((E = E.apply(m, P)).next());
          });
      const L = n.memo((m) => {
        const { imageUrl: P, forceUploadOriginImage: E } = m,
          ee = (0, n.useRef)({ width: 0, height: 0 }),
          [Q, ce] = (0, n.useState)(E ?? !1),
          [{ loading: oe }, ae] = (0, l.ilX)(
            () =>
              F(void 0, null, function* () {
                if (ee.current.width === 0 || ee.current.height === 0) {
                  (0, l.lHp)(
                    (0, l.t)('\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41'),
                    'warning'
                  );
                  return;
                }
                typeof m.onConfirm == 'function' &&
                  (yield Promise.resolve(
                    m.onConfirm({ size: ee.current, uploadOriginImage: Q })
                  ));
              }),
            [m.onConfirm, Q]
          );
        (0, M.q)(
          (J) => {
            (0, N.rR)(J)
              ? (J.stopPropagation(), J.preventDefault(), ae())
              : (0, N.$)(J) && (J.stopPropagation(), m.onCancel());
          },
          { capture: !0 }
        );
        const k = (0, n.useCallback)((J) => {
          const Ue = J.currentTarget;
          ee.current = { width: Ue.naturalWidth, height: Ue.naturalHeight };
        }, []);
        return n.createElement(
          I.AB,
          { style: { maxHeight: '60vh', maxWidth: '60vw' } },
          n.createElement(
            'div',
            { className: 'flex' },
            n.createElement(
              'div',
              { className: 'w-2/3 p-2.5 bg-black bg-opacity-20 rounded' },
              n.createElement('img', {
                className: 'max-h-72 m-auto',
                src: P,
                onLoad: k,
              })
            ),
            n.createElement(
              'div',
              {
                className: 'w-1/3 p-2 flex flex-col items-end justify-between',
              },
              n.createElement(
                'div',
                { className: 'text-right' },
                n.createElement(
                  'div',
                  { className: 'text-lg' },
                  (0, l.t)('\u4E0A\u4F20\u56FE\u7247\u5230\u4F1A\u8BDD')
                ),
                n.createElement(
                  'div',
                  { className: 'text-sm text-gray-400' },
                  (0, l.t)(
                    '\u8BF7\u52FF\u4E0A\u4F20\u8FDD\u53CD\u5F53\u5730\u6CD5\u5F8B\u6CD5\u89C4\u7684\u56FE\u7247'
                  )
                )
              ),
              n.createElement(
                'div',
                { className: 'w-full' },
                n.createElement(
                  'div',
                  { className: 'text-left' },
                  n.createElement(R.Z, {
                    disabled: typeof E != 'undefined',
                    checked: Q,
                    onChange: (J) => ce(J),
                  }),
                  n.createElement(
                    'span',
                    null,
                    (0, l.t)('\u4E0A\u4F20\u539F\u56FE')
                  )
                ),
                n.createElement(
                  'div',
                  { className: 'text-right' },
                  n.createElement(
                    b.Z,
                    {
                      className: 'mt-4',
                      type: 'primary',
                      loading: oe,
                      onClick: ae,
                    },
                    (0, l.t)('\u786E\u8BA4')
                  )
                )
              )
            )
          )
        );
      });
      L.displayName = 'ImageUploadPreviewer';
      var G = t(74774),
        re = t(83996),
        te = (m, P, E) =>
          new Promise((ee, Q) => {
            var ce = (k) => {
                try {
                  ae(E.next(k));
                } catch (J) {
                  Q(J);
                }
              },
              oe = (k) => {
                try {
                  ae(E.throw(k));
                } catch (J) {
                  Q(J);
                }
              },
              ae = (k) =>
                k.done ? ee(k.value) : Promise.resolve(k.value).then(ce, oe);
            ae((E = E.apply(m, P)).next());
          });
      function ve(m) {
        return new Promise((P) => {
          (0, G.Fy)(m).then((E) => {
            const ee = (0, I.h7)(
              n.createElement(L, {
                imageUrl: E,
                forceUploadOriginImage: (0, re.w)(m.type) ? void 0 : !0,
                onCancel: () => {
                  (0, I.Mr)(ee);
                },
                onConfirm: (Q) =>
                  te(this, null, function* () {
                    let ce = m;
                    if (Q.uploadOriginImage === !1) {
                      const J = m.size;
                      ce = yield (0, G.hv)(m);
                      const Ue = ce.size;
                      console.log(
                        `\u538B\u7F29\u7ED3\u679C: ${
                          (Ue / J) * 100
                        }%(${J} -> ${Ue})`
                      );
                    }
                    const k = (yield (0, l.cTq)(ce, { usage: 'chat' })).url;
                    P({ url: k, width: Q.size.width, height: Q.size.height }),
                      (0, I.Mr)(ee);
                  }),
              })
            );
          });
        });
      }
      function ne(m) {
        return te(this, null, function* () {
          const P = yield (0, l.cTq)(m, { usage: 'chat' });
          return { name: m.name || P.etag, url: P.url };
        });
      }
      var j = t(14517),
        g = (m, P, E) =>
          new Promise((ee, Q) => {
            var ce = (k) => {
                try {
                  ae(E.next(k));
                } catch (J) {
                  Q(J);
                }
              },
              oe = (k) => {
                try {
                  ae(E.throw(k));
                } catch (J) {
                  Q(J);
                }
              },
              ae = (k) =>
                k.done ? ee(k.value) : Promise.resolve(k.value).then(ce, oe);
            ae((E = E.apply(m, P)).next());
          });
      const K = n.memo(() => {
        const [m, P] = (0, n.useState)(!1),
          E = (0, h.at)();
        if (E === null) return null;
        const ee = (oe) => {
            const ae = oe;
            ae &&
              ve(ae).then(({ url: k, width: J, height: Ue }) => {
                E.sendMsg(
                  (0, o.getMessageTextDecorators)().image(k, {
                    width: J,
                    height: Ue,
                  })
                );
              });
          },
          Q = (oe) => {
            oe &&
              ne(oe).then(({ name: ae, url: k }) => {
                E.sendMsg(
                  (0, o.getMessageTextDecorators)().card(ae, {
                    type: 'file',
                    url: k,
                  })
                );
              });
          },
          ce = {
            items: [
              {
                key: 'send-image',
                label: (0, l.t)('\u53D1\u9001\u56FE\u7247'),
                onClick: () =>
                  g(void 0, null, function* () {
                    P(!1);
                    const oe = yield (0, G.ZB)({ accept: 'image/*' });
                    oe && ee(oe);
                  }),
              },
              {
                key: 'send-file',
                label: (0, l.t)('\u53D1\u9001\u6587\u4EF6'),
                onClick: () =>
                  g(void 0, null, function* () {
                    P(!1);
                    const oe = yield (0, G.ZB)();
                    oe && Q(oe);
                  }),
              },
              ...o.pluginChatInputActions.map((oe, ae) => ({
                key: oe.label + ae,
                label: oe.label,
                onClick: () => {
                  oe.onClick(E), P(!1);
                },
              })),
            ],
          };
        return n.createElement(
          B.Z,
          {
            menu: ce,
            open: m,
            onOpenChange: P,
            placement: 'topRight',
            trigger: ['click'],
          },
          n.createElement(
            'div',
            null,
            n.createElement(f.JO, {
              className: (0, j.Z)(
                'text-2xl cursor-pointer transition transform',
                { 'rotate-45': m }
              ),
              icon: 'mdi:plus-circle-outline',
            })
          )
        );
      });
      K.displayName = 'ChatInputAddon';
      class C {
        constructor(P) {
          this.event = P;
        }
        get data() {
          return this.event.clipboardData;
        }
        get builtinHandlers() {
          const P = {
            name: 'pasteUrl',
            label: (0, l.t)('\u8F6C\u4E3AUrl\u5BCC\u6587\u672C'),
            match: (E) =>
              E.clipboardData.getData('text/plain').startsWith('http'),
            handler: (E, { applyMessage: ee }) => {
              ee((0, o.getMessageTextDecorators)().url(E.text));
            },
          };
          return [];
        }
        get pasteHandlers() {
          return [...this.builtinHandlers, ...o.pluginChatInputPasteHandler];
        }
        hasImage() {
          const P = this.isPasteImage(this.data.items);
          if (P === !1) return !1;
          const E = P.getAsFile();
          return E === null ? !1 : E;
        }
        matchPasteHandler() {
          return this.pasteHandlers.filter((E) => E.match(this.event));
        }
        isPasteImage(P) {
          let E = 0,
            ee;
          for (; E < P.length; ) {
            if (((ee = P[E]), ee.type.indexOf('image') !== -1)) return ee;
            E++;
          }
          return !1;
        }
      }
      var x = t(9021),
        A = t(22398),
        S = t(49723);
      const q = n.memo((m) =>
        n.createElement(
          'div',
          { className: 'flex items-center py-2 px-3' },
          n.createElement(f.JO, { className: 'mr-1 text-lg', icon: m.icon }),
          n.createElement('div', null, m.label)
        )
      );
      q.displayName = 'MentionCommandItem';
      const ie = {
          input: { overflow: 'auto', maxHeight: 70 },
          highlighter: {
            boxSizing: 'border-box',
            overflow: 'hidden',
            maxHeight: 70,
          },
        },
        Ie = n.memo((m) => {
          const {
              users: P,
              panels: E,
              placeholder: ee,
              disabled: Q,
            } = (0, h.TD)(),
            ce = (0, o.useGroupIdContext)(),
            oe = (0, l.iFL)(ce),
            { hideGroupMemberDiscriminator: ae } = (0, l.r3q)(oe);
          return n.createElement(
            S.r,
            {
              inputRef: m.inputRef,
              className: 'chatbox-mention-input',
              placeholder:
                ee ?? (0, l.t)('\u8F93\u5165\u4E00\u4E9B\u4EC0\u4E48'),
              disabled: Q,
              style: ie,
              maxLength: 1e3,
              value: m.value,
              onChange: (k, J, Ue, tt) =>
                m.onChange(
                  J,
                  tt
                    .filter((be) => be.display.startsWith('@'))
                    .map((be) => be.id)
                ),
              onKeyDown: m.onKeyDown,
              onPaste: m.onPaste,
              onContextMenu: A.UW,
              allowSuggestionsAboveCursor: !0,
              forceSuggestionsAboveCursor: !0,
            },
            n.createElement(S.p, {
              trigger: '@',
              data: (k) =>
                (P ?? [])
                  .filter((J) => {
                    var Ue;
                    return (Ue = J.display) == null ? void 0 : Ue.includes(k);
                  })
                  .slice(0, 20),
              displayTransform: (k, J) => `@${J}`,
              appendSpaceOnAdd: !0,
              renderSuggestion: (k) =>
                n.createElement(x.Q, {
                  userId: String(k.id),
                  hideDiscriminator: ae,
                }),
              markup: (0, o.getMessageTextDecorators)().mention(
                '__id__',
                '__display__'
              ),
            }),
            n.createElement(S.p, {
              trigger: '#',
              data: E ?? [],
              displayTransform: (k, J) => `#${J}`,
              appendSpaceOnAdd: !0,
              renderSuggestion: (k) => {
                var J;
                return n.createElement(q, {
                  icon: 'mdi:pound',
                  label: (J = k.display) != null ? J : String(k.id),
                });
              },
              markup: (0, o.getMessageTextDecorators)().url(
                '__id__',
                '#__display__'
              ),
            })
          );
        });
      Ie.displayName = 'ChatInputBoxInput';
      var Ae = t(3139),
        de = t(28723);
      const he = n.memo(() => {
        const m = (0, h.at)(),
          { appendMsg: P } = m;
        return n.createElement(de.L, {
          overlayClassName: 'emotion-popover',
          icon: 'mdi:emoticon-happy-outline',
          popoverContent: ({ hidePopover: E }) =>
            n.createElement(Ae._, {
              onSelect: (ee) => {
                P(ee), E();
              },
            }),
        });
      });
      he.displayName = 'ChatInputEmotion';
      var fe = t(90292),
        Re = t.n(fe),
        je = t(37980),
        ze = t(22659);
      const ke = n.memo(() => {
        const m = (0, h.at)(),
          P = (0, l.zX9)((Q) => {
            const ce = Q[0];
            !ce ||
              (ce.type.startsWith('image/')
                ? ve(ce).then(({ url: oe, width: ae, height: k }) => {
                    m == null ||
                      m.sendMsg(
                        (0, o.getMessageTextDecorators)().image(oe, {
                          width: ae,
                          height: k,
                        })
                      );
                  })
                : ne(ce).then(({ url: oe, name: ae }) => {
                    m == null ||
                      m.sendMsg(
                        (0, o.getMessageTextDecorators)().card(ae, {
                          type: 'file',
                          url: oe,
                        })
                      );
                  }));
          }),
          [E, ee] = (0, je.L)({
            accept: [ze.FILE],
            drop(Q) {
              P(Q.files);
            },
            canDrop(Q) {
              return !0;
            },
            collect: (Q) => ({ isOver: Q.isOver(), canDrop: Q.canDrop() }),
          });
        return E.canDrop
          ? n.createElement(
              'div',
              {
                ref: ee,
                className:
                  'absolute inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-4',
              },
              n.createElement(
                'div',
                {
                  className:
                    'h-full w-full border-dashed border-8 flex flex-col justify-center items-center',
                },
                n.createElement(
                  'div',
                  null,
                  n.createElement(f.JO, {
                    icon: 'mdi:cloud-upload',
                    fontSize: 128,
                  })
                ),
                n.createElement(
                  'div',
                  { className: 'text-xl font-bold' },
                  (0, l.t)(
                    '\u62D6\u653E\u6587\u4EF6\u4EE5\u53D1\u9001\u5230\u5F53\u524D\u4F1A\u8BDD'
                  )
                )
              )
            )
          : null;
      });
      ke.displayName = 'ChatDropArea';
      function qe() {
        const [m, P] = (0, n.useState)(null);
        return (
          (0, M.q)((Q) => {
            m !== null && ((0, N.ks)(Q) || (0, N.FF)(Q)) && P(null);
          }),
          {
            runPasteHandlers: (0, l.zX9)((Q, ce, oe) => {
              const ae = ce.clipboardData,
                k = { files: ae.files, text: ae.getData('text/plain') };
              Q.length === 1
                ? (console.log(`Running paste handler: ${Q[0].name}`),
                  ce.stopPropagation(),
                  ce.preventDefault(),
                  Q[0].handler(k, oe))
                : Q.length >= 2 &&
                  P(
                    n.createElement(
                      'div',
                      {
                        className:
                          'absolute bottom-2 bg-content-light bg-opacity-90 dark:bg-content-dark dark:bg-opacity-90 border dark:border-gray-900 shadow rounded px-2 py-1 space-y-1 w-72',
                      },
                      n.createElement(
                        'div',
                        null,
                        (0, l.t)(
                          '\u770B\u8D77\u6765\u6709\u591A\u4E2A\u526A\u5207\u677F\u5904\u7406\u5DE5\u5177\u88AB\u540C\u65F6\u5339\u914D\uFF0C\u8BF7\u9009\u62E9\u5176\u4E2D\u4E00\u9879\u6216\u8005\u5FFD\u7565'
                        )
                      ),
                      Q.map((J) =>
                        n.createElement(
                          'div',
                          {
                            key: J.name,
                            className:
                              'bg-black bg-opacity-40 hover:bg-opacity-80 rounded px-2 py-1 cursor-pointer',
                            onClick: () => {
                              console.log(`Running paste handler: ${J.name}`),
                                J.handler(k, oe),
                                P(null);
                            },
                          },
                          J.label
                        )
                      )
                    )
                  );
            }),
            pasteHandlerContainer: n.createElement(
              'div',
              { className: 'absolute top-0' },
              m
            ),
          }
        );
      }
      var Xe = (m, P, E) =>
        new Promise((ee, Q) => {
          var ce = (k) => {
              try {
                ae(E.next(k));
              } catch (J) {
                Q(J);
              }
            },
            oe = (k) => {
              try {
                ae(E.throw(k));
              } catch (J) {
                Q(J);
              }
            },
            ae = (k) =>
              k.done ? ee(k.value) : Promise.resolve(k.value).then(ce, oe);
          ae((E = E.apply(m, P)).next());
        });
      const Ve = n.memo((m) => {
        const P = (0, n.useRef)(null),
          [E, ee] = (0, n.useState)(''),
          [Q, ce] = (0, n.useState)([]),
          { disabled: oe } = (0, h.TD)(),
          { runPasteHandlers: ae, pasteHandlerContainer: k } = qe(),
          J = (0, l.zX9)((Se, He) =>
            Xe(void 0, null, function* () {
              var ot;
              yield m.onSendMsg(Se, He),
                ee(''),
                (ot = P.current) == null || ot.focus();
            })
          ),
          Ue = (0, l.zX9)(() => {
            J(E, { mentions: Re()(Q) });
          }),
          tt = (0, l.zX9)((Se) => {
            var He;
            ee(E + Se), (He = P.current) == null || He.focus();
          }),
          be = (0, l.zX9)((Se) => {
            (0, N.rR)(Se.nativeEvent) && (Se.preventDefault(), Ue());
          }),
          Je = (0, l.zX9)((Se) => {
            const He = Se.currentTarget,
              ot = new C(Se);
            if (!He.value) {
              const it = ot.matchPasteHandler();
              if (it.length > 0) {
                ae(it, Se, { sendMessage: J, applyMessage: ee });
                return;
              }
            }
            const st = ot.hasImage();
            st &&
              (Se.preventDefault(),
              ve(st).then(({ url: it, width: ct, height: vt }) => {
                m.onSendMsg(
                  (0, o.getMessageTextDecorators)().image(it, {
                    width: ct,
                    height: vt,
                  })
                );
              }));
          });
        return (
          (0, l.JtK)('replyMessage', (Se) =>
            Xe(void 0, null, function* () {
              if (
                P.current &&
                (P.current.focus(),
                Se && (0, l.YQu)(Se == null ? void 0 : Se.author))
              ) {
                const He = yield (0, l.pGV)(Se.author);
                ee(
                  `${(0, o.getMessageTextDecorators)().mention(
                    Se.author,
                    He.nickname
                  )} ${E}`
                );
              }
            })
          ),
          n.createElement(
            h.zB.Provider,
            {
              value: {
                message: E,
                setMessage: ee,
                sendMsg: m.onSendMsg,
                appendMsg: tt,
              },
            },
            n.createElement(
              'div',
              { className: 'px-4 py-2' },
              n.createElement(
                'div',
                {
                  className:
                    'bg-white dark:bg-gray-600 flex rounded-md items-center relative',
                },
                n.createElement(
                  'div',
                  { className: 'flex-1 w-0' },
                  n.createElement(Ie, {
                    inputRef: P,
                    value: E,
                    onChange: (Se, He) => {
                      ee(Se), ce(He);
                    },
                    onKeyDown: be,
                    onPaste: Je,
                  })
                ),
                k,
                !oe &&
                  n.createElement(
                    'div',
                    { className: 'px-2 flex space-x-1' },
                    o.pluginChatInputButtons.map((Se, He) =>
                      n.cloneElement(Se.render(), {
                        key: `plugin-chatinput-btn#${He}`,
                      })
                    ),
                    n.createElement(he, null),
                    E
                      ? n.createElement(f.JO, {
                          icon: 'mdi:send-circle-outline',
                          className: 'text-2xl cursor-pointer',
                          onClick: Ue,
                        })
                      : n.createElement(K, null)
                  )
              )
            ),
            !oe && n.createElement(ke, null)
          )
        );
      });
      Ve.displayName = 'ChatInputBox';
      var Ye = t(38887),
        et = t(81244),
        se = t(75209),
        $ = t(6342),
        Ee = t(79861),
        Fe = Math.pow;
      const Le = Fe(10, 7),
        We = { height: '100%' },
        Ke = { main: 1e3, reverse: 1e3 },
        Te = n.memo((m) => {
          const P = (0, n.useRef)(null),
            E = (0, n.useRef)(),
            ee = W(m.messages),
            Q = (0, l.nWw)(() => {
              var be, Je;
              (Je = P.current) == null ||
                Je.scrollTo({
                  top: (be = E.current) == null ? void 0 : be.scrollHeight,
                  behavior: 'smooth',
                });
            });
          (0, l.JtK)('sendMessage', Q);
          const ce = (0, l.nWw)(() => {
              m.isLoadingMore || (m.hasMoreMessage && m.onLoadMore());
            }),
            oe = (0, l.nWw)(
              (be) => (
                be &&
                  setTimeout(() => {
                    var Je;
                    (Je = P.current) == null || Je.autoscrollToBottom();
                  }, 20),
                be ? 'smooth' : !1
              )
            ),
            ae = (0, l.nWw)((be, Je) => (Je ? Je._id : be)),
            k = (0, l.nWw)((be) => {
              const Je = be + ee - Le;
              return (0, se.d)(m.messages, Je);
            }),
            [J, Ue] = (0, n.useState)(!1),
            tt = (0, l.nWw)((be) => {
              Ue(!be);
            });
          return n.createElement(
            'div',
            { className: 'flex-1' },
            n.createElement($.OO, {
              style: We,
              ref: P,
              scrollerRef: (be) => (E.current = be),
              firstItemIndex: Le - ee,
              initialTopMostItemIndex: Math.max(m.messages.length - 1, 0),
              computeItemKey: ae,
              totalCount: m.messages.length,
              overscan: Ke,
              itemContent: k,
              alignToBottom: !0,
              startReached: ce,
              atBottomStateChange: tt,
              followOutput: oe,
              defaultItemHeight: 25,
              atTopThreshold: 100,
              atBottomThreshold: 40,
              useWindowScroll: !1,
            }),
            J && n.createElement(Ee.a, { onClick: Q })
          );
        });
      Te.displayName = 'VirtualizedMessageList';
      function W(m) {
        var P;
        const E = (P = m == null ? void 0 : m[0]) == null ? void 0 : P._id,
          ee = (0, n.useRef)(E),
          Q = (0, n.useRef)(E),
          ce = (0, n.useRef)(0);
        return (0, n.useMemo)(() => {
          if (!m || !m.length) return 0;
          if (E === Q.current) return ce.current;
          ee.current || (ee.current = E), (Q.current = E);
          for (let ae = ce.current; ae < m.length; ae += 1)
            if (m[ae]._id === ee.current) return (ce.current = ae), ae;
          return 0;
        }, [m, m == null ? void 0 : m.length]);
      }
      var _ = Object.defineProperty,
        z = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        X = Object.prototype.propertyIsEnumerable,
        ye = (m, P, E) =>
          P in m
            ? _(m, P, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: E,
              })
            : (m[P] = E),
        Pe = (m, P) => {
          for (var E in P || (P = {})) H.call(P, E) && ye(m, E, P[E]);
          if (z) for (var E of z(P)) X.call(P, E) && ye(m, E, P[E]);
          return m;
        };
      const xe = n.memo((m) => {
        const { value: P, loading: E } = (0, l.cvI)(
          'messageListVirtualization',
          !1
        );
        return E
          ? n.createElement(
              'div',
              { className: 'flex-1' },
              n.createElement(Ye.T, null)
            )
          : P
          ? n.createElement(Te, Pe({}, m))
          : n.createElement(et.X, Pe({}, m));
      });
      xe.displayName = 'ChatMessageList';
      var Ne = t(14698),
        Ge = t.n(Ne),
        me = t(66559);
      const Ze = n.memo(() => {
        const { replyMsg: m, setReplyMsg: P, clearReplyMsg: E } = (0, l.xMc)();
        return (
          (0, l.JtK)('replyMessage', (ee) => {
            P(ee);
          }),
          Ge()(m)
            ? null
            : n.createElement(
                'div',
                { className: 'relative' },
                n.createElement(
                  'div',
                  { className: 'absolute bottom-0 left-0 right-0 py-1 px-4' },
                  n.createElement(
                    'div',
                    {
                      className:
                        'rounded bg-white dark:bg-gray-800 p-2 max-h-44 overflow-auto shadow-sm relative',
                    },
                    n.createElement(
                      'span',
                      { className: 'align-top' },
                      (0, l.t)('\u56DE\u590D'),
                      ' ',
                      m.author && n.createElement(me.v, { userId: m.author }),
                      ':',
                      ' '
                    ),
                    n.createElement(
                      'span',
                      null,
                      (0, o.getMessageRender)(m.content)
                    ),
                    n.createElement(f.JO, {
                      className:
                        'absolute right-1 top-0.5 text-lg cursor-pointer opacity-60 hover:opacity-80',
                      icon: 'mdi:close-circle-outline',
                      onClick: E,
                    })
                  )
                )
              )
        );
      });
      Ze.displayName = 'ChatReply';
      var O = t(15138);
      function Z(m) {
        return Object.keys(O.c.emojis).includes(m);
      }
      function T(m) {
        const P = m.indexOf(':');
        return P > -1
          ? P === m.length - 1
            ? ((m = m.substring(0, P)), T(m))
            : ((m = m.substr(P + 1)), T(m))
          : m;
      }
      const V = /:([a-zA-Z0-9_\-\+]+):/g;
      function ue(m) {
        return (
          (m = String(m).trim()),
          (m = m.replace(V, (P) => {
            const E = T(P);
            return Z(E) ? (0, o.getMessageTextDecorators)().emoji(E) : P;
          })),
          m
        );
      }
      var ge = Object.defineProperty,
        Be = Object.getOwnPropertySymbols,
        Ce = Object.prototype.hasOwnProperty,
        Me = Object.prototype.propertyIsEnumerable,
        we = (m, P, E) =>
          P in m
            ? ge(m, P, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: E,
              })
            : (m[P] = E),
        at = (m, P) => {
          for (var E in P || (P = {})) Ce.call(P, E) && we(m, E, P[E]);
          if (Be) for (var E of Be(P)) Me.call(P, E) && we(m, E, P[E]);
          return m;
        },
        lt = (m, P, E) =>
          new Promise((ee, Q) => {
            var ce = (k) => {
                try {
                  ae(E.next(k));
                } catch (J) {
                  Q(J);
                }
              },
              oe = (k) => {
                try {
                  ae(E.throw(k));
                } catch (J) {
                  Q(J);
                }
              },
              ae = (k) =>
                k.done ? ee(k.value) : Promise.resolve(k.value).then(ce, oe);
            ae((E = E.apply(m, P)).next());
          });
      const _e = n.memo((m) => {
        const { converseId: P, converseTitle: E } = m,
          {
            messages: ee,
            loading: Q,
            error: ce,
            isLoadingMore: oe,
            hasMoreMessage: ae,
            fetchMoreMessage: k,
            sendMessage: J,
          } = (0, l.FNv)();
        return Q
          ? n.createElement(a, null)
          : ce
          ? n.createElement(u.o, { error: ce })
          : n.createElement(
              'div',
              {
                className:
                  'w-full h-full flex flex-col select-text relative text-sm',
              },
              n.createElement(xe, {
                key: P,
                title: E,
                messages: ee,
                isLoadingMore: oe,
                hasMoreMessage: ae,
                onLoadMore: k,
              }),
              n.createElement(Ze, null),
              n.createElement(Ve, {
                onSendMsg: (Ue, tt) =>
                  lt(void 0, null, function* () {
                    const be = ue(Ue);
                    yield J({
                      converseId: m.converseId,
                      groupId: m.groupId,
                      content: be,
                      plain: (0, o.getMessageTextDecorators)().serialize(be),
                      meta: tt,
                    });
                  }),
              })
            );
      });
      _e.displayName = 'ChatBoxInner';
      const rt = n.memo((m) =>
        n.createElement(
          l.gvw,
          null,
          n.createElement(
            l.$Ib,
            { converseId: m.converseId, isGroup: m.isGroup },
            n.createElement(_e, at({}, m))
          )
        )
      );
      rt.displayName = 'ChatBox';
    },
    10114: (Oe, Y, t) => {
      t.d(Y, { L: () => n });
      var o = t(52983);
      const n = o.memo((l) =>
        o.createElement(
          'div',
          {
            className: 'h-full flex flex-col',
            'data-tc-role': l['data-tc-role'],
          },
          l.children
        )
      );
      n.displayName = 'CommonSidebarWrapper';
    },
    73513: (Oe, Y, t) => {
      t.d(Y, { o: () => a });
      var o = t(52983),
        n = t(45563),
        l = t.n(n),
        u = t(93540),
        e = t(14517);
      const a = o.memo((N) => {
        const { visible: f = !0, onChangeVisible: B } = N,
          h = (0, o.useRef)(null),
          I = (0, o.useCallback)(() => {
            l()(B) && B(!1);
          }, [B]);
        return (
          (0, o.useEffect)(() => {
            const M = (R) => {
              R.code === 'Escape' && I();
            };
            return (
              window.addEventListener('keyup', M),
              () => {
                window.removeEventListener('keyup', M);
              }
            );
          }, [I]),
          o.createElement(
            'div',
            {
              className: (0, e.Z)(
                'fixed left-0 right-0 top-0 bottom-0 z-10 bg-content-light dark:bg-content-dark flex justify-center items-center',
                { 'opacity-0': !f }
              ),
              ref: h,
            },
            N.children,
            l()(B) &&
              o.createElement(
                'div',
                {
                  className:
                    'absolute right-8 top-8 cursor-pointer flex flex-col',
                  onClick: I,
                  'data-testid': 'full-modal-close',
                },
                o.createElement(u.JO, {
                  className:
                    'text-2xl border-2 rounded-1/2 border-gray-900 dark:border-gray-100',
                  icon: 'mdi:close',
                }),
                o.createElement(
                  'span',
                  { className: 'text-center mt-0.5 font-bold' },
                  'ESC'
                )
              )
          )
        );
      });
      a.displayName = 'FullModal';
    },
    19856: (Oe, Y, t) => {
      t.d(Y, { D: () => e });
      var o = t(95268),
        n = t(75217),
        l = t(52983),
        u = t(26288);
      const e = l.memo((a) => {
        const { invite: N } = a;
        return N.expiredAt && new Date(N.expiredAt).valueOf() < Date.now()
          ? l.createElement(
              'span',
              null,
              (0, u.t)('\u8BE5\u9080\u8BF7\u7801\u5DF2\u8FC7\u671F')
            )
          : l.createElement(
              l.Fragment,
              null,
              N.expiredAt
                ? l.createElement(
                    u.cCv,
                    null,
                    '\u8BE5\u9080\u8BF7\u5C06\u4E8E',
                    ' ',
                    l.createElement(
                      o.Z,
                      { title: (0, u.KJm)(N.expiredAt) },
                      l.createElement(
                        'span',
                        { className: 'font-bold' },
                        { date: (0, u.u39)(N.expiredAt) }
                      )
                    ),
                    ' ',
                    '\u8FC7\u671F'
                  )
                : l.createElement(
                    'span',
                    null,
                    (0, u.t)('\u8BE5\u9080\u8BF7\u7801\u6C38\u4E0D\u8FC7\u671F')
                  ),
              N.usageLimit &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(n.Z, { type: 'vertical' }),
                  l.createElement(
                    u.cCv,
                    null,
                    '\u53EF\u4F7F\u7528',
                    ' ',
                    l.createElement(
                      'span',
                      { className: 'font-bold' },
                      { num: N.usageLimit }
                    ),
                    ' ',
                    '\u6B21'
                  )
                )
            );
      });
      e.displayName = 'InviteCodeExpiredAt';
    },
    63839: (Oe, Y, t) => {
      t.d(Y, { z: () => N });
      var o = t(75209),
        n = t(79546),
        l = t(65097),
        u = t(52983),
        e = t(26288),
        a = (f, B, h) =>
          new Promise((I, M) => {
            var R = (L) => {
                try {
                  F(h.next(L));
                } catch (G) {
                  M(G);
                }
              },
              b = (L) => {
                try {
                  F(h.throw(L));
                } catch (G) {
                  M(G);
                }
              },
              F = (L) =>
                L.done ? I(L.value) : Promise.resolve(L.value).then(R, b);
            F((h = h.apply(f, B)).next());
          });
      const N = u.memo((f) => {
        const { groupId: B, converseId: h } = f,
          [{ loading: I, value: M = [] }, R] = (0, e.CoE)((F) =>
            a(void 0, null, function* () {
              if (F.length < 3) {
                (0, e.lHp)(
                  (0, e.t)(
                    '\u641C\u7D22\u5185\u5BB9\u592A\u77ED\u65E0\u6CD5\u641C\u7D22'
                  )
                );
                return;
              }
              const L = yield e.o4J.yw.searchMessage(F, h, B);
              return L ?? [];
            })
          ),
          b = M;
        return u.createElement(
          'div',
          { className: 'p-2' },
          u.createElement(n.Z.Search, {
            className: 'mb-2',
            placeholder: (0, e.t)('\u8BF7\u8F93\u5165\u5173\u952E\u5B57'),
            loading: I,
            onSearch: R,
          }),
          u.createElement(
            'div',
            null,
            b.length === 0 &&
              u.createElement(l.Z, {
                description: (0, e.t)(
                  '\u6CA1\u6709\u4EFB\u4F55\u641C\u7D22\u7ED3\u679C'
                ),
              }),
            b.map((F) =>
              u.createElement(o.Y, {
                key: F._id,
                showAvatar: !0,
                payload: F,
                hideAction: !0,
              })
            )
          )
        );
      });
      N.displayName = 'MessageSearchPanel';
    },
    2945: (Oe, Y, t) => {
      t.d(Y, { B: () => u });
      var o = t(52983),
        n = t(26288),
        l = t(38643);
      const u = o.memo((e) => {
        const { withoutUserIds: a = [], selectedIds: N, onChange: f } = e,
          B = (0, n.CGy)((h) =>
            h.user.friends.map((I) => I.id).filter((I) => !a.includes(I))
          );
        return o.createElement(l.f, {
          selectedIds: N,
          onChange: f,
          allUserIds: B,
        });
      });
      u.displayName = 'FriendPicker';
    },
    38643: (Oe, Y, t) => {
      t.d(Y, { f: () => I });
      var o = t(79546),
        n = t(66990),
        l = t(52983),
        u = t(26288),
        e = t(89022),
        a = t.n(e),
        N = t(92238),
        f = t.n(N),
        B = t(93540),
        h = t(64939);
      const I = l.memo((M) => {
        const {
            withSearch: R = !0,
            selectedIds: b,
            onChange: F,
            allUserIds: L,
          } = M,
          [G, re] = (0, l.useState)(''),
          te = (0, u.FDf)(L),
          ve = (0, l.useCallback)(
            (j, g) => {
              if (g === !0) {
                if (b.includes(j)) return;
                typeof F == 'function' && F([...b, j]);
              } else typeof F == 'function' && F(f()(b, j));
            },
            [b, F]
          ),
          ne = a()(
            te.filter((j) => j.nickname.includes(G)),
            10
          );
        return l.createElement(
          'div',
          null,
          R &&
            l.createElement(o.Z, {
              placeholder: (0, u.t)('\u641C\u7D22\u7528\u6237'),
              className: 'mb-2',
              value: G,
              onChange: (j) => re(j.target.value),
            }),
          l.createElement(
            'div',
            null,
            (0, u.t)('\u5DF2\u9009\u62E9 {{num}} \u9879', { num: b.length })
          ),
          ne.length > 0
            ? ne.map((j) =>
                l.createElement(
                  'div',
                  { key: j._id, className: 'my-1' },
                  l.createElement(
                    n.Z,
                    {
                      className: 'mr-2 items-center',
                      checked: b.includes(j._id),
                      onChange: (g) => ve(j._id, g.target.checked),
                    },
                    l.createElement(
                      'div',
                      { className: 'flex items-center w-full' },
                      l.createElement(B.qE, {
                        size: 'small',
                        name: j.nickname,
                        src: j.avatar,
                      }),
                      l.createElement(
                        'div',
                        {
                          className:
                            'ml-1 text-typography-light dark:text-typography-dark',
                        },
                        j.nickname
                      )
                    )
                  )
                )
              )
            : l.createElement(h.T, null)
        );
      });
      I.displayName = 'UserPicker';
    },
    50093: (Oe, Y, t) => {
      t.d(Y, { m: () => f });
      var o = t(75526),
        n = t(52983),
        l = t(54782),
        u = t(26288),
        e = t(2945),
        a = t(84208),
        N = (B, h, I) =>
          new Promise((M, R) => {
            var b = (G) => {
                try {
                  L(I.next(G));
                } catch (re) {
                  R(re);
                }
              },
              F = (G) => {
                try {
                  L(I.throw(G));
                } catch (re) {
                  R(re);
                }
              },
              L = (G) =>
                G.done ? M(G.value) : Promise.resolve(G.value).then(b, F);
            L((I = I.apply(B, h)).next());
          });
      const f = n.memo((B) => {
        const { hiddenUserIds: h = [] } = B,
          [I, M] = (0, n.useState)([]),
          R = (0, l.useNavigate)(),
          [{ loading: b }, F] = (0, u.CoE)(
            () =>
              N(void 0, null, function* () {
                const L = yield (0, u.L1i)([...h, ...I]);
                (0, a.Mr)(), R(`/main/personal/converse/${L._id}`);
              }),
            [I]
          );
        return n.createElement(
          a.AB,
          { title: (0, u.t)('\u521B\u5EFA\u591A\u4EBA\u4F1A\u8BDD') },
          n.createElement(e.B, {
            withoutUserIds: h,
            selectedIds: I,
            onChange: M,
          }),
          n.createElement(
            'div',
            { className: 'text-right' },
            n.createElement(
              o.Z,
              { type: 'primary', loading: b, onClick: F },
              (0, u.t)('\u521B\u5EFA')
            )
          )
        );
      });
      f.displayName = 'CreateDMConverse';
    },
    40318: (Oe, Y, t) => {
      t.d(Y, { P: () => K });
      var o = t(93540),
        n = t(52983),
        l = t(26288),
        u = t(84208),
        e = t(19856),
        a = t(72297),
        N = t(75283),
        f = t(75526),
        B = t(96136),
        h = t(25355);
      const I = {
        createInviteBtn:
          'src-components-modals-CreateGroupInvite-CreateInviteCode-module__createInviteBtn--9soUP',
      };
      var M = Object.defineProperty,
        R = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        L = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        re = (C, x, A) =>
          x in C
            ? M(C, x, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: A,
              })
            : (C[x] = A),
        te = (C, x) => {
          for (var A in x || (x = {})) L.call(x, A) && re(C, A, x[A]);
          if (F) for (var A of F(x)) G.call(x, A) && re(C, A, x[A]);
          return C;
        },
        ve = (C, x) => R(C, b(x)),
        ne = (C, x, A) =>
          new Promise((S, q) => {
            var ie = (de) => {
                try {
                  Ae(A.next(de));
                } catch (he) {
                  q(he);
                }
              },
              Ie = (de) => {
                try {
                  Ae(A.throw(de));
                } catch (he) {
                  q(he);
                }
              },
              Ae = (de) =>
                de.done ? S(de.value) : Promise.resolve(de.value).then(ie, Ie);
            Ae((A = A.apply(C, x)).next());
          }),
        j = ((C) => ((C.Normal = 'normal'), (C.Permanent = 'permanent'), C))(
          j || {}
        );
      const g = n.memo(
        ({ groupId: C, onInviteCreated: x, onInviteUpdated: A }) => {
          const [S, q] = (0, n.useState)(null),
            [{ loading: ie }, Ie] = (0, l.CoE)(
              (Re) =>
                ne(void 0, null, function* () {
                  const je = yield (0, l.fiB)(C, Re);
                  q(je), x == null || x();
                }),
              [C, x]
            ),
            [Ae, de] = (0, l.WHr)(C, [
              l.g3S.core.invite,
              l.g3S.core.unlimitedInvite,
            ]),
            he = (0, l.zX9)(() => {
              if (!S) return;
              const Re = (0, u.h7)(
                n.createElement(h.s, {
                  groupId: C,
                  code: S.code,
                  onEditSuccess: ({ expiredAt: je, usageLimit: ze }) => {
                    (0, l.lHp)(
                      (0, l.t)(
                        '\u9080\u8BF7\u8BBE\u7F6E\u4FEE\u6539\u6210\u529F'
                      ),
                      'success'
                    ),
                      q((ke) =>
                        ve(te({}, ke), {
                          expiredAt: je ? new Date(je).toISOString() : void 0,
                          usageLimit: ze,
                        })
                      ),
                      (0, u.Mr)(Re),
                      A == null || A();
                  },
                })
              );
            }),
            fe = {
              items: [
                {
                  key: 'persist',
                  label: (0, l.t)('\u521B\u5EFA\u6C38\u4E45\u9080\u8BF7\u7801'),
                  disabled: !de,
                  onClick: () => Ie('permanent'),
                },
              ],
            };
          return n.createElement(
            'div',
            null,
            S
              ? n.createElement(
                  'div',
                  null,
                  n.createElement(
                    N.Z.Title,
                    {
                      className:
                        'bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 px-2 py-1 select-text text-lg rounded border border-black border-opacity-20',
                      level: 4,
                      copyable: !0,
                    },
                    (0, a.po)(S.code)
                  ),
                  n.createElement(
                    'p',
                    { className: 'text-gray-500 text-sm' },
                    n.createElement(e.D, { invite: S }),
                    n.createElement(
                      f.Z,
                      { type: 'link', size: 'small', onClick: he },
                      (0, l.t)('\u7F16\u8F91')
                    )
                  )
                )
              : n.createElement(
                  B.Z.Button,
                  {
                    className: I.createInviteBtn,
                    size: 'large',
                    type: 'primary',
                    disabled: !Ae,
                    loading: ie,
                    onClick: () => Ie('normal'),
                    menu: fe,
                    trigger: ['click'],
                  },
                  (0, l.t)('\u521B\u5EFA\u94FE\u63A5')
                )
          );
        }
      );
      g.displayName = 'CreateInviteCode';
      const K = n.memo((C) => {
        const x = C.groupId;
        return (0, l.iFL)(x)
          ? n.createElement(
              u.AB,
              null,
              n.createElement(o.JO, {
                className: 'text-6xl block m-auto opacity-30 mb-4 mt-2',
                icon: 'mdi:email-edit-outline',
              }),
              n.createElement(
                'div',
                { className: 'text-gray-400 font-bold text-lg mb-2' },
                (0, l.t)(
                  '\u521B\u5EFA\u94FE\u63A5\u5E76\u53D1\u9001\u7ED9\u5916\u90E8\u597D\u53CB'
                )
              ),
              n.createElement(g, {
                groupId: x,
                onInviteCreated: C.onInviteCreated,
                onInviteUpdated: C.onInviteUpdated,
              })
            )
          : n.createElement('div', null, (0, l.t)('\u5F02\u5E38'));
      });
      K.displayName = 'GroupInvite';
    },
    25355: (Oe, Y, t) => {
      t.d(Y, { s: () => N });
      var o = t(93540),
        n = t(52983),
        l = t(26288),
        u = t(84208),
        e = (f, B, h) =>
          new Promise((I, M) => {
            var R = (L) => {
                try {
                  F(h.next(L));
                } catch (G) {
                  M(G);
                }
              },
              b = (L) => {
                try {
                  F(h.throw(L));
                } catch (G) {
                  M(G);
                }
              },
              F = (L) =>
                L.done ? I(L.value) : Promise.resolve(L.value).then(R, b);
            F((h = h.apply(f, B)).next());
          });
      const a = [
          {
            type: 'select',
            name: 'expiredAt',
            label: (0, l.t)('\u8FC7\u671F\u65F6\u95F4'),
            defaultValue: -1,
            options: [
              { label: (0, l.t)('30\u5206\u949F'), value: 30 * 60 },
              { label: (0, l.t)('1\u5C0F\u65F6'), value: 60 * 60 },
              { label: (0, l.t)('6\u5C0F\u65F6'), value: 6 * 60 * 60 },
              { label: (0, l.t)('12\u5C0F\u65F6'), value: 12 * 60 * 60 },
              { label: (0, l.t)('1\u5929'), value: 24 * 60 * 60 },
              { label: (0, l.t)('7\u5929'), value: 7 * 24 * 60 * 60 },
              { label: (0, l.t)('\u6C38\u4E0D'), value: -1 },
            ],
          },
          {
            type: 'select',
            name: 'usageLimit',
            label: (0, l.t)('\u6700\u5927\u4F7F\u7528\u6B21\u6570'),
            defaultValue: -1,
            options: [
              { label: (0, l.t)('\u65E0\u9650\u5236'), value: -1 },
              { label: (0, l.t)('1\u6B21\u4F7F\u7528'), value: 1 },
              { label: (0, l.t)('5\u6B21\u4F7F\u7528'), value: 5 },
              { label: (0, l.t)('10\u6B21\u4F7F\u7528'), value: 10 },
              { label: (0, l.t)('25\u6B21\u4F7F\u7528'), value: 25 },
              { label: (0, l.t)('50\u6B21\u4F7F\u7528'), value: 50 },
              { label: (0, l.t)('100\u6B21\u4F7F\u7528'), value: 100 },
            ],
          },
        ],
        N = n.memo((f) => {
          const B = (0, l.zX9)((h) =>
            e(void 0, null, function* () {
              const I =
                  h.expiredAt === -1 ? void 0 : Date.now() + h.expiredAt * 1e3,
                M = h.usageLimit === -1 ? void 0 : h.usageLimit;
              yield l.o4J.ru.editGroupInvite(f.groupId, f.code, I, M),
                f.onEditSuccess({ expiredAt: I, usageLimit: M });
            })
          );
          return n.createElement(
            u.AB,
            { title: (0, l.t)('\u7F16\u8F91\u9080\u8BF7\u94FE\u63A5') },
            n.createElement(o.Po, { fields: a, onSubmit: B })
          );
        });
      N.displayName = 'EditGroupInvite';
    },
    17679: (Oe, Y, t) => {
      t.d(Y, { a: () => Bt });
      var o = t(73513),
        n = t(3856),
        l = t(50842),
        u = t(21513),
        e = t(52983),
        a = t(26288),
        N = t(95268),
        f = t(58761),
        B = t(75526),
        h = t(69104),
        I = t(66559),
        M = t(84208),
        R = t(40318),
        b = t(36932),
        F = t(84143),
        L = t(86724),
        G = t.n(L),
        re = t(72297),
        te = t(93540),
        ve = t(25355),
        ne = (r, i, s) =>
          new Promise((D, p) => {
            var y = (c) => {
                try {
                  v(s.next(c));
                } catch (d) {
                  p(d);
                }
              },
              U = (c) => {
                try {
                  v(s.throw(c));
                } catch (d) {
                  p(d);
                }
              },
              v = (c) =>
                c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
            v((s = s.apply(r, i)).next());
          });
      const j = e.memo((r) => {
        const i = r.groupId,
          {
            loading: s,
            value: D,
            refresh: p,
          } = (0, a.IxN)(
            () =>
              ne(void 0, null, function* () {
                return (yield (0, a.TcU)(i)).reverse();
              }),
            [i]
          ),
          y = (0, a.zX9)(() => {
            (0, M.h7)(
              e.createElement(R.P, {
                groupId: i,
                onInviteCreated: () => {
                  p();
                },
                onInviteUpdated: () => {
                  p();
                },
              })
            );
          }),
          U = (0, a.zX9)((w) => {
            const le = (0, M.h7)(
              e.createElement(ve.s, {
                groupId: i,
                code: w,
                onEditSuccess: () => {
                  (0, a.lHp)(
                    (0, a.t)(
                      '\u9080\u8BF7\u8BBE\u7F6E\u4FEE\u6539\u6210\u529F'
                    ),
                    'success'
                  ),
                    (0, M.Mr)(le),
                    p();
                },
              })
            );
          }),
          v = (0, a.zX9)((w) => {
            G()((0, re.po)(w)),
              (0, a.lHp)(
                (0, a.t)(
                  '\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F'
                ),
                'success'
              );
          }),
          c = (0, a.zX9)((w) =>
            ne(void 0, null, function* () {
              (yield (0, M.aW)()) && (yield (0, a.L4o)(i, w), yield p());
            })
          ),
          d = (0, e.useMemo)(
            () => [
              {
                title: (0, a.t)('\u9080\u8BF7\u7801'),
                dataIndex: 'code',
                width: 200,
                render: (w) => e.createElement(te.PJ, { text: w }),
              },
              {
                title: (0, a.t)('\u521B\u5EFA\u65F6\u95F4'),
                dataIndex: 'createdAt',
                render: (w) =>
                  e.createElement(N.Z, { title: (0, a.KJm)(w) }, (0, a.u39)(w)),
              },
              {
                title: (0, a.t)('\u8FC7\u671F\u65F6\u95F4'),
                dataIndex: 'expiredAt',
                render: (w) =>
                  w
                    ? new Date(w).valueOf() < Date.now()
                      ? (0, a.t)('\u5DF2\u8FC7\u671F')
                      : e.createElement(
                          N.Z,
                          { title: (0, a.KJm)(w) },
                          (0, a.u39)(w)
                        )
                    : (0, a.t)('\u6C38\u4E0D\u8FC7\u671F'),
              },
              {
                title: (0, a.t)('\u4F7F\u7528\u6B21\u6570'),
                dataIndex: 'usage',
                render: (w, le) =>
                  e.createElement(
                    'div',
                    null,
                    w,
                    le.usageLimit && ` / ${le.usageLimit}`
                  ),
              },
              {
                title: (0, a.t)('\u521B\u5EFA\u8005'),
                dataIndex: 'creator',
                render: (w) => e.createElement(I.v, { userId: w }),
              },
              {
                title: (0, a.t)('\u64CD\u4F5C'),
                dataIndex: '_id',
                render: (w, le) =>
                  e.createElement(
                    f.Z,
                    null,
                    e.createElement(F.a, {
                      title: (0, a.t)('\u7F16\u8F91\u9080\u8BF7\u94FE\u63A5'),
                      shape: 'square',
                      icon: 'mdi:edit',
                      onClick: () => U(le.code),
                    }),
                    e.createElement(F.a, {
                      title: (0, a.t)('\u590D\u5236\u9080\u8BF7\u94FE\u63A5'),
                      shape: 'square',
                      icon: 'mdi:content-copy',
                      onClick: () => v(le.code),
                    }),
                    e.createElement(F.a, {
                      title: (0, a.t)('\u5220\u9664'),
                      shape: 'square',
                      icon: 'mdi:delete-outline',
                      danger: !0,
                      onClick: () => c(w),
                    })
                  ),
              },
            ],
            [v, c]
          );
        return e.createElement(
          b.t,
          { spinning: s },
          e.createElement(
            'div',
            { className: 'text-right mb-2' },
            e.createElement(
              B.Z,
              { type: 'primary', onClick: y },
              (0, a.t)('\u521B\u5EFA\u9080\u8BF7\u7801')
            )
          ),
          e.createElement(h.Z, {
            columns: d,
            dataSource: D,
            pagination: { hideOnSinglePage: !0 },
          })
        );
      });
      j.displayName = 'GroupInvite';
      var g = t(85466),
        K = t.n(g),
        C = t(45513),
        x = t(14698),
        A = t.n(x),
        S = t(77179),
        q = t.n(S);
      function ie(r) {
        return r
          .filter((i) => A()(i.parentId))
          .map((i) => ({
            key: i.id,
            title: i.name,
            isLeaf: i.type !== a.Xpe.GROUP,
            children:
              i.type === a.Xpe.GROUP
                ? r
                    .filter((s) => s.parentId === i.id)
                    .map((s) => ({ key: s.id, title: s.name, isLeaf: !0 }))
                : void 0,
          }));
      }
      function Ie(r) {
        const i = q()(r),
          s = i.filter((p) => A()(p.parentId)),
          D = s.length;
        for (let p = D - 1; p >= 0; p--) {
          const y = s[p].id;
          s.splice(p + 1, 0, ...i.filter((U) => U.parentId === y));
        }
        return s;
      }
      function Ae(r, i) {
        const s = (0, e.useRef)(null),
          D = (0, e.useCallback)((v) => {
            s.current = v.node;
          }, []),
          p = (0, e.useCallback)(() => {
            s.current = null;
          }, []),
          y = (0, e.useCallback)(({ dropNode: v, dropPosition: c }) => {
            var d;
            return ((d = s.current) == null ? void 0 : d.isLeaf) === !0
              ? c === 0
                ? !v.isLeaf
                : !0
              : c === 0
              ? !1
              : !v.isLeaf;
          }, []),
          U = (0, e.useCallback)(
            (v) => {
              var c;
              const d = q()(r),
                w = d.findIndex((pe) => pe.id === v.node.key),
                le = d[w];
              w === -1 &&
                (0, a.lHp)(
                  '\u5F02\u5E38, \u76EE\u6807\u8282\u70B9\u672A\u627E\u5230',
                  'error'
                );
              const Qe = d.findIndex((pe) => pe.id === v.dragNode.key);
              ((c = s.current) == null ? void 0 : c.isLeaf) === !0 &&
                (v.node.isLeaf === !0
                  ? v.dragNodesKeys
                      .map((pe) => d.findIndex((ut) => ut.id === pe))
                      .filter((pe) => pe !== -1)
                      .forEach((pe) => {
                        d[pe].parentId = le.parentId;
                      })
                  : v.dropToGap === !1 && v.node.isLeaf === !1
                  ? v.dragNodesKeys
                      .map((pe) => d.findIndex((ut) => ut.id === pe))
                      .filter((pe) => pe !== -1)
                      .forEach((pe) => {
                        d[pe].parentId = le.id;
                      })
                  : v.dropToGap === !0 &&
                    v.node.isLeaf === !1 &&
                    v.dragNodesKeys
                      .map((pe) => d.findIndex((ut) => ut.id === pe))
                      .filter((pe) => pe !== -1)
                      .forEach((pe) => {
                        d[pe].parentId = void 0;
                      }));
              const $e = Qe;
              let De;
              if (
                (v.node.dragOverGapTop === !0 ? (De = w) : (De = w + 1),
                $e < De)
              )
                d.splice(De, 0, d[$e]), d.splice($e, 1);
              else if ($e > De) {
                const [pe] = d.splice($e, 1);
                d.splice(De, 0, pe);
              }
              if (typeof i == 'function') {
                const pe = Ie(d);
                i(pe);
              }
            },
            [r, i]
          );
        return {
          handleDragStart: D,
          handleDragEnd: p,
          handleAllowDrop: y,
          handleDrop: U,
        };
      }
      var de = t(38887),
        he = t(89889),
        fe = Object.defineProperty,
        Re = Object.defineProperties,
        je = Object.getOwnPropertyDescriptors,
        ze = Object.getOwnPropertySymbols,
        ke = Object.prototype.hasOwnProperty,
        qe = Object.prototype.propertyIsEnumerable,
        Xe = (r, i, s) =>
          i in r
            ? fe(r, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (r[i] = s),
        Ve = (r, i) => {
          for (var s in i || (i = {})) ke.call(i, s) && Xe(r, s, i[s]);
          if (ze) for (var s of ze(i)) qe.call(i, s) && Xe(r, s, i[s]);
          return r;
        },
        Ye = (r, i) => Re(r, je(i)),
        et = (r, i) => {
          var s = {};
          for (var D in r) ke.call(r, D) && i.indexOf(D) < 0 && (s[D] = r[D]);
          if (r != null && ze)
            for (var D of ze(r))
              i.indexOf(D) < 0 && qe.call(r, D) && (s[D] = r[D]);
          return s;
        };
      function se(r) {
        const i = r,
          { name: s, type: D, permissionMap: p, fallbackPermissions: y } = i,
          U = et(i, ['name', 'type', 'permissionMap', 'fallbackPermissions']);
        let v, c, d;
        if (typeof D == 'string') {
          const w = D;
          v = a.Xpe.PLUGIN;
          const le = (0, he.S)(w);
          le && ((c = le.provider), (d = le.name));
        } else v = D;
        return {
          name: s,
          type: v,
          provider: c,
          pluginPanelName: d,
          meta: U,
          permissionMap: p,
          fallbackPermissions: y,
        };
      }
      function $(r) {
        return r === null
          ? { name: '', type: a.Xpe.TEXT }
          : Ye(Ve({}, r.meta), {
              name: r.name,
              type:
                r.type === a.Xpe.PLUGIN ? String(r.pluginPanelName) : r.type,
              permissionMap: r.permissionMap,
              fallbackPermissions: r.fallbackPermissions,
            });
      }
      var Ee = t(39907),
        Fe = t.n(Ee),
        Le = t(61230),
        We = t.n(Le),
        Ke = Object.defineProperty,
        Te = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        z = (r, i, s) =>
          i in r
            ? Ke(r, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (r[i] = s),
        H = (r, i) => {
          for (var s in i || (i = {})) W.call(i, s) && z(r, s, i[s]);
          if (Te) for (var s of Te(i)) _.call(i, s) && z(r, s, i[s]);
          return r;
        };
      const X = [
          { type: 'text', name: 'name', label: (0, a.t)('\u9762\u677F\u540D') },
          {
            type: 'select',
            name: 'type',
            label: (0, a.t)('\u7C7B\u578B'),
            options: [
              {
                label: (0, a.t)('\u804A\u5929\u9891\u9053'),
                value: a.Xpe.TEXT,
              },
              {
                label: (0, a.t)('\u9762\u677F\u5206\u7EC4'),
                value: a.Xpe.GROUP,
              },
              ...u.pluginGroupPanel.map((r) => ({
                label: r.label,
                value: r.name,
              })),
            ],
          },
        ],
        ye = {
          name: te._6
            .string()
            .required((0, a.t)('\u9762\u677F\u540D\u4E0D\u80FD\u4E3A\u7A7A'))
            .max(20, (0, a.t)('\u9762\u677F\u540D\u8FC7\u957F')),
          type: te._6
            .string()
            .required(
              (0, a.t)('\u9762\u677F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A')
            ),
        };
      function Pe(r, i) {
        return (0, e.useMemo)(() => {
          let D = X,
            p = ye;
          if (typeof i.type == 'string') {
            const y = (0, he.S)(i.type);
            if (y) {
              const U = Array.isArray(y.extraFormMeta) ? y.extraFormMeta : [];
              D = [...X, ...U];
              const v = We()(
                Fe()(U, (c) => c.name),
                () => te._6.mixed()
              );
              p = H(H({}, v), ye);
            }
          }
          return { fields: D, schema: (0, te._D)(p) };
        }, [i]);
      }
      var xe = t(75217),
        Ne = t(63509),
        Ge = t(36572),
        me = t(44411),
        Ze = t(90292),
        O = t.n(Ze),
        Z = t(92238),
        T = t.n(Z);
      const V = e.memo((r) => {
        const i = (0, a.zX9)((y, U) => {
            U ? r.onChange(O()([...r.value, y])) : r.onChange(T()(r.value, y));
          }),
          s = (0, a.zX9)((y) => {
            if (typeof r.panelType == 'undefined') return !0;
            if (!y.panel) return !1;
            if (y.panel === !0) return !0;
            if (Array.isArray(y.panel)) return y.panel.includes(r.panelType);
          }),
          D = (0, a.pZA)().filter(s),
          p = u.pluginPermission.filter(s);
        return D.length === 0 && p.length === 0
          ? e.createElement(
              'div',
              { className: 'text-center' },
              (0, a.t)('\u6682\u65E0\u53EF\u7528\u7684\u6743\u9650\u9879')
            )
          : e.createElement(
              'div',
              null,
              D.map((y) =>
                e.createElement(ue, {
                  key: y.key,
                  title: y.title,
                  desc: y.desc,
                  disabled: y.required
                    ? !y.required.every((U) => r.value.includes(U))
                    : void 0,
                  checked: r.value.includes(y.key),
                  onChange: (U) => i(y.key, U),
                })
              ),
              p.length > 0 &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    xe.Z,
                    null,
                    (0, a.t)('\u4EE5\u4E0B\u4E3A\u63D2\u4EF6\u6743\u9650')
                  ),
                  u.pluginPermission.map((y) =>
                    e.createElement(ue, {
                      key: y.key,
                      title: y.title,
                      desc: y.desc,
                      disabled: y.required
                        ? !y.required.every((U) => r.value.includes(U))
                        : void 0,
                      checked: r.value.includes(y.key),
                      onChange: (U) => i(y.key, U),
                    })
                  )
                )
            );
      });
      V.displayName = 'PermissionList';
      const ue = e.memo((r) =>
        e.createElement(
          'div',
          { className: 'mx-2 py-3 border-b border-white border-opacity-20' },
          e.createElement(
            Ne.Z,
            null,
            e.createElement(Ge.Z, { flex: 1, className: 'font-bold' }, r.title),
            e.createElement(
              Ge.Z,
              null,
              e.createElement(me.Z, {
                disabled: r.disabled,
                checked: r.checked,
                onChange: r.onChange,
              })
            )
          ),
          e.createElement('div', { className: 'text-gray-400' }, r.desc)
        )
      );
      ue.displayName = 'PermissionItem';
      var ge = t(14517),
        Be = Object.defineProperty,
        Ce = Object.defineProperties,
        Me = Object.getOwnPropertyDescriptors,
        we = Object.getOwnPropertySymbols,
        at = Object.prototype.hasOwnProperty,
        lt = Object.prototype.propertyIsEnumerable,
        _e = (r, i, s) =>
          i in r
            ? Be(r, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (r[i] = s),
        rt = (r, i) => {
          for (var s in i || (i = {})) at.call(i, s) && _e(r, s, i[s]);
          if (we) for (var s of we(i)) lt.call(i, s) && _e(r, s, i[s]);
          return r;
        },
        m = (r, i) => Ce(r, Me(i));
      const P = e.memo((r) => {
        var i;
        const [s, D] = (0, e.useState)(a.eFs),
          p = (0, a.CGy)((le) => le.group.groups[r.groupId].roles),
          y = (0, a.CGy)((le) =>
            le.group.groups[r.groupId].panels.find((De) => De.id === r.panelId)
          ),
          U = (0, e.useMemo)(() => {
            var le;
            return y
              ? rt(
                  {
                    [a.eFs]:
                      (le = y.fallbackPermissions) != null ? le : (0, a.Q$5)(),
                  },
                  y.permissionMap
                )
              : { [a.eFs]: (0, a.Q$5)() };
          }, [y]),
          [v, c] = (0, a.kz6)(U, r.onChange),
          d = (0, a.zX9)((le) => {
            const Qe = m(rt({}, v), { [s]: le });
            c(Qe);
          }),
          w = (0, a.zX9)(() => {
            c({ [a.eFs]: (0, a.Q$5)() }), r.onChange(void 0);
          });
        return y
          ? e.createElement(
              'div',
              { className: 'flex', style: { width: 540 } },
              e.createElement(
                'div',
                null,
                e.createElement(
                  E,
                  { active: s === a.eFs, onClick: () => D(a.eFs) },
                  (0, a.t)('\u6240\u6709\u4EBA')
                ),
                p.map((le) =>
                  e.createElement(
                    E,
                    {
                      key: le._id,
                      active: s === le._id,
                      onClick: () => D(le._id),
                    },
                    le.name
                  )
                )
              ),
              e.createElement(
                'div',
                {
                  className: 'flex-1 overflow-auto',
                  style: { height: r.height },
                },
                e.createElement(
                  'div',
                  { className: 'text-right' },
                  e.createElement(
                    B.Z,
                    { onClick: w },
                    (0, a.t)('\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u6743\u9650')
                  )
                ),
                e.createElement(V, {
                  panelType:
                    y.type === a.Xpe.PLUGIN ? y.pluginPanelName : y.type,
                  value: (i = v[s]) != null ? i : [],
                  onChange: d,
                })
              )
            )
          : e.createElement(de.T, null);
      });
      P.displayName = 'AdvanceGroupPanelPermission';
      const E = e.memo((r) =>
        e.createElement(
          'div',
          {
            className: (0, ge.Z)(
              'px-2 py-1 rounded cursor-pointer mb-1 hover:bg-black hover:bg-opacity-20',
              { 'bg-black bg-opacity-20': r.active }
            ),
            onClick: r.onClick,
          },
          r.children
        )
      );
      E.displayName = 'RoleItem';
      var ee = t(6769);
      const Q = e.memo((r) =>
        e.createElement(
          ee.Z,
          { className: r.className, style: r.style },
          e.createElement(
            ee.Z.Panel,
            { header: r.title, key: 'main' },
            r.children
          )
        )
      );
      Q.displayName = 'CollapseView';
      var ce = t(73352),
        oe = t.n(ce),
        ae = Object.defineProperty,
        k = Object.getOwnPropertySymbols,
        J = Object.prototype.hasOwnProperty,
        Ue = Object.prototype.propertyIsEnumerable,
        tt = (r, i, s) =>
          i in r
            ? ae(r, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (r[i] = s),
        be = (r, i) => {
          for (var s in i || (i = {})) J.call(i, s) && tt(r, s, i[s]);
          if (k) for (var s of k(i)) Ue.call(i, s) && tt(r, s, i[s]);
          return r;
        },
        Je = (r, i, s) =>
          new Promise((D, p) => {
            var y = (c) => {
                try {
                  v(s.next(c));
                } catch (d) {
                  p(d);
                }
              },
              U = (c) => {
                try {
                  v(s.throw(c));
                } catch (d) {
                  p(d);
                }
              },
              v = (c) =>
                c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
            v((s = s.apply(r, i)).next());
          });
      const Se = e.memo((r) => {
        const i = (0, a.wY6)(r.groupId, r.groupPanelId),
          [s, D] = (0, e.useState)($(i)),
          [, p] = (0, a.CoE)(
            () =>
              Je(void 0, null, function* () {
                yield (0, a.d89)(r.groupId, r.groupPanelId, se(s)),
                  (0, a.lHp)((0, a.t)('\u4FEE\u6539\u6210\u529F'), 'success'),
                  typeof r.onSuccess == 'function' && r.onSuccess();
              }),
            [r.groupId, r.groupPanelId, r.onSuccess, s]
          ),
          { fields: y, schema: U } = Pe(r.groupId, s),
          v = (0, a.zX9)((c) => {
            D((d) => be(be({}, d), c));
          });
        return i
          ? e.createElement(
              M.AB,
              {
                title: (0, a.t)('\u7F16\u8F91\u7FA4\u7EC4\u9762\u677F'),
                style: { width: 600 },
              },
              e.createElement(te.Po, {
                schema: U,
                fields: y.filter((c) => c.type !== 'type'),
                initialValues: $(i),
                onChange: v,
                onSubmit: p,
                extraProps: {
                  suffixElement: e.createElement(
                    Q,
                    {
                      title: (0, a.t)('\u9AD8\u7EA7\u6743\u9650\u63A7\u5236'),
                      className: 'mb-2',
                    },
                    e.createElement(P, {
                      height: 320,
                      groupId: r.groupId,
                      panelId: r.groupPanelId,
                      onChange: (c) => {
                        if (c) {
                          const d = c[a.eFs],
                            w = be({}, c);
                          v({
                            fallbackPermissions: d,
                            permissionMap: oe()(w, [a.eFs]),
                          });
                        } else
                          v({
                            fallbackPermissions: void 0,
                            permissionMap: void 0,
                          });
                      },
                    })
                  ),
                },
              })
            )
          : e.createElement(de.T, null);
      });
      Se.displayName = 'ModalModifyGroupPanel';
      var He = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      const ot = e.memo((r) => {
        const i = (0, e.useMemo)(() => ie(r.groupPanels), [r.groupPanels]),
          s = (0, e.useCallback)(
            (d) => {
              const w = (0, M.h7)(
                e.createElement(Se, {
                  groupId: r.groupId,
                  groupPanelId: d,
                  onSuccess: () => (0, M.Mr)(w),
                })
              );
            },
            [r.groupId]
          ),
          D = (0, e.useCallback)(
            (d, w, le) => {
              (0, a.wp$)({
                message: le
                  ? (0, a.t)(
                      '\u786E\u5B9A\u8981\u5220\u9664\u9762\u677F\u7EC4 \u3010{{name}}\u3011 \u4EE5\u53CA\u4E0B\u7EA7\u7684\u6240\u6709\u9762\u677F\u4E48',
                      { name: w }
                    )
                  : (0, a.t)(
                      '\u786E\u5B9A\u8981\u5220\u9664\u9762\u677F \u3010{{name}}\u3011 \u4E48',
                      { name: w }
                    ),
                onConfirm: () =>
                  He(void 0, null, function* () {
                    yield (0, a.J9q)(r.groupId, d);
                  }),
              });
            },
            [r.groupId]
          ),
          p = (0, e.useCallback)(
            (d) =>
              e.createElement(
                'div',
                { className: 'flex group' },
                e.createElement('span', null, d.title),
                e.createElement(
                  'div',
                  { className: 'opacity-0 group-hover:opacity-100 ml-2' },
                  e.createElement(
                    f.Z,
                    { size: 'small' },
                    e.createElement(F.a, {
                      title: (0, a.t)('\u7F16\u8F91'),
                      type: 'text',
                      size: 'small',
                      icon: 'mdi:pencil-outline',
                      onClick: (w) => {
                        w.stopPropagation(),
                          w.preventDefault(),
                          s(String(d.key));
                      },
                    }),
                    e.createElement(F.a, {
                      title: (0, a.t)('\u5220\u9664'),
                      type: 'text',
                      size: 'small',
                      icon: 'mdi:trash-can-outline',
                      onClick: (w) => {
                        w.stopPropagation(),
                          w.preventDefault(),
                          D(String(d.key), String(d.title), !d.isLeaf);
                      },
                    })
                  )
                )
              ),
            [D]
          ),
          {
            handleDragStart: y,
            handleDragEnd: U,
            handleAllowDrop: v,
            handleDrop: c,
          } = Ae(r.groupPanels, r.onChange);
        return e.createElement(C.Z, {
          treeData: i,
          defaultExpandAll: !0,
          blockNode: !0,
          draggable: { icon: !1 },
          selectable: !1,
          titleRender: p,
          onDrop: c,
          onDragStart: y,
          onDragEnd: U,
          allowDrop: v,
        });
      });
      ot.displayName = 'GroupPanelTree';
      const st = e.memo((r) =>
        e.createElement(
          'div',
          { className: 'text-xl font-bold mb-4 flex justify-between' },
          e.createElement('div', null, r.children),
          e.createElement('div', null, r.extra)
        )
      );
      st.displayName = 'FullModalCommonTitle';
      var it = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      const ct = e.memo((r) => {
        const [i, s] = (0, e.useState)({}),
          [, D] = (0, a.CoE)(
            (U) =>
              it(void 0, null, function* () {
                yield (0, a.XAi)(r.groupId, se(U)),
                  (0, a.lHp)((0, a.t)('\u521B\u5EFA\u6210\u529F'), 'success'),
                  typeof r.onSuccess == 'function' && r.onSuccess();
              }),
            [r.groupId, r.onSuccess]
          ),
          { fields: p, schema: y } = Pe(r.groupId, i);
        return e.createElement(
          M.AB,
          {
            title: (0, a.t)('\u521B\u5EFA\u7FA4\u7EC4\u9762\u677F'),
            style: { maxWidth: 440 },
          },
          e.createElement(te.Po, {
            schema: y,
            fields: p,
            onChange: s,
            onSubmit: D,
          })
        );
      });
      ct.displayName = 'ModalCreateGroupPanel';
      var vt = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      const pt = e.memo((r) => {
        var i;
        const s = r.groupId,
          D = (0, a.iFL)(s),
          p = (i = D == null ? void 0 : D.panels) != null ? i : [],
          [y, U] = (0, e.useState)(p),
          v = (0, e.useRef)(!1);
        (0, e.useEffect)(() => {
          v.current !== !0 && U(p);
        }, [p]);
        const c = (0, e.useCallback)(($e) => {
            (v.current = !0), U($e);
          }, []),
          [{ loading: d }, w] = (0, a.CoE)(
            () =>
              vt(void 0, null, function* () {
                yield (0, a.uRW)(s, 'panels', y),
                  (v.current = !1),
                  (0, a.lHp)((0, a.t)('\u4FDD\u5B58\u6210\u529F'), 'success');
              }),
            [y]
          ),
          le = (0, e.useCallback)(() => {
            U(p), (v.current = !1);
          }, [p]),
          Qe = (0, e.useCallback)(() => {
            const $e = (0, M.h7)(
              e.createElement(ct, {
                groupId: s,
                onSuccess: () => {
                  (0, M.Mr)($e), (v.current = !1);
                },
              })
            );
          }, []);
        return e.createElement(
          'div',
          null,
          e.createElement(
            st,
            {
              extra: e.createElement(
                B.Z,
                { type: 'primary', onClick: Qe },
                (0, a.t)('\u521B\u5EFA\u9762\u677F')
              ),
            },
            (0, a.t)('\u9762\u677F\u7BA1\u7406')
          ),
          e.createElement(
            'div',
            {
              className:
                'max-h-160 overflow-auto border rounded border-black border-opacity-20 p-1',
            },
            e.createElement(ot, { groupId: s, groupPanels: y, onChange: c })
          ),
          !K()(p, y) &&
            e.createElement(
              'div',
              { className: 'space-x-1 mt-2' },
              e.createElement(
                B.Z,
                { type: 'primary', loading: d, onClick: w },
                (0, a.t)('\u4FDD\u5B58')
              ),
              e.createElement(B.Z, { onClick: le }, (0, a.t)('\u91CD\u7F6E'))
            )
        );
      });
      pt.displayName = 'GroupPanel';
      var ht = t(18300),
        bt = t(83667);
      const mt = e.memo((r) =>
        e.createElement(
          'div',
          {
            className: (0, ge.Z)(
              'px-2 py-1 rounded cursor-pointer mb-1 hover:bg-black hover:bg-opacity-20',
              { 'bg-black bg-opacity-20': r.active }
            ),
            onClick: r.onClick,
          },
          r.children
        )
      );
      mt.displayName = 'RoleItem';
      var dt = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      function St(r, i) {
        const [{ loading: s }, D] = (0, a.CoE)(
            () =>
              dt(this, null, function* () {
                yield a.o4J.ru.createGroupRole(
                  r,
                  (0, a.t)('\u65B0\u8EAB\u4EFD\u7EC4'),
                  (0, a.Q$5)()
                ),
                  (0, a.jiy)();
              }),
            [r]
          ),
          [{ loading: p }, y] = (0, a.CoE)(
            (w) =>
              dt(this, null, function* () {
                i === a.eFs
                  ? yield a.o4J.ru.modifyGroupField(r, 'fallbackPermissions', w)
                  : yield a.o4J.ru.updateGroupRolePermission(r, i, w),
                  (0, a.jiy)();
              }),
            [r, i]
          ),
          [{ loading: U }, v] = (0, a.CoE)(
            (w) =>
              dt(this, null, function* () {
                if (i === a.eFs)
                  throw new Error(
                    (0, a.t)(
                      '\u65E0\u6CD5\u4FEE\u6539\u6240\u6709\u4EBA\u6743\u9650\u7EC4\u7684\u663E\u793A\u540D\u79F0'
                    )
                  );
                yield a.o4J.ru.updateGroupRoleName(r, i, w), (0, a.jiy)();
              }),
            [r, i]
          ),
          [{ loading: c }, d] = (0, a.CoE)(
            () =>
              dt(this, null, function* () {
                if (i === a.eFs)
                  throw new Error(
                    (0, a.t)(
                      '\u65E0\u6CD5\u5220\u9664\u6240\u6709\u4EBA\u6743\u9650'
                    )
                  );
                yield a.o4J.ru.deleteGroupRole(r, i), (0, a.jiy)();
              }),
            [r, i]
          );
        return {
          loading: s || p || U || c,
          handleCreateRole: D,
          handleSavePermission: y,
          handleChangeRoleName: v,
          handleDeleteRole: d,
        };
      }
      var nt = t(7606);
      const gt = e.memo((r) => {
        const { currentRoleInfo: i } = r,
          s = (0, a.nWw)(() => {
            (0, M.VW)({
              title: (0, a.t)(
                '\u786E\u8BA4\u8981\u5220\u9664\u89D2\u8272 {{name}} \u4E48?',
                { name: i.name }
              ),
              onConfirm: () => r.onDeleteRole(),
            });
          });
        return e.createElement(
          'div',
          { className: 'px-2' },
          e.createElement(nt.LP, {
            title: (0, a.t)('\u8EAB\u4EFD\u7EC4\u540D\u79F0'),
            value: r.currentRoleInfo.name,
            editable: !0,
            renderEditor: nt.jo,
            onSave: r.onChangeRoleName,
          }),
          e.createElement(
            B.Z,
            { type: 'primary', danger: !0, onClick: s },
            (0, a.t)('\u5220\u9664\u8EAB\u4EFD\u7EC4')
          )
        );
      });
      gt.displayName = 'RoleSummary';
      function Rt(r) {
        const [i, s] = (0, e.useState)([]),
          D = (0, e.useMemo)(() => !K()(new Set(r), new Set(i)), [r, i]);
        return (
          (0, e.useEffect)(() => {
            s([...r]);
          }, [r]),
          { isEditing: D, editingPermission: i, setEditingPermission: s }
        );
      }
      const yt = e.memo((r) => {
        const i = (0, e.useMemo)(() => {
            var U, v;
            return r.roleId === a.eFs
              ? r.fallbackPermissions
              : (v =
                  (U = r.currentRoleInfo) == null ? void 0 : U.permissions) !=
                null
              ? v
              : [];
          }, [r.roleId, r.fallbackPermissions, r.currentRoleInfo]),
          {
            isEditing: s,
            editingPermission: D,
            setEditingPermission: p,
          } = Rt(i),
          y = (0, e.useCallback)(() => {
            p((0, a.Q$5)());
          }, []);
        return e.createElement(
          'div',
          null,
          e.createElement(
            'div',
            { className: 'mb-2 space-x-2 text-right' },
            e.createElement(
              B.Z,
              { onClick: y },
              (0, a.t)('\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C')
            ),
            e.createElement(
              B.Z,
              {
                type: 'primary',
                disabled: !s,
                onClick: () => r.onSavePermission(D),
              },
              (0, a.t)('\u4FDD\u5B58')
            )
          ),
          e.createElement(V, { value: D, onChange: p })
        );
      });
      yt.displayName = 'RolePermission';
      var Lt = t(38643),
        Tt = (r, i, s) =>
          new Promise((D, p) => {
            var y = (c) => {
                try {
                  v(s.next(c));
                } catch (d) {
                  p(d);
                }
              },
              U = (c) => {
                try {
                  v(s.throw(c));
                } catch (d) {
                  p(d);
                }
              },
              v = (c) =>
                c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
            v((s = s.apply(r, i)).next());
          });
      const Pt = e.memo((r) => {
        const { groupId: i, withoutMemberIds: s = [], onConfirm: D } = r,
          [p, y] = (0, e.useState)([]),
          U = (0, a.aaJ)(i),
          v = (0, e.useMemo)(() => T()(U, ...s), [U, s]),
          [{ loading: c }, d] = (0, a.ilX)(
            () =>
              Tt(void 0, null, function* () {
                yield D(p);
              }),
            [D, p]
          );
        return e.createElement(
          M.AB,
          { title: (0, a.t)('\u9009\u62E9\u7FA4\u7EC4\u6210\u5458') },
          e.createElement(Lt.f, { allUserIds: v, selectedIds: p, onChange: y }),
          e.createElement(
            'div',
            { className: 'text-right' },
            e.createElement(
              B.Z,
              { type: 'primary', loading: c, onClick: d },
              (0, a.t)('\u786E\u8BA4')
            )
          )
        );
      });
      Pt.displayName = 'SelectGroupMember';
      var Ct = t(9021),
        Et = t(79546),
        Ut = t(6494),
        It = t.n(Ut),
        Dt = (r, i, s) =>
          new Promise((D, p) => {
            var y = (c) => {
                try {
                  v(s.next(c));
                } catch (d) {
                  p(d);
                }
              },
              U = (c) => {
                try {
                  v(s.throw(c));
                } catch (d) {
                  p(d);
                }
              },
              v = (c) =>
                c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
            v((s = s.apply(r, i)).next());
          });
      const Ft = e.memo((r) => {
        var i, s;
        const D = r.currentRoleInfo._id,
          p = (0, a.iFL)(r.groupId),
          U = ((i = p == null ? void 0 : p.members) != null ? i : [])
            .filter((De) => {
              var pe;
              return ((pe = De.roles) != null ? pe : []).includes(D);
            })
            .map((De) => De.userId),
          v = (0, a.FDf)(U),
          {
            searchText: c,
            setSearchText: d,
            isSearching: w,
            searchResult: le,
          } = (0, a.RxY)({
            dataSource: v,
            filterFn: (De, pe) => String(De.nickname).includes(pe),
          }),
          Qe = (0, a.nWw)(() => {
            const De = (0, M.h7)(
              e.createElement(Pt, {
                groupId: r.groupId,
                withoutMemberIds: It()([...U]),
                onConfirm: (pe) =>
                  Dt(void 0, null, function* () {
                    try {
                      yield a.o4J.ru.appendGroupMemberRoles(r.groupId, pe, [
                        r.currentRoleInfo._id,
                      ]),
                        (0, a.jiy)(),
                        (0, M.Mr)(De);
                    } catch (ut) {
                      (0, a.hJM)(ut);
                    }
                  }),
              })
            );
          }),
          [, $e] = (0, a.CoE)(
            (De) =>
              Dt(void 0, null, function* () {
                var pe;
                if (!((pe = r.currentRoleInfo) == null ? void 0 : pe._id)) {
                  (0, a.hJM)(
                    (0, a.t)(
                      '\u5F53\u524D\u6CA1\u6709\u9009\u62E9\u4EFB\u4F55\u89D2\u8272\u7EC4'
                    )
                  );
                  return;
                }
                yield a.o4J.ru.removeGroupMemberRoles(
                  r.groupId,
                  [De],
                  [r.currentRoleInfo._id]
                ),
                  (0, a.jiy)();
              }),
            [r.groupId, (s = r.currentRoleInfo) == null ? void 0 : s._id]
          );
        return e.createElement(
          'div',
          null,
          e.createElement(
            'div',
            { className: 'text-right mb-2 flex space-x-1' },
            e.createElement(
              B.Z,
              { type: 'primary', onClick: Qe },
              (0, a.t)('\u6DFB\u52A0\u6210\u5458')
            ),
            v.length > 0 &&
              e.createElement(Et.Z, {
                placeholder: (0, a.t)('\u641C\u7D22\u6210\u5458'),
                size: 'middle',
                suffix: e.createElement(te.JO, {
                  fontSize: 20,
                  color: 'grey',
                  icon: 'mdi:magnify',
                }),
                value: c,
                onChange: (De) => d(De.target.value),
              })
          ),
          (w ? le : v).map((De) =>
            e.createElement(Ct.Q, {
              key: De._id,
              userId: De._id,
              actions: [
                e.createElement(F.a, {
                  key: 'remove',
                  icon: 'mdi:close',
                  onClick: () => $e(De._id),
                }),
              ],
            })
          )
        );
      });
      Ft.displayName = 'RoleMember';
      var Gt = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      const Mt = e.memo((r) => {
        var i, s;
        const { groupId: D } = r,
          [p, y] = (0, e.useState)(a.eFs),
          U = (0, a.iFL)(D),
          v = (i = U == null ? void 0 : U.roles) != null ? i : [],
          c = (0, e.useMemo)(() => v.find((De) => De._id === p), [v, p]),
          {
            loading: d,
            handleCreateRole: w,
            handleSavePermission: le,
            handleChangeRoleName: Qe,
            handleDeleteRole: $e,
          } = St(D, p);
        return e.createElement(
          ht.g,
          { spinning: d, className: 'h-full' },
          e.createElement(
            'div',
            { className: 'flex h-full' },
            e.createElement(
              'div',
              {
                className:
                  'pr-2 mr-2 w-40 mobile:w-28 border-r border-white border-opacity-20',
              },
              e.createElement(
                mt,
                { active: p === a.eFs, onClick: () => y(a.eFs) },
                (0, a.t)('\u6240\u6709\u4EBA')
              ),
              v.map((De) =>
                e.createElement(
                  mt,
                  {
                    key: De._id,
                    active: p === De._id,
                    onClick: () => y(De._id),
                  },
                  De.name
                )
              ),
              e.createElement(xe.Z, { className: 'my-3' }),
              e.createElement(
                mt,
                { active: !1, onClick: w },
                (0, a.t)('\u6DFB\u52A0\u89D2\u8272')
              )
            ),
            e.createElement(
              'div',
              { className: 'flex-1 overflow-y-auto' },
              e.createElement(bt.N, {
                defaultActiveKey: 'permission',
                items: [
                  {
                    key: 'summary',
                    label: (0, a.t)('\u6982\u8FF0'),
                    disabled: p === a.eFs,
                    children: e.createElement(
                      e.Fragment,
                      null,
                      c &&
                        e.createElement(gt, {
                          currentRoleInfo: c,
                          onChangeRoleName: Qe,
                          onDeleteRole: () =>
                            Gt(void 0, null, function* () {
                              yield $e(), y(a.eFs);
                            }),
                        })
                    ),
                  },
                  {
                    key: 'permission',
                    label: (0, a.t)('\u6743\u9650'),
                    children: e.createElement(yt, {
                      roleId: p,
                      fallbackPermissions:
                        (s = U == null ? void 0 : U.fallbackPermissions) != null
                          ? s
                          : [],
                      currentRoleInfo: c,
                      onSavePermission: le,
                    }),
                  },
                  {
                    key: 'member',
                    label: (0, a.t)('\u7BA1\u7406\u6210\u5458'),
                    disabled: p === a.eFs,
                    children: e.createElement(
                      e.Fragment,
                      null,
                      c &&
                        e.createElement(Ft, { groupId: D, currentRoleInfo: c })
                    ),
                  },
                ],
              })
            )
          )
        );
      });
      Mt.displayName = 'GroupRole';
      var xt = t(92951),
        wt = t(15333),
        ft = (r, i, s) =>
          new Promise((D, p) => {
            var y = (c) => {
                try {
                  v(s.next(c));
                } catch (d) {
                  p(d);
                }
              },
              U = (c) => {
                try {
                  v(s.throw(c));
                } catch (d) {
                  p(d);
                }
              },
              v = (c) =>
                c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
            v((s = s.apply(r, i)).next());
          });
      const Ot = e.memo(({ groupId: r }) => {
        var i, s;
        const D = (0, a.iFL)(r),
          [p] = (0, a.WHr)(r, [a.g3S.core.groupBaseInfo]),
          [, y] = (0, a.CoE)(
            (c) =>
              ft(void 0, null, function* () {
                yield (0, a.uRW)(r, 'name', c),
                  (0, a.jiy)(
                    (0, a.t)('\u4FEE\u6539\u7FA4\u7EC4\u540D\u6210\u529F')
                  );
              }),
            [r]
          ),
          [, U] = (0, a.CoE)(
            (c) =>
              ft(void 0, null, function* () {
                yield (0, a.uRW)(r, 'description', c),
                  (0, a.jiy)(
                    (0, a.t)('\u4FEE\u6539\u7FA4\u7EC4\u63CF\u8FF0\u6210\u529F')
                  );
              }),
            [r]
          ),
          [, v] = (0, a.CoE)(
            (c) =>
              ft(void 0, null, function* () {
                yield (0, a.uRW)(r, 'avatar', c.url),
                  (0, a.lHp)(
                    (0, a.t)(
                      '\u4FEE\u6539\u7FA4\u7EC4\u5934\u50CF\u6210\u529F'
                    ),
                    'success'
                  );
              }),
            [r]
          );
        return D
          ? e.createElement(
              'div',
              null,
              e.createElement(st, null, (0, a.t)('\u7FA4\u7EC4\u6982\u8FF0')),
              e.createElement(
                'div',
                { className: 'flex flex-wrap' },
                e.createElement(
                  'div',
                  { className: 'w-1/3 mobile:w-full mobile:text-center' },
                  e.createElement(
                    xt.C,
                    { circle: !0, usage: 'group', onUploadSuccess: v },
                    e.createElement(te.qE, {
                      size: 128,
                      name: D.name,
                      src: D.avatar,
                    })
                  )
                ),
                e.createElement(
                  'div',
                  { className: 'w-2/3 mobile:w-full' },
                  e.createElement(nt.LP, {
                    title: (0, a.t)('\u7FA4\u7EC4\u540D\u79F0'),
                    value: D.name,
                    editable: p,
                    renderEditor: nt.jo,
                    onSave: y,
                  }),
                  e.createElement(nt.LP, {
                    title: (0, a.t)('\u6210\u5458\u6570'),
                    value: String(D.members.length),
                  }),
                  e.createElement(nt.LP, {
                    title: (0, a.t)('\u7FA4\u7EC4\u63CF\u8FF0'),
                    value: (i = D.description) != null ? i : '',
                    content: e.createElement(
                      'pre',
                      null,
                      (s = D.description) != null ? s : ''
                    ),
                    editable: p,
                    renderEditor: Wt,
                    onSave: U,
                  })
                )
              )
            )
          : e.createElement(wt.J, {
              message: (0, a.t)(
                '\u65E0\u6CD5\u83B7\u53D6\u5230\u7FA4\u7EC4\u4FE1\u606F'
              ),
            });
      });
      Ot.displayName = 'GroupSummary';
      const Wt = ({ value: r, onChange: i }) =>
        e.createElement(Et.Z.TextArea, {
          autoSize: { minRows: 4, maxRows: 6 },
          maxLength: 120,
          value: r,
          onChange: (s) => i(s.target.value),
          showCount: !0,
        });
      var Zt = (r, i, s) =>
        new Promise((D, p) => {
          var y = (c) => {
              try {
                v(s.next(c));
              } catch (d) {
                p(d);
              }
            },
            U = (c) => {
              try {
                v(s.throw(c));
              } catch (d) {
                p(d);
              }
            },
            v = (c) =>
              c.done ? D(c.value) : Promise.resolve(c.value).then(y, U);
          v((s = s.apply(r, i)).next());
        });
      const At = e.memo((r) => {
        var i, s, D;
        const p = r.groupId,
          y = (0, a.iFL)(p),
          U = (0, a.TL5)(),
          [{ loading: v }, c] = (0, a.CoE)(
            (w, le) =>
              Zt(void 0, null, function* () {
                yield a.o4J.ru.modifyGroupConfig(p, w, le),
                  U(
                    a.hyC.updateGroupConfig({
                      groupId: p,
                      configName: w,
                      configValue: le,
                    })
                  ),
                  (0, a.jiy)();
              }),
            [p]
          );
        if (!y) return e.createElement(ht.g, { spinning: !0 });
        const d = (i = y.config) != null ? i : {};
        return e.createElement(
          'div',
          null,
          e.createElement(st, null, (0, a.t)('\u7FA4\u7EC4\u914D\u7F6E')),
          e.createElement(nt.LP, {
            title: (0, a.t)('\u9690\u85CF\u6210\u5458\u5B8C\u6574\u540D\u79F0'),
            tip: (0, a.t)(
              '\u7FA4\u7EC4\u9690\u79C1\u63A7\u5236\uFF0C\u9632\u6B62\u901A\u8FC7\u7FA4\u7EC4\u6076\u610F\u83B7\u53D6\u6210\u5458\u4FE1\u606F'
            ),
            content: e.createElement(me.Z, {
              disabled: v,
              checked: (s = d.hideGroupMemberDiscriminator) != null ? s : !1,
              onChange: (w) => c('hideGroupMemberDiscriminator', w),
            }),
          }),
          e.createElement(nt.LP, {
            title: (0, a.t)(
              '\u7981\u6B62\u5728\u7FA4\u7EC4\u53D1\u8D77\u79C1\u4FE1'
            ),
            tip: (0, a.t)(
              '\u7FA4\u7EC4\u9690\u79C1\u63A7\u5236\uFF0C\u9632\u6B62\u901A\u8FC7\u7FA4\u7EC4\u6076\u610F\u9A9A\u6270\u7528\u6237\u3002'
            ),
            content: e.createElement(me.Z, {
              disabled: v || d.hideGroupMemberDiscriminator === !0,
              checked:
                (D =
                  d.hideGroupMemberDiscriminator === !0 ||
                  d.disableCreateConverseFromGroup) != null
                  ? D
                  : !1,
              onChange: (w) => c('disableCreateConverseFromGroup', w),
            }),
          }),
          e.createElement(nt.LP, {
            title: (0, a.t)('\u7FA4\u7EC4\u80CC\u666F'),
            tip: (0, a.t)(
              '\u4E2A\u6027\u5316\u914D\u7F6E\u7FA4\u7EC4\u80CC\u666F\uFF0C\u5C06\u4F1A\u5728\u7FA4\u7EC4\u9080\u8BF7\u9875\u9762\u5C55\u793A'
            ),
            content: e.createElement(
              e.Fragment,
              null,
              e.createElement(
                xt.w,
                {
                  aspect: 16 / 9,
                  usage: 'group',
                  onUploadSuccess: (w) => {
                    c('groupBackgroundImage', w.url);
                  },
                },
                e.createElement(te.Ee, {
                  wrapperClassName: 'block',
                  style: { width: 640, height: 360 },
                  src: d.groupBackgroundImage,
                })
              ),
              e.createElement(
                'div',
                { className: 'text-xs opacity-80' },
                (0, a.t)(
                  '\u5EFA\u8BAE\u6BD4\u4F8B: 16:9 | \u5EFA\u8BAE\u5927\u5C0F: 1280x720'
                )
              ),
              d.groupBackgroundImage &&
                e.createElement(
                  B.Z,
                  {
                    className: 'mt-1',
                    type: 'primary',
                    onClick: () => {
                      c('groupBackgroundImage', '');
                    },
                  },
                  (0, a.t)('\u6E05\u9664')
                )
            ),
          }),
          u.pluginGroupConfigItems.map((w) => {
            const le = (0, he.g)(w.name);
            return e.createElement(nt.LP, {
              key: le,
              title: w.title,
              tip: w.tip,
              content: e.createElement(w.component, {
                value: d[le],
                onChange: (Qe) => c(le, Qe),
                loading: v,
              }),
            });
          })
        );
      });
      At.displayName = 'GroupConfig';
      var Kt = t(64917),
        kt = t(96136),
        jt = t(6342);
      const Nt = e.memo((r) => {
        const i = r.groupId,
          {
            userInfos: s,
            searchText: D,
            setSearchText: p,
            isSearching: y,
            searchResult: U,
            generateActionMenu: v,
          } = (0, Kt.Q)(i),
          c = (d) => {
            const w = v(d);
            return e.createElement(Ct.Q, {
              key: d._id,
              userId: d._id,
              actions: [
                e.createElement(
                  'div',
                  { key: 'more' },
                  e.createElement(
                    kt.Z,
                    { menu: w, trigger: ['click'], placement: 'bottomRight' },
                    e.createElement(
                      'div',
                      null,
                      e.createElement(F.a, { icon: 'mdi:dots-vertical' })
                    )
                  )
                ),
              ],
            });
          };
        return e.createElement(
          'div',
          { className: 'flex flex-col h-full' },
          e.createElement(st, null, (0, a.t)('\u6210\u5458\u7BA1\u7406')),
          e.createElement(
            'div',
            { className: 'py-2' },
            e.createElement(Et.Z, {
              placeholder: (0, a.t)('\u641C\u7D22\u6210\u5458'),
              size: 'large',
              suffix: e.createElement(te.JO, {
                fontSize: 20,
                color: 'grey',
                icon: 'mdi:magnify',
              }),
              value: D,
              onChange: (d) => p(d.target.value),
            })
          ),
          e.createElement(
            'div',
            { className: 'flex-1 overflow-auto' },
            e.createElement(jt.OO, {
              className: 'h-full',
              data: y ? U : s,
              itemContent: (d, w) => c(w),
            })
          )
        );
      });
      Nt.displayName = 'GroupMember';
      const Bt = e.memo((r) => {
        const i = r.groupId,
          s = (0, e.useCallback)(
            (d) => {
              d === !1 && typeof r.onClose == 'function' && r.onClose();
            },
            [r.onClose]
          ),
          [D, p, y, U, v] = (0, a.WHr)(i, [
            a.g3S.core.groupConfig,
            a.g3S.core.manageUser,
            a.g3S.core.managePanel,
            a.g3S.core.manageInvite,
            a.g3S.core.manageRoles,
          ]),
          c = (0, e.useMemo)(() => {
            const d = [
                {
                  type: 'group',
                  title: (0, a.t)('\u901A\u7528'),
                  children: It()([
                    {
                      type: 'item',
                      title: (0, a.t)('\u6982\u8FF0'),
                      content: e.createElement(Ot, { groupId: i }),
                    },
                    D && {
                      type: 'item',
                      title: (0, a.t)('\u914D\u7F6E'),
                      content: e.createElement(At, { groupId: i }),
                    },
                    p && {
                      type: 'item',
                      title: (0, a.t)('\u6210\u5458'),
                      content: e.createElement(Nt, { groupId: i }),
                    },
                    y && {
                      type: 'item',
                      title: (0, a.t)('\u9762\u677F'),
                      content: e.createElement(pt, { groupId: i }),
                    },
                    U && {
                      type: 'item',
                      title: (0, a.t)('\u9080\u8BF7\u7801'),
                      content: e.createElement(j, { groupId: i }),
                    },
                    v && {
                      type: 'item',
                      title: (0, a.t)('\u8EAB\u4EFD\u7EC4'),
                      content: e.createElement(Mt, { groupId: i }),
                    },
                  ]),
                },
              ],
              w = u.pluginCustomPanel
                .filter((le) => le.position === 'groupdetail')
                .map((le) => ({
                  type: 'item',
                  title: le.label,
                  content: e.createElement(le.render),
                }));
            return (
              w.length > 0 &&
                d.push({
                  type: 'group',
                  title: (0, a.t)('\u63D2\u4EF6'),
                  children: w,
                }),
              d
            );
          }, []);
        return e.createElement(
          l.A,
          { value: i },
          e.createElement(
            o.o,
            { onChangeVisible: s },
            e.createElement(n.u, {
              menu: c,
              defaultContentPath: '0.children.0.content',
            })
          )
        );
      });
      Bt.displayName = 'GroupDetail';
    },
    51052: (Oe, Y, t) => {
      t.d(Y, { Z: () => ve });
      var o = t(50842),
        n = t(52983),
        l = t(26288),
        u = t(84143),
        e = t(66559),
        a = t(83996),
        N = t(58761),
        f = t(56489),
        B = t(95268),
        h = t(54782),
        I = t(93540),
        M = (ne, j, g) =>
          new Promise((K, C) => {
            var x = (q) => {
                try {
                  S(g.next(q));
                } catch (ie) {
                  C(ie);
                }
              },
              A = (q) => {
                try {
                  S(g.throw(q));
                } catch (ie) {
                  C(ie);
                }
              },
              S = (q) =>
                q.done ? K(q.value) : Promise.resolve(q.value).then(x, A);
            S((g = g.apply(ne, j)).next());
          });
      const R = n.memo((ne) => {
        const { userInfo: j } = ne,
          g = j._id,
          [K] = (0, l.aoI)([g]),
          { value: C } = (0, l.r53)(
            () =>
              M(void 0, null, function* () {
                if (!j.avatar) return (0, I.Yy)(j.nickname);
                const x = yield (0, a.f)(j.avatar);
                return `rgba(${x.r}, ${x.g}, ${x.b}, ${x.a})`;
              }),
            [j.avatar]
          );
        return n.createElement(
          'div',
          { className: 'relative bg-inherit' },
          n.createElement('div', {
            style: { width: '100%', height: 60, backgroundColor: C },
          }),
          n.createElement(
            'div',
            { className: 'absolute p-1 rounded-1/2 -mt-11 ml-3 bg-inherit' },
            n.createElement(I.OI, {
              size: 80,
              src: j.avatar,
              name: j.nickname,
              isOnline: K,
            })
          ),
          n.createElement('div', { className: 'p-2 mt-10' }, ne.children)
        );
      });
      R.displayName = 'UserProfileContainer';
      var b = t(21513);
      function F(ne = {}) {
        return n.createElement(
          n.Fragment,
          null,
          b.pluginUserExtraInfo.map((j, g) => {
            var K;
            const C = (K = j.component) == null ? void 0 : K.render;
            return C
              ? n.createElement(C, { key: j.name + g, value: ne[j.name] })
              : n.createElement(
                  'div',
                  { key: j.name + g, className: 'flex' },
                  n.createElement(
                    'div',
                    { className: 'w-1/4 text-gray-500' },
                    j.label,
                    ':'
                  ),
                  n.createElement(
                    'div',
                    { className: 'w-3/4' },
                    ne[j.name] ? String(ne[j.name]) : ''
                  )
                );
          })
        );
      }
      var L = (ne, j, g) =>
        new Promise((K, C) => {
          var x = (q) => {
              try {
                S(g.next(q));
              } catch (ie) {
                C(ie);
              }
            },
            A = (q) => {
              try {
                S(g.throw(q));
              } catch (ie) {
                C(ie);
              }
            },
            S = (q) =>
              q.done ? K(q.value) : Promise.resolve(q.value).then(x, A);
          S((g = g.apply(ne, j)).next());
        });
      const G = n.memo((ne) => {
        var j;
        const { userInfo: g, groupInfo: K } = ne,
          C = g._id,
          x = (j = g.extra) != null ? j : {},
          A = re(C, K),
          {
            hideGroupMemberDiscriminator: S,
            disableCreateConverseFromGroup: q,
          } = (0, l.r3q)(K),
          ie = F(x),
          Ie = (0, h.useNavigate)(),
          Ae = (0, l.IIz)(),
          de = !S && !q && Ae !== C,
          [, he] = (0, l.CoE)(
            () =>
              L(void 0, null, function* () {
                const fe = yield (0, l.L1i)([C]);
                Ie(`/main/personal/converse/${fe._id}`);
              }),
            [Ie]
          );
        return (
          (0, n.useEffect)(() => {
            g.avatar &&
              (0, a.f)(g.avatar).then((fe) => {
                console.log('fetchImagePrimaryColor', fe);
              });
          }, [g.avatar]),
          n.createElement(
            'div',
            { className: 'w-80 -mx-4 -my-3 bg-inherit' },
            n.createElement(
              R,
              { userInfo: g },
              n.createElement(
                'div',
                { className: 'text-xl' },
                n.createElement(
                  'span',
                  { className: 'font-semibold' },
                  n.createElement(e.v, { userId: C })
                ),
                !S &&
                  n.createElement(
                    'span',
                    { className: 'opacity-60 ml-1' },
                    '#',
                    g.discriminator
                  )
              ),
              n.createElement(
                N.Z,
                { size: 4, wrap: !0, className: 'py-1' },
                K.owner === C &&
                  n.createElement(
                    f.Z,
                    { color: 'gold' },
                    (0, l.t)('\u521B\u5EFA\u8005')
                  ),
                g.type === 'openapiBot' &&
                  n.createElement(
                    f.Z,
                    { color: 'orange' },
                    (0, l.t)('\u5F00\u653E\u5E73\u53F0\u673A\u5668\u4EBA')
                  ),
                g.type === 'pluginBot' &&
                  n.createElement(
                    f.Z,
                    { color: 'orange' },
                    (0, l.t)('\u63D2\u4EF6\u673A\u5668\u4EBA')
                  ),
                g.temporary &&
                  n.createElement(
                    f.Z,
                    { color: 'processing' },
                    (0, l.t)('\u6E38\u5BA2')
                  ),
                A.map((fe) =>
                  n.createElement(f.Z, { key: fe, color: (0, I.Yy)(fe) }, fe)
                )
              ),
              n.createElement('div', { className: 'pt-2' }, ie),
              n.createElement(
                'div',
                { className: 'text-right' },
                de &&
                  n.createElement(
                    B.Z,
                    { title: (0, l.t)('\u53D1\u9001\u6D88\u606F') },
                    n.createElement(u.a, {
                      icon: 'mdi:message-processing-outline',
                      onClick: he,
                    })
                  )
              )
            )
          )
        );
      });
      G.displayName = 'GroupUserPopover';
      function re(ne, j) {
        var g, K;
        const C =
          (K =
            (g = j.members.find((A) => A.userId === ne)) == null
              ? void 0
              : g.roles) != null
            ? K
            : [];
        return j.roles.filter((A) => C.includes(A._id)).map((A) => A.name);
      }
      const te = n.memo((ne) => {
        var j;
        const { userInfo: g } = ne,
          K = (j = g.extra) != null ? j : {},
          C = F(K);
        return (
          (0, n.useEffect)(() => {
            g.avatar &&
              (0, a.f)(g.avatar).then((x) => {
                console.log('fetchImagePrimaryColor', x);
              });
          }, [g.avatar]),
          n.createElement(
            'div',
            { className: 'w-80 -mx-4 -my-3 bg-inherit' },
            n.createElement(
              R,
              { userInfo: g },
              n.createElement(
                'div',
                { className: 'text-xl' },
                n.createElement(
                  'span',
                  { className: 'font-semibold' },
                  n.createElement(e.v, { userId: g._id })
                ),
                n.createElement(
                  'span',
                  { className: 'opacity-60 ml-1' },
                  '#',
                  g.discriminator
                )
              ),
              n.createElement(
                N.Z,
                { size: 4, wrap: !0, className: 'py-1' },
                g.type === 'openapiBot' &&
                  n.createElement(
                    f.Z,
                    { color: 'orange' },
                    (0, l.t)('\u5F00\u653E\u5E73\u53F0\u673A\u5668\u4EBA')
                  ),
                g.type === 'pluginBot' &&
                  n.createElement(
                    f.Z,
                    { color: 'orange' },
                    (0, l.t)('\u63D2\u4EF6\u673A\u5668\u4EBA')
                  ),
                g.temporary &&
                  n.createElement(
                    f.Z,
                    { color: 'processing' },
                    (0, l.t)('\u6E38\u5BA2')
                  )
              ),
              n.createElement('div', { className: 'pt-2' }, C)
            )
          )
        );
      });
      te.displayName = 'PersonalUserPopover';
      const ve = n.memo((ne) => {
        const j = (0, o.b)(),
          g = (0, l.iFL)(j);
        return (
          (0, l.xzJ)(ne.userInfo._id, !0),
          g
            ? n.createElement(G, { userInfo: ne.userInfo, groupInfo: g })
            : n.createElement(te, { userInfo: ne.userInfo })
        );
      });
      ve.displayName = 'UserPopover';
    },
    63933: (Oe, Y, t) => {
      t.d(Y, { q: () => l });
      var o = t(52983),
        n = t(26288);
      function l(u, e) {
        const a = (0, n.ysv)(u);
        (0, o.useLayoutEffect)(() => {
          const N = (f) => {
            typeof a.current == 'function' && a.current(f);
          };
          return (
            window.addEventListener('keydown', N, e),
            () => {
              window.removeEventListener('keydown', N, e);
            }
          );
        }, []);
      }
    },
    64917: (Oe, Y, t) => {
      t.d(Y, { Q: () => a });
      var o = t(84208),
        n = t(26288),
        l = t(6494),
        u = t.n(l),
        e = (f, B, h) =>
          new Promise((I, M) => {
            var R = (L) => {
                try {
                  F(h.next(L));
                } catch (G) {
                  M(G);
                }
              },
              b = (L) => {
                try {
                  F(h.throw(L));
                } catch (G) {
                  M(G);
                }
              },
              F = (L) =>
                L.done ? I(L.value) : Promise.resolve(L.value).then(R, b);
            F((h = h.apply(f, B)).next());
          });
      function a(f) {
        var B, h;
        const I = (0, n.iFL)(f),
          M = (B = I == null ? void 0 : I.members) != null ? B : [],
          R = (h = I == null ? void 0 : I.roles) != null ? h : [],
          b = (0, n.Tgq)(f),
          [F, L] = (0, n.WHr)(f, [
            n.g3S.core.manageUser,
            n.g3S.core.manageRoles,
          ]),
          { handleMuteMember: G, handleUnmuteMember: re } = N(f, b),
          {
            searchText: te,
            setSearchText: ve,
            isSearching: ne,
            searchResult: j,
          } = (0, n.rcC)(b),
          [, g] = (0, n.CoE)(
            (A) =>
              e(this, null, function* () {
                (yield (0, o.aW)({
                  title: (0, n.t)(
                    '\u786E\u8BA4\u8981\u5C06\u8BE5\u7528\u6237\u79FB\u51FA\u7FA4\u7EC4\u4E48'
                  ),
                })) && (yield n.o4J.ru.deleteGroupMember(f, A), (0, n.jiy)());
              }),
            [f]
          ),
          K = (0, n.zX9)((A) => {
            const S = M.find((ie) => ie.userId === A);
            if (!S || !S.muteUntil) return !1;
            const q = S.muteUntil;
            return new Date(q).valueOf() > new Date().valueOf();
          }),
          C = (0, n.zX9)((A) => {
            var S, q;
            return (q =
              (S = M.find((ie) => ie.userId === A)) == null
                ? void 0
                : S.roles) != null
              ? q
              : [];
          }),
          x = (0, n.zX9)((A) => {
            const S = K(A._id),
              q = C(A._id),
              ie = F
                ? S
                  ? [
                      {
                        key: 'unmute',
                        label: (0, n.t)('\u89E3\u9664\u7981\u8A00'),
                        onClick: () => re(A._id),
                      },
                    ]
                  : [
                      {
                        key: 'mute',
                        label: (0, n.t)('\u7981\u8A00'),
                        children: [
                          {
                            key: '1m',
                            label: (0, n.t)('1\u5206\u949F'),
                            onClick: () => G(A._id, 1 * 60 * 1e3),
                          },
                          {
                            key: '5m',
                            label: (0, n.t)('5\u5206\u949F'),
                            onClick: () => G(A._id, 5 * 60 * 1e3),
                          },
                          {
                            key: '10m',
                            label: (0, n.t)('10\u5206\u949F'),
                            onClick: () => G(A._id, 10 * 60 * 1e3),
                          },
                          {
                            key: '30m',
                            label: (0, n.t)('30\u5206\u949F'),
                            onClick: () => G(A._id, 30 * 60 * 1e3),
                          },
                          {
                            key: '1d',
                            label: (0, n.t)('1\u5929'),
                            onClick: () => G(A._id, 1 * 24 * 60 * 60 * 1e3),
                          },
                          {
                            key: '7d',
                            label: (0, n.t)('7\u5929'),
                            onClick: () => G(A._id, 7 * 24 * 60 * 60 * 1e3),
                          },
                          {
                            key: '30d',
                            label: (0, n.t)('30\u5929'),
                            onClick: () => G(A._id, 30 * 24 * 60 * 60 * 1e3),
                          },
                        ],
                      },
                    ]
                : [],
              Ie =
                L && R.length > 0
                  ? [
                      {
                        key: 'manageRole',
                        label: (0, n.t)('\u5206\u914D\u8EAB\u4EFD\u7EC4'),
                        children: R.map((de) => ({
                          key: de._id,
                          label: de.name,
                          className: q.includes(de._id) ? 'underline' : void 0,
                          onClick: () =>
                            e(this, null, function* () {
                              q.includes(de._id)
                                ? (yield n.o4J.ru.removeGroupMemberRoles(
                                    f,
                                    [A._id],
                                    [de._id]
                                  ),
                                  (0, n.jiy)(
                                    (0, n.t)(
                                      '\u79FB\u9664\u7528\u6237 [{{name}}] \u8EAB\u4EFD\u7EC4 [{{roleName}}] \u6210\u529F',
                                      { name: A.nickname, roleName: de.name }
                                    )
                                  ))
                                : (yield n.o4J.ru.appendGroupMemberRoles(
                                    f,
                                    [A._id],
                                    [de._id]
                                  ),
                                  (0, n.jiy)(
                                    (0, n.t)(
                                      '\u6388\u4E88\u7528\u6237 [{{name}}] \u8EAB\u4EFD\u7EC4 [{{roleName}}] \u6210\u529F',
                                      { name: A.nickname, roleName: de.name }
                                    )
                                  ));
                            }),
                        })),
                      },
                    ]
                  : [];
            return {
              items: u()([
                ...ie,
                ...Ie,
                F && {
                  key: 'delete',
                  label: (0, n.t)('\u79FB\u51FA\u7FA4\u7EC4'),
                  danger: !0,
                  onClick: () => g(A._id),
                },
              ]),
            };
          });
        return {
          userInfos: b,
          searchText: te,
          setSearchText: ve,
          isSearching: ne,
          searchResult: j,
          getMemberHasMute: K,
          handleMuteMember: G,
          handleUnmuteMember: re,
          handleRemoveGroupMember: g,
          generateActionMenu: x,
        };
      }
      function N(f, B) {
        const [, h] = (0, n.CoE)(
            (M, R) =>
              e(this, null, function* () {
                const b = B.find((F) => F._id === M);
                if (!b)
                  throw new Error(
                    (0, n.t)('\u6CA1\u6709\u627E\u5230\u7528\u6237')
                  );
                (yield (0, o.aW)({
                  title: (0, n.t)(
                    '\u786E\u5B9A\u8981\u7981\u8A00 {{name}} \u4E48',
                    { name: b.nickname }
                  ),
                  content: (0, n.t)(
                    '\u7981\u8A00 {{length}}, \u9884\u8BA1\u5230 {{until}} \u4E3A\u6B62',
                    {
                      length: (0, n.TGs)(R),
                      until: (0, n.KJm)(new Date().valueOf() + R),
                    }
                  ),
                })) && (yield n.o4J.ru.muteGroupMember(f, M, R), (0, n.jiy)());
              }),
            [f, B]
          ),
          [, I] = (0, n.CoE)(
            (M) =>
              e(this, null, function* () {
                yield n.o4J.ru.muteGroupMember(f, M, -1), (0, n.jiy)();
              }),
            [f]
          );
        return { handleMuteMember: h, handleUnmuteMember: I };
      }
    },
    95483: (Oe, Y, t) => {
      t.d(Y, { r: () => M });
      var o = t(26288);
      const n = (0, o.fA3)(() => sessionStorage);
      var l = Object.defineProperty,
        u = Object.defineProperties,
        e = Object.getOwnPropertyDescriptors,
        a = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        B = (R, b, F) =>
          b in R
            ? l(R, b, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: F,
              })
            : (R[b] = F),
        h = (R, b) => {
          for (var F in b || (b = {})) N.call(b, F) && B(R, F, b[F]);
          if (a) for (var F of a(b)) f.call(b, F) && B(R, F, b[F]);
          return R;
        },
        I = (R, b) => u(R, e(b));
      function M(R) {
        const [b = {}, F] = n('sessionPreference'),
          L = b[R],
          G = (0, o.nWw)((re) => {
            F(I(h({}, b), { [R]: re }));
          });
        return [L, G];
      }
    },
    16131: (Oe, Y, t) => {
      t.d(Y, { E: () => Ye, x: () => et });
      var o = t(6739),
        n = t(89889),
        l = t(48303),
        u = t(52983),
        e = t(26288);
      const a = u.memo((se) => {
        const $ = (0, e.wY6)(se.groupId, se.panelId);
        if (!$)
          return u.createElement(l.Z, {
            className: 'w-full text-center',
            message: (0, e.t)(
              '\u65E0\u6CD5\u83B7\u53D6\u9762\u677F\u4FE1\u606F'
            ),
          });
        if (typeof $.provider != 'string')
          return u.createElement(l.Z, {
            className: 'w-full text-center',
            message: (0, e.t)(
              '\u672A\u627E\u5230\u63D2\u4EF6\u7684\u63D0\u4F9B\u8005'
            ),
          });
        const Ee = (0, u.useMemo)(
          () =>
            (0, e.YQu)($.pluginPanelName) ? (0, n.S)($.pluginPanelName) : null,
          [$.name]
        );
        if (!Ee)
          return u.createElement(l.Z, {
            className: 'w-full text-center',
            message: u.createElement(
              'div',
              null,
              u.createElement(
                'p',
                null,
                (0, e.t)('\u8BE5\u9762\u677F\u7531\u63D2\u4EF6\u63D0\u4F9B')
              ),
              u.createElement(
                'p',
                null,
                (0, e.t)('\u63D2\u4EF6\u540D'),
                ': ',
                $.provider
              ),
              u.createElement(
                'p',
                null,
                (0, e.t)('\u9762\u677F\u540D'),
                ': ',
                $.pluginPanelName
              )
            ),
          });
        const Fe = Ee.render;
        return Fe
          ? u.createElement(Fe, { panelInfo: $ })
          : u.createElement(o.t, {
              text: (0, e.t)(
                '\u63D2\u4EF6\u6E32\u67D3\u51FD\u6570\u4E0D\u5B58\u5728'
              ),
            });
      });
      a.displayName = 'GroupPluginPanel';
      var N = t(96536),
        f = t(29254),
        B = t(84143),
        h = t(21513),
        I = t(93540),
        M = t(9021),
        R = t(55696),
        b = t(96136),
        F = t(79546),
        L = t(64917),
        G = t(51052),
        re = t(6342),
        te = t(89022),
        ve = t.n(te),
        ne = t(28102),
        j = t.n(ne),
        g = t(13546),
        K = t.n(g);
      const C = u.memo((se) => {
        var $;
        const Ee = se.groupId,
          Fe = (0, e.iFL)(Ee),
          Le = ($ = Fe == null ? void 0 : Fe.members) != null ? $ : [],
          We = (0, e.aoI)(Le.map((me) => me.userId)),
          { hideGroupMemberDiscriminator: Ke } = (0, e.r3q)(Fe),
          {
            userInfos: Te,
            searchText: W,
            setSearchText: _,
            isSearching: z,
            searchResult: H,
            generateActionMenu: X,
          } = (0, L.Q)(Ee),
          ye = (0, u.useMemo)(() => {
            const me = [],
              Ze = [];
            return (
              Te.forEach((O, Z) => {
                We[Z] === !0 ? me.push(O) : Ze.push(O);
              }),
              { [(0, e.t)('\u5728\u7EBF')]: me, [(0, e.t)('\u79BB\u7EBF')]: Ze }
            );
          }, [Te, We]),
          {
            groupCounts: Pe,
            groupNames: xe,
            getGroupedMemberInfo: Ne,
          } = (0, u.useMemo)(() => {
            const me = z ? { '': H } : ye,
              Ze = Object.values(me).map((T) => T.length),
              O = Object.keys(me);
            return {
              groupCounts: Ze,
              groupNames: O,
              getGroupedMemberInfo: (T, V) => {
                const ue = O[V],
                  ge = j()(ve()(Ze, V)),
                  Be = T - ge;
                return K()(me, [ue, Be], null);
              },
            };
          }, [z, H, ye]);
        if (!Fe) return u.createElement(o.t, null);
        if (Te.length === 0) return u.createElement(R.Z, null);
        const Ge = (me) => {
          var Ze;
          if (!me) return u.createElement('div', null);
          const O = X(me);
          return ((Ze = O.items) != null ? Ze : []).length > 0
            ? u.createElement(
                b.Z,
                { key: me._id, trigger: ['contextMenu'], menu: O },
                u.createElement(
                  'div',
                  null,
                  u.createElement(M.Q, {
                    userId: me._id,
                    popover: u.createElement(G.Z, { userInfo: me }),
                    hideDiscriminator: Ke,
                  })
                )
              )
            : u.createElement(M.Q, {
                key: me._id,
                userId: me._id,
                popover: u.createElement(G.Z, { userInfo: me }),
                hideDiscriminator: Ke,
              });
        };
        return u.createElement(
          'div',
          { className: 'h-full flex flex-col' },
          u.createElement(
            'div',
            { className: 'p-2' },
            u.createElement(F.Z, {
              placeholder: (0, e.t)('\u641C\u7D22\u6210\u5458'),
              size: 'large',
              suffix: u.createElement(I.JO, {
                fontSize: 20,
                color: 'grey',
                icon: 'mdi:magnify',
              }),
              value: W,
              onChange: (me) => _(me.target.value),
            })
          ),
          u.createElement(
            'div',
            { className: 'flex-1' },
            u.createElement(re.Px, {
              className: 'h-full',
              groupCounts: Pe,
              groupContent: (me) =>
                u.createElement(
                  'div',
                  {
                    className:
                      'pt-4 px-2.5 font-bold text-sm text-opacity-80 bg-content-light dark:bg-content-dark',
                  },
                  xe[me],
                  ' - ',
                  Pe[me]
                ),
              itemContent: (me, Ze) => Ge(Ne(me, Ze)),
            })
          )
        );
      });
      C.displayName = 'MembersPanel';
      var x = t(29188),
        A = t(63839);
      function S(se, $) {
        const Ee = (0, e.IIz)(),
          Fe = (0, e.mWi)(se, Ee ?? ''),
          [Le] = (0, e.a_M)(se, $, [e.g3S.core.message]),
          [We, Ke] = (0, u.useState)(void 0),
          Te = (0, u.useCallback)(() => {
            Ke(
              Fe && Fe
                ? (0, e.t)('\u7981\u8A00\u4E2D, \u8FD8\u5269 {{remain}}', {
                    remain: (0, e.TGs)(
                      new Date().valueOf() - new Date(Fe).valueOf()
                    ),
                  })
                : void 0
            );
          }, [Fe]);
        return (
          (0, e.Yzt)(Te, 1e4),
          (0, u.useLayoutEffect)(() => {
            Te();
          }, [Fe]),
          Le
            ? { disabled: Boolean(Fe), placeholder: We }
            : {
                disabled: !0,
                placeholder: (0, e.t)(
                  '\u6CA1\u6709\u53D1\u9001\u6D88\u606F\u7684\u6743\u9650, \u8BF7\u8054\u7CFB\u7FA4\u7EC4\u6240\u6709\u8005'
                ),
              }
        );
      }
      const q = u.memo(({ groupId: se, panelId: $ }) => {
        const Ee = (0, e.iFL)(se),
          Fe = (0, e.Tgq)(se),
          Le = (0, e.wY6)(se, $),
          { disabled: We, placeholder: Ke } = S(se, $),
          Te = (0, e.x5F)();
        return !Ee || !Le
          ? null
          : u.createElement(
              x.q,
              {
                groupId: se,
                panelId: $,
                prefixActions: () => [
                  ...h.pluginPanelActions
                    .filter((W) => W.position === 'group')
                    .map((W) =>
                      u.createElement(B.a, {
                        key: W.name,
                        title: W.label,
                        shape: 'square',
                        icon: W.icon,
                        iconClassName: 'text-2xl',
                        onClick: () => W.onClick({ groupId: se, panelId: $ }),
                      })
                    ),
                ],
                suffixActions: ({ setRightPanel: W }) => [
                  u.createElement(B.a, {
                    key: 'search',
                    title: (0, e.t)('\u804A\u5929\u8BB0\u5F55\u641C\u7D22'),
                    shape: 'square',
                    icon: 'mdi:text-search',
                    iconClassName: 'text-2xl',
                    onClick: () =>
                      W({
                        name: (0, e.t)('\u804A\u5929\u8BB0\u5F55'),
                        panel: u.createElement(A.z, {
                          groupId: se,
                          converseId: $,
                        }),
                      }),
                  }),
                  u.createElement(B.a, {
                    key: 'members',
                    title: (0, e.t)('\u6210\u5458\u5217\u8868'),
                    shape: 'square',
                    icon: 'mdi:account-supervisor-outline',
                    iconClassName: 'text-2xl',
                    onClick: () =>
                      W({
                        name: (0, e.t)('\u6210\u5458') + ` (${Fe.length})`,
                        panel: u.createElement(C, { groupId: se }),
                      }),
                  }),
                ],
              },
              u.createElement(
                f.x2,
                {
                  users: Fe.map((W) => ({
                    id: W._id,
                    display: Te[W._id] ? Te[W._id] : W.nickname,
                  })),
                  panels: Ee.panels
                    .filter((W) => W.type !== e.Xpe.GROUP)
                    .map((W) => ({
                      id: `/main/group/${se}/${W.id}`,
                      display: W.name,
                    })),
                  disabled: We,
                  placeholder: Ke,
                },
                u.createElement(N.r, {
                  converseId: $,
                  converseTitle: Le.name,
                  isGroup: !0,
                  groupId: se,
                })
              )
            );
      });
      q.displayName = 'TextPanel';
      var ie = t(85478),
        Ie = t(95483),
        Ae = t(22215),
        de = Object.defineProperty,
        he = Object.defineProperties,
        fe = Object.getOwnPropertyDescriptors,
        Re = Object.getOwnPropertySymbols,
        je = Object.prototype.hasOwnProperty,
        ze = Object.prototype.propertyIsEnumerable,
        ke = (se, $, Ee) =>
          $ in se
            ? de(se, $, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Ee,
              })
            : (se[$] = Ee),
        qe = (se, $) => {
          for (var Ee in $ || ($ = {})) je.call($, Ee) && ke(se, Ee, $[Ee]);
          if (Re) for (var Ee of Re($)) ze.call($, Ee) && ke(se, Ee, $[Ee]);
          return se;
        },
        Xe = (se, $) => he(se, fe($));
      function Ve(se, $) {
        const [Ee, Fe] = (0, Ie.r)('groupLastVisitPanel');
        (0, u.useEffect)(() => {
          Fe(Xe(qe({}, Ee), { [se]: $ }));
        }, [se, $]);
      }
      const Ye = u.memo((se) => {
        const { groupId: $, panelId: Ee } = se,
          Fe = (0, e.iFL)($),
          Le = (0, e.wY6)($, Ee),
          We = (0, u.useMemo)(() => ({ groupId: $, panelId: Ee }), [$, Ee]);
        Ve($, Ee);
        const [Ke] = (0, e.a_M)($, Ee, [e.g3S.core.viewPanel]);
        return Fe === null
          ? u.createElement(l.Z, {
              className: 'w-full text-center',
              type: 'error',
              message: (0, e.t)('\u7FA4\u7EC4\u4E0D\u5B58\u5728'),
            })
          : Le === null
          ? u.createElement(o.t, {
              text: (0, e.t)('\u9762\u677F\u4E0D\u5B58\u5728'),
            })
          : Ke
          ? Le.type === e.Xpe.TEXT
            ? u.createElement(
                e.f4G,
                { groupInfo: Fe },
                u.createElement(
                  ie.x.Provider,
                  { value: We },
                  u.createElement(q, { groupId: $, panelId: Le.id })
                )
              )
            : Le.type === e.Xpe.PLUGIN
            ? u.createElement(
                ie.x.Provider,
                { value: We },
                u.createElement(a, { groupId: $, panelId: Le.id })
              )
            : u.createElement(l.Z, {
                className: 'w-full text-center',
                type: 'error',
                message: (0, e.t)('\u672A\u77E5\u7684\u9762\u677F\u7C7B\u578B'),
              })
          : u.createElement(o.t, {
              text: (0, e.t)(
                '\u6CA1\u6709\u9762\u677F\u8BBF\u95EE\u6743\u9650'
              ),
            });
      });
      Ye.displayName = 'GroupPanelRender';
      const et = u.memo(() => {
        const { groupId: se, panelId: $ } = (0, Ae.PO)();
        return u.createElement(Ye, { groupId: se, panelId: $ });
      });
      et.displayName = 'GroupPanelRoute';
    },
    53937: (Oe, Y, t) => {
      t.d(Y, { Z: () => Te });
      var o = t(6739),
        n = t(14517),
        l = t(52983),
        u = t(72425),
        e = t(26288);
      const a = l.memo((W) => {
        const [_, { save: z }] = (0, e.y$C)('pin-sizes', [90, 10]),
          H = (X) => {
            z(X);
          };
        return l.createElement(
          u.Z,
          {
            className: (0, n.Z)('split', W.className),
            sizes: _,
            minSize: 250,
            expandToMin: !0,
            onDragEnd: H,
          },
          W.children
        );
      });
      a.displayName = 'SplitPanel';
      var N = t(50842),
        f = t(54782),
        B = t(12492),
        h = t(16131),
        I = t(14698),
        M = t.n(I),
        R = t(95483);
      const b = l.memo(() => {
        const { groupId: W = '' } = (0, f.useParams)(),
          _ = (0, f.useNavigate)(),
          [z] = (0, R.r)('groupLastVisitPanel'),
          H = (0, e.ysv)(z),
          X = (0, e.iFL)(W);
        return (
          (0, l.useEffect)(() => {
            var ye;
            if (
              !X ||
              !Array.isArray(X == null ? void 0 : X.panels) ||
              (X == null ? void 0 : X.panels.length) === 0
            )
              return;
            const Pe = (ye = H.current) == null ? void 0 : ye[X._id],
              xe = X.panels;
            if (xe.some((me) => me.id === Pe)) {
              _(`/main/group/${W}/${Pe}`, { replace: !0 });
              return;
            }
            const Ge = xe.find((me) => me.type !== e.Xpe.GROUP);
            M()(Ge) || _(`/main/group/${W}/${Ge.id}`, { replace: !0 });
          }, [X]),
          null
        );
      });
      b.displayName = 'GroupPanelRedirect';
      var F = t(6494),
        L = t.n(F),
        G = t(1348),
        re = t(84208),
        te = t(17679),
        ve = t(40318),
        ne = t(72297),
        j = t(59417),
        g = t.n(j);
      function K(W, _) {
        const z = (0, f.useLocation)(),
          H = (0, l.useRef)(''),
          X = (0, e.ysv)(_);
        (0, l.useEffect)(() => {
          const { nav: ye } = (0, ne.qp)(z.search, { ignoreQueryPrefix: !0 }),
            Pe = String(ye);
          Pe &&
            (Pe !== H.current && g()(Pe, W) && X.current(Pe), (H.current = Pe));
        }, [z.search]);
      }
      var C = (W, _, z) =>
        new Promise((H, X) => {
          var ye = (Ne) => {
              try {
                xe(z.next(Ne));
              } catch (Ge) {
                X(Ge);
              }
            },
            Pe = (Ne) => {
              try {
                xe(z.throw(Ne));
              } catch (Ge) {
                X(Ge);
              }
            },
            xe = (Ne) =>
              Ne.done ? H(Ne.value) : Promise.resolve(Ne.value).then(ye, Pe);
          xe((z = z.apply(W, _)).next());
        });
      function x(W) {
        const _ = (0, e.GLd)(W),
          z = (0, f.useNavigate)(),
          H = (0, l.useCallback)(() => {
            const Pe = (0, re.h7)(
              l.createElement(te.a, {
                groupId: W,
                onClose: () => {
                  (0, re.Mr)(Pe);
                },
              })
            );
          }, [W]),
          X = (0, l.useCallback)(() => {
            (0, re.h7)(l.createElement(ve.P, { groupId: W }));
          }, [W]),
          ye = (0, l.useCallback)(() => {
            (0, e.wp$)({
              message: _
                ? (0, e.t)(
                    '\u60A8\u662F\u7FA4\u7EC4\u7BA1\u7406\u8005\uFF0C\u9000\u51FA\u7FA4\u7EC4\u4F1A\u5BFC\u81F4\u89E3\u6563\u7FA4\u7EC4'
                  )
                : (0, e.t)('\u786E\u5B9A\u8981\u9000\u51FA\u7FA4\u7EC4\u4E48?'),
              onConfirm() {
                return C(this, null, function* () {
                  yield (0, e.XV6)(W), z('/main', { replace: !0 });
                });
              },
            });
          }, [W, _]);
        return (
          K('group.*', (Pe) => {
            Pe.startsWith('group.detail') && H();
          }),
          { handleShowGroupDetail: H, handleInviteUser: X, handleQuitGroup: ye }
        );
      }
      const A = l.memo((W) => {
        const { groupId: _ } = W,
          z = (0, e.iFL)(_),
          { t: H } = (0, e.$G7)(),
          [X, ye] = (0, e.WHr)(_, [e.g3S.core.groupDetail, e.g3S.core.invite]),
          {
            handleShowGroupDetail: Pe,
            handleInviteUser: xe,
            handleQuitGroup: Ne,
          } = x(_);
        if (M()(z)) return null;
        const Ge = {
          items: L()([
            X && {
              key: '0',
              label: H('\u67E5\u770B\u8BE6\u60C5'),
              onClick: Pe,
            },
            ye && {
              key: '1',
              label: H('\u9080\u8BF7\u7528\u6237'),
              onClick: xe,
            },
            {
              key: '2',
              label: H('\u9000\u51FA\u7FA4\u7EC4'),
              danger: !0,
              onClick: Ne,
            },
          ]),
        };
        return l.createElement(
          G.M,
          { menu: Ge, 'data-testid': 'group-header' },
          z == null ? void 0 : z.name
        );
      });
      A.displayName = 'GroupHeader';
      var S = t(93540);
      const q = l.memo((W) => {
        const [_, z] = (0, l.useReducer)((H) => !H, !0);
        return l.createElement(
          'div',
          null,
          l.createElement(
            'div',
            {
              className: 'flex items-center cursor-pointer py-1 text-xs',
              onClick: z,
            },
            l.createElement(S.JO, {
              className: 'mr-1',
              icon: 'mdi:chevron-right',
              rotate: _ ? 45 : 0,
            }),
            l.createElement('div', null, W.header)
          ),
          l.createElement(
            'div',
            {
              className:
                'transition-all overflow-hidden space-y-0.5 pl-2 ml-1 border-l-4 border-opacity-40',
              style: { maxHeight: _ ? 'var(--max-height)' : 0 },
              ref: (H) =>
                H == null
                  ? void 0
                  : H.style.setProperty('--max-height', `${H.scrollHeight}px`),
            },
            W.children
          )
        );
      });
      q.displayName = 'GroupSection';
      var ie = t(10114),
        Ie = t(75283),
        Ae = t(58761),
        de = t(68e3),
        he = t(10330),
        fe = Object.defineProperty,
        Re = Object.getOwnPropertySymbols,
        je = Object.prototype.hasOwnProperty,
        ze = Object.prototype.propertyIsEnumerable,
        ke = (W, _, z) =>
          _ in W
            ? fe(W, _, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: z,
              })
            : (W[_] = z),
        qe = (W, _) => {
          for (var z in _ || (_ = {})) je.call(_, z) && ke(W, z, _[z]);
          if (Re) for (var z of Re(_)) ze.call(_, z) && ke(W, z, _[z]);
          return W;
        };
      const Xe = l.memo((W) => {
        const { icon: _, name: z, to: H, dimmed: X = !1, badge: ye } = W,
          xe = (0, f.useLocation)().pathname.startsWith(H);
        return l.createElement(
          he.rU,
          { className: 'block', to: H },
          l.createElement(
            'div',
            {
              className: (0, n.Z)(
                'w-full hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20 cursor-pointer text-gray-900 dark:text-white rounded px-1 h-8 flex items-center text-base group',
                {
                  'bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20': xe,
                },
                X && 'text-opacity-40 dark:text-opacity-40'
              ),
            },
            l.createElement(
              'div',
              {
                className: (0, n.Z)(
                  'flex items-center justify-center px-1 mr-1'
                ),
              },
              _
            ),
            l.createElement(
              Ie.Z.Text,
              {
                className: (0, n.Z)(
                  'flex-1 text-gray-900 dark:text-white',
                  X && 'text-opacity-40 dark:text-opacity-40'
                ),
                ellipsis: !0,
              },
              z
            ),
            l.createElement(
              Ae.Z,
              null,
              ye === !0 &&
                l.createElement(de.Z, qe({ status: 'error' }, W.badgeProps)),
              W.extraBadge
            )
          )
        );
      });
      Xe.displayName = 'GroupPanelItem';
      var Ve = t(22215);
      const Ye = l.memo((W) => {
        var _;
        const { groupId: z, panel: H } = W,
          X = H.id,
          ye = (0, e.EP)(X),
          Pe = (0, Ve.rF)(z, X, (_ = H.pluginPanelName) != null ? _ : ''),
          { checkIsMuted: xe } = (0, e.OqL)(),
          Ne = xe(X, z);
        return l.createElement(Xe, {
          name: H.name,
          icon: W.icon,
          to: `/main/group/${z}/${H.id}`,
          dimmed: Ne,
          badge: ye,
          badgeProps: { status: Ne ? 'default' : 'error' },
          extraBadge: Pe,
        });
      });
      Ye.displayName = 'GroupAckPanelItem';
      var et = t(96136),
        se = t(86724),
        $ = t.n(se),
        Ee = t(60402),
        Fe = t(38887),
        Le = t(35633);
      const We = l.memo((W) => {
        var _;
        const { groupId: z, panel: H } = W,
          X = H.id,
          { hasOpenedPanel: ye, openPanelWindow: Pe } = (0, Ee.l)(
            `/panel/group/${z}/${X}`
          ),
          xe = (0, e.iFL)(z),
          Ne = (0, e.TL5)(),
          { markConverseAllAck: Ge } = (0, e.hoD)(X),
          me = (0, Ve.Sp)(H),
          Ze = (0, Ve.rF)(z, X, (_ = H.pluginPanelName) != null ? _ : ''),
          { checkIsMuted: O, toggleMute: Z } = (0, e.OqL)(),
          [T] = (0, e.a_M)(z, X, [e.g3S.core.viewPanel]);
        if (!xe) return l.createElement(Fe.T, null);
        if (!T) return null;
        const V = (0, e.YQu)(xe.pinnedPanelId) && xe.pinnedPanelId === X,
          ue = {
            items: L()([
              {
                key: 'copy',
                label: (0, e.t)('\u590D\u5236\u94FE\u63A5'),
                icon: l.createElement(S.JO, { icon: 'mdi:content-copy' }),
                onClick: () => {
                  $()(`${location.origin}/main/group/${z}/${X}`),
                    (0, e.lHp)(
                      (0, e.t)('\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F')
                    );
                },
              },
              {
                key: 'new',
                label: (0, e.t)('\u5728\u65B0\u7A97\u53E3\u6253\u5F00'),
                icon: l.createElement(S.JO, { icon: 'mdi:dock-window' }),
                disabled: ye,
                onClick: Pe,
              },
              V
                ? {
                    key: 'unpin',
                    label: (0, e.t)('Unpin'),
                    icon: l.createElement(S.JO, { icon: 'mdi:pin-off' }),
                    onClick: () => {
                      Ne(e.hyC.unpinGroupPanel({ groupId: z }));
                    },
                  }
                : {
                    key: 'pin',
                    label: (0, e.t)('Pin'),
                    icon: l.createElement(S.JO, { icon: 'mdi:pin' }),
                    onClick: () => {
                      Ne(e.hyC.pinGroupPanel({ groupId: z, panelId: X }));
                    },
                  },
              H.type === e.Xpe.TEXT && {
                key: 'markAsRead',
                label: (0, e.t)('\u6807\u8BB0\u4E3A\u5DF2\u8BFB'),
                icon: l.createElement(S.JO, {
                  icon: 'mdi:message-badge-outline',
                }),
                onClick: Ge,
              },
              H.type === e.Xpe.TEXT && {
                key: 'mute',
                label: O(X, z)
                  ? (0, e.t)('\u53D6\u6D88\u514D\u6253\u6270')
                  : (0, e.t)('\u514D\u6253\u6270'),
                icon: l.createElement(S.JO, { icon: 'mdi:bell-off-outline' }),
                onClick: () => Z(X),
              },
              ...me,
            ]),
          },
          ge = V
            ? l.createElement(S.JO, { icon: 'mdi:pin' })
            : l.createElement(S.JO, { icon: 'mdi:pound' });
        return l.createElement(
          et.Z,
          { menu: ue, trigger: ['contextMenu'] },
          l.createElement(
            'div',
            null,
            (0, Le.Q)(H)
              ? l.createElement(Ye, { icon: ge, groupId: z, panel: H })
              : l.createElement(Xe, {
                  name: H.name,
                  icon: ge,
                  to: `/main/group/${z}/${X}`,
                  extraBadge: Ze,
                })
          )
        );
      });
      We.displayName = 'SidebarItem';
      const Ke = l.memo(() => {
        var W;
        const { groupId: _ = '' } = (0, f.useParams)(),
          z = (0, e.iFL)(_),
          H = (W = z == null ? void 0 : z.panels) != null ? W : [];
        return l.createElement(
          ie.L,
          { 'data-tc-role': 'sidebar-group' },
          l.createElement(A, { groupId: _ }),
          l.createElement(
            'div',
            { className: 'p-2 space-y-1 overflow-auto' },
            H.filter((X) => !(0, e.YQu)(X.parentId)).map((X) =>
              X.type === e.Xpe.GROUP
                ? l.createElement(
                    q,
                    { key: X.id, header: X.name },
                    H.filter((ye) => ye.parentId === X.id).map((ye) =>
                      l.createElement(We, { key: ye.id, groupId: _, panel: ye })
                    )
                  )
                : l.createElement(We, { key: X.id, groupId: _, panel: X })
            )
          )
        );
      });
      Ke.displayName = 'Sidebar';
      const Te = l.memo(() => {
        const { groupId: W = '' } = (0, f.useParams)(),
          _ = (0, e.iFL)(W);
        if (!_)
          return l.createElement(o.t, {
            text: (0, e.t)('\u7FA4\u7EC4\u672A\u627E\u5230'),
          });
        const z = _.pinnedPanelId,
          H = l.createElement(
            f.Routes,
            null,
            l.createElement(f.Route, {
              path: '/:panelId',
              element: l.createElement(h.x, null),
            }),
            l.createElement(f.Route, {
              path: '/',
              element: l.createElement(b, null),
            })
          );
        return l.createElement(
          N.A,
          { value: W },
          l.createElement(
            B.J,
            {
              'data-tc-role': 'content-group',
              sidebar: l.createElement(Ke, null),
            },
            (0, e.YQu)(z)
              ? l.createElement(
                  a,
                  { className: 'flex-auto w-full' },
                  l.createElement('div', null, H),
                  l.createElement(
                    'div',
                    null,
                    l.createElement(h.E, { groupId: W, panelId: z })
                  )
                )
              : H
          )
        );
      });
      Te.displayName = 'Group';
    },
    12492: (Oe, Y, t) => {
      t.d(Y, { J: () => j });
      var o = t(52983),
        n = t(58935),
        l = t(14698),
        u = t.n(l),
        e = t(59270),
        a = t(89935),
        N = t(14517),
        f = t(67706),
        B = t(26288),
        h = Object.defineProperty,
        I = Object.defineProperties,
        M = Object.getOwnPropertyDescriptors,
        R = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        F = Object.prototype.propertyIsEnumerable,
        L = (g, K, C) =>
          K in g
            ? h(g, K, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C,
              })
            : (g[K] = C),
        G = (g, K) => {
          for (var C in K || (K = {})) b.call(K, C) && L(g, C, K[C]);
          if (R) for (var C of R(K)) F.call(K, C) && L(g, C, K[C]);
          return g;
        },
        re = (g, K) => I(g, M(K)),
        te = (g, K) => {
          var C = {};
          for (var x in g) b.call(g, x) && K.indexOf(x) < 0 && (C[x] = g[x]);
          if (g != null && R)
            for (var x of R(g))
              K.indexOf(x) < 0 && F.call(g, x) && (C[x] = g[x]);
          return C;
        };
      const ve = (g) => {
          var K = g,
            { className: C, style: x, children: A } = K,
            S = te(K, ['className', 'style', 'children']);
          return o.createElement(
            'div',
            re(G({}, S), {
              style: x,
              className: (0, N.Z)(
                'flex flex-row flex-1 overflow-hidden relative',
                C
              ),
            }),
            A
          );
        },
        ne = o.memo((g) => {
          const { setShowSidebar: K } = (0, n.S)(),
            C = (0, e.useDrag)(
              (x) => {
                const { swipe: A } = x,
                  S = A[0];
                S > 0 ? K(!0) : S < 0 && K(!1);
              },
              { axis: 'x', swipe: { distance: 5 } }
            );
          return o.createElement(
            ve,
            G({ style: { touchAction: 'pan-x' } }, C()),
            g.children
          );
        });
      ne.displayName = 'PageGestureWrapper';
      const j = o.memo((g) => {
        const { sidebar: K, children: C } = g,
          { showSidebar: x, setShowSidebar: A } = (0, n.S)(),
          S = (0, a.d)(),
          q = (0, o.useCallback)((fe) => {
            fe.stopPropagation(), fe.preventDefault(), A(!1);
          }, []);
        (0, B.qoQ)([S], () => {
          S === !1 && A(!0);
        });
        const ie = u()(K)
            ? null
            : o.createElement(
                'div',
                {
                  className: (0, N.Z)(
                    'bg-sidebar-light dark:bg-sidebar-dark flex-shrink-0 transition-width w-60'
                  ),
                },
                g.sidebar
              ),
          Ie = S === !0 && x === !0 && !u()(ie),
          Ae = Ie
            ? o.createElement('div', {
                className: 'absolute right-0 top-0 bottom-0 z-10',
                style: { width: 'calc(100% - 15rem)' },
                onClick: q,
              })
            : null,
          de = C,
          he = o.createElement(
            f.S,
            null,
            ie,
            Ae,
            o.createElement(
              'div',
              {
                className: (0, N.Z)(
                  'flex flex-auto bg-content-light dark:bg-content-dark overflow-hidden',
                  S &&
                    'transform left-0 w-full h-full absolute transition-transform',
                  S && { 'translate-x-60': x, 'translate-x-0': !x }
                ),
                'data-tc-role': g['data-tc-role'],
              },
              o.createElement('div', { className: 'tc-content-background' }),
              o.createElement(
                'div',
                {
                  className: (0, N.Z)('flex relative w-full', {
                    'overflow-auto': !Ie,
                    'overflow-hidden': Ie,
                  }),
                },
                o.createElement(f.S, null, de)
              )
            )
          );
        return S
          ? o.createElement(ne, null, he)
          : o.createElement(ve, null, he);
      });
      j.displayName = 'PageContent';
    },
    14231: (Oe, Y, t) => {
      t.d(Y, { d: () => C });
      var o = t(64939),
        n = t(96536),
        l = t(9021),
        u = t(52983),
        e = t(26288),
        a = t(712),
        N = t(6494),
        f = t.n(N),
        B = t(84208),
        h = t(75526),
        I = t(2945),
        M = (x, A, S) =>
          new Promise((q, ie) => {
            var Ie = (he) => {
                try {
                  de(S.next(he));
                } catch (fe) {
                  ie(fe);
                }
              },
              Ae = (he) => {
                try {
                  de(S.throw(he));
                } catch (fe) {
                  ie(fe);
                }
              },
              de = (he) =>
                he.done ? q(he.value) : Promise.resolve(he.value).then(Ie, Ae);
            de((S = S.apply(x, A)).next());
          });
      const R = u.memo((x) => {
        const { converseId: A, withoutUserIds: S = [] } = x,
          [q, ie] = (0, u.useState)([]),
          [{ loading: Ie }, Ae] = (0, e.ilX)(
            () =>
              M(void 0, null, function* () {
                yield (0, e.m8p)(A, [...q]), (0, B.Mr)();
              }),
            [A, q]
          );
        return u.createElement(
          B.AB,
          {
            title: (0, e.t)('\u9080\u8BF7\u597D\u53CB\u52A0\u5165\u4F1A\u8BDD'),
          },
          u.createElement(I.B, {
            withoutUserIds: S,
            selectedIds: q,
            onChange: ie,
          }),
          u.createElement(
            'div',
            { className: 'text-right' },
            u.createElement(
              h.Z,
              { type: 'primary', loading: Ie, onClick: Ae },
              (0, e.t)('\u786E\u8BA4')
            )
          )
        );
      });
      R.displayName = 'AppendDMConverseMembers';
      var b = t(60402),
        F = t(87179),
        L = t(84143),
        G = t(21513),
        re = t(50093),
        te = t(63839),
        ve = t(29254);
      const ne = u.memo(({ converse: x }) => {
        const A = (0, e.Y84)(x);
        return (0, e.t)('\u4E0E {{name}} \u7684\u4F1A\u8BDD', { name: A });
      });
      ne.displayName = 'ConversePanelTitle';
      const j = u.memo(({ members: x }) =>
        u.createElement(
          'div',
          null,
          x.map((A) => u.createElement(l.Q, { key: A, userId: A }))
        )
      );
      j.displayName = 'ConversePanelMembers';
      const g = u.memo(({ converseId: x }) => {
        var A;
        const S = (0, e.CGy)((fe) => fe.chat.converses[x]),
          q = (0, e.IIz)(),
          ie = (0, e.FDf)(
            ((A = S == null ? void 0 : S.members) != null ? A : []).filter(
              (fe) => fe !== q
            )
          ),
          {
            hasOpenedPanel: Ie,
            openPanelWindow: Ae,
            closePanelWindow: de,
          } = (0, b.l)(`/panel/personal/converse/${x}`);
        if (Ie) return u.createElement(F.x, { onClosePanelWindow: de });
        const he = S && u.createElement(ne, { converse: S });
        return u.createElement(
          a.S,
          {
            header: he,
            actions: ({ setRightPanel: fe }) =>
              S
                ? f()([
                    ...G.pluginPanelActions
                      .filter((Re) => Re.position === 'dm')
                      .map((Re) =>
                        u.createElement(L.a, {
                          key: Re.name,
                          title: Re.label,
                          shape: 'square',
                          icon: Re.icon,
                          iconClassName: 'text-2xl',
                          onClick: () => Re.onClick({ converseId: x }),
                        })
                      ),
                    u.createElement(L.a, {
                      key: 'open',
                      title: (0, e.t)('\u5728\u65B0\u7A97\u53E3\u6253\u5F00'),
                      shape: 'square',
                      icon: 'mdi:dock-window',
                      iconClassName: 'text-2xl',
                      onClick: Ae,
                    }),
                    S.members.length === 2
                      ? u.createElement(L.a, {
                          key: 'create',
                          title: (0, e.t)('\u521B\u5EFA\u4F1A\u8BDD'),
                          shape: 'square',
                          icon: 'mdi:account-multiple-plus-outline',
                          iconClassName: 'text-2xl',
                          onClick: () =>
                            (0, B.h7)(
                              u.createElement(re.m, {
                                hiddenUserIds: S.members,
                              })
                            ),
                        })
                      : u.createElement(L.a, {
                          key: 'add',
                          title: (0, e.t)('\u9080\u8BF7\u6210\u5458'),
                          shape: 'square',
                          icon: 'mdi:account-multiple-plus-outline',
                          iconClassName: 'text-2xl',
                          onClick: () =>
                            (0, B.h7)(
                              u.createElement(R, {
                                converseId: S._id,
                                withoutUserIds: S.members,
                              })
                            ),
                        }),
                    u.createElement(L.a, {
                      key: 'search',
                      title: (0, e.t)('\u804A\u5929\u8BB0\u5F55\u641C\u7D22'),
                      shape: 'square',
                      icon: 'mdi:text-search',
                      iconClassName: 'text-2xl',
                      onClick: () =>
                        fe({
                          name: (0, e.t)('\u804A\u5929\u8BB0\u5F55'),
                          panel: u.createElement(te.z, { converseId: x }),
                        }),
                    }),
                    S.members.length > 2 &&
                      u.createElement(L.a, {
                        key: 'members',
                        title: (0, e.t)('\u6210\u5458\u5217\u8868'),
                        shape: 'square',
                        icon: 'mdi:account-supervisor-outline',
                        iconClassName: 'text-2xl',
                        onClick: () =>
                          fe({
                            name:
                              (0, e.t)('\u6210\u5458') +
                              ` (${S.members.length})`,
                            panel: u.createElement(j, { members: S.members }),
                          }),
                      }),
                  ])
                : [],
          },
          u.createElement(
            ve.x2,
            { users: ie.map((fe) => ({ id: fe._id, display: fe.nickname })) },
            u.createElement(n.r, {
              converseId: x,
              converseTitle: he,
              isGroup: !1,
            })
          )
        );
      });
      g.displayName = 'ConversePanel';
      var K = t(54782);
      const C = u.memo(() => {
        const x = (0, K.useParams)();
        return x.converseId
          ? u.createElement(g, { converseId: x.converseId })
          : u.createElement(o.T, null);
      });
      C.displayName = 'PersonalConverse';
    },
    7364: (Oe, Y, t) => {
      t.d(Y, { l: () => L });
      var o = t(26288),
        n = t(52983),
        l = t(38887),
        u = t(21848),
        e = t(14698),
        a = t.n(e),
        N = t(54782),
        f = t(58935),
        B = t(442),
        h = t(5198),
        I = t(96857),
        M = t(6739),
        R = t(13893),
        b = (G, re, te) =>
          new Promise((ve, ne) => {
            var j = (C) => {
                try {
                  K(te.next(C));
                } catch (x) {
                  ne(x);
                }
              },
              g = (C) => {
                try {
                  K(te.throw(C));
                } catch (x) {
                  ne(x);
                }
              },
              K = (C) =>
                C.done ? ve(C.value) : Promise.resolve(C.value).then(j, g);
            K((te = te.apply(G, re)).next());
          });
      function F() {
        const G = (0, N.useNavigate)(),
          {
            value: re,
            loading: te,
            error: ve,
          } = (0, o.r53)(
            () =>
              b(this, null, function* () {
                let g;
                try {
                  g = yield (0, u.gP)();
                } catch (x) {
                  G(
                    `/entry/login?redirect=${encodeURIComponent(
                      location.pathname
                    )}`,
                    { replace: !0 }
                  );
                  return;
                }
                const K = (0, o.vIP)();
                K.dispatch(o.hIH.setUserInfo(g)), (0, h._3)(K);
                const C = yield (0, o.Tzh)(g.token);
                return (0, h.Kj)(C), (0, o.cUn)(C, K), { store: K, socket: C };
              }),
            []
          ),
          ne = re == null ? void 0 : re.store,
          j = re == null ? void 0 : re.socket;
        return { loading: te, store: ne, socket: j, error: ve };
      }
      const L = n.memo((G) => {
        const { loading: re, store: te, error: ve, socket: ne } = F();
        return re
          ? n.createElement(
              'div',
              {
                className:
                  'fixed inset-0 flex items-center justify-center bg-content-light dark:bg-content-dark text-gray-700 dark:text-white text-xl',
              },
              n.createElement(l.T, {
                tip: (0, o.t)(
                  '\u6B63\u5728\u8FDE\u63A5\u5230\u804A\u5929\u670D\u52A1\u5668...'
                ),
              })
            )
          : ve
          ? (console.error('[MainProvider]', ve),
            n.createElement('div', null, ve.message))
          : a()(te)
          ? n.createElement(M.t, {
              text: (0, o.t)(
                '\u51FA\u73B0\u5F02\u5E38, Store \u521B\u5EFA\u5931\u8D25'
              ),
            })
          : a()(ne)
          ? n.createElement(M.t, {
              text: (0, o.t)(
                '\u51FA\u73B0\u5F02\u5E38, Socket \u521B\u5EFA\u5931\u8D25'
              ),
            })
          : n.createElement(
              o.m$Z,
              { store: te },
              n.createElement(
                I.Z,
                { socket: ne },
                n.createElement(
                  f.f,
                  null,
                  n.createElement(
                    R.L,
                    null,
                    n.createElement(B.$2, null, G.children)
                  )
                )
              )
            );
      });
      L.displayName = 'MainProvider';
    },
    58935: (Oe, Y, t) => {
      t.d(Y, { S: () => a, f: () => e });
      var o = t(52983),
        n = t(71607),
        l = t.n(n);
      const u = o.createContext({
        showSidebar: !0,
        switchSidebar: l(),
        setShowSidebar: l(),
      });
      u.displayName = 'SidebarContext';
      const e = o.memo((N) => {
        const [f, B] = (0, o.useState)(!0),
          h = (0, o.useCallback)(() => {
            B(!f);
          }, [f]);
        return o.createElement(
          u.Provider,
          { value: { showSidebar: f, switchSidebar: h, setShowSidebar: B } },
          N.children
        );
      });
      e.displayName = 'SidebarContextProvider';
      function a() {
        return (0, o.useContext)(u);
      }
    },
    35633: (Oe, Y, t) => {
      t.d(Y, { Q: () => l });
      var o = t(26288),
        n = t(89889);
      function l(u) {
        var e, a;
        if (u.type === o.Xpe.TEXT) return !0;
        if (u.type === o.Xpe.PLUGIN) {
          const N = (0, n.S)(u.name);
          return (a =
            (e = N == null ? void 0 : N.feature) == null
              ? void 0
              : e.includes('ack')) != null
            ? a
            : !1;
        }
        return !1;
      }
    },
    64750: (Oe, Y, t) => {
      t.d(Y, {
        $: () => u,
        FF: () => l,
        Hi: () => e,
        dq: () => N,
        er: () => a,
        ks: () => f,
        rR: () => n,
      });
      var o = t(79172);
      const n = (0, o.P6)('enter'),
        l = (0, o.P6)('space'),
        u = (0, o.P6)('esc'),
        e = (0, o.P6)('mod+k'),
        a = (0, o.P6)('up'),
        N = (0, o.P6)('down');
      function f(B) {
        const h = B.key;
        return /[a-zA-Z]/.test(h);
      }
    },
    83996: (Oe, Y, t) => {
      t.d(Y, { f: () => u, w: () => e });
      var o = t(26288),
        n = (a, N, f) =>
          new Promise((B, h) => {
            var I = (b) => {
                try {
                  R(f.next(b));
                } catch (F) {
                  h(F);
                }
              },
              M = (b) => {
                try {
                  R(f.throw(b));
                } catch (F) {
                  h(F);
                }
              },
              R = (b) =>
                b.done ? B(b.value) : Promise.resolve(b.value).then(I, M);
            R((f = f.apply(a, N)).next());
          });
      function l(a) {
        return n(this, null, function* () {
          const N = document.createElement('img');
          return new Promise((f, B) => {
            (N.onload = () => f(N)),
              (N.onerror = B),
              (N.src = (0, o.Awg)(a)),
              (N.crossOrigin = 'Anonymous');
          });
        });
      }
      function u(a) {
        return n(this, null, function* () {
          const N = yield l(a),
            f = document.createElement('canvas');
          (f.width = N.width), (f.height = N.height);
          const B = f.getContext('2d');
          if (!B) return { r: 0, g: 0, b: 0, a: 0 };
          B.drawImage(N, 0, 0, f.width, f.height);
          const h = B.getImageData(0, 0, f.width, f.height);
          let I = 0,
            M = 0,
            R = 0,
            b = 0;
          for (let L = 0; L < h.height; L++)
            for (let G = 0; G < h.width; G++)
              (I += h.data[(h.width * L + G) * 4]),
                (M += h.data[(h.width * L + G) * 4 + 1]),
                (R += h.data[(h.width * L + G) * 4 + 2]),
                (b += h.data[(h.width * L + G) * 4 + 3]);
          const F = h.width * h.height;
          return (
            (I = Math.round(I / F)),
            (M = Math.round(M / F)),
            (R = Math.round(R / F)),
            (b = Math.round(b / F)),
            { r: I, g: M, b: R, a: b }
          );
        });
      }
      function e(a) {
        return !['image/gif'].includes(a);
      }
    },
    21848: (Oe, Y, t) => {
      t.d(Y, { JM: () => h, gP: () => B, rU: () => N });
      var o = t(26288),
        n = t(14698),
        l = t.n(n),
        u = t(87450),
        e = (I, M, R) =>
          new Promise((b, F) => {
            var L = (te) => {
                try {
                  re(R.next(te));
                } catch (ve) {
                  F(ve);
                }
              },
              G = (te) => {
                try {
                  re(R.throw(te));
                } catch (ve) {
                  F(ve);
                }
              },
              re = (te) =>
                te.done ? b(te.value) : Promise.resolve(te.value).then(L, G);
            re((R = R.apply(I, M)).next());
          });
      let a = null;
      function N(I) {
        a = I;
      }
      function f() {
        return a;
      }
      function B() {
        return e(this, null, function* () {
          let I = f();
          if (l()(I)) {
            const M = yield (0, u.pT)();
            if (typeof M != 'string')
              throw new Error('Token \u683C\u5F0F\u4E0D\u5408\u6CD5');
            if (
              (console.debug(
                '\u6B63\u5728\u5C1D\u8BD5\u4F7F\u7528Token\u767B\u5F55'
              ),
              (I = yield o.o4J.EA.loginWithToken(M)),
              I === null)
            )
              throw new Error('Token \u5185\u5BB9\u4E0D\u5408\u6CD5');
            N(I);
          }
          return I;
        });
      }
      function h(I) {
        if (typeof I != 'string') return !0;
        const M = I.split('@')[1];
        return !!(!M || M.endsWith('.msgbyte.com'));
      }
    },
  },
]);
