'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [497],
  {
    89925: (F, v, l) => {
      l.d(v, { a: () => e.a3 });
      var e = l(93540);
    },
    84143: (F, v, l) => {
      l.d(v, { a: () => x });
      var e = l(75526),
        m = l(95268),
        a = l(14517),
        j = l(52983),
        Y = l(26288),
        y = l(93540),
        f = Object.defineProperty,
        R = Object.defineProperties,
        k = Object.getOwnPropertyDescriptors,
        w = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        b = (n, o, P) =>
          o in n
            ? f(n, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: P,
              })
            : (n[o] = P),
        A = (n, o) => {
          for (var P in o || (o = {})) d.call(o, P) && b(n, P, o[P]);
          if (w) for (var P of w(o)) E.call(o, P) && b(n, P, o[P]);
          return n;
        },
        c = (n, o) => R(n, k(o)),
        C = (n, o) => {
          var P = {};
          for (var S in n) d.call(n, S) && o.indexOf(S) < 0 && (P[S] = n[S]);
          if (n != null && w)
            for (var S of w(n))
              o.indexOf(S) < 0 && E.call(n, S) && (P[S] = n[S]);
          return P;
        };
      function T(n = 'circle') {
        return n === 'circle' ? 'circle' : 'default';
      }
      const x = j.memo((n) => {
        var o = n,
          { icon: P, iconClassName: S, title: H, className: J } = o,
          M = C(o, ['icon', 'iconClassName', 'title', 'className']);
        const K = T(M.shape),
          V = j.createElement(
            'span',
            { className: 'anticon' },
            j.createElement(y.JO, { className: S, icon: P })
          ),
          $ = M.active
            ? 'bg-black bg-opacity-60'
            : 'bg-black bg-opacity-20 hover:bg-opacity-60',
          _ = j.createElement(
            e.Z,
            c(
              A(
                {
                  className: (0, a.Z)(
                    'border-0 text-white text-opacity-80 hover:text-opacity-100',
                    M.danger
                      ? 'bg-red-600 bg-opacity-80 hover:bg-opacity-100'
                      : $,
                    J
                  ),
                },
                M
              ),
              { shape: K, icon: V }
            )
          );
        return (0, Y.YQu)(H) && !M.disabled
          ? j.createElement(m.Z, { title: H }, _)
          : _;
      });
      x.displayName = 'IconBtn';
    },
    37034: (F, v, l) => {
      l.d(v, { S: () => b });
      var e = l(73246),
        m = l(52983),
        a = l(26288),
        j = Object.defineProperty,
        Y = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        R = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        w = (A, c, C) =>
          c in A
            ? j(A, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C,
              })
            : (A[c] = C),
        d = (A, c) => {
          for (var C in c || (c = {})) R.call(c, C) && w(A, C, c[C]);
          if (f) for (var C of f(c)) k.call(c, C) && w(A, C, c[C]);
          return A;
        },
        E = (A, c) => Y(A, y(c));
      const b = m.memo((A) => {
        const { language: c, setLanguage: C } = (0, a.ZKp)(),
          T = (0, m.useCallback)(
            (x) => {
              (0, a.lHp)(
                (0, a.t)('\u5237\u65B0\u9875\u9762\u540E\u751F\u6548'),
                'info'
              ),
                C(x);
            },
            [C]
          );
        return m.createElement(
          e.Z,
          E(d({ style: { width: 280 }, size: 'large' }, A), {
            value: c,
            onChange: T,
          }),
          m.createElement(
            e.Z.Option,
            { value: 'zh-CN' },
            '\u7B80\u4F53\u4E2D\u6587'
          ),
          m.createElement(e.Z.Option, { value: 'en-US' }, 'English')
        );
      });
      b.displayName = 'LanguageSelect';
    },
    7013: (F, v, l) => {
      l.d(v, { a: () => j });
      var e = l(52983),
        m = l(93540),
        a = l(89925);
      const j = e.memo(({ content: Y }) =>
        e.createElement(
          a.a,
          { overlay: Y },
          e.createElement(m.JO, {
            icon: 'mdi:alert-circle-outline',
            className: 'cursor-help',
          })
        )
      );
      j.displayName = 'TipIcon';
    },
    84850: (F, v, l) => {
      l.r(v), l.d(v, { default: () => Ue });
      var e = l(52983),
        m = l(54782),
        a = l(26288),
        j = l(5868),
        Y = l(87450),
        y = l(21848);
      function f(I) {
        return new URLSearchParams(window.location.search).get(I);
      }
      const R = (I) => {
        const [t, i] = (0, e.useState)(() => f(I));
        return (
          (0, e.useEffect)(() => {
            const g = () => {
              i(f(I));
            };
            return (
              window.addEventListener('popstate', g),
              window.addEventListener('pushstate', g),
              window.addEventListener('replacestate', g),
              () => {
                window.removeEventListener('popstate', g),
                  window.removeEventListener('pushstate', g),
                  window.removeEventListener('replacestate', g);
              }
            );
          }, []),
          t
        );
      };
      var k = Object.defineProperty,
        w = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        c = (I, t, i) =>
          t in I
            ? k(I, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (I[t] = i),
        C = (I, t) => {
          for (var i in t || (t = {})) b.call(t, i) && c(I, i, t[i]);
          if (E) for (var i of E(t)) A.call(t, i) && c(I, i, t[i]);
          return I;
        },
        T = (I, t) => w(I, d(t));
      function x() {
        const I = (0, m.useNavigate)(),
          t = (0, m.useLocation)();
        return (0, e.useCallback)(
          (g) => {
            I(T(C({}, t), { pathname: g }));
          },
          [I, t]
        );
      }
      var n = l(84143),
        o = l(84208),
        P = l(79546),
        S = l(75526);
      const H = e.memo(() => {
        var I;
        const [t, i] = (0, e.useState)(
          (I = window.localStorage.getItem('serviceUrl')) != null ? I : ''
        );
        return e.createElement(
          o.AB,
          { title: (0, a.t)('\u670D\u52A1\u7AEF\u5730\u5740') },
          e.createElement(P.Z, {
            placeholder: (0, a.t)(
              '\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740(\u793A\u4F8B: http://127.0.0.1:11000)'
            ),
            value: t,
            onChange: (g) => i(g.target.value),
          }),
          e.createElement(
            'div',
            { className: 'space-x-2 text-right mt-8' },
            e.createElement(
              S.Z,
              {
                onClick: () => {
                  window.localStorage.removeItem('serviceUrl'),
                    window.location.reload();
                },
              },
              (0, a.t)('\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u5730\u5740')
            ),
            e.createElement(
              S.Z,
              {
                type: 'primary',
                disabled: !t,
                onClick: () => {
                  window.localStorage.setItem('serviceUrl', t),
                    window.location.reload();
                },
              },
              (0, a.t)('\u786E\u8BA4\u4FEE\u6539\u5E76\u5237\u65B0\u9875\u9762')
            )
          )
        );
      });
      H.displayName = 'ServiceUrlSettings';
      var J = l(37034),
        M = l(14517),
        K = Object.defineProperty,
        V = Object.defineProperties,
        $ = Object.getOwnPropertyDescriptors,
        _ = Object.getOwnPropertySymbols,
        me = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        ee = (I, t, i) =>
          t in I
            ? K(I, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (I[t] = i),
        je = (I, t) => {
          for (var i in t || (t = {})) me.call(t, i) && ee(I, i, t[i]);
          if (_) for (var i of _(t)) ce.call(t, i) && ee(I, i, t[i]);
          return I;
        },
        Ne = (I, t) => V(I, $(t));
      const Z = e.memo((I) =>
        e.createElement(
          'input',
          Ne(je({}, I), {
            className: (0, M.Z)(
              'appearance-none rounded-md relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base mobile:text-sm',
              I.className
            ),
          }),
          I.children
        )
      );
      Z.displayName = 'EntryInput';
      var Ge = l(67434),
        de = l(73352),
        Ce = l.n(de),
        pe = Object.defineProperty,
        Pe = Object.defineProperties,
        Ae = Object.getOwnPropertyDescriptors,
        Ie = Object.getOwnPropertySymbols,
        Ee = Object.prototype.hasOwnProperty,
        Be = Object.prototype.propertyIsEnumerable,
        ie = (I, t, i) =>
          t in I
            ? pe(I, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (I[t] = i),
        Se = (I, t) => {
          for (var i in t || (t = {})) Ee.call(t, i) && ie(I, i, t[i]);
          if (Ie) for (var i of Ie(t)) Be.call(t, i) && ie(I, i, t[i]);
          return I;
        },
        xe = (I, t) => Pe(I, Ae(t));
      const L = e.memo((I) =>
        e.createElement(
          'button',
          xe(Se({ disabled: I.loading }, Ce()(I, ['loading'])), {
            className: (0, M.Z)(
              'w-full py-2 px-4 mb-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50',
              I.className
            ),
          }),
          I.loading && e.createElement(Ge.$, null),
          I.children
        )
      );
      L.displayName = 'PrimaryBtn';
      var ve = l(21513),
        be = (I, t, i) =>
          new Promise((g, s) => {
            var p = (r) => {
                try {
                  u(i.next(r));
                } catch (G) {
                  s(G);
                }
              },
              N = (r) => {
                try {
                  u(i.throw(r));
                } catch (G) {
                  s(G);
                }
              },
              u = (r) =>
                r.done ? g(r.value) : Promise.resolve(r.value).then(p, N);
            u((i = i.apply(I, t)).next());
          });
      const te = e.memo(() => {
        const [I, t] = (0, e.useState)(''),
          [i, g] = (0, e.useState)(''),
          s = (0, m.useNavigate)(),
          p = R('redirect'),
          { pathname: N } = (0, m.useLocation)(),
          {
            serverName: u,
            disableGuestLogin: r,
            disableUserRegister: G,
          } = (0, a.tR0)((B) => ({
            serverName: B.serverName,
            disableGuestLogin: B.disableGuestLogin,
            disableUserRegister: B.disableUserRegister,
          }));
        (0, e.useEffect)(() => {
          (0, y.gP)()
            .then(() => {
              s('/main');
            })
            .catch(() => {});
        }, []);
        const [{ loading: h, error: O }, U] = (0, a.ilX)(
            () =>
              be(void 0, null, function* () {
                yield (0, j.string)()
                  .email((0, a.t)('\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E'))
                  .required((0, a.t)('\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A'))
                  .validate(I),
                  yield (0, j.string)()
                    .min(
                      6,
                      (0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D')
                    )
                    .required((0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A'))
                    .validate(i);
                const B = yield (0, a.fZz)(I, i);
                (0, y.rU)(B),
                  yield (0, Y._H)(B.token),
                  (0, a.YQu)(p) && p !== N
                    ? s(decodeURIComponent(p))
                    : s('/main');
              }),
            [I, i, p, N, s]
          ),
          W = x();
        return e.createElement(
          'div',
          { className: 'w-96 text-white relative' },
          e.createElement(
            'div',
            { className: 'mb-4 text-2xl' },
            (0, a.t)('\u767B\u5F55 {{serverName}}', {
              serverName: u || 'Tailchat',
            })
          ),
          e.createElement(
            'div',
            null,
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u90AE\u7BB1')
              ),
              e.createElement(Z, {
                name: 'login-email',
                placeholder: 'name@example.com',
                type: 'text',
                value: I,
                onChange: (B) => t(B.target.value),
              })
            ),
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u5BC6\u7801')
              ),
              e.createElement(Z, {
                name: 'login-password',
                type: 'password',
                placeholder: '******',
                value: i,
                onChange: (B) => g(B.target.value),
              })
            ),
            h === !1 &&
              O &&
              e.createElement(
                'div',
                { className: 'flex justify-between mb-4' },
                e.createElement(
                  'p',
                  { className: 'text-red-500 text-sm' },
                  O.message
                ),
                e.createElement(
                  'div',
                  {
                    className: 'text-gray-200 cursor-pointer',
                    onClick: () => W('/entry/forget'),
                  },
                  (0, a.t)('\u5FD8\u8BB0\u5BC6\u7801\uFF1F')
                )
              ),
            e.createElement(
              L,
              { loading: h, onClick: U },
              (0, a.t)('\u767B\u5F55')
            ),
            ve.pluginLoginAction.map((B) => {
              const { name: z, component: q } = B;
              return e.createElement(q, { key: z });
            })
          ),
          e.createElement(
            'div',
            { className: 'absolute bottom-4 left-0 space-x-2' },
            e.createElement(n.a, {
              icon: 'mdi:cog',
              shape: 'square',
              onClick: () => (0, o.h7)(e.createElement(H, null)),
            }),
            e.createElement(J.S, { size: 'middle' })
          )
        );
      });
      te.displayName = 'LoginView';
      const De = {
          entryLeft: 'src-routes-Entry-index-module__entryLeft--vKV-n',
        },
        Ye =
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjkiIGhlaWdodD0iNDI1IiB2aWV3Qm94PSIwIDAgMTY5IDQyNSI+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgPHBhdGggZD0iTTAgMGgxNjl2NDI1SDB6Ii8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTYiIHI9IjEwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iNDEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSI2NiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjkxIiByPSI5IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTE2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTYiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSI0MSIgcj0iOCIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjY2IiByPSI2IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iOTEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSIxMTYiIHI9IjciIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSIxNiIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI2NSIgY3k9IjQxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iNjYiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSI5MSIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI2NSIgY3k9IjExNiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjE2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iNDEiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI2NiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjkxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMTE2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjE2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjQxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjY2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjkxIiByPSI3IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjExNiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNiIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSI0MSIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSI2NiIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSI5MSIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxMTYiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTY1IiBjeT0iNDEiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTY1IiBjeT0iNjYiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNDEiIHI9IjciIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSIxNDEiIHI9IjYiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSIxNDEiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSIxNDEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMTQxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjE0MSIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNjUiIGN5PSIxMTYiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNjYiIHI9IjEwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTkxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMjE2IiByPSI3IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMjQxIiByPSI5IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMjY2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTY2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTkxIiByPSI4IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMjE2IiByPSI2IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMjQxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMjY2IiByPSI3IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMTY2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMTkxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjE2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjQxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjY2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMTY2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMTkxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMjE2IiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMjQxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMjY2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjE2NiIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxMTUiIGN5PSIxOTEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMjE2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjI0MSIgcj0iNyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxMTUiIGN5PSIyNjYiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTQwIiBjeT0iMTkxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjIxNiIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIyNDEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTQwIiBjeT0iMjY2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE2NSIgY3k9IjE2NiIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNjUiIGN5PSIxOTEiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIzOTEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSI0MTYiIHI9IjciIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSIzOTEiIHI9IjgiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSI0MTYiIHI9IjYiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSIzOTEiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSI0MTYiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSIzOTEiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0MTYiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMzkxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjQxNiIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSI0MTYiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTY1IiBjeT0iNDE2IiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMjkxIiByPSI3IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMjkxIiByPSI2IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iMjkxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMjkxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjExNSIgY3k9IjI5MSIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIyOTEiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTY1IiBjeT0iMjkxIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE2NSIgY3k9IjI0MSIgcj0iMiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjMxNiIgcj0iOSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjM0MSIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjMxNiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjM0MSIgcj0iNyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI2NSIgY3k9IjMxNiIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI2NSIgY3k9IjM0MSIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjMxNiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjM0MSIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxMTUiIGN5PSIzMTYiIHI9IjciIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTE1IiBjeT0iMzQxIiByPSI1IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjMxNiIgcj0iNSIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIzNDEiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIzNjYiIHI9IjciIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNDAiIGN5PSIzNjYiIHI9IjYiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iNjUiIGN5PSIzNjYiIHI9IjMiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSIzNjYiIHI9IjUiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICAgICAgPGNpcmNsZSBjeD0iMTQwIiBjeT0iMzY2IiByPSIyIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4xIi8+DQogICAgICAgIDxjaXJjbGUgY3g9IjE2NSIgY3k9IjM2NiIgcj0iMyIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMSIvPg0KICAgICAgICA8Y2lyY2xlIGN4PSIxNjUiIGN5PSIzMTYiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz4NCiAgICA8L2c+DQo8L3N2Zz4NCg==';
      var X = l(93540),
        ye = Object.defineProperty,
        we = Object.defineProperties,
        Ze = Object.getOwnPropertyDescriptors,
        ae = Object.getOwnPropertySymbols,
        We = Object.prototype.hasOwnProperty,
        fe = Object.prototype.propertyIsEnumerable,
        le = (I, t, i) =>
          t in I
            ? ye(I, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (I[t] = i),
        Me = (I, t) => {
          for (var i in t || (t = {})) We.call(t, i) && le(I, i, t[i]);
          if (ae) for (var i of ae(t)) fe.call(t, i) && le(I, i, t[i]);
          return I;
        },
        Re = (I, t) => we(I, Ze(t));
      const Q = e.memo((I) =>
        e.createElement(
          'button',
          Re(Me({}, I), {
            className: (0, M.Z)(
              'w-full py-2 px-4 border border-transparent text-sm font-medium text-white focus:outline-none disabled:opacity-50',
              I.className
            ),
          }),
          I.children
        )
      );
      Q.displayName = 'SecondaryBtn';
      var he = l(7013),
        re = (I, t, i) =>
          new Promise((g, s) => {
            var p = (r) => {
                try {
                  u(i.next(r));
                } catch (G) {
                  s(G);
                }
              },
              N = (r) => {
                try {
                  u(i.throw(r));
                } catch (G) {
                  s(G);
                }
              },
              u = (r) =>
                r.done ? g(r.value) : Promise.resolve(r.value).then(p, N);
            u((i = i.apply(I, t)).next());
          });
      const ne = e.memo(() => {
        const [I, t] = (0, e.useState)(''),
          [i, g] = (0, e.useState)(''),
          [s, p] = (0, e.useState)(''),
          [N, u] = (0, e.useState)(''),
          [r, G] = (0, e.useState)(!1),
          [h, O] = (0, e.useState)(!1),
          U = (0, m.useNavigate)(),
          W = R('redirect'),
          [{ loading: B, error: z }, q] = (0, a.ilX)(
            () =>
              re(void 0, null, function* () {
                yield (0, j.string)()
                  .email((0, a.t)('\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E'))
                  .required((0, a.t)('\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A'))
                  .max(
                    40,
                    (0, a.t)(
                      '\u90AE\u7BB1\u6700\u957F\u9650\u523640\u4E2A\u5B57\u7B26'
                    )
                  )
                  .validate(I),
                  yield (0, j.string)()
                    .min(
                      6,
                      (0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D')
                    )
                    .required((0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A'))
                    .max(
                      40,
                      (0, a.t)(
                        '\u5BC6\u7801\u6700\u957F\u9650\u523640\u4E2A\u5B57\u7B26'
                      )
                    )
                    .validate(s);
                const D = yield (0, a.YiW)({
                  email: I,
                  password: s,
                  nickname: i,
                  emailOTP: N,
                });
                (0, y.rU)(D),
                  yield (0, Y._H)(D.token),
                  (0, a.YQu)(W) ? U(decodeURIComponent(W)) : U('/main');
              }),
            [I, i, s, N, W]
          ),
          [{ loading: Fe }, He] = (0, a.CoE)(
            () =>
              re(void 0, null, function* () {
                yield a.o4J.EA.verifyEmail(I),
                  (0, a.jiy)(
                    (0, a.t)(
                      '\u53D1\u9001\u6210\u529F, \u8BF7\u68C0\u67E5\u4F60\u7684\u90AE\u7BB1\u3002'
                    )
                  ),
                  G(!0);
              }),
            [I]
          );
        (0, a.qoQ)([I, h], () => {
          h || g(ke(I));
        });
        const _e = x();
        return e.createElement(
          'div',
          { className: 'w-96 text-white' },
          e.createElement(
            'div',
            { className: 'mb-4 text-2xl' },
            (0, a.t)('\u6CE8\u518C\u8D26\u53F7')
          ),
          e.createElement(
            'div',
            null,
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u90AE\u7BB1')
              ),
              e.createElement(Z, {
                name: 'reg-email',
                placeholder: 'name@example.com',
                type: 'text',
                value: I,
                onChange: (D) => t(D.target.value),
              })
            ),
            (0, a.HiA)().emailVerification &&
              e.createElement(
                e.Fragment,
                null,
                !r &&
                  e.createElement(
                    L,
                    { loading: Fe, onClick: He },
                    (0, a.t)('\u5411\u90AE\u7BB1\u53D1\u9001\u6821\u9A8C\u7801')
                  ),
                e.createElement(
                  'div',
                  { className: 'mb-4' },
                  e.createElement(
                    'div',
                    { className: 'mb-2' },
                    (0, a.t)('\u90AE\u7BB1\u6821\u9A8C\u7801')
                  ),
                  e.createElement(Z, {
                    name: 'reg-email-otp',
                    type: 'text',
                    placeholder: '6\u4F4D\u6821\u9A8C\u7801',
                    value: N,
                    onChange: (D) => u(D.target.value),
                  })
                )
              ),
            e.createElement(
              'div',
              { className: 'mb-4 relative' },
              e.createElement(
                'div',
                { className: 'mb-2 flex items-center' },
                e.createElement(
                  'span',
                  { className: 'mr-1' },
                  (0, a.t)('\u6635\u79F0')
                ),
                e.createElement(he.a, {
                  content: (0, a.t)(
                    '\u540E\u7EED\u5728\u7528\u6237\u8BBE\u7F6E\u4E2D\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539'
                  ),
                })
              ),
              e.createElement(Z, {
                name: 'reg-nickname',
                type: 'text',
                disabled: !h,
                value: i,
                onChange: (D) => g(D.target.value),
              }),
              e.createElement(X.JO, {
                className:
                  'absolute bottom-1 right-1 w-8 h-8 p-2 rounded cursor-pointer bg-opacity-20 bg-black z-10',
                icon: h ? 'mdi:pencil-off' : 'mdi:pencil',
                onClick: () => O((D) => !D),
              })
            ),
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u5BC6\u7801')
              ),
              e.createElement(Z, {
                name: 'reg-password',
                type: 'password',
                placeholder: '******',
                value: s,
                onChange: (D) => p(D.target.value),
              })
            ),
            z &&
              e.createElement(
                'p',
                { className: 'text-red-500 text-sm mb-4' },
                z.message
              ),
            e.createElement(
              L,
              { loading: B, onClick: q },
              (0, a.t)('\u6CE8\u518C\u8D26\u53F7')
            ),
            e.createElement(
              Q,
              {
                className: 'text-left',
                disabled: B,
                onClick: () => _e('/entry/login'),
              },
              e.createElement(X.JO, {
                icon: 'mdi:arrow-left',
                className: 'mr-1 inline',
              }),
              (0, a.t)('\u8FD4\u56DE\u767B\u5F55')
            )
          )
        );
      });
      ne.displayName = 'RegisterView';
      function ke(I) {
        return I.split('@')[0];
      }
      var Te = l(82335),
        Le = (I, t, i) =>
          new Promise((g, s) => {
            var p = (r) => {
                try {
                  u(i.next(r));
                } catch (G) {
                  s(G);
                }
              },
              N = (r) => {
                try {
                  u(i.throw(r));
                } catch (G) {
                  s(G);
                }
              },
              u = (r) =>
                r.done ? g(r.value) : Promise.resolve(r.value).then(p, N);
            u((i = i.apply(I, t)).next());
          });
      const ge = e.memo(() => {
        const I = (0, m.useNavigate)(),
          t = x(),
          i = R('redirect'),
          [g, s] = (0, e.useState)(''),
          [{ loading: p }, N] = (0, a.CoE)(
            () =>
              Le(void 0, null, function* () {
                yield (0, j.string)()
                  .required((0, a.t)('\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A'))
                  .max(16)
                  .validate(g);
                const u = yield (0, a.DW_)(g);
                (0, y.rU)(u),
                  yield (0, Y._H)(u.token),
                  (0, a.YQu)(i) ? I(decodeURIComponent(i)) : I('/main');
              }),
            [g, I, i]
          );
        return e.createElement(
          'div',
          { className: 'w-96 text-white' },
          e.createElement(
            'div',
            { className: 'mb-4 text-2xl' },
            (0, a.t)('\u521B\u5EFA\u8BBF\u5BA2')
          ),
          e.createElement(
            'div',
            null,
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u6635\u79F0')
              ),
              e.createElement(Z, {
                placeholder: (0, a.t)(
                  '\u60F3\u8981\u8BA9\u5927\u5BB6\u5982\u4F55\u79F0\u547C\u4F60'
                ),
                type: 'text',
                value: g,
                onChange: (u) => s(u.target.value),
              })
            ),
            e.createElement(
              L,
              { loading: p, onClick: N },
              (0, a.t)('\u7ACB\u5373\u8FDB\u5165')
            ),
            e.createElement(
              Q,
              {
                className: 'text-left',
                disabled: p,
                onClick: () => t('/entry/login'),
              },
              e.createElement(X.JO, {
                icon: 'mdi:arrow-left',
                className: 'mr-1 inline',
              }),
              (0, a.t)('\u8FD4\u56DE\u767B\u5F55')
            )
          )
        );
      });
      ge.displayName = 'GuestView';
      var se = (I, t, i) =>
        new Promise((g, s) => {
          var p = (r) => {
              try {
                u(i.next(r));
              } catch (G) {
                s(G);
              }
            },
            N = (r) => {
              try {
                u(i.throw(r));
              } catch (G) {
                s(G);
              }
            },
            u = (r) =>
              r.done ? g(r.value) : Promise.resolve(r.value).then(p, N);
          u((i = i.apply(I, t)).next());
        });
      const oe = e.memo(() => {
        const [I, t] = (0, e.useState)(''),
          [i, g] = (0, e.useState)(''),
          [s, p] = (0, e.useState)(''),
          [N, u] = (0, e.useState)(!1),
          r = x(),
          [{ loading: G }, h] = (0, a.CoE)(
            () =>
              se(void 0, null, function* () {
                yield (0, a.o9n)(I),
                  u(!0),
                  (0, a.lHp)(
                    `\u5DF2\u53D1\u9001\u90AE\u4EF6\u5230 ${I}`,
                    'success'
                  );
              }),
            [I]
          ),
          [{ loading: O }, U] = (0, a.CoE)(
            () =>
              se(void 0, null, function* () {
                yield (0, j.string)()
                  .email((0, a.t)('\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E'))
                  .required((0, a.t)('\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A'))
                  .validate(I),
                  yield (0, j.string)()
                    .min(
                      6,
                      (0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4F4E\u4E8E6\u4F4D')
                    )
                    .required((0, a.t)('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A'))
                    .validate(i),
                  yield (0, j.string)()
                    .length(6, (0, a.t)('OTP\u4E3A6\u4F4D\u6570\u5B57'))
                    .validate(s),
                  yield (0, a.c0U)(I, i, s),
                  (0, a.lHp)(
                    (0, a.t)(
                      '\u5BC6\u7801\u91CD\u7F6E\u6210\u529F\uFF0C\u73B0\u5728\u56DE\u5230\u767B\u5F55\u9875'
                    ),
                    'success'
                  ),
                  r('/entry/login');
              }),
            [I, i, s, r]
          );
        return e.createElement(
          'div',
          { className: 'w-96 text-white' },
          e.createElement(
            'div',
            { className: 'mb-4 text-2xl' },
            (0, a.t)('\u5FD8\u8BB0\u5BC6\u7801')
          ),
          e.createElement(
            'div',
            null,
            e.createElement(
              'div',
              { className: 'mb-4' },
              e.createElement(
                'div',
                { className: 'mb-2' },
                (0, a.t)('\u90AE\u7BB1')
              ),
              e.createElement(Z, {
                name: 'forget-email',
                placeholder: 'name@example.com',
                type: 'text',
                disabled: N,
                value: I,
                onChange: (W) => t(W.target.value),
              })
            ),
            !N &&
              e.createElement(
                L,
                { loading: G, onClick: h },
                (0, a.t)('\u5411\u90AE\u7BB1\u53D1\u9001OTP')
              ),
            N &&
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  'div',
                  { className: 'mb-4' },
                  e.createElement(
                    'div',
                    { className: 'mb-2' },
                    (0, a.t)('OTP')
                  ),
                  e.createElement(Z, {
                    name: 'forget-otp',
                    type: 'text',
                    value: s,
                    onChange: (W) => p(W.target.value),
                  })
                ),
                e.createElement(
                  'div',
                  { className: 'mb-4' },
                  e.createElement(
                    'div',
                    { className: 'mb-2' },
                    (0, a.t)('\u65B0\u5BC6\u7801')
                  ),
                  e.createElement(Z, {
                    name: 'forget-password',
                    type: 'password',
                    placeholder: '******',
                    value: i,
                    onChange: (W) => g(W.target.value),
                  })
                ),
                e.createElement(
                  L,
                  { loading: O, onClick: U },
                  (0, a.t)('\u91CD\u8BBE\u5BC6\u7801')
                )
              ),
            e.createElement(
              Q,
              { disabled: O, onClick: () => r('/entry/login') },
              e.createElement(X.JO, {
                icon: 'mdi:arrow-left',
                className: 'mr-1 inline',
              }),
              (0, a.t)('\u8FD4\u56DE\u767B\u5F55')
            )
          )
        );
      });
      oe.displayName = 'ForgetPasswordView';
      function Oe(I) {
        if (I.length === 0)
          throw new Error('Cannot get a random element from an empty array');
        const t = Math.floor(Math.random() * I.length);
        return I[t];
      }
      const ue = e.memo(() => {
        (0, Te.bw)('appEntryRenderStart');
        const I = (0, e.useRef)(null);
        return (
          (0, e.useEffect)(() => {
            I.current &&
              I.current.style.setProperty(
                '--tc-background-image',
                Oe([
                  'url(/bg/77992108_p0.webp)',
                  'url(/bg/83808930_p0.webp)',
                  'url(/bg/91828089_p0.webp)',
                  'url(/bg/96217890_p0.webp)',
                  'url(/bg/107871192_p0.webp)',
                  'url(/bg/124719914_p0.webp)',
                  'url(/bg/132641568_p0.webp)',
                  'url(/bg/vrc_moblie.webp)',
                  'url(/bg/vrc_pc.webp)',
                  'url(/bg/yiln_moblie.webp)',
                ])
              );
          }),
          e.createElement(
            'div',
            { className: 'h-full flex flex-row', ref: I },
            e.createElement(
              'div',
              {
                className: (0, M.Z)(
                  De.entryLeft,
                  'entry-left w-142 mobile:w-full pt-40 px-4 bg-gray-600 min-h-full flex justify-center bg-repeat-y z-10'
                ),
                style: { backgroundImage: `url(${Ye})` },
              },
              e.createElement(
                m.Routes,
                null,
                e.createElement(m.Route, {
                  path: '/login',
                  element: e.createElement(te, null),
                }),
                e.createElement(m.Route, {
                  path: '/register',
                  element: e.createElement(ne, null),
                }),
                e.createElement(m.Route, {
                  path: '/guest',
                  element: e.createElement(ge, null),
                }),
                e.createElement(m.Route, {
                  path: '/forget',
                  element: e.createElement(oe, null),
                }),
                e.createElement(m.Route, {
                  path: '/',
                  element: e.createElement(m.Navigate, {
                    to: '/entry/login',
                    replace: !0,
                  }),
                })
              )
            ),
            e.createElement('div', {
              className: 'flex-1 mobile:hidden tc-background',
            })
          )
        );
      });
      ue.displayName = 'EntryRoute';
      const Ue = ue;
    },
    21848: (F, v, l) => {
      l.d(v, { JM: () => w, gP: () => k, rU: () => f });
      var e = l(26288),
        m = l(14698),
        a = l.n(m),
        j = l(87450),
        Y = (d, E, b) =>
          new Promise((A, c) => {
            var C = (n) => {
                try {
                  x(b.next(n));
                } catch (o) {
                  c(o);
                }
              },
              T = (n) => {
                try {
                  x(b.throw(n));
                } catch (o) {
                  c(o);
                }
              },
              x = (n) =>
                n.done ? A(n.value) : Promise.resolve(n.value).then(C, T);
            x((b = b.apply(d, E)).next());
          });
      let y = null;
      function f(d) {
        y = d;
      }
      function R() {
        return y;
      }
      function k() {
        return Y(this, null, function* () {
          let d = R();
          if (a()(d)) {
            const E = yield (0, j.pT)();
            if (typeof E != 'string')
              throw new Error('Token \u683C\u5F0F\u4E0D\u5408\u6CD5');
            if (
              (console.debug(
                '\u6B63\u5728\u5C1D\u8BD5\u4F7F\u7528Token\u767B\u5F55'
              ),
              (d = yield e.o4J.EA.loginWithToken(E)),
              d === null)
            )
              throw new Error('Token \u5185\u5BB9\u4E0D\u5408\u6CD5');
            f(d);
          }
          return d;
        });
      }
      function w(d) {
        if (typeof d != 'string') return !0;
        const E = d.split('@')[1];
        return !!(!E || E.endsWith('.msgbyte.com'));
      }
    },
  },
]);
