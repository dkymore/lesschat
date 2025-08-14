(() => {
  var Ur = {
      93540: (A, N, r) => {
        'use strict';
        r.d(N, {
          wb: () => f,
          qE: () => Fe,
          OI: () => re,
          EW: () => zt,
          v$: () => xe,
          a3: () => yt,
          y$: () => ht,
          JO: () => It,
          Ee: () => Ae,
          PJ: () => hn,
          Po: () => Wt,
          _D: () => Ne.createFastifyFormSchema,
          Yy: () => Y,
          _6: () => Ne.fieldSchema,
          Yk: () => Qe,
          YE: () => Rn,
          aG: () => Ne.useFastifyFormContext,
        });
        var u = r(52983),
          y = r(80686);
        const f = u.memo((d) => {
          const { showFullText: g = 'More', backgroundColor: p = 'white' } = d,
            [b, q] = (0, u.useState)(!1),
            [_, $] = (0, u.useState)(!1),
            se = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            if (!se.current) return;
            const mt = new window.ResizeObserver((ct) => {
              if (ct[0]) {
                const { height: Pt } = ct[0].contentRect;
                Pt > ce && ($(!1), q(!0), mt.disconnect());
              }
            });
            return (
              mt.observe(se.current),
              () => {
                mt.disconnect();
              }
            );
          }, []);
          const ce = (0, u.useMemo)(
              () => (_ ? 'none' : d.maxHeight),
              [_, d.maxHeight]
            ),
            ge = (0, y.Z)(() => {
              q(!1), $(!0);
            });
          return u.createElement(
            'div',
            {
              style: {
                maxHeight: ce,
                overflow: 'hidden',
                position: 'relative',
              },
            },
            u.createElement('div', { ref: se }, d.children),
            b &&
              u.createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0), ${p})`,
                    padding: '4px 0',
                  },
                  onClick: ge,
                },
                g
              )
          );
        });
        f.displayName = 'AutoFolder';
        var M = r(27037),
          v = r(68e3),
          D = r(95718),
          E = r.n(D),
          C = r(18445),
          T = r.n(C),
          K = r(14698),
          F = r.n(K),
          x = r(29787),
          j = r.n(x),
          O = r(3224),
          I = r.n(O),
          P = r(73352),
          S = r.n(P),
          w = r(76705),
          z = r.n(w),
          U = r(35880),
          L = r.n(U);
        const B = [
          '#333333',
          '#2c3e50',
          '#8e44ad',
          '#2980b9',
          '#27ae60',
          '#16a085',
          '#f39c12',
          '#d35400',
          '#c0392b',
          '#3498db',
          '#9b59b6',
          '#2ecc71',
          '#1abc9c',
          '#f1c40f',
          '#e74c3c',
          '#e67e22',
        ];
        function Y(d) {
          if (!d || !z()(d)) return '#ffffff';
          const g = L()(d);
          return B[g % B.length];
        }
        function Q(d) {
          return d * (1 / 16) + 'rem';
        }
        function ee(d) {
          return typeof d == 'string' && d !== '';
        }
        var h = r(81715),
          Ce = Object.defineProperty,
          De = Object.defineProperties,
          je = Object.getOwnPropertyDescriptors,
          ne = Object.getOwnPropertySymbols,
          we = Object.prototype.hasOwnProperty,
          dt = Object.prototype.propertyIsEnumerable,
          rt = (d, g, p) =>
            g in d
              ? Ce(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          ot = (d, g) => {
            for (var p in g || (g = {})) we.call(g, p) && rt(d, p, g[p]);
            if (ne) for (var p of ne(g)) dt.call(g, p) && rt(d, p, g[p]);
            return d;
          },
          st = (d, g) => De(d, je(g));
        let ve = (d) => d;
        const Ve =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==',
          Ae = u.memo((d) =>
            u.createElement(
              h.Z,
              st(ot({ fallback: Ve, preview: !1, loading: 'lazy' }, d), {
                src: d.src ? ve(d.src) : void 0,
              })
            )
          );
        Ae.displayName = 'Image';
        function Qe(d) {
          ve = d;
        }
        var ft = Object.defineProperty,
          Ze = Object.defineProperties,
          $e = Object.getOwnPropertyDescriptors,
          Ue = Object.getOwnPropertySymbols,
          Te = Object.prototype.hasOwnProperty,
          G = Object.prototype.propertyIsEnumerable,
          V = (d, g, p) =>
            g in d
              ? ft(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          X = (d, g) => {
            for (var p in g || (g = {})) Te.call(g, p) && V(d, p, g[p]);
            if (Ue) for (var p of Ue(g)) G.call(g, p) && V(d, p, g[p]);
            return d;
          },
          de = (d, g) => Ze(d, $e(g)),
          We = (d, g) => {
            var p = {};
            for (var b in d) Te.call(d, b) && g.indexOf(b) < 0 && (p[b] = d[b]);
            if (d != null && Ue)
              for (var b of Ue(d))
                g.indexOf(b) < 0 && G.call(d, b) && (p[b] = d[b]);
            return p;
          };
        const Ye = u.memo((d) => {
          const g = d,
            { isOnline: p } = g,
            b = We(g, ['isOnline']),
            q = ee(b.src) ? ve(b.src) : void 0,
            _ = (0, u.useMemo)(() => T()(E()(b.name)), [b.name]),
            $ = (0, u.useMemo)(
              () => (j()(q) && F()(b.icon) ? Y(b.name) : void 0),
              [q, b.icon, b.name]
            ),
            se = (0, u.useMemo)(() => {
              const ge = de(X({ userSelect: 'none' }, b.style), {
                backgroundColor: $,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              });
              return (
                I()(b.size) &&
                  (ge.width || (ge.width = Q(b.size)),
                  ge.height || (ge.height = Q(b.size)),
                  typeof ge.fontSize == 'undefined' &&
                    (ge.fontSize = Q(b.size * 0.4))),
                ge
              );
            }, [b.style, b.size, $]),
            ce = u.createElement(
              M.C,
              de(X({ draggable: !1 }, S()(b, ['size'])), { src: q, style: se }),
              _
            );
          if (typeof p == 'boolean') {
            const ge = { bottom: 0, top: 'auto' };
            return p === !0
              ? u.createElement(v.Z, { dot: !0, color: 'green', style: ge }, ce)
              : u.createElement(v.Z, { dot: !0, color: '#999', style: ge }, ce);
          }
          return ce;
        });
        Ye.displayName = 'Avatar';
        const Fe = Ye;
        Fe.Group = M.C.Group;
        var Se = Object.defineProperty,
          W = Object.getOwnPropertySymbols,
          Xe = Object.prototype.hasOwnProperty,
          Tt = Object.prototype.propertyIsEnumerable,
          Z = (d, g, p) =>
            g in d
              ? Se(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          oe = (d, g) => {
            for (var p in g || (g = {})) Xe.call(g, p) && Z(d, p, g[p]);
            if (W) for (var p of W(g)) Tt.call(g, p) && Z(d, p, g[p]);
            return d;
          };
        const re = u.memo((d) => {
          const [g, p] = (0, u.useState)(!1),
            b = ee(d.src);
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              'div',
              {
                style: { cursor: b ? 'pointer' : 'auto' },
                onClick: () => p(!g),
              },
              u.createElement(Fe, oe({}, d))
            ),
            b &&
              u.createElement(
                'div',
                { style: { display: 'none' } },
                u.createElement(Ae, {
                  preview: {
                    visible: g,
                    src: ve(String(d.src)),
                    onVisibleChange: (q) => {
                      p(q);
                    },
                  },
                })
              )
          );
        });
        re.displayName = 'AvatarWithPreview';
        var ze = r(75283);
        const xe = u.memo((d) => {
          var g;
          return u.createElement(
            ze.Z.Text,
            {
              className: d.className,
              style: d.style,
              copyable: (g = d.config) != null ? g : !0,
            },
            d.children
          );
        });
        xe.displayName = 'CopyableText';
        var _e = r(89022),
          Le = r.n(_e),
          Ie = Object.defineProperty,
          ae = Object.getOwnPropertySymbols,
          ye = Object.prototype.hasOwnProperty,
          $t = Object.prototype.propertyIsEnumerable,
          Dt = (d, g, p) =>
            g in d
              ? Ie(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          St = (d, g) => {
            for (var p in g || (g = {})) ye.call(g, p) && Dt(d, p, g[p]);
            if (ae) for (var p of ae(g)) $t.call(g, p) && Dt(d, p, g[p]);
            return d;
          };
        const zt = u.memo((d) => {
          const { size: g = 32, shape: p = 'circle' } = d,
            b = Le()(d.items, 4),
            q = b.length,
            _ = ($) => {
              if (q === 1) return {};
              if (q === 2) {
                if ($ === 0)
                  return {
                    width: '50%',
                    overflow: 'hidden',
                    position: 'absolute',
                    left: 0,
                  };
                if ($ === 1)
                  return {
                    width: '50%',
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0,
                  };
              }
              if (q === 3) {
                if ($ === 0)
                  return {
                    width: '50%',
                    overflow: 'hidden',
                    position: 'absolute',
                    left: 0,
                  };
                if ($ === 1)
                  return {
                    transform: 'scale(50%)',
                    transformOrigin: '100% 0 0',
                  };
                if ($ === 2)
                  return {
                    transform: 'scale(50%)',
                    transformOrigin: '100% 100% 0',
                  };
              }
              if (q === 4) {
                if ($ === 0)
                  return { transform: 'scale(50%)', transformOrigin: '0 0 0' };
                if ($ === 1)
                  return {
                    transform: 'scale(50%)',
                    transformOrigin: '100% 0 0',
                  };
                if ($ === 2)
                  return {
                    transform: 'scale(50%)',
                    transformOrigin: '0 100% 0',
                  };
                if ($ === 3)
                  return {
                    transform: 'scale(50%)',
                    transformOrigin: '100% 100% 0',
                  };
              }
              return {};
            };
          return u.createElement(
            'div',
            {
              className: `td-combined-avatar td-combined-avatar-${q}`,
              style: {
                width: Q(g),
                height: Q(g),
                borderRadius: p === 'circle' ? '50%' : 3,
              },
            },
            b.map(($, se) =>
              u.createElement(
                Fe,
                St(
                  {
                    key: se,
                    className: 'td-combined-avatar__item',
                    style: _(se),
                    size: g,
                  },
                  $
                )
              )
            ),
            b.length >= 2 && u.createElement('div', { className: 'line1' }),
            b.length >= 3 && u.createElement('div', { className: 'line2' })
          );
        });
        zt.displayName = 'CombinedAvatar';
        var At = r(95268),
          R = Object.defineProperty,
          xt = Object.getOwnPropertySymbols,
          Xt = Object.prototype.hasOwnProperty,
          _t = Object.prototype.propertyIsEnumerable,
          vt = (d, g, p) =>
            g in d
              ? R(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          Lt = (d, g) => {
            for (var p in g || (g = {})) Xt.call(g, p) && vt(d, p, g[p]);
            if (xt) for (var p of xt(g)) _t.call(g, p) && vt(d, p, g[p]);
            return d;
          };
        const yt = u.memo((d) =>
          u.createElement(At.Z, Lt({ mouseEnterDelay: 1 }, d), d.children)
        );
        yt.displayName = 'DelayTip';
        const at = {
            highLight:
              '_-packages-design-components-Highlight-index-module__highLight--esAq-',
          },
          ht = u.memo((d) =>
            u.createElement('span', { className: at.highLight }, d.children)
          );
        ht.displayName = 'Highlight';
        var Re = r(79555),
          qt = Object.defineProperty,
          te = Object.defineProperties,
          ie = Object.getOwnPropertyDescriptors,
          he = Object.getOwnPropertySymbols,
          en = Object.prototype.hasOwnProperty,
          Zn = Object.prototype.propertyIsEnumerable,
          yn = (d, g, p) =>
            g in d
              ? qt(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          wt = (d, g) => {
            for (var p in g || (g = {})) en.call(g, p) && yn(d, p, g[p]);
            if (he) for (var p of he(g)) Zn.call(g, p) && yn(d, p, g[p]);
            return d;
          },
          Jn = (d, g) => te(d, ie(g));
        const tn = { width: '1em', height: '1em' },
          fe = u.memo((d) => {
            const [g, p] = (0, u.useState)(!1);
            return u.createElement(
              u.Fragment,
              null,
              u.createElement(Re.JO, Jn(wt({}, d), { onLoad: () => p(!0) })),
              !g && u.createElement('span', { style: tn })
            );
          });
        fe.displayName = 'Icon';
        const It = fe;
        (It.addIcon = Re.Ug), (It.addCollection = Re.Hc);
        const hn = u.memo((d) => {
          const { className: g, text: p } = d,
            [b, q] = (0, u.useState)(!1);
          return u.createElement(
            'div',
            { className: g, style: { display: 'flex', alignItems: 'center' } },
            b ? p : kn(p),
            u.createElement(It, {
              style: { cursor: 'pointer', marginLeft: 4 },
              icon: b ? 'mdi:eye-off-outline' : 'mdi:eye-outline',
              onClick: () => q((_) => !_),
            })
          );
        });
        hn.displayName = 'SensitiveText';
        function kn(d) {
          const g = d.length;
          return g > 2 ? `${d[0]}****${d[g - 1]}` : g === 2 ? `${d[0]}*` : '**';
        }
        const nn = u.memo((d) => {
          const g = (0, u.useRef)(null),
            p = (0, y.Z)((b) => {
              d.onResize && d.onResize(b);
            });
          return (
            (0, u.useEffect)(() => {
              if (!g.current) return;
              const b = new ResizeObserver((q) => {
                q.forEach((_) => {
                  const { target: $, contentRect: se } = _;
                  !$.parentElement ||
                    p({
                      width: Math.round(se.width),
                      height: Math.round(se.height),
                    });
                });
              });
              return (
                b.observe(g.current),
                () => {
                  b && g.current && (b.unobserve(g.current), b.disconnect());
                }
              );
            }, []),
            u.createElement(
              'div',
              { style: d.wrapperStyle, ref: g },
              d.children
            )
          );
        });
        nn.displayName = 'ResizeWatcher';
        var En = r(7744),
          Dn = r(37459),
          Hn = r(14517),
          Vn = Object.defineProperty,
          An = Object.defineProperties,
          $n = Object.getOwnPropertyDescriptors,
          Nt = Object.getOwnPropertySymbols,
          Xn = Object.prototype.hasOwnProperty,
          In = Object.prototype.propertyIsEnumerable,
          Nn = (d, g, p) =>
            g in d
              ? Vn(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          Pn = (d, g) => {
            for (var p in g || (g = {})) Xn.call(g, p) && Nn(d, p, g[p]);
            if (Nt) for (var p of Nt(g)) In.call(g, p) && Nn(d, p, g[p]);
            return d;
          },
          rn = (d, g) => An(d, $n(g));
        const Ut = { x: 0, y: 0 },
          On = u.forwardRef((d, g) => {
            var p, b;
            const { scrollBehavior: q = 'auto' } = d,
              _ = (0, u.useRef)(null),
              $ = (0, u.useRef)(null),
              se = (0, u.useMemo)(() => {
                var Me;
                return ((Me = d.isLock) != null ? Me : !1)
                  ? rn(Pn({}, d.style), { overflow: 'hidden' })
                  : rn(Pn({}, d.style), { overflow: 'auto' });
              }, [d.isLock]),
              ce = (0, y.Z)(() =>
                _.current
                  ? { x: _.current.scrollLeft, y: _.current.scrollTop }
                  : Ut
              ),
              ge = (0, y.Z)(() =>
                _.current
                  ? { x: _.current.clientWidth, y: _.current.clientHeight }
                  : Ut
              );
            (0, u.useImperativeHandle)(g, () => ({
              scrollTo: (Me) => {
                var et;
                (et = _.current) == null ||
                  et.scrollTo({ left: Me.x, top: Me.y, behavior: q });
              },
              scrollToBottom: () => {
                var Me;
                (Me = _.current) == null ||
                  Me.scrollTo({
                    left: ce().x,
                    top: _.current.scrollHeight - ge().y,
                    behavior: q,
                  });
              },
            }));
            const [mt, ct] = (0, u.useState)(!1),
              [Pt, dn] = (0, u.useState)(!1),
              { run: cr } = (0, En.Z)(
                (Me) => {
                  ct(Me);
                },
                { leading: !1, trailing: !0, wait: 300 }
              ),
              { run: dr } = (0, En.Z)(
                () => {
                  ct(!1), d.onScrollEnd && d.onScrollEnd(ce());
                },
                { leading: !1, trailing: !0, wait: 300 }
              ),
              fr = (0, y.Z)(() => {
                ct(!0), cr(!1);
              }),
              gr = (0, y.Z)(() => {
                dn(!0);
              }),
              Mr = (0, y.Z)(() => {
                dn(!1);
              }),
              Bn = (p = (0, Dn.Z)(ce())) != null ? p : Ut,
              mr = (0, y.Z)(() => {
                const Me = mt || Pt,
                  et = ce(),
                  fn = { x: et.x > Bn.x, y: et.y > Bn.y };
                ct(!0),
                  dr(),
                  d.onScroll &&
                    d.onScroll(et, {
                      forward: fn,
                      isUserScrolling: Me,
                      isMouseDown: Pt,
                    });
              }),
              pr = (0, y.Z)(() => {
                d.onContainerResize &&
                  d.onContainerResize({ containerSize: ge(), position: ce() });
              });
            return u.createElement(
              nn,
              { wrapperStyle: { height: '100%' }, onResize: pr },
              u.createElement(
                'div',
                {
                  key: 'scroller',
                  className: (0, Hn.Z)(d.className, 'scroller', {
                    [(b = d.scrollingClassName) != null ? b : 'scrolling']: mt,
                  }),
                  style: se,
                  ref: _,
                  onWheel: fr,
                  onMouseDown: gr,
                  onMouseUp: Mr,
                  onScroll: mr,
                },
                u.createElement(
                  'div',
                  {
                    className: 'scroller-inner',
                    key: 'scroller-inner',
                    style: d.innerStyle,
                    ref: $,
                  },
                  d.children
                )
              )
            );
          });
        On.displayName = 'Scroller';
        var on = r(52486),
          _n = Object.defineProperty,
          Cn = Object.getOwnPropertySymbols,
          qn = Object.prototype.hasOwnProperty,
          er = Object.prototype.propertyIsEnumerable,
          ut = (d, g, p) =>
            g in d
              ? _n(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          Ft = (d, g) => {
            for (var p in g || (g = {})) qn.call(g, p) && ut(d, p, g[p]);
            if (Cn) for (var p of Cn(g)) er.call(g, p) && ut(d, p, g[p]);
            return d;
          };
        const tr = { overflow: 'hidden' },
          nr = { height: '100%' },
          rr = { height: '100%' },
          gt = (d) => {
            const g = (0, u.useRef)(null),
              p = (0, u.useMemo)(() => new Map(), []),
              b = (0, on.Z)(),
              q = (0, u.useMemo)(() => Ft(Ft({}, tr), d.style), [d.style]),
              _ = (0, u.useMemo)(
                () => Ft(Ft({}, nr), d.innerStyle),
                [d.innerStyle]
              );
            return (
              (0, u.useEffect)(() => {
                var $;
                ($ = g.current) == null || $.scrollToBottom();
              }, []),
              u.createElement(
                'div',
                { className: 'virtual-chat-list', style: q },
                u.createElement(
                  On,
                  { ref: g, style: rr, innerStyle: _ },
                  d.items.map(($, se) =>
                    u.createElement(
                      'div',
                      {
                        key: d.getItemKey ? d.getItemKey($) : se,
                        className: 'virtual-chat-list__item',
                        style: { height: p.get($) },
                      },
                      u.createElement(
                        nn,
                        {
                          onResize: (ce) => {
                            p.set($, ce.height), b();
                          },
                        },
                        d.itemContent($, se)
                      )
                    )
                  )
                )
              )
            );
          },
          jn = u.memo(gt);
        jn.displayName = 'VirtualChatList';
        var Ne = r(80768),
          Ge = r(579),
          or = r(75526),
          it = r(79546);
        function Rt(d) {
          return d === void 0 || d === '' ? '' : 'error';
        }
        const Bt = u.memo((d) => {
          const {
            name: g,
            label: p,
            value: b,
            onChange: q,
            onBlur: _,
            error: $,
            maxLength: se,
            placeholder: ce,
          } = d;
          return u.createElement(
            Ge.Z.Item,
            { label: p, validateStatus: Rt($), help: $ },
            u.createElement(it.Z, {
              name: g,
              size: 'large',
              maxLength: se,
              placeholder: ce,
              value: b,
              onChange: (ge) => q(ge.target.value),
              onBlur: _,
            })
          );
        });
        Bt.displayName = 'FastifyFormText';
        const qe = u.memo((d) => {
          const {
            name: g,
            label: p,
            value: b,
            onChange: q,
            onBlur: _,
            error: $,
            maxLength: se,
            placeholder: ce,
          } = d;
          return u.createElement(
            Ge.Z.Item,
            { label: p, validateStatus: Rt($), help: $ },
            u.createElement(it.Z.TextArea, {
              name: g,
              rows: 4,
              maxLength: se,
              placeholder: ce,
              value: b,
              onChange: (ge) => q(ge.target.value),
              onBlur: _,
            })
          );
        });
        qe.displayName = 'FastifyFormTextArea';
        const lt = u.memo((d) => {
          const {
            name: g,
            label: p,
            value: b,
            onChange: q,
            onBlur: _,
            error: $,
            maxLength: se,
            placeholder: ce,
          } = d;
          return u.createElement(
            Ge.Z.Item,
            { label: p, validateStatus: Rt($), help: $ },
            u.createElement(it.Z.Password, {
              name: g,
              type: 'password',
              size: 'large',
              maxLength: se,
              placeholder: ce,
              value: b,
              onChange: (ge) => q(ge.target.value),
              onBlur: _,
            })
          );
        });
        lt.displayName = 'FastifyFormPassword';
        var sn = r(73246),
          Tn = r(13546),
          Sn = r.n(Tn);
        const an = sn.Z.Option,
          sr = u.memo((d) => {
            const {
              name: g,
              label: p,
              value: b,
              onChange: q,
              onBlur: _,
              options: $,
            } = d;
            return (
              (0, u.useEffect)(() => {
                (F()(b) || b === '') && q(Sn()($, [0, 'value']));
              }, []),
              u.createElement(
                Ge.Z.Item,
                { label: p },
                u.createElement(
                  sn.Z,
                  {
                    size: 'large',
                    value: b,
                    onChange: (se) => q(se),
                    onBlur: _,
                  },
                  $.map((se, ce) =>
                    u.createElement(
                      an,
                      { key: `${se.value}${ce}`, value: se.value },
                      se.label
                    )
                  )
                )
              )
            );
          });
        sr.displayName = 'FastifyFormSelect';
        var ar = r(66990);
        const zn = u.memo((d) => {
          const { name: g, label: p, value: b, onChange: q, error: _ } = d;
          return u.createElement(
            Ge.Z.Item,
            { label: p, validateStatus: Rt(_), help: _ },
            u.createElement(
              ar.Z,
              {
                name: g,
                checked: Boolean(b),
                onChange: ($) => q($.target.checked),
              },
              p
            )
          );
        });
        zn.displayName = 'FastifyFormCheckbox';
        var xn = Object.defineProperty,
          Mt = Object.getOwnPropertySymbols,
          ur = Object.prototype.hasOwnProperty,
          ir = Object.prototype.propertyIsEnumerable,
          Ln = (d, g, p) =>
            g in d
              ? xn(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          wn = (d, g) => {
            for (var p in g || (g = {})) ur.call(g, p) && Ln(d, p, g[p]);
            if (Mt) for (var p of Mt(g)) ir.call(g, p) && Ln(d, p, g[p]);
            return d;
          };
        const Un = u.memo((d) => {
          const { label: g } = d;
          return u.createElement(
            Ge.Z.Item,
            { label: g },
            u.createElement(Ne.CustomField, wn({}, d))
          );
        });
        Un.displayName = 'FastifyFormCustom';
        var lr = Object.defineProperty,
          un = Object.getOwnPropertySymbols,
          ln = Object.prototype.hasOwnProperty,
          cn = Object.prototype.propertyIsEnumerable,
          le = (d, g, p) =>
            g in d
              ? lr(d, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (d[g] = p),
          Fn = (d, g) => {
            for (var p in g || (g = {})) ln.call(g, p) && le(d, p, g[p]);
            if (un) for (var p of un(g)) cn.call(g, p) && le(d, p, g[p]);
            return d;
          };
        (0, Ne.regField)('text', Bt),
          (0, Ne.regField)('textarea', qe),
          (0, Ne.regField)('password', lt),
          (0, Ne.regField)('select', sr),
          (0, Ne.regField)('checkbox', zn),
          (0, Ne.regField)('custom', Un);
        let bt = { submitLabel: 'Submit' };
        function Rn(d) {
          bt = Fn(Fn({}, bt), d);
        }
        const Qt = u.memo((d) => {
          var g;
          const p = d.layout,
            b = (g = d.extraProps) == null ? void 0 : g.suffixElement,
            q = (0, u.useMemo)(() => {
              var _;
              return u.createElement(
                Ge.Z.Item,
                {
                  wrapperCol:
                    p === 'vertical'
                      ? { xs: 24 }
                      : { sm: 24, md: { span: 16, offset: 8 } },
                },
                u.createElement(
                  or.Z,
                  {
                    loading: d.loading,
                    type: 'primary',
                    size: 'large',
                    htmlType: 'button',
                    style: { width: '100%' },
                    onClick: () => d.handleSubmit(),
                    disabled: d.canSubmit === !1,
                  },
                  (_ = d.submitLabel) != null ? _ : bt.submitLabel
                )
              );
            }, [d.loading, d.handleSubmit, d.canSubmit, d.submitLabel, p]);
          return u.createElement(
            Ge.Z,
            {
              layout: p,
              labelCol: p === 'vertical' ? { xs: 24 } : { sm: 24, md: 8 },
              wrapperCol: p === 'vertical' ? { xs: 24 } : { sm: 24, md: 16 },
            },
            d.children,
            b,
            q
          );
        });
        (Qt.displayName = 'WebFastifyFormContainer'),
          (0, Ne.regFormContainer)(Qt);
        const Wt = Ne.FastifyForm;
        Wt.displayName = 'WebMetaForm';
      },
      26288: (A, N, r) => {
        'use strict';
        r.d(N, {
          eFs: () => el,
          gvw: () => Eo,
          $Ib: () => Go,
          QEo: () => go,
          AKk: () => mo,
          f4G: () => Ko,
          Xpe: () => Mt,
          NtG: () => Yo,
          g3S: () => me,
          m$Z: () => Kn.zt,
          q6$: () => $e,
          IE7: () => yo,
          cCv: () => Zo,
          NDn: () => us,
          vAN: () => as,
          rUo: () => Yr,
          m8p: () => Tn,
          FcZ: () => tl,
          GM2: () => ge,
          x9K: () => pa,
          Ntz: () => ne,
          _CB: () => ot,
          D3K: () => st,
          Kdd: () => I,
          J3N: () => ls,
          ONy: () => ue,
          YXr: () => ao,
          xuY: () => eo,
          L1i: () => sn,
          sSU: () => Rn,
          fiB: () => _,
          XAi: () => ct,
          Tzh: () => Ft,
          DW_: () => qr,
          fA3: () => Ou,
          u39: () => $i,
          L4o: () => mt,
          J9q: () => dn,
          $Zg: () => br,
          K_u: () => is,
          Y4U: () => Sr,
          DtN: () => _n,
          o9n: () => Xr,
          KJm: () => Ps,
          vMv: () => Ns,
          TcU: () => se,
          D6C: () => _s,
          r5V: () => Yn,
          ct2: () => qs,
          Mlq: () => ta,
          pGV: () => Wn,
          U$y: () => na,
          S8F: () => Oo,
          Q$5: () => Os,
          HiA: () => on,
          doy: () => Qt,
          r3q: () => bt,
          G33: () => Z,
          pZA: () => Lr,
          vIP: () => As,
          qQ$: () => ye,
          cF2: () => ve,
          hyC: () => pn,
          TGs: () => Xi,
          jUY: () => Xt,
          yGS: () => vt,
          yvY: () => Lt,
          VxZ: () => _i,
          YQu: () => pt,
          Mo8: () => Yi,
          YtP: () => Xe,
          fZz: () => kr,
          ouS: () => Hr,
          o4J: () => E,
          uRW: () => Wt,
          d89: () => Pt,
          jOv: () => oo,
          MjZ: () => $r,
          t4N: () => oe,
          Awg: () => bn,
          XV6: () => g,
          peM: () => Br,
          csP: () => ae,
          Kr1: () => li,
          YiW: () => Vr,
          tJD: () => cs,
          WOV: () => Gr,
          WY0: () => R,
          c0U: () => _r,
          eGN: () => to,
          bG5: () => fn,
          brB: () => ie,
          J7p: () => _e,
          I5R: () => en,
          scZ: () => yn,
          YAW: () => $t,
          poP: () => Ve,
          lx9: () => ht,
          OvJ: () => Ie,
          cUn: () => Bi,
          Agn: () => fe,
          Nvc: () => Vi,
          wp$: () => te,
          hJM: () => Re,
          omK: () => Hi,
          c0f: () => Zn,
          jiy: () => qt,
          lHp: () => at,
          t: () => W,
          AwB: () => au,
          cTq: () => sl,
          cGl: () => Mo,
          TL5: () => Zt,
          CGy: () => Ee,
          r53: () => Mn,
          ilX: () => gn,
          IxN: () => Hu,
          CoE: () => zr,
          pHK: () => Tu,
          aoI: () => oa,
          xzJ: () => Bu,
          xMc: () => Do,
          tv4: () => Da,
          hoD: () => vi,
          FNv: () => Au,
          Wfz: () => gi,
          Y84: () => hi,
          _Av: () => Vu,
          zX9: () => Jt,
          TQq: () => ti,
          x5F: () => ts,
          tR0: () => Nt,
          PlN: () => ji,
          iFL: () => Ct,
          rE2: () => Iu,
          aaJ: () => Ms,
          Tgq: () => Ii,
          mWi: () => Ti,
          wY6: () => Ni,
          Ew8: () => ms,
          EP: () => Oi,
          a_M: () => xi,
          WHr: () => zi,
          VM1: () => Li,
          eT7: () => vs,
          Yzt: () => $u,
          GLd: () => Pi,
          ZKp: () => de,
          kz6: () => Xu,
          nWw: () => Be,
          GCv: () => Fu,
          j$3: () => ei,
          RxY: () => ns,
          coD: () => ri,
          JtK: () => It,
          cvI: () => Xo,
          y$C: () => Qe,
          $G7: () => ze,
          wuX: () => gs,
          ysv: () => wt,
          IIz: () => vn,
          Pc$: () => fs,
          FDf: () => xr,
          OqL: () => _o,
          rcC: () => ni,
          Flu: () => $o,
          R8f: () => Qu,
          qoQ: () => oi,
          hIH: () => Gt,
          i83: () => yt,
        });
        var u = {};
        r.r(u),
          r.d(u, {
            tv: () => lt,
            m8: () => Tn,
            L1: () => sn,
            jW: () => Sn,
            _q: () => xn,
            g3: () => an,
          });
        var y = {};
        r.r(y),
          r.d(y, {
            GroupPanelType: () => Mt,
            appendGroupMemberRoles: () => b,
            applyGroupInvite: () => ge,
            createGroup: () => Rn,
            createGroupInviteCode: () => _,
            createGroupPanel: () => ct,
            createGroupRole: () => cr,
            deleteGroupInvite: () => mt,
            deleteGroupMember: () => Bn,
            deleteGroupPanel: () => dn,
            deleteGroupRole: () => dr,
            editGroupInvite: () => $,
            findGroupInviteByCode: () => ce,
            getAllGroupInviteCode: () => se,
            getGroupBasicInfo: () => Qt,
            getGroupConfigWithInfo: () => bt,
            getGroupPanelExtraData: () => mr,
            groupConfigNames: () => Fn,
            isMember: () => p,
            modifyGroupConfig: () => d,
            modifyGroupField: () => Wt,
            modifyGroupPanel: () => Pt,
            muteGroupMember: () => Mr,
            quitGroup: () => g,
            removeGroupMemberRoles: () => q,
            saveGroupPanelExtraData: () => pr,
            updateGroupRoleName: () => fr,
            updateGroupRolePermission: () => gr,
          });
        var f = {};
        r.r(f),
          r.d(f, {
            _fetchConverseLastMessageInfo: () => Qr,
            addReaction: () => Yr,
            deleteMessage: () => br,
            fetchConverseMessage: () => et,
            fetchNearbyMessage: () => Ss,
            getConverseLastMessageInfo: () => Wr,
            recallMessage: () => Br,
            removeReaction: () => Gr,
            searchMessage: () => js,
            sendMessage: () => fn,
          });
        var M = {};
        r.r(M),
          r.d(M, {
            appendUserDMConverse: () => Er,
            checkTokenValid: () => ao,
            claimTemporaryUser: () => eo,
            createTemporaryUser: () => qr,
            fetchUserInfo: () => no,
            forgetPassword: () => Xr,
            getUserOnlineStatus: () => ro,
            getUserSettings: () => Dr,
            loginWithEmail: () => kr,
            loginWithToken: () => Hr,
            modifyUserExtra: () => Ks,
            modifyUserField: () => oo,
            modifyUserPassword: () => $r,
            pickUserBaseInfo: () => yr,
            registerWithEmail: () => Vr,
            removeUserDMConverse: () => Gs,
            resetPassword: () => _r,
            searchUserWithUniqueName: () => to,
            setUserSettings: () => so,
            verifyEmail: () => bs,
            verifyEmailWithOTP: () => Qs,
          });
        var v = {};
        r.r(v),
          r.d(v, {
            acceptFriendRequest: () => us,
            addFriendRequest: () => as,
            cancelFriendRequest: () => ls,
            denyFriendRequest: () => is,
            removeFriend: () => cs,
            setFriendNickname: () => ci,
          });
        var D = {};
        r.r(D), r.d(D, { clearInbox: () => fi, setInboxAck: () => di });
        var E = {};
        r.r(E),
          r.d(E, {
            Qr: () => u,
            r9: () => v,
            ru: () => y,
            Ty: () => D,
            yw: () => f,
            EA: () => M,
          });
        var C = r(96319),
          T = r(39765),
          K = r(14698),
          F = r.n(K),
          x = r(86474),
          j = r.n(x),
          O = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function I(e) {
          const t = new T.ZP({
            size: 1e3,
            storageBackend: e,
            defaultExpires: 1e3 * 3600 * 24,
            enableCache: !0,
          });
          return {
            set: (o, s) =>
              O(this, null, function* () {
                try {
                  !!o &&
                    typeof o == 'string' &&
                    !j()(s) &&
                    (yield t.save({ key: o, data: s }));
                } catch (l) {
                  console.error(l);
                }
                return s;
              }),
            setWithExpires: (o, s, l) =>
              O(this, null, function* () {
                try {
                  !!o &&
                    typeof o == 'string' &&
                    !j()(s) &&
                    (yield t.save({ key: o, data: s, expires: l }));
                } catch (c) {
                  console.error(c);
                }
                return s;
              }),
            get: (o, s) =>
              O(this, null, function* () {
                let l;
                try {
                  l = yield t.load({
                    key: o,
                    autoSync: !0,
                    syncInBackground: !1,
                  });
                } catch (c) {
                  c instanceof T.dR ||
                    console.log(`get key ${o} error:`, String(c)),
                    (l = F()(s) ? null : s);
                }
                return l;
              }),
            remove: (o) =>
              O(this, null, function* () {
                yield t.remove({ key: o });
              }),
            save: (o, s) =>
              O(this, null, function* () {
                try {
                  !!o &&
                    typeof o == 'string' &&
                    !j()(s) &&
                    (yield t.save({ key: o, data: s, expires: null }));
                } catch (l) {
                  console.error(l);
                }
                return s;
              }),
          };
        }
        var P = r(95326),
          S = r.n(P),
          w = r(13546),
          z = r.n(w),
          U = r(45563),
          L = r.n(U),
          B = r(21357),
          Y = r(96605),
          Q = r(23951),
          ee = r(2773),
          h = r(52983),
          Ce = r(85466),
          De = r.n(Ce),
          je = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function ne(e, t) {
          let n;
          return [
            (...c) => {
              if (!n) {
                if (L()(t)) return t(...c);
                throw new Error(`${e} not regist`);
              }
              return n(...c);
            },
            (c) => {
              n = c;
            },
            () => {
              n = t;
            },
          ];
        }
        function we(e, t) {
          const [n, o] = ne(e, t),
            s = [];
          return [
            n,
            (i) => {
              o(i), s.forEach((a) => a(i));
            },
            (i) => {
              s.push(i);
            },
          ];
        }
        function dt(e, t) {
          const [n, o] = ne(e, t);
          let s = null,
            l;
          function c(H) {
            return s !== null && _isEqual(H, l);
          }
          const i = (...H) => {
              if (c(H)) return s;
              {
                const k = n(...H);
                return (s = k ?? null), (l = H), k;
              }
            },
            a = () => {
              s = null;
            };
          return [
            i,
            (H) => {
              o(H), a();
            },
            a,
          ];
        }
        function rt(e, t) {
          const [n, o] = ne(e, t);
          let s = null,
            l;
          function c(H) {
            return s !== null && De()(H, l);
          }
          const i = (...H) =>
              je(this, null, function* () {
                if (c(H)) return s;
                {
                  const k = yield n(...H);
                  return (s = k ?? null), (l = H), k;
                }
              }),
            a = () => {
              s = null;
            };
          return [
            i,
            (H) => {
              o(H), a();
            },
            a,
          ];
        }
        function ot() {
          const e = [];
          return [
            e,
            (n) => {
              e.push(n);
            },
          ];
        }
        function st() {
          const e = {};
          return [
            e,
            (n, o) => {
              e[n] &&
                console.warn('[buildRegMap] \u91CD\u590D\u6CE8\u518C:', n),
                (e[n] = o);
            },
          ];
        }
        const [ve, Ve] = ne('storage'),
          Ae = new Map();
        function Qe(e, t) {
          var n;
          const [o, s] = (0, h.useState)((n = Ae.get(e)) != null ? n : t);
          (0, h.useLayoutEffect)(() => {
            ve()
              .get(e)
              .then((i) => {
                s(i ?? t), Ae.set(e, i ?? t);
              });
          }, [e]);
          const l = (0, h.useCallback)(
              (i) => {
                s(i), ve().set(e, i), Ae.set(e, i);
              },
              [e]
            ),
            c = (0, h.useCallback)(
              (i) => {
                s(i), ve().save(e, i), Ae.set(e, i);
              },
              [e]
            );
          return [o, { set: l, save: c }];
        }
        const ft =
            /^([0-9a-zA-Z]{1,2}|[\u4e00-\u9eff]|[\u3040-\u309Fー]|[\u30A0-\u30FF]){1,8}$/,
          Ze = 'i18n:language',
          $e = '000000000000000000000000',
          Ue = {
            tianji: {},
            uploadFileLimit: 1 * 1024 * 1024,
            emailVerification: !1,
            serverName: 'Tailchat',
            disableMsgpack: !1,
            disableUserRegister: !1,
            disableGuestLogin: !1,
            disableCreateGroup: !1,
            disablePluginStore: !1,
            disableAddFriend: !1,
            disableTelemetry: !1,
            announcement: !1,
          };
        var Te = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        const G = 'en-US';
        function V() {
          return navigator.language
            ? navigator.language.startsWith('zh')
              ? 'zh-CN'
              : 'en-US'
            : G;
        }
        function X() {
          return Te(this, null, function* () {
            return yield ve().get(Ze, V());
          });
        }
        function de() {
          const [e, { save: t }] = Qe(Ze, G),
            n = (0, h.useRef)(),
            o = (0, h.useCallback)(
              (l) =>
                Te(this, null, function* () {
                  F()(n.current) && (n.current = e), t(l), yield Tt(l);
                }),
              [e, t]
            ),
            s = (0, h.useMemo)(
              () => (F()(n.current) ? !1 : n.current !== e),
              [e]
            );
          return { language: e, setLanguage: o, isChanged: s };
        }
        function We(e) {
          return Te(this, null, function* () {
            yield ve().save(Ze, e);
          });
        }
        const Ye = {
          type: 'languageDetector',
          async: !0,
          init: () => {},
          detect: (e) =>
            Te(void 0, null, function* () {
              try {
                const t = yield X();
                e(t);
              } catch (t) {
                e(G);
              }
            }),
          cacheUserLanguage(e) {
            try {
              We(e);
            } catch (t) {}
          },
        };
        var Fe = r(35005),
          Se = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        B.ZP.use(Ye)
          .use(Fe.Z)
          .use(Y.Db)
          .init({
            fallbackLng: G,
            load: 'currentOnly',
            backend: {
              loadPath: '/locales/{{lng}}/{{ns}}.json',
              allowMultiLoading: !1,
              addPath: (...e) => {
                console.log('Lost translate:', ...e);
              },
            },
            react: {
              hashTransKey(e) {
                return `k${(0, ee.kn)(e).toString(16)}`;
              },
            },
          });
        const W = (e, t, n) => {
          try {
            const o = `k${(0, ee.kn)(e).toString(16)}`;
            let s = B.ZP.t(o, t, n);
            return (
              s === o &&
                ((s = e),
                console.info(`[i18n] \u7FFB\u8BD1\u7F3A\u5931: [${o}]${e}`)),
              s
            );
          } catch (o) {
            return console.error(o), e;
          }
        };
        function Xe(e) {
          var t, n;
          const o = B.ZP.language;
          return (n = (t = e[o]) != null ? t : e['zh-CN']) != null
            ? n
            : e['en-US'];
        }
        function Tt(e) {
          return Se(this, null, function* () {
            return new Promise((t, n) => {
              B.ZP.changeLanguage(e, (o) => {
                o ? n(o) : t();
              });
            });
          });
        }
        function Z() {
          return B.ZP.language;
        }
        function oe(e) {
          B.ZP.on('loaded', e);
        }
        function re(e) {
          B.ZP.on('languageChanged', e);
        }
        function ze() {
          const { t: e, ready: t } = (0, Q.$)(),
            [n, o] = (0, h.useState)(() => W);
          return (
            (0, h.useEffect)(() => {
              o(
                () =>
                  (...s) =>
                    W(...s)
              );
            }, [e]),
            { t: n, ready: t }
          );
        }
        const [xe, _e] = ne('requestErrorHook', () => !0),
          [Le, Ie, ae] = rt('requestTokenGetter'),
          [ye, $t, Dt] = we('serverUrl', () => window.location.origin);
        var St = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        class zt extends Error {}
        function At() {
          const e = S().create({ baseURL: ye() });
          return (
            Dt((t) => {
              e.defaults.baseURL = t();
            }),
            e.interceptors.request.use((t) =>
              St(this, null, function* () {
                return (
                  ['post', 'get'].includes(String(t.method).toLowerCase()) &&
                    !t.headers['X-Token'] &&
                    (t.headers['X-Token'] = yield Le()),
                  t
                );
              })
            ),
            e.interceptors.response.use(
              (t) => ((t.data = z()(t.data, 'data', t.data)), t),
              (t) => {
                var n;
                const o = (n = z()(t, 'response.data')) != null ? n : {};
                let s = o.message;
                const l = o.code;
                if (
                  o.type === 'VALIDATION_ERROR' &&
                  ((s = W('\u8BF7\u6C42\u53C2\u6570\u6821\u9A8C\u5931\u8D25')),
                  Array.isArray(o.data))
                ) {
                  console.error(JSON.stringify(o.data));
                  try {
                    s += `: ${o.data.map((c) => c.field).join(', ')}`;
                  } catch (c) {}
                }
                if (L()(xe)) {
                  const c = xe(t);
                }
                throw new zt(s ?? t.message);
              }
            ),
            e
          );
        }
        const R = At();
        var xt = r(78989);
        const Xt = typeof window != 'undefined',
          _t = typeof navigator != 'undefined',
          vt = !1,
          Lt = !0,
          yt = 'nightly-202508141458',
          [at, ht] = ne('toasts');
        function Re(e) {
          let t = '';
          e instanceof Error ? (t = e.message) : (t = String(e)),
            at(t, 'error');
        }
        function qt(e = W('\u64CD\u4F5C\u6210\u529F')) {
          at(e, 'success');
        }
        const [te, ie] = ne('alert'),
          [he, en] = ne('global-loading', () => () => {}),
          [Zn, yn] = ne('notification');
        function wt(e) {
          const t = (0, h.useRef)(e);
          return (t.current = e), t;
        }
        var Jn = r(66932);
        const tn = new Jn.EventEmitter(),
          fe = {
            on(e, t) {
              tn.on(e, t);
            },
            off(e, t) {
              tn.off(e, t);
            },
            emit(e, ...t) {
              tn.emit(e, ...t);
            },
          };
        function It(e, t) {
          const n = wt(t);
          (0, h.useEffect)(() => {
            const o = (...s) => {
              n.current(...s);
            };
            return (
              fe.on(e, o),
              () => {
                fe.off(e, o);
              }
            );
          }, []);
        }
        var hn = r(80527),
          kn = r(36350),
          nn = r(61506),
          En = Object.defineProperty,
          Dn = Object.getOwnPropertySymbols,
          Hn = Object.prototype.hasOwnProperty,
          Vn = Object.prototype.propertyIsEnumerable,
          An = (e, t, n) =>
            t in e
              ? En(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          $n = (e, t) => {
            for (var n in t || (t = {})) Hn.call(t, n) && An(e, n, t[n]);
            if (Dn) for (var n of Dn(t)) Vn.call(t, n) && An(e, n, t[n]);
            return e;
          };
        const Nt = (0, kn.create)()(
          (0, nn.tJ)((e) => $n({}, Ue), { name: 'globalConfigStore' })
        );
        var Xn = Object.defineProperty,
          In = Object.getOwnPropertySymbols,
          Nn = Object.prototype.hasOwnProperty,
          Pn = Object.prototype.propertyIsEnumerable,
          rn = (e, t, n) =>
            t in e
              ? Xn(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Ut = (e, t) => {
            for (var n in t || (t = {})) Nn.call(t, n) && rn(e, n, t[n]);
            if (In) for (var n of In(t)) Pn.call(t, n) && rn(e, n, t[n]);
            return e;
          },
          On = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function on() {
          return Nt.getState();
        }
        function _n() {
          return On(this, null, function* () {
            const { data: e } = yield R.get('/api/config/client');
            return Nt.setState(Ut(Ut({}, Ue), e)), e;
          });
        }
        var Cn = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        class qn extends Error {
          constructor() {
            super(...arguments);
            this.name = 'SocketEventError';
          }
        }
        class er {
          constructor(t) {
            (this.socket = t),
              (this.listener = []),
              (this.closeFn = null),
              t.onAny((n, o) => {
                const s = this.listener.filter(([l]) => l === n);
                if (s.length === 0) {
                  console.warn(`[Socket IO] Unhandler event: ${n}`, o);
                  return;
                }
                s.forEach(([, l]) => {
                  l(o);
                });
              });
          }
          get connected() {
            return this.socket.connected;
          }
          request(t) {
            return Cn(this, arguments, function* (n, o = {}) {
              return new Promise((s, l) => {
                this.socket.emit(n, o, (c) => {
                  c.result === !0
                    ? s(c.data)
                    : c.result === !1 &&
                      l(
                        new qn(`[${n}]: ${c.message}: 
data: ${JSON.stringify(o)}`)
                      );
                });
              });
            });
          }
          listen(t, n) {
            this.listener.push([`notify:${t}`, n]);
          }
          removeListener(t, n) {
            const o = this.listener.findIndex(
              (s) => s[0] === `notify:${t}` && s[1] === n
            );
            o >= 0 && this.listener.splice(o, 1);
          }
          mockReconnect() {
            this.socket.disconnect(),
              at('reconnect after 5s'),
              setTimeout(() => {
                (this.socket.io.skipReconnect = !1), this.socket.io.reconnect();
              }, 5 * 1e3);
          }
          onReconnect(t) {
            this.socket.io.on('reconnect', t);
          }
          disconnect() {
            this.socket.disconnect();
          }
          setupSocketStatusTip() {
            const t = this.socket,
              n = () => {
                this.closeFn ||
                  (this.closeFn = he(
                    W('\u6B63\u5728\u91CD\u65B0\u94FE\u63A5')
                  ));
              },
              o = () => {
                this.closeFn &&
                  typeof this.closeFn == 'function' &&
                  (this.closeFn(), (this.closeFn = null));
              };
            t.on('connect', () => {
              console.log('\u8FDE\u63A5\u6210\u529F'),
                o(),
                fe.emit('updateNetworkStatus', 'connected');
            }),
              t.on('connecting', (s) => {
                console.log('\u6B63\u5728\u8FDE\u63A5'),
                  n(),
                  fe.emit('updateNetworkStatus', 'reconnecting');
              }),
              t.on('disconnect', (s) => {
                console.log(
                  '\u4E0E\u670D\u52A1\u5668\u7684\u94FE\u63A5\u5DF2\u65AD\u5F00'
                ),
                  Re(
                    W(
                      '\u4E0E\u670D\u52A1\u5668\u7684\u94FE\u63A5\u5DF2\u65AD\u5F00'
                    )
                  ),
                  o(),
                  fe.emit('updateNetworkStatus', 'disconnected');
              }),
              t.on('connect_error', (s) => {
                console.log('\u8FDE\u63A5\u5931\u8D25'),
                  Re(W('\u8FDE\u63A5\u5931\u8D25')),
                  o(),
                  fe.emit('updateNetworkStatus', 'disconnected');
              }),
              t.io.on('reconnect', (s) => {
                console.log('\u91CD\u8FDE\u6210\u529F'),
                  o(),
                  fe.emit('updateNetworkStatus', 'connected');
              }),
              t.io.on('reconnect_attempt', (s) => {
                console.log('\u91CD\u8FDE\u4E2D...'),
                  n(),
                  fe.emit('updateNetworkStatus', 'reconnecting');
              }),
              t.io.on('reconnect_error', (s) => {
                console.error('\u91CD\u8FDE\u5C1D\u8BD5\u5931\u8D25...', s),
                  n(),
                  fe.emit('updateNetworkStatus', 'reconnecting');
              }),
              t.io.on('reconnect_failed', () => {
                console.error('\u91CD\u8FDE\u5931\u8D25...'),
                  n(),
                  fe.emit('updateNetworkStatus', 'disconnected');
              }),
              t.io.on('error', (s) => {
                console.error('\u7F51\u7EDC\u51FA\u73B0\u5F02\u5E38', s),
                  Re(W('\u7F51\u7EDC\u51FA\u73B0\u5F02\u5E38')),
                  o(),
                  fe.emit('updateNetworkStatus', 'disconnected');
              });
          }
        }
        let ut;
        function Ft(e) {
          return (
            F()(ut) || ut.close(),
            new Promise((t, n) => {
              const o = on().disableMsgpack;
              (ut = (0, xt.io)(ye(), {
                transports: ['websocket'],
                auth: { token: e },
                forceNew: !0,
                parser: o ? void 0 : hn,
              })),
                ut.once('connect', () => {
                  const s = new er(ut);
                  s.setupSocketStatusTip(), t(s);
                }),
                ut.once('error', () => {
                  n();
                }),
                vt &&
                  ut.onAny((...s) => {
                    console.debug('Receive Notify:', s);
                  });
            })
          );
        }
        var tr = r(11286),
          nr = r.n(tr),
          rr = r(62923),
          gt = r.n(rr),
          jn = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function Ne(e, t = 200) {
          let n = [],
            o = null;
          function s() {
            return jn(this, null, function* () {
              o = null;
              const l = [...n];
              n = [];
              try {
                const c = yield e(l.map((i) => i.params));
                l.forEach((i, a) => {
                  i.resolve(c[a]);
                });
              } catch (c) {
                l.forEach((i) => {
                  i.reject(c);
                });
              }
            });
          }
          return (l) => (
            o ||
              (o = window.setTimeout(() => {
                s();
              }, t)),
            new Promise((c, i) => {
              n.push({ params: l, resolve: c, reject: i });
            })
          );
        }
        function Ge(e, t, n = 100) {
          return (o) =>
            jn(this, null, function* () {
              const s = nr()(o, n);
              if (t === 'serial') {
                const l = [];
                for (const c of s) {
                  const i = yield e(c);
                  Array.isArray(i)
                    ? l.push(...i)
                    : console.warn(
                        '[createAutoSplitRequest] fn should be return array'
                      );
                }
                return l;
              } else if (t === 'parallel') {
                const l = yield Promise.all(s.map((c) => e(c)));
                return gt()(l);
              }
              return [];
            });
        }
        var or = r(90292),
          it = r.n(or),
          Rt = r(54142),
          Bt = r.n(Rt),
          qe = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            }),
          lt = ((e) => (
            (e.DM = 'DM'), (e.Multi = 'Multi'), (e.Group = 'Group'), e
          ))(lt || {});
        function sn(e) {
          return qe(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/converse/createDMConverse',
              { memberIds: e }
            );
            return t;
          });
        }
        function Tn(e, t) {
          return qe(this, null, function* () {
            const { data: n } = yield R.post(
              '/api/chat/converse/appendDMConverseMembers',
              { converseId: e, memberIds: t }
            );
            return n;
          });
        }
        function Sn(e) {
          return qe(this, null, function* () {
            const { data: t } = yield R.get(
              '/api/chat/converse/findConverseInfo',
              { params: { converseId: e } }
            );
            return t;
          });
        }
        function an(e, t) {
          return qe(this, null, function* () {
            yield R.post('/api/chat/ack/update', {
              converseId: e,
              lastMessageId: t,
            });
          });
        }
        function sr() {
          return qe(this, null, function* () {
            const { data: e } = yield request.get('/api/chat/ack/all');
            return Array.isArray(e) ? e : [];
          });
        }
        function ar(e) {
          return qe(this, null, function* () {
            const { data: t } = yield R.post('/api/chat/ack/list', {
              converseIds: e,
            });
            return Array.isArray(t) ? t : [];
          });
        }
        const zn = Ne(
          Ge(
            (e) =>
              qe(void 0, null, function* () {
                const t = it()(gt()(e)),
                  n = yield ar(t),
                  o = Bt()(t, n);
                return e.map((s) =>
                  s.map((l) => {
                    var c;
                    return (c = o[l]) != null ? c : null;
                  })
                );
              }),
            'serial',
            100
          )
        );
        function xn(e) {
          return qe(this, null, function* () {
            return zn(e);
          });
        }
        var Mt;
        (function (e) {
          (e[(e.TEXT = 0)] = 'TEXT'),
            (e[(e.GROUP = 1)] = 'GROUP'),
            (e[(e.PLUGIN = 2)] = 'PLUGIN');
        })(Mt || (Mt = {}));
        var ur = Object.defineProperty,
          ir = Object.defineProperties,
          Ln = Object.getOwnPropertyDescriptors,
          wn = Object.getOwnPropertySymbols,
          Un = Object.prototype.hasOwnProperty,
          lr = Object.prototype.propertyIsEnumerable,
          un = (e, t, n) =>
            t in e
              ? ur(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          ln = (e, t) => {
            for (var n in t || (t = {})) Un.call(t, n) && un(e, n, t[n]);
            if (wn) for (var n of wn(t)) lr.call(t, n) && un(e, n, t[n]);
            return e;
          },
          cn = (e, t) => ir(e, Ln(t)),
          le = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        const Fn = [
          'hideGroupMemberDiscriminator',
          'disableCreateConverseFromGroup',
          'groupBackgroundImage',
        ];
        function bt(e) {
          var t, n, o;
          const s = (t = e == null ? void 0 : e.config) != null ? t : {};
          return cn(ln({}, s), {
            hideGroupMemberDiscriminator:
              (n = s.hideGroupMemberDiscriminator) != null ? n : !1,
            disableCreateConverseFromGroup:
              (o = s.disableCreateConverseFromGroup) != null ? o : !1,
          });
        }
        function Rn(e, t) {
          return le(this, null, function* () {
            const { data: n } = yield R.post('/api/group/createGroup', {
              name: e,
              panels: t,
            });
            return n;
          });
        }
        function Qt(e) {
          return le(this, null, function* () {
            const { data: t } = yield R.get('/api/group/getGroupBasicInfo', {
              params: { groupId: e },
            });
            return t;
          });
        }
        function Wt(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/updateGroupField', {
              groupId: e,
              fieldName: t,
              fieldValue: n,
            });
          });
        }
        function d(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/updateGroupConfig', {
              groupId: e,
              configName: t,
              configValue: n,
            });
          });
        }
        function g(e) {
          return le(this, null, function* () {
            yield R.post('/api/group/quitGroup', { groupId: e });
          });
        }
        function p(e) {
          return le(this, null, function* () {
            const { data: t } = yield R.post('/api/group/isMember', {
              groupId: e,
            });
            return t;
          });
        }
        function b(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/appendGroupMemberRoles', {
              groupId: e,
              memberIds: t,
              roles: n,
            });
          });
        }
        function q(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/removeGroupMemberRoles', {
              groupId: e,
              memberIds: t,
              roles: n,
            });
          });
        }
        function _(e, t) {
          return le(this, null, function* () {
            const { data: n } = yield R.post(
              '/api/group/invite/createGroupInvite',
              { groupId: e, inviteType: t }
            );
            return n;
          });
        }
        function $(e, t, n, o) {
          return le(this, null, function* () {
            yield R.post('/api/group/invite/editGroupInvite', {
              groupId: e,
              code: t,
              expiredAt: n,
              usageLimit: o,
            });
          });
        }
        function se(e) {
          return le(this, null, function* () {
            const { data: t } = yield R.get(
              '/api/group/invite/getAllGroupInviteCode',
              { params: { groupId: e } }
            );
            return t;
          });
        }
        function ce(e) {
          return le(this, null, function* () {
            const { data: t } = yield R.get(
              '/api/group/invite/findInviteByCode',
              { params: { code: e } }
            );
            return t;
          });
        }
        function ge(e) {
          return le(this, null, function* () {
            yield R.post('/api/group/invite/applyInvite', { code: e });
          });
        }
        function mt(e, t) {
          return le(this, null, function* () {
            yield R.post('/api/group/invite/deleteInvite', {
              groupId: e,
              inviteId: t,
            });
          });
        }
        function ct(e, t) {
          return le(this, null, function* () {
            yield R.post(
              '/api/group/createGroupPanel',
              cn(ln({}, t), { groupId: e })
            );
          });
        }
        function Pt(e, t, n) {
          return le(this, null, function* () {
            yield R.post(
              '/api/group/modifyGroupPanel',
              cn(ln({}, n), { groupId: e, panelId: t })
            );
          });
        }
        function dn(e, t) {
          return le(this, null, function* () {
            yield R.post('/api/group/deleteGroupPanel', {
              groupId: e,
              panelId: t,
            });
          });
        }
        function cr(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/createGroupRole', {
              groupId: e,
              roleName: t,
              permissions: n,
            });
          });
        }
        function dr(e, t) {
          return le(this, null, function* () {
            yield R.post('/api/group/deleteGroupRole', {
              groupId: e,
              roleId: t,
            });
          });
        }
        function fr(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/updateGroupRoleName', {
              groupId: e,
              roleId: t,
              roleName: n,
            });
          });
        }
        function gr(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/updateGroupRolePermission', {
              groupId: e,
              roleId: t,
              permissions: n,
            });
          });
        }
        function Mr(e, t, n) {
          return le(this, null, function* () {
            yield R.post('/api/group/muteGroupMember', {
              groupId: e,
              memberId: t,
              muteMs: n,
            });
          });
        }
        function Bn(e, t) {
          return le(this, null, function* () {
            yield R.post('/api/group/deleteGroupMember', {
              groupId: e,
              memberId: t,
            });
          });
        }
        function mr(e, t, n) {
          return le(this, null, function* () {
            var o;
            const { data: s } = yield R.post('/api/group/extra/getPanelData', {
              groupId: e,
              panelId: t,
              name: n,
            });
            return (o = s.data) != null ? o : null;
          });
        }
        function pr(e, t, n, o) {
          return le(this, null, function* () {
            yield R.post('/api/group/extra/savePanelData', {
              groupId: e,
              panelId: t,
              name: n,
              data: typeof o == 'string' ? o : JSON.stringify(o),
            });
          });
        }
        var Me = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function et(e, t) {
          return Me(this, null, function* () {
            const { data: n } = yield R.get(
              '/api/chat/message/fetchConverseMessage',
              { params: { converseId: e, startId: t } }
            );
            return n;
          });
        }
        function fn(e) {
          return Me(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/message/sendMessage',
              e
            );
            return t;
          });
        }
        function Br(e) {
          return Me(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/message/recallMessage',
              { messageId: e }
            );
            return t;
          });
        }
        function br(e) {
          return Me(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/message/deleteMessage',
              { messageId: e }
            );
            return t;
          });
        }
        function js(e, t, n) {
          return Me(this, null, function* () {
            const { data: o } = yield R.post(
              '/api/chat/message/searchMessage',
              { text: e, converseId: t, groupId: n }
            );
            return o;
          });
        }
        function Ts(e) {
          return Me(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/message/fetchConverseLastMessages',
              { converseIds: e }
            );
            return t;
          });
        }
        const Qr = Ne(
          Ge(
            (e) =>
              Me(void 0, null, function* () {
                const t = it()(gt()(e)),
                  n = yield Ts(t),
                  o = Bt()(t, n);
                return e.map((s) =>
                  s.map((l) => {
                    var c;
                    return (c = o[l]) != null ? c : null;
                  })
                );
              }),
            'serial',
            100
          )
        );
        function Wr(e) {
          return Qr(e);
        }
        function Ss(e) {
          return Me(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/chat/message/fetchNearbyMessage',
              e
            );
            return t;
          });
        }
        function Yr(e, t) {
          return Me(this, null, function* () {
            const { data: n } = yield R.post('/api/chat/message/addReaction', {
              messageId: e,
              emoji: t,
            });
            return n;
          });
        }
        function Gr(e, t) {
          return Me(this, null, function* () {
            const { data: n } = yield R.post(
              '/api/chat/message/removeReaction',
              { messageId: e, emoji: t }
            );
            return n;
          });
        }
        var vr = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function zs() {
          return vr(this, null, function* () {
            const { data: e } = yield R.get('/api/plugin/registry/list');
            return e;
          });
        }
        function xs() {
          return vr(this, null, function* () {
            const { data: e } = yield R.get('/registry-be.json');
            return e;
          });
        }
        function Ls() {
          return vr(this, null, function* () {
            const { data: e } = yield R.get('/registry.json', { baseURL: '' });
            return e;
          });
        }
        var ws = r(56523),
          Us = r(52500);
        const tt = new ws.S({
            defaultOptions: { queries: { staleTime: 10 * 1e3 } },
          }),
          Fs = (0, Us.S)({
            storage: {
              getItem: (e) => ve().get(e),
              setItem: (e, t) => ve().set(e, t),
              removeItem: (e) => ve().remove(e),
            },
          });
        function Kr(e, t, n) {
          const o = (...c) =>
              tt.fetchQuery([e, JSON.stringify(c)], () => t(...c), n),
            s = () => tt.refetchQueries([e]),
            l = () => {
              tt.removeQueries([e]);
            };
          return (o.refetch = s), (o.clearCache = l), o;
        }
        var Rs = r(49335),
          Zr = r.n(Rs),
          al = r(76705),
          ul = r(66659);
        function il(e) {
          return typeof e == 'string' && e.length > 0;
        }
        function ll(e) {
          return urlRegex({ exact: !0 }).test(e);
        }
        const cl = (e) => _isString(e) && e.startsWith('blob:'),
          dl = (e) => {
            var t;
            return (t = e.match(urlRegex())) != null ? t : [];
          };
        function fl(e) {
          return !!e && e !== '0' && e !== 'false';
        }
        function pt(e) {
          return typeof e == 'string' && e !== '';
        }
        function Jr(e) {
          return typeof e != 'string' ? !1 : e.startsWith('localMessage_');
        }
        function Bs(e) {
          return !!(
            (typeof e == 'string' && e.length === 12) ||
            (typeof e == 'string' && /^[0-9A-Fa-f]{24}$/.test(e))
          );
        }
        var pe = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function yr(e) {
          return Zr()(e, [
            '_id',
            'email',
            'nickname',
            'discriminator',
            'avatar',
            'temporary',
            'type',
            'emailVerified',
            'banned',
          ]);
        }
        const hr = {
          [$e]: () => ({
            _id: $e,
            email: 'admin@msgbyte.com',
            nickname: W('\u7CFB\u7EDF'),
            discriminator: '0000',
            avatar: null,
            temporary: !1,
            type: 'normalUser',
            emailVerified: !1,
            banned: !1,
          }),
          '': () => ({
            _id: '',
            email: '',
            nickname: '',
            discriminator: '0000',
            avatar: null,
            temporary: !1,
            type: 'normalUser',
            emailVerified: !1,
            banned: !1,
          }),
        };
        function kr(e, t) {
          return pe(this, null, function* () {
            const { data: n } = yield R.post('/api/user/login', {
              email: e,
              password: t,
            });
            return fe.emit('loginSuccess', yr(n)), n;
          });
        }
        function Hr(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/resolveToken', {
              token: e,
            });
            return fe.emit('loginSuccess', yr(t)), t;
          });
        }
        function bs(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/verifyEmail', {
              email: e,
            });
            return t;
          });
        }
        function Qs(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/verifyEmailWithOTP', {
              emailOTP: e,
            });
            return t;
          });
        }
        function Vr(e) {
          return pe(
            this,
            arguments,
            function* ({ email: t, password: n, nickname: o, emailOTP: s }) {
              const { data: l } = yield R.post('/api/user/register', {
                email: t,
                nickname: o,
                password: n,
                emailOTP: s,
              });
              return l;
            }
          );
        }
        function $r(e, t) {
          return pe(this, null, function* () {
            yield R.post('/api/user/modifyPassword', {
              oldPassword: e,
              newPassword: t,
            });
          });
        }
        function Xr(e) {
          return pe(this, null, function* () {
            yield R.post('/api/user/forgetPassword', { email: e });
          });
        }
        function _r(e, t, n) {
          return pe(this, null, function* () {
            yield R.post('/api/user/resetPassword', {
              email: e,
              password: t,
              otp: n,
            });
          });
        }
        function qr(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/createTemporaryUser', {
              nickname: e,
            });
            return t;
          });
        }
        function eo(e, t, n, o) {
          return pe(this, null, function* () {
            const { data: s } = yield R.post('/api/user/claimTemporaryUser', {
              userId: e,
              email: t,
              password: n,
              emailOTP: o,
            });
            return s;
          });
        }
        function to(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/user/searchUserWithUniqueName',
              { uniqueName: e }
            );
            return t;
          });
        }
        const Ws = Ne(
          Ge(
            (e) =>
              pe(void 0, null, function* () {
                const { data: t } = yield R.post('/api/user/getUserInfoList', {
                  userIds: e,
                });
                return t;
              }),
            'serial',
            1e3
          )
        );
        function no(e) {
          return pe(this, null, function* () {
            if (hr[e] && typeof hr[e] == 'function') return hr[e]();
            if (!Bs(e)) throw new Error(`Invalid userId: ${e}`);
            return yield Ws(e);
          });
        }
        const Ys = Ne(
          Ge(
            (e) =>
              pe(void 0, null, function* () {
                const t = it()(gt()(e)),
                  { data: n } = yield R.post('/api/gateway/checkUserOnline', {
                    userIds: t,
                  }),
                  o = Bt()(t, n);
                return e.map((s) =>
                  s.map((l) => {
                    var c;
                    return (c = o[l]) != null ? c : !1;
                  })
                );
              }),
            'serial',
            1e3
          )
        );
        function ro(e) {
          return pe(this, null, function* () {
            return Ys(e);
          });
        }
        function Er(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/dmlist/addConverse', {
              converseId: e,
            });
            return t;
          });
        }
        function Gs(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post(
              '/api/user/dmlist/removeConverse',
              { converseId: e }
            );
            return t;
          });
        }
        function oo(e, t) {
          return pe(this, null, function* () {
            const { data: n } = yield R.post('/api/user/updateUserField', {
              fieldName: e,
              fieldValue: t,
            });
            return n;
          });
        }
        function Ks(e, t) {
          return pe(this, null, function* () {
            const { data: n } = yield R.post('/api/user/updateUserExtra', {
              fieldName: e,
              fieldValue: t,
            });
            return n;
          });
        }
        function Dr() {
          return pe(this, null, function* () {
            const { data: e } = yield R.get('/api/user/getUserSettings');
            return fe.emit('userSettingsUpdate', e), e;
          });
        }
        function so(e) {
          return pe(this, null, function* () {
            const { data: t } = yield R.post('/api/user/setUserSettings', {
              settings: e,
            });
            return t;
          });
        }
        const ao = Kr('tokenValid', (e) =>
          pe(void 0, null, function* () {
            const { data: t } = yield R.post('/api/user/checkTokenValid', {
              token: e,
            });
            return t;
          })
        );
        function bn(e) {
          return String(e)
            .replace('{BACKEND}', ye())
            .replace('%7BBACKEND%7D', ye());
        }
        var Zs = Object.defineProperty,
          Js = Object.defineProperties,
          ks = Object.getOwnPropertyDescriptors,
          uo = Object.getOwnPropertySymbols,
          Hs = Object.prototype.hasOwnProperty,
          Vs = Object.prototype.propertyIsEnumerable,
          io = (e, t, n) =>
            t in e
              ? Zs(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          $s = (e, t) => {
            for (var n in t || (t = {})) Hs.call(t, n) && io(e, n, t[n]);
            if (uo) for (var n of uo(t)) Vs.call(t, n) && io(e, n, t[n]);
            return e;
          },
          Xs = (e, t) => Js(e, ks(t)),
          Ot = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            }),
          Qn = ((e) => (
            (e.user = 'user'),
            (e.converse = 'converse'),
            (e.converseAck = 'converseAck'),
            (e.baseGroupInfo = 'baseGroupInfo'),
            (e.groupInvite = 'groupInvite'),
            (e.pluginRegistry = 'pluginRegistry'),
            (e.userSettings = 'userSettings'),
            e
          ))(Qn || {});
        function Wn(e, t = !1) {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(['user', e], () => no(e), {
              staleTime: t ? 0 : 2 * 60 * 60 * 1e3,
            });
          });
        }
        function Yn(e) {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(['converse', e], () => Sn(e));
          });
        }
        function _s(e) {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(['baseGroupInfo', e], () => Qt(e));
          });
        }
        function qs(e) {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(['groupInvite', e], () => ce(e));
          });
        }
        function ea(e, t = !1) {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(
              ['converseAck', e],
              () =>
                Promise.all([
                  xn([e]).then((o) => o[0]),
                  Wr([e]).then((o) => o[0]),
                ]).then(([o, s]) => ({
                  converseId: e,
                  ack: o,
                  lastMessage: s,
                })),
              { staleTime: 2 * 1e3 }
            );
          });
        }
        function ta() {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(
              ['pluginRegistry'],
              () =>
                Promise.all([
                  zs().catch(() => []),
                  xs()
                    .then((t) =>
                      t.map((n) => {
                        const o = Xs($s({}, n), { url: bn(n.url) });
                        return (
                          n.icon && (o.icon = bn(n.icon)),
                          n.documentUrl && (o.documentUrl = bn(n.documentUrl)),
                          o
                        );
                      })
                    )
                    .catch(() => []),
                  Ls().catch(() => []),
                ]).then(([t, n, o]) => [...t, ...n, ...o]),
              { staleTime: 2 * 60 * 60 * 1e3 }
            );
          });
        }
        function na() {
          return Ot(this, null, function* () {
            return yield tt.fetchQuery(['userSettings'], () => Dr(), {
              staleTime: 10 * 60 * 1e3,
            });
          });
        }
        var lo = r(98258),
          ra = r(43697);
        function oa(e, t) {
          const n = 20 * 1e3,
            { data: o, isSuccess: s } = (0, lo.a)(
              ['onlineStatus', e.join(',')],
              () => ro(e),
              { staleTime: n }
            );
          return (
            s && Array.isArray(o) && typeof t == 'function' && o && t(o),
            o ?? e.map(() => !1)
          );
        }
        var sa = Object.defineProperty,
          aa = Object.defineProperties,
          ua = Object.getOwnPropertyDescriptors,
          co = Object.getOwnPropertySymbols,
          ia = Object.prototype.hasOwnProperty,
          la = Object.prototype.propertyIsEnumerable,
          fo = (e, t, n) =>
            t in e
              ? sa(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          ca = (e, t) => {
            for (var n in t || (t = {})) ia.call(t, n) && fo(e, n, t[n]);
            if (co) for (var n of co(t)) la.call(t, n) && fo(e, n, t[n]);
            return e;
          },
          da = (e, t) => aa(e, ua(t));
        class fa extends h.PureComponent {
          constructor() {
            super(...arguments);
            (this.state = { portals: [] }),
              (this.mount = (t, n) => {
                this.setState((o) => ({
                  portals: [...o.portals, { key: t, children: n }],
                }));
              }),
              (this.update = (t, n) => {
                this.setState((o) => ({
                  portals: o.portals.map((s) =>
                    s.key === t ? da(ca({}, s), { children: n }) : s
                  ),
                }));
              }),
              (this.unmount = (t) => {
                this.setState((n) => ({
                  portals: n.portals.filter((o) => o.key !== t),
                }));
              });
          }
          render() {
            const { renderManagerView: t } = this.props;
            return this.state.portals.map(({ key: n, children: o }, s) =>
              h.createElement(h.Fragment, { key: n }, t(o))
            );
          }
        }
        function ga(e) {
          const t = h.createContext(null);
          return (t.displayName = 'PortalContext-' + e), t;
        }
        class Ma extends h.Component {
          componentDidMount() {
            if (!this.props.manager)
              throw new Error(
                'Looks like you forgot to wrap your root component with `PortalHost` component.\n'
              );
            this._key = this.props.manager.mount(
              this.props.hostName,
              this.props.children
            );
          }
          componentDidUpdate() {
            this.props.manager.update(
              this.props.hostName,
              this._key,
              this.props.children
            );
          }
          componentWillUnmount() {
            this.props.manager.unmount(this.props.hostName, this._key);
          }
          render() {
            return null;
          }
        }
        class go {
          constructor() {
            this.listeners = {};
          }
          emit(t, ...n) {
            if (!(t in this.listeners)) return;
            const o = this.listeners[t];
            for (let s = 0, l = o.length; s < l; s++) {
              o[s].call(this, event);
              const c = o[s];
              typeof c == 'function' && c(...n);
            }
          }
          addListener(t, n) {
            t in this.listeners || (this.listeners[t] = []),
              this.listeners[t].push(n);
          }
          removeListener(t, n) {
            if (!(t in this.listeners)) return;
            const o = this.listeners[t];
            for (let s = 0, l = o.length; s < l; s++)
              if (o[s] === n) return o.splice(s, 1), this.removeListener(t, n);
          }
        }
        const Ar = 'ADD_PORTAL',
          Ir = 'REMOVE_PORTAL',
          ma = (e) => h.createElement(h.Fragment, null, e);
        function pa(e) {
          const {
            hostName: t = 'default',
            eventEmitter: n = new go(),
            renderManagerView: o = ma,
          } = e;
          let s = 1e4;
          const l = (H) => {
              const k = s++;
              return n.emit(Ar, t, H, k), k;
            },
            c = (H) => {
              n.emit(Ir, t, H);
            },
            i = ga(t),
            a = h.memo((H) => {
              const k = (0, h.useRef)(),
                nt = (0, h.useRef)(0),
                Ke = (0, h.useRef)([]),
                jt = (0, h.useRef)(t);
              (0, h.useEffect)(() => {
                jt.current = t;
              }, [t]);
              const ke = (0, h.useCallback)((Oe, be, He) => {
                  if (Oe !== jt.current) return;
                  const Vt = He || nt.current++;
                  return (
                    k.current
                      ? k.current.mount(Vt, be)
                      : Ke.current.push({
                          type: 'mount',
                          key: Vt,
                          children: be,
                        }),
                    Vt
                  );
                }, []),
                Ht = (0, h.useCallback)((Oe, be, He) => {
                  if (Oe === jt.current)
                    if (k.current) k.current.update(be, He);
                    else {
                      const Vt = { type: 'mount', key: be, children: He },
                        Cs = Ke.current.findIndex(
                          (wr) =>
                            wr.type === 'mount' ||
                            (wr.type === 'update' && wr.key === be)
                        );
                      Cs > -1 ? (Ke.current[Cs] = Vt) : Ke.current.push(Vt);
                    }
                }, []),
                Pe = (0, h.useCallback)((Oe, be) => {
                  Oe === jt.current &&
                    (k.current
                      ? k.current.unmount(be)
                      : Ke.current.push({ type: 'unmount', key: be }));
                }, []);
              return (
                (0, h.useEffect)(
                  () => (
                    n.addListener(Ar, ke),
                    n.addListener(Ir, Pe),
                    () => {
                      n.removeListener(Ar, ke), n.removeListener(Ir, Pe);
                    }
                  ),
                  [ke, Pe]
                ),
                (0, h.useEffect)(() => {
                  const Oe = Ke.current,
                    be = k.current;
                  for (; Oe.length && be; ) {
                    const He = Oe.pop();
                    if (!!He)
                      switch (He.type) {
                        case 'mount':
                          be.mount(He.key, He.children);
                          break;
                        case 'update':
                          be.update(He.key, He.children);
                          break;
                        case 'unmount':
                          be.unmount(He.key);
                          break;
                      }
                  }
                }, []),
                h.createElement(
                  i.Provider,
                  { value: { mount: ke, update: Ht, unmount: Pe } },
                  h.createElement(h.Fragment, null, H.children),
                  h.createElement(fa, { ref: k, renderManagerView: o })
                )
              );
            });
          a.displayName = 'PortalHost-' + t;
          const m = h.memo((H) => {
            const k = (0, h.useContext)(i);
            return F()(k)
              ? (console.error('Not find PortalContext'), null)
              : h.createElement(Ma, { hostName: t, manager: k }, H.children);
          });
          return (
            (m.displayName = 'PortalRender-' + t),
            { add: l, remove: c, PortalHost: a, PortalRender: m }
          );
        }
        const va = 'alphaMode';
        function Mo() {
          const [e, { save: t }] = Qe(va, !1);
          return { isAlphaMode: e, setAlphaMode: t };
        }
        const ya = h.memo((e) => {
          const { isAlphaMode: t } = Mo();
          return t ? h.createElement(h.Fragment, null, e.children) : null;
        });
        ya.displayName = 'AlphaContainer';
        const mo = h.memo((e) =>
          vt ? h.createElement(h.Fragment, null, e.children) : null
        );
        mo.displayName = 'DevContainer';
        var ha = r(21974);
        const po = h.memo((e) =>
          h.createElement(
            ha.S,
            { client: tt, persistOptions: { persister: Fs } },
            e.children
          )
        );
        po.displayName = 'CacheProvider';
        function Ea(e) {
          if (e === 'dark') return { isDarkMode: !0, extraSchemeName: null };
          if (e === 'light') return { isDarkMode: !1, extraSchemeName: null };
          if (e === 'auto')
            return {
              isDarkMode: window.matchMedia
                ? window.matchMedia('(prefers-color-scheme: dark)').matches
                : !0,
              extraSchemeName: null,
            };
          {
            let [t, n] = e.split('+');
            return (
              pt(n) || ((n = t), (t = 'dark')),
              { isDarkMode: t === 'dark', extraSchemeName: `theme-${n}` }
            );
          }
        }
        const Nr = h.createContext({
          colorScheme: 'dark',
          setColorScheme: () => {},
        });
        Nr.displayName = 'ColorSchemeContext';
        const vo = h.memo((e) => {
          const [t = 'dark', { save: n }] = Qe('colorScheme', 'dark');
          return (
            (0, h.useEffect)(() => {
              fe.emit('loadColorScheme', t);
            }, [t]),
            h.createElement(
              Nr.Provider,
              { value: { colorScheme: t, setColorScheme: n } },
              e.children
            )
          );
        });
        vo.displayName = 'ColorSchemeContextProvider';
        function Da() {
          const { colorScheme: e, setColorScheme: t } = (0, h.useContext)(Nr),
            { isDarkMode: n, extraSchemeName: o } = Ea(e);
          return {
            colorScheme: e,
            setColorScheme: t,
            isDarkMode: n,
            extraSchemeName: o,
          };
        }
        const yo = h.memo((e) =>
          h.createElement(po, null, h.createElement(vo, null, e.children))
        );
        yo.displayName = 'TcProvider';
        var Aa = r(71607),
          ho = r.n(Aa);
        const Pr = h.createContext({ replyMsg: null, setReplyMsg: ho() });
        Pr.displayName = 'ChatBoxContext';
        const Eo = h.memo((e) => {
          const [t, n] = (0, h.useState)(null);
          return h.createElement(
            Pr.Provider,
            { value: { replyMsg: t, setReplyMsg: n } },
            e.children
          );
        });
        Eo.displayName = 'ChatBoxContextProvider';
        function Do() {
          const e = (0, h.useContext)(Pr),
            t = (0, h.useCallback)(() => {
              e.setReplyMsg(null);
            }, [e.setReplyMsg]);
          return {
            hasContext: e.setReplyMsg !== ho(),
            replyMsg: e.replyMsg,
            setReplyMsg: e.setReplyMsg,
            clearReplyMsg: t,
          };
        }
        var Ia = Object.defineProperty,
          Na = Object.defineProperties,
          Pa = Object.getOwnPropertyDescriptors,
          Ao = Object.getOwnPropertySymbols,
          Oa = Object.prototype.hasOwnProperty,
          Ca = Object.prototype.propertyIsEnumerable,
          Io = (e, t, n) =>
            t in e
              ? Ia(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          ja = (e, t) => {
            for (var n in t || (t = {})) Oa.call(t, n) && Io(e, n, t[n]);
            if (Ao) for (var n of Ao(t)) Ca.call(t, n) && Io(e, n, t[n]);
            return e;
          },
          Ta = (e, t) => Na(e, Pa(t)),
          No = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function Sa(e, t) {
          return No(this, null, function* () {
            const n = yield Yn(e);
            if (n === null)
              throw new Error(W('\u627E\u4E0D\u5230\u79C1\u4FE1\u4F1A\u8BDD'));
            if (!n.members.includes(t))
              throw new Error(W('\u4F1A\u8BDD\u6CA1\u6709\u6743\u9650'));
            return yield Er(e), n;
          });
        }
        function Po(e) {
          return e.reduce((n, o) => Ta(ja({}, n), { [o.id]: o.nickname }), {});
        }
        function Oo(e, t) {
          return No(this, null, function* () {
            var n;
            if (pt(t.name)) return t.name;
            const o = t.members.filter((m) => m !== e),
              s = yield Promise.all(o.map((m) => Wn(m))),
              l = As().getState().user.friends,
              c = Po(l),
              i = s.map((m) => {
                var H;
                return c[m._id] ? c[m._id] : (H = m.nickname) != null ? H : '';
              }),
              a = i.length;
            return a === 1
              ? (n = i[0]) != null
                ? n
                : ''
              : a === 2
              ? `${i[0]}, ${i[1]}`
              : `${i[0]}, ${i[1]} ...`;
          });
        }
        function za() {
          const e = (0, h.useRef)(!1),
            t = (0, h.useCallback)(() => e.current, []);
          return (
            (0, h.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            t
          );
        }
        var xa = Object.defineProperty,
          La = Object.defineProperties,
          wa = Object.getOwnPropertyDescriptors,
          Co = Object.getOwnPropertySymbols,
          Ua = Object.prototype.hasOwnProperty,
          Fa = Object.prototype.propertyIsEnumerable,
          jo = (e, t, n) =>
            t in e
              ? xa(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Ra = (e, t) => {
            for (var n in t || (t = {})) Ua.call(t, n) && jo(e, n, t[n]);
            if (Co) for (var n of Co(t)) Fa.call(t, n) && jo(e, n, t[n]);
            return e;
          },
          Ba = (e, t) => La(e, wa(t));
        function gn(e, t = [], n = { loading: !1 }) {
          const o = (0, h.useRef)(0),
            s = za(),
            [l, c] = (0, h.useState)(n),
            i = (0, h.useCallback)((...a) => {
              const m = ++o.current;
              return (
                c((H) => Ba(Ra({}, H), { loading: !0 })),
                e(...a).then(
                  (H) => (
                    s() && m === o.current && c({ value: H, loading: !1 }), H
                  ),
                  (H) => (
                    s() && m === o.current && c({ error: H, loading: !1 }), H
                  )
                )
              );
            }, t);
          return [l, i];
        }
        function Mn(e, t = []) {
          const [n, o] = gn(e, t, { loading: !0 }),
            s = (0, h.useRef)(!1);
          return (
            (0, h.useEffect)(() => {
              s.current !== !0 && (t.length === 0 && (s.current = !0), o());
            }, [o]),
            n
          );
        }
        var ba = r(2031),
          Yt = r(47393),
          Qa = r(26226),
          Or = r.n(Qa);
        const Wa = { info: null, friends: [], friendRequests: [] },
          To = (0, Yt.oM)({
            name: 'user',
            initialState: Wa,
            reducers: {
              setUserInfo(e, t) {
                e.info = t.payload;
              },
              setUserInfoField(e, t) {
                const { fieldName: n, fieldValue: o } = t.payload;
                e.info !== null && Or()(e.info, [n], o);
              },
              setUserInfoExtra(e, t) {
                const { fieldName: n, fieldValue: o } = t.payload;
                e.info !== null && Or()(e.info, ['extra', n], o);
              },
              setFriendList(e, t) {
                e.friends = t.payload;
              },
              setFriendRequests(e, t) {
                e.friendRequests = t.payload;
              },
              appendFriend(e, t) {
                e.friends.some((n) => n === t.payload) ||
                  e.friends.push(t.payload);
              },
              removeFriend(e, t) {
                const n = t.payload,
                  o = e.friends.findIndex((s) => s.id === n);
                o >= 0 && e.friends.splice(o, 1);
              },
              appendFriendRequest(e, t) {
                e.friendRequests.some(({ _id: n }) => n === t.payload._id) ||
                  e.friendRequests.push(t.payload);
              },
              removeFriendRequest(e, t) {
                const n = e.friendRequests.findIndex(
                  ({ _id: o }) => o === t.payload
                );
                n >= 0 && e.friendRequests.splice(n, 1);
              },
              setFriendNickname(e, t) {
                const { friendId: n, nickname: o } = t.payload,
                  s = e.friends.find((l) => l.id === n);
                s && (s.nickname = o);
              },
            },
          }),
          Gt = To.actions,
          Ya = To.reducer;
        var Ga = r(3010),
          So = r.n(Ga),
          Ka = r(40916),
          zo = r.n(Ka),
          Za = r(77875),
          Ja = r.n(Za),
          ka = Object.defineProperty,
          xo = Object.getOwnPropertySymbols,
          Ha = Object.prototype.hasOwnProperty,
          Va = Object.prototype.propertyIsEnumerable,
          Lo = (e, t, n) =>
            t in e
              ? ka(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          mn = (e, t) => {
            for (var n in t || (t = {})) Ha.call(t, n) && Lo(e, n, t[n]);
            if (xo) for (var n of xo(t)) Va.call(t, n) && Lo(e, n, t[n]);
            return e;
          };
        const $a = {
            currentConverseId: null,
            converses: {},
            ack: {},
            inbox: [],
            lastMessageMap: {},
          },
          Kt = (0, Yt.oM)({
            name: 'chat',
            initialState: $a,
            reducers: {
              updateCurrentConverseId(e, t) {
                e.currentConverseId = t.payload;
              },
              setConverseInfo(e, t) {
                const n = t.payload._id,
                  o = e.converses[n]
                    ? mn({}, e.converses[n])
                    : {
                        messages: [],
                        hasFetchedHistory: !1,
                        hasMoreMessage: !0,
                      };
                e.converses[n] = mn(mn({}, o), t.payload);
              },
              appendConverseMessage(e, t) {
                var n;
                const { converseId: o, messages: s } = t.payload;
                if (!e.converses[o]) {
                  console.error(
                    '\u6CA1\u6709\u4F1A\u8BDD\u4FE1\u606F, \u8BF7\u5148\u8BBE\u7F6E\u4F1A\u8BDD\u4FE1\u606F'
                  );
                  return;
                }
                const l = zo()(
                  So()([...e.converses[o].messages, ...s], '_id'),
                  '_id',
                  'asc'
                );
                if (
                  ((e.converses[o].messages = l), e.currentConverseId !== o)
                ) {
                  const c =
                    (n = Ja()(l.filter((i) => !Jr(i._id)))) == null
                      ? void 0
                      : n._id;
                  pt(c) && (e.lastMessageMap[o] = c);
                }
              },
              appendLocalMessage(e, t) {
                const { author: n, localMessageId: o, payload: s } = t.payload,
                  { converseId: l, groupId: c, content: i, meta: a } = s;
                if (!e.converses[l]) {
                  console.error(
                    '\u6CA1\u6709\u4F1A\u8BDD\u4FE1\u606F, \u8BF7\u5148\u8BBE\u7F6E\u4F1A\u8BDD\u4FE1\u606F'
                  );
                  return;
                }
                const m = {
                    _id: o,
                    author: n,
                    groupId: c,
                    converseId: l,
                    content: i,
                    meta: a,
                    isLocal: !0,
                  },
                  H = zo()(
                    So()([...e.converses[l].messages, m], '_id'),
                    '_id',
                    'asc'
                  );
                e.converses[l].messages = H;
              },
              initialHistoryMessage(e, t) {
                const { converseId: n, historyMessages: o } = t.payload;
                if (!e.converses[n]) {
                  console.error(
                    '\u6CA1\u6709\u4F1A\u8BDD\u4FE1\u606F, \u8BF7\u5148\u8BBE\u7F6E\u4F1A\u8BDD\u4FE1\u606F'
                  );
                  return;
                }
                Kt.caseReducers.appendConverseMessage(
                  e,
                  Kt.actions.appendConverseMessage({
                    converseId: n,
                    messages: [...o],
                  })
                ),
                  o.length < 50 && (e.converses[n].hasMoreMessage = !1),
                  (e.converses[n].hasFetchedHistory = !0);
              },
              appendHistoryMessage(e, t) {
                const { converseId: n, historyMessages: o } = t.payload;
                if (!e.converses[n]) {
                  console.error(
                    '\u6CA1\u6709\u4F1A\u8BDD\u4FE1\u606F, \u8BF7\u5148\u8BBE\u7F6E\u4F1A\u8BDD\u4FE1\u606F'
                  );
                  return;
                }
                Kt.caseReducers.appendConverseMessage(
                  e,
                  Kt.actions.appendConverseMessage({
                    converseId: n,
                    messages: [...o],
                  })
                ),
                  o.length < 50 && (e.converses[n].hasMoreMessage = !1),
                  (e.converses[n].hasFetchedHistory = !0);
              },
              removeConverse(e, t) {
                const { converseId: n } = t.payload;
                !e.converses[n] || delete e.converses[n];
              },
              clearAllConverses(e) {
                e.converses = {};
              },
              setConverseAck(e, t) {
                const { converseId: n, lastMessageId: o } = t.payload;
                e.ack[n] = o;
              },
              updateMessageInfo(e, t) {
                var n;
                const { message: o } = t.payload,
                  s = (n = t.payload.messageId) != null ? n : o._id,
                  l = o.converseId;
                if (!l) {
                  console.warn('Not found converse id,', o);
                  return;
                }
                const c = e.converses[l];
                if (!c) {
                  console.warn('Not found converse,', l);
                  return;
                }
                const i = c.messages.findIndex((a) => a._id === s);
                i >= 0 && (c.messages[i] = mn(mn({}, c.messages[i]), o));
              },
              deleteMessageById(e, t) {
                const { converseId: n, messageId: o } = t.payload,
                  s = e.converses[n];
                if (!s) {
                  console.warn('Not found converse,', n);
                  return;
                }
                const l = s.messages.findIndex((c) => c._id === o);
                l >= 0 && s.messages.splice(l, 1);
              },
              setLastMessageMap(e, t) {
                const n = t.payload;
                Array.isArray(n) &&
                  n.forEach((o) => {
                    e.lastMessageMap[o.converseId] = o.lastMessageId;
                  });
              },
              appendMessageReaction(e, t) {
                const { converseId: n, messageId: o, reaction: s } = t.payload,
                  l = e.converses[n];
                if (!l) {
                  console.warn('Not found converse,', n);
                  return;
                }
                const c = l.messages.find((i) => i._id === o);
                if (!c) {
                  console.warn('Not found message,', o);
                  return;
                }
                Array.isArray(c.reactions) || (c.reactions = []),
                  c.reactions.push(s);
              },
              removeMessageReaction(e, t) {
                const { converseId: n, messageId: o, reaction: s } = t.payload,
                  l = e.converses[n];
                if (!l) {
                  console.warn('Not found converse,', n);
                  return;
                }
                const c = l.messages.find((a) => a._id === o);
                if (!c) {
                  console.warn('Not found message,', o);
                  return;
                }
                Array.isArray(c.reactions) || (c.reactions = []);
                const i = c.reactions.findIndex(
                  (a) => a.name === s.name && a.author === s.author
                );
                c.reactions.splice(i, 1);
              },
              setInboxList(e, t) {
                const n = t.payload;
                e.inbox = n;
              },
              appendInboxItem(e, t) {
                e.inbox.push(t.payload);
              },
              setInboxItemAck(e, t) {
                const n = t.payload,
                  o = e.inbox.find((s) => s._id === n);
                o && (o.readed = !0);
              },
            },
          }),
          ue = Kt.actions,
          Xa = Kt.reducer;
        var _a = Object.defineProperty,
          qa = Object.defineProperties,
          eu = Object.getOwnPropertyDescriptors,
          wo = Object.getOwnPropertySymbols,
          tu = Object.prototype.hasOwnProperty,
          nu = Object.prototype.propertyIsEnumerable,
          Uo = (e, t, n) =>
            t in e
              ? _a(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Et = (e, t) => {
            for (var n in t || (t = {})) tu.call(t, n) && Uo(e, n, t[n]);
            if (wo) for (var n of wo(t)) nu.call(t, n) && Uo(e, n, t[n]);
            return e;
          },
          Gn = (e, t) => qa(e, eu(t));
        const ru = { groups: {} },
          Fo = (0, Yt.oM)({
            name: 'group',
            initialState: ru,
            reducers: {
              appendGroups(e, t) {
                const n = t.payload;
                for (const o of n)
                  e.groups[o._id] = Et(Et({}, e.groups[o._id]), o);
              },
              updateGroup(e, t) {
                const n = t.payload,
                  o = n._id;
                e.groups[o] && (e.groups[o] = Et(Et({}, e.groups[o]), n));
              },
              removeGroup(e, t) {
                const n = t.payload;
                delete e.groups[n];
              },
              pinGroupPanel(e, t) {
                const { groupId: n, panelId: o } = t.payload;
                e.groups[n] &&
                  (e.groups[n] = Gn(Et({}, e.groups[n]), { pinnedPanelId: o }));
              },
              unpinGroupPanel(e, t) {
                const { groupId: n } = t.payload;
                e.groups[n] &&
                  (e.groups[n] = Gn(Et({}, e.groups[n]), {
                    pinnedPanelId: void 0,
                  }));
              },
              updateGroupConfig(e, t) {
                var n;
                const { groupId: o, configName: s, configValue: l } = t.payload,
                  c = e.groups[o];
                c &&
                  (e.groups[o] = Gn(Et({}, c), {
                    config: Gn(Et({}, (n = c.config) != null ? n : {}), {
                      [s]: l,
                    }),
                  }));
              },
            },
          }),
          pn = Fo.actions,
          ou = Fo.reducer,
          su = { panelWinUrls: [] },
          Ro = (0, Yt.oM)({
            name: 'ui',
            initialState: su,
            reducers: {
              addPanelWindowUrl(e, t) {
                const n = t.payload.url;
                e.panelWinUrls.push(n);
              },
              deletePanelWindowUrl(e, t) {
                const n = t.payload.url,
                  o = e.panelWinUrls.indexOf(n);
                e.panelWinUrls.splice(o, 1);
              },
            },
          }),
          au = Ro.actions,
          uu = Ro.reducer,
          iu = { networkStatus: 'initial', reconnectNum: 0 },
          Bo = (0, Yt.oM)({
            name: 'global',
            initialState: iu,
            reducers: {
              setNetworkStatus(e, t) {
                e.networkStatus = t.payload;
              },
              incReconnectNum(e) {
                e.reconnectNum += 1;
              },
            },
          }),
          Cr = Bo.actions,
          lu = Bo.reducer,
          cu = (0, ba.UY)({
            global: lu,
            user: Ya,
            chat: Xa,
            group: ou,
            ui: uu,
          });
        var Kn = r(99698);
        function Ee(e, t) {
          return (0, Kn.v9)(e, t);
        }
        const Zt = Kn.I0;
        function gl() {
          return useStore();
        }
        var du = r(61422),
          fu = r.n(du),
          gu = Object.defineProperty,
          bo = Object.getOwnPropertySymbols,
          Mu = Object.prototype.hasOwnProperty,
          mu = Object.prototype.propertyIsEnumerable,
          Qo = (e, t, n) =>
            t in e
              ? gu(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Wo = (e, t) => {
            for (var n in t || (t = {})) Mu.call(t, n) && Qo(e, n, t[n]);
            if (bo) for (var n of bo(t)) mu.call(t, n) && Qo(e, n, t[n]);
            return e;
          };
        const pu = ['_id', 'content', 'author'];
        class Yo {
          constructor(t) {
            this.payload = Wo({}, t);
          }
          hasReply() {
            const t = z()(this.payload, ['meta', 'reply']);
            return F()(t) ? !1 : t;
          }
          setReplyMsg(t) {
            F()(t) || Or()(this.payload, ['meta', 'reply'], Zr()(t, pu));
          }
          generatePayload() {
            return Wo({}, this.payload);
          }
        }
        var jr = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        const vu = () => fu()('localMessage_');
        function yu() {
          const e = Ee((i) => {
              var a;
              return (a = i.user.info) == null ? void 0 : a._id;
            }),
            t = Zt(),
            { hasContext: n, replyMsg: o, clearReplyMsg: s } = Do(),
            l = wt(o);
          return Jt((i) => {
            if (i.content === '') {
              Re(W('\u65E0\u6CD5\u53D1\u9001\u7A7A\u6D88\u606F'));
              return;
            }
            if (n === !0) {
              const m = new Yo(i);
              F()(l.current) || (m.setReplyMsg(l.current), s()),
                (i = m.generatePayload());
            }
            const a = vu();
            t(
              ue.appendLocalMessage({
                author: e,
                localMessageId: a,
                payload: i,
              })
            ),
              fn(i)
                .then((m) => {
                  t(
                    ue.deleteMessageById({
                      converseId: i.converseId,
                      messageId: a,
                    })
                  ),
                    t(
                      ue.appendConverseMessage({
                        converseId: i.converseId,
                        messages: [m],
                      })
                    ),
                    fe.emit('sendMessage', i);
                })
                .catch((m) => {
                  Re(m),
                    t(
                      ue.updateMessageInfo({
                        messageId: a,
                        message: { sendFailed: !0 },
                      })
                    );
                });
          });
        }
        function hu(e) {
          var t, n;
          const { converseId: o, isGroup: s } = e,
            l = Ee((Pe) => Pe.chat.converses[o]),
            c = Ee((Pe) => Pe.global.reconnectNum),
            i = (t = l == null ? void 0 : l.hasMoreMessage) != null ? t : !0,
            a = Zt(),
            m = (n = l == null ? void 0 : l.messages) != null ? n : [],
            H = Ee((Pe) => {
              var Oe;
              return (Oe = Pe.user.info) == null ? void 0 : Oe._id;
            });
          (0, h.useEffect)(
            () => (
              a(ue.updateCurrentConverseId(o)),
              () => {
                a(ue.updateCurrentConverseId(null));
              }
            ),
            [o]
          );
          const { loading: k, error: nt } = Mn(
              () =>
                jr(this, null, function* () {
                  if (!!H)
                    if (l) {
                      if (!l.hasFetchedHistory) {
                        const Pe = F()(l.messages[0])
                            ? void 0
                            : l.messages[0]._id,
                          Oe = yield et(o, Pe);
                        a(
                          ue.initialHistoryMessage({
                            converseId: o,
                            historyMessages: Oe,
                          })
                        );
                      }
                    } else {
                      if (s)
                        a(
                          ue.setConverseInfo({
                            _id: o,
                            name: '',
                            type: lt.Group,
                            members: [],
                          })
                        );
                      else {
                        const Oe = yield Sa(o, H);
                        a(ue.setConverseInfo(Oe));
                      }
                      const Pe = yield et(o);
                      a(
                        ue.initialHistoryMessage({
                          converseId: o,
                          historyMessages: Pe,
                        })
                      );
                    }
                }),
              [o, c, H]
            ),
            [{ loading: Ke }, jt] = zr(
              () =>
                jr(this, null, function* () {
                  const Pe = z()(m, [0, '_id']);
                  if (!pt(Pe) || i === !1) return;
                  const Oe = yield et(o, Pe);
                  a(
                    ue.appendHistoryMessage({
                      converseId: o,
                      historyMessages: Oe,
                    })
                  );
                }),
              [o, i, z()(m, [0, '_id'])]
            ),
            ke = Be(() =>
              jr(this, null, function* () {
                Ke || (yield jt());
              })
            ),
            Ht = yu();
          return {
            messages: m,
            loading: k,
            error: nt,
            isLoadingMore: Ke,
            hasMoreMessage: i,
            handleFetchMoreMessage: ke,
            handleSendMessage: Ht,
          };
        }
        function Eu(e) {
          const t = h.createContext(e.defaultValue);
          t.displayName = e.displayName;
          function n() {
            return h.useContext(t);
          }
          return { Context: t, useContext: n };
        }
        const { Context: Du, useContext: Au } = Eu({
            defaultValue: {},
            displayName: 'ConverseMessageContext',
          }),
          Go = h.memo((e) => {
            const { converseId: t, isGroup: n } = e,
              {
                messages: o,
                loading: s,
                error: l,
                isLoadingMore: c,
                hasMoreMessage: i,
                handleFetchMoreMessage: a,
                handleSendMessage: m,
              } = hu({ converseId: t, isGroup: n });
            return h.createElement(
              Du.Provider,
              {
                value: {
                  messages: o,
                  loading: s,
                  error: l,
                  isLoadingMore: c,
                  hasMoreMessage: i,
                  fetchMoreMessage: a,
                  sendMessage: m,
                },
              },
              e.children
            );
          });
        Go.displayName = 'ConverseMessageProvider';
        const Tr = h.createContext({ groupInfo: null });
        Tr.displayName = 'GroupInfoContext';
        const Ko = h.memo((e) =>
          h.createElement(
            Tr.Provider,
            { value: { groupInfo: e.groupInfo } },
            e.children
          )
        );
        Ko.displayName = 'GroupInfoContextProvider';
        function Iu() {
          return (0, h.useContext)(Tr).groupInfo;
        }
        var Nu = r(13432);
        const Zo = h.memo((e) => h.createElement(Nu.c, null, e.children));
        Zo.displayName = 'Trans';
        function Be(e) {
          const t = (0, h.useRef)(e);
          t.current = (0, h.useMemo)(() => e, [e]);
          const n = (0, h.useRef)();
          return (
            n.current ||
              (n.current = function (...o) {
                return t.current.apply(this, o);
              }),
            n.current
          );
        }
        const Pu = ((e) => (t, n) => {
          const o = (0, h.useRef)(!1);
          e(
            () => () => {
              o.current = !1;
            },
            []
          ),
            e(() => {
              if (!o.current) o.current = !0;
              else return t();
            }, n);
        })(h.useEffect);
        function Ou(e) {
          function t(n, o) {
            let s;
            try {
              s = e();
            } catch (k) {
              console.error(k);
            }
            const l = (k) =>
                (o == null ? void 0 : o.serializer)
                  ? o == null
                    ? void 0
                    : o.serializer(k)
                  : JSON.stringify(k),
              c = (k) =>
                (o == null ? void 0 : o.deserializer)
                  ? o == null
                    ? void 0
                    : o.deserializer(k)
                  : JSON.parse(k);
            function i() {
              try {
                const k = s == null ? void 0 : s.getItem(n);
                if (k) return c(k);
              } catch (k) {
                console.error(k);
              }
              return L()(o == null ? void 0 : o.defaultValue)
                ? o == null
                  ? void 0
                  : o.defaultValue()
                : o == null
                ? void 0
                : o.defaultValue;
            }
            const [a, m] = (0, h.useState)(() => i());
            return (
              Pu(() => {
                m(i());
              }, [n]),
              [
                a,
                Be((k) => {
                  const nt = L()(k) ? k(a) : k;
                  if ((m(nt), j()(nt))) s == null || s.removeItem(n);
                  else
                    try {
                      s == null || s.setItem(n, l(nt));
                    } catch (Ke) {
                      console.error(Ke);
                    }
                }),
              ]
            );
          }
          return t;
        }
        var Cu = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        const Sr = Kr('fetchAvailableServices', () =>
          Cu(void 0, null, function* () {
            const { data: e } = yield R.get('/api/gateway/health');
            return e.services;
          })
        );
        var ju = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function Tu() {
          const [{ loading: e, value: t }, n] = gn(() => Sr());
          (0, h.useEffect)(() => {
            n();
          }, []);
          const o = Be(() =>
            ju(this, null, function* () {
              Sr.clearCache(), n();
            })
          );
          return { loading: e, availableServices: t, refetch: o };
        }
        var Su = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function zr(e, t = []) {
          const [{ loading: n, value: o }, s] = gn(
            (...l) =>
              Su(this, null, function* () {
                try {
                  return yield e(...l);
                } catch (c) {
                  Re(c), console.error('[useAsyncRequest] error:', c);
                }
              }),
            t
          );
          return [{ loading: n, value: o }, s];
        }
        var zu = r(92238),
          xu = r.n(zu),
          Lu = Object.defineProperty,
          Jo = Object.getOwnPropertySymbols,
          wu = Object.prototype.hasOwnProperty,
          Uu = Object.prototype.propertyIsEnumerable,
          ko = (e, t, n) =>
            t in e
              ? Lu(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Ho = (e, t) => {
            for (var n in t || (t = {})) wu.call(t, n) && ko(e, n, t[n]);
            if (Jo) for (var n of Jo(t)) Uu.call(t, n) && ko(e, n, t[n]);
            return e;
          },
          Vo = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function $o() {
          const e = (0, ra.NL)(),
            { data: t, isLoading: n } = (0, lo.a)(
              [Qn.userSettings],
              () => Dr(),
              { staleTime: 10 * 60 * 1e3 }
            ),
            [{ loading: o }, s] = zr(
              (l) =>
                Vo(this, null, function* () {
                  e.setQueryData([Qn.userSettings], () => Ho(Ho({}, t), l));
                  const c = yield so(l);
                  e.setQueryData([Qn.userSettings], () => c),
                    fe.emit('userSettingsUpdate', c);
                }),
              [e]
            );
          return { settings: t ?? {}, setSettings: s, loading: n || o };
        }
        function Xo(e, t) {
          var n;
          const { settings: o, setSettings: s, loading: l } = $o();
          return {
            value: (n = o[e]) != null ? n : t,
            setValue: (c) =>
              Vo(this, null, function* () {
                return s({ [e]: c });
              }),
            loading: l,
          };
        }
        function _o() {
          const { value: e = [], setValue: t } = Xo(
              'messageNotificationMuteList',
              []
            ),
            n = Be((c) => {
              t([...e, c]);
            }),
            o = Be((c) => {
              t(xu()(e, c));
            }),
            s = Be((c) => {
              e.includes(c) ? o(c) : n(c);
            }),
            l = Be((c, i) =>
              i ? e.includes(c) || e.includes(i) : e.includes(c)
            );
          return {
            mutedList: e,
            mute: n,
            unmute: o,
            toggleMute: s,
            checkIsMuted: l,
          };
        }
        function Fu() {
          const { checkIsMuted: e } = _o();
          It('receiveMessage', (t) => {
            !t ||
              e(t.converseId, t.groupId) ||
              fe.emit('receiveUnmutedMessage', t);
          });
        }
        var Ru = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function Bu(e, t = !1) {
          const { value: n = {} } = Mn(
            () =>
              Ru(this, null, function* () {
                return Wn(e, t);
              }),
            [e, t]
          );
          return n ?? {};
        }
        var bu = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function xr(e = []) {
          const { value: t = [] } = Mn(
            () =>
              bu(this, null, function* () {
                return yield Promise.all(e.map((o) => Wn(o)));
              }),
            [e.join(',')]
          );
          return t;
        }
        function Qu(e) {
          return xr(e).map((n) => n.nickname);
        }
        var Wu = Object.defineProperty,
          Yu = Object.defineProperties,
          Gu = Object.getOwnPropertyDescriptors,
          qo = Object.getOwnPropertySymbols,
          Ku = Object.prototype.hasOwnProperty,
          Zu = Object.prototype.propertyIsEnumerable,
          es = (e, t, n) =>
            t in e
              ? Wu(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Ju = (e, t) => {
            for (var n in t || (t = {})) Ku.call(t, n) && es(e, n, t[n]);
            if (qo) for (var n of qo(t)) Zu.call(t, n) && es(e, n, t[n]);
            return e;
          },
          ku = (e, t) => Yu(e, Gu(t));
        function Hu(e, t = []) {
          const [n, o] = gn(e, t, { loading: !0 });
          (0, h.useEffect)(() => {
            o();
          }, [o]);
          const s = (0, h.useCallback)(() => o(), [o]);
          return ku(Ju({}, n), { refresh: s });
        }
        const Jt = Be;
        function Vu(e, t, n) {
          const o = (0, h.useRef)(!1),
            s = Jt(e),
            l = Jt(t);
          (0, h.useLayoutEffect)(() => {
            o.current || (s() === !0 && (l(), (o.current = !0)));
          }, n);
        }
        function ml(e, t = 0) {
          const n = useRef(!1),
            o = useRef(),
            s = useRef(e),
            l = useCallback(() => n.current, []),
            c = useCallback(() => {
              (n.current = !1),
                o.current && clearTimeout(o.current),
                (o.current = setTimeout(() => {
                  (n.current = !0), s.current();
                }, t));
            }, [t]),
            i = useCallback(() => {
              (n.current = null), o.current && clearTimeout(o.current);
            }, []);
          return (
            useEffect(() => {
              s.current = e;
            }, [e]),
            useEffect(() => (c(), i), [t]),
            [l, i, c]
          );
        }
        function pl(e, t = 0, n = []) {
          const [o, s, l] = useTimeoutFn(e, t);
          return useEffect(l, n), [o, s];
        }
        function vl(e, t) {
          const [n, o] = useState(e);
          useLayoutEffect(() => {
            o(e);
          }, [e]);
          const s = useCallback(() => {
            t(n);
          }, [n, t]);
          return [n, o, s];
        }
        function $u(e, t, n) {
          const o = n == null ? void 0 : n.immediate,
            s = wt(e),
            l = (0, h.useRef)();
          return (
            (0, h.useEffect)(() => {
              if (!(typeof t != 'number' || t < 0))
                return (
                  o && s.current(),
                  (l.current = window.setInterval(() => {
                    s.current();
                  }, t)),
                  () => {
                    l.current && window.clearInterval(l.current);
                  }
                );
            }, [t]),
            (0, h.useCallback)(() => {
              l.current && window.clearInterval(l.current);
            }, [])
          );
        }
        function Xu(e, t) {
          const [n, o] = (0, h.useState)(e);
          (0, h.useLayoutEffect)(() => {
            o(e);
          }, [e]);
          const s = Jt((l) => {
            o(l), t(l);
          });
          return [n, s];
        }
        function yl(e) {
          const t = useRef();
          return (
            useEffect(() => {
              t.current = e;
            }),
            t.current
          );
        }
        const _u = (e) => {
            (0, h.useEffect)(e, []);
          },
          qu = (e) => {
            const t = (0, h.useRef)(e);
            (t.current = e), _u(() => () => t.current());
          },
          ei = (e) => {
            const t = (0, h.useRef)(0),
              [n, o] = (0, h.useState)(e),
              s = (0, h.useCallback)((l) => {
                cancelAnimationFrame(t.current),
                  (t.current = requestAnimationFrame(() => {
                    o(l);
                  }));
              }, []);
            return (
              qu(() => {
                cancelAnimationFrame(t.current);
              }),
              [n, s]
            );
          };
        function ti(e) {
          const t = Ee((n) => {
            var o;
            return (o = n.user.friends.find((s) => s.id === e)) == null
              ? void 0
              : o.nickname;
          });
          return pt(t) ? t : null;
        }
        function ts() {
          const e = Ee((n) => n.user.friends);
          return (0, h.useMemo)(() => Po(e), [e]);
        }
        function ns(e) {
          const { dataSource: t, filterFn: n } = e,
            [o, s] = (0, h.useState)(''),
            l = o !== '',
            c = (0, h.useMemo)(() => t.filter((i) => n(i, o)), [t, o]);
          return {
            searchText: o,
            setSearchText: s,
            isSearching: l,
            searchResult: c,
          };
        }
        function ni(e) {
          const t = ts(),
            n = (0, h.useMemo)(() => e.filter(Boolean), [e]),
            {
              searchText: o,
              setSearchText: s,
              isSearching: l,
              searchResult: c,
            } = ns({
              dataSource: n,
              filterFn: (i, a) =>
                !!(
                  (t[i._id] && t[i._id].includes(a)) ||
                  i.nickname.includes(a)
                ),
            });
          return {
            searchText: o,
            setSearchText: s,
            isSearching: l,
            searchResult: c,
          };
        }
        function ri(e) {
          const [t, n] = (0, h.useState)(e);
          return (
            (0, h.useLayoutEffect)(() => {
              (0, Kn.wU)(t, e) || n(e);
            }, [e]),
            t
          );
        }
        function oi(e, t) {
          const n = Be(t);
          (0, h.useLayoutEffect)(() => {
            n();
          }, e);
        }
        var hl = r(31676),
          si = Object.defineProperty,
          rs = Object.getOwnPropertySymbols,
          ai = Object.prototype.hasOwnProperty,
          ui = Object.prototype.propertyIsEnumerable,
          os = (e, t, n) =>
            t in e
              ? si(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          ss = (e, t) => {
            for (var n in t || (t = {})) ai.call(t, n) && os(e, n, t[n]);
            if (rs) for (var n of rs(t)) ui.call(t, n) && os(e, n, t[n]);
            return e;
          };
        function El(e, t, { onChangeFound: n, onNoChangeFound: o } = {}) {
          const s = useRef(t);
          useEffect(() => {
            if (!isDevelopment) return;
            const l = Object.keys(ss(ss({}, s.current), t)),
              c = {};
            l.forEach((i) => {
              s.current[i] !== t[i] &&
                (c[i] = {
                  from: s.current[i],
                  to: t[i],
                  changedKeys:
                    t[i] && typeof t[i] == 'object'
                      ? Object.keys(s.current[i])
                          .map((a) =>
                            _get(s.current, [i, a]) === _get(t, [i, a]) ? '' : a
                          )
                          .filter(Boolean)
                      : void 0,
                  isDeepEqual: _isEqual(s.current[i], t[i]),
                });
            }),
              Object.keys(c).length
                ? n
                  ? n({ changesObj: c })
                  : console.log('[why-did-you-update]', e, {
                      changes: parse(stringify(c)),
                      props: { from: s.current, to: t },
                    })
                : o && o(),
              (s.current = t);
          });
        }
        const [ii, li] = ot();
        var kt = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function as(e) {
          return kt(this, null, function* () {
            const { data: t } = yield R.post('/api/friend/request/add', {
              to: e,
            });
            return t;
          });
        }
        function us(e) {
          return kt(this, null, function* () {
            yield R.post('/api/friend/request/accept', { requestId: e });
          });
        }
        function is(e) {
          return kt(this, null, function* () {
            yield R.post('/api/friend/request/deny', { requestId: e });
          });
        }
        function ls(e) {
          return kt(this, null, function* () {
            yield R.post('/api/friend/request/cancel', { requestId: e });
          });
        }
        function cs(e) {
          return kt(this, null, function* () {
            yield R.post('/api/friend/removeFriend', { friendUserId: e });
          });
        }
        function ci(e, t) {
          return kt(this, null, function* () {
            yield R.post('/api/friend/setFriendNickname', {
              targetId: e,
              nickname: t,
            });
          });
        }
        var ds = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function di(e) {
          return ds(this, null, function* () {
            yield R.post('/api/chat/inbox/ack', { inboxItemIds: e });
          });
        }
        function fi() {
          return ds(this, null, function* () {
            yield R.post('/api/chat/inbox/clear');
          });
        }
        function gi() {
          const e = Ee((o) => o.chat.converses),
            t = Ee((o) => o.chat.lastMessageMap),
            n = (0, h.useMemo)(
              () =>
                Object.entries(e)
                  .filter(([, o]) => [lt.DM, lt.Multi].includes(o.type))
                  .map(([, o]) => o),
              [e]
            );
          return (0, h.useMemo)(
            () =>
              n.sort((o, s) => {
                var l, c;
                return ((l = t[o._id]) != null ? l : '') <
                  ((c = t[s._id]) != null ? c : '')
                  ? 1
                  : -1;
              }),
            [n, t]
          );
        }
        var Mi = r(77837),
          mi = r.n(Mi);
        const pi = mi()(
          (e, t) => {
            an(e, t);
          },
          1e3,
          { leading: !0, trailing: !0 }
        );
        function vi(e) {
          const t = Zt(),
            n = Ee((i) => i.chat.lastMessageMap[e]),
            o = (0, h.useRef)('');
          o.current = Ee((i) => {
            var a;
            return (a = i.chat.ack[e]) != null ? a : '';
          });
          const s = Be((i, a) => {
              Jr(a) ||
                (pt(o.current) && a <= o.current) ||
                (t(ue.setConverseAck({ converseId: i, lastMessageId: a })),
                pi(i, a),
                (o.current = a));
            }),
            l = Be((i) => {
              s(e, i);
            }),
            c = Be(() => {
              l(n);
            });
          return { updateConverseAck: l, markConverseAllAck: c };
        }
        function fs() {
          return Ee((e) => e.user.info);
        }
        function vn() {
          var e;
          return (e = fs()) == null ? void 0 : e._id;
        }
        var yi = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        function hi(e) {
          const t = vn(),
            n = Ee((s) => s.user.friends),
            { value: o = '' } = Mn(
              () =>
                yi(this, null, function* () {
                  return !e || !pt(t) ? '' : Oo(t, e);
                }),
              [
                t,
                e == null ? void 0 : e.name,
                e == null ? void 0 : e.members.join(','),
                n,
              ]
            );
          return o;
        }
        function Ei() {
          const e = Ee((s) => s.chat.ack),
            t = Ee((s) => s.chat.lastMessageMap),
            n = Zt();
          return {
            ensureAckInfo: Jt((s) => {
              (e[s] === void 0 || t[s] === void 0) &&
                ea(s).then((l) => {
                  var c, i;
                  ((c = l.ack) == null ? void 0 : c.lastMessageId) &&
                    n(
                      ue.setConverseAck({
                        converseId: s,
                        lastMessageId: l.ack.lastMessageId,
                      })
                    ),
                    ((i = l.lastMessage) == null ? void 0 : i.lastMessageId) &&
                      n(
                        ue.setLastMessageMap([
                          {
                            converseId: s,
                            lastMessageId: l.lastMessage.lastMessageId,
                          },
                        ])
                      );
                });
            }),
          };
        }
        function gs(e) {
          const t = Ee((l) => l.chat.ack),
            n = Ee((l) => l.chat.lastMessageMap),
            { ensureAckInfo: o } = Ei();
          return (
            (0, h.useEffect)(() => {
              e.forEach((l) => o(l));
            }, [e]),
            e.map((l) =>
              t[l] === void 0 && n[l] !== void 0 ? !0 : n[l] > t[l]
            )
          );
        }
        var Di = r(6494),
          Ai = r.n(Di);
        function Ct(e) {
          var t;
          return (t = Ee((n) => n.group.groups[e])) != null ? t : null;
        }
        function Ms(e) {
          var t;
          const n = Ct(e),
            o = (t = n == null ? void 0 : n.members) != null ? t : [];
          return (0, h.useMemo)(() => o.map((l) => l.userId), [o]);
        }
        function Ii(e) {
          const t = Ms(e),
            n = xr(t);
          return Ai()(n);
        }
        function ms(e) {
          const t = Ct(e);
          return (0, h.useMemo)(() => {
            var n;
            return (n = t == null ? void 0 : t.panels) != null ? n : [];
          }, [t]);
        }
        function Ni(e, t) {
          const n = ms(e);
          return (0, h.useMemo)(() => {
            var o;
            return (o = n.find((s) => s.id === t)) != null ? o : null;
          }, [e, t, n]);
        }
        function Pi(e, t) {
          const n = Ct(e),
            o = vn();
          return pt(t)
            ? (n == null ? void 0 : n.owner) === t
            : typeof o == 'string' && (n == null ? void 0 : n.owner) === o;
        }
        function Oi(e) {
          return gs([e])[0];
        }
        function Ci(e) {
          return e.type === Mt.TEXT;
        }
        function ji(e) {
          const t = Ct(e),
            n = Ee((l) => l.chat.lastMessageMap),
            o = Zt();
          return {
            markGroupAllAck: Be(() => {
              var l;
              const c = (
                (l = t == null ? void 0 : t.panels) != null ? l : []
              ).filter(Ci);
              for (const i of c) {
                const a = i.id,
                  m = n[a];
                a &&
                  m &&
                  (o(ue.setConverseAck({ converseId: a, lastMessageId: m })),
                  an(a, m));
              }
            }),
          };
        }
        function Ti(e, t) {
          const n = Ee((o) => {
            var s, l;
            return (l =
              (s = o.group.groups[e]) == null
                ? void 0
                : s.members.find((c) => c.userId === t)) == null
              ? void 0
              : l.muteUntil;
          });
          return !n || new Date(n).valueOf() < new Date().valueOf() ? !1 : n;
        }
        function ps(e) {
          var t, n;
          const o = Ct(e),
            s = vn();
          if (!o || !s) return [];
          if (o.owner === s) return Lr().map((m) => m.key);
          const l = o.members,
            c = o.roles,
            i =
              (n =
                (t = l.find((m) => m.userId === s)) == null
                  ? void 0
                  : t.roles) != null
                ? n
                : [],
            a = it()([
              ...gt()(
                i.map((m) => {
                  var H, k;
                  return (k =
                    (H = c.find((nt) => String(nt._id) === m)) == null
                      ? void 0
                      : H.permissions) != null
                    ? k
                    : [];
                })
              ),
              ...o.fallbackPermissions,
            ]);
          return (
            (0, h.useDebugValue)({
              groupRoles: c,
              userRoles: i,
              userPermissions: a,
              fallbackPermissions: o.fallbackPermissions,
            }),
            a
          );
        }
        function Si(e, t) {
          var n, o, s, l, c;
          const i = Ct(e),
            a = vn();
          if (!i || !a) return [];
          const m = i.panels.find((ke) => ke.id === t);
          if (!m) return [];
          const H = (n = m.fallbackPermissions) != null ? n : [],
            k = (o = m.permissionMap) != null ? o : {},
            nt = (s = k[a]) != null ? s : [],
            Ke =
              (c =
                (l = i.members.find((ke) => ke.userId === a)) == null
                  ? void 0
                  : l.roles) != null
                ? c
                : [];
          return it()([
            ...gt()(
              Ke.map((ke) => {
                var Ht;
                return (Ht = k[ke]) != null ? Ht : [];
              })
            ),
            ...nt,
            ...H,
          ]);
        }
        function zi(e, t) {
          const n = ps(e),
            o = (0, h.useMemo)(
              () => t.map((s) => n.includes(s)),
              [n.join(','), t.join(',')]
            );
          return (
            (0, h.useDebugValue)({
              groupId: e,
              userPermissions: n,
              checkedPermissions: t,
              result: o,
            }),
            o
          );
        }
        function xi(e, t, n) {
          const o = ps(e),
            s = Si(e, t),
            l = it()([...o, ...s]),
            c = (0, h.useMemo)(
              () => n.map((i) => l.includes(i)),
              [l.join(','), n.join(',')]
            );
          return (
            (0, h.useDebugValue)({
              groupId: e,
              panelId: t,
              fullPermissions: l,
              checkedPermissions: n,
              result: c,
            }),
            c
          );
        }
        function vs() {
          return Ee((e) => {
            var t;
            return (t = e.chat.inbox) != null ? t : [];
          });
        }
        function Li(e) {
          var t;
          return (t = vs().find((o) => o._id === e)) != null ? t : null;
        }
        var wi = Object.defineProperty,
          ys = Object.getOwnPropertySymbols,
          Ui = Object.prototype.hasOwnProperty,
          Fi = Object.prototype.propertyIsEnumerable,
          hs = (e, t, n) =>
            t in e
              ? wi(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n),
          Es = (e, t) => {
            for (var n in t || (t = {})) Ui.call(t, n) && hs(e, n, t[n]);
            if (ys) for (var n of ys(t)) Fi.call(t, n) && hs(e, n, t[n]);
            return e;
          },
          Ri = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function Bi(e, t) {
          t.dispatch(Cr.setNetworkStatus('initial')),
            Ds(e, t),
            bi(e, t),
            e.onReconnect(() => {
              console.warn(
                '\u56E0\u4E3A\u65AD\u7EBF\u91CD\u8FDE\u89E6\u53D1\u91CD\u65B0\u540C\u6B65\u8FDC\u7A0B\u6570\u636E'
              ),
                Ds(e, t),
                t.dispatch(ue.clearAllConverses()),
                t.dispatch(Cr.incReconnectNum());
            }),
            fe.on('updateNetworkStatus', (n) => {
              t.dispatch(Cr.setNetworkStatus(n));
            });
        }
        function Ds(e, t) {
          console.log('\u521D\u59CB\u5316Redux\u4E0A\u4E0B\u6587...'),
            e.request('chat.converse.findAndJoinRoom').catch((n) => {
              throw (
                (console.error(n),
                at(
                  W(
                    '\u65E0\u6CD5\u52A0\u5165\u623F\u95F4, \u60A8\u5C06\u65E0\u6CD5\u83B7\u53D6\u5230\u6700\u65B0\u7684\u4FE1\u606F, \u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5'
                  ),
                  'error'
                ),
                new Error('findAndJoinRoom failed'))
              );
            }),
            e.request('friend.getAllFriends').then((n) => {
              t.dispatch(Gt.setFriendList(n));
            }),
            e.request('friend.request.allRelated').then((n) => {
              t.dispatch(Gt.setFriendRequests(n));
            }),
            e.request('user.dmlist.getAllConverse').then((n) => {
              (n ?? []).forEach((o) =>
                Ri(this, null, function* () {
                  try {
                    const s = yield Yn(o);
                    t.dispatch(ue.setConverseInfo(s));
                  } catch (s) {
                    console.error(s);
                  }
                })
              );
            }),
            e.request('group.getUserGroups').then((n) => {
              t.dispatch(pn.appendGroups(n));
            }),
            e.request('chat.inbox.all').then((n) => {
              t.dispatch(ue.setInboxList(n));
            });
        }
        function bi(e, t) {
          e.listen('friend.add', ({ userId: n }) => {
            if (typeof n != 'string') {
              console.error('\u9519\u8BEF\u7684\u4FE1\u606F', n);
              return;
            }
            t.dispatch(Gt.appendFriend({ id: n }));
          }),
            e.listen('friend.request.add', (n) => {
              t.dispatch(Gt.appendFriendRequest(n));
            }),
            e.listen('friend.request.remove', ({ requestId: n }) => {
              t.dispatch(Gt.removeFriendRequest(n));
            }),
            e.listen('chat.message.add', (n) => {
              const o = n.converseId,
                s = t.getState().chat.converses[o],
                l = () => {
                  t.dispatch(
                    ue.appendConverseMessage({ converseId: o, messages: [n] })
                  );
                };
              s
                ? l()
                : n.groupId
                ? t.dispatch(
                    ue.setLastMessageMap([
                      { converseId: o, lastMessageId: n._id },
                    ])
                  )
                : Yn(o).then((c) => {
                    [lt.DM, lt.Multi].includes(c.type) && Er(c._id),
                      t.dispatch(ue.setConverseInfo(c)),
                      l();
                  }),
                fe.emit('receiveMessage', n);
            }),
            e.listen('chat.message.update', (n) => {
              t.dispatch(ue.updateMessageInfo({ message: n }));
            }),
            e.listen(
              'chat.message.delete',
              ({ converseId: n, messageId: o }) => {
                t.dispatch(
                  ue.deleteMessageById({ converseId: n, messageId: o })
                );
              }
            ),
            e.listen(
              'chat.message.addReaction',
              ({ converseId: n, messageId: o, reaction: s }) => {
                t.dispatch(
                  ue.appendMessageReaction({
                    converseId: n,
                    messageId: o,
                    reaction: s,
                  })
                );
              }
            ),
            e.listen(
              'chat.message.removeReaction',
              ({ converseId: n, messageId: o, reaction: s }) => {
                t.dispatch(
                  ue.removeMessageReaction({
                    converseId: n,
                    messageId: o,
                    reaction: s,
                  })
                );
              }
            ),
            e.listen('chat.converse.updateDMConverse', (n) => {
              t.dispatch(ue.setConverseInfo(n));
            }),
            e.listen('group.add', (n) => {
              t.dispatch(pn.appendGroups([n]));
            }),
            e.listen('group.updateInfo', (n) => {
              t.dispatch(pn.updateGroup(n));
            }),
            e.listen('group.remove', ({ groupId: n }) => {
              t.dispatch(pn.removeGroup(n));
            }),
            e.listen('chat.inbox.append', (n) => {
              t.dispatch(ue.appendInboxItem(n));
            }),
            e.listen('chat.inbox.updated', () => {
              e.request('chat.inbox.all').then((n) => {
                t.dispatch(ue.setInboxList(n));
              });
            }),
            e.listen('config.updateClientConfig', (n) => {
              Nt.setState((o) => Es(Es({}, o), n));
            }),
            ii.forEach(({ eventName: n, eventFn: o }) => {
              e.listen(n, o);
            });
        }
        function Qi() {
          return (0, Yt.xC)({
            reducer: cu,
            middleware: (t) => t({ serializableCheck: !1 }),
            devTools: !1,
          });
        }
        const Wi = Qi();
        function As() {
          return Wi;
        }
        function Yi(e, t) {
          return gt()(e.map((n, o) => (o === 0 ? [n] : [t, n])));
        }
        var Gi = r(35708),
          Je = r.n(Gi),
          Ki = r(79201),
          Zi = r.n(Ki),
          Ji = r(58104),
          ki = r.n(Ji),
          Dl = r(57570);
        Je().extend(Zi()),
          Je().extend(ki()),
          Je().locale('zh-cn'),
          re((e) => {
            if (e === 'en-US') {
              Je().locale('en');
              return;
            }
            Je().locale('zh-cn');
          });
        function Is(e) {
          return Je()(e).isSame(Je()(), 'd');
        }
        function Al(e) {
          const t = dayjs(e);
          return Is(t) ? t.fromNow() : t.format('YYYY-MM-DD HH:mm:ss');
        }
        function Hi(e) {
          const t = Je()(e);
          return Is(t) ? Ns(t) : Ps(t);
        }
        function Vi(e, t) {
          return Math.abs(e.valueOf() - t.valueOf()) > 15 * 60 * 1e3;
        }
        function Ns(e) {
          return Je()(e).format('HH:mm');
        }
        function Ps(e) {
          return Je()(e).format('YYYY-MM-DD HH:mm:ss');
        }
        function Il(e) {
          return dayjs(e).toNow();
        }
        function $i(e) {
          return Je()(e).fromNow();
        }
        function Xi(e) {
          return Je().duration(e, 'ms').humanize();
        }
        function _i(e) {
          if (typeof e != 'string') return !1;
          try {
            return JSON.parse(e), !0;
          } catch (t) {
            return !1;
          }
        }
        var qi = (e, t, n) =>
          new Promise((o, s) => {
            var l = (a) => {
                try {
                  i(n.next(a));
                } catch (m) {
                  s(m);
                }
              },
              c = (a) => {
                try {
                  i(n.throw(a));
                } catch (m) {
                  s(m);
                }
              },
              i = (a) =>
                a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
            i((n = n.apply(e, t)).next());
          });
        const el = Symbol('AllPermission'),
          me = {
            core: {
              viewPanel: 'core.viewPanel',
              message: 'core.message',
              invite: 'core.invite',
              unlimitedInvite: 'core.unlimitedInvite',
              editInvite: 'core.editInvite',
              groupDetail: 'core.groupDetail',
              groupBaseInfo: 'core.groupBaseInfo',
              groupConfig: 'core.groupConfig',
              manageUser: 'core.manageUser',
              managePanel: 'core.managePanel',
              manageInvite: 'core.manageInvite',
              manageRoles: 'core.manageRoles',
              deleteMessage: 'core.deleteMessage',
            },
          },
          Lr = () => [
            {
              key: me.core.viewPanel,
              title: W('\u67E5\u770B\u9762\u677F'),
              desc: W('\u5141\u8BB8\u6210\u5458\u67E5\u770B\u9762\u677F'),
              default: !0,
              panel: !0,
            },
            {
              key: me.core.message,
              title: W('\u53D1\u9001\u6D88\u606F'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u5728\u6587\u5B57\u9891\u9053\u53D1\u9001\u6D88\u606F'
              ),
              default: !0,
              panel: [Mt.TEXT],
            },
            {
              key: me.core.invite,
              title: W('\u9080\u8BF7\u94FE\u63A5'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u521B\u5EFA\u9080\u8BF7\u94FE\u63A5'
              ),
              default: !1,
            },
            {
              key: me.core.unlimitedInvite,
              title: W('\u4E0D\u9650\u65F6\u9080\u8BF7\u94FE\u63A5'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u521B\u5EFA\u4E0D\u9650\u65F6\u9080\u8BF7\u94FE\u63A5'
              ),
              default: !1,
              required: [me.core.invite],
            },
            {
              key: me.core.editInvite,
              title: W('\u7F16\u8F91\u9080\u8BF7\u94FE\u63A5'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u7F16\u8F91\u9080\u8BF7\u94FE\u63A5'
              ),
              default: !1,
              required: [me.core.unlimitedInvite],
            },
            {
              key: me.core.groupDetail,
              title: W('\u67E5\u770B\u7FA4\u7EC4\u8BE6\u60C5'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u67E5\u770B\u7FA4\u7EC4\u8BE6\u60C5'
              ),
              default: !1,
            },
            {
              key: me.core.groupBaseInfo,
              title: W('\u4FEE\u6539\u7FA4\u7EC4\u57FA\u672C\u4FE1\u606F'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u4FEE\u6539\u7FA4\u7EC4\u57FA\u672C\u4FE1\u606F'
              ),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.groupConfig,
              title: W('\u4FEE\u6539\u7FA4\u7EC4\u914D\u7F6E'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u4FEE\u6539\u7FA4\u7EC4\u914D\u7F6E'
              ),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.manageUser,
              title: W('\u5141\u8BB8\u7BA1\u7406\u7528\u6237'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u7BA1\u7406\u7528\u6237\uFF0C\u5982\u7981\u8A00\u3001\u79FB\u9664\u7528\u6237\u7B49\u64CD\u4F5C'
              ),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.managePanel,
              title: W('\u5141\u8BB8\u7BA1\u7406\u9891\u9053'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u67E5\u770B\u7BA1\u7406\u9891\u9053'
              ),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.manageInvite,
              title: W('\u5141\u8BB8\u7BA1\u7406\u9080\u8BF7\u94FE\u63A5'),
              desc: W(
                '\u5141\u8BB8\u6210\u5458\u7BA1\u7406\u9080\u8BF7\u94FE\u63A5'
              ),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.manageRoles,
              title: W('\u5141\u8BB8\u7BA1\u7406\u8EAB\u4EFD\u7EC4'),
              desc: W('\u5141\u8BB8\u6210\u5458\u7BA1\u7406\u8EAB\u4EFD\u7EC4'),
              default: !1,
              required: [me.core.groupDetail],
            },
            {
              key: me.core.deleteMessage,
              title: W('\u5220\u9664\u6D88\u606F'),
              desc: W('\u5141\u8BB8\u5220\u9664\u7528\u6237\u4FE1\u606F'),
              default: !1,
              required: [me.core.groupDetail],
            },
          ];
        function Os() {
          return Lr()
            .filter((e) => e.default === !0)
            .map((e) => e.key);
        }
        function tl(e) {
          return qi(this, null, function* () {
            yield Wt(e, 'fallbackPermissions', Os());
          });
        }
        var nl = r(85848),
          rl = r.n(nl),
          ol = (e, t, n) =>
            new Promise((o, s) => {
              var l = (a) => {
                  try {
                    i(n.next(a));
                  } catch (m) {
                    s(m);
                  }
                },
                c = (a) => {
                  try {
                    i(n.throw(a));
                  } catch (m) {
                    s(m);
                  }
                },
                i = (a) =>
                  a.done ? o(a.value) : Promise.resolve(a.value).then(l, c);
              i((n = n.apply(e, t)).next());
            });
        function sl(e) {
          return ol(this, arguments, function* (t, n = {}) {
            var o;
            const s = new FormData();
            s.append('file', t),
              s.append('usage', (o = n.usage) != null ? o : 'unknown');
            const l = on().uploadFileLimit;
            if (t.size > l)
              throw (
                (Re(
                  `${W(
                    '\u4E0A\u4F20\u5931\u8D25, \u652F\u6301\u7684\u6587\u4EF6\u6700\u5927\u5927\u5C0F\u4E3A:'
                  )} ${rl()(l, { base: 2 })}`
                ),
                new Error('File Too Large'))
              );
            try {
              const { data: c } = yield R.post('/upload', s, {
                onUploadProgress(i) {
                  i.lengthComputable &&
                    typeof n.onProgress == 'function' &&
                    n.onProgress(i.loaded / i.total, i);
                },
              });
              return c;
            } catch (c) {
              throw (
                (at(
                  `${W('\u4E0A\u4F20\u5931\u8D25')}: ${W(
                    '\u53EF\u80FD\u662F\u6587\u4EF6\u4F53\u79EF\u8FC7\u5927'
                  )}`,
                  'error'
                ),
                console.error(
                  `${W('\u4E0A\u4F20\u5931\u8D25')}: ${z()(c, 'message')}`
                ),
                c)
              );
            }
          });
        }
      },
      70877: (A, N, r) => {
        'use strict';
        r.d(N, { _: () => M, c: () => f });
        var u = r(52983),
          y = r(54782);
        let f = () => {
          throw new Error('route navigate not init');
        };
        const M = u.memo(() => ((f = (0, y.useNavigate)()), null));
        M.displayName = 'AppRouterApi';
      },
      67706: (A, N, r) => {
        'use strict';
        r.d(N, { S: () => D });
        var u = r(75526),
          y = r(52983),
          f = r(26288),
          M = r(6739);
        const v = { error: void 0, info: { componentStack: '' } };
        class D extends y.Component {
          constructor() {
            super(...arguments);
            (this.state = v),
              (this.reset = () => {
                this.setState(v);
              });
          }
          componentDidCatch(C, T) {
            this.setState({ error: C, info: T });
          }
          render() {
            const { message: C, description: T, children: K } = this.props,
              { error: F, info: x } = this.state,
              j = x && x.componentStack ? x.componentStack : null,
              O = typeof C == 'undefined' ? (F || '').toString() : C,
              I = typeof T == 'undefined' ? j : T;
            return F
              ? y.createElement(M.t, {
                  text: y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      'h3',
                      null,
                      (0, f.t)(
                        '\u9875\u9762\u51FA\u73B0\u4E86\u4E00\u4E9B\u95EE\u9898'
                      )
                    ),
                    y.createElement('p', { title: I ?? '' }, O),
                    y.createElement(
                      u.Z,
                      { size: 'small', onClick: this.reset },
                      (0, f.t)('\u91CD\u8BD5')
                    )
                  ),
                })
              : K;
          }
        }
      },
      13893: (A, N, r) => {
        'use strict';
        r.d(N, { L: () => x, A: () => j.A });
        var u = r(52983),
          y = r(52081),
          f = Object.defineProperty,
          M = Object.defineProperties,
          v = Object.getOwnPropertyDescriptors,
          D = Object.getOwnPropertySymbols,
          E = Object.prototype.hasOwnProperty,
          C = Object.prototype.propertyIsEnumerable,
          T = (O, I, P) =>
            I in O
              ? f(O, I, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: P,
                })
              : (O[I] = P),
          K = (O, I) => {
            for (var P in I || (I = {})) E.call(I, P) && T(O, P, I[P]);
            if (D) for (var P of D(I)) C.call(I, P) && T(O, P, I[P]);
            return O;
          },
          F = (O, I) => M(O, v(I));
        const x = (O) => {
          const I = (0, y.P)((P) => P.cachedComponents);
          return u.createElement(
            u.Fragment,
            null,
            O.children,
            u.createElement(
              'div',
              { className: 'keep-alive-overlay-host' },
              Object.entries(I).map(([P, S]) => {
                const { visible: w, element: z, rect: U } = S;
                return u.createElement(
                  'div',
                  {
                    id: `cache-${P}`,
                    style: F(K({ display: w ? 'block' : 'none' }, U), {
                      position: 'fixed',
                    }),
                    key: P,
                  },
                  z
                );
              })
            )
          );
        };
        x.displayName = 'KeepAliveOverlayHost';
        var j = r(74312);
      },
      52081: (A, N, r) => {
        'use strict';
        r.d(N, { P: () => f });
        var u = r(36350),
          y = r(50748);
        const f = (0, u.create)()(
          (0, y.immer)((M) => ({
            cachedComponents: {},
            mount: (v, D) => {
              M((E) => {
                const C = E.cachedComponents;
                if (C[v]) {
                  E.cachedComponents[v].visible = !0;
                  return;
                }
                C[v] = {
                  visible: !0,
                  element: D,
                  rect: { left: 0, top: 0, width: 0, height: 0 },
                };
              });
            },
            show: (v) => {
              M((D) => {
                !D.cachedComponents[v] || (D.cachedComponents[v].visible = !0);
              });
            },
            hide: (v) => {
              M((D) => {
                !D.cachedComponents[v] || (D.cachedComponents[v].visible = !1);
              });
            },
            updateRect: (v, D) => {
              M((E) => {
                !E.cachedComponents[v] || (E.cachedComponents[v].rect = D);
              });
            },
          }))
        );
      },
      74312: (A, N, r) => {
        'use strict';
        r.d(N, { A: () => x });
        var u = r(52983),
          y = r(52081),
          f = r(73352),
          M = r.n(f),
          v = r(22398),
          D = Object.defineProperty,
          E = Object.getOwnPropertySymbols,
          C = Object.prototype.hasOwnProperty,
          T = Object.prototype.propertyIsEnumerable,
          K = (j, O, I) =>
            O in j
              ? D(j, O, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: I,
                })
              : (j[O] = I),
          F = (j, O) => {
            for (var I in O || (O = {})) C.call(O, I) && K(j, I, O[I]);
            if (E) for (var I of E(O)) T.call(O, I) && K(j, I, O[I]);
            return j;
          };
        function x(j, O) {
          return (I) => {
            const P = (0, u.useRef)(null),
              S = M()(I, ['className', 'style']),
              { mount: w, hide: z, updateRect: U } = (0, y.P)(),
              L = (0, u.useMemo)(
                () =>
                  typeof O.cacheId == 'function' ? O.cacheId(S) : O.cacheId,
                [S]
              );
            return (
              (0, u.useEffect)(
                () => (
                  w(L, u.createElement(j, F({ key: L }, S))),
                  () => {
                    z(L);
                  }
                ),
                [L]
              ),
              (0, u.useEffect)(() => {
                if (!P.current) return;
                const B = new ResizeObserver((Ce) => {
                  Ce.forEach((De) => {
                    const { target: je } = De;
                    if (!je.parentElement) return;
                    const ne = je.getBoundingClientRect();
                    U(L, {
                      left: ne.left,
                      top: ne.top,
                      width: ne.width,
                      height: ne.height,
                    });
                  });
                });
                B.observe(P.current);
                const Y = (0, v.g$)(P.current);
                function Q(Ce) {
                  if (P.current && Y.includes(Ce.target)) {
                    const De = P.current.getBoundingClientRect();
                    U(L, {
                      left: De.left,
                      top: De.top,
                      width: De.width,
                      height: De.height,
                    });
                  }
                }
                const { start: ee, end: h } = (0, v.SQ)(Q);
                return (
                  window.addEventListener('transitionend', h),
                  window.addEventListener('transitionstart', ee),
                  () => {
                    P.current &&
                      (B.unobserve(P.current),
                      window.removeEventListener('transitionend', h),
                      window.removeEventListener('transitionstart', ee));
                  }
                );
              }, [L]),
              u.createElement('div', {
                id: `withKeepAlive${L}`,
                ref: P,
                className: I.className,
                style: I.style,
              })
            );
          };
        }
      },
      80474: (A, N, r) => {
        'use strict';
        r.d(N, { P: () => S });
        var u = r(52983),
          y = r(2697),
          f = r(23463),
          M = r(38887),
          v = r(26288),
          D = r(170),
          E = r(61422),
          C = r.n(E),
          T = Object.defineProperty,
          K = Object.getOwnPropertySymbols,
          F = Object.prototype.hasOwnProperty,
          x = Object.prototype.propertyIsEnumerable,
          j = (w, z, U) =>
            z in w
              ? T(w, z, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: U,
                })
              : (w[z] = U),
          O = (w, z) => {
            for (var U in z || (z = {})) F.call(z, U) && j(w, U, z[U]);
            if (K) for (var U of K(z)) x.call(z, U) && j(w, U, z[U]);
            return w;
          };
        function I(w, z) {
          const U = new Date().valueOf();
          return w.then((L) => {
            const B = new Date().valueOf();
            return console.debug(`[Loadable] load ${z} usage: ${B - U}ms`), L;
          });
        }
        function P(w) {
          const z = C()('Loadable');
          return (
            D.ZP.loading({
              content: (0, v.t)('\u52A0\u8F7D\u4E2D...'),
              key: z,
              duration: 0,
            }),
            w.then((U) => (D.ZP.destroy(z), U))
          );
        }
        function S(w, z) {
          return (0, y.ZP)((U) => {
            let L = w(U);
            return (
              (0, v.YQu)(z == null ? void 0 : z.componentName) &&
                (L = I(L, String(z == null ? void 0 : z.componentName))),
              (z == null ? void 0 : z.showLoading) === !0 && (L = P(L)),
              (0, f.Z)(L, 200, { delayRejection: !1 })
            );
          }, O({ fallback: u.createElement(M.T, null) }, z));
        }
      },
      18300: (A, N, r) => {
        'use strict';
        r.d(N, { g: () => M });
        var u = r(14517),
          y = r(52983),
          f = r(38887);
        const M = y.memo((v) => {
          const { spinning: D = !1, className: E, style: C, tip: T } = v;
          return y.createElement(
            'div',
            { className: (0, u.Z)('relative', E), style: C },
            y.createElement(
              'div',
              {
                className: (0, u.Z)(
                  'absolute inset-0 z-10 bg-white bg-opacity-20 flex justify-center items-center transition-opacity duration-100',
                  { 'opacity-0 pointer-events-none': !D, 'opacity-100': D }
                ),
              },
              y.createElement(f.T, { tip: T })
            ),
            v.children
          );
        });
        M.displayName = 'Loading';
      },
      38887: (A, N, r) => {
        'use strict';
        r.d(N, { T: () => M });
        var u = r(52983),
          y = r(26288),
          f = r(67434);
        const M = u.memo((v) => {
          var D;
          return u.createElement(
            'div',
            null,
            u.createElement(f.$, null),
            (D = v.tip) != null ? D : (0, y.t)('\u52A0\u8F7D\u4E2D...')
          );
        });
        M.displayName = 'LoadingSpinner';
      },
      84208: (A, N, r) => {
        'use strict';
        r.d(N, {
          AB: () => Te,
          Mr: () => Ae,
          VW: () => Ze,
          _5: () => ft,
          aW: () => $e,
          h7: () => Qe,
          vR: () => Ue,
        });
        var u = r(52983),
          y = r(45563),
          f = r.n(y),
          M = r(14698),
          v = r.n(M),
          D = r(77875),
          E = r.n(D),
          C = r(69966),
          T = r.n(C),
          K = r(76705),
          F = r.n(K),
          x = r(71607),
          j = r.n(x),
          O = r(442),
          I = r(75526),
          P = r(75283),
          S = r(93540),
          w = r(29603),
          z = r(14517),
          U = r(89935),
          L = r(22398),
          B = r(67706),
          Y = r(26288),
          Q = Object.defineProperty,
          ee = Object.defineProperties,
          h = Object.getOwnPropertyDescriptors,
          Ce = Object.getOwnPropertySymbols,
          De = Object.prototype.hasOwnProperty,
          je = Object.prototype.propertyIsEnumerable,
          ne = (G, V, X) =>
            V in G
              ? Q(G, V, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: X,
                })
              : (G[V] = X),
          we = (G, V) => {
            for (var X in V || (V = {})) De.call(V, X) && ne(G, X, V[X]);
            if (Ce) for (var X of Ce(V)) je.call(V, X) && ne(G, X, V[X]);
            return G;
          },
          dt = (G, V) => ee(G, h(V)),
          rt = (G, V, X) =>
            new Promise((de, We) => {
              var Ye = (W) => {
                  try {
                    Se(X.next(W));
                  } catch (Xe) {
                    We(Xe);
                  }
                },
                Fe = (W) => {
                  try {
                    Se(X.throw(W));
                  } catch (Xe) {
                    We(Xe);
                  }
                },
                Se = (W) =>
                  W.done ? de(W.value) : Promise.resolve(W.value).then(Ye, Fe);
              Se((X = X.apply(G, V)).next());
            });
        const ot = (G, V) => G.addEventListener('transitionend', V, !1),
          st = u.createContext({ closeModal: j() }),
          ve = u.memo((G) => {
            const {
                visible: V,
                onChangeVisible: X,
                closable: de = !1,
                maskClosable: We = !0,
              } = G,
              [Ye, Fe] = (0, u.useState)(!0),
              Se = (0, u.useCallback)(() => {
                Fe(!1);
              }, []),
              W = (0, u.useCallback)(() => {
                We !== !1 && Se();
              }, [We, Se]);
            return V === !1
              ? null
              : u.createElement(
                  w.Z,
                  {
                    in: Ye,
                    classNames: 'modal-anim',
                    timeout: 200,
                    addEndListener: ot,
                    onExited: () => {
                      Ye === !1 && f()(X) && X(!1);
                    },
                    appear: !0,
                  },
                  u.createElement(
                    'div',
                    {
                      className:
                        'absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center z-10',
                      onClick: W,
                      'data-tc-role': 'modal-mask',
                    },
                    u.createElement(
                      st.Provider,
                      { value: { closeModal: Se } },
                      u.createElement(
                        'div',
                        {
                          className:
                            'modal-inner bg-content-light dark:bg-content-dark rounded overflow-auto relative z-10',
                          style: { maxHeight: '80vh', maxWidth: '80vw' },
                          onClick: L.UW,
                          'data-tc-role': 'modal',
                        },
                        de === !0 &&
                          u.createElement(S.JO, {
                            className:
                              'absolute right-2.5 top-3.5 text-xl z-10 cursor-pointer',
                            icon: 'mdi:close',
                            onClick: Se,
                          }),
                        u.createElement(B.S, null, G.children)
                      )
                    )
                  )
                );
          });
        ve.displayName = 'Modal';
        const Ve = [];
        function Ae(G) {
          v()(G) && (G = E()(Ve)),
            typeof G == 'number' && (T()(Ve, G), (0, O.i6)(G));
        }
        function Qe(G, V) {
          const X = (0, O.rk)(
            u.createElement(
              ve,
              dt(we({}, V), {
                visible: !0,
                onChangeVisible: (de) =>
                  rt(this, null, function* () {
                    de === !1 &&
                      (typeof (V == null ? void 0 : V.onCloseModal) ==
                        'function' && (yield V.onCloseModal()),
                      Ae(X));
                  }),
              }),
              G
            )
          );
          return Ve.push(X), X;
        }
        function ft(G) {
          var V;
          const X = Qe(
            u.createElement(
              Te,
              {
                title:
                  (V = G.title) != null
                    ? V
                    : (0, Y.t)('\u786E\u8BA4\u64CD\u4F5C'),
              },
              u.createElement(
                'h3',
                { className: 'text-center pb-6' },
                G.content
              ),
              u.createElement(
                'div',
                { className: 'space-x-2 text-right' },
                u.createElement(
                  I.Z,
                  {
                    onClick: () => {
                      var de;
                      (de = G.onCancel) == null || de.call(G), Ae(X);
                    },
                  },
                  (0, Y.t)('\u53D6\u6D88')
                ),
                u.createElement(
                  I.Z,
                  {
                    type: 'primary',
                    onClick: () => {
                      G.onConfirm(), Ae(X);
                    },
                  },
                  (0, Y.t)('\u786E\u8BA4')
                )
              )
            ),
            { onCloseModal: G.onCancel }
          );
        }
        function Ze(G) {
          var V, X;
          ft({
            onConfirm: G.onConfirm,
            onCancel: G.onCancel,
            title:
              (V = G.title) != null
                ? V
                : (0, Y.t)(
                    '\u786E\u8BA4\u8981\u8FDB\u884C\u8BE5\u64CD\u4F5C\u4E48?'
                  ),
            content:
              (X = G.content) != null
                ? X
                : (0, Y.t)('\u8BE5\u64CD\u4F5C\u65E0\u6CD5\u88AB\u64A4\u56DE'),
          });
        }
        function $e(G) {
          return new Promise((V) => {
            Ze(
              dt(we({}, G), { onConfirm: () => V(!0), onCancel: () => V(!1) })
            );
          });
        }
        function Ue() {
          const { closeModal: G } = (0, u.useContext)(st);
          return { closeModal: G };
        }
        const Te = u.memo((G) => {
          const V = (0, U.d)(),
            X = F()(G.title)
              ? u.createElement(
                  P.Z.Title,
                  { level: 4, className: 'text-center mb-4' },
                  G.title
                )
              : null;
          return u.createElement(
            'div',
            {
              className: (0, z.Z)('tc-modal', 'p-4', G.className),
              style: we({ minWidth: V ? 290 : 420 }, G.style),
            },
            X,
            G.children
          );
        });
        Te.displayName = 'ModalWrapper';
      },
      442: (A, N, r) => {
        'use strict';
        r.d(N, { $2: () => M, i6: () => E, rk: () => D });
        var u = r(52983),
          y = r(26288);
        const f = new y.QEo(),
          {
            PortalHost: M,
            PortalRender: v,
            add: D,
            remove: E,
          } = (0, y.x9K)({
            hostName: 'default',
            eventEmitter: f,
            renderManagerView: (C) =>
              u.createElement('div', { className: 'z-10' }, C),
          });
      },
      6739: (A, N, r) => {
        'use strict';
        r.d(N, { t: () => v });
        var u = r(52983);
        const y =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMjE1Ljc1MSAxMzMuOTM4TDIxNS41NzcgMTM0LjA3N0wyMTUuNDM4IDEzNC4yNTFDMjEzLjg0OCAxMzYuMjM4IDIxMS4yNSAxMzkuMDA0IDIwOC40NDggMTQxLjI1M0MyMDcuMDQ5IDE0Mi4zNzYgMjA1LjY0MiAxNDMuMzM1IDIwNC4zMiAxNDQuMDA2QzIwMi45NzcgMTQ0LjY4NyAyMDEuODU5IDE0NSAyMDEgMTQ1QzE5OC43NTcgMTQ1IDE5Ny4zNTMgMTQ0LjQ3MiAxOTYuMjgzIDE0My43MzFDMTk1LjE0IDE0Mi45MzkgMTk0LjIzOSAxNDEuODE4IDE5My4xIDE0MC4zQzE5Mi4xNDYgMTM5LjAyNyAxOTAuNDUxIDEzNy42MjcgMTg4LjUxMSAxMzYuMzAyQzE4Ni41MjIgMTM0Ljk0MyAxODQuMTA2IDEzMy41NSAxODEuNTU0IDEzMi4zMjNDMTc5LjAwNSAxMzEuMDk3IDE3Ni4yODEgMTMwLjAxNiAxNzMuNjc1IDEyOS4zMDVDMTcxLjEwMiAxMjguNjAyIDE2OC40OTIgMTI4LjIxNyAxNjYuMjM2IDEyOC41MThDMTU5LjU1OCAxMjkuNDA4IDE1NS45NTQgMTI5LjM3NiAxNTQuMDEgMTI5LjA3MkMxNTMuMDU0IDEyOC45MjMgMTUyLjU5OCAxMjguNzIxIDE1Mi4zOTkgMTI4LjYwNUMxNTIuMjQ4IDEyOC41MTcgMTUyLjIxMSAxMjguNDYxIDE1Mi4xNjYgMTI4LjM5NEwxNTIuMTY0IDEyOC4zOTFMMTUxLjg5MSAxMjcuOThMMTUxLjQ1OCAxMjcuNzQ0QzE1MS4xMjQgMTI3LjU2MiAxNTAuNjY1IDEyNy4wMzggMTUwLjMyNyAxMjUuNTdDMTUwIDEyNC4xNDkgMTQ5Ljg4NyAxMjIuMjg0IDE0OS44NSAxMjAuMDY2QzE0OS44MzYgMTE5LjI1OCAxNDkuODM0IDExOC40MDIgMTQ5LjgzMSAxMTcuNTE2QzE0OS44MjEgMTEzLjg3MyAxNDkuODA5IDEwOS43MjYgMTQ5LjAxMSAxMDYuMzA4QzE0OS4wMjUgMTA1LjY0MiAxNDguOTMgMTA0Ljc1NiAxNDguNDM2IDEwMy45OUMxNDguMTA1IDEwMy40NzcgMTQ3LjU4OSAxMDMuMDE1IDE0Ni44NzMgMTAyLjc5M0MxNDYuMTg3IDEwMi41ODEgMTQ1LjUxMyAxMDIuNjUxIDE0NC45NDIgMTAyLjgyMUMxNDMuODY0IDEwMy4xNDIgMTQyLjczMyAxMDMuOTQ1IDE0MS41MjYgMTA1LjA3QzE0MC4yNzMgMTA2LjIzNyAxMzguNzYgMTA3LjkyMyAxMzYuOTI1IDExMC4yNjdDMTI5LjU3IDExOS42NjUgMTIwLjY4OSAxMzcuMTUyIDExNy4xODggMTQ0LjY1NEwxMTcuMTMgMTQ0Ljc3N0wxMTcuMDkgMTQ0LjkwNkMxMTYuNzUgMTQ1Ljk5OCAxMTYuMzAyIDE0Ny4yODggMTE1LjggMTQ4LjcyOUMxMTQuNjkgMTUxLjkyMSAxMTMuMzIxIDE1NS44NTYgMTEyLjMwNyAxNjAuMDI4QzExMC44MTEgMTY2LjE4MiAxMDkuOTU1IDE3My4yNjggMTExLjU0OCAxODAuNDM0QzExNC4yMSAxOTIuNDE3IDEyMy4zODQgMjAzLjU4OCAxMzAuODg1IDIxMC4zMDJDMTMwLjE1OSAyMTUuMjQ1IDEyNy45MiAyMTkuNzUxIDEyNC45NzMgMjI0LjY0OUMxMjQuMTEgMjI2LjA4NCAxMjMuMTggMjI3LjU2MSAxMjIuMjE2IDIyOS4wOUMxMTkuNzMzIDIzMy4wMzQgMTE3LjAzMSAyMzcuMzI0IDExNC43MDEgMjQyLjEyN0MxMTAuNjMgMjUwLjUxNyAxMDYuNjg3IDI1OC40MzUgMTAyLjkxIDI2Ni4wMTlDOTIuMTYxNyAyODcuNjAxIDgyLjc2MSAzMDYuNDc3IDc1LjYyMzggMzI1LjgwN0M2My41Mjk1IDM1OC41NjMgNjAuNDcxMiAzOTQuMzgzIDYyLjUxNDYgNDExLjI0MUM2NC41NzE5IDQyOC4yMTQgNzUuMzQ5OCA0NTQuNDExIDEwMy4xMDYgNDY4LjI4OUMxMjQuMTEgNDc4Ljc5MSAxNDEuNjEzIDQ4MS40NzQgMTQ4Ljc0OSA0ODEuNTA4QzE1NS4zOTYgNDg3LjI0OSAxNzIuOTE4IDQ5Ny40NzUgMTk1LjkxNSA0OTcuNUMyMTAuMzE3IDQ5OC43MDkgMjI5LjQwNCA0OTMuOTE4IDIzNy4xMiA0OTEuNDAxTDIzNy4yMzQgNDkxLjM2NEwyMzcuMzQzIDQ5MS4zMTRMMzA4LjI5NyA0NTguMzM1QzMxMy45MjQgNDU2LjA1NiAzMjMuMjYyIDQ1My4xNDQgMzMyLjkzMSA0NTEuODMyQzM0Mi43MTYgNDUwLjUwNCAzNTIuMzk0IDQ1MC44NzkgMzU4Ljk5MiA0NTQuNzI4QzM2Ny45MDEgNDU5LjkyNCAzNzEuNDg5IDQ2My4yNTIgMzczLjU1OCA0NjYuMTZDMzc0LjYwNiA0NjcuNjMyIDM3NS4zMDcgNDY5LjA1NCAzNzYuMTMxIDQ3MC43NDlMMzc2LjE4MyA0NzAuODU2QzM3Ni45ODkgNDcyLjUxNiAzNzcuOTAzIDQ3NC4zOTUgMzc5LjMyMSA0NzYuNTg3QzM4Mi4yNzkgNDgxLjE1OCAzODYuNjc0IDQ4NC44MDMgMzkxLjg1OSA0ODYuMDFDMzk3LjEzNyA0ODcuMjM5IDQwMi45MTUgNDg1Ljg2NyA0MDguMzM4IDQ4MC45ODdDNDEyLjk1OSA0NzYuODI3IDQxMy44NzggNDcxLjUwOSA0MTMuMjMyIDQ2Ni43NzlDNDEyLjYxNCA0NjIuMjYgNDEwLjU2NSA0NTguMTI4IDQwOC43OTUgNDU1LjU3NkM0MDYuMjYyIDQ0OC41NDcgMzk1LjkxMiA0MzIuODcyIDM3My40MiA0MjEuMjI0QzM2MS42NjYgNDE1LjEzNyAzNDYuMDc3IDQxNC44MjYgMzMxLjY1MSA0MTYuNzNDMzE3LjE1OCA0MTguNjQyIDMwMy40NyA0MjIuODQxIDI5NS4yNTQgNDI2LjE0NEwyOTUuMTczIDQyNi4xNzdMMjk1LjA5NiA0MjYuMjE2QzI4MC45NzEgNDMzLjM3OCAyNjMuOTExIDQ0MC43MjYgMjQ4LjYzMyA0NDYuNTk2QzIzMy4zMDMgNDUyLjQ4NSAyMTkuOTQgNDU2LjgxOCAyMTMuMTQ4IDQ1OC4wMzFDMjEyLjUzNiA0NTguMTQxIDIxMS45NjMgNDU4LjI1NSAyMTEuMzk1IDQ1OC4zNjdDMjA5LjUyNSA0NTguNzM5IDIwNy43MTggNDU5LjA5OSAyMDQuNzgxIDQ1OS4yMzdDMjAxLjI3OCA0NTkuNDAyIDE5Ni4xODcgNDU5LjI0MiAxODcuNzcyIDQ1OC4zMDdDMTkwLjQwMyA0NTAuNDk0IDE5MS4zNDQgNDQwLjE0OSAxOTEuNDk4IDQzNS41ODlDMTkyLjAwMyA0MjYuNDcyIDE5MS40OTkgNDE5Ljk1NyAxOTAuNzI0IDQxNS4yMzhDMTkwLjA5NCA0MTEuNDA4IDE4OS4yOCA0MDguNzU5IDE4OC43NDQgNDA3LjAxNUMxODguNjIgNDA2LjYxMyAxODguNTExIDQwNi4yNTkgMTg4LjQyMyA0MDUuOTUxQzE4Ni41NDEgMzk5LjM2MiAxNzcuNDQyIDM2OS41MSAxNzIuNDE1IDM1NS40MTVDMTcwLjk5NiAzNDkuODU4IDE2OS4yNzYgMzQ0LjAxNyAxNjcuNDU0IDMzNy44MzFDMTYzLjYyMSAzMjQuODE4IDE1OS4zNCAzMTAuMjggMTU2LjQ3MSAyOTMuNjZDMTU1Ljk1MyAyOTAuNjYxIDE1NS40NTEgMjg3LjkwNCAxNTQuOTc4IDI4NS4zMDRDMTUyLjgwMyAyNzMuMzY1IDE1MS4yMjkgMjY0LjcyIDE1MS41IDI1MS4wNEMxNTEuNjg1IDI0MS42NyAxNTIuNDk2IDIzMi43NSAxNTMuNzM3IDIyNy40NTdDMTU0LjM1NyAyMjQuODE0IDE1NS4wMTMgMjIzLjQ3MyAxNTUuNjM4IDIyMi43MjlDMTU2LjE0OCAyMjIuMTIxIDE1Ni43NDYgMjIxLjc4MSAxNTcuNzI2IDIyMS41MDlDMTcyLjYzNSAyMjEuOTk5IDE4Ny42ODUgMjIxLjk4NiAyMDIuMiAyMTEuMUMyMDguMTY1IDIwNi42MjYgMjEyLjY3IDE5OS43NiAyMTUuODc0IDE5My4xNjFDMjE5LjA5IDE4Ni41MzcgMjIxLjA5MSAxNzkuOTgyIDIyMS45NTYgMTc1LjkxNkwyMjEuOTcxIDE3NS44NDdMMjIxLjk4MSAxNzUuNzc2QzIyMi45NzUgMTY4LjY1IDIyNSAxNTIuNDY3IDIyNSAxNDUuNUMyMjUgMTQyLjAxIDIyNC43NDQgMTM5LjUgMjI0LjQgMTM3Ljc1MUMyMjQuMjI4IDEzNi44NzggMjI0LjAyOSAxMzYuMTY2IDIyMy44MTQgMTM1LjYwNEMyMjMuNjI0IDEzNS4xMDggMjIzLjM0NyAxMzQuNTE4IDIyMi45MTQgMTM0LjA4NkMyMjEuNTk3IDEzMi43NjggMjIwLjAxNSAxMzIuNDggMjE4LjY4MSAxMzIuNjdDMjE3LjQzNSAxMzIuODQ3IDIxNi4zODUgMTMzLjQzMSAyMTUuNzUxIDEzMy45MzhaIiBmaWxsPSIjNDIzQzNDIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4NCjxwYXRoIGQ9Ik0zOTYuMjkzIDE4OS44MjJMMzk2LjMwMSAxODkuODE2TDM5Ni4zMDkgMTg5LjgxQzQwMC44MDcgMTg2LjU1NCA0MDQuODk0IDE4Mi41ODIgNDA4LjU3NSAxNzcuOTA4QzQxMi40MTggMTczLjEzIDQxNS42MDEgMTY3LjQ1OSA0MTguMTQxIDE2MC45MjNDNDIxLjQ0MyAxNTIuNDMxIDQyMi42NDEgMTQzLjg1OSA0MjEuNzA4IDEzNS4yM0M0MjAuODY1IDEyNi42NjQgNDE4LjEyMiAxMTguNTY2IDQxMy41IDExMC45NTJDNDA4LjkxNyAxMDMuMjU3IDQwMi41OTUgOTYuMjY1IDM5NC41NzggODkuOTY2QzM4Ni42NjEgODMuNTk3MSAzNzcuMzI0IDc4LjMzNDEgMzY2LjU5MSA3NC4xNjE2QzM1OS43NjggNzEuNTA5NCAzNTIuNDAyIDY5Ljc4MjggMzQ0LjUwMyA2OC45NzFMMzQ0LjQ5NiA2OC45NzAzQzMzNi42NDQgNjguMTg5MSAzMjkuMDE4IDY4LjYzNjYgMzIxLjYyNyA3MC4zMjE1QzMxNC4yMTUgNzEuOTMxMyAzMDcuNDM0IDc0Ljk5MjQgMzAxLjI5OSA3OS40OTYyTDMwMS4yOTEgNzkuNTAyN0wzMDEuMjgyIDc5LjUwOTJDMjk1LjEyNSA4NC4xMzM2IDI5MC41MjMgOTAuNDQxNCAyODcuNDQ5IDk4LjM0ODNDMjg1LjI4NiAxMDMuOTEzIDI4NC4xNDIgMTA4Ljk3NiAyODQuMTExIDExMy41MDZMMjg0LjExMSAxMTMuNTI2TDI4NC4xMTIgMTEzLjU0N0MyODQuMTcyIDExNy45MDkgMjg0LjYyOSAxMjEuNzI5IDI4NS41MTYgMTI0Ljk3NkwyODUuNTI3IDEyNS4wMTZMMjg1LjU0IDEyNS4wNTZDMjg2LjUxOCAxMjguMTI1IDI4Ny42IDEzMC42MjYgMjg4LjgyMyAxMzIuNDdMMjg4Ljg0NSAxMzIuNTA0TDI4OC44NjggMTMyLjUzN0MyODkuNDI2IDEzMy4zMDggMjg5Ljg2NSAxMzMuOTExIDI5MC4xODUgMTM0LjM0NEMyOTAuMzcyIDEzNC41OTYgMjkwLjU1MSAxMzQuODM3IDI5MC42OTYgMTM1LjAyQzI5MS4yMTggMTM1Ljk3OCAyOTEuODU4IDEzNi44MyAyOTIuNjY3IDEzNy40NDNMMjkyLjY5NCAxMzcuNDY0TDI5Mi43MjEgMTM3LjQ4M0MyOTMuNDgxIDEzOC4wMjEgMjk0LjI5IDEzOC40NTkgMjk1LjE0NiAxMzguNzkyQzI5Ny41NzQgMTM5LjczNSAzMDAuMDExIDEzOS42MzggMzAyLjMgMTM4LjQ1NEMzMDQuNTQ4IDEzNy4zNjggMzA2LjE5MSAxMzUuNjk0IDMwNy4wNjkgMTMzLjQzNUMzMDguMzY4IDEzMC4wOTUgMzA3LjQ5OCAxMjYuNjMyIDMwNS4xODMgMTIzLjI5MkMzMDUuMDc4IDEyMy4xMDcgMzA0Ljk1NSAxMjIuOTIzIDMwNC44NzMgMTIyLjgwMUwzMDQuODYzIDEyMi43ODVDMzA0LjcwNyAxMjIuNTUzIDMwNC41IDEyMi4yNTIgMzA0LjI0MyAxMjEuODg1QzMwMy45MTkgMTIxLjIyNiAzMDMuNTc0IDEyMC4xOTYgMzAzLjI0NiAxMTguNzE1QzMwMi45NTMgMTE3LjE2MiAzMDIuODA4IDExNS4yNTcgMzAyLjgzMyAxMTIuOThDMzAyLjk3MyAxMTAuODA1IDMwMy42MDggMTA4LjE4NyAzMDQuODA5IDEwNS4wOTdDMzA2LjExNCAxMDEuNzM5IDMwOC4yMDkgOTguNzA1OCAzMTEuMTM4IDk1Ljk5NDFDMzE0LjE5OSA5My4yNzYxIDMxNy42MDcgOTEuMTI1OSAzMjEuMzcgODkuNTM4NUwzMjEuMzcxIDg5LjUzODFDMzI1LjI1MyA4Ny44OTc5IDMyOS4yOTUgODYuOTQyMSAzMzMuNTA2IDg2LjY2ODlDMzM3Ljc2MyA4Ni40MzIgMzQxLjcwMSA4Ny4wMzM0IDM0NS4zNDUgODguNDVDMzUwLjc5OSA5MC41NzA1IDM1NS41MTcgOTMuNTEzOSAzNTkuNTE4IDk3LjI3NDNMMzU5LjUyNyA5Ny4yODI1QzM2My42MjQgMTAxLjA4NiAzNjYuNzI1IDEwNS40MDMgMzY4Ljg1MiAxMTAuMjM3TDM2OC44NTcgMTEwLjI0OEwzNjguODYyIDExMC4yNTlDMzcxLjA3NiAxMTUuMTMyIDM3Mi4yNzcgMTIwLjQzNyAzNzIuNDUgMTI2LjE5NEMzNzIuNjIyIDEzMS45MDQgMzcxLjU2MyAxMzcuNzQxIDM2OS4yMzggMTQzLjcyM0MzNjYuNDkgMTUwLjc5MSAzNjMuNTY5IDE1Ni41MTcgMzYwLjQ5MiAxNjAuOTQyQzM1Ny4zODEgMTY1LjQxNSAzNTQuMTI0IDE2OS4wMzkgMzUwLjczMiAxNzEuODQ0TDM1MC43MTkgMTcxLjg1NkwzNTAuNzA1IDE3MS44NjdDMzQ3LjM2MyAxNzQuNzM0IDM0My44ODUgMTc2Ljk4OCAzNDAuMjczIDE3OC42NDdMMzQwLjI1OCAxNzguNjUzTDM0MC4yNDMgMTc4LjY2MUMzMzYuNTc1IDE4MC40MTkgMzMyLjgzNiAxODIuMSAzMjkuMDI3IDE4My43MDZDMzI1LjMwNSAxODUuMTI0IDMyMS43MDcgMTg2Ljc0NiAzMTguMjMzIDE4OC41NjlMMzE4LjIxNyAxODguNTc4TDMxOC4yMDEgMTg4LjU4N0MzMTQuNzcyIDE5MC40NyAzMTEuNTQyIDE5Mi42MzkgMzA4LjUxMiAxOTUuMDkzQzMwNS40NTMgMTk3LjU3MSAzMDIuNjc1IDIwMC40MTQgMzAwLjE3OCAyMDMuNjE3TDMwMC4xNjQgMjAzLjYzNUwzMDAuMTUgMjAzLjY1NEMyOTcuNzE1IDIwNi45MzEgMjk1LjcwNyAyMTAuNjE3IDI5NC4xMTggMjE0LjcwMkMyOTMuNjI5IDIxNS45NjIgMjkzLjI1NCAyMTcuMDU5IDI5My4wMDkgMjE3Ljk3OEMyOTIuNzg2IDIxOC44MTcgMjkyLjY1MiAyMTkuMjUgMjkyLjU5NyAyMTkuMzkyTDI5Mi41NjEgMjE5LjQ4NUwyOTIuNTM0IDIxOS41ODFDMjkxLjg4NSAyMjEuOTE2IDI5Mi4xNzMgMjI0LjIyNyAyOTMuMzE1IDIyNi40MTZMMjkzLjMzMiAyMjYuNDQ4TDI5My4zNSAyMjYuNDhDMjk0LjU2MSAyMjguNjA1IDI5Ni40MjggMjMwLjExOCAyOTguODEzIDIzMS4wNDVMMjk4LjkwNiAyMzEuMDgxTDI5OS4wMDIgMjMxLjEwOEMzMDEuMzAxIDIzMS43NDcgMzAzLjU1NiAyMzEuNTE0IDMwNS42NTggMjMwLjQwNkMzMDcuODIzIDIyOS4yNzQgMzA5LjM5NiAyMjcuNTgyIDMxMC4yNjIgMjI1LjM1NEwzMTEuNjM4IDIyMS44MTVDMzEzLjAyNiAyMTguMjQ1IDMxNC40NjQgMjE1LjU1OSAzMTUuOTIgMjEzLjY3OEMzMTcuMzYyIDIxMS44MTUgMzE5LjA2OCAyMTAuNCAzMjEuMDQyIDIwOS40MDRDMzIzLjA3MSAyMDguMzggMzI1LjU0NyAyMDcuNjE0IDMyOC41MDQgMjA3LjEzOEMzMzEuNTU2IDIwNi42NDggMzM1LjI1MyAyMDYuMTk5IDMzOS42MDQgMjA1Ljc5M0MzNDMuNjY5IDIwNS40NTcgMzQ4LjA2MSAyMDUuMDQ4IDM1Mi43ODIgMjA0LjU2NkwzNTIuNzk5IDIwNC41NjRMMzUyLjgxNiAyMDQuNTYyQzM1Ny42MjcgMjAzLjk4NiAzNjIuNDc3IDIwMy4xNzEgMzY3LjM2NSAyMDIuMTE5TDM2Ny4zOCAyMDIuMTE2TDM2Ny4zOTYgMjAyLjExM0MzNzIuMzU4IDIwMC45NjMgMzc3LjI2IDE5OS40MzMgMzgyLjEwMiAxOTcuNTIzTDM4Mi4xMDMgMTk3LjUyMkMzODcuMTI3IDE5NS41MzUgMzkxLjg1OCAxOTIuOTY4IDM5Ni4yOTMgMTg5LjgyMlpNMzAxLjExMyAyNzcuOTMyQzMwMy44OTIgMjc2LjcwOSAzMDYuMzY5IDI3NC45ODggMzA4LjUzNyAyNzIuNzgyQzMxMC44MzEgMjcwLjU3MiAzMTIuNTcgMjY3LjkzMSAzMTMuNzU1IDI2NC44ODNDMzE0LjkwOSAyNjEuOTE0IDMxNS4zOSAyNTguODM1IDMxNS4xOTEgMjU1LjY2NUMzMTUuMDgxIDI1Mi41NjUgMzE0LjM5NiAyNDkuNjUgMzEzLjEyNCAyNDYuOTRDMzExLjg2MiAyNDQuMjUzIDMxMC4xMjIgMjQxLjgzIDMwNy45MjIgMjM5LjY3MkMzMDUuNjg2IDIzNy40NzkgMzAzLjA4MSAyMzUuODA2IDMwMC4xMjUgMjM0LjY1NkMyOTcuMTY4IDIzMy41MDcgMjk0LjExNyAyMzIuOTgxIDI5MC45ODcgMjMzLjA4OEMyODcuOTA3IDIzMy4xOTMgMjg0Ljk4NyAyMzMuODA2IDI4Mi4yNDIgMjM0LjkzNUMyNzkuNDY0IDIzNi4wNzcgMjc2Ljk4MyAyMzcuNzcyIDI3NC44MDQgMjM5Ljk5NEMyNzIuNjExIDI0Mi4yMyAyNzAuOTM4IDI0NC44MzUgMjY5Ljc4OCAyNDcuNzkyQzI2OC42MDggMjUwLjgyNyAyNjguMDYyIDI1My45MjEgMjY4LjE2OSAyNTcuMDZDMjY4LjI3NSAyNjAuMTYyIDI2OC45MzkgMjYzLjExNCAyNzAuMTY2IDI2NS45MDFDMjcxLjM5MyAyNjguNjg5IDI3My4xMjEgMjcxLjE3MiAyNzUuMzM3IDI3My4zNDZDMjc3LjU3MyAyNzUuNTM4IDI4MC4xNzggMjc3LjIxMSAyODMuMTM1IDI3OC4zNjFDMjg2LjA5MSAyNzkuNTEgMjg5LjE0MiAyODAuMDM2IDI5Mi4yNzIgMjc5LjkyOUMyOTUuMzc0IDI3OS44MjMgMjk4LjMyNiAyNzkuMTU5IDMwMS4xMTMgMjc3LjkzMloiIGZpbGw9IiMyOTJBMkUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPg0KPC9zdmc+DQo=';
        var f = r(26288),
          M = r(14517);
        const v = u.memo((D) => {
          var E;
          return u.createElement(
            'div',
            {
              className: (0, M.Z)('text-center w-full', D.className),
              style: D.style,
            },
            u.createElement('img', {
              className: 'w-32 h-32 m-auto mb-2',
              src: y,
            }),
            u.createElement(
              'div',
              null,
              (E = D.text) != null
                ? E
                : (0, f.t)('\u51FA\u73B0\u4E86\u4E00\u4E9B\u95EE\u9898')
            )
          );
        });
        v.displayName = 'Problem';
      },
      67434: (A, N, r) => {
        'use strict';
        r.d(N, { $: () => f });
        var u = r(93540),
          y = r(52983);
        const f = y.memo(() =>
          y.createElement(u.JO, {
            className: 'animate-spin mr-3 inline',
            icon: 'mdi:loading',
          })
        );
        f.displayName = 'Spinner';
      },
      45305: (A, N, r) => {
        'use strict';
        r.d(N, { Ll: () => P, _W: () => z, rQ: () => S, tP: () => w });
        var u = r(52983),
          y = r(26288),
          f = r(13893),
          M = r(18300),
          v = Object.defineProperty,
          D = Object.defineProperties,
          E = Object.getOwnPropertyDescriptors,
          C = Object.getOwnPropertySymbols,
          T = Object.prototype.hasOwnProperty,
          K = Object.prototype.propertyIsEnumerable,
          F = (U, L, B) =>
            L in U
              ? v(U, L, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (U[L] = B),
          x = (U, L) => {
            for (var B in L || (L = {})) T.call(L, B) && F(U, B, L[B]);
            if (C) for (var B of C(L)) K.call(L, B) && F(U, B, L[B]);
            return U;
          },
          j = (U, L) => D(U, E(L));
        const O = u.memo((U) => {
          const L = (0, u.useRef)(null),
            [B, Y] = (0, u.useState)(!0);
          return (
            (0, u.useEffect)(() => {
              var Q;
              const ee = () => {
                Y(!1);
              };
              return (
                (Q = L.current) == null || Q.addEventListener('load', ee),
                () => {
                  var h;
                  (h = L.current) == null || h.removeEventListener('load', ee);
                }
              );
            }, []),
            u.createElement(
              M.g,
              {
                spinning: B,
                className: 'w-full h-full',
                tip: (0, y.t)('\u52A0\u8F7D\u7F51\u9875\u4E2D...'),
              },
              u.createElement('iframe', j(x({}, U), { ref: L }))
            )
          );
        });
        O.displayName = 'DefaultWebviewKernel';
        const [I, P, S] = (0, y.Ntz)('webviewKernelComponent', () => O),
          w = (U) => {
            const L = (0, u.useMemo)(() => I(), []);
            return u.createElement(L, {
              className: 'w-full h-full',
              src: U.url,
            });
          };
        w.displayName = 'Webview';
        const z = (0, f.A)(w, { cacheId: (U) => U.url });
        z.displayName = 'WebviewKeepAlive';
      },
      50842: (A, N, r) => {
        'use strict';
        r.d(N, { A: () => f, b: () => M });
        var u = r(52983);
        const y = u.createContext('');
        y.displayName = 'GroupIdContext';
        const f = y.Provider;
        function M() {
          return (0, u.useContext)(y);
        }
      },
      85478: (A, N, r) => {
        'use strict';
        r.d(N, { D: () => f, x: () => y });
        var u = r(52983);
        const y = u.createContext(null);
        y.displayName = 'GroupPanelContext';
        function f() {
          return (0, u.useContext)(y);
        }
      },
      96857: (A, N, r) => {
        'use strict';
        r.d(N, { Z: () => f, i: () => M });
        var u = r(52983);
        const y = u.createContext({});
        y.displayName = 'SocketContext';
        const f = u.memo((v) =>
          u.createElement(y.Provider, { value: v.socket }, v.children)
        );
        f.displayName = 'SocketContextProvider';
        function M() {
          return (0, u.useContext)(y);
        }
      },
      89935: (A, N, r) => {
        'use strict';
        r.d(N, { d: () => M });
        var u = r(26288),
          y = r(52983);
        const f = (v = 1 / 0, D = 1 / 0) => {
          const [E, C] = (0, u.j$3)({
            width: u.jUY ? window.innerWidth : v,
            height: u.jUY ? window.innerHeight : D,
          });
          return (
            (0, y.useEffect)(() => {
              if (u.jUY) {
                const T = () => {
                  C({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener('resize', T),
                  () => {
                    window.removeEventListener('resize', T);
                  }
                );
              }
            }, []),
            E
          );
        };
        function M() {
          const { width: v } = f();
          return v < 768;
        }
      },
      81653: (A, N, r) => {
        'use strict';
        var u = r(170),
          y = r(3985),
          f = r(43991),
          M = r(52983),
          v = r(26288),
          D = r(22398),
          E = r(87450),
          C = r(13546),
          T = r.n(C),
          K = r(61422),
          F = r.n(K),
          x = r(82335),
          j = r(89408),
          O = r(93540),
          I = (Z, oe, re) =>
            new Promise((ze, xe) => {
              var _e = (ae) => {
                  try {
                    Ie(re.next(ae));
                  } catch (ye) {
                    xe(ye);
                  }
                },
                Le = (ae) => {
                  try {
                    Ie(re.throw(ae));
                  } catch (ye) {
                    xe(ye);
                  }
                },
                Ie = (ae) =>
                  ae.done
                    ? ze(ae.value)
                    : Promise.resolve(ae.value).then(_e, Le);
              Ie((re = re.apply(Z, oe)).next());
            });
        (0, x.CN)('init'),
          (0, j.S)('init'),
          v.yGS &&
            r
              .e(528)
              .then(r.bind(r, 7528))
              .then(({ start: Z }) => Z());
        const P = (0, v.Kdd)(window.localStorage);
        (0, v.poP)(() => P),
          (0, v.OvJ)(() =>
            I(void 0, null, function* () {
              return yield (0, E.pT)();
            })
          );
        const S = window.localStorage.getItem('serviceUrl');
        S && (0, v.YAW)(() => S),
          (0, v.lx9)((Z, oe = 'info') => {
            u.ZP.open({
              type: oe,
              duration: 3,
              content: M.createElement(
                'span',
                { 'data-testid': 'toast' },
                String(Z)
              ),
            });
          }),
          (0, v.brB)((Z) => {
            y.Z.confirm({
              content: Z.message,
              onOk: () =>
                I(void 0, null, function* () {
                  typeof Z.onConfirm == 'function' && (yield Z.onConfirm());
                }),
              getContainer: D.Gr,
            });
          }),
          (0, v.I5R)((Z) => u.ZP.loading(Z, 0)),
          (0, v.scZ)((Z, oe) => {
            const re = F()('notification');
            return (
              f.Z.open({
                key: re,
                message: Z,
                duration: oe,
                getContainer: D.Gr,
              }),
              () => {
                f.Z.close(re);
              }
            );
          }),
          (0, O.Yk)(v.Awg),
          (0, v.t4N)(() => {
            (0, O.YE)({ submitLabel: (0, v.t)('\u63D0\u4EA4') });
          });
        const w = (() => {
          let Z;
          return () => {
            Z ||
              window.location.pathname.startsWith('/entry') ||
              window.location.pathname.startsWith('/invite') ||
              (console.warn(
                '\u8D26\u53F7\u6388\u6743\u5DF2\u8FC7\u671F, 2\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230\u767B\u5F55\u9875'
              ),
              (0, v.lHp)(
                (0, v.t)(
                  '\u8D26\u53F7\u6388\u6743\u5DF2\u8FC7\u671F, 2\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230\u767B\u5F55\u9875'
                ),
                'warning'
              ),
              (Z = window.setTimeout(() => {
                window.clearTimeout(Z), (window.location.href = '/entry/login');
              }, 2e3)));
          };
        })();
        (0, v.J7p)((Z) =>
          T()(Z, 'response.data.code') === 401 ? (w(), !1) : !0
        ),
          (0, v.DtN)()
            .then((Z) => {
              v.yvY &&
                !Z.disableTelemetry &&
                fetch(
                  `https://tianji.moonrailgun.com/telemetry/clnzoxcy10001vy2ohi4obbi0/cltpqundt1r4hoi4gk72uj3un.gif?name=tailchat&url=${window.location.origin}&v=${v.i83}`
                ).catch(() => {});
            })
            .catch((Z) => {
              (0, v.hJM)(
                (0, v.t)('\u5168\u5C40\u914D\u7F6E\u52A0\u8F7D\u5931\u8D25')
              ),
                console.error(
                  '\u5168\u5C40\u914D\u7F6E\u52A0\u8F7D\u5931\u8D25',
                  Z
                );
            }),
          v.yGS === !0 &&
            (window.DEBUG = { request: v.WY0, version: v.i83, measure: x.L8 });
        var z = r(78520),
          U = r(10330),
          L = r(54782),
          B = r(14517),
          Y = r(80474),
          Q = r(13474),
          ee = r(94343),
          h = r(38887),
          Ce = r(21513),
          De = r(442),
          je = r(30547),
          ne = r.n(je),
          we = r(70877),
          dt = r(98992),
          rt = r(21940),
          ot = r(67706),
          st = r(83824);
        function ve() {
          const { tianji: Z } = (0, v.tR0)();
          (0, v._Av)(
            () =>
              typeof Z.scriptUrl == 'string' &&
              typeof Z.websiteId == 'string' &&
              Z.websiteId.length > 0,
            () => {
              if (!Z.scriptUrl) {
                console.error(
                  'Cannot inject Tianji script because of scriptUrl not cool:',
                  Z.scriptUrl
                );
                return;
              }
              const oe = document.createElement('script');
              (oe.src = Z.scriptUrl),
                oe.setAttribute('data-website-id', String(Z.websiteId)),
                oe.setAttribute('async', 'async'),
                oe.setAttribute('defer', 'defer'),
                document.head.append(oe);
            }
          );
        }
        var Ve = (Z, oe, re) =>
          new Promise((ze, xe) => {
            var _e = (ae) => {
                try {
                  Ie(re.next(ae));
                } catch (ye) {
                  xe(ye);
                }
              },
              Le = (ae) => {
                try {
                  Ie(re.throw(ae));
                } catch (ye) {
                  xe(ye);
                }
              },
              Ie = (ae) =>
                ae.done ? ze(ae.value) : Promise.resolve(ae.value).then(_e, Le);
            Ie((re = re.apply(Z, oe)).next());
          });
        const Ae = ne()() ? U.UT : U.VK,
          Qe = (0, Y.P)(() =>
            Promise.all([
              r.e(697),
              r.e(921),
              r.e(108),
              r.e(899),
              r.e(260),
              r.e(861),
              r.e(258),
              r.e(179),
            ]).then(r.bind(r, 54012))
          ),
          ft = (0, Y.P)(() => r.e(497).then(r.bind(r, 84850))),
          Ze = (0, Y.P)(() =>
            Promise.all([
              r.e(697),
              r.e(108),
              r.e(861),
              r.e(258),
              r.e(776),
            ]).then(r.bind(r, 85603))
          ),
          $e = (0, Y.P)(() => r.e(152).then(r.bind(r, 49002))),
          Ue = M.memo((Z) => {
            const { value: oe } = (0, v.r53)(
              () =>
                Ve(void 0, null, function* () {
                  return (0, v.G33)() === 'zh-CN'
                    ? r
                        .e(579)
                        .then(r.bind(r, 42342))
                        .then((ze) => ze.default)
                    : st.Z;
                }),
              []
            );
            return M.createElement(
              Q.ZP,
              { getPopupContainer: D.Gr, locale: oe },
              Z.children
            );
          });
        Ue.displayName = 'TcAntdProvider';
        const Te = M.memo((Z) =>
          M.createElement(
            M.Suspense,
            { fallback: M.createElement(h.T, null) },
            M.createElement(
              Ae,
              null,
              M.createElement(
                v.IE7,
                null,
                M.createElement(
                  dt.W,
                  { backend: rt.PD },
                  M.createElement(Ue, null, Z.children)
                )
              )
            )
          )
        );
        Te.displayName = 'AppProvider';
        const G = M.memo((Z) => {
          const { isDarkMode: oe, extraSchemeName: re } = (0, v.tv4)();
          return M.createElement(
            'div',
            {
              id: 'tailchat-app',
              className: (0, B.Z)(
                'tailchat-app',
                'absolute inset-0 select-none overflow-hidden',
                { dark: oe },
                re
              ),
              onContextMenu: D.PF,
            },
            Z.children
          );
        });
        G.displayName = 'AppContainer';
        const V = M.memo(() => {
          const { language: Z } = (0, v.ZKp)(),
            { serverName: oe, serverEntryImage: re } = (0, v.tR0)((ze) => ({
              serverName: ze.serverName,
              serverEntryImage: ze.serverEntryImage,
            }));
          return M.createElement(
            ee.q,
            null,
            M.createElement('meta', {
              httpEquiv: 'Content-Language',
              content: Z,
            }),
            M.createElement('title', null, oe),
            re &&
              M.createElement(
                'style',
                { type: 'text/css' },
                `
              #tailchat-app {
                --tc-background-image: url(${(0, v.Awg)(re)});
              }
            `
              )
          );
        });
        V.displayName = 'AppHeader';
        const X = M.memo(
          () => (
            (0, x.bw)('appRenderStart'),
            ve(),
            (0, M.useEffect)(() => {
              v.Agn.emit('appLoaded');
            }, []),
            M.createElement(
              Te,
              null,
              M.createElement(V, null),
              M.createElement(
                G,
                null,
                M.createElement(we._, null),
                M.createElement(
                  ot.S,
                  null,
                  M.createElement(
                    L.Routes,
                    null,
                    M.createElement(L.Route, {
                      path: '/entry/*',
                      element: M.createElement(
                        De.$2,
                        null,
                        M.createElement(ft, null)
                      ),
                    }),
                    M.createElement(L.Route, {
                      path: '/main/*',
                      element: M.createElement(Qe, null),
                    }),
                    M.createElement(L.Route, {
                      path: '/panel/*',
                      element: M.createElement(Ze, null),
                    }),
                    M.createElement(L.Route, {
                      path: '/invite/:inviteCode',
                      element: M.createElement($e, null),
                    }),
                    M.createElement(L.Route, {
                      path: '/plugin/*',
                      element: M.createElement(
                        De.$2,
                        null,
                        M.createElement(
                          L.Routes,
                          null,
                          Ce.pluginRootRoute.map((Z, oe) => {
                            var re;
                            return M.createElement(L.Route, {
                              key: Z.name,
                              path:
                                (re = Z.path) != null ? re : `/fallback${oe}`,
                              element: M.createElement(Z.component),
                            });
                          })
                        )
                      ),
                    }),
                    M.createElement(L.Route, {
                      path: '/*',
                      element: M.createElement(L.Navigate, {
                        to: '/entry',
                        replace: !0,
                      }),
                    })
                  )
                )
              )
            )
          )
        );
        X.displayName = 'App';
        var de = r(45165),
          We = r(99631),
          Ye = (Z, oe, re) =>
            new Promise((ze, xe) => {
              var _e = (ae) => {
                  try {
                    Ie(re.next(ae));
                  } catch (ye) {
                    xe(ye);
                  }
                },
                Le = (ae) => {
                  try {
                    Ie(re.throw(ae));
                  } catch (ye) {
                    xe(ye);
                  }
                },
                Ie = (ae) =>
                  ae.done
                    ? ze(ae.value)
                    : Promise.resolve(ae.value).then(_e, Le);
              Ie((re = re.apply(Z, oe)).next());
            });
        function Fe() {
          return Ye(this, null, function* () {
            Se(), W(), yield We.E.initPlugins();
          });
        }
        function Se() {
          (0, de.vf)('react', () =>
            Promise.resolve().then(r.t.bind(r, 52983, 19))
          ),
            (0, de.vf)('react-router', () =>
              Promise.resolve().then(r.bind(r, 54782))
            ),
            (0, de.vf)('axios', () =>
              Promise.resolve().then(r.t.bind(r, 95326, 23))
            ),
            (0, de.vf)('styled-components', () =>
              Promise.all([r.e(899), r.e(236)]).then(r.bind(r, 56899))
            ),
            (0, de.vf)('zustand', () =>
              Promise.resolve().then(r.bind(r, 36350))
            ),
            (0, de.vf)('zustand/middleware/immer', () =>
              Promise.resolve().then(r.bind(r, 50748))
            );
        }
        function W() {
          (0, de.h7)('@capital/common', () =>
            Promise.resolve().then(r.bind(r, 21513))
          ),
            (0, de.h7)('@capital/component', () =>
              Promise.all([r.e(697), r.e(921), r.e(861), r.e(848)]).then(
                r.bind(r, 15329)
              )
            );
        }
        var Xe = r(77569),
          Tt = r(10430);
        (0, Xe.Fv)(),
          (0, x.CN)('initPluginsStart'),
          Fe()
            .then(() => {
              (0, x.CN)('initPluginsEnd'),
                (0, j.S)('loaded'),
                (0, z.s)(document.querySelector('#app')).render(
                  M.createElement(M.StrictMode, null, M.createElement(X, null))
                );
            })
            .catch(() => {
              (0, v.hJM)(
                (0, v.t)('MiniStar \u5E94\u7528\u521D\u59CB\u5316\u5931\u8D25')
              );
            });
      },
      72824: (A, N, r) => {
        'use strict';
        r.d(N, { Y: () => M });
        var u = r(6494),
          y = r.n(u);
        const f = ['nightly.paw.msgbyte.com'].includes(location.host),
          M = y()([
            {
              label: 'Web Panel Plugin',
              'label.zh-CN': '\u7F51\u9875\u9762\u677F\u63D2\u4EF6',
              name: 'com.msgbyte.webview',
              url: '/plugins/com.msgbyte.webview/index.js',
              version: '0.0.0',
              author: 'msgbyte',
              description:
                'Provides groups with the ability to create web panels',
              'description.zh-CN':
                '\u4E3A\u7FA4\u7EC4\u63D0\u4F9B\u521B\u5EFA\u7F51\u9875\u9762\u677F\u7684\u529F\u80FD',
              documentUrl: '/plugins/com.msgbyte.webview/README.md',
              requireRestart: !1,
            },
            {
              label: 'BBCode Mmessage Interpreter',
              'label.zh-CN': 'BBCode \u6D88\u606F\u89E3\u91CA\u5668',
              name: 'com.msgbyte.bbcode',
              url: '/plugins/com.msgbyte.bbcode/index.js',
              version: '0.0.0',
              author: 'msgbyte',
              description:
                'A plugin for supporting bbcode syntax to interpret rich text messages',
              'description.zh-CN':
                '\u4E00\u4E2A\u7528\u4E8E\u652F\u6301bbcode\u8BED\u6CD5\u89E3\u91CA\u5BCC\u6587\u672C\u6D88\u606F\u7684\u63D2\u4EF6',
              requireRestart: !0,
            },
            {
              label: 'Message notification plugin',
              'label.zh-CN': '\u6D88\u606F\u901A\u77E5\u63D2\u4EF6',
              name: 'com.msgbyte.notify',
              url: '/plugins/com.msgbyte.notify/index.js',
              version: '0.0.0',
              author: 'msgbyte',
              description: 'Ability to add notifications to apps',
              'description.zh-CN':
                '\u4E3A\u5E94\u7528\u589E\u52A0\u901A\u77E5\u7684\u80FD\u529B',
              requireRestart: !0,
            },
            {
              label: 'Intro plugin',
              'label.zh-CN': '\u521D\u59CB\u5F15\u5BFC\u63D2\u4EF6',
              name: 'com.msgbyte.intro',
              url: '/plugins/com.msgbyte.intro/index.js',
              version: '0.0.0',
              author: 'msgbyte',
              description:
                'Turn on the ability to introduce the app for the first time for the app',
              'description.zh-CN':
                '\u4E3A\u5E94\u7528\u9996\u6B21\u6253\u5F00\u4ECB\u7ECD\u5E94\u7528\u7684\u80FD\u529B',
              requireRestart: !0,
            },
            {
              label: 'Markdown Panel',
              'label.zh-CN': 'Markdown \u9762\u677F',
              name: 'com.msgbyte.mdpanel',
              url: '/plugins/com.msgbyte.mdpanel/index.js',
              version: '0.0.0',
              author: 'moonrailgun',
              description: 'Add markdown panel support',
              'description.zh-CN':
                '\u589E\u52A0 Markdown \u9762\u677F\u652F\u6301',
              requireRestart: !0,
            },
            {
              label: 'Identity and Access Management',
              'label.zh-CN': 'IAM \u63D2\u4EF6',
              name: 'com.msgbyte.iam',
              url: '{BACKEND}/plugins/com.msgbyte.iam/index.js',
              documentUrl:
                'https://tailchat.msgbyte.com/docs/advanced-usage/plugins/com.msgbyte.iam',
              version: '0.0.0',
              author: 'moonrailgun',
              description:
                'Provide Tailchat with the function of conveniently accessing external account systems',
              'description.zh-CN':
                '\u4E3ATailchat\u63D0\u4F9B\u65B9\u4FBF\u7684\u63A5\u5165\u5916\u90E8\u8D26\u6237\u7CFB\u7EDF\u7684\u529F\u80FD',
              requireRestart: !0,
            },
            {
              label: 'Offline Icons',
              'label.zh-CN': '\u79BB\u7EBF\u56FE\u6807',
              name: 'com.msgbyte.offline-icons',
              url: '/plugins/com.msgbyte.offline-icons/index.js',
              version: '0.0.0',
              author: 'moonrailgun',
              description:
                'Add prefetched icons which need run in intranet environment',
              'description.zh-CN':
                '\u589E\u52A0\u9884\u83B7\u53D6\u7684\u56FE\u6807\uFF0C\u9002\u7528\u4E8E\u5185\u7F51\u73AF\u5883',
              requireRestart: !0,
            },
            f && {
              label: 'Posthog',
              name: 'com.msgbyte.posthog',
              url: '/plugins/com.msgbyte.posthog/index.js',
              icon: '/plugins/com.msgbyte.posthog/assets/icon.png',
              version: '0.0.0',
              author: 'moonrailgun',
              description: 'Posthog Statistics',
              'description.zh-CN': 'Posthog \u6570\u636E\u7EDF\u8BA1',
              requireRestart: !0,
            },
            f && {
              label: 'Sentry',
              name: 'com.msgbyte.sentry',
              url: '/plugins/com.msgbyte.sentry/index.js',
              icon: '/plugins/com.msgbyte.sentry/assets/icon.png',
              version: '0.0.0',
              author: 'moonrailgun',
              description: 'Sentry error handling',
              'description.zh-CN': 'Sentry \u9519\u8BEF\u5904\u7406',
              requireRestart: !0,
            },
            f && {
              label: 'User Location',
              'label.zh-CN': '\u7528\u6237\u5730\u7406\u4F4D\u7F6E',
              name: 'com.msgbyte.user.location',
              url: '/plugins/com.msgbyte.user.location/index.js',
              version: '0.0.0',
              author: 'moonrailgun',
              description:
                'Add geographic location records for user information',
              'description.zh-CN':
                '\u4E3A\u7528\u6237\u4FE1\u606F\u589E\u52A0\u5730\u7406\u4F4D\u7F6E\u8BB0\u5F55',
              requireRestart: !0,
            },
            f && {
              label: 'AI Assistant',
              name: 'com.msgbyte.ai-assistant',
              url: '/plugins/com.msgbyte.ai-assistant/index.js',
              icon: '/plugins/com.msgbyte.ai-assistant/assets/icon.png',
              version: '0.0.0',
              author: 'moonrailgun',
              description: 'Add chatgpt into Tailchat',
              requireRestart: !0,
            },
          ]);
      },
      21513: (A, N, r) => {
        'use strict';
        r.r(N),
          r.d(N, {
            Loadable: () => Ie.P,
            ModalWrapper: () => Le.AB,
            appendUrlSearch: () => At.no,
            closeModal: () => Le.Mr,
            createFastFormSchema: () => yt._D,
            createPluginRequest: () => Re,
            dataUrlToFile: () => zt.Bo,
            fetchAvailableServices: () => f.Y4U,
            fieldSchema: () => yt._6,
            getCachedBaseGroupInfo: () => f.D6C,
            getCachedConverseInfo: () => f.r5V,
            getCachedUserInfo: () => f.pGV,
            getCachedUserSettings: () => f.U$y,
            getGlobalState: () => Dt.MO,
            getJWTUserInfo: () => St.Yt,
            getLanguage: () => f.G33,
            getMessageRender: () => P,
            getMessageTextDecorators: () => L,
            getPopupContainer: () => $t.Gr,
            getServiceUrl: () => f.qQ$,
            getServiceWorkerRegistration: () => R.Op,
            getTextColorHex: () => yt.Yy,
            isDevelopment: () => f.yGS,
            isMobile: () => ye,
            isValidStr: () => f.YQu,
            joinArray: () => f.Mo8,
            localTrans: () => f.YtP,
            loginWithToken: () => f.ouS,
            messageInterpreter: () => O,
            navigate: () => vt.c,
            openConfirmModal: () => Le._5,
            openModal: () => Le.h7,
            openReconfirmModal: () => Le.VW,
            panelWindowManager: () => Xt.aR,
            parseUrlStr: () => f.Awg,
            pluginCardItemMap: () => Ye,
            pluginChatInputActions: () => B,
            pluginChatInputButtons: () => Q,
            pluginChatInputPasteHandler: () => Z,
            pluginColorScheme: () => h,
            pluginCustomPanel: () => K,
            pluginGroupConfigItems: () => Se,
            pluginGroupPanel: () => x,
            pluginGroupPanelBadges: () => ft,
            pluginGroupTextPanelExtraMenus: () => $e,
            pluginInboxItemMap: () => de,
            pluginInspectServices: () => De,
            pluginLoginAction: () => Xe,
            pluginMessageExtraParsers: () => ne,
            pluginPanelActions: () => ve,
            pluginPanelRoute: () => ot,
            pluginPermission: () => Ae,
            pluginRootRoute: () => dt,
            pluginSettings: () => V,
            pluginUserExtraInfo: () => Te,
            postMessageEvent: () => xt.S,
            postRequest: () => qt,
            regChatInputAction: () => Y,
            regChatInputButton: () => ee,
            regChatInputPasteHandler: () => oe,
            regCustomPanel: () => F,
            regGroupPanel: () => j,
            regGroupPanelBadge: () => Ze,
            regInspectService: () => je,
            regLoginAction: () => Tt,
            regMessageExtraParser: () => we,
            regMessageInterpreter: () => I,
            regMessageRender: () => S,
            regMessageTextDecorators: () => U,
            regPluginCardItem: () => Fe,
            regPluginColorScheme: () => Ce,
            regPluginGroupConfigItem: () => W,
            regPluginGroupTextPanelExtraMenu: () => Ue,
            regPluginInboxItemMap: () => We,
            regPluginPanelAction: () => Ve,
            regPluginPanelRoute: () => st,
            regPluginPermission: () => Qe,
            regPluginRootRoute: () => rt,
            regPluginSettings: () => X,
            regSocketEventListener: () => f.Kr1,
            regUserExtraInfo: () => G,
            resetWebviewKernel: () => _t.rQ,
            sendMessage: () => f.bG5,
            setUserJWT: () => St._H,
            setWebviewKernel: () => _t.Ll,
            sharedEvent: () => f.Agn,
            showErrorToasts: () => f.hJM,
            showMessageTime: () => f.omK,
            showNotification: () => f.c0f,
            showSuccessToasts: () => f.jiy,
            showToasts: () => f.lHp,
            uploadFile: () => f.cTq,
            urlSearchParse: () => At.qp,
            urlSearchStringify: () => At.a,
            useAsync: () => f.r53,
            useAsyncFn: () => f.ilX,
            useAsyncRefresh: () => f.IxN,
            useAsyncRequest: () => f.CoE,
            useConverseMessageContext: () => f.FNv,
            useCurrentUserInfo: () => at,
            useEvent: () => f.zX9,
            useGlobalSocketEvent: () => Dt.s0,
            useGroupIdContext: () => re.b,
            useGroupInfo: () => f.iFL,
            useGroupPanelContext: () => ze.D,
            useGroupPanelInfo: () => f.wY6,
            useGroupPanelParams: () => _e.PO,
            useIsMobile: () => ae.d,
            useLocation: () => Lt.useLocation,
            useModalContext: () => Le.vR,
            useNavigate: () => Lt.useNavigate,
            useSocketContext: () => xe.i,
            useUpdateRef: () => f.ysv,
            useWatch: () => f.qoQ,
          });
        var u = r(49335),
          y = r.n(u),
          f = r(26288),
          M = Object.defineProperty,
          v = Object.getOwnPropertySymbols,
          D = Object.prototype.hasOwnProperty,
          E = Object.prototype.propertyIsEnumerable,
          C = (te, ie, he) =>
            ie in te
              ? M(te, ie, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: he,
                })
              : (te[ie] = he),
          T = (te, ie) => {
            for (var he in ie || (ie = {})) D.call(ie, he) && C(te, he, ie[he]);
            if (v) for (var he of v(ie)) E.call(ie, he) && C(te, he, ie[he]);
            return te;
          };
        const [K, F] = (0, f._CB)(),
          [x, j] = (0, f._CB)(),
          [O, I] = (0, f._CB)(),
          [P, S] = (0, f.Ntz)('message-render', (te) => te),
          w = {
            url: (te, ie) => (ie ? `${ie}(${te})` : te),
            image: (te, ie) => te,
            card: (te, ie) => te,
            mention: (te, ie) => `@${ie}`,
            emoji: (te) => te,
            serialize: (te) => te,
          },
          [z, U] = (0, f.Ntz)('message-text-decorators', () => w);
        function L() {
          return T(T({}, w), z());
        }
        const [B, Y] = (0, f._CB)(),
          [Q, ee] = (0, f._CB)(),
          [h, Ce] = (0, f._CB)(),
          [De, je] = (0, f._CB)(),
          [ne, we] = (0, f._CB)(),
          [dt, rt] = (0, f._CB)(),
          [ot, st] = (0, f._CB)(),
          [ve, Ve] = (0, f._CB)(),
          [Ae, Qe] = (0, f._CB)(),
          [ft, Ze] = (0, f._CB)(),
          [$e, Ue] = (0, f._CB)(),
          [Te, G] = (0, f._CB)(),
          [V, X] = (0, f._CB)(),
          [de, We] = (0, f.D3K)(),
          [Ye, Fe] = (0, f.D3K)(),
          [Se, W] = (0, f._CB)(),
          [Xe, Tt] = (0, f._CB)(),
          [Z, oe] = (0, f._CB)();
        var re = r(50842),
          ze = r(85478),
          xe = r(96857),
          _e = r(22215),
          Le = r(84208),
          Ie = r(80474),
          ae = r(89935);
        function ye() {
          return window.document.body.clientWidth < 768;
        }
        var $t = r(22398),
          Dt = r(5198),
          St = r(87450),
          zt = r(74774),
          At = r(72297),
          R = r(77569),
          xt = r(89408),
          Xt = r(42052),
          _t = r(45305),
          vt = r(70877),
          Lt = r(54782),
          yt = r(93540);
        function at() {
          const te = (0, f.Pc$)();
          return y()(te, [
            '_id',
            'email',
            'nickname',
            'discriminator',
            'avatar',
          ]);
        }
        function ht(te) {
          if (!!te)
            return y()(te, [
              'transformRequest',
              'transformResponse',
              'headers',
              'params',
              'data',
              'timeout',
              'withCredentials',
              'xsrfCookieName',
              'xsrfHeaderName',
            ]);
        }
        function Re(te) {
          return {
            get(ie, he) {
              return f.WY0.get(
                `/api/plugin:${te}/${ie.replace(/\./g, '/')}`,
                ht(he)
              );
            },
            post(ie, he, en) {
              return f.WY0.post(
                `/api/plugin:${te}/${ie.replace(/\./g, '/')}`,
                he,
                ht(en)
              );
            },
          };
        }
        function qt(te, ie, he) {
          return f.WY0.post(`/api${te}`, ie, ht(he));
        }
      },
      99631: (A, N, r) => {
        'use strict';
        r.d(N, { E: () => L });
        var u = r(26288),
          y = r(45165),
          f = r(47020),
          M = r.n(f),
          v = r(72824),
          D = r(43991),
          E = r(52983);
        function C(B) {
          D.Z.warn({
            message: E.createElement(
              'div',
              null,
              E.createElement(
                'p',
                null,
                (0, u.t)('\u63D2\u4EF6\u52A0\u8F7D\u5931\u8D25'),
                ':'
              ),
              B.map((Y) => E.createElement('p', { key: Y }, '- ', Y))
            ),
            duration: 2,
          });
        }
        function T(B, Y) {
          window.tailchat || (window.tailchat = {}), (window.tailchat[B] = Y);
        }
        var K = r(3010),
          F = r.n(K),
          x = Object.defineProperty,
          j = Object.getOwnPropertySymbols,
          O = Object.prototype.hasOwnProperty,
          I = Object.prototype.propertyIsEnumerable,
          P = (B, Y, Q) =>
            Y in B
              ? x(B, Y, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Q,
                })
              : (B[Y] = Q),
          S = (B, Y) => {
            for (var Q in Y || (Y = {})) O.call(Y, Q) && P(B, Q, Y[Q]);
            if (j) for (var Q of j(Y)) I.call(Y, Q) && P(B, Q, Y[Q]);
            return B;
          },
          w = (B, Y, Q) =>
            new Promise((ee, h) => {
              var Ce = (ne) => {
                  try {
                    je(Q.next(ne));
                  } catch (we) {
                    h(we);
                  }
                },
                De = (ne) => {
                  try {
                    je(Q.throw(ne));
                  } catch (we) {
                    h(we);
                  }
                },
                je = (ne) =>
                  ne.done
                    ? ee(ne.value)
                    : Promise.resolve(ne.value).then(Ce, De);
              je((Q = Q.apply(B, Y)).next());
            });
        const z = class {
          constructor() {
            (this.initPlugins = M()(() =>
              w(this, null, function* () {
                const Y = F()(
                    [...v.Y, ...(yield this.getInstalledPlugins())],
                    'name'
                  ).map(({ name: ee, url: h }) => ({
                    name: ee,
                    url: (0, u.Awg)(h),
                  })),
                  Q = new Set();
                yield (0, y.FV)({
                  plugins: Y,
                  onPluginLoadError: (ee) => {
                    console.error('Plugin load error:', ee),
                      Q.add(ee.pluginName);
                  },
                }),
                  Q.size > 0 && C(Array.from(Q));
              })
            )),
              (this.getRegistryPlugins = M()(() =>
                w(this, null, function* () {
                  const B = yield (0, u.Mlq)();
                  return this.updatePluginsInfo(B), B;
                })
              ));
          }
          getInstalledPlugins() {
            return w(this, null, function* () {
              return yield (0, u.cF2)().get(z.STORE_KEY, []);
            });
          }
          updatePluginsInfo(B) {
            return w(this, null, function* () {
              const Y = yield this.getInstalledPlugins();
              yield this.saveInstalledPlugins(
                Y.map((Q) => {
                  const ee = B.find((h) => h.name === Q.name);
                  return ee ? S(S({}, Q), ee) : Q;
                })
              );
            });
          }
          installPlugin(B) {
            return w(this, null, function* () {
              const Y = yield this.getInstalledPlugins(),
                Q = Y.findIndex((ee) => ee.name === B.name);
              Q >= 0 ? (Y[Q] = B) : Y.push(B),
                yield this.saveInstalledPlugins(Y),
                yield (0, y.dZ)({ name: B.name, url: B.url });
            });
          }
          uninstallPlugin(B) {
            return w(this, null, function* () {
              const Y = yield (0, u.cF2)().get(z.STORE_KEY),
                Q = Y.findIndex((ee) => ee.name === B);
              Q >= 0 && (Y.splice(Q, 1), yield this.saveInstalledPlugins(Y));
            });
          }
          saveInstalledPlugins(B) {
            return w(this, null, function* () {
              yield (0, u.cF2)().save(z.STORE_KEY, B);
            });
          }
        };
        let U = z;
        U.STORE_KEY = '$TailchatInstalledPlugins';
        const L = new U();
        T('installPlugin', L.installPlugin.bind(L));
      },
      22215: (A, N, r) => {
        'use strict';
        r.d(N, { PO: () => C, Sp: () => T, rF: () => K });
        var u = r(21513),
          y = r(89889),
          f = r(52983),
          M = r(54782),
          v = r(93540),
          D = r(26288),
          E = r(52486);
        function C() {
          const { groupId: F = '', panelId: x = '' } = (0, M.useParams)();
          return { groupId: F, panelId: x };
        }
        function T(F) {
          const x = (0, f.useMemo)(() => {
            var j, O;
            return F.type === D.Xpe.TEXT
              ? u.pluginGroupTextPanelExtraMenus
              : (0, D.YQu)(F.pluginPanelName)
              ? (O =
                  (j = (0, y.S)(F.pluginPanelName)) == null
                    ? void 0
                    : j.menus) != null
                ? O
                : []
              : [];
          }, [F.type, F.pluginPanelName]);
          return Array.isArray(x) && x.length > 0
            ? [
                { type: 'divider' },
                ...x.map((j) => ({
                  key: j.name,
                  label: j.label,
                  icon: j.icon
                    ? f.createElement(v.JO, { icon: j.icon })
                    : void 0,
                  onClick: () => j.onClick(F),
                })),
              ]
            : [];
        }
        function K(F, x, j) {
          const O = (0, E.Z)();
          return (
            (0, D.JtK)('groupPanelBadgeUpdate', () => {
              O();
            }),
            u.pluginGroupPanelBadges
              .filter((P) => P.panelType === j)
              .map((P) => {
                const S = P.render;
                return f.createElement(
                  f.Fragment,
                  { key: x + P.name },
                  f.createElement(S, { groupId: F, panelId: x })
                );
              })
          );
        }
      },
      22398: (A, N, r) => {
        'use strict';
        r.d(N, {
          Gr: () => u,
          PF: () => f,
          SQ: () => v,
          UW: () => y,
          g$: () => M,
        });
        function u() {
          const D = document.querySelector('#tailchat-app');
          return D || document.body;
        }
        function y(D) {
          D.stopPropagation();
        }
        function f(D) {
          D.preventDefault();
        }
        function M(D) {
          const E = [];
          let C = D.parentElement;
          for (; C; ) E.unshift(C), (C = C.parentElement);
          return E;
        }
        function v(D) {
          let E = !1;
          const C = (...T) => {
            E !== !1 &&
              (D(...T),
              requestAnimationFrame(() => {
                C(...T);
              }));
          };
          return {
            start: (...T) => {
              (E = !0), C(...T);
            },
            end: () => {
              requestAnimationFrame(() => {
                E = !1;
              });
            },
          };
        }
      },
      89408: (A, N, r) => {
        'use strict';
        r.d(N, { S: () => u });
        function u(y, f) {
          window.postMessage({ _isTailchat: !0, type: y, payload: f }, '*');
        }
      },
      74774: (A, N, r) => {
        'use strict';
        r.d(N, {
          Bo: () => D,
          DQ: () => O,
          Fy: () => v,
          GR: () => F,
          NV: () => K,
          ZB: () => j,
          hv: () => I,
        });
        var u = r(13546),
          y = r.n(u),
          f = r(26288),
          M = (P, S, w) =>
            new Promise((z, U) => {
              var L = (Q) => {
                  try {
                    Y(w.next(Q));
                  } catch (ee) {
                    U(ee);
                  }
                },
                B = (Q) => {
                  try {
                    Y(w.throw(Q));
                  } catch (ee) {
                    U(ee);
                  }
                },
                Y = (Q) =>
                  Q.done ? z(Q.value) : Promise.resolve(Q.value).then(L, B);
              Y((w = w.apply(P, S)).next());
            });
        function v(P) {
          return new Promise((S, w) => {
            const z = new FileReader();
            z.addEventListener('load', () => {
              var U;
              return S(String((U = z.result) != null ? U : ''));
            }),
              z.addEventListener('error', () => w(z.error)),
              z.readAsDataURL(P);
          });
        }
        function D(P, S = 'file') {
          const w = P.split(','),
            z = y()(w[0].match(/:(.*?);/), [1]),
            U = atob(w[1]);
          let L = U.length;
          const B = new Uint8Array(L);
          for (; L--; ) B[L] = U.charCodeAt(L);
          return new File([B], S, { type: z });
        }
        function E(P) {
          return new Promise((S, w) => {
            const z = new FileReader();
            z.addEventListener('load', () => {
              var U;
              return S(String((U = z.result) != null ? U : ''));
            }),
              z.addEventListener('error', () => w(z.error)),
              z.readAsText(P);
          });
        }
        function C(P) {
          return new Promise((S, w) => {
            const z = new XMLHttpRequest();
            (z.responseType = 'blob'),
              (z.onload = () => {
                S(z.response);
              }),
              (z.onerror = () => {
                w(z.responseText);
              }),
              z.open('get', P),
              z.send();
          });
        }
        function T(P, S) {
          return new File([P], S, {
            lastModified: new Date().valueOf(),
            type: P.type,
          });
        }
        function K(P, S = 'image.jpg') {
          return M(this, null, function* () {
            const w = yield C(P);
            return T(w, S);
          });
        }
        function F(P, S) {
          const w = document.createElement('a');
          (w.href = (0, f.Awg)(P)),
            (w.download = S),
            (w.target = '_blank'),
            w.click();
        }
        function x(P, S) {
          const w = String(URL.createObjectURL(P));
          F(w, S), URL.revokeObjectURL(w);
        }
        function j(P) {
          return M(this, null, function* () {
            return new Promise((S) => {
              const w = document.createElement('input');
              w.setAttribute('type', 'file'),
                typeof (P == null ? void 0 : P.accept) == 'string' &&
                  (w.accept = P.accept),
                w.addEventListener('change', function (z) {
                  const U = y()(this, ['files', 0], null);
                  S(U), w.remove();
                }),
                w.click();
            });
          });
        }
        const O = (P) => P.type === 'image/gif';
        function I(P, S) {
          return M(this, null, function* () {
            const { default: w } = yield r.e(538).then(r.t.bind(r, 17538, 23));
            return new Promise((z, U) => {
              var L, B, Y;
              new w(P, {
                quality: (L = S == null ? void 0 : S.quality) != null ? L : 0.6,
                maxWidth:
                  (B = S == null ? void 0 : S.maxWidth) != null ? B : 1920,
                maxHeight:
                  (Y = S == null ? void 0 : S.maxHeight) != null ? Y : 1080,
                success(Q) {
                  Q instanceof File ? z(Q) : z(new File([Q], Q.name));
                },
                error(Q) {
                  U(Q);
                },
              });
            });
          });
        }
      },
      5198: (A, N, r) => {
        'use strict';
        r.d(N, { Kj: () => C, MO: () => D, _3: () => v, s0: () => K });
        var u = r(52983),
          y = r(26288),
          f = (x, j, O) =>
            new Promise((I, P) => {
              var S = (U) => {
                  try {
                    z(O.next(U));
                  } catch (L) {
                    P(L);
                  }
                },
                w = (U) => {
                  try {
                    z(O.throw(U));
                  } catch (L) {
                    P(L);
                  }
                },
                z = (U) =>
                  U.done ? I(U.value) : Promise.resolve(U.value).then(S, w);
              z((O = O.apply(x, j)).next());
            });
        let M;
        function v(x) {
          M = x;
        }
        function D() {
          return M ? M.getState() : null;
        }
        let E;
        function C(x) {
          E = x;
        }
        function T() {
          return E || null;
        }
        function K(x, j) {
          const O = (0, y.zX9)(j);
          (0, u.useEffect)(
            () => (
              E && E.listen(x, O),
              () => {
                E && E.removeListener(x, O);
              }
            ),
            []
          );
        }
        function F(x, j) {
          return f(this, null, function* () {
            if (!E) throw new Error('socket not inited');
            return yield E.request(x, j);
          });
        }
      },
      87450: (A, N, r) => {
        'use strict';
        r.d(N, { Yt: () => x, _H: () => K, pT: () => F });
        var u = r(93702),
          y = r.n(u),
          f = r(7534),
          M = r.n(f),
          v = r(61006),
          D = r(26288),
          E = (j, O, I) =>
            new Promise((P, S) => {
              var w = (L) => {
                  try {
                    U(I.next(L));
                  } catch (B) {
                    S(B);
                  }
                },
                z = (L) => {
                  try {
                    U(I.throw(L));
                  } catch (B) {
                    S(B);
                  }
                },
                U = (L) =>
                  L.done ? P(L.value) : Promise.resolve(L.value).then(w, z);
              U((I = I.apply(j, O)).next());
            });
        function C(j) {
          try {
            return (0, v.Z)(j);
          } catch (O) {
            console.error(`getJWTInfo Error: [jwt: ${j}]`, O);
          }
          return {};
        }
        let T = null;
        function K(j) {
          return E(this, null, function* () {
            (T = j), yield (0, D.cF2)().save('jsonwebtoken', j), (0, D.csP)();
          });
        }
        function F() {
          return E(this, null, function* () {
            if (M()(T)) {
              const j = yield (0, D.cF2)().get('jsonwebtoken');
              return (T = j), j;
            }
            return T;
          });
        }
        function x() {
          return E(this, null, function* () {
            try {
              const j = yield F(),
                O = C(j);
              if (y()(O)) return O;
            } catch (j) {
              console.error('getJWTInfo Error:', j);
            }
            return {};
          });
        }
      },
      82335: (A, N, r) => {
        'use strict';
        r.d(N, { CN: () => x, L8: () => O, bw: () => j });
        var u = r(52983),
          y = r(84184),
          f = Object.defineProperty,
          M = Object.getOwnPropertySymbols,
          v = Object.prototype.hasOwnProperty,
          D = Object.prototype.propertyIsEnumerable,
          E = (I, P, S) =>
            P in I
              ? f(I, P, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: S,
                })
              : (I[P] = S),
          C = (I, P) => {
            for (var S in P || (P = {})) v.call(P, S) && E(I, S, P[S]);
            if (M) for (var S of M(P)) D.call(P, S) && E(I, S, P[S]);
            return I;
          };
        const T = {},
          K = {},
          F = (I) => {
            K[I.name] || (K[I.name] = I.value);
          };
        (0, y.mw)(F),
          (0, y.a4)(F),
          (0, y.Fu)(F),
          (0, y.Yn)(F),
          (0, y.NO)(F),
          (0, y.mr)(F);
        function x(I) {
          T[I] ||
            (performance.mark(`tailchat:${I}`), (T[I] = performance.now()));
        }
        function j(I) {
          (0, u.useLayoutEffect)(() => {
            x(I);
          }, []),
            (0, u.useEffect)(() => {
              x(I + 'Mounted');
            }, []);
        }
        const O = {
          getVitals: () => C({}, K),
          getRecord: () => C({}, T),
          getTimeUsage() {
            let I = performance.timing;
            const P = {
              dnsUsage: I.domainLookupEnd - I.domainLookupStart,
              tcpUsage: I.connectEnd - I.connectStart,
              requestUsage: I.responseEnd - I.responseStart,
              parseDOMUsage: I.domComplete - I.domInteractive,
              firstPaintTime: I.responseStart - I.navigationStart,
              domReadyTime: I.domContentLoadedEventEnd - I.navigationStart,
              onloadTime: I.loadEventEnd - I.navigationStart,
            };
            return (
              (I = performance.memory) &&
                (P.jsHeapRatio = I.usedJSHeapSize / I.totalJSHeapSize),
              P
            );
          },
        };
      },
      89889: (A, N, r) => {
        'use strict';
        r.d(N, { S: () => y, g: () => f });
        var u = r(21513);
        function y(M) {
          return u.pluginGroupPanel.find((v) => v.name === M);
        }
        function f(M) {
          if (typeof M != 'string')
            throw new Error('Plugin Name must be string');
          return M.startsWith('plugin:') ? M : `plugin:${M}`;
        }
      },
      77569: (A, N, r) => {
        'use strict';
        r.d(N, { Wc: () => P, Op: () => O, Fv: () => j, ud: () => I });
        var u = r(43991),
          y = r(52983),
          f = r(47020),
          M = r.n(f),
          v = r(26288),
          D = r(58761),
          E = r(75526);
        const C = y.memo(() =>
          y.createElement(
            D.Z,
            null,
            y.createElement(
              E.Z,
              {
                type: 'primary',
                size: 'small',
                onClick: () => window.location.reload(),
              },
              (0, v.t)('\u7ACB\u5373\u5237\u65B0')
            )
          )
        );
        C.displayName = 'UpdateNotificationBtn';
        const T = M()(() => {
          setTimeout(() => {
            u.Z.open({
              message: (0, v.t)('\u66F4\u65B0\u7248\u672C'),
              description: (0, v.t)(
                '\u68C0\u6D4B\u5230\u6709\u65B0\u7248\u672C, \u662F\u5426\u7ACB\u5373\u5237\u65B0\u4EE5\u5347\u7EA7\u5230\u6700\u65B0\u5185\u5BB9'
              ),
              duration: 0,
              btn: y.createElement(C),
            });
          }, 2e3);
        });
        let K = null,
          F;
        function x(S) {
          if ((console.log('registered', S), S.waiting)) {
            console.log('updated', S), T();
            return;
          }
          S.onupdatefound = () => {
            console.log('updatefound', S);
            const w = S.installing;
            w !== null &&
              (w.onstatechange = () => {
                w.state === 'installed' &&
                  (navigator.serviceWorker.controller
                    ? (console.log('updated', S), T())
                    : console.log('cached', S));
              });
          };
        }
        function j() {
          'serviceWorker' in navigator &&
            (window.addEventListener('load', () => {
              navigator.serviceWorker
                .register('/service-worker.js')
                .then((S) => {
                  console.log('SW registered: ', S), (K = S), x(S);
                })
                .catch((S) => {
                  console.log('SW registration failed: ', S);
                });
            }),
            window.addEventListener('beforeinstallprompt', (S) => {
              F = S;
            }));
        }
        function O() {
          return K;
        }
        function I() {
          if (!F) {
            (0, v.hJM)((0, v.t)('\u65E0\u6CD5\u5B89\u88C5'));
            return;
          }
          F.prompt();
        }
        function P() {
          return !!F;
        }
      },
      72297: (A, N, r) => {
        'use strict';
        r.d(N, {
          Cr: () => T,
          a: () => u.stringify,
          no: () => K,
          po: () => F,
          qp: () => u.parse,
        });
        var u = r(46163),
          y = r.n(u),
          f = Object.defineProperty,
          M = Object.getOwnPropertySymbols,
          v = Object.prototype.hasOwnProperty,
          D = Object.prototype.propertyIsEnumerable,
          E = (x, j, O) =>
            j in x
              ? f(x, j, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: O,
                })
              : (x[j] = O),
          C = (x, j) => {
            for (var O in j || (j = {})) v.call(j, O) && E(x, O, j[O]);
            if (M) for (var O of M(j)) D.call(j, O) && E(x, O, j[O]);
            return x;
          };
        function T(x) {
          return new URL(x, location.href).href;
        }
        function K(x) {
          return (0, u.stringify)(
            C(
              C(
                {},
                (0, u.parse)(window.location.search, { ignoreQueryPrefix: !0 })
              ),
              x
            ),
            { skipNulls: !0 }
          );
        }
        function F(x) {
          return `${location.origin}/invite/${x}`;
        }
      },
      42052: (A, N, r) => {
        'use strict';
        r.d(N, { aR: () => v });
        let u = 0;
        function y(D) {
          return Object.entries(D)
            .map(([E, C]) => `${E}=${C}`)
            .join(',');
        }
        function f(D, E = {}) {
          var C, T, K, F;
          const x = (C = E.width) != null ? C : 414,
            j = (T = E.height) != null ? T : 736,
            O = (K = E.top) != null ? K : (window.screen.height - j) / 2,
            I = (F = E.left) != null ? F : (window.screen.width - x) / 2;
          return window.open(
            D,
            `tailwindow#${u++}`,
            y({
              top: O,
              left: I,
              width: x,
              height: j,
              menubar: !1,
              toolbar: !1,
              location: !1,
              status: !1,
              resizable: !0,
            })
          );
        }
        class M {
          constructor() {
            this.openedPanelWindows = {};
          }
          open(E, C = {}) {
            if (this.openedPanelWindows[E])
              return (
                this.openedPanelWindows[E].focus(), this.openedPanelWindows[E]
              );
            const T = f(E, C);
            if (!T) throw new Error('Create window failed');
            const K = setInterval(() => {
              var F;
              T.closed &&
                (delete this.openedPanelWindows[E],
                clearInterval(K),
                typeof (C == null ? void 0 : C.onClose) == 'function' &&
                  ((F = C.onClose) == null || F.call(C)));
            }, 1e3);
            return (this.openedPanelWindows[E] = T), T;
          }
          close(E) {
            !this.openedPanelWindows[E] ||
              (this.openedPanelWindows[E].close(),
              delete this.openedPanelWindows[E]);
          }
          has(E) {
            return !!this.openedPanelWindows[E];
          }
        }
        const v = new M();
      },
      65710: () => {},
    },
    Fr = {};
  function J(A) {
    var N = Fr[A];
    if (N !== void 0) return N.exports;
    var r = (Fr[A] = { id: A, loaded: !1, exports: {} });
    return Ur[A].call(r.exports, r, r.exports, J), (r.loaded = !0), r.exports;
  }
  (J.m = Ur),
    (() => {
      var A = [];
      J.O = (N, r, u, y) => {
        if (r) {
          y = y || 0;
          for (var f = A.length; f > 0 && A[f - 1][2] > y; f--) A[f] = A[f - 1];
          A[f] = [r, u, y];
          return;
        }
        for (var M = 1 / 0, f = 0; f < A.length; f++) {
          for (var [r, u, y] = A[f], v = !0, D = 0; D < r.length; D++)
            (y & !1 || M >= y) && Object.keys(J.O).every((x) => J.O[x](r[D]))
              ? r.splice(D--, 1)
              : ((v = !1), y < M && (M = y));
          if (v) {
            A.splice(f--, 1);
            var E = u();
            E !== void 0 && (N = E);
          }
        }
        return N;
      };
    })(),
    (() => {
      J.n = (A) => {
        var N = A && A.__esModule ? () => A.default : () => A;
        return J.d(N, { a: N }), N;
      };
    })(),
    (() => {
      var A = Object.getPrototypeOf
          ? (r) => Object.getPrototypeOf(r)
          : (r) => r.__proto__,
        N;
      J.t = function (r, u) {
        if (
          (u & 1 && (r = this(r)),
          u & 8 ||
            (typeof r == 'object' &&
              r &&
              ((u & 4 && r.__esModule) ||
                (u & 16 && typeof r.then == 'function'))))
        )
          return r;
        var y = Object.create(null);
        J.r(y);
        var f = {};
        N = N || [null, A({}), A([]), A(A)];
        for (
          var M = u & 2 && r;
          typeof M == 'object' && !~N.indexOf(M);
          M = A(M)
        )
          Object.getOwnPropertyNames(M).forEach((v) => (f[v] = () => r[v]));
        return (f.default = () => r), J.d(y, f), y;
      };
    })(),
    (() => {
      J.d = (A, N) => {
        for (var r in N)
          J.o(N, r) &&
            !J.o(A, r) &&
            Object.defineProperty(A, r, { enumerable: !0, get: N[r] });
      };
    })(),
    (() => {
      (J.f = {}),
        (J.e = (A) =>
          Promise.all(
            Object.keys(J.f).reduce((N, r) => (J.f[r](A, N), N), [])
          ));
    })(),
    (() => {
      J.u = (A) =>
        '' +
        ({ 152: 'invite', 179: 'main', 497: 'entry' }[A] || A) +
        '.' +
        {
          20: '74346ca71ba5832bd3d9',
          108: '3688d3185257661f8b68',
          152: 'e79e3bc384ba67e3f6f6',
          179: '5e3df670559f45fa5391',
          236: 'a3f78a40f5f37656199d',
          258: '734d1f62c251bd410997',
          260: '7a384533a437d5ddf40e',
          497: '53e2e455e91278207c3d',
          528: 'ac69d20cfc6300fc3c90',
          538: '65d05a13d61982b8ebaa',
          556: '7ca110b57b308ff9ef08',
          579: 'de13c3c70ec5c6b7f4ce',
          697: '4e7032371df106c044f2',
          776: 'cf4c61f4d4a38aa1a805',
          848: 'e911df667b6c3de71f0a',
          861: 'af581dbec15ecd2e54d9',
          899: '02afbb5c04045b9649aa',
          921: '9dbac02ed0a44d76da65',
          943: '24ec3689c968f5db06a9',
          994: '552a810289903861fb8b',
        }[A] +
        '.js';
    })(),
    (() => {
      J.miniCssF = (A) =>
        'styles-' +
        {
          179: 'caef96163010b89aa2f7',
          497: 'e738542ab6491cf1d167',
          776: '50d0f44196a778ac360f',
          848: '45ccb0ce04745b282308',
          943: 'a9670318a1b15746ce8d',
        }[A] +
        '.css';
    })(),
    (() => {
      J.g = (function () {
        if (typeof globalThis == 'object') return globalThis;
        try {
          return this || new Function('return this')();
        } catch (A) {
          if (typeof window == 'object') return window;
        }
      })();
    })(),
    (() => {
      J.o = (A, N) => Object.prototype.hasOwnProperty.call(A, N);
    })(),
    (() => {
      var A = {},
        N = 'tailchat-web:';
      J.l = (r, u, y, f) => {
        if (A[r]) {
          A[r].push(u);
          return;
        }
        var M, v;
        if (y !== void 0)
          for (
            var D = document.getElementsByTagName('script'), E = 0;
            E < D.length;
            E++
          ) {
            var C = D[E];
            if (
              C.getAttribute('src') == r ||
              C.getAttribute('data-webpack') == N + y
            ) {
              M = C;
              break;
            }
          }
        M ||
          ((v = !0),
          (M = document.createElement('script')),
          (M.charset = 'utf-8'),
          (M.timeout = 120),
          J.nc && M.setAttribute('nonce', J.nc),
          M.setAttribute('data-webpack', N + y),
          (M.src = r)),
          (A[r] = [u]);
        var T = (F, x) => {
            (M.onerror = M.onload = null), clearTimeout(K);
            var j = A[r];
            if (
              (delete A[r],
              M.parentNode && M.parentNode.removeChild(M),
              j && j.forEach((O) => O(x)),
              F)
            )
              return F(x);
          },
          K = setTimeout(
            T.bind(null, void 0, { type: 'timeout', target: M }),
            12e4
          );
        (M.onerror = T.bind(null, M.onerror)),
          (M.onload = T.bind(null, M.onload)),
          v && document.head.appendChild(M);
      };
    })(),
    (() => {
      J.r = (A) => {
        typeof Symbol != 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(A, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(A, '__esModule', { value: !0 });
      };
    })(),
    (() => {
      J.nmd = (A) => ((A.paths = []), A.children || (A.children = []), A);
    })(),
    (() => {
      J.p = '/';
    })(),
    (() => {
      if (typeof J != 'undefined') {
        var A = J.u,
          N = J.e,
          r = {},
          u = {},
          y = function () {
            return 0;
          };
        (J.u = function (f) {
          var M = A(f);
          return M + (r.hasOwnProperty(f) ? '?' + r[f] : '');
        }),
          (J.e = function (f) {
            var M = N(f);
            return M.catch(function (v) {
              var D = u.hasOwnProperty(f) ? u[f] : 2;
              if (D < 1) {
                var E = A(f);
                throw (
                  ((v.message =
                    'Loading chunk ' +
                    f +
                    ` failed after 2 retries.
(` +
                    E +
                    ')'),
                  (v.request = E),
                  v)
                );
              }
              return new Promise(function (C) {
                var T = 2 - D + 1;
                setTimeout(function () {
                  var K = '&retry-attempt=' + T,
                    F = 'cache-bust=true' + K;
                  (r[f] = F), (u[f] = D - 1), C(J.e(f));
                }, y(T));
              });
            });
          });
      }
    })(),
    (() => {
      if (typeof document != 'undefined') {
        var A = (y, f, M, v, D) => {
            var E = document.createElement('link');
            (E.rel = 'stylesheet'), (E.type = 'text/css');
            var C = (T) => {
              if (((E.onerror = E.onload = null), T.type === 'load')) v();
              else {
                var K = T && (T.type === 'load' ? 'missing' : T.type),
                  F = (T && T.target && T.target.href) || f,
                  x = new Error(
                    'Loading CSS chunk ' +
                      y +
                      ` failed.
(` +
                      F +
                      ')'
                  );
                (x.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (x.type = K),
                  (x.request = F),
                  E.parentNode.removeChild(E),
                  D(x);
              }
            };
            return (
              (E.onerror = E.onload = C),
              (E.href = f),
              M
                ? M.parentNode.insertBefore(E, M.nextSibling)
                : document.head.appendChild(E),
              E
            );
          },
          N = (y, f) => {
            for (
              var M = document.getElementsByTagName('link'), v = 0;
              v < M.length;
              v++
            ) {
              var D = M[v],
                E = D.getAttribute('data-href') || D.getAttribute('href');
              if (D.rel === 'stylesheet' && (E === y || E === f)) return D;
            }
            for (
              var C = document.getElementsByTagName('style'), v = 0;
              v < C.length;
              v++
            ) {
              var D = C[v],
                E = D.getAttribute('data-href');
              if (E === y || E === f) return D;
            }
          },
          r = (y) =>
            new Promise((f, M) => {
              var v = J.miniCssF(y),
                D = J.p + v;
              if (N(v, D)) return f();
              A(y, D, null, f, M);
            }),
          u = { 143: 0 };
        J.f.miniCss = (y, f) => {
          var M = { 179: 1, 497: 1, 776: 1, 848: 1, 943: 1 };
          u[y]
            ? f.push(u[y])
            : u[y] !== 0 &&
              M[y] &&
              f.push(
                (u[y] = r(y).then(
                  () => {
                    u[y] = 0;
                  },
                  (v) => {
                    throw (delete u[y], v);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var A = { 143: 0 };
      (J.f.j = (u, y) => {
        var f = J.o(A, u) ? A[u] : void 0;
        if (f !== 0)
          if (f) y.push(f[2]);
          else {
            var M = new Promise((C, T) => (f = A[u] = [C, T]));
            y.push((f[2] = M));
            var v = J.p + J.u(u),
              D = new Error(),
              E = (C) => {
                if (J.o(A, u) && ((f = A[u]), f !== 0 && (A[u] = void 0), f)) {
                  var T = C && (C.type === 'load' ? 'missing' : C.type),
                    K = C && C.target && C.target.src;
                  (D.message =
                    'Loading chunk ' +
                    u +
                    ` failed.
(` +
                    T +
                    ': ' +
                    K +
                    ')'),
                    (D.name = 'ChunkLoadError'),
                    (D.type = T),
                    (D.request = K),
                    f[1](D);
                }
              };
            J.l(v, E, 'chunk-' + u, u);
          }
      }),
        (J.O.j = (u) => A[u] === 0);
      var N = (u, y) => {
          var [f, M, v] = y,
            D,
            E,
            C = 0;
          if (f.some((K) => A[K] !== 0)) {
            for (D in M) J.o(M, D) && (J.m[D] = M[D]);
            if (v) var T = v(J);
          }
          for (u && u(y); C < f.length; C++)
            (E = f[C]), J.o(A, E) && A[E] && A[E][0](), (A[E] = 0);
          return J.O(T);
        },
        r = (self.webpackChunktailchat_web =
          self.webpackChunktailchat_web || []);
      r.forEach(N.bind(null, 0)), (r.push = N.bind(null, r.push.bind(r)));
    })(),
    (() => {
      J.nc = void 0;
    })();
  var Rr = J.O(void 0, [410, 799, 342], () => J(81653));
  Rr = J.O(Rr);
})();
