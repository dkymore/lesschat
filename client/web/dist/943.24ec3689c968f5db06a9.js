'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [943],
  {
    92943: (D, l, a) => {
      a.r(l), a.d(l, { MarkdownEditor: () => r, plugins: () => E });
      var e = a(52983),
        d = a(63996),
        o = a(26288),
        _ = a(28074),
        m = a(78520),
        s = a(58789);
      const E = [(0, s.Z)()],
        M = (n, t) => {
          (0, m.s)(n).render(
            e.createElement(
              'div',
              { className: 'markdown-body' },
              e.createElement(_.U, { raw: t.value })
            )
          );
        },
        r = e.memo((n) => {
          var t;
          return e.createElement(d.M, {
            plugins: E,
            value: (t = n.value) != null ? t : '',
            onChange: n.onChange,
            uploadImages: (u) =>
              Promise.all(
                u.map((P) =>
                  (0, o.cTq)(P, { usage: n.imageUsage || 'unknown' }).then(
                    (v) => ({ url: v.url })
                  )
                )
              ),
            overridePreview: M,
          });
        });
      r.displayName = 'MarkdownEditor';
    },
  },
]);
