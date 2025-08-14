'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [179],
  {
    61500: (ve, R, m) => {
      m.d(R, { R$: () => Z, SH: () => v, Ux: () => e });
      var t = m(52983),
        I = m(54782),
        p = m(26288);
      const e = t.memo((f) => {
        const g = (0, I.useNavigate)();
        return t.createElement(
          'div',
          { className: 'absolute bottom-4 left-0 right-0 text-center' },
          t.createElement(
            'div',
            {
              className:
                'shadow-lg px-6 py-2 rounded-full inline-block bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer',
              onClick: () => {
                g(f.link);
              },
            },
            f.text
          )
        );
      });
      e.displayName = 'JumpToButton';
      const v = t.memo((f) => {
        const g = `/main/group/${f.groupId}/${f.panelId}`;
        return t.createElement(e, {
          link: g,
          text: (0, p.t)('\u8DF3\u8F6C\u5230\u9762\u677F'),
        });
      });
      v.displayName = 'JumpToGroupPanelButton';
      const Z = t.memo((f) => {
        const g = f.groupId
          ? `/main/group/${f.groupId}/${f.converseId}`
          : `/main/personal/converse/${f.converseId}`;
        return t.createElement(e, {
          link: g,
          text: (0, p.t)('\u8DF3\u8F6C\u5230\u4F1A\u8BDD'),
        });
      });
      Z.displayName = 'JumpToConverseButton';
    },
    37034: (ve, R, m) => {
      m.d(R, { S: () => j });
      var t = m(73246),
        I = m(52983),
        p = m(26288),
        e = Object.defineProperty,
        v = Object.defineProperties,
        Z = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        T = (B, C, N) =>
          C in B
            ? e(B, C, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: N,
              })
            : (B[C] = N),
        k = (B, C) => {
          for (var N in C || (C = {})) g.call(C, N) && T(B, N, C[N]);
          if (f) for (var N of f(C)) Q.call(C, N) && T(B, N, C[N]);
          return B;
        },
        W = (B, C) => v(B, Z(C));
      const j = I.memo((B) => {
        const { language: C, setLanguage: N } = (0, p.ZKp)(),
          X = (0, I.useCallback)(
            (Y) => {
              (0, p.lHp)(
                (0, p.t)('\u5237\u65B0\u9875\u9762\u540E\u751F\u6548'),
                'info'
              ),
                N(Y);
            },
            [N]
          );
        return I.createElement(
          t.Z,
          W(k({ style: { width: 280 }, size: 'large' }, B), {
            value: C,
            onChange: X,
          }),
          I.createElement(
            t.Z.Option,
            { value: 'zh-CN' },
            '\u7B80\u4F53\u4E2D\u6587'
          ),
          I.createElement(t.Z.Option, { value: 'en-US' }, 'English')
        );
      });
      j.displayName = 'LanguageSelect';
    },
    28074: (ve, R, m) => {
      m.d(R, { U: () => $, c: () => se });
      var t = m(80474),
        I = m(72297),
        p = m(52983),
        e = m(26288),
        v = m(93540),
        Z = m(66175),
        f = m(44611),
        g = m(33797),
        Q = Object.defineProperty,
        T = Object.defineProperties,
        k = Object.getOwnPropertyDescriptors,
        W = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        C = (x, y, D) =>
          y in x
            ? Q(x, y, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: D,
              })
            : (x[y] = D),
        N = (x, y) => {
          for (var D in y || (y = {})) j.call(y, D) && C(x, D, y[D]);
          if (W) for (var D of W(y)) B.call(y, D) && C(x, D, y[D]);
          return x;
        },
        X = (x, y) => T(x, k(y));
      const Y = (0, t.P)(() =>
          Promise.all([m.e(994), m.e(20)]).then(m.bind(m, 28020))
        ),
        $ = p.memo(({ raw: x, baseUrl: y, allowIframe: D }) => {
          const { t: U } = (0, e.$G7)(),
            K = (0, p.useCallback)(
              (F) => (
                (F = (0, e.Awg)(F)),
                (0, e.YQu)(y) ? new URL(F, (0, I.Cr)(y)).href : F
              ),
              [y]
            ),
            S = (0, p.useMemo)(
              () => ({
                img: (F) =>
                  p.createElement(v.Ee, {
                    style: F.style,
                    width: F.width,
                    height: F.height,
                    src: F.src,
                    preview: !0,
                  }),
                svg: () => p.createElement('div', null, 'not support svg'),
                iframe: (F) => {
                  if (!D)
                    return p.createElement(
                      'div',
                      null,
                      U('\u4E0D\u652F\u6301iframe')
                    );
                  let G = F.src;
                  return G
                    ? G.startsWith('http')
                      ? (G && G.includes('?') && (G += '&autoplay=0'),
                        p.createElement('iframe', X(N({}, F), { src: G })))
                      : p.createElement(
                          'div',
                          null,
                          U('\u53EA\u652F\u6301http\u8DEF\u5F84')
                        )
                    : p.createElement('div', null);
                },
                embed: () =>
                  p.createElement('div', null, U('\u4E0D\u652F\u6301embed')),
                html: () =>
                  p.createElement(
                    'div',
                    null,
                    U('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49HTML')
                  ),
                style: () =>
                  p.createElement(
                    'div',
                    null,
                    U('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F')
                  ),
                meta: () =>
                  p.createElement(
                    'div',
                    null,
                    U('\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49Meta')
                  ),
              }),
              []
            );
          return p.createElement(
            Y,
            {
              className: 'tailchat-markdown',
              transformImageUri: (F) => K(F),
              transformLinkUri: (F) => K(F),
              remarkPlugins: [Z.Z],
              rehypePlugins: [f.Z, g.Z],
              linkTarget: '_blank',
              skipHtml: !0,
              components: S,
            },
            x
          );
        });
      $.displayName = 'Markdown';
      const se = (0, t.P)(() =>
        Promise.all([m.e(994), m.e(556), m.e(943)])
          .then(m.bind(m, 92943))
          .then((x) => x.MarkdownEditor)
      );
    },
    54012: (ve, R, m) => {
      m.r(R), m.d(R, { default: () => Ia });
      var t = m(26288);
      const I = (0, t.fA3)(() => localStorage);
      var p = m(75526),
        e = m(52983),
        v = m(93540);
      const Z = e.memo(() => {
        const n = (0, t.tR0)((s) => s.announcement),
          [l, a] = I('ackGlobalAnnouncement');
        return !n || l === n.id
          ? null
          : e.createElement(
              'div',
              {
                className: 'text-center bg-indigo-400 text-white relative px-6',
              },
              e.createElement('span', { className: 'select-text' }, n.text),
              n.link &&
                e.createElement(
                  p.Z,
                  {
                    type: 'link',
                    className: 'text-indigo-700 font-bold ml-2',
                    size: 'small',
                    onClick: () => window.open(n.link),
                  },
                  (0, t.t)('\u4E86\u89E3\u66F4\u591A')
                ),
              e.createElement(v.JO, {
                className:
                  'absolute top-0.5 right-1 opacity-80 hover:opacity-100 cursor-pointer text-xl',
                icon: 'mdi:close-circle-outline',
                onClick: () => a(n.id),
              })
            );
      });
      Z.displayName = 'GlobalAnnouncementBar';
      var f = m(21513),
        g = m(84208),
        Q = m(87450),
        T = m(21848),
        k = m(79546),
        W = m(6494),
        j = m.n(W),
        B = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const C = () =>
          j()([
            { type: 'text', name: 'email', label: (0, t.t)('\u90AE\u7BB1') },
            (0, t.HiA)().emailVerification && {
              type: 'custom',
              name: 'emailOTP',
              label: (0, t.t)('\u90AE\u7BB1\u6821\u9A8C\u7801'),
              render: (n) => {
                var l;
                const a = (0, v.aG)(),
                  s =
                    (l = a == null ? void 0 : a.values) == null
                      ? void 0
                      : l.email,
                  [r, o] = (0, e.useState)(!1),
                  [{ loading: d }, i] = (0, t.CoE)(
                    () =>
                      B(void 0, null, function* () {
                        if (!s) {
                          (0, t.hJM)(
                            (0, t.t)('\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A')
                          );
                          return;
                        }
                        yield t.o4J.EA.verifyEmail(s), o(!0);
                      }),
                    [s]
                  );
                return e.createElement(
                  k.Z.Group,
                  { compact: !0, style: { display: 'flex' } },
                  e.createElement(k.Z, {
                    size: 'large',
                    name: n.name,
                    value: n.value,
                    placeholder: (0, t.t)('6\u4F4D\u6821\u9A8C\u7801'),
                    onChange: (u) => n.onChange(u.target.value),
                  }),
                  !r &&
                    e.createElement(
                      p.Z,
                      {
                        size: 'large',
                        type: 'primary',
                        htmlType: 'button',
                        disabled: d,
                        loading: d,
                        onClick: (u) => {
                          u.preventDefault(), i();
                        },
                      },
                      (0, t.t)('\u53D1\u9001\u6821\u9A8C\u7801')
                    )
                );
              },
            },
            {
              type: 'password',
              name: 'password',
              label: (0, t.t)('\u5BC6\u7801'),
            },
          ]),
        N = (0, v._D)({
          email: v._6
            .string()
            .required((0, t.t)('\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A'))
            .email((0, t.t)('\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E'))
            .max(
              40,
              (0, t.t)(
                '\u90AE\u7BB1\u6700\u957F\u9650\u523640\u4E2A\u5B57\u7B26'
              )
            ),
          password: v._6
            .string()
            .required((0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A'))
            .min(6, (0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D'))
            .max(
              40,
              (0, t.t)(
                '\u5BC6\u7801\u6700\u957F\u9650\u523640\u4E2A\u5B57\u7B26'
              )
            ),
          emailOTP: v._6
            .string()
            .length(6, (0, t.t)('\u6821\u9A8C\u7801\u4E3A6\u4F4D')),
        }),
        X = e.memo((n) => {
          const l = n.userId,
            a = (0, t.TL5)(),
            s = (0, e.useMemo)(() => C(), []),
            [{}, r] = (0, t.CoE)(
              (o) =>
                B(void 0, null, function* () {
                  const d = yield (0, t.xuY)(
                    l,
                    o.email,
                    o.password,
                    o.emailOTP
                  );
                  (0, T.rU)(d),
                    yield (0, Q._H)(d.token),
                    a(t.hIH.setUserInfo(d)),
                    typeof n.onSuccess == 'function' && n.onSuccess();
                }),
              [l, n.onSuccess]
            );
          return e.createElement(
            g.AB,
            { title: (0, t.t)('\u8BA4\u9886\u8D26\u53F7') },
            e.createElement(v.Po, { schema: N, fields: s, onSubmit: r })
          );
        });
      X.displayName = 'ClaimTemporaryUser';
      const Y = e.memo(() => {
        const n = (0, t.Pc$)(),
          l = (n == null ? void 0 : n.temporary) === !0,
          a = (0, e.useCallback)(() => {
            if (!(n == null ? void 0 : n._id)) return;
            const s = (0, f.openModal)(
              e.createElement(X, {
                userId: n._id,
                onSuccess: () => (0, g.Mr)(s),
              })
            );
          }, [n == null ? void 0 : n._id]);
        return l
          ? e.createElement(
              'div',
              { className: 'text-center bg-indigo-400 text-white' },
              e.createElement(
                t.cCv,
                null,
                '\u5F53\u524D\u4F7F\u7528\u7684\u662F\u4E00\u4E2A\u4E34\u65F6\u8D26\u53F7,',
                ' ',
                e.createElement(
                  p.Z,
                  {
                    type: 'link',
                    className: 'text-indigo-700 font-bold',
                    size: 'small',
                    onClick: a,
                  },
                  '\u7ACB\u5373\u8BA4\u9886'
                )
              )
            )
          : null;
      });
      Y.displayName = 'GlobalTemporaryTip';
      var $ = m(82335),
        se = m(67706),
        x = m(95483),
        y = m(54782),
        D = m(12492),
        U = m(14231),
        K = m(83667),
        S = m(75217),
        F = m(75283),
        G = m(14698),
        Yt = m.n(G),
        Kt = m(15333),
        Ce = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const be = e.memo(({ result: n }) => {
        const [l, a] = (0, e.useState)(''),
          s = (0, e.useCallback)(
            (o) =>
              Ce(void 0, null, function* () {
                try {
                  yield (0, t.vAN)(o),
                    a(o),
                    (0, t.lHp)(
                      (0, t.t)('\u5DF2\u53D1\u9001\u7533\u8BF7'),
                      'success'
                    );
                } catch (d) {
                  (0, t.hJM)(d);
                }
              }),
            []
          );
        if (n === void 0) return null;
        if (n === null) return e.createElement(Kt.J, null);
        const r = l === n._id;
        return e.createElement(
          'div',
          null,
          e.createElement(S.Z, null),
          e.createElement(
            'div',
            {
              className:
                'rounded-md border border-black border-opacity-30 px-4 py-3 bg-black bg-opacity-10 flex justify-between items-center mobile:flex-col',
            },
            e.createElement(
              'div',
              { className: 'mobile:w-full mobile:mb-1' },
              e.createElement(v.qE, {
                className: 'mb-3',
                size: 60,
                name: n.nickname,
                src: n.avatar,
              }),
              e.createElement(
                'div',
                { className: 'text-lg' },
                n.nickname,
                e.createElement(
                  'span',
                  { className: 'text-opacity-60 text-sm text-white' },
                  '#',
                  n.discriminator
                )
              )
            ),
            e.createElement(
              p.Z,
              {
                type: 'primary',
                className: 'bg-green-600 border-0 mobile:w-full',
                disabled: r,
                onClick: () => s(n._id),
              },
              r
                ? (0, t.t)('\u5DF2\u7533\u8BF7')
                : (0, t.t)('\u7533\u8BF7\u597D\u53CB')
            )
          )
        );
      });
      be.displayName = 'SearchFriendResult';
      const Ne = e.memo(() => {
        const n = (0, t.CGy)((a) => a.user.info),
          l = `${n == null ? void 0 : n.nickname}#${
            n == null ? void 0 : n.discriminator
          }`;
        return e.createElement(
          'div',
          null,
          e.createElement(S.Z, null),
          e.createElement(
            'div',
            {
              className:
                'rounded-md border border-black border-opacity-30 px-4 py-3 bg-black bg-opacity-10 text-center',
            },
            e.createElement(
              'div',
              null,
              (0, t.t)('\u60A8\u7684\u4E2A\u4EBA\u552F\u4E00\u6807\u8BC6')
            ),
            e.createElement(
              F.Z.Title,
              { level: 4, copyable: !0, className: 'select-text' },
              l
            )
          )
        );
      });
      Ne.displayName = 'SelfIdentify';
      const Ae = e.memo(() => {
        const [n, l] = (0, e.useState)(''),
          [{ loading: a, value: s }, r] = (0, t.ilX)(
            () =>
              Ce(void 0, null, function* () {
                try {
                  const o = yield (0, t.eGN)(n);
                  return (
                    o === null &&
                      (0, t.lHp)(
                        (0, t.t)('\u6CA1\u6709\u627E\u5230\u8BE5\u7528\u6237'),
                        'warning'
                      ),
                    o
                  );
                } catch (o) {
                  (0, t.hJM)(o);
                }
              }),
            [n]
          );
        return e.createElement(
          'div',
          { className: 'px-8 py-2' },
          e.createElement(
            'div',
            { className: 'text-lg my-2' },
            (0, t.t)('\u6DFB\u52A0\u597D\u53CB')
          ),
          e.createElement(
            'div',
            { className: 'my-1' },
            e.createElement(
              t.cCv,
              null,
              '\u60A8\u53EF\u4EE5\u4F7F\u7528\u5B8C\u6574\u7684 ',
              e.createElement(
                v.y$,
                null,
                '\u7528\u6237\u6635\u79F0#\u6807\u8BC6'
              ),
              ' \u6765\u6DFB\u52A0\u597D\u53CB'
            )
          ),
          e.createElement(
            'div',
            {
              className:
                'px-4 py-2 my-3 flex border border-black border-opacity-30 rounded items-center bg-black bg-opacity-10 mobile:flex-col',
            },
            e.createElement('input', {
              className:
                'bg-transparent flex-1 text-base leading-9 outline-none mobile:w-full mobile:mb-1',
              placeholder: (0, t.t)('\u7528\u6237\u6635\u79F0#0000'),
              onChange: (o) => l(o.target.value),
            }),
            e.createElement(
              p.Z,
              {
                type: 'primary',
                className:
                  'bg-indigo-600 disabled:opacity-80 border-none mobile:w-full',
                disabled: n === '',
                loading: a,
                onClick: r,
              },
              (0, t.t)('\u67E5\u627E\u597D\u53CB')
            )
          ),
          Yt()(s)
            ? e.createElement(Ne, null)
            : e.createElement(be, { result: s })
        );
      });
      Ae.displayName = 'AddFriend';
      var ee = m(84143),
        pe = m(9021),
        te = m(95268),
        O = m(6739),
        qt = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const Be = e.memo((n) => {
        const [{ loading: l }, a] = (0, t.ilX)(
          (s) =>
            qt(void 0, null, function* () {
              yield (0, t.J3N)(s);
            }),
          []
        );
        return n.requests.length === 0
          ? e.createElement(O.t, {
              text: (0, t.t)(
                '\u6682\u65E0\u5DF2\u53D1\u9001\u7684\u597D\u53CB\u8BF7\u6C42'
              ),
            })
          : e.createElement(
              'div',
              { className: 'py-2.5 px-5' },
              e.createElement(
                'div',
                null,
                (0, t.t)(
                  '\u7B49\u5F85\u5BF9\u65B9\u5904\u7406\u7684\u597D\u53CB\u8BF7\u6C42'
                ),
                ':'
              ),
              e.createElement(
                'div',
                null,
                n.requests.map(({ _id: s, to: r }) =>
                  e.createElement(pe.Q, {
                    key: r,
                    userId: r,
                    actions: [
                      e.createElement(
                        te.Z,
                        { key: 'cancel', title: (0, t.t)('\u53D6\u6D88') },
                        e.createElement(
                          'div',
                          null,
                          e.createElement(ee.a, {
                            icon: 'mdi:close',
                            disabled: l,
                            onClick: () => a(s),
                          })
                        )
                      ),
                    ],
                  })
                )
              )
            );
      });
      Be.displayName = 'RequestSend';
      var xe = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const De = e.memo((n) => {
        const [{ loading: l }, a] = (0, t.CoE)(
            (d) =>
              xe(void 0, null, function* () {
                yield (0, t.NDn)(d);
              }),
            []
          ),
          [{ loading: s }, r] = (0, t.CoE)(
            (d) =>
              xe(void 0, null, function* () {
                yield (0, t.K_u)(d);
              }),
            []
          );
        if (n.requests.length === 0)
          return e.createElement(O.t, {
            text: (0, t.t)(
              '\u6682\u65E0\u5F85\u5904\u7406\u7684\u597D\u53CB\u8BF7\u6C42'
            ),
          });
        const o = l || s;
        return e.createElement(
          'div',
          { className: 'py-2.5 px-5' },
          e.createElement(
            'div',
            null,
            (0, t.t)('\u7B49\u5F85\u5904\u7406\u7684\u597D\u53CB\u8BF7\u6C42'),
            ':'
          ),
          e.createElement(
            'div',
            null,
            n.requests.map(({ _id: d, from: i }) =>
              e.createElement(pe.Q, {
                key: i,
                userId: i,
                actions: [
                  e.createElement(
                    te.Z,
                    { key: 'accept', title: (0, t.t)('\u63A5\u53D7') },
                    e.createElement(
                      'div',
                      null,
                      e.createElement(ee.a, {
                        icon: 'mdi:check',
                        disabled: o,
                        onClick: () => a(d),
                      })
                    )
                  ),
                  e.createElement(
                    te.Z,
                    { key: 'deny', title: (0, t.t)('\u62D2\u7EDD') },
                    e.createElement(
                      'div',
                      null,
                      e.createElement(ee.a, {
                        icon: 'mdi:close',
                        disabled: o,
                        onClick: () => r(d),
                      })
                    )
                  ),
                ],
              })
            )
          )
        );
      });
      De.displayName = 'RequestReceived';
      var Pe = m(96136),
        we = m(58761),
        _t = Object.defineProperty,
        en = Object.defineProperties,
        tn = Object.getOwnPropertyDescriptors,
        Se = Object.getOwnPropertySymbols,
        nn = Object.prototype.hasOwnProperty,
        an = Object.prototype.propertyIsEnumerable,
        Ie = (n, l, a) =>
          l in n
            ? _t(n, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (n[l] = a),
        ln = (n, l) => {
          for (var a in l || (l = {})) nn.call(l, a) && Ie(n, a, l[a]);
          if (Se) for (var a of Se(l)) an.call(l, a) && Ie(n, a, l[a]);
          return n;
        },
        un = (n, l) => en(n, tn(l)),
        rn = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const ke = e.memo((n) => {
        const [l, a] = (0, e.useState)(!1);
        return e.createElement(
          p.Z,
          un(ln({ loading: l }, n), {
            onClick: (s) =>
              rn(void 0, null, function* () {
                n.onClick && (a(!0), yield n.onClick(s), a(!1));
              }),
          })
        );
      });
      ke.displayName = 'SubmitButton';
      var sn = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const Oe = e.memo((n) => {
        var l;
        const a = (0, t.xzJ)(n.userId),
          s = (0, t.CGy)((u) => u.user.friends.find((c) => c.id === n.userId)),
          r = (0, t.TL5)(),
          [o, d] = (0, e.useState)(
            (l = s == null ? void 0 : s.nickname) != null ? l : ''
          ),
          [, i] = (0, t.CoE)(
            () =>
              sn(void 0, null, function* () {
                var u;
                yield t.o4J.r9.setFriendNickname(n.userId, o),
                  r(
                    t.hIH.setFriendNickname({ friendId: n.userId, nickname: o })
                  ),
                  (u = n.onSuccess) == null || u.call(n);
              }),
            [n.userId, n.onSuccess, o]
          );
        return s
          ? e.createElement(
              g.AB,
              {
                title: (0, t.YQu)(s.nickname)
                  ? (0, t.t)('\u66F4\u6539\u597D\u53CB\u6635\u79F0')
                  : (0, t.t)('\u6DFB\u52A0\u597D\u53CB\u6635\u79F0'),
              },
              e.createElement(
                we.Z,
                { direction: 'vertical', style: { width: '100%' } },
                e.createElement(
                  'p',
                  null,
                  (0, t.t)(
                    '\u4F7F\u7528\u4E2A\u4EBA\u6635\u79F0\u66F4\u5FEB\u5730\u627E\u5230\u597D\u53CB\u3002\u4EC5\u60A8\u81EA\u5DF1\u53EF\u89C1\u3002'
                  )
                ),
                e.createElement(k.Z, {
                  placeholder: a.nickname,
                  value: o,
                  onChange: (u) => d(u.target.value),
                }),
                e.createElement(
                  p.Z,
                  { type: 'text', onClick: () => d('') },
                  (0, t.t)('\u91CD\u7F6E\u597D\u53CB\u6635\u79F0')
                ),
                e.createElement(
                  ke,
                  { type: 'primary', block: !0, size: 'large', onClick: i },
                  (0, t.t)('\u786E\u8BA4')
                )
              )
            )
          : e.createElement(O.t, {
              text: (0, t.t)(
                '\u6CA1\u6709\u627E\u5230\u8BE5\u7528\u6237\u4FE1\u606F, \u53EF\u80FD\u51FA\u73B0\u4E86\u4E00\u4E9B\u5F02\u5E38'
              ),
            });
      });
      Oe.displayName = 'SetFriendNickname';
      var ye = m(6342),
        oe = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const Me = e.memo((n) => {
        const l = (0, t.CGy)((b) => b.user.friends),
          a = (0, e.useMemo)(() => l.map((b) => b.id), [l]),
          s = (0, t.FDf)(a),
          { searchText: r, setSearchText: o, searchResult: d } = (0, t.rcC)(s),
          i = (0, y.useNavigate)(),
          u = (0, t.TL5)(),
          c = (0, t.tR0)((b) => b.disableAddFriend),
          [, E] = (0, t.CoE)(
            (b) =>
              oe(void 0, null, function* () {
                const P = yield (0, t.L1i)([b]);
                i(`/main/personal/converse/${P._id}`);
              }),
            [i]
          ),
          h = (0, t.zX9)((b) =>
            oe(void 0, null, function* () {
              const P = (0, g.h7)(
                e.createElement(Oe, {
                  userId: b,
                  onSuccess: () => {
                    (0, g.Mr)(P);
                  },
                })
              );
            })
          ),
          w = (0, t.zX9)((b) =>
            oe(void 0, null, function* () {
              (0, t.wp$)({
                message: (0, t.t)(
                  '\u662F\u5426\u8981\u4ECE\u81EA\u5DF1\u7684\u597D\u53CB\u5217\u8868\u4E2D\u5220\u9664\u5BF9\u65B9? \u6CE8\u610F:\u4F60\u4E0D\u4F1A\u4ECE\u5BF9\u65B9\u7684\u597D\u53CB\u5217\u8868\u6D88\u5931'
                ),
                onConfirm: () =>
                  oe(void 0, null, function* () {
                    try {
                      yield (0, t.tJD)(b),
                        (0, t.lHp)(
                          (0, t.t)('\u597D\u53CB\u5220\u9664\u6210\u529F'),
                          'success'
                        ),
                        u(t.hIH.removeFriend(b));
                    } catch (P) {
                      (0, t.hJM)(P);
                    }
                  }),
              });
            })
          );
        return l.length === 0
          ? e.createElement(O.t, {
              text: e.createElement(
                'div',
                null,
                e.createElement(
                  'p',
                  { className: 'mb-2' },
                  (0, t.t)('\u6682\u65E0\u597D\u53CB')
                ),
                !c &&
                  e.createElement(
                    p.Z,
                    { type: 'primary', onClick: n.onSwitchToAddFriend },
                    (0, t.t)('\u7ACB\u5373\u6DFB\u52A0')
                  )
              ),
            })
          : e.createElement(
              'div',
              { className: 'py-2.5 px-5 h-full flex flex-col' },
              e.createElement(
                'div',
                null,
                (0, t.t)('\u597D\u53CB\u5217\u8868')
              ),
              e.createElement(k.Z, {
                className: 'my-2',
                placeholder: (0, t.t)('\u641C\u7D22\u597D\u53CB'),
                size: 'large',
                prefix: e.createElement(v.JO, {
                  fontSize: 20,
                  color: 'grey',
                  icon: 'mdi:magnify',
                }),
                value: r,
                onChange: (b) => o(b.target.value),
              }),
              e.createElement(
                'div',
                { className: 'flex-1' },
                e.createElement(ye.OO, {
                  className: 'h-full',
                  data: d,
                  itemContent: (b, P) =>
                    e.createElement(pe.Q, {
                      key: P._id,
                      userId: P._id,
                      actions: [
                        e.createElement(
                          te.Z,
                          {
                            key: 'message',
                            title: (0, t.t)('\u53D1\u9001\u6D88\u606F'),
                          },
                          e.createElement(
                            'div',
                            null,
                            e.createElement(ee.a, {
                              icon: 'mdi:message-text-outline',
                              onClick: () => E(P._id),
                            })
                          )
                        ),
                        e.createElement(
                          'div',
                          { key: 'more' },
                          e.createElement(
                            Pe.Z,
                            {
                              menu: {
                                items: [
                                  {
                                    key: 'setNickname',
                                    onClick: () => h(P._id),
                                    label: (0, t.YQu)(P.nickname)
                                      ? (0, t.t)(
                                          '\u66F4\u6539\u597D\u53CB\u6635\u79F0'
                                        )
                                      : (0, t.t)(
                                          '\u6DFB\u52A0\u597D\u53CB\u6635\u79F0'
                                        ),
                                  },
                                  {
                                    key: 'delete',
                                    danger: !0,
                                    onClick: () => w(P._id),
                                    label: (0, t.t)('\u5220\u9664'),
                                  },
                                ],
                              },
                              trigger: ['click'],
                              placement: 'bottomRight',
                            },
                            e.createElement(
                              'div',
                              null,
                              e.createElement(ee.a, {
                                icon: 'mdi:dots-vertical',
                              })
                            )
                          )
                        ),
                      ],
                    }),
                })
              )
            );
      });
      Me.displayName = 'FriendList';
      var ne = m(68e3);
      const Ze = e.memo(() => {
        const n = (0, t.CGy)((u) => u.user.friendRequests),
          l = (0, t.CGy)((u) => {
            var c;
            return (c = u.user.info) == null ? void 0 : c._id;
          }),
          [a, s] = (0, e.useState)('1'),
          r = (0, t.tR0)((u) => u.disableAddFriend),
          o = n.filter((u) => u.from === l),
          d = n.filter((u) => u.to === l),
          i = (0, e.useCallback)(() => {
            s('4');
          }, []);
        return e.createElement(
          'div',
          { className: 'w-full' },
          e.createElement(K.N, {
            className: 'h-full',
            activeKey: a,
            onChange: s,
            items: j()([
              {
                key: '1',
                label: (0, t.t)('\u5168\u90E8'),
                children: e.createElement(Me, { onSwitchToAddFriend: i }),
              },
              !r && {
                key: '2',
                label: e.createElement(
                  ne.Z,
                  {
                    className: 'text-black dark:text-white',
                    size: 'small',
                    count: o.length,
                  },
                  (0, t.t)('\u5DF2\u53D1\u9001')
                ),
                children: e.createElement(Be, { requests: o }),
              },
              !r && {
                key: '3',
                label: e.createElement(
                  ne.Z,
                  {
                    className: 'text-black dark:text-white',
                    size: 'small',
                    count: d.length,
                  },
                  (0, t.t)('\u5F85\u5904\u7406')
                ),
                children: e.createElement(De, { requests: d }),
              },
              !r && {
                key: '4',
                label: e.createElement(
                  'span',
                  { className: 'text-green-400' },
                  (0, t.t)('\u6DFB\u52A0\u597D\u53CB')
                ),
                children: e.createElement(Ae, null),
              },
            ]),
          })
        );
      });
      Ze.displayName = 'FriendPanel';
      var fe = m(38887),
        he = m(72824),
        ae = m(99631),
        on = m(56899),
        Le = m(28074),
        cn = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const Re = e.memo(({ url: n }) => {
        const {
          loading: l,
          value: a,
          error: s,
        } = (0, t.r53)(
          () =>
            cn(void 0, null, function* () {
              const r = yield fetch(n);
              if (r.status >= 400) throw new Error('\u8BF7\u6C42\u5F02\u5E38');
              return r.text();
            }),
          [n]
        );
        return l
          ? e.createElement(fe.T, null)
          : s
          ? e.createElement(O.t, { text: String(s) })
          : e.createElement(Le.U, {
              raw: String(a),
              baseUrl: n,
              allowIframe: !0,
            });
      });
      Re.displayName = 'DocumentMarkdownRender';
      const mn = on.default.iframe`
  .tc-modal & {
    width: 60vw;
    height: 70vh;
    min-width: 100%;
  }
`,
        Te = e.memo((n) => {
          const { documentUrl: l } = n;
          return (0, t.YQu)(l)
            ? l.endsWith('.md')
              ? e.createElement(Re, { url: l })
              : l.endsWith('.html') || l.startsWith('http')
              ? e.createElement(mn, { src: l })
              : e.createElement(O.t, {
                  text: (0, t.t)(
                    '\u4E0D\u652F\u6301\u6E32\u67D3\u7684\u6587\u6863\u94FE\u63A5'
                  ),
                })
            : e.createElement(O.t, {
                text: (0, t.t)(
                  '\u8BE5\u63D2\u4EF6\u6CA1\u6709\u66F4\u591A\u63CF\u8FF0'
                ),
              });
        });
      Te.displayName = 'DocumentView';
      var dn = m(31860);
      function En(n) {
        if (!(0, t.VxZ)(n))
          throw new Error(
            (0, t.t)(
              '\u4E0D\u662F\u4E00\u4E2A\u5408\u6CD5\u7684JSON\u5B57\u7B26\u4E32'
            )
          );
        const l = JSON.parse(n),
          { valid: a, errors: s } = new dn.Validator().validate(l, {
            type: 'object',
            properties: {
              label: { type: 'string' },
              name: { type: 'string' },
              url: { type: 'string' },
              icon: { type: 'string' },
              version: { type: 'string' },
              author: { type: 'string' },
              description: { type: 'string' },
              requireRestart: { type: 'boolean' },
            },
            required: [
              'label',
              'name',
              'url',
              'version',
              'author',
              'description',
            ],
            additionalProperties: !0,
          });
        if (!a)
          throw (
            (console.error(
              '[PluginManifest validation]:',
              s.map((r) => r.message).join(', ')
            ),
            new Error(
              (0, t.t)(
                '\u4E0D\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u63D2\u4EF6\u914D\u7F6E'
              )
            ))
          );
        return (l.url = (0, t.Awg)(l.url)), l;
      }
      function Ue(n, l) {
        var a;
        const s = (0, t.G33)();
        return (a = n[`${l}.${s}`]) != null ? a : n[l];
      }
      var Ge = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const ce = e.memo((n) => {
        const { manifest: l, builtin: a = !1 } = n,
          [s, r] = (0, e.useState)(n.installed),
          [{ loading: o }, d] = (0, t.CoE)(
            () =>
              Ge(void 0, null, function* () {
                yield ae.E.installPlugin(l),
                  l.requireRestart === !0
                    ? (0, t.lHp)(
                        (0, t.t)(
                          '\u63D2\u4EF6\u5B89\u88C5\u6210\u529F, \u5237\u65B0\u9875\u9762\u540E\u751F\u6548'
                        ),
                        'success'
                      )
                    : (0, t.lHp)(
                        (0, t.t)('\u63D2\u4EF6\u5B89\u88C5\u6210\u529F'),
                        'success'
                      ),
                  r(!0);
              }),
            [l]
          ),
          i = (0, e.useCallback)(() => {
            (0, t.wp$)({
              message: (0, t.t)('\u662F\u5426\u8981\u5378\u8F7D\u63D2\u4EF6'),
              onConfirm: () =>
                Ge(void 0, null, function* () {
                  yield ae.E.uninstallPlugin(l.name),
                    (0, t.lHp)(
                      (0, t.t)(
                        '\u63D2\u4EF6\u5378\u8F7D\u6210\u529F, \u5237\u65B0\u9875\u9762\u540E\u751F\u6548'
                      ),
                      'success'
                    );
                }),
            });
          }, [l]),
          u = (0, e.useCallback)(() => {
            !(0, t.YQu)(l.documentUrl) ||
              (0, f.openModal)(
                e.createElement(
                  f.ModalWrapper,
                  { title: c },
                  e.createElement(Te, {
                    documentUrl: (0, t.Awg)(l.documentUrl),
                  })
                )
              );
          }, [l]),
          c = Ue(l, 'label'),
          E = Ue(l, 'description');
        return e.createElement(
          'div',
          {
            className:
              'mobile:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-1',
          },
          e.createElement(
            'div',
            {
              className:
                'rounded-md flex w-full h-36 bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 shadow py-2 px-3',
            },
            e.createElement(
              'div',
              { className: 'mr-2' },
              e.createElement(v.qE, { shape: 'square', src: l.icon, name: c })
            ),
            e.createElement(
              'div',
              { className: 'flex flex-col flex-1 min-w-0 overflow-hidden' },
              e.createElement('div', { className: 'font-bold' }, c),
              e.createElement(
                'div',
                {
                  className:
                    'text-xs text-gray-700 dark:text-gray-300 text-opacity-50',
                },
                l.name
              ),
              e.createElement('div', { className: 'flex-1 overflow-auto' }, E),
              e.createElement(
                we.Z,
                { className: 'mt-1 justify-end' },
                (0, t.YQu)(l.documentUrl) &&
                  e.createElement(
                    p.Z,
                    { onClick: u },
                    (0, t.t)('\u6587\u6863')
                  ),
                e.createElement(
                  'div',
                  null,
                  a
                    ? e.createElement(
                        p.Z,
                        { type: 'primary', disabled: !0 },
                        (0, t.t)('\u5185\u7F6E\u63D2\u4EF6')
                      )
                    : s
                    ? e.createElement(
                        p.Z,
                        { type: 'default', onClick: i },
                        (0, t.t)('\u5DF2\u5B89\u88C5')
                      )
                    : e.createElement(
                        p.Z,
                        { type: 'primary', loading: o, onClick: d },
                        (0, t.t)('\u5B89\u88C5')
                      )
                )
              )
            )
          )
        );
      });
      ce.displayName = 'PluginStoreItem';
      var vn = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const Je = e.memo(() => {
        const [n, l] = (0, e.useState)(''),
          [{ loading: a }, s] = (0, t.CoE)(
            () =>
              vn(void 0, null, function* () {
                ae.E.installPlugin(En(n)),
                  (0, t.lHp)((0, t.t)('\u5B89\u88C5\u6210\u529F'), 'success');
              }),
            [n]
          ),
          r = (0, e.useMemo)(() => !(0, t.VxZ)(n), [n]);
        return e.createElement(
          'div',
          { className: 'p-2' },
          e.createElement(
            F.Z.Paragraph,
            null,
            (0, t.t)(
              '\u8BF7\u4E0D\u8981\u5B89\u88C5\u4E0D\u660E\u6765\u6E90\u7684\u63D2\u4EF6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u76D7\u53D6\u4F60\u5728 Tailchat \u7684\u4E2A\u4EBA\u4FE1\u606F'
            )
          ),
          e.createElement(k.Z.TextArea, {
            placeholder: (0, t.t)(
              '\u8BF7\u624B\u52A8\u8F93\u5165JSON\u4FE1\u606F\uFF0C\u5982\u679C\u4F60\u4E0D\u660E\u786E\u4F60\u5728\u505A\u4EC0\u4E48\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD'
            ),
            disabled: a,
            value: n,
            onChange: (o) => l(o.target.value),
            rows: 18,
          }),
          e.createElement(
            'div',
            { className: 'text-red-500' },
            r &&
              n !== '' &&
              (0, t.t)(
                '\u4E0D\u662F\u4E00\u4E2A\u5408\u6CD5\u7684JSON\u5B57\u7B26\u4E32'
              ),
            '\xA0'
          ),
          e.createElement(
            'div',
            { className: 'text-right' },
            e.createElement(
              p.Z,
              { loading: a, disabled: r, type: 'primary', onClick: s },
              (0, t.t)('\u786E\u8BA4')
            )
          )
        );
      });
      Je.displayName = 'ManualInstall';
      var pn = m(3010),
        yn = m.n(pn),
        je = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      function fn() {
        const { loading: n, value: l = [] } = (0, t.r53)(
            () =>
              je(this, null, function* () {
                return ae.E.getInstalledPlugins();
              }),
            []
          ),
          { loading: a, value: s = [] } = (0, t.r53)(
            () =>
              je(this, null, function* () {
                return ae.E.getRegistryPlugins();
              }),
            []
          );
        return { loading: n || a, installedPluginList: l, allPlugins: s };
      }
      const $e = e.memo(() => {
        const { loading: n, installedPluginList: l, allPlugins: a } = fn();
        if (n)
          return e.createElement(fe.T, {
            tip: (0, t.t)('\u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\u5217\u8868'),
          });
        const s = l.map((o) => o.name),
          r = he.Y.map((o) => o.name);
        return e.createElement(
          'div',
          { className: 'p-2 w-full' },
          e.createElement(K.N, {
            items: [
              {
                key: '1',
                label: (0, t.t)('\u5DF2\u5B89\u88C5'),
                children: e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    S.Z,
                    { orientation: 'left' },
                    (0, t.t)('\u5DF2\u5B89\u88C5')
                  ),
                  e.createElement(
                    'div',
                    { className: 'flex flex-wrap' },
                    yn()([...he.Y, ...l], 'name').map((o) =>
                      e.createElement(ce, {
                        key: o.name,
                        manifest: o,
                        installed: !0,
                        builtin: r.includes(o.name),
                      })
                    )
                  )
                ),
              },
              {
                key: '2',
                label: (0, t.t)('\u5168\u90E8'),
                children: e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    S.Z,
                    { orientation: 'left' },
                    (0, t.t)('\u5185\u7F6E\u63D2\u4EF6')
                  ),
                  e.createElement(
                    'div',
                    { className: 'flex flex-wrap' },
                    he.Y.map((o) =>
                      e.createElement(ce, {
                        key: o.name,
                        manifest: o,
                        installed: s.includes(o.name),
                        builtin: !0,
                      })
                    )
                  ),
                  e.createElement(
                    S.Z,
                    { orientation: 'left' },
                    (0, t.t)('\u63D2\u4EF6\u4E2D\u5FC3')
                  ),
                  e.createElement(
                    'div',
                    { className: 'flex flex-wrap' },
                    a
                      .filter((o) => !r.includes(o.name))
                      .map((o) =>
                        e.createElement(ce, {
                          key: o.name,
                          manifest: o,
                          installed: s.includes(o.name),
                        })
                      )
                  )
                ),
              },
              {
                key: '3',
                label: e.createElement(
                  'span',
                  { className: 'text-green-400' },
                  (0, t.t)('\u624B\u52A8\u5B89\u88C5')
                ),
                children: e.createElement(Je, null),
              },
            ],
          })
        );
      });
      $e.displayName = 'PluginStore';
      const ze = e.memo(() => e.createElement($e, null));
      ze.displayName = 'PluginsPanel';
      var Ve = m(10330),
        z = m(14517);
      const le = e.memo((n) => {
        const { icon: l, name: a, to: s, badge: r } = n,
          d = (0, y.useLocation)().pathname.startsWith(s);
        return e.createElement(
          Ve.rU,
          { to: s },
          e.createElement(
            'div',
            {
              className: (0, z.Z)(
                'w-full hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20 cursor-pointer text-gray-700 dark:text-white rounded px-2 h-11 flex items-center text-base group mb-0.5',
                { 'bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20': d }
              ),
            },
            e.createElement(
              'div',
              {
                className:
                  'flex h-8 items-center justify-center text-2xl w-8 mr-3',
              },
              e.isValidElement(l)
                ? l
                : e.createElement(v.qE, { src: l, name: a })
            ),
            e.createElement(
              F.Z.Text,
              {
                className: 'flex-1 text-gray-900 dark:text-white',
                ellipsis: !0,
              },
              a
            ),
            r === !0
              ? e.createElement(ne.Z, { status: 'error' })
              : e.createElement(ne.Z, { count: Number(r) || 0 }),
            n.action &&
              e.createElement(
                'div',
                {
                  className:
                    'text-base p-1 cursor-pointer hidden opacity-70 group-hover:block hover:opacity-100',
                },
                n.action
              )
          )
        );
      });
      le.displayName = 'SidebarItem';
      var hn = m(92238),
        gn = m.n(hn),
        He = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const Qe = e.memo((n) => {
        const l = n.converse,
          a = l._id,
          s = (0, t.Y84)(l),
          r = (0, t.IIz)(),
          [o] = (0, t.wuX)([a]),
          d = (0, t.TL5)(),
          { value: i } = (0, t.r53)(
            () =>
              He(void 0, null, function* () {
                if (!r) return;
                const c = yield Promise.all(
                  gn()(l.members, r).map((E) => (0, t.pGV)(E))
                );
                return e.createElement(v.EW, {
                  items: c.map((E) => ({ name: E.nickname, src: E.avatar })),
                });
              }),
            [l.members, r]
          ),
          [, u] = (0, t.CoE)(
            () =>
              He(void 0, null, function* () {
                d(t.ONy.removeConverse({ converseId: a })),
                  yield t.o4J.EA.removeUserDMConverse(a);
              }),
            [a]
          );
        return e.createElement(le, {
          key: a,
          name: s,
          action: e.createElement(v.JO, {
            icon: 'mdi:close',
            onClick: (c) => {
              c.stopPropagation(), c.preventDefault(), u();
            },
          }),
          icon: i,
          to: `/main/personal/converse/${a}`,
          badge: o,
        });
      });
      Qe.displayName = 'SidebarDMItem';
      var Fn = m(50093),
        We = m(1348),
        Xe = m(10114);
      const Cn = () => !0,
        Ye = e.memo(({ panelInfo: n }) =>
          (0, e.useMemo)(() => {
            var s;
            return (s = n.useIsShow) != null ? s : Cn;
          }, [])()
            ? e.createElement(le, {
                key: n.name,
                name: n.label,
                icon: e.createElement(v.JO, { icon: n.icon }),
                to: `/main/personal/custom/${n.name}`,
              })
            : null
        );
      Ye.displayName = 'CustomSidebarItem';
      const Ke = e.memo((n) =>
        e.createElement(
          'div',
          { className: 'h-10 text-gray-900 dark:text-white flex pt-4 px-2' },
          e.createElement(
            'span',
            {
              className:
                'flex-1 overflow-hidden overflow-ellipsis text-xs text-gray-700 dark:text-gray-300',
            },
            n.children
          ),
          e.createElement(
            'div',
            {
              className:
                'text-base opacity-70 hover:opacity-100 cursor-pointer',
            },
            n.action
          )
        )
      );
      Ke.displayName = 'SidebarSection';
      const qe = e.memo(() => {
        const n = (0, t.Wfz)(),
          l = (0, t.Pc$)(),
          a = (0, t.tR0)((r) => r.disablePluginStore),
          s = (0, t.CGy)(
            (r) =>
              r.user.friendRequests.findIndex((o) => {
                var d;
                return o.to === ((d = r.user.info) == null ? void 0 : d._id);
              }) >= 0
          );
        return e.createElement(
          Xe.L,
          { 'data-tc-role': 'sidebar-personal' },
          e.createElement(We.M, null, l == null ? void 0 : l.nickname),
          e.createElement(
            'div',
            { className: 'p-2 overflow-auto' },
            e.createElement(le, {
              name: (0, t.t)('\u597D\u53CB'),
              icon: e.createElement(v.JO, { icon: 'mdi:account-multiple' }),
              to: '/main/personal/friends',
              badge: s,
            }),
            !a &&
              e.createElement(le, {
                name: (0, t.t)('\u63D2\u4EF6\u4E2D\u5FC3'),
                icon: e.createElement(v.JO, { icon: 'mdi:puzzle' }),
                to: '/main/personal/plugins',
              }),
            f.pluginCustomPanel
              .filter((r) => r.position === 'personal')
              .map((r) => e.createElement(Ye, { key: r.name, panelInfo: r })),
            e.createElement(
              Ke,
              {
                action: e.createElement(v.JO, {
                  icon: 'mdi:plus',
                  onClick: () => (0, g.h7)(e.createElement(Fn.m, null)),
                }),
              },
              (0, t.t)('\u79C1\u4FE1')
            ),
            n.map((r) => e.createElement(Qe, { key: r._id, converse: r }))
          )
        );
      });
      qe.displayName = 'PersonalSidebar';
      const _e = e.memo(() => {
        const [n, l] = (0, x.r)('personLastVisitPanelUrl'),
          a = (0, y.useLocation)(),
          s = (0, t.tR0)((r) => r.disablePluginStore);
        return (
          (0, e.useEffect)(() => {
            l(a.pathname);
          }, [a.pathname]),
          e.createElement(
            D.J,
            {
              'data-tc-role': 'content-personal',
              sidebar: e.createElement(qe, null),
            },
            e.createElement(
              y.Routes,
              null,
              e.createElement(y.Route, {
                path: '/friends',
                element: e.createElement(Ze, null),
              }),
              !s &&
                e.createElement(y.Route, {
                  path: '/plugins',
                  element: e.createElement(ze, null),
                }),
              e.createElement(y.Route, {
                path: '/converse/:converseId',
                element: e.createElement(U.d, null),
              }),
              f.pluginCustomPanel
                .filter((r) => r.position === 'personal')
                .map((r) =>
                  e.createElement(y.Route, {
                    key: r.name,
                    path: `/custom/${r.name}`,
                    element: e.createElement(
                      se.S,
                      null,
                      e.createElement(r.render)
                    ),
                  })
                ),
              e.createElement(y.Route, {
                path: '/',
                element: e.createElement(y.Navigate, {
                  to: n || '/main/personal/friends',
                }),
              })
            )
          )
        );
      });
      _e.displayName = 'Personal';
      var bn = m(53937),
        et = m(64939),
        tt = m(712);
      const nt = e.memo((n) => {
        var l, a;
        const r = n.info.payload;
        return r
          ? e.createElement(
              tt.S,
              {
                header:
                  (l = r.title) != null ? l : (0, t.t)('\u65B0\u6D88\u606F'),
              },
              e.createElement(
                'div',
                { className: 'h-full overflow-auto p-2' },
                e.createElement(Le.U, { raw: (a = r.content) != null ? a : '' })
              )
            )
          : e.createElement(O.t, null);
      });
      nt.displayName = 'InboxMarkdownContent';
      const at = e.memo((n) => {
        const l = (0, e.useMemo)(
          () => `message-highlight-${String(Math.random()).substring(2)}`,
          []
        );
        return (
          (0, e.useEffect)(() => {
            const a = document.createElement('style');
            return (
              (a.innerHTML = `
.${l} [data-message-id="${n.messageId}"] {
  background: #e0e7ff !important;
}

.dark .${l} [data-message-id="${n.messageId}"] {
  background: rgba(0, 0, 0, 0.15) !important;
}
      `),
              a.setAttribute('highlight-message-id', n.messageId),
              document.body.append(a),
              () => {
                a.remove();
              }
            );
          }, [n.messageId, l]),
          e.createElement('div', { className: l }, n.children)
        );
      });
      at.displayName = 'MessageHighlightContainer';
      var Nn = m(81244),
        An = m(61500),
        lt = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const ut = e.memo((n) => {
        var l;
        const a = n.info,
          s = (l = a.message) != null ? l : a.payload;
        if (!s) return e.createElement(O.t, null);
        const { groupId: r, converseId: o, messageId: d } = s;
        return e.createElement(
          tt.S,
          { header: (0, t.t)('\u63D0\u53CA\u6211\u7684\u6D88\u606F') },
          e.createElement(
            'div',
            { className: 'h-full overflow-auto p-2 pb-18 relative' },
            e.createElement(rt, { groupId: r, converseId: o, messageId: d })
          ),
          e.createElement(An.R$, { groupId: r, converseId: o })
        );
      });
      ut.displayName = 'InboxMessageContent';
      const rt = e.memo((n) => {
        const { value: l = [], loading: a } = (0, t.r53)(
          () =>
            lt(void 0, null, function* () {
              try {
                return yield t.o4J.yw.fetchNearbyMessage({
                  groupId: n.groupId,
                  converseId: n.converseId,
                  messageId: n.messageId,
                });
              } catch (s) {
                (0, t.hJM)(s), console.error(s);
              }
            }),
          [n.converseId, n.messageId]
        );
        return a
          ? e.createElement(fe.T, null)
          : e.createElement(
              at,
              { messageId: n.messageId },
              e.createElement(Nn.X, {
                messages: l,
                isLoadingMore: !1,
                hasMoreMessage: !1,
                onLoadMore: () => lt(void 0, null, function* () {}),
              })
            );
      });
      rt.displayName = 'NearbyMessages';
      const st = e.memo((n) => {
        const { inboxItemId: l } = (0, y.useParams)(),
          a = (0, t.VM1)(l ?? '');
        if ((Bn(l ?? ''), !a))
          return e.createElement(
            'div',
            { className: 'w-full' },
            e.createElement(et.T, {
              message: (0, t.t)('\u6CA1\u6709\u627E\u5230\u8BE5\u8BB0\u5F55'),
            })
          );
        if (a.type === 'message') return e.createElement(ut, { info: a });
        if (a.type === 'markdown') return e.createElement(nt, { info: a });
        const s = a;
        if (f.pluginInboxItemMap[s.type]) {
          const o = f.pluginInboxItemMap[s.type].render;
          return e.createElement(o, { inboxItem: s });
        }
        return e.createElement(et.T, {
          message: (0, t.t)(
            '\u6CA1\u6709\u627E\u5230\u8BE5\u7C7B\u578B\u7684\u6E32\u67D3\u65B9\u5F0F'
          ),
        });
      });
      st.displayName = 'InboxContent';
      function Bn(n) {
        const l = (0, t.TL5)(),
          a = (0, t.VM1)(n);
        (0, t.qoQ)([n], () => {
          !a ||
            (a.readed === !1 &&
              (l(t.ONy.setInboxItemAck(n)), t.o4J.Ty.setInboxAck([n])));
        });
      }
      var xn = m(40916),
        Dn = m.n(xn);
      const ot = e.memo((n) => {
        const { groupId: l, className: a, style: s } = n,
          r = (0, t.iFL)(l);
        return e.createElement(
          'span',
          { className: a, style: s },
          r == null ? void 0 : r.name
        );
      });
      ot.displayName = 'GroupName';
      const ct = e.memo((n) => {
        const { converseId: l, className: a, style: s } = n,
          r = (0, t.CGy)((d) => d.chat.converses[l]),
          o = (0, t.Y84)(r);
        return e.createElement('span', { className: a, style: s }, o);
      });
      ct.displayName = 'ConverseName';
      var it = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const ge = (n) => `/main/inbox/${n}`,
        mt = e.memo(() => {
          const n = (0, t.eT7)(),
            l = (0, e.useMemo)(() => Dn()(n, 'createdAt', 'desc'), [n]),
            a = (0, t.TL5)(),
            s = (u) => {
              var c, E, h, w, b, P;
              if (u.type === 'message') {
                const M =
                  (E = (c = u.message) != null ? c : u.payload) != null
                    ? E
                    : {};
                let J = '';
                return (
                  (0, t.YQu)(M.groupId)
                    ? (J = e.createElement(ot, { groupId: M.groupId }))
                    : (0, t.YQu)(M.converseId) &&
                      (J = e.createElement(ct, { converseId: M.converseId })),
                  e.createElement(ie, {
                    key: u._id,
                    title: J,
                    desc: (0, f.getMessageRender)(
                      (h = M.messageSnippet) != null ? h : ''
                    ),
                    source: 'Tailchat',
                    readed: u.readed,
                    to: ge(u._id),
                  })
                );
              }
              if (u.type === 'markdown') {
                const M = (w = u.payload) != null ? w : {},
                  J = M.title || (0, t.t)('\u65B0\u6D88\u606F');
                return e.createElement(ie, {
                  key: u._id,
                  title: J,
                  desc: (0, t.t)('\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5'),
                  source: (b = M.source) != null ? b : 'Tailchat',
                  readed: u.readed,
                  to: ge(u._id),
                });
              }
              const _ = u;
              if (f.pluginInboxItemMap[_.type]) {
                const M = f.pluginInboxItemMap[_.type],
                  J = M.getPreview(_);
                return e.createElement(ie, {
                  key: _._id,
                  title: J.title,
                  desc: J.desc,
                  source: (P = M.source) != null ? P : 'Unknown',
                  readed: _.readed,
                  to: ge(_._id),
                });
              }
              return null;
            },
            r = l,
            o = l.filter((u) => u.readed === !1),
            [, d] = (0, t.CoE)(
              () =>
                it(void 0, null, function* () {
                  o.forEach((u) => {
                    a(t.ONy.setInboxItemAck(u._id));
                  }),
                    yield t.o4J.Ty.setInboxAck(o.map((u) => u._id));
                }),
              [o]
            ),
            [, i] = (0, t.CoE)(
              () =>
                it(void 0, null, function* () {
                  (yield (0, g.aW)({
                    title: (0, t.t)(
                      '\u786E\u8BA4\u6E05\u7A7A\u6536\u4EF6\u7BB1\u4E48?'
                    ),
                  })) && (yield t.o4J.Ty.clearInbox());
                }),
              [o]
            );
          return e.createElement(
            Xe.L,
            { 'data-tc-role': 'sidebar-inbox' },
            e.createElement(
              We.M,
              {
                menu: {
                  items: [
                    {
                      key: 'readAll',
                      label: (0, t.t)('\u6240\u6709\u5DF2\u8BFB'),
                      onClick: d,
                    },
                    {
                      key: 'clear',
                      label: (0, t.t)('\u6E05\u7A7A\u6536\u4EF6\u7BB1'),
                      danger: !0,
                      onClick: i,
                    },
                  ],
                },
              },
              (0, t.t)('\u6536\u4EF6\u7BB1')
            ),
            e.createElement(
              'div',
              { className: 'overflow-hidden flex-1' },
              e.createElement(K.N, {
                className: 'h-full',
                items: [
                  {
                    key: '1',
                    label: `${(0, t.t)('\u5168\u90E8')}`,
                    children: e.createElement(ye.OO, {
                      className: 'h-full',
                      data: r,
                      itemContent: (u, c) => s(c),
                    }),
                  },
                  {
                    key: '2',
                    label: `${(0, t.t)('\u672A\u8BFB')} (${o.length})`,
                    children: e.createElement(ye.OO, {
                      className: 'h-full',
                      data: o,
                      itemContent: (u, c) => s(c),
                    }),
                  },
                ],
              })
            )
          );
        });
      mt.displayName = 'InboxSidebar';
      const ie = e.memo((n) => {
        const a = (0, y.useLocation)().pathname.startsWith(n.to);
        return e.createElement(
          Ve.rU,
          { to: n.to },
          e.createElement(
            'div',
            {
              className: (0, z.Z)(
                'p-2 overflow-auto cursor-pointer hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 border-r-4 rounded',
                {
                  'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10': a,
                },
                n.readed ? 'border-transparent' : 'border-green-500'
              ),
            },
            e.createElement(
              'div',
              {
                className:
                  'text-lg overflow-ellipsis overflow-hidden text-gray-700 dark:text-white',
              },
              n.title || e.createElement('span', null, '\xA0')
            ),
            e.createElement(
              'div',
              {
                className:
                  'break-all text-opacity-80 text-black dark:text-opacity-80 dark:text-white text-sm p-1 border-l-2 border-gray-500 border-opacity-50',
              },
              n.desc
            ),
            e.createElement(
              'div',
              {
                className:
                  'text-xs text-opacity-50 text-black dark:text-opacity-50 dark:text-white',
              },
              (0, t.t)('\u6765\u81EA'),
              ': ',
              n.source
            )
          )
        );
      });
      ie.displayName = 'InboxSidebarItem';
      const dt = e.memo(() =>
        e.createElement(
          D.J,
          {
            'data-tc-role': 'content-inbox',
            sidebar: e.createElement(mt, null),
          },
          e.createElement(
            y.Routes,
            null,
            e.createElement(y.Route, {
              path: '/:inboxItemId',
              element: e.createElement(st, null),
            }),
            e.createElement(y.Route, {
              path: '/',
              element: e.createElement(Et, null),
            })
          )
        )
      );
      dt.displayName = 'Inbox';
      const Et = e.memo(() =>
        e.createElement(
          'div',
          { className: 'mt-11 w-full' },
          e.createElement(O.t, {
            text: (0, t.t)(
              '\u63D0\u53CA(@)\u60A8\u7684\u6D88\u606F\u4F1A\u5728\u8FD9\u91CC\u51FA\u73B0\u54E6'
            ),
          })
        )
      );
      Et.displayName = 'InboxNoSelect';
      const vt = e.memo(() =>
        e.createElement(
          y.Routes,
          null,
          e.createElement(y.Route, {
            path: '/personal/*',
            element: e.createElement(_e, null),
          }),
          e.createElement(y.Route, {
            path: '/inbox/*',
            element: e.createElement(dt, null),
          }),
          e.createElement(y.Route, {
            path: '/group/:groupId/*',
            element: e.createElement(bn.Z, null),
          }),
          f.pluginCustomPanel
            .filter((n) =>
              ['navbar-more', 'navbar-group', 'navbar-personal'].includes(
                n.position
              )
            )
            .map((n) =>
              e.createElement(y.Route, {
                key: n.name,
                path: `/custom/${n.name}`,
                element: e.createElement(se.S, null, e.createElement(n.render)),
              })
            ),
          e.createElement(y.Route, {
            path: '/',
            element: e.createElement(y.Navigate, {
              to: '/main/personal',
              replace: !0,
            }),
          })
        )
      );
      vt.displayName = 'MainContent';
      var Pn = m(94709),
        wn = Object.defineProperty,
        Sn = Object.defineProperties,
        In = Object.getOwnPropertyDescriptors,
        pt = Object.getOwnPropertySymbols,
        kn = Object.prototype.hasOwnProperty,
        On = Object.prototype.propertyIsEnumerable,
        yt = (n, l, a) =>
          l in n
            ? wn(n, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (n[l] = a),
        Mn = (n, l) => {
          for (var a in l || (l = {})) kn.call(l, a) && yt(n, a, l[a]);
          if (pt) for (var a of pt(l)) On.call(l, a) && yt(n, a, l[a]);
          return n;
        },
        Zn = (n, l) => Sn(n, In(l));
      const ft = e.forwardRef((n, l) => {
        const a = (0, e.useRef)(null);
        return (
          (0, e.useImperativeHandle)(
            l,
            () => ({
              next() {
                var s;
                (s = a.current) == null || s.next();
              },
              prev() {
                var s;
                (s = a.current) == null || s.prev();
              },
            }),
            []
          ),
          e.createElement(
            Pn.Z,
            Zn(Mn({ className: 'slides', ref: a }, n), {
              dots: !1,
              swipe: !1,
              adaptiveHeight: !0,
              infinite: !1,
              beforeChange: (s, r) => {
                var o;
                console.log(
                  s,
                  r,
                  (o = a.current) == null ? void 0 : o.innerSlider
                );
              },
            }),
            n.children
          )
        );
      });
      ft.displayName = 'Slides';
      var Ln = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const Rn = [
          {
            key: 'default',
            label: (0, t.t)('\u9ED8\u8BA4\u7FA4\u7EC4'),
            panels: [
              {
                id: '00',
                name: (0, t.t)('\u6587\u5B57\u9891\u9053'),
                type: t.Xpe.GROUP,
              },
              {
                id: '01',
                name: (0, t.t)('\u5927\u5385'),
                parentId: '00',
                type: t.Xpe.TEXT,
              },
            ],
          },
          {
            key: 'work',
            label: (0, t.t)('\u5DE5\u4F5C\u534F\u540C'),
            panels: [
              { id: '00', name: (0, t.t)('\u516C\u5171'), type: t.Xpe.GROUP },
              {
                id: '01',
                name: (0, t.t)('\u5168\u5458'),
                parentId: '00',
                type: t.Xpe.TEXT,
              },
              {
                id: '10',
                name: (0, t.t)('\u4E34\u65F6\u4F1A\u8BAE'),
                type: t.Xpe.GROUP,
              },
              {
                id: '11',
                name: (0, t.t)('\u4F1A\u8BAE\u5BA4') + '1',
                parentId: '10',
                type: t.Xpe.TEXT,
              },
              {
                id: '11',
                name: (0, t.t)('\u4F1A\u8BAE\u5BA4') + '2',
                parentId: '10',
                type: t.Xpe.TEXT,
              },
            ],
          },
        ],
        ht = e.memo(() => {
          const n = (0, e.useRef)(null),
            [l, a] = (0, e.useState)([]),
            [s, r] = (0, e.useState)(''),
            o = (0, t.TL5)(),
            d = (0, y.useNavigate)(),
            i = (0, e.useCallback)((h) => {
              var w;
              a(h), (w = n.current) == null || w.next();
            }, []),
            u = (0, e.useCallback)(() => {
              var h;
              (h = n.current) == null || h.prev();
            }, []),
            [{ loading: c }, E] = (0, t.CoE)(
              () =>
                Ln(void 0, null, function* () {
                  const h = yield (0, t.sSU)(s, l);
                  o(t.hyC.appendGroups([h])),
                    d(`/main/group/${h._id}`),
                    yield (0, t.FcZ)(String(h._id)),
                    (0, g.Mr)();
                }),
              [s, l, location]
            );
          return e.createElement(
            g.AB,
            { style: { maxWidth: 440 } },
            e.createElement(
              ft,
              { ref: n },
              e.createElement(
                'div',
                null,
                e.createElement(
                  F.Z.Title,
                  { level: 4, className: 'text-center mb-4' },
                  (0, t.t)('\u521B\u5EFA\u7FA4\u7EC4')
                ),
                e.createElement(
                  F.Z.Paragraph,
                  { className: 'mb-4 text-center' },
                  (0, t.t)(
                    '\u9009\u62E9\u4EE5\u4E0B\u6A21\u677F, \u5F00\u59CB\u521B\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7FA4\u7EC4\u5427!'
                  )
                ),
                e.createElement(
                  'div',
                  { className: 'space-y-2.5' },
                  Rn.map((h, w) =>
                    e.createElement(
                      e.Fragment,
                      { key: h.key },
                      w === 1 && e.createElement(S.Z, null),
                      e.createElement(
                        'div',
                        {
                          key: h.key,
                          className:
                            'w-full border rounded text-base py-2 px-3 cursor-pointer font-bold hover:bg-white hover:bg-opacity-10',
                          onClick: () => i(h.panels),
                        },
                        h.label
                      )
                    )
                  )
                )
              ),
              e.createElement(
                'div',
                null,
                e.createElement(
                  F.Z.Title,
                  { level: 4, className: 'text-center mb-4' },
                  (0, t.t)('\u81EA\u5B9A\u4E49\u4F60\u7684\u7FA4\u7EC4')
                ),
                e.createElement(
                  F.Z.Paragraph,
                  { className: 'text-center mb-2' },
                  (0, t.t)(
                    '\u4E0D\u8981\u62C5\u5FC3, \u5728\u6B64\u4E4B\u540E\u4F60\u53EF\u4EE5\u968F\u65F6\u8FDB\u884C\u53D8\u66F4'
                  )
                ),
                e.createElement(
                  'div',
                  { className: 'text-center mb-2' },
                  e.createElement(v.qE, {
                    className: 'mx-auto',
                    size: 80,
                    name: s,
                  })
                ),
                e.createElement(
                  'div',
                  null,
                  e.createElement(
                    'div',
                    null,
                    (0, t.t)('\u7FA4\u7EC4\u540D\u79F0'),
                    ':'
                  ),
                  e.createElement(k.Z, {
                    className: 'shadow-none',
                    size: 'large',
                    maxLength: 100,
                    value: s,
                    onChange: (h) => r(h.target.value),
                  })
                ),
                e.createElement(S.Z, null),
                e.createElement(
                  'div',
                  { className: 'flex justify-between' },
                  e.createElement(
                    p.Z,
                    {
                      type: 'link',
                      onClick: u,
                      className: 'text-gray-600 dark:text-white font-bold',
                    },
                    (0, t.t)('\u8FD4\u56DE')
                  ),
                  e.createElement(
                    p.Z,
                    { type: 'primary', loading: c, onClick: E },
                    (0, t.t)('\u786E\u8BA4\u521B\u5EFA')
                  )
                )
              )
            )
          );
        });
      ht.displayName = 'ModalCreateGroup';
      var Tn = Object.defineProperty,
        gt = Object.getOwnPropertySymbols,
        Un = Object.prototype.hasOwnProperty,
        Gn = Object.prototype.propertyIsEnumerable,
        Ft = (n, l, a) =>
          l in n
            ? Tn(n, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (n[l] = a),
        Jn = (n, l) => {
          for (var a in l || (l = {})) Un.call(l, a) && Ft(n, a, l[a]);
          if (gt) for (var a of gt(l)) Gn.call(l, a) && Ft(n, a, l[a]);
          return n;
        };
      const V = e.memo((n) => {
        const {
            name: l,
            className: a,
            to: s,
            showPill: r = !1,
            badge: o = !1,
          } = n,
          d = (0, y.useLocation)(),
          i = typeof s == 'string' && d.pathname.startsWith(s),
          u = (0, y.useNavigate)(),
          c = (0, t.zX9)(() => {
            var h;
            typeof s == 'string' && u(s), (h = n.onClick) == null || h.call(n);
          });
        let E = e.createElement(
          te.Z,
          {
            title: l
              ? e.createElement(
                  'div',
                  { className: 'font-bold px-1.5 py-0.5' },
                  l
                )
              : null,
            placement: 'right',
          },
          e.createElement(
            'div',
            {
              className: (0, z.Z)(
                'w-12 h-12 hover:rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden',
                a,
                { 'rounded-1/2': !i, 'rounded-lg': i }
              ),
              onClick: c,
              'data-testid': n['data-testid'],
            },
            n.children
          )
        );
        return (
          o === !0 &&
            (E = e.createElement(
              ne.Z,
              Jn({ status: 'error', dot: !0, offset: [0, 44] }, n.badgeProps),
              E
            )),
          e.createElement(
            'div',
            { className: 'px-3 relative group' },
            r &&
              e.createElement(
                'div',
                {
                  className:
                    'absolute w-2 left-0 top-0 bottom-0 flex items-center',
                  style: { marginLeft: -4 },
                },
                e.createElement('span', {
                  className: (0, z.Z)(
                    'bg-gray-400 dark:bg-white w-2 h-2 rounded transition-all duration-300',
                    { 'h-2 group-hover:h-5': !i, 'h-10': i }
                  ),
                })
              ),
            E
          )
        );
      });
      V.displayName = 'NavbarNavItem';
      var jn = m(35633),
        $n = m(84344),
        zn = m.n($n);
      function Vn(n) {
        var l;
        const a = (0, t.iFL)(n),
          s = ((l = a == null ? void 0 : a.panels) != null ? l : [])
            .filter((E) => (0, jn.Q)(E))
            .map((E) => E.id),
          { mutedList: r } = (0, t.OqL)(),
          o = (0, t.wuX)(s),
          d = zn()(s, o);
        let i = !1,
          u = !1;
        const c = r.includes(n);
        for (const [E, h] of d)
          if (h === !0) {
            if (((i = !0), c)) break;
            if (E && !r.includes(E)) {
              u = !0;
              break;
            }
          }
        return i ? (u ? 'unread' : 'muted') : 'none';
      }
      const Hn = () => !0,
        me = e.memo(({ panelInfo: n, withBg: l }) =>
          (0, e.useMemo)(() => {
            var r;
            return (r = n.useIsShow) != null ? r : Hn;
          }, [])()
            ? e.createElement(
                V,
                {
                  key: n.name,
                  name: n.label,
                  className: (0, z.Z)('text-3xl  cursor-pointer', {
                    'bg-gray-700 text-white': l,
                    'text-gray-600 dark:text-white': !l,
                  }),
                  to: `/main/custom/${n.name}`,
                  'data-testid': `navbar-custom-${n.name}`,
                },
                e.createElement(v.JO, { icon: n.icon })
              )
            : null
        );
      me.displayName = 'NavbarCustomNavItem';
      var Ct = m(45895),
        Qn = m(76411),
        Wn = m.n(Qn);
      const bt = e.memo(({ group: n }) => {
        const l = n._id,
          a = Vn(l),
          { markGroupAllAck: s } = (0, t.PlN)(l),
          r = {
            items: [
              {
                key: 'ack',
                label: (0, t.t)('\u6807\u8BB0\u4E3A\u5DF2\u8BFB'),
                icon: e.createElement(v.JO, {
                  icon: 'mdi:message-badge-outline',
                }),
                onClick: () => {
                  s(),
                    (0, t.jiy)(
                      (0, t.t)(
                        '\u5DF2\u6807\u8BB0\u8BE5\u7FA4\u7EC4\u6240\u6709\u6D88\u606F\u5DF2\u8BFB'
                      )
                    );
                },
              },
            ],
          };
        return e.createElement(
          Pe.Z,
          { menu: r, trigger: ['contextMenu'] },
          e.createElement(
            'div',
            null,
            e.createElement(
              V,
              {
                name: n.name,
                to: `/main/group/${n._id}`,
                showPill: !0,
                badge: ['muted', 'unread'].includes(a),
                badgeProps: { status: a === 'unread' ? 'error' : 'default' },
              },
              e.createElement(v.qE, {
                shape: 'square',
                size: 48,
                name: n.name,
                src: n.avatar,
              })
            )
          )
        );
      });
      bt.displayName = 'GroupNavItem';
      function Xn() {
        const n = (0, t.CGy)((o) => o.group.groups),
          { value: l = [], setValue: a } = (0, t.cvI)('groupOrderList', []),
          s = (0, t.zX9)((o, d) => {
            a(
              Wn()(
                r.map((i) => i._id),
                o,
                d
              )
            );
          }),
          r = (0, e.useMemo)(
            () =>
              Object.values(n).sort((o, d) => {
                const i = l.findIndex((c) => c === o._id),
                  u = l.findIndex((c) => c === d._id);
                return i - u;
              }),
            [n, l]
          );
        return { handleSortEnd: s, groupList: r };
      }
      const Nt = e.memo(() => {
        const n = (0, e.useRef)(null),
          { groupList: l, handleSortEnd: a } = Xn(),
          s = (0, t.zX9)(() => {
            (0, g.h7)(e.createElement(ht, null));
          }),
          { disableCreateGroup: r } = (0, t.tR0)((o) => ({
            disableCreateGroup: o.disableCreateGroup,
          }));
        return e.createElement(
          'div',
          { className: 'space-y-2', 'data-tc-role': 'navbar-groups', ref: n },
          Array.isArray(l) &&
            e.createElement(
              Ct.ZP,
              {
                className: 'space-y-2',
                lockAxis: 'y',
                onSortEnd: a,
                customHolderRef: n,
              },
              l.map((o) =>
                e.createElement(
                  Ct.TR,
                  { key: o._id },
                  e.createElement(
                    'div',
                    { className: 'overflow-hidden' },
                    e.createElement(bt, { group: o })
                  )
                )
              )
            ),
          !r &&
            e.createElement(
              V,
              {
                className: 'bg-green-500',
                name: (0, t.t)('\u521B\u5EFA\u7FA4\u7EC4'),
                onClick: s,
                'data-testid': 'create-group',
              },
              e.createElement(v.JO, {
                className: 'text-3xl text-white',
                icon: 'mdi:plus',
              })
            ),
          f.pluginCustomPanel
            .filter((o) => o.position === 'navbar-group')
            .map((o) =>
              e.createElement(me, { key: o.name, panelInfo: o, withBg: !0 })
            )
        );
      });
      Nt.displayName = 'GroupNav';
      var Yn = m(89935),
        Kn = m(58935);
      const At = e.memo(() => {
        const { showSidebar: n, setShowSidebar: l } = (0, Kn.S)(),
          a = (0, Yn.d)(),
          s = (0, e.useCallback)(() => {
            l(!n);
          }, [n]);
        return a
          ? e.createElement(v.JO, {
              className: 'text-5xl mb-4 cursor-pointer',
              icon: n ? 'mdi:menu-open' : 'mdi:menu',
              onClick: s,
            })
          : null;
      });
      At.displayName = 'MobileMenuBtn';
      var qn = m(73513),
        _n = m(3856);
      const ea = m.p + 'assets/logo.9b1a63b.svg',
        { Paragraph: q, Text: Bt, Link: ta } = F.Z,
        L = e.memo((n) => {
          const { src: l, icon: a } = n;
          return e.createElement(
            'a',
            {
              className: 'p-2.5 hover:bg-black hover:bg-opacity-20 rounded',
              href: l,
              target: '_blank',
              rel: 'noreferrer',
            },
            typeof a == 'string' ? e.createElement(v.JO, { icon: a }) : a
          );
        });
      L.displayName = 'LogoLink';
      const xt = e.memo(() =>
        e.createElement(
          'div',
          { className: 'select-text' },
          e.createElement('img', {
            className:
              'float-right select-none bg-black rounded-2xl bg-opacity-40 p-2',
            width: 128,
            height: 128,
            src: ea,
          }),
          e.createElement(
            q,
            null,
            e.createElement(Bt, { className: 'font-bold' }, 'Tailchat'),
            e.createElement(
              Bt,
              null,
              ': ',
              (0, t.t)(
                '\u5C5E\u4E8E\u6240\u6709\u4EBA\u7684\u5F00\u6E90\u804A\u5929\u5DE5\u5177'
              ),
              ' '
            )
          ),
          e.createElement(
            q,
            null,
            (0, t.t)(
              '\u53EF\u4F9B\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u7684\u804A\u5929\u5DE5\u5177'
            )
          ),
          e.createElement(
            q,
            null,
            (0, t.t)(
              '\u5B8C\u5168\u72EC\u5C5E\u4E8E\u79C1\u4EBA\u56E2\u961F\u7684\u6C9F\u901A\u5E73\u53F0'
            )
          ),
          e.createElement(
            q,
            null,
            e.createElement(
              'div',
              null,
              (0, t.t)('\u7279\u6027(\u4EAE\u70B9)'),
              ':'
            ),
            e.createElement(
              'ul',
              { className: 'list-disc list-inside' },
              e.createElement(
                'li',
                null,
                (0, t.t)(
                  '\u57FA\u4E8E\u9762\u677F\u7684\u7FA4\u7EC4\u7A7A\u95F4, \u53EF\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u5316'
                )
              ),
              e.createElement(
                'li',
                null,
                (0, t.t)(
                  '\u57FA\u4E8E\u5FAE\u5185\u6838\u7684\u524D\u7AEF\u63D2\u4EF6\u652F\u6491, \u79C1\u4EBA\u5B9A\u5236\u5316'
                )
              ),
              e.createElement(
                'li',
                null,
                (0, t.t)(
                  '\u5206\u5E03\u5F0F\u90E8\u7F72\u53EF\u4F9B\u4EFB\u610F\u89C4\u6A21\u7684\u4F7F\u7528\u9700\u6C42'
                )
              )
            )
          ),
          e.createElement(
            q,
            null,
            (0, t.t)('\u5F53\u524D\u7248\u672C'),
            ': ',
            t.i83
          ),
          e.createElement(
            'div',
            {
              className:
                'text-8xl flex flex-wrap space-x-4 bg-black p-4 rounded-md bg-opacity-20',
            },
            e.createElement(L, {
              src: 'https://github.com/msgbyte/tailchat',
              icon: 'logos:github-octocat',
            }),
            e.createElement(L, {
              src: 'https://en.wikipedia.org/wiki/Open_source',
              icon: 'logos:opensource',
            }),
            e.createElement(L, {
              src: 'https://www.docker.com/',
              icon: 'logos:docker-icon',
            }),
            e.createElement(L, {
              src: 'https://ministar.moonrailgun.com/',
              icon: e.createElement('img', {
                className: 'w-24 h-24',
                src: 'https://ministar.moonrailgun.com/img/logo.svg',
              }),
            }),
            e.createElement(L, {
              src: 'https://tushan.msgbyte.com/',
              icon: e.createElement('img', {
                className: 'w-24 h-24',
                src: 'https://tushan.msgbyte.com/img/logo.svg',
              }),
            }),
            e.createElement(L, {
              src: 'https://zh-hans.reactjs.org/',
              icon: 'logos:react',
            }),
            e.createElement(L, {
              src: 'https://redux.js.org/',
              icon: 'logos:redux',
            }),
            e.createElement(L, {
              src: 'https://www.typescriptlang.org/',
              icon: 'logos:typescript-icon',
            })
          ),
          e.createElement(
            q,
            { className: 'mt-4' },
            (0, t.t)('\u5F00\u6E90\u5730\u5740'),
            ':',
            ' ',
            e.createElement(
              ta,
              { href: 'https://github.com/msgbyte/tailchat', target: '_blank' },
              'https://github.com/msgbyte/tailchat'
            )
          )
        )
      );
      xt.displayName = 'SettingsAbout';
      var na = m(92951),
        A = m(7606),
        Fe = m(56489),
        aa = m(170),
        Dt = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const la = [
          {
            type: 'text',
            name: 'emailOTP',
            placeholder: (0, t.t)('6\u4F4D\u6821\u9A8C\u7801'),
            label: (0, t.t)('\u90AE\u7BB1\u6821\u9A8C\u7801'),
          },
        ],
        ua = (0, v._D)({
          emailOTP: v._6
            .string()
            .length(6, (0, t.t)('\u6821\u9A8C\u7801\u4E3A6\u4F4D'))
            .required((0, t.t)('\u6821\u9A8C\u7801\u4E0D\u80FD\u4E3A\u7A7A')),
        }),
        Pt = e.memo((n) => {
          const l = (0, t.TL5)(),
            [a, s] = (0, e.useState)(!1),
            r = (0, t.Pc$)(),
            [{ loading: o }, d] = (0, t.CoE)(
              () =>
                Dt(void 0, null, function* () {
                  !r || (yield t.o4J.EA.verifyEmail(r.email), s(!0));
                }),
              [r == null ? void 0 : r.email]
            ),
            [, i] = (0, t.CoE)(
              (u) =>
                Dt(void 0, null, function* () {
                  const c = yield t.o4J.EA.verifyEmailWithOTP(u.emailOTP);
                  (0, T.rU)(c),
                    l(t.hIH.setUserInfo(c)),
                    (0, t.jiy)(
                      (0, t.t)('\u90AE\u7BB1\u9A8C\u8BC1\u901A\u8FC7')
                    ),
                    typeof n.onSuccess == 'function' && n.onSuccess();
                }),
              [r == null ? void 0 : r.email, n.onSuccess]
            );
          return r
            ? e.createElement(
                g.AB,
                { title: (0, t.t)('\u8BA4\u8BC1\u90AE\u7BB1') },
                a
                  ? e.createElement(v.Po, {
                      schema: ua,
                      fields: la,
                      onSubmit: i,
                    })
                  : e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(
                        p.Z,
                        {
                          className: 'mb-2',
                          type: 'primary',
                          block: !0,
                          size: 'large',
                          loading: o,
                          onClick: d,
                        },
                        (0, t.t)(
                          '\u5411 {{email}} \u53D1\u9001\u8BA4\u8BC1\u90AE\u4EF6',
                          { email: r.email }
                        )
                      ),
                      e.createElement(
                        p.Z,
                        {
                          type: 'text',
                          block: !0,
                          size: 'large',
                          onClick: () => s(!0),
                        },
                        (0, t.t)('\u5DF2\u53D1\u9001\u8BA4\u8BC1\u90AE\u4EF6')
                      )
                    )
              )
            : e.createElement(O.t, null);
        });
      Pt.displayName = 'EmailVerify';
      var ra = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const sa = [
          {
            type: 'password',
            name: 'oldPassword',
            label: (0, t.t)('\u65E7\u5BC6\u7801'),
          },
          {
            type: 'password',
            name: 'newPassword',
            label: (0, t.t)('\u65B0\u5BC6\u7801'),
          },
          {
            type: 'password',
            name: 'newPasswordRepeat',
            label: (0, t.t)('\u91CD\u590D\u5BC6\u7801'),
          },
        ],
        oa = (0, v._D)({
          oldPassword: v._6
            .string()
            .min(6, (0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D'))
            .required((0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A')),
          newPassword: v._6
            .string()
            .min(6, (0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D'))
            .required((0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A')),
          newPasswordRepeat: v._6
            .string()
            .min(6, (0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D'))
            .required((0, t.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A')),
        }),
        wt = e.memo((n) => {
          const [{}, l] = (0, t.CoE)(
            (a) =>
              ra(void 0, null, function* () {
                if (a.newPassword !== a.newPasswordRepeat) {
                  (0, t.lHp)(
                    (0, t.t)('\u65B0\u65E7\u5BC6\u7801\u4E0D\u5339\u914D'),
                    'warning'
                  );
                  return;
                }
                yield (0, t.MjZ)(a.oldPassword, a.newPassword),
                  (0, t.lHp)(
                    (0, t.t)('\u5BC6\u7801\u4FEE\u6539\u6210\u529F'),
                    'success'
                  ),
                  typeof n.onSuccess == 'function' && n.onSuccess();
              }),
            [n.onSuccess]
          );
          return e.createElement(
            g.AB,
            { title: (0, t.t)('\u4FEE\u6539\u5BC6\u7801') },
            e.createElement(v.Po, { schema: oa, fields: sa, onSubmit: l })
          );
        });
      wt.displayName = 'ModifyPassword';
      var de = (n, l, a) =>
        new Promise((s, r) => {
          var o = (u) => {
              try {
                i(a.next(u));
              } catch (c) {
                r(c);
              }
            },
            d = (u) => {
              try {
                i(a.throw(u));
              } catch (c) {
                r(c);
              }
            },
            i = (u) =>
              u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
          i((a = a.apply(n, l)).next());
        });
      const St = e.memo(() => {
        var n;
        const l = (0, t.Pc$)(),
          a = (0, t.TL5)(),
          { isAlphaMode: s } = (0, t.cGl)(),
          r = (n = l == null ? void 0 : l.extra) != null ? n : {},
          [, o] = (0, t.CoE)(
            (E) =>
              de(void 0, null, function* () {
                yield (0, t.jOv)('avatar', E.url),
                  a(
                    t.hIH.setUserInfoField({
                      fieldName: 'avatar',
                      fieldValue: E.url,
                    })
                  ),
                  (0, t.lHp)(
                    (0, t.t)('\u4FEE\u6539\u5934\u50CF\u6210\u529F'),
                    'success'
                  );
              }),
            []
          ),
          [, d] = (0, t.CoE)(
            (E) =>
              de(void 0, null, function* () {
                yield (0, t.jOv)('nickname', E),
                  a(
                    t.hIH.setUserInfoField({
                      fieldName: 'nickname',
                      fieldValue: E,
                    })
                  ),
                  (0, t.lHp)(
                    (0, t.t)('\u4FEE\u6539\u6635\u79F0\u6210\u529F'),
                    'success'
                  );
              }),
            []
          ),
          [, i] = (0, t.CoE)(
            (E, h) =>
              de(void 0, null, function* () {
                yield t.o4J.EA.modifyUserExtra(E, h),
                  a(t.hIH.setUserInfoExtra({ fieldName: E, fieldValue: h })),
                  (0, t.jiy)((0, t.t)('\u4FEE\u6539\u6210\u529F'));
              }),
            []
          ),
          u = (0, e.useCallback)(() => {
            const E = (0, g.h7)(
              e.createElement(wt, { onSuccess: () => (0, f.closeModal)(E) })
            );
          }, []),
          c = (0, e.useCallback)(
            () =>
              de(void 0, null, function* () {
                yield (0, Q._H)(null), window.location.replace('/');
              }),
            []
          );
        return l
          ? e.createElement(
              'div',
              null,
              e.createElement(
                'div',
                { className: 'flex flex-wrap' },
                e.createElement(
                  'div',
                  { className: 'w-1/3 mobile:w-full' },
                  e.createElement(
                    na.C,
                    { circle: !0, usage: 'user', onUploadSuccess: o },
                    e.createElement(v.qE, {
                      size: 128,
                      src: l.avatar,
                      name: l.nickname,
                    })
                  )
                ),
                e.createElement(
                  'div',
                  { className: 'w-2/3 mobile:w-full' },
                  s &&
                    e.createElement(A.LP, {
                      title: (0, t.t)('\u7528\u6237ID'),
                      content: l._id,
                    }),
                  e.createElement(A.LP, {
                    title: (0, t.t)('\u7528\u6237\u6635\u79F0'),
                    value: l.nickname,
                    editable: !0,
                    renderEditor: A.jo,
                    onSave: d,
                  }),
                  e.createElement(A.LP, {
                    title: (0, t.t)('\u90AE\u7BB1'),
                    content: e.createElement(
                      'div',
                      null,
                      e.createElement('span', { className: 'mr-1' }, l.email),
                      (0, T.JM)(l.email)
                        ? e.createElement(
                            Fe.Z,
                            { color: 'default', className: 'select-none' },
                            (0, t.t)('\u5185\u7F6E\u90AE\u7BB1')
                          )
                        : l.emailVerified
                        ? e.createElement(
                            Fe.Z,
                            { color: 'success', className: 'select-none' },
                            (0, t.t)('\u5DF2\u8BA4\u8BC1')
                          )
                        : e.createElement(
                            Fe.Z,
                            {
                              color: 'warning',
                              className: 'cursor-pointer',
                              onClick: () => {
                                if (l.temporary) {
                                  aa.ZP.warning(
                                    (0, t.t)(
                                      '\u4E34\u65F6\u7528\u6237\u65E0\u6CD5\u8BA4\u8BC1\u90AE\u7BB1, \u8BF7\u5148\u8BA4\u9886\u8D26\u53F7'
                                    )
                                  );
                                  return;
                                }
                                const E = (0, g.h7)(
                                  e.createElement(Pt, {
                                    onSuccess: () => {
                                      (0, f.closeModal)(E);
                                    },
                                  })
                                );
                              },
                            },
                            (0, t.t)('\u672A\u8BA4\u8BC1')
                          )
                    ),
                  }),
                  f.pluginUserExtraInfo.map((E, h) => {
                    if (E.component && E.component.editor) {
                      const w = E.component.editor;
                      return e.createElement(w, {
                        key: E.name + h,
                        value: r[E.name],
                        onSave: (b) => i(E.name, b),
                      });
                    }
                    return e.createElement(A.LP, {
                      key: E.name + h,
                      title: E.label,
                      value: r[E.name] ? String(r[E.name]) : '',
                      editable: !0,
                      renderEditor: A.jo,
                      onSave: (w) => i(E.name, w),
                    });
                  })
                )
              ),
              e.createElement(S.Z, null),
              e.createElement(
                F.Z.Title,
                { level: 4 },
                (0, t.t)('\u5BC6\u7801')
              ),
              e.createElement(
                p.Z,
                { type: 'primary', onClick: u },
                (0, t.t)('\u4FEE\u6539\u5BC6\u7801')
              ),
              e.createElement(S.Z, null),
              e.createElement(
                'div',
                null,
                e.createElement(
                  p.Z,
                  { type: 'primary', danger: !0, onClick: c },
                  (0, t.t)('\u9000\u51FA\u767B\u5F55')
                )
              )
            )
          : null;
      });
      St.displayName = 'SettingsAccount';
      var ca = m(96857);
      const It = e.memo(() => {
        const n = (0, ca.i)(),
          [l, a] = (0, e.useState)(!0);
        return (
          (0, e.useEffect)(() => {
            const s = setInterval(() => {
              a(n.connected);
            }, 1e3);
            return () => {
              clearInterval(s);
            };
          }, []),
          e.createElement(
            'div',
            null,
            e.createElement(
              'p',
              null,
              '\u5F53\u524DSocket\u72B6\u6001: ',
              JSON.stringify(l)
            ),
            e.createElement(
              'div',
              { className: 'space-x-1' },
              e.createElement(
                p.Z,
                { type: 'primary', onClick: () => n.mockReconnect() },
                'Socket \u6A21\u62DF\u91CD\u8FDE'
              )
            )
          )
        );
      });
      It.displayName = 'SettingsDebug';
      const kt = e.memo(() => {
        const {
          vitals: n,
          record: l,
          timeUsage: a,
        } = (0, e.useMemo)(
          () => ({
            vitals: $.L8.getVitals(),
            record: $.L8.getRecord(),
            timeUsage: $.L8.getTimeUsage(),
          }),
          []
        );
        return e.createElement(
          'div',
          null,
          e.createElement(
            'div',
            { className: 'mb-4' },
            e.createElement('div', null, 'Vitals:'),
            e.createElement(
              'div',
              { className: 'rounded bg-black bg-opacity-10 p-2' },
              Object.entries(n).map(([s, r]) =>
                e.createElement('div', { key: s }, s, ': ', r, 'ms')
              )
            )
          ),
          e.createElement(
            'div',
            { className: 'mb-4' },
            e.createElement('div', null, 'Record:'),
            e.createElement(
              'div',
              { className: 'rounded bg-black bg-opacity-10 p-2' },
              Object.entries(l).map(([s, r]) =>
                e.createElement('div', { key: s }, s, ': ', r, 'ms')
              )
            )
          ),
          e.createElement(
            'div',
            null,
            e.createElement('div', null, 'TimeUsage:'),
            e.createElement(
              'div',
              { className: 'rounded bg-black bg-opacity-10 p-2' },
              Object.entries(a).map(([s, r]) =>
                e.createElement('div', { key: s }, s, ': ', r, 'ms')
              )
            )
          )
        );
      });
      kt.displayName = 'SettingsPerformance';
      var ia = m(18300);
      const ma = [
          { name: 'config', label: (0, t.t)('\u5168\u5C40\u914D\u7F6E') },
          { name: 'gateway', label: (0, t.t)('\u670D\u52A1\u7F51\u5173') },
          { name: 'user', label: (0, t.t)('\u7528\u6237\u670D\u52A1') },
          { name: 'user.dmlist', label: (0, t.t)('\u79C1\u4FE1\u670D\u52A1') },
          { name: 'chat.message', label: (0, t.t)('\u804A\u5929\u670D\u52A1') },
          {
            name: 'chat.converse',
            label: (0, t.t)('\u4F1A\u8BDD\u670D\u52A1'),
          },
          { name: 'chat.ack', label: (0, t.t)('\u5DF2\u8BFB\u670D\u52A1') },
          { name: 'friend', label: (0, t.t)('\u597D\u53CB\u670D\u52A1') },
          { name: 'group', label: (0, t.t)('\u7FA4\u7EC4\u670D\u52A1') },
          {
            name: 'group.invite',
            label: (0, t.t)('\u7FA4\u7EC4\u9080\u8BF7\u670D\u52A1'),
          },
          { name: 'file', label: (0, t.t)('\u6587\u4EF6\u670D\u52A1') },
          { name: 'mail', label: (0, t.t)('\u90AE\u4EF6\u670D\u52A1') },
          {
            name: 'plugin.registry',
            label: (0, t.t)('\u63D2\u4EF6\u4E2D\u5FC3\u670D\u52A1'),
          },
        ],
        Ot = e.memo(() => {
          const n = (0, e.useMemo)(
              () => [...ma, ...f.pluginInspectServices],
              []
            ),
            { loading: l, availableServices: a, refetch: s } = (0, t.pHK)();
          return e.createElement(
            'div',
            null,
            e.createElement(
              p.Z,
              { className: 'mb-2', type: 'primary', loading: l, onClick: s },
              (0, t.t)('\u5237\u65B0')
            ),
            e.createElement(
              ia.g,
              { spinning: l },
              n.map((r) =>
                e.createElement(
                  'div',
                  { key: r.name, className: 'flex items-center' },
                  e.createElement('span', { className: 'mr-1' }, r.label, ':'),
                  (a == null ? void 0 : a.includes(r.name))
                    ? e.createElement(
                        'span',
                        {
                          title: (0, t.t)(
                            '\u5F53\u524D\u670D\u52A1\u53EF\u7528'
                          ),
                        },
                        e.createElement(v.JO, {
                          icon: 'emojione:white-heavy-check-mark',
                        })
                      )
                    : e.createElement(
                        'span',
                        { title: (0, t.t)('\u670D\u52A1\u5F02\u5E38') },
                        e.createElement(v.JO, {
                          icon: 'emojione:cross-mark-button',
                        })
                      )
                )
              )
            )
          );
        });
      Ot.displayName = 'SettingsStatus';
      var Ee = m(44411),
        H = m(73246);
      const Mt = e.memo((n) => {
        const { value: l, onChange: a, config: s } = n;
        return s.type === 'text'
          ? e.createElement(A.LP, {
              title: s.label,
              value: l,
              editable: !0,
              renderEditor: A.jo,
              onSave: (r) => a(r),
            })
          : s.type === 'textarea'
          ? e.createElement(A.LP, {
              title: s.label,
              value: l,
              editable: !0,
              renderEditor: A.lj,
              onSave: (r) => a(r),
            })
          : s.type === 'boolean'
          ? e.createElement(A.LP, {
              title: s.label,
              tip: s.desc,
              content: e.createElement(Ee.Z, {
                checked: l ?? !1,
                onChange: (r) => a(r),
              }),
            })
          : s.type === 'select'
          ? e.createElement(A.LP, {
              title: s.label,
              tip: s.desc,
              content: e.createElement(
                H.Z,
                {
                  style: { width: 280 },
                  size: 'large',
                  value: l,
                  onChange: (r) => a(r),
                },
                s.options.map((r) =>
                  e.createElement(
                    H.Z.Option,
                    { key: r.value, value: r.value },
                    r.label
                  )
                )
              ),
            })
          : null;
      });
      Mt.displayName = 'FullModalFactory';
      var da = m(37034),
        Ea = m(13546),
        va = m.n(Ea);
      const Zt = e.memo(() => {
        var n, l;
        const { colorScheme: a, setColorScheme: s } = (0, t.tv4)(),
          { settings: r, setSettings: o, loading: d } = (0, t.Flu)(),
          { isAlphaMode: i, setAlphaMode: u } = (0, t.cGl)();
        return e.createElement(
          'div',
          null,
          e.createElement(A.LP, {
            title: (0, t.t)('\u7CFB\u7EDF\u8BED\u8A00'),
            content: e.createElement(da.S, null),
          }),
          e.createElement(A.LP, {
            title: (0, t.t)('\u914D\u8272\u65B9\u6848'),
            content: e.createElement(
              H.Z,
              { style: { width: 280 }, size: 'large', value: a, onChange: s },
              e.createElement(
                H.Z.Option,
                { value: 'dark' },
                (0, t.t)('\u6697\u9ED1\u6A21\u5F0F')
              ),
              e.createElement(
                H.Z.Option,
                { value: 'light' },
                (0, t.t)('\u4EAE\u8272\u6A21\u5F0F')
              ),
              e.createElement(
                H.Z.Option,
                { value: 'auto' },
                (0, t.t)('\u81EA\u52A8')
              ),
              f.pluginColorScheme.map((c, E) =>
                e.createElement(
                  H.Z.Option,
                  { key: c.name + E, value: c.name },
                  c.label
                )
              )
            ),
          }),
          e.createElement(A.LP, {
            title: (0, t.t)('\u5173\u95ED\u6D88\u606F\u53F3\u952E\u83DC\u5355'),
            content: e.createElement(Ee.Z, {
              checked: (n = r.disableMessageContextMenu) != null ? n : !1,
              onChange: (c) => o({ disableMessageContextMenu: c }),
            }),
          }),
          f.pluginSettings
            .filter((c) => c.position === 'system')
            .map((c) => {
              var E;
              return e.createElement(Mt, {
                key: c.name,
                value: va()(r, c.name, (E = c.defaultValue) != null ? E : !1),
                onChange: (h) => {
                  o({ [c.name]: h });
                },
                config: c,
              });
            }),
          e.createElement(A.LP, {
            title: (0, t.t)('Alpha\u6D4B\u8BD5\u5F00\u5173'),
            tip: (0, t.t)(
              '\u5728 Alpha \u6A21\u5F0F\u4E0B\u4F1A\u6709\u4E00\u4E9B\u5C1A\u5904\u4E8E\u6D4B\u8BD5\u9636\u6BB5\u7684\u529F\u80FD\u5C06\u4F1A\u88AB\u5F00\u653E\uFF0C\u5982\u679C\u51FA\u73B0\u95EE\u9898\u6B22\u8FCE\u53CD\u9988'
            ),
            content: e.createElement(Ee.Z, {
              checked: i,
              onChange: (c) => u(c),
            }),
          }),
          i &&
            e.createElement(A.LP, {
              title:
                (0, t.t)('\u804A\u5929\u5217\u8868\u865A\u62DF\u5316') +
                ' (Beta)',
              content: e.createElement(Ee.Z, {
                disabled: d,
                loading: d,
                checked: (l = r.messageListVirtualization) != null ? l : !1,
                onChange: (c) => o({ messageListVirtualization: c }),
              }),
            }),
          e.createElement(
            p.Z,
            { type: 'primary', onClick: () => window.location.reload() },
            (0, t.t)('\u91CD\u65B0\u52A0\u8F7D')
          )
        );
      });
      Zt.displayName = 'SettingsSystem';
      const Lt = e.memo((n) => {
        const l = (0, e.useCallback)(
            (s) => {
              s === !1 && typeof n.onClose == 'function' && n.onClose();
            },
            [n.onClose]
          ),
          a = (0, e.useMemo)(() => {
            const s = {
              type: 'group',
              title: (0, t.t)('\u901A\u7528'),
              children: [
                {
                  type: 'item',
                  title: (0, t.t)('\u8D26\u6237\u4FE1\u606F'),
                  content: e.createElement(St, null),
                },
                {
                  type: 'item',
                  title: (0, t.t)('\u7CFB\u7EDF\u8BBE\u7F6E'),
                  content: e.createElement(Zt, null),
                },
                {
                  type: 'item',
                  title: (0, t.t)('\u670D\u52A1\u72B6\u6001'),
                  content: e.createElement(Ot, null),
                },
                {
                  type: 'item',
                  title: (0, t.t)('\u6027\u80FD\u7EDF\u8BA1'),
                  content: e.createElement(kt, null),
                },
                {
                  type: 'item',
                  title: (0, t.t)('\u5173\u4E8E'),
                  content: e.createElement(xt, null),
                },
              ],
            };
            t.yGS &&
              s.children.push({
                type: 'item',
                title: (0, t.t)('\u8C03\u8BD5'),
                content: e.createElement(It, null),
              });
            const r = f.pluginCustomPanel
                .filter((d) => d.position === 'setting')
                .map((d) => ({
                  type: 'item',
                  title: d.label,
                  content: e.createElement(d.render),
                })),
              o = [s];
            return (
              r.length > 0 &&
                o.push({
                  type: 'group',
                  title: (0, t.t)('\u66F4\u591A'),
                  children: [...r],
                }),
              o
            );
          }, []);
        return e.createElement(
          qn.o,
          { onChangeVisible: l },
          e.createElement(_n.u, {
            menu: a,
            defaultContentPath: '0.children.0.content',
          })
        );
      });
      Lt.displayName = 'SettingsView';
      const Rt = e.memo(() => {
        const n = (0, e.useCallback)(() => {
          const l = (0, g.h7)(
            e.createElement(Lt, { onClose: () => (0, g.Mr)(l) })
          );
        }, []);
        return e.createElement(v.JO, {
          className: 'text-3xl text-gray-600 dark:text-white cursor-pointer',
          icon: 'mdi:dots-horizontal',
          onClick: n,
        });
      });
      Rt.displayName = 'SettingBtn';
      function pa() {
        const n = (0, t.Wfz)();
        return (0, t.wuX)(n.map((a) => String(a._id))).some((a) => a === !0);
      }
      const Tt = e.memo(() => {
        const n = (0, t.Pc$)(),
          l = pa(),
          a = (0, t.CGy)(
            (r) =>
              r.user.friendRequests.findIndex((o) => {
                var d;
                return o.to === ((d = r.user.info) == null ? void 0 : d._id);
              }) >= 0
          ),
          s = l || a;
        return e.createElement(
          'div',
          { 'data-tc-role': 'navbar-personal' },
          e.createElement(
            V,
            {
              name: (0, t.t)('\u6211'),
              to: '/main/personal',
              showPill: !0,
              badge: s,
            },
            e.createElement(v.qE, {
              shape: 'square',
              size: 48,
              name: n == null ? void 0 : n.nickname,
              src: n == null ? void 0 : n.avatar,
            })
          )
        );
      });
      Tt.displayName = 'PersonalNav';
      const Ut = e.memo(() => {
        const l = (0, t.eT7)().filter((a) => !a.readed);
        return e.createElement(
          V,
          {
            className: 'bg-gray-700',
            name: (0, t.t)('\u6536\u4EF6\u7BB1'),
            to: '/main/inbox',
            showPill: !0,
            badge: l.length > 0,
            badgeProps: { count: l.length },
            'data-testid': 'inbox',
          },
          e.createElement(v.JO, {
            className: 'text-3xl text-white',
            icon: 'mdi:inbox-arrow-down',
          })
        );
      });
      Ut.displayName = 'InboxNav';
      var Gt = m(77569);
      const Jt = e.memo(() =>
        ya()
          ? e.createElement(v.JO, {
              className:
                'text-3xl text-gray-600 dark:text-white cursor-pointer',
              icon: 'mdi:download',
              onClick: Gt.ud,
            })
          : null
      );
      Jt.displayName = 'InstallBtn';
      function ya() {
        const [n, l] = (0, e.useState)(!1);
        return (
          (0, e.useEffect)(() => {
            if ((0, Gt.Wc)()) {
              l(!0);
              return;
            }
            const a = (s) => {
              l(!0);
            };
            return (
              window.addEventListener('beforeinstallprompt', a),
              () => {
                window.removeEventListener('beforeinstallprompt', a);
              }
            );
          }, []),
          n
        );
      }
      var fa = m(53761);
      const jt = e.memo(() =>
        t.yGS
          ? e.createElement(fa.t, {
              toggleButtonProps: { style: { position: 'relative', zIndex: 0 } },
            })
          : null
      );
      jt.displayName = 'ReactQueryDevBtn';
      var ha = m(22398),
        $t = m(442),
        zt = m(63933),
        ue = m(64750);
      function ga() {
        return { navigate: (0, y.useNavigate)() };
      }
      var Fa = m(89022),
        Ca = m.n(Fa),
        ba = (n, l, a) =>
          new Promise((s, r) => {
            var o = (u) => {
                try {
                  i(a.next(u));
                } catch (c) {
                  r(c);
                }
              },
              d = (u) => {
                try {
                  i(a.throw(u));
                } catch (c) {
                  r(c);
                }
              },
              i = (u) =>
                u.done ? s(u.value) : Promise.resolve(u.value).then(o, d);
            i((a = a.apply(n, l)).next());
          });
      const Na = t.o4J.Qr.tv,
        Aa = [
          {
            key: 'personal',
            source: 'core',
            label: (0, t.t)('\u4E2A\u4EBA\u4E3B\u9875'),
            action({ navigate: n }) {
              n('/main/personal/friends');
            },
          },
          {
            key: 'plugins',
            source: 'core',
            label: (0, t.t)('\u63D2\u4EF6\u4E2D\u5FC3'),
            action({ navigate: n }) {
              n('/main/personal/plugins');
            },
          },
        ];
      function Ba() {
        const n = (0, t.IIz)(),
          l = (0, t.CGy)((s) =>
            Object.values(s.chat.converses).filter((r) => r.type === Na.DM)
          ),
          { value: a = [] } = (0, t.r53)(
            () =>
              ba(this, null, function* () {
                return (0, t.YQu)(n)
                  ? Promise.all(
                      l.map((s) =>
                        (0, t.S8F)(n, s).then((r) => ({
                          key: `qs#converse#${s._id}`,
                          label: `${(0, t.t)('\u79C1\u4FE1')} ${r}`,
                          source: 'core',
                          action: ({ navigate: o }) => {
                            o(`/main/personal/converse/${s._id}`);
                          },
                        }))
                      )
                    )
                  : [];
              }),
            [n, l.map((s) => s._id).join(',')]
          );
        return (0, e.useDebugValue)(a), a;
      }
      function xa() {
        const n = (0, t.CGy)((a) => a.group.groups),
          l = (0, e.useMemo)(() => {
            const a = [];
            return (
              Object.values(n).forEach((s) => {
                s.panels
                  .filter((r) => r.type !== t.o4J.ru.GroupPanelType.GROUP)
                  .forEach((r) => {
                    a.push({
                      key: `qs#grouppanel#${r.id}`,
                      label: `[${s.name}] ${r.name}`,
                      source: 'core',
                      action: ({ navigate: o }) => {
                        o(`/main/group/${s._id}/${r.id}`);
                      },
                    });
                  });
              }),
              a
            );
          }, [n]);
        return (0, e.useDebugValue)(l), l;
      }
      function Da() {
        return [...Aa, ...Ba(), ...xa()];
      }
      function Pa(n) {
        const l = Da();
        return (0, e.useMemo)(
          () =>
            Ca()(
              l.filter((s) => s.label.includes(n)),
              5
            ),
          [n, l.length]
        );
      }
      let re = null;
      const Vt = e.memo(() => {
        const [n, l] = (0, e.useState)(''),
          [a, s] = (0, e.useState)(0),
          r = ga(),
          o = (0, e.useCallback)(() => {
            !re || ((0, $t.i6)(re), (re = null));
          }, []),
          d = Pa(n);
        return (
          (0, zt.q)((i) => {
            if ((0, ue.er)(i)) {
              const u = a - 1;
              s(u >= 0 ? u : d.length + u);
            } else (0, ue.dq)(i) && s((a + 1) % d.length);
            if ((0, ue.rR)(i)) {
              const u = d[a];
              typeof u.action == 'function' && u.action(r), o();
            } else (0, ue.$)(i) && o();
          }),
          e.createElement(
            'div',
            {
              className:
                'fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60 flex justify-center z-10',
              onClick: o,
            },
            e.createElement(
              'div',
              {
                className:
                  'modal-inner bg-content-light dark:bg-content-dark rounded overflow-auto relative p-4',
                style: {
                  marginTop: '20vh',
                  height: 'fit-content',
                  maxHeight: '60vh',
                  width: '60vw',
                  maxWidth: '1280px',
                },
                onClick: ha.UW,
              },
              e.createElement(k.Z, {
                className: 'mb-1',
                autoFocus: !0,
                placeholder: (0, t.t)(
                  '\u5FEB\u901F\u641C\u7D22\u3001\u8DF3\u8F6C'
                ),
                size: 'large',
                value: n,
                onChange: (i) => l(i.target.value),
              }),
              d.map((i, u) =>
                e.createElement(
                  'div',
                  {
                    key: i.key,
                    className: (0, z.Z)(
                      'truncate px-2 py-1 rounded cursor-pointer mb-0.5 group transition-all',
                      'hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20',
                      {
                        'bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20':
                          a === u,
                      }
                    ),
                    onClick: () => {
                      i.action(r), o();
                    },
                  },
                  e.createElement('div', { className: 'text-lg' }, i.label),
                  e.createElement(
                    'div',
                    {
                      className: (0, z.Z)(
                        'opacity-0 text-gray-400 text-xs group-hover:opacity-100 transition-all',
                        { 'opacity-100': a === u }
                      ),
                    },
                    i.source
                  )
                )
              )
            )
          )
        );
      });
      Vt.displayName = 'QuickSwitcher';
      function Ht() {
        typeof re != 'number' && (re = (0, $t.rk)(e.createElement(Vt, null)));
      }
      const Qt = e.memo(() =>
        e.createElement(
          V,
          {
            className: 'bg-gray-700',
            name:
              (0, t.t)('\u5FEB\u901F\u641C\u7D22\u3001\u8DF3\u8F6C') +
              ' | ctrl + k',
            onClick: () => {
              Ht();
            },
            'data-testid': 'search',
          },
          e.createElement(v.JO, {
            className: 'text-3xl text-white',
            icon: 'mdi:search',
          })
        )
      );
      Qt.displayName = 'QuickSwitcherNav';
      const Wt = e.memo(() =>
        e.createElement(
          'div',
          {
            'data-tc-role': 'navbar',
            className:
              'w-18 mobile:zoom-4/5 bg-navbar-light dark:bg-navbar-dark flex flex-col justify-start items-center pt-4 pb-4',
          },
          e.createElement(At, null),
          e.createElement(
            'div',
            { className: 'flex-1 w-full overflow-hidden flex flex-col' },
            e.createElement(
              'div',
              { className: 'space-y-2' },
              e.createElement(Tt, null),
              e.createElement(Ut, null),
              e.createElement(Qt, null),
              f.pluginCustomPanel
                .filter((n) => n.position === 'navbar-personal')
                .map((n) =>
                  e.createElement(me, { key: n.name, panelInfo: n, withBg: !0 })
                )
            ),
            e.createElement(
              'div',
              { className: 'px-3' },
              e.createElement(S.Z, null)
            ),
            e.createElement(
              'div',
              {
                className:
                  'overflow-y-hidden hover:overflow-y-smart scroll overflow-x-hidden thin-scrollbar',
              },
              e.createElement(Nt, null)
            )
          ),
          e.createElement(
            'div',
            {
              'data-tc-role': 'navbar-settings',
              className: 'flex flex-col items-center space-y-2 pt-3',
            },
            f.pluginCustomPanel
              .filter((n) => n.position === 'navbar-more')
              .map((n) =>
                e.createElement(me, { key: n.name, panelInfo: n, withBg: !1 })
              ),
            e.createElement(jt, null),
            e.createElement(Jt, null),
            e.createElement(Rt, null)
          )
        )
      );
      Wt.displayName = 'Navbar';
      var wa = m(7364);
      function Sa() {
        (0, zt.q)((n) => {
          (0, ue.Hi)(n) && (n.preventDefault(), Ht());
        });
      }
      const Xt = e.memo(
        () => (
          (0, $.bw)('appMainRenderStart'),
          Sa(),
          (0, t.GCv)(),
          e.createElement(
            wa.l,
            null,
            e.createElement(
              'div',
              { className: 'flex flex-col h-full' },
              e.createElement(Y, null),
              e.createElement(Z, null),
              e.createElement(
                'div',
                { className: 'flex flex-1 overflow-hidden' },
                e.createElement(Wt, null),
                e.createElement(vt, null)
              )
            )
          )
        )
      );
      Xt.displayName = 'MainRoute';
      const Ia = Xt;
    },
  },
]);
