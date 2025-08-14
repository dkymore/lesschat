'use strict';
(self.webpackChunktailchat_web = self.webpackChunktailchat_web || []).push([
  [861],
  {
    28723: (B, P, t) => {
      t.d(P, { L: () => n });
      var e = t(40013),
        o = t(14517),
        a = t(52983),
        r = t(93540);
      const n = a.memo((s) => {
        const [f, h] = (0, a.useState)(!1);
        return a.createElement(
          e.Z,
          {
            open: f,
            onOpenChange: h,
            content: () =>
              s.popoverContent({
                hidePopover: () => {
                  h(!1);
                },
              }),
            overlayClassName: (0, o.Z)(
              'chat-message-input_action-popover',
              s.overlayClassName
            ),
            showArrow: !1,
            placement: 'topRight',
            trigger: ['click'],
          },
          a.createElement(r.JO, {
            className: 'text-2xl cursor-pointer',
            icon: s.icon,
          })
        );
      });
      n.displayName = 'BaseChatInputButton';
    },
    29254: (B, P, t) => {
      t.d(P, { TD: () => E, at: () => c, x2: () => _, zB: () => u });
      var e = t(52983),
        o = t(26288),
        a = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        f = (i, l, d) =>
          l in i
            ? a(i, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (i[l] = d),
        h = (i, l) => {
          for (var d in l || (l = {})) n.call(l, d) && f(i, d, l[d]);
          if (r) for (var d of r(l)) s.call(l, d) && f(i, d, l[d]);
          return i;
        };
      const u = e.createContext({});
      u.displayName = 'ChatInputActionContext';
      function c() {
        return (0, e.useContext)(u);
      }
      const m = e.createContext(null);
      m.displayName = 'ChatInputMentionsContext';
      const _ = e.memo((i) =>
        e.createElement(m.Provider, { value: (0, o.coD)(h({}, i)) }, i.children)
      );
      _.displayName = 'ChatInputMentionsContextProvider';
      function E() {
        var i, l;
        const d = (0, e.useContext)(m);
        return {
          users: (i = d == null ? void 0 : d.users) != null ? i : [],
          panels: (l = d == null ? void 0 : d.panels) != null ? l : [],
          placeholder: d == null ? void 0 : d.placeholder,
          disabled: d == null ? void 0 : d.disabled,
        };
      }
    },
    16365: (B, P, t) => {
      t.d(P, { H: () => r });
      var e = t(52983),
        o = t(26288);
      const a = e.memo((n) => {
        const s = (0, e.useRef)(null),
          f = (0, o.nWw)((u) => {
            const { onIntersection: c, onUnIntersection: m } = n;
            u.forEach((_) => {
              const { intersectionRatio: E } = _;
              E > 0 ? c && c(_.target) : m && m(_.target);
            });
          }),
          h = (0, o.nWw)(() => {
            n.onIntersectionUnmount && n.onIntersectionUnmount();
          });
        return (
          (0, e.useEffect)(() => {
            if (!s.current) return;
            const u = n.root ? document.querySelector(n.root) : null,
              c = new IntersectionObserver(f, {
                root: u,
                rootMargin: n.rootMargin,
                threshold: n.threshold,
              });
            return (
              c.observe(s.current),
              () => {
                c.disconnect(), h();
              }
            );
          }, []),
          e.createElement('div', { ref: s }, n.children)
        );
      });
      a.displayName = 'Intersection';
      const r = e.memo((n) => {
        const { updateConverseAck: s } = (0, o.hoD)(n.converseId),
          f = (0, o.zX9)(() => {
            s(n.messageId);
          });
        return e.createElement(a, { onIntersection: f }, n.children);
      });
      r.displayName = 'MessageAckContainer';
    },
    89925: (B, P, t) => {
      t.d(P, { a: () => e.a3 });
      var e = t(93540);
    },
    15138: (B, P, t) => {
      t.d(P, { c: () => o });
      var e = t(72630);
      const o = e;
    },
    3139: (B, P, t) => {
      t.d(P, { d: () => c, _: () => m });
      var e = t(52983),
        o = t(26288),
        a = t(15138),
        r = t(62394),
        n = t(22183),
        s = t(30387);
      const f = t.p + 'assets/twitter.f37b283.png',
        h = e.memo((_) => {
          const { isDarkMode: E } = (0, o.tv4)(),
            { language: i } = (0, o.ZKp)(),
            l = (0, e.useCallback)(
              (d) => {
                const N = d.shortcodes;
                (0, o.YQu)(N) && _.onSelect(N);
              },
              [_.onSelect]
            );
          return e.createElement(
            'div',
            { className: 'emoji-picker' },
            e.createElement(r.Z, {
              set: 'twitter',
              data: a.c,
              theme: E ? 'dark' : 'light',
              i18n: i === 'zh-CN' ? n : s,
              previewPosition: 'none',
              skinTonePosition: 'none',
              onEmojiSelect: l,
              getSpritesheetURL: () => f,
            })
          );
        });
      h.displayName = 'EmojiPicker';
      var u = t(22705);
      (0, u.S1)({ set: 'twitter', data: a.c });
      const c = e.memo((_) => {
        const E = _.emoji.startsWith(':') ? _.emoji : `:${_.emoji}:`;
        return (0, e.useMemo)(() => {
          var i, l;
          let d = '',
            N = 0;
          const K = E.match(u.WV.SHORTCODES_REGEX);
          K && ((d = K[1]), K[2] && (N = Number(K[2])));
          const C = u.WV.get(d);
          if (!C) return e.createElement('span', null);
          const I = C.skins[N - 1] || C.skins[0];
          return e.createElement(
            'span',
            {
              className: 'emoji-mart-emoji align-middle',
              'data-emoji-set': 'twitter',
            },
            e.createElement('span', {
              style: {
                display: 'block',
                width: (i = _.size) != null ? i : '16px',
                height: (l = _.size) != null ? l : '16px',
                backgroundImage: `url(${f})`,
                backgroundSize: `${100 * u.Vw.sheet.cols}% ${
                  100 * u.Vw.sheet.rows
                }%`,
                backgroundPosition: `${(100 / (u.Vw.sheet.cols - 1)) * I.x}% ${
                  (100 / (u.Vw.sheet.rows - 1)) * I.y
                }%`,
              },
            })
          );
        }, [E]);
      });
      c.displayName = 'Emoji';
      const m = e.memo((_) => e.createElement(h, { onSelect: _.onSelect }));
      m.displayName = 'EmojiPanel';
    },
    21597: (B, P, t) => {
      t.d(P, { o: () => a });
      var e = t(52983),
        o = t(6739);
      const a = e.memo(({ error: r }) => {
        var n, s;
        return e.createElement(o.t, {
          text: String(
            (s = (n = r.message) != null ? n : r.name) != null ? s : r
          ),
        });
      });
      a.displayName = 'ErrorView';
    },
    7606: (B, P, t) => {
      t.d(P, { LP: () => I, jo: () => A, lj: () => L });
      var e = t(52983),
        o = t(76705),
        a = t.n(o),
        r = t(14698),
        n = t.n(r),
        s = t(58761),
        f = t(79546),
        h = t(26288),
        u = t(89925),
        c = t(84143),
        m = t(7013),
        _ = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        d = (O, p, x) =>
          p in O
            ? _(O, p, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: x,
              })
            : (O[p] = x),
        N = (O, p) => {
          for (var x in p || (p = {})) i.call(p, x) && d(O, x, p[x]);
          if (E) for (var x of E(p)) l.call(p, x) && d(O, x, p[x]);
          return O;
        };
      function K(O) {
        return a()(O) ? O : void 0;
      }
      const C = e.memo((O) => {
        var p, x;
        const [b, v] = (0, e.useState)(!1),
          [M, g] = (0, e.useState)((p = O.value) != null ? p : ''),
          T = K(O.value);
        (0, e.useEffect)(() => {
          var D;
          g((D = O.value) != null ? D : '');
        }, [O.value]);
        const y = (0, e.useCallback)(() => {
            v(!b);
          }, [b]),
          U = (0, e.useCallback)(() => {
            var D;
            (D = O.onSave) == null || D.call(O, M), v(!1);
          }, [O.onSave, M]),
          W = O.renderEditor;
        return e.createElement(
          'div',
          { className: 'flex w-full' },
          e.createElement(
            'div',
            { className: 'truncate' },
            b && !n()(W)
              ? e.createElement(W, { value: M, onChange: g })
              : e.createElement(
                  'span',
                  { className: 'select-text', title: T },
                  (x = O.content) != null ? x : O.value
                )
          ),
          e.createElement(
            'div',
            { className: 'ml-2' },
            b
              ? e.createElement(
                  s.Z,
                  null,
                  e.createElement(
                    u.a,
                    { title: (0, h.t)('\u53D6\u6D88') },
                    e.createElement(c.a, {
                      size: 'small',
                      icon: 'mdi:close',
                      onClick: y,
                    })
                  ),
                  e.createElement(
                    u.a,
                    { title: (0, h.t)('\u4FDD\u5B58\u53D8\u66F4') },
                    e.createElement(c.a, {
                      type: 'primary',
                      size: 'small',
                      icon: 'mdi:check',
                      onClick: U,
                    })
                  )
                )
              : e.createElement(
                  u.a,
                  { title: (0, h.t)('\u7F16\u8F91') },
                  e.createElement(c.a, {
                    size: 'small',
                    icon: 'mdi:square-edit-outline',
                    onClick: y,
                  })
                )
          )
        );
      });
      C.displayName = 'FullModalFieldEditor';
      const I = e.memo((O) => {
        var p;
        const x = K(O.value),
          b = O.editable === !0 && !n()(O.renderEditor);
        return e.createElement(
          'div',
          { className: 'mb-4' },
          e.createElement(
            'div',
            { className: 'text-xs text-gray-400 mb-2 flex items-center' },
            e.createElement('span', null, O.title),
            O.tip &&
              e.createElement(
                'span',
                { className: 'ml-1 text-sm' },
                e.createElement(m.a, { content: O.tip })
              )
          ),
          e.createElement(
            'div',
            { className: 'min-h-10 text-base truncate' },
            b === !0
              ? e.createElement(C, N({}, O))
              : e.createElement(
                  'span',
                  { className: 'select-text', title: x },
                  (p = O.content) != null ? p : O.value
                )
          )
        );
      });
      I.displayName = 'FullModalField';
      const A = ({ value: O, onChange: p }) =>
          e.createElement(f.Z, {
            value: O,
            onChange: (x) => p(x.target.value),
          }),
        L = ({ value: O, onChange: p }) =>
          e.createElement(f.Z.TextArea, {
            autoSize: { minRows: 2, maxRows: 6 },
            value: O,
            onChange: (x) => p(x.target.value),
          });
    },
    84143: (B, P, t) => {
      t.d(P, { a: () => K });
      var e = t(75526),
        o = t(95268),
        a = t(14517),
        r = t(52983),
        n = t(26288),
        s = t(93540),
        f = Object.defineProperty,
        h = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        E = (C, I, A) =>
          I in C
            ? f(C, I, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: A,
              })
            : (C[I] = A),
        i = (C, I) => {
          for (var A in I || (I = {})) m.call(I, A) && E(C, A, I[A]);
          if (c) for (var A of c(I)) _.call(I, A) && E(C, A, I[A]);
          return C;
        },
        l = (C, I) => h(C, u(I)),
        d = (C, I) => {
          var A = {};
          for (var L in C) m.call(C, L) && I.indexOf(L) < 0 && (A[L] = C[L]);
          if (C != null && c)
            for (var L of c(C))
              I.indexOf(L) < 0 && _.call(C, L) && (A[L] = C[L]);
          return A;
        };
      function N(C = 'circle') {
        return C === 'circle' ? 'circle' : 'default';
      }
      const K = r.memo((C) => {
        var I = C,
          { icon: A, iconClassName: L, title: O, className: p } = I,
          x = d(I, ['icon', 'iconClassName', 'title', 'className']);
        const b = N(x.shape),
          v = r.createElement(
            'span',
            { className: 'anticon' },
            r.createElement(s.JO, { className: L, icon: A })
          ),
          M = x.active
            ? 'bg-black bg-opacity-60'
            : 'bg-black bg-opacity-20 hover:bg-opacity-60',
          g = r.createElement(
            e.Z,
            l(
              i(
                {
                  className: (0, a.Z)(
                    'border-0 text-white text-opacity-80 hover:text-opacity-100',
                    x.danger
                      ? 'bg-red-600 bg-opacity-80 hover:bg-opacity-100'
                      : M,
                    p
                  ),
                },
                x
              ),
              { shape: b, icon: v }
            )
          );
        return (0, n.YQu)(O) && !x.disabled
          ? r.createElement(o.Z, { title: O }, g)
          : g;
      });
      K.displayName = 'IconBtn';
    },
    92951: (B, P, t) => {
      t.d(P, { C: () => b, w: () => x });
      var e = t(74774),
        o = t(14517),
        a = t(52983),
        r = t(26288),
        n = t(84208),
        s = t(93540),
        f = t(64650),
        h = t(14698),
        u = t.n(h),
        c = t(75526),
        m = (v, M, g) =>
          new Promise((T, y) => {
            var U = (R) => {
                try {
                  D(g.next(R));
                } catch (w) {
                  y(w);
                }
              },
              W = (R) => {
                try {
                  D(g.throw(R));
                } catch (w) {
                  y(w);
                }
              },
              D = (R) =>
                R.done ? T(R.value) : Promise.resolve(R.value).then(U, W);
            D((g = g.apply(v, M)).next());
          });
      const _ = a.memo((v) => {
        var M;
        const g = (M = v.aspect) != null ? M : 1,
          [T, y] = (0, a.useState)({ x: 0, y: 0 }),
          [U, W] = (0, a.useState)(1),
          [D, R] = (0, a.useState)({ width: 0, height: 0, x: 0, y: 0 }),
          w = () =>
            m(void 0, null, function* () {
              const S = yield d(yield E(v.imageUrl), D);
              v.onConfirm(S);
            });
        return a.createElement(
          n.AB,
          {
            className: 'flex flex-col',
            style: { width: '80vw', height: '80vh' },
          },
          a.createElement(
            'div',
            { className: 'flex-1 relative mb-4' },
            a.createElement(f.ZP, {
              image: v.imageUrl,
              crop: T,
              zoom: U,
              aspect: g,
              onCropChange: y,
              onZoomChange: W,
              onCropComplete: (S, j) => R(j),
            })
          ),
          a.createElement(
            c.Z,
            { type: 'primary', onClick: w },
            (0, r.t)('\u786E\u8BA4')
          )
        );
      });
      _.displayName = 'ImageCropperModal';
      function E(v) {
        return new Promise((M, g) => {
          const T = new Image();
          T.addEventListener('load', () => M(T)),
            T.addEventListener('error', (y) => g(y)),
            T.setAttribute('crossOrigin', 'anonymous'),
            (T.src = v);
        });
      }
      function i(v) {
        return (v * Math.PI) / 180;
      }
      let l = null;
      function d(v, M, g = 0, T = 'newFile.jpeg') {
        const y = document.createElement('canvas'),
          U = y.getContext('2d');
        if (!u()(U)) {
          const W = Math.max(v.width, v.height),
            D = 2 * ((W / 2) * Math.sqrt(2));
          (y.width = D),
            (y.height = D),
            U.translate(D / 2, D / 2),
            U.rotate(i(g)),
            U.translate(-D / 2, -D / 2),
            U.drawImage(v, D / 2 - v.width * 0.5, D / 2 - v.height * 0.5);
          const R = U.getImageData(0, 0, D, D);
          (y.width = M.width),
            (y.height = M.height),
            U.putImageData(
              R,
              Math.round(0 - D / 2 + v.width * 0.5 - M.x),
              Math.round(0 - D / 2 + v.height * 0.5 - M.y)
            );
        }
        return new Promise((W) => {
          try {
            y.toBlob((D) => {
              if (!D) {
                console.error('Canvas is empty');
                return;
              }
              (D.name = T),
                typeof l == 'string' && window.URL.revokeObjectURL(l),
                (l = window.URL.createObjectURL(D)),
                W(l);
            }, 'image/jpeg');
          } catch (D) {
            console.error(D),
              (0, r.lHp)(
                '\u65E0\u6CD5\u6B63\u786E\u751F\u6210\u56FE\u7247, \u53EF\u80FD\u662F\u56E0\u4E3A\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u65E7',
                'error'
              );
          }
        });
      }
      const N = a.memo((v) => {
        const M = (0, a.useRef)(null),
          g = (y) => {
            typeof v.onChange == 'function' && v.onChange(y);
          },
          T = (0, r.zX9)((y) => {
            if (y.target.files && y.target.files.length > 0) {
              const U = y.target.files[0];
              if (!U) return;
              if ((0, e.DQ)(U)) g(URL.createObjectURL(U));
              else {
                const W = new FileReader();
                W.addEventListener('load', () => {
                  if (W.result) {
                    const D = (0, n.h7)(
                      a.createElement(_, {
                        imageUrl: W.result.toString(),
                        aspect: v.aspect,
                        onConfirm: (R) => {
                          (0, n.Mr)(D), g(R);
                        },
                      }),
                      { maskClosable: !1, closable: !0 }
                    );
                  } else
                    (0, r.lHp)(
                      (0, r.t)('\u6587\u4EF6\u8BFB\u53D6\u5931\u8D25'),
                      'error'
                    );
                }),
                  W.readAsDataURL(U);
              }
              (y.target.files = null), (y.target.value = '');
            }
          });
        return a.createElement(
          'div',
          { className: v.className },
          a.createElement(
            'div',
            {
              className: 'cursor-pointer inline-block relative',
              onClick: () => {
                var y;
                return (
                  !v.disabled && ((y = M.current) == null ? void 0 : y.click())
                );
              },
            },
            a.createElement('input', {
              ref: M,
              type: 'file',
              className: 'hidden',
              onChange: T,
              accept: 'image/*',
            }),
            a.createElement(
              'div',
              { className: (0, o.Z)('group', v.className) },
              v.children,
              a.createElement(
                'div',
                {
                  className:
                    'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition opacity-0 group-hover:opacity-100',
                },
                a.createElement(s.JO, {
                  className: 'text-white opacity-80 text-4xl',
                  icon: 'mdi:camera-outline',
                })
              )
            )
          )
        );
      });
      N.displayName = 'ImagePicker';
      var K = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        I = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        L = (v, M, g) =>
          M in v
            ? K(v, M, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: g,
              })
            : (v[M] = g),
        O = (v, M) => {
          for (var g in M || (M = {})) I.call(M, g) && L(v, g, M[g]);
          if (C) for (var g of C(M)) A.call(M, g) && L(v, g, M[g]);
          return v;
        },
        p = (v, M, g) =>
          new Promise((T, y) => {
            var U = (R) => {
                try {
                  D(g.next(R));
                } catch (w) {
                  y(w);
                }
              },
              W = (R) => {
                try {
                  D(g.throw(R));
                } catch (w) {
                  y(w);
                }
              },
              D = (R) =>
                R.done ? T(R.value) : Promise.resolve(R.value).then(U, W);
            D((g = g.apply(v, M)).next());
          });
      const x = a.memo((v) => {
        var M;
        const g = (M = v.aspect) != null ? M : 1,
          [T, y] = (0, a.useState)(0),
          [{ loading: U }, W] = (0, r.CoE)(
            (D) =>
              p(void 0, null, function* () {
                const R = yield (0, e.NV)(D),
                  w = yield (0, r.cTq)(R, {
                    usage: v.usage,
                    onProgress(S) {
                      const j = Number((S * 100).toFixed());
                      console.log(`\u8FDB\u5EA6:${j}`), y(j);
                    },
                  });
                console.log('\u4E0A\u4F20\u6210\u529F', w),
                  v.onUploadSuccess(w);
              }),
            []
          );
        return a.createElement(
          N,
          {
            className: (0, o.Z)(v.className, 'relative overflow-hidden', {
              'rounded-full': v.circle,
            }),
            aspect: g,
            disabled: U,
            onChange: W,
          },
          U &&
            a.createElement('div', {
              className: 'absolute bottom-0 left-0 h-1',
              style: { width: `${T}%` },
            }),
          v.children
        );
      });
      x.displayName = 'ImageUploader';
      const b = a.memo((v) =>
        a.createElement(x, O({ aspect: 1, circle: !0 }, v))
      );
      b.displayName = 'AvatarUploader';
    },
    36932: (B, P, t) => {
      t.d(P, { t: () => _ });
      var e = t(52983),
        o = t(18300),
        a = Object.defineProperty,
        r = Object.defineProperties,
        n = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        u = (E, i, l) =>
          i in E
            ? a(E, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (E[i] = l),
        c = (E, i) => {
          for (var l in i || (i = {})) f.call(i, l) && u(E, l, i[l]);
          if (s) for (var l of s(i)) h.call(i, l) && u(E, l, i[l]);
          return E;
        },
        m = (E, i) => r(E, n(i));
      const _ = e.memo((E) => {
        const i = (0, e.useRef)(!1),
          l = (0, e.useMemo)(
            () =>
              i.current === !0
                ? !1
                : (E.spinning === !0 && (i.current = !0), E.spinning),
            [E.spinning]
          );
        return e.createElement(o.g, m(c({}, E), { spinning: l }), E.children);
      });
      _.displayName = 'LoadingOnFirst';
    },
    15333: (B, P, t) => {
      t.d(P, { J: () => r });
      var e = t(52983),
        o = t(65097),
        a = t(26288);
      const r = e.memo((n) => {
        var s;
        return e.createElement(o.Z, {
          description:
            (s = n.message) != null ? s : (0, a.t)('\u6CA1\u6709\u6570\u636E'),
        });
      });
      r.displayName = 'NoData';
    },
    64939: (B, P, t) => {
      t.d(P, { T: () => r });
      var e = t(52983),
        o = t(65097),
        a = t(26288);
      const r = e.memo((n) => {
        var s;
        return e.createElement(o.Z, {
          description:
            (s = n.message) != null
              ? s
              : (0, a.t)('\u672A\u627E\u5230\u5185\u5BB9'),
        });
      });
      r.displayName = 'NotFound';
    },
    87179: (B, P, t) => {
      t.d(P, { x: () => n });
      var e = t(58312),
        o = t(75526),
        a = t(52983),
        r = t(26288);
      const n = a.memo((s) =>
        a.createElement(e.ZP, {
          className: 'w-full',
          title: (0, r.t)(
            '\u5F53\u524D\u9762\u677F\u5DF2\u5728\u72EC\u7ACB\u7A97\u53E3\u6253\u5F00'
          ),
          extra: a.createElement(
            o.Z,
            { onClick: s.onClosePanelWindow },
            (0, r.t)('\u5173\u95ED\u72EC\u7ACB\u7A97\u53E3')
          ),
        })
      );
      n.displayName = 'OpenedPanelTip';
    },
    712: (B, P, t) => {
      t.d(P, { S: () => h });
      var e = t(52983),
        o = t(1348),
        a = t(58761);
      const r = e.memo((u) =>
        e.createElement(
          o.M,
          null,
          e.createElement(
            'div',
            { className: 'flex flex-wrap text-xl justify-between' },
            e.createElement(
              'div',
              { className: 'flex items-center' },
              e.createElement(
                'div',
                { className: 'text-gray-500 mr-1' },
                u.prefix
              ),
              e.createElement('div', { className: 'text-base' }, u.children),
              e.createElement('div', { className: 'ml-2' }, u.suffix)
            ),
            e.createElement(a.Z, null, u.actions)
          )
        )
      );
      r.displayName = 'PanelCommonHeader';
      var n = t(14517),
        s = t(89935),
        f = t(84143);
      const h = e.memo((u) => {
        const [c, m] = (0, e.useState)(),
          _ = (0, s.d)();
        return e.createElement(
          'div',
          {
            className: 'w-full h-full flex',
            style: { minWidth: _ && !c ? 'calc(100vw - 72px)' : 0 },
          },
          e.createElement(
            'div',
            { className: 'flex flex-col overflow-hidden flex-1' },
            e.createElement(
              r,
              { actions: u.actions && u.actions({ setRightPanel: m }) },
              u.header
            ),
            e.createElement(
              'div',
              { className: 'flex-1 overflow-hidden' },
              u.children
            )
          ),
          e.createElement(
            'div',
            {
              className: (0, n.Z)(
                'transition-all overflow-hidden border-l border-black border-opacity-20 flex flex-col',
                { 'w-96 mobile:w-full': c, 'w-0': !c }
              ),
            },
            e.createElement(
              r,
              {
                actions: [
                  e.createElement(f.a, {
                    key: 'close',
                    shape: 'square',
                    icon: 'mdi:close',
                    iconClassName: 'text-2xl',
                    onClick: () => m(void 0),
                  }),
                ],
              },
              c == null ? void 0 : c.name
            ),
            e.createElement(
              'div',
              { className: 'flex-1 overflow-y-auto' },
              c == null ? void 0 : c.panel
            )
          )
        );
      });
      h.displayName = 'CommonPanelWrapper';
    },
    29188: (B, P, t) => {
      t.d(P, { q: () => u });
      var e = t(84143),
        o = t(52983),
        a = t(26288),
        r = t(712),
        n = t(14698),
        s = t.n(n),
        f = t(60402),
        h = t(87179);
      const u = o.memo((c) => {
        const { groupId: m, panelId: _ } = c,
          E = (0, a.wY6)(m, _),
          {
            hasOpenedPanel: i,
            openPanelWindow: l,
            closePanelWindow: d,
          } = (0, f.l)(`/panel/group/${m}/${_}`);
        return s()(E)
          ? null
          : i
          ? o.createElement(h.x, { onClosePanelWindow: d })
          : o.createElement(
              r.S,
              {
                header: E.name,
                actions: (N) => {
                  var K, C, I, A;
                  return [
                    ...((C =
                      (K = c.prefixActions) == null ? void 0 : K.call(c, N)) !=
                    null
                      ? C
                      : []),
                    o.createElement(e.a, {
                      key: 'open',
                      title: (0, a.t)('\u5728\u65B0\u7A97\u53E3\u6253\u5F00'),
                      shape: 'square',
                      icon: 'mdi:dock-window',
                      iconClassName: 'text-2xl',
                      onClick: l,
                    }),
                    ...((A =
                      (I = c.suffixActions) == null ? void 0 : I.call(c, N)) !=
                    null
                      ? A
                      : []),
                  ];
                },
              },
              c.children
            );
      });
      u.displayName = 'GroupPanelWithHeader';
    },
    83667: (B, P, t) => {
      t.d(P, { N: () => E, c: () => i });
      var e = t(2496),
        o = t(52983),
        a = t(14517),
        r = Object.defineProperty,
        n = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        c = (l, d, N) =>
          d in l
            ? r(l, d, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: N,
              })
            : (l[d] = N),
        m = (l, d) => {
          for (var N in d || (d = {})) h.call(d, N) && c(l, N, d[N]);
          if (f) for (var N of f(d)) u.call(d, N) && c(l, N, d[N]);
          return l;
        },
        _ = (l, d) => n(l, s(d));
      const E = o.memo((l) =>
        o.createElement(
          e.Z,
          _(m({}, l), {
            className: (0, a.Z)(l.className, 'pill-tabs'),
            type: 'card',
            animated: !1,
          }),
          l.children
        )
      );
      E.displayName = 'PillTabs';
      const i = e.Z.TabPane;
    },
    1348: (B, P, t) => {
      t.d(P, { M: () => n });
      var e = t(52983),
        o = t(96136),
        a = t(93540),
        r = t(14517);
      const n = e.memo((s) => {
        const [f, h] = (0, e.useState)(!1);
        return e.createElement(
          'div',
          {
            className:
              'h-12 relative flex items-center py-0 text-base font-bold flex-shrink-0 thin-line-bottom',
          },
          s.menu
            ? e.createElement(
                o.Z,
                {
                  className: 'overflow-hidden',
                  onOpenChange: h,
                  menu: s.menu,
                  placement: 'bottomRight',
                  trigger: ['click'],
                },
                e.createElement(
                  'div',
                  {
                    className: 'cursor-pointer flex flex-1',
                    'data-testid': s['data-testid'],
                  },
                  e.createElement(
                    'header',
                    { className: 'flex-1 truncate px-4' },
                    s.children
                  ),
                  e.createElement(
                    a.JO,
                    {
                      className: (0, r.Z)(
                        'text-2xl transition-transform transform',
                        { 'rotate-180': f }
                      ),
                      icon: 'mdi:chevron-down',
                    },
                    '\uE60F'
                  )
                )
              )
            : e.createElement(
                'header',
                {
                  className: 'flex-1 truncate px-4 select-text',
                  'data-testid': s['data-testid'],
                },
                s.children
              )
        );
      });
      n.displayName = 'SectionHeader';
    },
    3856: (B, P, t) => {
      t.d(P, { u: () => u });
      var e = t(52983),
        o = t(13546),
        a = t.n(o),
        r = t(26288),
        n = t(14517);
      const s = (c) =>
          e.createElement(
            'div',
            {
              className: (0, n.Z)(
                'rounded-sm px-1.5 py-2.5 mb-1 text-gray-700 dark:text-gray-300 cursor-pointer  hover:bg-black hover:bg-opacity-10 hover:text-gray-800 dark:hover:text-gray-200',
                {
                  'bg-black bg-opacity-10 text-gray-900 dark:text-white':
                    c.active,
                  'text-red-500': c.isDanger,
                }
              ),
              style: { width: 192, lineHeight: '20px' },
              onClick: c.onClick,
            },
            c.children
          ),
        f = e.createContext(null);
      f.displayName = 'SidebarViewContext';
      const h = e.memo((c) => {
        const { menu: m } = c,
          _ = (0, e.useContext)(f);
        if (!_) return null;
        const { content: E, setContent: i } = _;
        if (m.type === 'group')
          return e.createElement(
            'div',
            { className: 'pb-2.5 mb-2.5 border-b last:border-0' },
            e.createElement(
              'div',
              { className: 'px-1.5 py-2.5 pt-0 text-xs font-bold uppercase' },
              m.title
            ),
            e.createElement(
              'div',
              null,
              m.children.map((l, d) => e.createElement(h, { key: d, menu: l }))
            )
          );
        if (m.type === 'item') {
          if (m.hidden === !0) return null;
          const l = e.createElement(
            s,
            { active: E === m.content, onClick: () => i(m.content) },
            m.title
          );
          return m.isDev === !0
            ? e.createElement(r.AKk, null, l)
            : e.createElement('div', null, l);
        } else if (m.type === 'link')
          return e.createElement(
            'div',
            null,
            e.createElement(
              s,
              { isDanger: m.isDanger, onClick: m.onClick },
              m.title
            )
          );
        return null;
      });
      h.displayName = 'SidebarViewMenuItem';
      const u = e.memo((c) => {
        const { menu: m, defaultContentPath: _ = '0.children.0.content' } = c,
          [E, i] = (0, e.useState)(a()(m, _, null));
        return e.createElement(
          f.Provider,
          { value: { content: E, setContent: i } },
          e.createElement(
            'div',
            {
              className:
                'flex w-full h-full mobile:flex-col mobile:overflow-auto',
            },
            e.createElement(
              'div',
              {
                className:
                  'bg-black bg-opacity-10 flex flex-col justify-start items-end py-20 px-2.5 mobile:items-start mobile:py-10 text-sm',
                style: { flex: '1 0 218px' },
              },
              m.map((l, d) => e.createElement(h, { key: d, menu: l }))
            ),
            e.createElement(
              'div',
              {
                className:
                  'pt-24 pb-20 px-10 mobile:pt-10 mobile:px-2 desktop:overflow-auto',
                style: { flex: '1 1 800px' },
              },
              E
            )
          )
        );
      });
      u.displayName = 'SidebarView';
    },
    7013: (B, P, t) => {
      t.d(P, { a: () => r });
      var e = t(52983),
        o = t(93540),
        a = t(89925);
      const r = e.memo(({ content: n }) =>
        e.createElement(
          a.a,
          { overlay: n },
          e.createElement(o.JO, {
            icon: 'mdi:alert-circle-outline',
            className: 'cursor-help',
          })
        )
      );
      r.displayName = 'TipIcon';
    },
    9021: (B, P, t) => {
      t.d(P, { Q: () => c });
      var e = t(52983),
        o = t(93540),
        a = t(29787),
        r = t.n(a),
        n = t(55696),
        s = t(40013),
        f = t(58761),
        h = t(26288),
        u = t(66559);
      const c = e.memo((m) => {
        const { actions: _ = [], hideDiscriminator: E = !1 } = m,
          i = (0, h.xzJ)(m.userId),
          [l] = (0, h.aoI)([m.userId]),
          d = i.nickname;
        return e.createElement(
          'div',
          {
            className:
              'flex items-center h-14 px-2.5 rounded group bg-black bg-opacity-0 hover:bg-opacity-20 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-20',
          },
          e.createElement(
            n.Z,
            { loading: r()(i), avatar: !0, title: !1, active: !0 },
            e.createElement(
              'div',
              { className: 'mr-2' },
              m.popover
                ? e.createElement(
                    s.Z,
                    { content: m.popover, placement: 'left', trigger: 'click' },
                    e.createElement(o.qE, {
                      className: 'cursor-pointer',
                      src: i.avatar,
                      name: d,
                      isOnline: l,
                    })
                  )
                : e.createElement(o.qE, { src: i.avatar, name: d, isOnline: l })
            ),
            e.createElement(
              'div',
              { className: 'flex-1 text-gray-900 dark:text-white' },
              e.createElement(u.v, { userId: m.userId, showDiscriminator: !E })
            ),
            e.createElement(f.Z, null, _)
          )
        );
      });
      c.displayName = 'UserListItem';
    },
    66559: (B, P, t) => {
      t.d(P, { V: () => a, v: () => r });
      var e = t(52983),
        o = t(26288);
      const a = e.memo((s) => {
        var f;
        const {
            userId: h,
            showDiscriminator: u,
            className: c,
            style: m,
            fallbackName: _,
          } = s,
          E = (0, o.xzJ)(h);
        return e.createElement(
          'span',
          { className: c, style: m },
          (f = E.nickname) != null
            ? f
            : (0, o.YQu)(_)
            ? _
            : e.createElement('span', null, '\xA0'),
          u && e.createElement(n, { discriminator: E.discriminator })
        );
      });
      a.displayName = 'UserNamePure';
      const r = e.memo((s) => {
        var f;
        const {
            userId: h,
            showDiscriminator: u,
            className: c,
            style: m,
            fallbackName: _,
          } = s,
          E = (0, o.xzJ)(h),
          i = (0, o.TQq)(h);
        return e.createElement(
          'span',
          { className: c, style: m },
          i
            ? e.createElement(
                e.Fragment,
                null,
                i,
                e.createElement(
                  'span',
                  { className: 'opacity-60' },
                  '(',
                  E.nickname,
                  ')'
                )
              )
            : (f = E.nickname) != null
            ? f
            : (0, o.YQu)(_)
            ? _
            : e.createElement('span', null, '\xA0'),
          u && e.createElement(n, { discriminator: E.discriminator })
        );
      });
      r.displayName = 'UserName';
      const n = e.memo(({ discriminator: s }) =>
        e.createElement(
          'span',
          {
            className:
              'text-gray-500 dark:text-gray-300 opacity-0 group-hover:opacity-100',
          },
          '#',
          s
        )
      );
      n.displayName = 'UserNameDiscriminator';
    },
    60402: (B, P, t) => {
      t.d(P, { l: () => r });
      var e = t(42052),
        o = t(52983),
        a = t(26288);
      function r(n) {
        const s = (0, a.CGy)(
            (c) => c.ui.panelWinUrls.includes(n) && e.aR.has(n)
          ),
          f = (0, a.TL5)(),
          h = (0, o.useCallback)(() => {
            e.aR.open(n, {
              onClose() {
                f(a.AwB.deletePanelWindowUrl({ url: n }));
              },
            }),
              f(a.AwB.addPanelWindowUrl({ url: n }));
          }, [n]),
          u = (0, o.useCallback)(() => {
            e.aR.close(n), f(a.AwB.deletePanelWindowUrl({ url: n }));
          }, [n]);
        return { hasOpenedPanel: s, openPanelWindow: h, closePanelWindow: u };
      }
    },
  },
]);
