'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [776],
  {
    85603: (d, a, t) => {
      t.r(a), t.d(a, { default: () => p });
      var _ = t(82335),
        e = t(52983),
        n = t(54782),
        m = t(7364),
        r = t(26288),
        P = t(14231),
        s = t(16131),
        c = t(17679),
        R = t(64939),
        D = t(53937),
        M = t(21513);
      const o = e.memo(() => {
        const { groupId: l } = (0, n.useParams)();
        return l
          ? e.createElement(c.a, { groupId: l, onClose: () => {} })
          : e.createElement(R.T, null);
      });
      o.displayName = 'GroupDetailRoute';
      const E = e.memo(
        () => (
          (0, _.bw)('appRouteRenderStart'),
          e.createElement(
            'div',
            { className: 'flex h-full bg-content-light dark:bg-content-dark' },
            e.createElement(
              m.l,
              null,
              e.createElement(
                n.Routes,
                null,
                e.createElement(n.Route, {
                  path: '/personal/converse/:converseId',
                  element: e.createElement(P.d, null),
                }),
                e.createElement(n.Route, {
                  path: '/group/:groupId/detail',
                  element: e.createElement(o, null),
                }),
                e.createElement(n.Route, {
                  path: '/group/:groupId/:panelId',
                  element: e.createElement(s.x, null),
                }),
                e.createElement(n.Route, {
                  path: '/group/main/:groupId/*',
                  element: e.createElement(D.Z, null),
                }),
                e.createElement(n.Route, {
                  path: '/plugin/*',
                  element: e.createElement(
                    n.Routes,
                    null,
                    M.pluginPanelRoute.map((l, O) => {
                      var u;
                      return e.createElement(n.Route, {
                        key: l.name,
                        path: (u = l.path) != null ? u : `/fallback${O}`,
                        element: e.createElement(l.component),
                      });
                    })
                  ),
                }),
                e.createElement(n.Route, {
                  path: '/*',
                  element: (0, r.t)('\u672A\u77E5\u7684\u9762\u677F'),
                })
              )
            )
          )
        )
      );
      E.displayName = 'PanelRoute';
      const p = E;
    },
  },
]);
