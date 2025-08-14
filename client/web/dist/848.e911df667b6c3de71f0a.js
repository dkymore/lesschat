'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [848],
  {
    61500: (ie, S, e) => {
      e.d(S, { R$: () => R, SH: () => j, Ux: () => D });
      var p = e(52983),
        F = e(54782),
        i = e(26288);
      const D = p.memo((E) => {
        const T = (0, F.useNavigate)();
        return p.createElement(
          'div',
          { className: 'absolute bottom-4 left-0 right-0 text-center' },
          p.createElement(
            'div',
            {
              className:
                'shadow-lg px-6 py-2 rounded-full inline-block bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer',
              onClick: () => {
                T(E.link);
              },
            },
            E.text
          )
        );
      });
      D.displayName = 'JumpToButton';
      const j = p.memo((E) => {
        const T = `/main/group/${E.groupId}/${E.panelId}`;
        return p.createElement(D, {
          link: T,
          text: (0, i.t)('\u8DF3\u8F6C\u5230\u9762\u677F'),
        });
      });
      j.displayName = 'JumpToGroupPanelButton';
      const R = p.memo((E) => {
        const T = E.groupId
          ? `/main/group/${E.groupId}/${E.converseId}`
          : `/main/personal/converse/${E.converseId}`;
        return p.createElement(D, {
          link: T,
          text: (0, i.t)('\u8DF3\u8F6C\u5230\u4F1A\u8BDD'),
        });
      });
      R.displayName = 'JumpToConverseButton';
    },
    28074: (ie, S, e) => {
      e.d(S, { U: () => Q, c: () => X });
      var p = e(80474),
        F = e(72297),
        i = e(52983),
        D = e(26288),
        j = e(93540),
        R = e(66175),
        E = e(44611),
        T = e(33797),
        o = Object.defineProperty,
        V = Object.defineProperties,
        $ = Object.getOwnPropertyDescriptors,
        K = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        z = (f, d, P) =>
          d in f
            ? o(f, d, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: P,
              })
            : (f[d] = P),
        q = (f, d) => {
          for (var P in d || (d = {})) H.call(d, P) && z(f, P, d[P]);
          if (K) for (var P of K(d)) k.call(d, P) && z(f, P, d[P]);
          return f;
        },
        _ = (f, d) => V(f, $(d));
      const ee = (0, p.P)(() =>
          Promise.all([e.e(994), e.e(20)]).then(e.bind(e, 28020))
        ),
        Q = i.memo(({ raw: f, baseUrl: d, allowIframe: P }) => {
          const { t: B } = (0, D.$G7)(),
            Y = (0, i.useCallback)(
              (m) => (
                (m = (0, D.Awg)(m)),
                (0, D.YQu)(d) ? new URL(m, (0, F.Cr)(d)).href : m
              ),
              [d]
            ),
            te = (0, i.useMemo)(
              () => ({
                img: (m) =>
                  i.createElement(j.Ee, {
                    style: m.style,
                    width: m.width,
                    height: m.height,
                    src: m.src,
                    preview: !0,
                  }),
                svg: () => i.createElement('div', null, 'not support svg'),
                iframe: (m) => {
                  if (!P)
                    return i.createElement(
                      'div',
                      null,
                      B('\u4E0D\u652F\u6301iframe')
                    );
                  let M = m.src;
                  return M
                    ? M.startsWith('http')
                      ? (M && M.includes('?') && (M += '&autoplay=0'),
                        i.createElement('iframe', _(q({}, m), { src: M })))
                      : i.createElement(
                          'div',
                          null,
                          B('\u53EA\u652F\u6301http\u8DEF\u5F84')
                        )
                    : i.createElement('div', null);
                },
                embed: () =>
                  i.createElement('div', null, B('\u4E0D\u652F\u6301embed')),
                html: () =>
                  i.createElement(
                    'div',
                    null,
                    B('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49HTML')
                  ),
                style: () =>
                  i.createElement(
                    'div',
                    null,
                    B('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F')
                  ),
                meta: () =>
                  i.createElement(
                    'div',
                    null,
                    B('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49Meta')
                  ),
              }),
              []
            );
          return i.createElement(
            ee,
            {
              className: 'tailchat-markdown',
              transformImageUri: (m) => Y(m),
              transformLinkUri: (m) => Y(m),
              remarkPlugins: [R.Z],
              rehypePlugins: [E.Z, T.Z],
              linkTarget: '_blank',
              skipHtml: !0,
              components: te,
            },
            f
          );
        });
      Q.displayName = 'Markdown';
      const X = (0, p.P)(() =>
        Promise.all([e.e(994), e.e(556), e.e(943)])
          .then(e.bind(e, 92943))
          .then((f) => f.MarkdownEditor)
      );
    },
    15329: (ie, S, e) => {
      e.r(S),
        e.d(S, {
          Avatar: () => x.qE,
          AvatarUploader: () => Ue.C,
          BaseChatInputButton: () => ze.L,
          Button: () => H.Z,
          Card: () => Ze,
          Checkbox: () => B.Z,
          CopyableText: () => x.v$,
          DefaultFullModalInputEditorRender: () => oe.jo,
          DefaultFullModalTextAreaEditorRender: () => oe.lj,
          Divider: () => Y.Z,
          Emoji: () => st.d,
          Empty: () => Je.Z,
          ErrorBoundary: () => it.S,
          ErrorView: () => me.o,
          FullModalField: () => oe.LP,
          GroupExtraDataPanel: () => ye,
          GroupPanelContainer: () => de.q,
          GroupPanelSelector: () => he,
          Icon: () => x.JO,
          IconBtn: () => ae.a,
          Image: () => x.Ee,
          ImageUploader: () => Ue.w,
          Input: () => p.Z,
          JumpToButton: () => le.Ux,
          JumpToConverseButton: () => le.R$,
          JumpToGroupPanelButton: () => le.SH,
          Link: () => Ke.rU,
          Loadable: () => tt.P,
          Loading: () => ve.g,
          LoadingOnFirst: () => nt.t,
          LoadingSpinner: () => at.T,
          Markdown: () => Te.U,
          MarkdownEditor: () => Te.c,
          Menu: () => m.Z,
          MessageAckContainer: () => He.H,
          ModalWrapper: () => U.AB,
          NoData: () => gt.J,
          NotFound: () => yt.T,
          PillTabPane: () => pe.c,
          PillTabs: () => pe.N,
          Popconfirm: () => P,
          Popover: () => $.Z,
          PortalAdd: () => xe.rk,
          PortalRemove: () => xe.i6,
          Problem: () => ue.t,
          SensitiveText: () => x.PJ,
          SidebarView: () => ot.u,
          Skeleton: () => $e.Z,
          Space: () => te.Z,
          Switch: () => Ge.Z,
          Table: () => M.Z,
          Tag: () => Ve.Z,
          TextArea: () => Ct,
          Tooltip: () => Le.Z,
          UserAvatar: () => Ne,
          UserListItem: () => Et.Q,
          UserName: () => Fe.v,
          UserNamePure: () => Fe.V,
          WebFastForm: () => x.Po,
          WebMetaForm: () => x.Po,
          Webview: () => Ae.tP,
          WebviewKeepAlive: () => Ae._W,
          closeModal: () => U.Mr,
          createMetaFormSchema: () => x._D,
          metaFormFieldSchema: () => x._6,
          notification: () => We.Z,
          openConfirmModal: () => U._5,
          openModal: () => U.h7,
          openReconfirmModal: () => U.VW,
          useChatInputActionContext: () => Qe.at,
          useModalContext: () => U.vR,
          withKeepAliveOverlay: () => pt.A,
        });
      var p = e(79546),
        F = e(97364),
        i = e(86203),
        D = e(95657),
        j = e(87608),
        R = e.n(j),
        E = e(31021),
        T = e(70603),
        o = e(52983),
        V = e(94920),
        $ = e(40013),
        K = e(59676),
        H = e(75526),
        k = e(69561),
        z = e(28707),
        q = e(84421),
        _ = e(60242),
        ee = e(98493),
        Q = function (a) {
          var n = a.prefixCls,
            r = a.okButtonProps,
            l = a.cancelButtonProps,
            O = a.title,
            g = a.cancelText,
            y = a.okText,
            s = a.okType,
            I = a.icon,
            Z = a.showCancel,
            A = Z === void 0 ? !0 : Z,
            N = a.close,
            C = a.onConfirm,
            h = a.onCancel,
            L = o.useContext(V.E_),
            se = L.getPrefixCls;
          return o.createElement(
            q.Z,
            { componentName: 'Popconfirm', defaultLocale: _.Z.Popconfirm },
            function (W) {
              return o.createElement(
                'div',
                { className: ''.concat(n, '-inner-content') },
                o.createElement(
                  'div',
                  { className: ''.concat(n, '-message') },
                  I &&
                    o.createElement(
                      'span',
                      { className: ''.concat(n, '-message-icon') },
                      I
                    ),
                  o.createElement(
                    'div',
                    { className: ''.concat(n, '-message-title') },
                    (0, ee.Z)(O)
                  )
                ),
                o.createElement(
                  'div',
                  { className: ''.concat(n, '-buttons') },
                  A &&
                    o.createElement(
                      H.Z,
                      (0, F.Z)({ onClick: h, size: 'small' }, l),
                      g ?? W.cancelText
                    ),
                  o.createElement(
                    z.Z,
                    {
                      buttonProps: (0, F.Z)(
                        (0, F.Z)({ size: 'small' }, (0, k.n)(s)),
                        r
                      ),
                      actionFn: C,
                      close: N,
                      prefixCls: se('btn'),
                      quitOnNullishReturnValue: !0,
                      emitEvent: !0,
                    },
                    y ?? W.okText
                  )
                )
              );
            }
          );
        },
        X = void 0,
        f = function (t, a) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              a.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var l = 0, r = Object.getOwnPropertySymbols(t);
              l < r.length;
              l++
            )
              a.indexOf(r[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[l]) &&
                (n[r[l]] = t[r[l]]);
          return n;
        },
        d = o.forwardRef(function (t, a) {
          var n = t.prefixCls,
            r = t.placement,
            l = r === void 0 ? 'top' : r,
            O = t.trigger,
            g = O === void 0 ? 'click' : O,
            y = t.okType,
            s = y === void 0 ? 'primary' : y,
            I = t.icon,
            Z = I === void 0 ? o.createElement(D.Z, null) : I,
            A = t.children,
            N = t.overlayClassName,
            C = t.onOpenChange,
            h = t.onVisibleChange,
            L = f(t, [
              'prefixCls',
              'placement',
              'trigger',
              'okType',
              'icon',
              'children',
              'overlayClassName',
              'onOpenChange',
              'onVisibleChange',
            ]),
            se = o.useContext(V.E_),
            W = se.getPrefixCls,
            ht = (0, E.Z)(!1, {
              value: t.open !== void 0 ? t.open : t.visible,
              defaultValue:
                t.defaultOpen !== void 0 ? t.defaultOpen : t.defaultVisible,
            }),
            Se = (0, i.Z)(ht, 2),
            je = Se[0],
            xt = Se[1],
            w = function (v, c) {
              xt(v, !0), h == null || h(v, c), C == null || C(v, c);
            },
            Ot = function (v) {
              w(!1, v);
            },
            It = function (v) {
              var c;
              return (c = t.onConfirm) === null || c === void 0
                ? void 0
                : c.call(X, v);
            },
            Dt = function (v) {
              var c;
              w(!1, v),
                (c = t.onCancel) === null || c === void 0 || c.call(X, v);
            },
            Nt = function (v) {
              v.keyCode === T.Z.ESC && je && w(!1, v);
            },
            Ft = function (v) {
              var c = t.disabled,
                J = c === void 0 ? !1 : c;
              J || w(v);
            },
            Re = W('popover', n),
            Tt = W('popconfirm', n),
            At = R()(Tt, N);
          return o.createElement(
            $.Z,
            (0, F.Z)({}, L, {
              trigger: g,
              prefixCls: Re,
              placement: l,
              onOpenChange: Ft,
              open: je,
              ref: a,
              overlayClassName: At,
              _overlay: o.createElement(
                Q,
                (0, F.Z)({ okType: s, icon: Z }, t, {
                  prefixCls: Re,
                  close: Ot,
                  onConfirm: It,
                  onCancel: Dt,
                })
              ),
            }),
            (0, K.Tm)(A, {
              onKeyDown: function (v) {
                var c, J;
                o.isValidElement(A) &&
                  ((J = A == null ? void 0 : (c = A.props).onKeyDown) ===
                    null ||
                    J === void 0 ||
                    J.call(c, v)),
                  Nt(v);
              },
            })
          );
        });
      const P = d;
      var B = e(66990),
        Y = e(75217),
        te = e(58761),
        m = e(3301),
        M = e(69104),
        Ge = e(44411),
        Le = e(95268),
        We = e(43991),
        Je = e(65097),
        Ve = e(56489),
        $e = e(55696),
        x = e(93540),
        Ke = e(10330),
        He = e(16365),
        ze = e(28723),
        Qe = e(29254),
        de = e(29188),
        Xe = e(85478),
        u = e(26288),
        ue = e(6739),
        me = e(21597),
        ve = e(18300),
        ae = e(84143),
        U = e(84208),
        Ye = e(85466),
        be = e.n(Ye),
        we = Object.defineProperty,
        ke = Object.defineProperties,
        qe = Object.getOwnPropertyDescriptors,
        ce = Object.getOwnPropertySymbols,
        _e = Object.prototype.hasOwnProperty,
        et = Object.prototype.propertyIsEnumerable,
        fe = (t, a, n) =>
          a in t
            ? we(t, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[a] = n),
        ne = (t, a) => {
          for (var n in a || (a = {})) _e.call(a, n) && fe(t, n, a[n]);
          if (ce) for (var n of ce(a)) et.call(a, n) && fe(t, n, a[n]);
          return t;
        },
        Ee = (t, a) => ke(t, qe(a)),
        Pe = (t, a, n) =>
          new Promise((r, l) => {
            var O = (s) => {
                try {
                  y(n.next(s));
                } catch (I) {
                  l(I);
                }
              },
              g = (s) => {
                try {
                  y(n.throw(s));
                } catch (I) {
                  l(I);
                }
              },
              y = (s) =>
                s.done ? r(s.value) : Promise.resolve(s.value).then(O, g);
            y((n = n.apply(t, a)).next());
          });
      const ge = o.memo((t) => {
        const { groupId: a, panelId: n, names: r } = t,
          [l, O] = (0, o.useReducer)((N) => N + 1, 0),
          {
            value: g = {},
            loading: y,
            error: s,
          } = (0, u.r53)(
            () =>
              Pe(void 0, null, function* () {
                return (yield Promise.all(
                  r.map((C) =>
                    u.o4J.ru
                      .getGroupPanelExtraData(t.groupId, t.panelId, C)
                      .then((h) => ({ name: C, data: h }))
                  )
                )).reduce((C, h) => Ee(ne({}, C), { [h.name]: h.data }), {});
              }),
            [a, n, r, l]
          ),
          [I] = (0, u.WHr)(a, [u.g3S.core.managePanel]),
          Z = (0, o.useRef)(!1),
          A = (0, u.nWw)(() => {
            const N = ne({}, g);
            if (!t.renderEdit) {
              console.warn('[GroupExtraDataPanel] Please set renderEdit');
              return;
            }
            const C = () =>
              Pe(void 0, null, function* () {
                if (Z.current === !0) {
                  (0, u.lHp)(
                    (0, u.t)('\u6B63\u5728\u4FDD\u5B58, \u8BF7\u7A0D\u540E')
                  );
                  return;
                }
                be()(N, g) ||
                  ((Z.current = !0),
                  yield Promise.all(
                    Object.entries(N).map(([h, L]) =>
                      u.o4J.ru.saveGroupPanelExtraData(a, n, h, L)
                    )
                  ),
                  (Z.current = !1),
                  O(),
                  (0, u.jiy)());
              });
            (0, U.h7)(t.renderEdit(N), { onCloseModal: C });
          });
        return s
          ? o.createElement(me.o, { error: s })
          : o.createElement(
              de.q,
              {
                groupId: a,
                panelId: n,
                prefixActions: () =>
                  I
                    ? [
                        o.createElement(ae.a, {
                          key: 'edit',
                          title: (0, u.t)('\u7F16\u8F91'),
                          shape: 'square',
                          icon: 'mdi:square-edit-outline',
                          iconClassName: 'text-2xl',
                          onClick: A,
                        }),
                      ]
                    : [],
              },
              o.createElement(
                ve.g,
                { className: 'h-full w-full', spinning: y },
                o.createElement(
                  'div',
                  { className: 'overflow-auto h-full' },
                  t.render(g)
                )
              )
            );
      });
      ge.displayName = 'GroupExtraDataPanelInner';
      const ye = o.memo((t) => {
        const a = (0, Xe.D)();
        return a === null
          ? o.createElement(ue.t, {
              text: (0, u.t)(
                '\u7EC4\u4EF6\u53EA\u80FD\u5728\u7FA4\u7EC4\u9762\u677F\u4E2D\u624D\u80FD\u6B63\u5E38\u663E\u793A'
              ),
            })
          : o.createElement(
              ge,
              Ee(ne({}, t), { groupId: a.groupId, panelId: a.panelId })
            );
      });
      ye.displayName = 'GroupExtraDataPanel';
      var pe = e(83667),
        oe = e(7606),
        tt = e(80474),
        at = e(38887),
        nt = e(36932),
        ot = e(3856),
        Ce = e(73246),
        rt = e(50842);
      const { Option: lt } = Ce.Z,
        he = o.memo((t) => {
          var a, n;
          const r = (0, rt.b)(),
            l = (a = t.groupId) != null ? a : r,
            O = (n = t.panelType) != null ? n : u.Xpe.TEXT,
            g = (0, u.Ew8)(l),
            y = (0, o.useMemo)(() => g.filter((s) => s.type === O), [g, O]);
          return o.createElement(
            Ce.Z,
            {
              className: t.className,
              style: t.style,
              placeholder: (0, u.t)('\u8BF7\u9009\u62E9\u9762\u677F'),
              value: t.value,
              onChange: t.onChange,
            },
            y.map((s) =>
              o.createElement(lt, { key: s.id, value: s.id }, s.name)
            )
          );
        });
      he.displayName = 'GroupPanelSelector';
      var st = e(3139),
        xe = e(442),
        it = e(67706),
        dt = Object.defineProperty,
        ut = Object.defineProperties,
        mt = Object.getOwnPropertyDescriptors,
        b = Object.getOwnPropertySymbols,
        Oe = Object.prototype.hasOwnProperty,
        Ie = Object.prototype.propertyIsEnumerable,
        De = (t, a, n) =>
          a in t
            ? dt(t, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[a] = n),
        vt = (t, a) => {
          for (var n in a || (a = {})) Oe.call(a, n) && De(t, n, a[n]);
          if (b) for (var n of b(a)) Ie.call(a, n) && De(t, n, a[n]);
          return t;
        },
        ct = (t, a) => ut(t, mt(a)),
        ft = (t, a) => {
          var n = {};
          for (var r in t) Oe.call(t, r) && a.indexOf(r) < 0 && (n[r] = t[r]);
          if (t != null && b)
            for (var r of b(t))
              a.indexOf(r) < 0 && Ie.call(t, r) && (n[r] = t[r]);
          return n;
        };
      const Ne = o.memo((t) => {
        const a = t,
          { userId: n } = a,
          r = ft(a, ['userId']),
          l = (0, u.xzJ)(n);
        return o.createElement(
          x.qE,
          ct(vt({}, r), { src: l.avatar, name: l.nickname })
        );
      });
      Ne.displayName = 'UserAvatar';
      var Fe = e(66559),
        Et = e(9021),
        Te = e(28074),
        Ae = e(45305),
        Pt = e(74774);
      const re = o.memo((t) =>
        o.createElement(
          'div',
          { className: 'w-3/4' },
          o.createElement(
            'div',
            {
              className:
                'max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden',
              style: { minWidth: 240 },
            },
            t.children
          )
        )
      );
      re.displayName = 'CardWrapper';
      const Be = o.memo((t) => {
        var a;
        const n = (a = t.payload) != null ? a : {},
          r = (0, u.nWw)(() => {
            (0, Pt.GR)(n.url, n.label);
          });
        return o.createElement(
          re,
          null,
          o.createElement(
            'div',
            { className: 'flex w-full items-center' },
            o.createElement(
              'div',
              { className: 'mr-3 overflow-hidden flex-1' },
              o.createElement(
                'div',
                { className: 'flex text-lg items-center' },
                o.createElement(x.JO, { icon: 'mdi:paperclip' }),
                o.createElement(
                  'span',
                  { className: 'ml-1' },
                  (0, u.t)('\u6587\u4EF6')
                )
              ),
              o.createElement(
                'div',
                {
                  className:
                    'text-sm text-black text-opacity-60 dark:text-white dark:text-opacity-60',
                },
                n.label
              )
            ),
            o.createElement(ae.a, {
              title: (0, u.t)('\u4E0B\u8F7D'),
              icon: 'mdi:cloud-download-outline',
              onClick: r,
            })
          )
        );
      });
      Be.displayName = 'FileCard';
      var Me = e(21513);
      const Ze = o.memo((t) => {
        if (Me.pluginCardItemMap[t.type]) {
          const n = Me.pluginCardItemMap[t.type].render;
          return o.createElement(n, { payload: t.payload });
        }
        return t.type === 'file'
          ? o.createElement(Be, { payload: t.payload })
          : o.createElement(
              re,
              null,
              (0, u.t)('\u672A\u77E5\u7684\u5361\u7247\u7C7B\u578B')
            );
      });
      Ze.displayName = 'Card';
      var le = e(61500),
        gt = e(15333),
        yt = e(64939),
        pt = e(74312),
        Ue = e(92951);
      const Ct = p.Z.TextArea;
    },
  },
]);
