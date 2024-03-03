// ECS
!(function (t) {
  'use strict'
  class e {}
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  function i(t, e, i, n) {
    var s,
      o = arguments.length,
      r = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n)
    else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(e, i, r) : s(e, i)) || r)
    return o > 3 && r && Object.defineProperty(e, i, r), r
  }
  function n(t, e) {
    if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e)
  }
  function s(t, e, i, n) {
    return new (i || (i = Promise))(function (s, o) {
      function r(t) {
        try {
          h(n.next(t))
        } catch (t) {
          o(t)
        }
      }
      function a(t) {
        try {
          h(n.throw(t))
        } catch (t) {
          o(t)
        }
      }
      function h(t) {
        var e
        t.done
          ? s(t.value)
          : ((e = t.value),
            e instanceof i
              ? e
              : new i(function (t) {
                  t(e)
                })).then(r, a)
      }
      h((n = n.apply(t, e || [])).next())
    })
  }
  ;(e.AVATAR = { getEntityRepresentation: (t) => t.avatarEntity }),
    (e.FIRST_PERSON_CAMERA = { getEntityRepresentation: (t) => t.firstPersonCameraEntity })
  let o = 0
  function r(...t) {
    'undefined' != typeof dcl ? dcl.log(...t) : console.log('DEBUG:', ...t)
  }
  function a(t, e) {
    'undefined' != typeof dcl ? dcl.error(t, e) : console.error('ERROR:', t, e)
  }
  function h(t) {
    if ((o++, 0 === t.length)) throw new Error('newId(type: string): type cannot be empty')
    return t + o.toString(36)
  }
  function d() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
      const e = (16 * Math.random()) | 0
      return ('x' === t ? e : (3 & e) | 8).toString(16)
    })
  }
  const l = '__event_name__',
    c = []
  function p(t) {
    if (!(l in t) || 'string' != typeof t[l]) throw new Error('The EventConstructor is not registered')
    return t[l]
  }
  class u {
    constructor() {
      this.listeners = {}
    }
    addListener(t, e, i) {
      if (!t || 'function' != typeof t) throw new Error('Invalid EventConstructor')
      const n = p(t)
      let s = this.listeners[n]
      s || (s = this.listeners[n] = [])
      for (let t = 0; t < s.length; t++) {
        if (s[t].listener === e) throw new Error('The provided listener is already registered')
      }
      return s.push({ listener: e, fn: i }), this
    }
    removeListener(t, e) {
      if (!e || 'function' != typeof e) throw new Error('Invalid EventConstructor')
      const i = p(e),
        n = this.listeners[i]
      if (!n) return !1
      for (let e = 0; e < n.length; e++) {
        if (n[e].listener === t) return n.splice(e, 1), !0
      }
      return !1
    }
    fireEvent(t) {
      const e = p(t.constructor),
        i = this.listeners[e]
      if (i)
        for (let e = 0; e < i.length; e++)
          try {
            const n = i[e]
            n.fn.call(n.listener, t)
          } catch (t) {
            a(t)
          }
      return this
    }
  }
  function y() {
    const t = h('EV')
    if (-1 !== c.indexOf(t)) throw new Error(`The event name ${t} is already taken`)
    return c.push(t), (e) => ((e[l] = t), e)
  }
  var m
  ;(t.ComponentRemoved = class {
    constructor(t, e, i) {
      ;(this.entity = t), (this.componentName = e), (this.component = i)
    }
  }),
    (t.ComponentRemoved = i([y(), n('design:paramtypes', [Object, String, Object])], t.ComponentRemoved)),
    (t.ComponentAdded = class {
      constructor(t, e, i) {
        ;(this.entity = t), (this.componentName = e), (this.classId = i)
      }
    }),
    (t.ComponentAdded = i([y(), n('design:paramtypes', [Object, String, Object])], t.ComponentAdded)),
    (t.ParentChanged = class {
      constructor(t, e) {
        ;(this.entity = t), (this.parent = e)
      }
    }),
    (t.ParentChanged = i([y(), n('design:paramtypes', [Object, Object])], t.ParentChanged)),
    (t.UIValueType = void 0),
    ((m = t.UIValueType || (t.UIValueType = {}))[(m.PERCENT = 0)] = 'PERCENT'),
    (m[(m.PIXELS = 1)] = 'PIXELS')
  class g {
    constructor(e) {
      if (((this.type = t.UIValueType.PIXELS), 'string' == typeof e)) {
        const i = e
        i.indexOf('px') > -1 ? (this.type = t.UIValueType.PIXELS) : i.indexOf('%') > -1 && (this.type = t.UIValueType.PERCENT),
          (this.value = parseFloat(i))
      } else this.value = e
    }
    toString() {
      let e = this.value.toString()
      return this.type === t.UIValueType.PERCENT ? (e += '%') : (e += 'px'), e
    }
  }
  const f = '__name__symbol_',
    x = '__classId__symbol_',
    v = '__component__id_'
  function T(t, e) {
    return function (i) {
      if (i.isComponent) throw new TypeError(`You cannot extend a component. Trying to extend ${i.originalClassName} with: ${t}`)
      const n = i,
        s = function () {
          const i = Array.prototype.slice.call(arguments),
            s = new n(...i)
          return (
            Object.defineProperty(s, f, { enumerable: !1, writable: !1, configurable: !1, value: t }),
            void 0 !== e && Object.defineProperty(s, x, { enumerable: !1, writable: !1, configurable: !1, value: e }),
            s
          )
        }
      return (
        void 0 !== e && (s[x] = e),
        (s[f] = t),
        (s.isComponent = !0),
        (s.originalClassName = t),
        ((s.prototype = i.prototype).constructor = i),
        s
      )
    }
  }
  function A(t, e) {
    return function (i) {
      if (i.isComponent) throw new TypeError(`You cannot extend a component. Trying to extend ${i.originalClassName} with: ${t}`)
      if ('number' != typeof e || isNaN(e)) throw new Error(`classId: ${e} is an invalid integer`)
      const n = i,
        s = function () {
          if (!A.engine) throw new Error('You need to set a DisposableComponent.engine before creating disposable components')
          const i = Array.prototype.slice.call(arguments),
            s = new n(...i),
            o = h('C')
          return (
            Object.defineProperty(s, f, { enumerable: !1, writable: !1, configurable: !1, value: t }),
            Object.defineProperty(s, v, { enumerable: !1, writable: !1, configurable: !1, value: o }),
            void 0 !== e && Object.defineProperty(s, x, { enumerable: !1, writable: !1, configurable: !1, value: e }),
            A.engine && A.engine.registerComponent(s),
            s
          )
        }
      return (
        void 0 !== e && (s[x] = e),
        (s[f] = t),
        (s.isComponent = !0),
        (s.isDisposableComponent = !0),
        (s.originalClassName = t),
        ((s.prototype = i.prototype).constructor = i),
        s
      )
    }
  }
  function S(t) {
    if (!t) throw new TypeError(t + ' is not a component.')
    if (t[f]) return t[f]
    throw new TypeError(t + ' is not a registered component.')
  }
  function _(t) {
    if (!t) throw new TypeError(t + ' is not a component.')
    if (t[x]) return t[x]
    if (!t[f]) throw new TypeError(t + ' is not a registered component.')
    return null
  }
  function b(t) {
    if (!t) throw new TypeError(t + ' is not a component.')
    if (t[v]) return t[v]
    throw new TypeError(t + ' is not a registered disposable component.')
  }
  ;(t.DisposableComponentCreated = class {
    constructor(t, e, i) {
      ;(this.componentId = t), (this.componentName = e), (this.classId = i)
    }
  }),
    (t.DisposableComponentCreated = i([y(), n('design:paramtypes', [String, String, Number])], t.DisposableComponentCreated)),
    (t.DisposableComponentRemoved = class {
      constructor(t) {
        this.componentId = t
      }
    }),
    (t.DisposableComponentRemoved = i([y(), n('design:paramtypes', [String])], t.DisposableComponentRemoved)),
    (t.DisposableComponentUpdated = class {
      constructor(t, e) {
        ;(this.componentId = t), (this.component = e)
      }
    }),
    (t.DisposableComponentUpdated = i([y(), n('design:paramtypes', [String, Object])], t.DisposableComponentUpdated)),
    (function (t) {
      t.engine = null
    })(A || (A = {}))
  class w {
    constructor() {
      ;(this.dirty = !1), (this.data = {}), (this.subscriptions = [])
    }
    static component(t, e) {
      if (delete t[e]) {
        const i = e + '_' + Math.random()
        ;(t[i] = void 0),
          Object.defineProperty(t, i, Object.assign(Object.assign({}, Object.getOwnPropertyDescriptor(t, i)), { enumerable: !1 })),
          Object.defineProperty(t, e.toString(), {
            get: function () {
              return this[i]
            },
            set: function (t) {
              const n = this[i]
              if (((this.data[e] = t ? b(t) : null), (this[i] = t), t !== n)) {
                this.dirty = !0
                for (let i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](e, t, n)
              }
            },
            enumerable: !0,
          })
      }
    }
    static field(t, e) {
      delete t[e] &&
        Object.defineProperty(t, e.toString(), {
          get: function () {
            return this.data[e]
          },
          set: function (t) {
            const i = this.data[e]
            if (((this.data[e] = t), t !== i)) {
              this.dirty = !0
              for (let n = 0; n < this.subscriptions.length; n++) this.subscriptions[n](e, t, i)
            }
          },
          enumerable: !0,
        })
    }
    static uiValue(t, e) {
      delete t[e] &&
        Object.defineProperty(t, e.toString(), {
          get: function () {
            return this.data[e].toString()
          },
          set: function (t) {
            const i = this.data[e],
              n = new g(t)
            if (((this.data[e] = n), n !== i)) {
              this.dirty = !0
              for (let t = 0; t < this.subscriptions.length; t++) this.subscriptions[t](e, n, i)
            }
          },
          enumerable: !0,
        })
    }
    static readonly(t, e) {
      delete t[e] &&
        Object.defineProperty(t, e.toString(), {
          get: function () {
            if (e in this.data == !1) throw new Error(`The field ${e} is uninitialized`)
            return this.data[e]
          },
          set: function (t) {
            if (e in this.data) throw new Error(`The field ${e} is readonly`)
            ;(this.data[e] = t), (this.dirty = !0)
          },
          enumerable: !0,
          configurable: !1,
        })
    }
    onChange(t) {
      return this.subscriptions.push(t), this
    }
    toJSON() {
      return this.data
    }
  }
  function R(t) {
    return v in t
  }
  class C {
    constructor(...t) {
      if (((this.entities = []), (this.active = !1), (this._requiresNames = []), !t))
        throw new Error('ComponentGroup: Could not load the requires list')
      if (!(t instanceof Array)) throw new Error('ComponentGroup: requires list is not an Array')
      Object.defineProperty(this, 'requires', {
        get: function () {
          return t.slice()
        },
      }),
        Object.defineProperty(this, 'requiresNames', {
          get: function () {
            return this._requiresNames.slice()
          },
        })
      for (let e = 0; e < t.length; e++) {
        const i = t[e]
        let n = null
        if (!i) throw new Error(`ComponentGroup: the required component at location ${e} is invalid`)
        try {
          n = S(i)
        } catch (t) {
          throw new Error(
            `ComponentGroup: the required component at location ${e} is not registered as a @Component. Remember to provide the class of the component, not the name`
          )
        }
        if (this._requiresNames.some((t) => t === n))
          throw new Error(`ComponentGroup: the required component list has a repeated name ${n}`)
        this._requiresNames.push(n)
      }
    }
    hasEntity(t) {
      return !!t.isAddedToEngine() && -1 !== this.entities.indexOf(t)
    }
    addEntity(t) {
      if (!t.isAddedToEngine()) throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine')
      ;-1 === this.entities.indexOf(t) && this.entities.push(t)
    }
    removeEntity(t) {
      const e = this.entities.indexOf(t)
      ;-1 !== e && this.entities.splice(e, 1)
    }
    componentRemoved(t, e) {
      ;-1 !== this._requiresNames.indexOf(e) && this.removeEntity(t)
    }
    meetsRequirements(t) {
      for (let e = 0; e < this._requiresNames.length; e++) {
        if (!(this._requiresNames[e] in t.components)) return !1
      }
      return !0
    }
  }
  class I {
    constructor(t) {
      ;(this.name = t),
        (this.children = {}),
        (this.eventManager = null),
        (this.alive = !1),
        (this.uuid = h('E')),
        (this.components = {}),
        (this.engine = null),
        (this._parent = null)
    }
    addComponentOrReplace(t) {
      if ('function' == typeof t) throw new Error('You passed a function or class as a component, an instance of component is expected')
      if ('object' != typeof t) throw new Error(`You passed a ${typeof t}, an instance of component is expected`)
      const e = S(t)
      if (this.components[e]) {
        if (this.components[e] === t) return t
        this.removeComponent(this.components[e], !1)
      }
      return this.addComponent(t)
    }
    hasComponent(t) {
      const e = typeof t
      if ('string' !== e && 'object' !== e && 'function' !== e)
        throw new Error('Entity#has(component): component is not a class, name or instance')
      if (null === t) return !1
      const i = 'string' === e ? t : S(t),
        n = this.components[i]
      return !!n && ('object' === e ? n === t : 'function' !== e || n instanceof t)
    }
    getComponent(t) {
      const e = typeof t
      if ('string' !== e && 'function' !== e) throw new Error('Entity#get(component): component is not a class or name')
      const i = 'string' === e ? t : S(t),
        n = this.components[i]
      if (!n) throw new Error(`Can not get component "${i}" from entity "${this.identifier}"`)
      if ('function' === e) {
        if (n instanceof t) return n
        throw new Error(`Can not get component "${i}" from entity "${this.identifier}" (by instance)`)
      }
      return n
    }
    getComponentOrNull(t) {
      const e = typeof t
      if ('string' !== e && 'function' !== e) throw new Error('Entity#getOrNull(component): component is not a class or name')
      const i = 'string' === e ? t : S(t),
        n = this.components[i]
      return n ? ('function' === e ? (n instanceof t ? n : null) : n) : null
    }
    getComponentOrCreate(t) {
      if ('function' != typeof t) throw new Error('Entity#getOrCreate(component): component is not a class')
      let e = this.getComponentOrNull(t)
      return e || ((e = new t()), S(e), this.addComponentOrReplace(e)), e
    }
    addComponent(e) {
      if ('object' != typeof e)
        throw new Error('Entity#add(component): You passed a function or class as a component, an instance of component is expected')
      const i = S(e),
        n = _(e)
      if (this.components[i]) throw new Error(`A component of type "${i}" is already present in entity "${this.identifier}"`)
      ;(this.components[i] = e), this.eventManager && this.eventManager.fireEvent(new t.ComponentAdded(this, i, n))
      const s = e
      return 'function' == typeof s.addedToEntity && s.addedToEntity(this), e
    }
    removeComponent(e, i = !0) {
      const n = typeof e
      if ('string' !== n && 'function' !== n && 'object' !== n)
        throw new Error('Entity#remove(component): component is not a class, class or name')
      const s = 'string' === n ? e : S(e),
        o = this.components[s]
      if (o) {
        if ('function' === n)
          return o instanceof e
            ? (delete this.components[s],
              void (
                o &&
                (i && this.eventManager && this.eventManager.fireEvent(new t.ComponentRemoved(this, s, o)),
                'function' == typeof o.removedFromEntity && o.removedFromEntity(this))
              ))
            : void r(`Entity Warning: Trying to remove wrong (by constructor) component "${s}" from entity "${this.identifier}"`)
        delete this.components[s],
          o &&
            (i && this.eventManager && this.eventManager.fireEvent(new t.ComponentRemoved(this, s, o)),
            'function' == typeof o.removedFromEntity && o.removedFromEntity(this))
      } else r(`Entity Warning: Trying to remove inexisting component "${s}" from entity "${this.identifier}"`)
    }
    isAddedToEngine() {
      return !(!this.engine || (!(this.uuid in this.engine.entities) && this.engine.rootEntity !== this))
    }
    setParent(e) {
      let i
      if (e && 'getEntityRepresentation' in e) {
        if (!this.engine) throw new Error('In order to set an attachable as parent, you first need to add the entity to the engine.')
        i = e.getEntityRepresentation(this.engine)
      } else i = !e && this.engine ? this.engine.rootEntity : e
      const n = this.getParent()
      if (i === this)
        throw new Error(`Failed to set parent for entity "${this.identifier}": An entity can't set itself as a its own parent`)
      if (i === n) return this
      const s = this.getCircularAncestor(i)
      if (s)
        throw new Error(
          `Failed to set parent for entity "${this.identifier}": Circular parent references are not allowed (See entity "${s}")`
        )
      return (
        n && delete n.children[this.uuid],
        null !== i &&
          '0' !== i.uuid &&
          (!i.isAddedToEngine() && this.isAddedToEngine() && this.engine.removeEntity(this),
          i.isAddedToEngine() && !this.isAddedToEngine() && i.engine.addEntity(this)),
        (this._parent = i || null),
        this.registerAsChild(),
        this.eventManager && this.engine && this.eventManager.fireEvent(new t.ParentChanged(this, i)),
        this
      )
    }
    getParent() {
      return this._parent
    }
    get identifier() {
      return this.name || this.uuid
    }
    getCircularAncestor(t) {
      const e = this.engine ? this.engine.rootEntity : null
      let i = t
      for (; i && i !== e; ) {
        const t = i.getParent()
        if (t === this) return i.uuid
        i = t
      }
      return null
    }
    registerAsChild() {
      const t = this.getParent()
      this.uuid && t && (t.children[this.uuid] = this)
    }
  }
  class E {
    get entities() {
      return this._entities
    }
    get disposableComponents() {
      return this._disposableComponents
    }
    constructor(e) {
      ;(this.eventManager = new u()),
        (this.systems = []),
        (this.entityLists = {}),
        (this.addedSystems = []),
        (this._entities = {}),
        (this._disposableComponents = {}),
        (this._componentGroups = {}),
        (this.simpleSystems = []),
        this.eventManager.addListener(t.ComponentAdded, this, this.componentAddedHandler),
        this.eventManager.addListener(t.ComponentRemoved, this, this.componentRemovedHandler),
        (this.rootEntity = e),
        (this.firstPersonCameraEntity = new I()),
        (this.firstPersonCameraEntity.uuid = 'FirstPersonCameraEntityReference'),
        this.addEntity(this.firstPersonCameraEntity),
        (this.avatarEntity = new I()),
        (this.avatarEntity.uuid = 'AvatarEntityReference'),
        this.addEntity(this.avatarEntity)
    }
    addEntity(t) {
      const e = t.getParent()
      if (t.isAddedToEngine()) return t
      ;(t.eventManager = this.eventManager),
        (t.engine = this),
        (this._entities[t.uuid] = t),
        this.checkRequirementsAndAdd(t),
        e
          ? e.isAddedToEngine() ||
            e === this.rootEntity ||
            r('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' + e.uuid)
          : t.setParent(this.rootEntity),
        (t.alive = !0)
      for (const e in t.children) {
        const i = t.children[e]
        i && (i.isAddedToEngine() || this.addEntity(i))
      }
      return t
    }
    removeEntity(t) {
      const e = t.uuid
      if (t.isAddedToEngine()) {
        for (const i in t.components) {
          const n = this._componentGroups[i]
          if (n) for (const e in n) n[e].removeEntity(t)
          delete this.entityLists[i][e]
        }
        for (let e = 0; e < this.simpleSystems.length; e++) {
          const i = this.simpleSystems[e]
          i.onRemoveEntity && i.onRemoveEntity(t)
        }
        for (const e in t.children) {
          const i = t.children[e]
          i && this.removeEntity(i)
        }
        return (t.alive = !1), (t.eventManager = null), delete this._entities[e], !0
      }
      r('Engine: Trying to remove non existent entity from engine.'),
        t.isAddedToEngine() ? r('Engine: Entity id: ' + e) : r(`Engine: Entity "${t.uuid}" has not been added to any engine yet.`),
        r("Engine: Entity's components:")
      for (const e in t.components) r(e)
      return !1
    }
    addSystem(t, e = 0) {
      if (-1 !== this.addedSystems.indexOf(t)) return r('Engine: Trying to add a system that is already added. Aborting'), t
      if (this.systems.length > 0)
        for (let i = 0; i < this.systems.length; i++) {
          const n = this.systems[i],
            s = i === this.systems.length - 1
          if (n.priority > e) {
            this.addedSystems.push(t), this.systems.splice(i, 0, { system: t, priority: e })
            break
          }
          if (s) {
            this.addedSystems.push(t), this.systems.splice(i + 1, 0, { system: t, priority: e })
            break
          }
        }
      else this.addedSystems.push(t), this.systems.splice(1, 0, { system: t, priority: e })
      return this.registerSystem(t), t
    }
    removeSystem(t) {
      const e = this.addedSystems.indexOf(t)
      if (-1 !== e) {
        ;(t.active = !1), t.deactivate && t.deactivate(), this.addedSystems.splice(e, 1)
        for (let e = 0; e < this.systems.length; e++) {
          this.systems[e].system === t && this.systems.splice(e, 1)
        }
        return !0
      }
      return !1
    }
    update(t) {
      for (const e in this.systems) {
        const i = this.systems[e].system
        if (i.active && i.update)
          try {
            i.update(t)
          } catch (t) {
            a(t)
          }
      }
      return this
    }
    getEntitiesWithComponent(t) {
      const e = 'string' == typeof t ? t : S(t)
      return e in this.entityLists ? this.entityLists[e] : (this.entityLists[e] = {})
    }
    registerComponent(e) {
      const i = b(e),
        n = S(e),
        s = _(e)
      ;(this._disposableComponents[i] = e),
        null !== s &&
          (this.eventManager.fireEvent(new t.DisposableComponentCreated(i, n, s)),
          this.eventManager.fireEvent(new t.DisposableComponentUpdated(i, e)))
    }
    disposeComponent(e) {
      const i = b(e)
      return (
        delete this._disposableComponents[i] &&
        (this.eventManager.fireEvent(new t.DisposableComponentRemoved(i)), e.onDispose && e.onDispose(), !0)
      )
    }
    updateComponent(e) {
      this.eventManager.fireEvent(new t.DisposableComponentUpdated(b(e), e))
    }
    getComponentGroup(...t) {
      let e
      if (t.length > 0) {
        const i = this._componentGroups[S(t[0])]
        if (i) {
          const n = t.slice()
          for (let t = 0; t < i.length; t++) {
            const s = i[t]
            if (n.length === s.requires.length) {
              for (let t = 0; t < n.length && -1 !== s.requires.indexOf(n[t]); t++) t === n.length - 1 && (e = s)
              if (e) break
            }
          }
        }
      }
      if (e) return e
      ;(e = new C(...t)), (e.active = !0)
      const i = e.requiresNames
      for (let t = 0; t < i.length; t++) {
        const n = i[t]
        let s = this._componentGroups[n]
        s || (this._componentGroups[n] = s = []), -1 === s.indexOf(e) && s.push(e)
      }
      for (const t in this._entities) this.checkRequirements(this._entities[t], e)
      return e
    }
    removeComponentGroup(t) {
      if (t.active) {
        t.active = !1
        const e = t.requiresNames
        for (let i = 0; i < e.length; i++) {
          const n = e[i],
            s = this._componentGroups[n]
          if (s) {
            const e = s.indexOf(t)
            ;-1 !== e && s.splice(e, 1)
          }
        }
        return !0
      }
      return !1
    }
    registerSystem(t) {
      ;(t.active = !0), t.activate && t.activate(this), this.simpleSystems.push(t)
    }
    checkRequirementsAndAdd(t) {
      if (t.isAddedToEngine()) {
        for (const e in t.components) {
          e in this.entityLists || (this.entityLists[e] = {}), (this.entityLists[e][t.uuid] = t)
          const i = this._componentGroups[e]
          if (i) for (const e in i) this.checkRequirements(t, i[e])
        }
        for (let e = 0; e < this.simpleSystems.length; e++) {
          const i = this.simpleSystems[e]
          i.onAddEntity && i.onAddEntity(t)
        }
      }
    }
    checkRequirements(t, e) {
      e.meetsRequirements(t) ? e.hasEntity(t) || e.addEntity(t) : e.hasEntity(t) && e.removeEntity(t)
    }
    componentAddedHandler(t) {
      const { entity: e, componentName: i } = t
      if (!e.isAddedToEngine()) return
      this.entityLists[i] ? (this.entityLists[i][e.uuid] = e) : (this.entityLists[i] = { [e.uuid]: e })
      const n = this._componentGroups[i]
      if (n) for (const t in n) this.checkRequirements(e, n[t])
    }
    componentRemovedHandler(t) {
      const { entity: e, componentName: i } = t
      if (!e.isAddedToEngine()) return
      delete this.entityLists[i][e.uuid]
      const n = this._componentGroups[i]
      if (n) for (const t in n) this.checkRequirements(e, n[t])
    }
  }
  const O = Promise.resolve().then.bind(Promise.resolve())
  function z(t) {
    const e = O(t)
    return (
      (e.isComplete = !1),
      e
        .then((t) => {
          ;(e.isComplete = !0), (e.result = t), (e.didFail = !1)
        })
        .catch((t) => {
          ;(e.isComplete = !0), (e.error = t), (e.didFail = !0), a('executeTask: FAILED ' + t.toString(), t)
        }),
      e
    )
  }
  class P {
    constructor(t, e = !1, i, n) {
      this.initalize(t, e, i, n)
    }
    initalize(t, e = !1, i, n) {
      return (this.mask = t), (this.skipNextObservers = e), (this.target = i), (this.currentTarget = n), this
    }
  }
  class M {
    constructor(t, e, i = null) {
      ;(this.callback = t), (this.mask = e), (this.scope = i), (this.unregisterOnNextCall = !1), (this._willBeUnregistered = !1)
    }
  }
  class F {
    constructor() {
      ;(this._observers = null), (this._observables = null)
    }
    static Watch(t, e, i = -1, n = null) {
      const s = new F()
      ;(s._observers = new Array()), (s._observables = t)
      for (const o of t) {
        const t = o.add(e, i, !1, n)
        t && s._observers.push(t)
      }
      return s
    }
    dispose() {
      if (this._observers && this._observables)
        for (let t = 0; t < this._observers.length; t++) this._observables[t].remove(this._observers[t])
      ;(this._observers = null), (this._observables = null)
    }
  }
  class N {
    constructor(t) {
      ;(this._observers = new Array()), (this._onObserverAdded = null), (this._eventState = new P(0)), t && (this._onObserverAdded = t)
    }
    add(t, e = -1, i = !1, n = null, s = !1) {
      if (!t) return null
      const o = new M(t, e, n)
      return (
        (o.unregisterOnNextCall = s),
        i ? this._observers.unshift(o) : this._observers.push(o),
        this._onObserverAdded && this._onObserverAdded(o),
        o
      )
    }
    addOnce(t) {
      return this.add(t, void 0, void 0, void 0, !0)
    }
    remove(t) {
      if (!t) return !1
      return -1 !== this._observers.indexOf(t) && (this._deferUnregister(t), !0)
    }
    removeCallback(t, e) {
      for (let i = 0; i < this._observers.length; i++)
        if (this._observers[i].callback === t && (!e || e === this._observers[i].scope))
          return this._deferUnregister(this._observers[i]), !0
      return !1
    }
    notifyObservers(t, e = -1, i, n) {
      if (!this._observers.length) return !0
      const s = this._eventState
      ;(s.mask = e), (s.target = i), (s.currentTarget = n), (s.skipNextObservers = !1), (s.lastReturnValue = t)
      for (const i of this._observers)
        if (
          !i._willBeUnregistered &&
          (i.mask & e &&
            (i.scope ? (s.lastReturnValue = i.callback.apply(i.scope, [t, s])) : (s.lastReturnValue = i.callback(t, s)),
            i.unregisterOnNextCall && this._deferUnregister(i)),
          s.skipNextObservers)
        )
          return !1
      return !0
    }
    notifyObserversWithPromise(t, e = -1, i, n) {
      let s = Promise.resolve(t)
      if (!this._observers.length) return s
      const o = this._eventState
      return (
        (o.mask = e),
        (o.target = i),
        (o.currentTarget = n),
        (o.skipNextObservers = !1),
        this._observers.forEach((i) => {
          o.skipNextObservers ||
            i._willBeUnregistered ||
            (i.mask & e &&
              ((s = i.scope
                ? s.then((e) => ((o.lastReturnValue = e), i.callback.apply(i.scope, [t, o])))
                : s.then((e) => ((o.lastReturnValue = e), i.callback(t, o)))),
              i.unregisterOnNextCall && this._deferUnregister(i)))
        }),
        s.then(() => t)
      )
    }
    notifyObserver(t, e, i = -1) {
      const n = this._eventState
      ;(n.mask = i), (n.skipNextObservers = !1), t.callback(e, n)
    }
    hasObservers() {
      return this._observers.length > 0
    }
    clear() {
      ;(this._observers = new Array()), (this._onObserverAdded = null)
    }
    clone() {
      const t = new N()
      return (t._observers = this._observers.slice(0)), t
    }
    hasSpecificMask(t = -1) {
      for (const e of this._observers) if (e.mask & t || e.mask === t) return !0
      return !1
    }
    _deferUnregister(t) {
      ;(t.unregisterOnNextCall = !1),
        (t._willBeUnregistered = !0),
        z(() =>
          s(this, void 0, void 0, function* () {
            return this._remove(t)
          })
        )
    }
    _remove(t) {
      if (!t) return !1
      const e = this._observers.indexOf(t)
      return -1 !== e && (this._observers.splice(e, 1), !0)
    }
  }
  let U, D
  function L(t) {
    return () => {
      D && D.subscribe(t)
    }
  }
  ;(t.UUIDEvent = class {
    constructor(t, e) {
      ;(this.uuid = t), (this.payload = e)
    }
  }),
    (t.UUIDEvent = i([y(), n('design:paramtypes', [String, Object])], t.UUIDEvent)),
    (t.RaycastResponse = class {
      constructor(t) {
        this.payload = t
      }
    }),
    (t.RaycastResponse = i([y(), n('design:paramtypes', [Object])], t.RaycastResponse)),
    (t.PointerEvent = class {
      constructor(t) {
        this.payload = t
      }
    }),
    (t.PointerEvent = i([y(), n('design:paramtypes', [Object])], t.PointerEvent))
  const B = new N(L('cameraModeChanged')),
    V = new N(L('idleStateChanged')),
    H = new N(L('onEnterScene')),
    k = H,
    G = new N(L('onLeaveScene')),
    j = G,
    q = new N(L('sceneStart')),
    W = new N(L('playerExpression')),
    Y = new N(L('onPointerLock')),
    X = new N(L('videoEvent')),
    Q = new N(L('profileChanged')),
    $ = new N(L('playerConnected')),
    Z = new N(L('playerDisconnected')),
    J = new N(L('onRealmChanged')),
    K = new N(L('playerClicked'))
  function tt(t) {
    ;(D = t),
      D &&
        D.onEvent((t) => {
          switch (t.type) {
            case 'onEnterScene':
              return void H.notifyObservers(t.data)
            case 'onLeaveScene':
              return void G.notifyObservers(t.data)
            case 'cameraModeChanged':
              return void B.notifyObservers(t.data)
            case 'idleStateChanged':
              return void V.notifyObservers(t.data)
            case 'sceneStart':
              return void q.notifyObservers(t.data)
            case 'playerExpression':
              return void W.notifyObservers(t.data)
            case 'videoEvent': {
              const e = t.data,
                i = A.engine.disposableComponents[e.componentId]
              return i && i.update(e), void X.notifyObservers(e)
            }
            case 'profileChanged':
              return void Q.notifyObservers(t.data)
            case 'onPointerLock':
              return void Y.notifyObservers(t.data)
            case 'playerConnected':
              return void $.notifyObservers(t.data)
            case 'playerDisconnected':
              return void Z.notifyObservers(t.data)
            case 'onRealmChanged':
              return void J.notifyObservers(t.data)
            case 'playerClicked':
              return void K.notifyObservers(t.data)
          }
        })
  }
  class et {
    constructor(t) {
      ;(this.dcl = t), (this.cachedComponents = {})
    }
    activate(e) {
      ;(this.engine = e),
        e.eventManager.addListener(t.ComponentAdded, this, this.componentAdded),
        e.eventManager.addListener(t.ComponentRemoved, this, this.componentRemoved),
        e.eventManager.addListener(t.DisposableComponentCreated, this, this.disposableComponentCreated),
        e.eventManager.addListener(t.DisposableComponentRemoved, this, this.disposableComponentRemoved),
        e.eventManager.addListener(t.DisposableComponentUpdated, this, this.disposableComponentUpdated),
        e.eventManager.addListener(t.ParentChanged, this, this.parentChanged)
      const i = e.rootEntity.uuid
      this.dcl.addEntity(i),
        this.dcl.onUpdate((t) => {
          e.update(t), this.presentEntities()
        }),
        this.dcl.onEvent((i) => {
          const n = i.data
          switch (i.type) {
            case 'uuidEvent':
              e.eventManager.fireEvent(new t.UUIDEvent(n.uuid, n.payload))
              break
            case 'raycastResponse':
              ;('HitFirst' === n.queryType || 'HitAll' === n.queryType) && e.eventManager.fireEvent(new t.RaycastResponse(n))
              break
            case 'actionButtonEvent':
              e.eventManager.fireEvent(new t.PointerEvent(n.payload))
          }
        })
    }
    onAddEntity(t) {
      if (t && t.isAddedToEngine()) {
        const e = t.uuid,
          i = t.getParent()
        this.dcl.addEntity(e), i && this.dcl.setParent(e, i.uuid), (this.cachedComponents[e] = {})
        for (const i in t.components) {
          const n = t.components[i],
            s = _(n)
          if (null !== s)
            if (R(n)) this.dcl.attachEntityComponent(t.uuid, i, b(n))
            else {
              const t = JSON.stringify(n)
              this.dcl.updateEntityComponent(e, i, s, t), (this.cachedComponents[e][i] = t)
            }
        }
      }
    }
    onRemoveEntity(t) {
      if (t.isAddedToEngine()) {
        const e = t.uuid
        this.dcl.removeEntity(e), delete this.cachedComponents[e]
      }
    }
    presentEntities() {
      for (const t in this.engine.entities) {
        const e = this.engine.entities[t]
        for (const t in e.components) {
          const i = e.components[t],
            n = _(i)
          if (null !== n && !R(i)) {
            const s = this.getJsonIfDirty(e.uuid, t, i)
            s && (this.dcl.updateEntityComponent(e.uuid, t, n, s), this.clearDirty(e.uuid, t, i, s))
          }
        }
      }
      for (const t in this.engine.disposableComponents) {
        const e = this.engine.disposableComponents[t]
        e instanceof w && e.dirty && (this.dcl.componentUpdated(t, JSON.stringify(e)), (e.dirty = !1))
      }
    }
    componentAdded(t) {
      if (t.entity.isAddedToEngine()) {
        const e = t.entity.components[t.componentName]
        if (R(e)) this.dcl.attachEntityComponent(t.entity.uuid, t.componentName, b(e))
        else if (null !== t.classId) {
          const i = JSON.stringify(e)
          this.dcl.updateEntityComponent(t.entity.uuid, t.componentName, t.classId, i),
            (this.cachedComponents[t.entity.uuid][t.componentName] = i)
        }
      }
    }
    componentRemoved(t) {
      t.entity.isAddedToEngine() &&
        (this.dcl.removeEntityComponent(t.entity.uuid, t.componentName), delete this.cachedComponents[t.entity.uuid][t.componentName])
    }
    disposableComponentCreated(t) {
      this.dcl.componentCreated(t.componentId, t.componentName, t.classId)
    }
    disposableComponentRemoved(t) {
      this.dcl.componentDisposed(t.componentId)
    }
    disposableComponentUpdated(t) {
      this.dcl.componentUpdated(t.componentId, JSON.stringify(t.component))
    }
    parentChanged(t) {
      this.dcl.setParent(t.entity.uuid, t.parent ? t.parent.uuid : '0')
    }
    getJsonIfDirty(t, e, i) {
      const n = JSON.stringify(i)
      return n !== this.cachedComponents[t][e] && n
    }
    clearDirty(t, e, i, n) {
      this.cachedComponents[t][e] = n
    }
  }
  var it =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    nt = {},
    st = {}
  !(function (t) {
    var e, i
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.RAD2DEG = t.DEG2RAD = t.Epsilon = t.ToLinearSpace = t.ToGammaSpace = t.Space = t.Orientation = void 0),
      ((e = t.Orientation || (t.Orientation = {}))[(e.CW = 0)] = 'CW'),
      (e[(e.CCW = 1)] = 'CCW'),
      ((i = t.Space || (t.Space = {}))[(i.LOCAL = 0)] = 'LOCAL'),
      (i[(i.WORLD = 1)] = 'WORLD'),
      (i[(i.BONE = 2)] = 'BONE'),
      (t.ToGammaSpace = 1 / 2.2),
      (t.ToLinearSpace = 2.2),
      (t.Epsilon = 1e-6),
      (t.DEG2RAD = Math.PI / 180),
      (t.RAD2DEG = 360 / (2 * Math.PI))
  })(st)
  var ot,
    rt = {},
    at = {}
  var ht,
    dt,
    lt,
    ct,
    pt,
    ut = {},
    yt = {},
    mt = {},
    gt = {},
    ft = {}
  Object.defineProperty(ft, '__esModule', { value: !0 }), (ft.Scalar = void 0)
  class xt {
    static WithinEpsilon(t, e, i = 1401298e-51) {
      const n = t - e
      return -i <= n && n <= i
    }
    static ToHex(t) {
      const e = t.toString(16)
      return t <= 15 ? ('0' + e).toUpperCase() : e.toUpperCase()
    }
    static Sign(t) {
      const e = +t
      return 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
    }
    static Clamp(t, e = 0, i = 1) {
      return Math.min(i, Math.max(e, t))
    }
    static Log2(t) {
      return Math.log(t) * Math.LOG2E
    }
    static Repeat(t, e) {
      return t - Math.floor(t / e) * e
    }
    static Normalize(t, e, i) {
      return (t - e) / (i - e)
    }
    static Denormalize(t, e, i) {
      return t * (i - e) + e
    }
    static DeltaAngle(t, e) {
      let i = xt.Repeat(e - t, 360)
      return i > 180 && (i -= 360), i
    }
    static PingPong(t, e) {
      const i = xt.Repeat(t, 2 * e)
      return e - Math.abs(i - e)
    }
    static SmoothStep(t, e, i) {
      let n = xt.Clamp(i)
      return (n = -2 * n * n * n + 3 * n * n), e * n + t * (1 - n)
    }
    static MoveTowards(t, e, i) {
      let n = 0
      return (n = Math.abs(e - t) <= i ? e : t + xt.Sign(e - t) * i), n
    }
    static MoveTowardsAngle(t, e, i) {
      const n = xt.DeltaAngle(t, e)
      let s = 0
      return (s = -i < n && n < i ? e : xt.MoveTowards(t, t + n, i)), s
    }
    static Lerp(t, e, i) {
      return t + (e - t) * i
    }
    static LerpAngle(t, e, i) {
      let n = xt.Repeat(e - t, 360)
      return n > 180 && (n -= 360), t + n * xt.Clamp(i)
    }
    static InverseLerp(t, e, i) {
      let n = 0
      return (n = t !== e ? xt.Clamp((i - t) / (e - t)) : 0), n
    }
    static Hermite(t, e, i, n, s) {
      const o = s * s,
        r = s * o
      return t * (2 * r - 3 * o + 1) + i * (-2 * r + 3 * o) + e * (r - 2 * o + s) + n * (r - o)
    }
    static RandomRange(t, e) {
      return t === e ? t : Math.random() * (e - t) + t
    }
    static RangeToPercent(t, e, i) {
      return (t - e) / (i - e)
    }
    static PercentToRange(t, e, i) {
      return (i - e) * t + e
    }
    static NormalizeRadians(t) {
      return t - xt.TwoPi * Math.floor((t + Math.PI) / xt.TwoPi)
    }
  }
  function vt() {
    if (ht) return gt
    ;(ht = 1), Object.defineProperty(gt, '__esModule', { value: !0 }), (gt.Vector4 = void 0)
    const t = st,
      e = ft,
      i = St()
    return (
      (gt.Vector4 = class n {
        constructor(t, e, i, n) {
          ;(this.x = t), (this.y = e), (this.z = i), (this.w = n)
        }
        static Add(t, e) {
          return new n(t.x, t.y, t.z, t.w).addInPlace(e)
        }
        static FromArray(t, e = 0) {
          return new n(t[e], t[e + 1], t[e + 2], t[e + 3])
        }
        static FromArrayToRef(t, e, i) {
          ;(i.x = t[e]), (i.y = t[e + 1]), (i.z = t[e + 2]), (i.w = t[e + 3])
        }
        static FromFloatArrayToRef(t, e, i) {
          n.FromArrayToRef(t, e, i)
        }
        static FromFloatsToRef(t, e, i, n, s) {
          ;(s.x = t), (s.y = e), (s.z = i), (s.w = n)
        }
        static Zero() {
          return new n(0, 0, 0, 0)
        }
        static One() {
          return new n(1, 1, 1, 1)
        }
        static Normalize(t) {
          const e = n.Zero()
          return n.NormalizeToRef(t, e), e
        }
        static NormalizeToRef(t, e) {
          e.copyFrom(t), e.normalize()
        }
        static Minimize(t, e) {
          const i = new n(t.x, t.y, t.z, t.w)
          return i.minimizeInPlace(e), i
        }
        static Maximize(t, e) {
          const i = new n(t.x, t.y, t.z, t.w)
          return i.maximizeInPlace(e), i
        }
        static Distance(t, e) {
          return Math.sqrt(n.DistanceSquared(t, e))
        }
        static DistanceSquared(t, e) {
          const i = t.x - e.x,
            n = t.y - e.y,
            s = t.z - e.z,
            o = t.w - e.w
          return i * i + n * n + s * s + o * o
        }
        static Center(t, e) {
          const i = n.Add(t, e)
          return i.scaleInPlace(0.5), i
        }
        static TransformNormal(t, e) {
          const i = n.Zero()
          return n.TransformNormalToRef(t, e, i), i
        }
        static TransformNormalToRef(t, e, i) {
          const n = e.m,
            s = t.x * n[0] + t.y * n[4] + t.z * n[8],
            o = t.x * n[1] + t.y * n[5] + t.z * n[9],
            r = t.x * n[2] + t.y * n[6] + t.z * n[10]
          ;(i.x = s), (i.y = o), (i.z = r), (i.w = t.w)
        }
        static TransformNormalFromFloatsToRef(t, e, i, n, s, o) {
          const r = s.m
          ;(o.x = t * r[0] + e * r[4] + i * r[8]),
            (o.y = t * r[1] + e * r[5] + i * r[9]),
            (o.z = t * r[2] + e * r[6] + i * r[10]),
            (o.w = n)
        }
        toString() {
          return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
        }
        getClassName() {
          return 'Vector4'
        }
        getHashCode() {
          let t = this.x || 0
          return (t = (397 * t) ^ (this.y || 0)), (t = (397 * t) ^ (this.z || 0)), (t = (397 * t) ^ (this.w || 0)), t
        }
        asArray() {
          const t = new Array()
          return this.toArray(t, 0), t
        }
        toArray(t, e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), this
        }
        addInPlace(t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
        }
        add(t) {
          return new n(this.x + t.x, this.y + t.y, this.z + t.z, this.w + t.w)
        }
        addToRef(t, e) {
          return (e.x = this.x + t.x), (e.y = this.y + t.y), (e.z = this.z + t.z), (e.w = this.w + t.w), this
        }
        subtractInPlace(t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
        }
        subtract(t) {
          return new n(this.x - t.x, this.y - t.y, this.z - t.z, this.w - t.w)
        }
        subtractToRef(t, e) {
          return (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z), (e.w = this.w - t.w), this
        }
        subtractFromFloats(t, e, i, s) {
          return new n(this.x - t, this.y - e, this.z - i, this.w - s)
        }
        subtractFromFloatsToRef(t, e, i, n, s) {
          return (s.x = this.x - t), (s.y = this.y - e), (s.z = this.z - i), (s.w = this.w - n), this
        }
        negate() {
          return new n(-this.x, -this.y, -this.z, -this.w)
        }
        scaleInPlace(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
        }
        scale(t) {
          return new n(this.x * t, this.y * t, this.z * t, this.w * t)
        }
        scaleToRef(t, e) {
          return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
        }
        scaleAndAddToRef(t, e) {
          return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
        }
        equals(t) {
          return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
        }
        equalsWithEpsilon(i, n = t.Epsilon) {
          return (
            i &&
            e.Scalar.WithinEpsilon(this.x, i.x, n) &&
            e.Scalar.WithinEpsilon(this.y, i.y, n) &&
            e.Scalar.WithinEpsilon(this.z, i.z, n) &&
            e.Scalar.WithinEpsilon(this.w, i.w, n)
          )
        }
        equalsToFloats(t, e, i, n) {
          return this.x === t && this.y === e && this.z === i && this.w === n
        }
        multiplyInPlace(t) {
          return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
        }
        multiply(t) {
          return new n(this.x * t.x, this.y * t.y, this.z * t.z, this.w * t.w)
        }
        multiplyToRef(t, e) {
          return (e.x = this.x * t.x), (e.y = this.y * t.y), (e.z = this.z * t.z), (e.w = this.w * t.w), this
        }
        multiplyByFloats(t, e, i, s) {
          return new n(this.x * t, this.y * e, this.z * i, this.w * s)
        }
        divide(t) {
          return new n(this.x / t.x, this.y / t.y, this.z / t.z, this.w / t.w)
        }
        divideToRef(t, e) {
          return (e.x = this.x / t.x), (e.y = this.y / t.y), (e.z = this.z / t.z), (e.w = this.w / t.w), this
        }
        divideInPlace(t) {
          return this.divideToRef(t, this)
        }
        minimizeInPlace(t) {
          return (
            t.x < this.x && (this.x = t.x),
            t.y < this.y && (this.y = t.y),
            t.z < this.z && (this.z = t.z),
            t.w < this.w && (this.w = t.w),
            this
          )
        }
        maximizeInPlace(t) {
          return (
            t.x > this.x && (this.x = t.x),
            t.y > this.y && (this.y = t.y),
            t.z > this.z && (this.z = t.z),
            t.w > this.w && (this.w = t.w),
            this
          )
        }
        floor() {
          return new n(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
        }
        fract() {
          return new n(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z), this.w - Math.floor(this.w))
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        normalize() {
          const t = this.length()
          return 0 === t ? this : this.scaleInPlace(1 / t)
        }
        toVector3() {
          return new i.Vector3(this.x, this.y, this.z)
        }
        clone() {
          return new n(this.x, this.y, this.z, this.w)
        }
        copyFrom(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
        }
        copyFromFloats(t, e, i, n) {
          return (this.x = t), (this.y = e), (this.z = i), (this.w = n), this
        }
        set(t, e, i, n) {
          return this.copyFromFloats(t, e, i, n)
        }
        setAll(t) {
          return (this.x = this.y = this.z = this.w = t), this
        }
      }),
      gt
    )
  }
  function Tt() {
    if (dt) return mt
    ;(dt = 1), Object.defineProperty(mt, '__esModule', { value: !0 }), (mt.Matrix = void 0)
    const t = _t(),
      e = St(),
      i = At(),
      n = vt()
    let s = class s {
      constructor() {
        ;(this._isIdentity = !1),
          (this._isIdentityDirty = !0),
          (this._isIdentity3x2 = !0),
          (this._isIdentity3x2Dirty = !0),
          (this._m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          this._updateIdentityStatus(!1)
      }
      get m() {
        return this._m
      }
      static get IdentityReadOnly() {
        return s._identityReadOnly
      }
      static FromArray(t, e = 0) {
        const i = new s()
        return s.FromArrayToRef(t, e, i), i
      }
      static FromArrayToRef(t, e, i) {
        for (let n = 0; n < 16; n++) i._m[n] = t[n + e]
        i._markAsUpdated()
      }
      static FromFloatArrayToRefScaled(t, e, i, n) {
        for (let s = 0; s < 16; s++) n._m[s] = t[s + e] * i
        n._markAsUpdated()
      }
      static FromValuesToRef(t, e, i, n, s, o, r, a, h, d, l, c, p, u, y, m, g) {
        const f = g._m
        ;(f[0] = t),
          (f[1] = e),
          (f[2] = i),
          (f[3] = n),
          (f[4] = s),
          (f[5] = o),
          (f[6] = r),
          (f[7] = a),
          (f[8] = h),
          (f[9] = d),
          (f[10] = l),
          (f[11] = c),
          (f[12] = p),
          (f[13] = u),
          (f[14] = y),
          (f[15] = m),
          g._markAsUpdated()
      }
      static FromValues(t, e, i, n, o, r, a, h, d, l, c, p, u, y, m, g) {
        const f = new s(),
          x = f._m
        return (
          (x[0] = t),
          (x[1] = e),
          (x[2] = i),
          (x[3] = n),
          (x[4] = o),
          (x[5] = r),
          (x[6] = a),
          (x[7] = h),
          (x[8] = d),
          (x[9] = l),
          (x[10] = c),
          (x[11] = p),
          (x[12] = u),
          (x[13] = y),
          (x[14] = m),
          (x[15] = g),
          f._markAsUpdated(),
          f
        )
      }
      static Compose(t, e, i) {
        const n = new s()
        return s.ComposeToRef(t, e, i, n), n
      }
      static ComposeToRef(e, i, n, o) {
        const r = (0, t.getMathTmp)()
        s.ScalingToRef(e.x, e.y, e.z, r.Matrix[1]),
          i.toRotationMatrix(r.Matrix[0]),
          r.Matrix[1].multiplyToRef(r.Matrix[0], o),
          o.setTranslation(n)
      }
      static Identity() {
        const t = s.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        return t._updateIdentityStatus(!0), t
      }
      static IdentityToRef(t) {
        s.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t), t._updateIdentityStatus(!0)
      }
      static Zero() {
        const t = s.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        return t._updateIdentityStatus(!1), t
      }
      static RotationX(t) {
        const e = new s()
        return s.RotationXToRef(t, e), e
      }
      static Invert(t) {
        const e = new s()
        return t.invertToRef(e), e
      }
      static RotationXToRef(t, e) {
        const i = Math.sin(t),
          n = Math.cos(t)
        s.FromValuesToRef(1, 0, 0, 0, 0, n, i, 0, 0, -i, n, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(1 === n && 0 === i)
      }
      static RotationY(t) {
        const e = new s()
        return s.RotationYToRef(t, e), e
      }
      static RotationYToRef(t, e) {
        const i = Math.sin(t),
          n = Math.cos(t)
        s.FromValuesToRef(n, 0, -i, 0, 0, 1, 0, 0, i, 0, n, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(1 === n && 0 === i)
      }
      static RotationZ(t) {
        const e = new s()
        return s.RotationZToRef(t, e), e
      }
      static RotationZToRef(t, e) {
        const i = Math.sin(t),
          n = Math.cos(t)
        s.FromValuesToRef(n, i, 0, 0, -i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(1 === n && 0 === i)
      }
      static RotationAxis(t, e) {
        const i = new s()
        return s.RotationAxisToRef(t, e, i), i
      }
      static RotationAxisToRef(t, e, i) {
        const n = Math.sin(-e),
          s = Math.cos(-e),
          o = 1 - s
        t.normalize()
        const r = i._m
        ;(r[0] = t.x * t.x * o + s),
          (r[1] = t.x * t.y * o - t.z * n),
          (r[2] = t.x * t.z * o + t.y * n),
          (r[3] = 0),
          (r[4] = t.y * t.x * o + t.z * n),
          (r[5] = t.y * t.y * o + s),
          (r[6] = t.y * t.z * o - t.x * n),
          (r[7] = 0),
          (r[8] = t.z * t.x * o - t.y * n),
          (r[9] = t.z * t.y * o + t.x * n),
          (r[10] = t.z * t.z * o + s),
          (r[11] = 0),
          (r[12] = 0),
          (r[13] = 0),
          (r[14] = 0),
          (r[15] = 1),
          i._markAsUpdated()
      }
      static RotationYawPitchRoll(t, e, i) {
        const n = new s()
        return s.RotationYawPitchRollToRef(t, e, i, n), n
      }
      static RotationYawPitchRollToRef(e, n, s, o) {
        const r = (0, t.getMathTmp)()
        i.Quaternion.RotationYawPitchRollToRef(e, n, s, r.Quaternion[0]), r.Quaternion[0].toRotationMatrix(o)
      }
      static Scaling(t, e, i) {
        const n = new s()
        return s.ScalingToRef(t, e, i, n), n
      }
      static ScalingToRef(t, e, i, n) {
        s.FromValuesToRef(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === t && 1 === e && 1 === i)
      }
      static Translation(t, e, i) {
        const n = new s()
        return s.TranslationToRef(t, e, i, n), n
      }
      static TranslationToRef(t, e, i, n) {
        s.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1, n), n._updateIdentityStatus(0 === t && 0 === e && 0 === i)
      }
      static Lerp(t, e, i) {
        const n = new s()
        return s.LerpToRef(t, e, i, n), n
      }
      static LerpToRef(t, e, i, n) {
        for (let s = 0; s < 16; s++) n._m[s] = t._m[s] * (1 - i) + e._m[s] * i
        n._markAsUpdated()
      }
      static DecomposeLerp(t, e, i) {
        const n = new s()
        return s.DecomposeLerpToRef(t, e, i, n), n
      }
      static DecomposeLerpToRef(n, o, r, a) {
        const h = (0, t.getMathTmp)(),
          d = h.Vector3[0],
          l = h.Quaternion[0],
          c = h.Vector3[1]
        n.decompose(d, l, c)
        const p = h.Vector3[2],
          u = h.Quaternion[1],
          y = h.Vector3[3]
        o.decompose(p, u, y)
        const m = h.Vector3[4]
        e.Vector3.LerpToRef(d, p, r, m)
        const g = h.Quaternion[2]
        i.Quaternion.SlerpToRef(l, u, r, g)
        const f = h.Vector3[5]
        e.Vector3.LerpToRef(c, y, r, f), s.ComposeToRef(m, g, f, a)
      }
      static LookAtLH(t, e, i) {
        const n = new s()
        return s.LookAtLHToRef(t, e, i, n), n
      }
      static LookAtLHToRef(i, n, o, r) {
        const a = (0, t.getMathTmp)(),
          h = a.Vector3[0],
          d = a.Vector3[1],
          l = a.Vector3[2]
        n.subtractToRef(i, l), l.normalize(), e.Vector3.CrossToRef(o, l, h)
        const c = h.lengthSquared()
        0 === c ? (h.x = 1) : h.normalizeFromLength(Math.sqrt(c)), e.Vector3.CrossToRef(l, h, d), d.normalize()
        const p = -e.Vector3.Dot(h, i),
          u = -e.Vector3.Dot(d, i),
          y = -e.Vector3.Dot(l, i)
        s.FromValuesToRef(h.x, d.x, l.x, 0, h.y, d.y, l.y, 0, h.z, d.z, l.z, 0, p, u, y, 1, r)
      }
      static LookAtRH(t, e, i) {
        const n = new s()
        return s.LookAtRHToRef(t, e, i, n), n
      }
      static LookAtRHToRef(i, n, o, r) {
        const a = (0, t.getMathTmp)(),
          h = a.Vector3[0],
          d = a.Vector3[1],
          l = a.Vector3[2]
        i.subtractToRef(n, l), l.normalize(), e.Vector3.CrossToRef(o, l, h)
        const c = h.lengthSquared()
        0 === c ? (h.x = 1) : h.normalizeFromLength(Math.sqrt(c)), e.Vector3.CrossToRef(l, h, d), d.normalize()
        const p = -e.Vector3.Dot(h, i),
          u = -e.Vector3.Dot(d, i),
          y = -e.Vector3.Dot(l, i)
        s.FromValuesToRef(h.x, d.x, l.x, 0, h.y, d.y, l.y, 0, h.z, d.z, l.z, 0, p, u, y, 1, r)
      }
      static OrthoLH(t, e, i, n) {
        const o = new s()
        return s.OrthoLHToRef(t, e, i, n, o), o
      }
      static OrthoLHToRef(t, e, i, n, o) {
        const r = 2 / t,
          a = 2 / e,
          h = 2 / (n - i),
          d = -(n + i) / (n - i)
        s.FromValuesToRef(r, 0, 0, 0, 0, a, 0, 0, 0, 0, h, 0, 0, 0, d, 1, o),
          o._updateIdentityStatus(1 === r && 1 === a && 1 === h && 0 === d)
      }
      static OrthoOffCenterLH(t, e, i, n, o, r) {
        const a = new s()
        return s.OrthoOffCenterLHToRef(t, e, i, n, o, r, a), a
      }
      static OrthoOffCenterLHToRef(t, e, i, n, o, r, a) {
        const h = 2 / (e - t),
          d = 2 / (n - i),
          l = 2 / (r - o),
          c = -(r + o) / (r - o),
          p = (t + e) / (t - e),
          u = (n + i) / (i - n)
        s.FromValuesToRef(h, 0, 0, 0, 0, d, 0, 0, 0, 0, l, 0, p, u, c, 1, a), a._markAsUpdated()
      }
      static OrthoOffCenterRH(t, e, i, n, o, r) {
        const a = new s()
        return s.OrthoOffCenterRHToRef(t, e, i, n, o, r, a), a
      }
      static OrthoOffCenterRHToRef(t, e, i, n, o, r, a) {
        s.OrthoOffCenterLHToRef(t, e, i, n, o, r, a), (a._m[10] *= -1)
      }
      static PerspectiveLH(t, e, i, n) {
        const o = new s(),
          r = (2 * i) / t,
          a = (2 * i) / e,
          h = (n + i) / (n - i),
          d = (-2 * n * i) / (n - i)
        return s.FromValuesToRef(r, 0, 0, 0, 0, a, 0, 0, 0, 0, h, 1, 0, 0, d, 0, o), o._updateIdentityStatus(!1), o
      }
      static PerspectiveFovLH(t, e, i, n) {
        const o = new s()
        return s.PerspectiveFovLHToRef(t, e, i, n, o), o
      }
      static PerspectiveFovLHToRef(t, e, i, n, o, r = !0) {
        const a = i,
          h = n,
          d = 1 / Math.tan(0.5 * t),
          l = r ? d / e : d,
          c = r ? d : d * e,
          p = (h + a) / (h - a),
          u = (-2 * h * a) / (h - a)
        s.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, p, 1, 0, 0, u, 0, o), o._updateIdentityStatus(!1)
      }
      static PerspectiveFovRH(t, e, i, n) {
        const o = new s()
        return s.PerspectiveFovRHToRef(t, e, i, n, o), o
      }
      static PerspectiveFovRHToRef(t, e, i, n, o, r = !0) {
        const a = i,
          h = n,
          d = 1 / Math.tan(0.5 * t),
          l = r ? d / e : d,
          c = r ? d : d * e,
          p = -(h + a) / (h - a),
          u = (-2 * h * a) / (h - a)
        s.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, p, -1, 0, 0, u, 0, o), o._updateIdentityStatus(!1)
      }
      static PerspectiveFovWebVRToRef(t, e, i, n, s = !1) {
        const o = s ? -1 : 1,
          r = Math.tan((t.upDegrees * Math.PI) / 180),
          a = Math.tan((t.downDegrees * Math.PI) / 180),
          h = Math.tan((t.leftDegrees * Math.PI) / 180),
          d = Math.tan((t.rightDegrees * Math.PI) / 180),
          l = 2 / (h + d),
          c = 2 / (r + a),
          p = n._m
        ;(p[0] = l),
          (p[1] = p[2] = p[3] = p[4] = 0),
          (p[5] = c),
          (p[6] = p[7] = 0),
          (p[8] = (h - d) * l * 0.5),
          (p[9] = -(r - a) * c * 0.5),
          (p[10] = -i / (e - i)),
          (p[11] = 1 * o),
          (p[12] = p[13] = p[15] = 0),
          (p[14] = (-2 * i * e) / (i - e)),
          n._markAsUpdated()
      }
      static GetAsMatrix2x2(t) {
        return [t._m[0], t._m[1], t._m[4], t._m[5]]
      }
      static GetAsMatrix3x3(t) {
        return [t._m[0], t._m[1], t._m[2], t._m[4], t._m[5], t._m[6], t._m[8], t._m[9], t._m[10]]
      }
      static Transpose(t) {
        const e = new s()
        return s.TransposeToRef(t, e), e
      }
      static TransposeToRef(t, e) {
        const i = e._m,
          n = t._m
        ;(i[0] = n[0]),
          (i[1] = n[4]),
          (i[2] = n[8]),
          (i[3] = n[12]),
          (i[4] = n[1]),
          (i[5] = n[5]),
          (i[6] = n[9]),
          (i[7] = n[13]),
          (i[8] = n[2]),
          (i[9] = n[6]),
          (i[10] = n[10]),
          (i[11] = n[14]),
          (i[12] = n[3]),
          (i[13] = n[7]),
          (i[14] = n[11]),
          (i[15] = n[15]),
          e._updateIdentityStatus(t._isIdentity, t._isIdentityDirty)
      }
      static Reflection(t) {
        const e = new s()
        return s.ReflectionToRef(t, e), e
      }
      static ReflectionToRef(t, e) {
        t.normalize()
        const i = t.normal.x,
          n = t.normal.y,
          o = t.normal.z,
          r = -2 * i,
          a = -2 * n,
          h = -2 * o
        s.FromValuesToRef(
          r * i + 1,
          a * i,
          h * i,
          0,
          r * n,
          a * n + 1,
          h * n,
          0,
          r * o,
          a * o,
          h * o + 1,
          0,
          r * t.d,
          a * t.d,
          h * t.d,
          1,
          e
        )
      }
      static FromXYZAxesToRef(t, e, i, n) {
        s.FromValuesToRef(t.x, t.y, t.z, 0, e.x, e.y, e.z, 0, i.x, i.y, i.z, 0, 0, 0, 0, 1, n)
      }
      static FromQuaternionToRef(t, e) {
        const i = t.x * t.x,
          n = t.y * t.y,
          s = t.z * t.z,
          o = t.x * t.y,
          r = t.z * t.w,
          a = t.z * t.x,
          h = t.y * t.w,
          d = t.y * t.z,
          l = t.x * t.w
        ;(e._m[0] = 1 - 2 * (n + s)),
          (e._m[1] = 2 * (o + r)),
          (e._m[2] = 2 * (a - h)),
          (e._m[3] = 0),
          (e._m[4] = 2 * (o - r)),
          (e._m[5] = 1 - 2 * (s + i)),
          (e._m[6] = 2 * (d + l)),
          (e._m[7] = 0),
          (e._m[8] = 2 * (a + h)),
          (e._m[9] = 2 * (d - l)),
          (e._m[10] = 1 - 2 * (n + i)),
          (e._m[11] = 0),
          (e._m[12] = 0),
          (e._m[13] = 0),
          (e._m[14] = 0),
          (e._m[15] = 1),
          e._markAsUpdated()
      }
      _markAsUpdated() {
        ;(this.updateFlag = s._updateFlagSeed++),
          (this._isIdentity = !1),
          (this._isIdentity3x2 = !1),
          (this._isIdentityDirty = !0),
          (this._isIdentity3x2Dirty = !0)
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1
          const t = this._m
          this._isIdentity =
            1 === t[0] &&
            0 === t[1] &&
            0 === t[2] &&
            0 === t[3] &&
            0 === t[4] &&
            1 === t[5] &&
            0 === t[6] &&
            0 === t[7] &&
            0 === t[8] &&
            0 === t[9] &&
            1 === t[10] &&
            0 === t[11] &&
            0 === t[12] &&
            0 === t[13] &&
            0 === t[14] &&
            1 === t[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return (
          this._isIdentity3x2Dirty &&
            ((this._isIdentity3x2Dirty = !1),
            1 !== this._m[0] ||
            1 !== this._m[5] ||
            1 !== this._m[15] ||
            0 !== this._m[1] ||
            0 !== this._m[2] ||
            0 !== this._m[3] ||
            0 !== this._m[4] ||
            0 !== this._m[6] ||
            0 !== this._m[7] ||
            0 !== this._m[8] ||
            0 !== this._m[9] ||
            0 !== this._m[10] ||
            0 !== this._m[11] ||
            0 !== this._m[12] ||
            0 !== this._m[13] ||
            0 !== this._m[14]
              ? (this._isIdentity3x2 = !1)
              : (this._isIdentity3x2 = !0)),
          this._isIdentity3x2
        )
      }
      determinant() {
        if (!0 === this._isIdentity) return 1
        const t = this._m,
          e = t[0],
          i = t[1],
          n = t[2],
          s = t[3],
          o = t[4],
          r = t[5],
          a = t[6],
          h = t[7],
          d = t[8],
          l = t[9],
          c = t[10],
          p = t[11],
          u = t[12],
          y = t[13],
          m = t[14],
          g = t[15],
          f = c * g - m * p,
          x = l * g - y * p,
          v = l * m - y * c,
          T = d * g - u * p,
          A = d * m - c * u,
          S = d * y - u * l
        return e * +(r * f - a * x + h * v) + i * -(o * f - a * T + h * A) + n * +(o * x - r * T + h * S) + s * -(o * v - r * A + a * S)
      }
      toArray() {
        return this._m
      }
      asArray() {
        return this._m
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return s.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(t) {
        const e = new s()
        return this.addToRef(t, e), e
      }
      addToRef(t, e) {
        for (let i = 0; i < 16; i++) e._m[i] = this._m[i] + t._m[i]
        return e._markAsUpdated(), this
      }
      addToSelf(t) {
        for (let e = 0; e < 16; e++) this._m[e] += t._m[e]
        return this._markAsUpdated(), this
      }
      invertToRef(t) {
        if (!0 === this._isIdentity) return s.IdentityToRef(t), this
        const e = this._m,
          i = e[0],
          n = e[1],
          o = e[2],
          r = e[3],
          a = e[4],
          h = e[5],
          d = e[6],
          l = e[7],
          c = e[8],
          p = e[9],
          u = e[10],
          y = e[11],
          m = e[12],
          g = e[13],
          f = e[14],
          x = e[15],
          v = u * x - f * y,
          T = p * x - g * y,
          A = p * f - g * u,
          S = c * x - m * y,
          _ = c * f - u * m,
          b = c * g - m * p,
          w = +(h * v - d * T + l * A),
          R = -(a * v - d * S + l * _),
          C = +(a * T - h * S + l * b),
          I = -(a * A - h * _ + d * b),
          E = i * w + n * R + o * C + r * I
        if (0 === E) return t.copyFrom(this), this
        const O = 1 / E,
          z = d * x - f * l,
          P = h * x - g * l,
          M = h * f - g * d,
          F = a * x - m * l,
          N = a * f - m * d,
          U = a * g - m * h,
          D = d * y - u * l,
          L = h * y - p * l,
          B = h * u - p * d,
          V = a * y - c * l,
          H = a * u - c * d,
          k = a * p - c * h,
          G = -(n * v - o * T + r * A),
          j = +(i * v - o * S + r * _),
          q = -(i * T - n * S + r * b),
          W = +(i * A - n * _ + o * b),
          Y = +(n * z - o * P + r * M),
          X = -(i * z - o * F + r * N),
          Q = +(i * P - n * F + r * U),
          $ = -(i * M - n * N + o * U),
          Z = -(n * D - o * L + r * B),
          J = +(i * D - o * V + r * H),
          K = -(i * L - n * V + r * k),
          tt = +(i * B - n * H + o * k)
        return (
          s.FromValuesToRef(
            w * O,
            G * O,
            Y * O,
            Z * O,
            R * O,
            j * O,
            X * O,
            J * O,
            C * O,
            q * O,
            Q * O,
            K * O,
            I * O,
            W * O,
            $ * O,
            tt * O,
            t
          ),
          this
        )
      }
      addAtIndex(t, e) {
        return (this._m[t] += e), this._markAsUpdated(), this
      }
      multiplyAtIndex(t, e) {
        return (this._m[t] *= e), this._markAsUpdated(), this
      }
      setTranslationFromFloats(t, e, i) {
        return (this._m[12] = t), (this._m[13] = e), (this._m[14] = i), this._markAsUpdated(), this
      }
      setTranslation(t) {
        return this.setTranslationFromFloats(t.x, t.y, t.z)
      }
      getTranslation() {
        return new e.Vector3(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(t) {
        return (t.x = this._m[12]), (t.y = this._m[13]), (t.z = this._m[14]), this
      }
      removeRotationAndScaling() {
        const t = this.m
        return (
          s.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t[12], t[13], t[14], t[15], this),
          this._updateIdentityStatus(0 === t[12] && 0 === t[13] && 0 === t[14] && 1 === t[15]),
          this
        )
      }
      multiply(t) {
        const e = new s()
        return this.multiplyToRef(t, e), e
      }
      copyFrom(t) {
        t.copyToArray(this._m)
        const e = t
        return this._updateIdentityStatus(e._isIdentity, e._isIdentityDirty, e._isIdentity3x2, e._isIdentity3x2Dirty), this
      }
      copyToArray(t, e = 0) {
        for (let i = 0; i < 16; i++) t[e + i] = this._m[i]
        return this
      }
      multiplyToRef(t, e) {
        return this._isIdentity
          ? (e.copyFrom(t), this)
          : t._isIdentity
          ? (e.copyFrom(this), this)
          : (this.multiplyToArray(t, e._m, 0), e._markAsUpdated(), this)
      }
      multiplyToArray(t, e, i) {
        const n = this._m,
          s = t.m,
          o = n[0],
          r = n[1],
          a = n[2],
          h = n[3],
          d = n[4],
          l = n[5],
          c = n[6],
          p = n[7],
          u = n[8],
          y = n[9],
          m = n[10],
          g = n[11],
          f = n[12],
          x = n[13],
          v = n[14],
          T = n[15],
          A = s[0],
          S = s[1],
          _ = s[2],
          b = s[3],
          w = s[4],
          R = s[5],
          C = s[6],
          I = s[7],
          E = s[8],
          O = s[9],
          z = s[10],
          P = s[11],
          M = s[12],
          F = s[13],
          N = s[14],
          U = s[15]
        return (
          (e[i] = o * A + r * w + a * E + h * M),
          (e[i + 1] = o * S + r * R + a * O + h * F),
          (e[i + 2] = o * _ + r * C + a * z + h * N),
          (e[i + 3] = o * b + r * I + a * P + h * U),
          (e[i + 4] = d * A + l * w + c * E + p * M),
          (e[i + 5] = d * S + l * R + c * O + p * F),
          (e[i + 6] = d * _ + l * C + c * z + p * N),
          (e[i + 7] = d * b + l * I + c * P + p * U),
          (e[i + 8] = u * A + y * w + m * E + g * M),
          (e[i + 9] = u * S + y * R + m * O + g * F),
          (e[i + 10] = u * _ + y * C + m * z + g * N),
          (e[i + 11] = u * b + y * I + m * P + g * U),
          (e[i + 12] = f * A + x * w + v * E + T * M),
          (e[i + 13] = f * S + x * R + v * O + T * F),
          (e[i + 14] = f * _ + x * C + v * z + T * N),
          (e[i + 15] = f * b + x * I + v * P + T * U),
          this
        )
      }
      equals(t) {
        const e = t
        if (!e) return !1
        if ((this._isIdentity || e._isIdentity) && !this._isIdentityDirty && !e._isIdentityDirty) return this._isIdentity && e._isIdentity
        const i = this.m,
          n = e.m
        return (
          i[0] === n[0] &&
          i[1] === n[1] &&
          i[2] === n[2] &&
          i[3] === n[3] &&
          i[4] === n[4] &&
          i[5] === n[5] &&
          i[6] === n[6] &&
          i[7] === n[7] &&
          i[8] === n[8] &&
          i[9] === n[9] &&
          i[10] === n[10] &&
          i[11] === n[11] &&
          i[12] === n[12] &&
          i[13] === n[13] &&
          i[14] === n[14] &&
          i[15] === n[15]
        )
      }
      clone() {
        const t = new s()
        return t.copyFrom(this), t
      }
      getClassName() {
        return 'Matrix'
      }
      getHashCode() {
        let t = this._m[0] || 0
        for (let e = 1; e < 16; e++) t = (397 * t) ^ (this._m[e] || 0)
        return t
      }
      decompose(e, n, o) {
        const r = (0, t.getMathTmp)()
        if (this._isIdentity) return o && o.setAll(0), e && e.setAll(1), n && n.copyFromFloats(0, 0, 0, 1), !0
        const a = this._m
        o && o.copyFromFloats(a[12], a[13], a[14])
        const h = e || r.Vector3[0]
        if (
          ((h.x = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])),
          (h.y = Math.sqrt(a[4] * a[4] + a[5] * a[5] + a[6] * a[6])),
          (h.z = Math.sqrt(a[8] * a[8] + a[9] * a[9] + a[10] * a[10])),
          this.determinant() <= 0 && (h.y *= -1),
          0 === h.x || 0 === h.y || 0 === h.z)
        )
          return n && n.copyFromFloats(0, 0, 0, 1), !1
        if (n) {
          const t = 1 / h.x,
            e = 1 / h.y,
            o = 1 / h.z
          s.FromValuesToRef(
            a[0] * t,
            a[1] * t,
            a[2] * t,
            0,
            a[4] * e,
            a[5] * e,
            a[6] * e,
            0,
            a[8] * o,
            a[9] * o,
            a[10] * o,
            0,
            0,
            0,
            0,
            1,
            r.Matrix[0]
          ),
            i.Quaternion.FromRotationMatrixToRef(r.Matrix[0], n)
        }
        return !0
      }
      getRow(t) {
        if (t < 0 || t > 3) return null
        const e = 4 * t
        return new n.Vector4(this._m[e + 0], this._m[e + 1], this._m[e + 2], this._m[e + 3])
      }
      setRow(t, e) {
        return this.setRowFromFloats(t, e.x, e.y, e.z, e.w)
      }
      transpose() {
        return s.Transpose(this)
      }
      transposeToRef(t) {
        return s.TransposeToRef(this, t), this
      }
      setRowFromFloats(t, e, i, n, s) {
        if (t < 0 || t > 3) return this
        const o = 4 * t
        return (this._m[o + 0] = e), (this._m[o + 1] = i), (this._m[o + 2] = n), (this._m[o + 3] = s), this._markAsUpdated(), this
      }
      scale(t) {
        const e = new s()
        return this.scaleToRef(t, e), e
      }
      scaleToRef(t, e) {
        for (let i = 0; i < 16; i++) e._m[i] = this._m[i] * t
        return e._markAsUpdated(), this
      }
      scaleAndAddToRef(t, e) {
        for (let i = 0; i < 16; i++) e._m[i] += this._m[i] * t
        return e._markAsUpdated(), this
      }
      toNormalMatrix(e) {
        const i = (0, t.getMathTmp)().Matrix[0]
        this.invertToRef(i), i.transposeToRef(e)
        const n = e._m
        s.FromValuesToRef(n[0], n[1], n[2], 0, n[4], n[5], n[6], 0, n[8], n[9], n[10], 0, 0, 0, 0, 1, e)
      }
      getRotationMatrix() {
        const t = new s()
        return this.getRotationMatrixToRef(t), t
      }
      getRotationMatrixToRef(e) {
        const i = (0, t.getMathTmp)().Vector3[0]
        if (!this.decompose(i)) return s.IdentityToRef(e), this
        const n = this._m,
          o = 1 / i.x,
          r = 1 / i.y,
          a = 1 / i.z
        return (
          s.FromValuesToRef(
            n[0] * o,
            n[1] * o,
            n[2] * o,
            0,
            n[4] * r,
            n[5] * r,
            n[6] * r,
            0,
            n[8] * a,
            n[9] * a,
            n[10] * a,
            0,
            0,
            0,
            0,
            1,
            e
          ),
          this
        )
      }
      toggleModelMatrixHandInPlace() {
        const t = this._m
        ;(t[2] *= -1), (t[6] *= -1), (t[8] *= -1), (t[9] *= -1), (t[14] *= -1), this._markAsUpdated()
      }
      toggleProjectionMatrixHandInPlace() {
        const t = this._m
        ;(t[8] *= -1), (t[9] *= -1), (t[10] *= -1), (t[11] *= -1), this._markAsUpdated()
      }
      _updateIdentityStatus(t, e = !1, i = !1, n = !0) {
        ;(this.updateFlag = s._updateFlagSeed++),
          (this._isIdentity = t),
          (this._isIdentity3x2 = t || i),
          (this._isIdentityDirty = !this._isIdentity && e),
          (this._isIdentity3x2Dirty = !this._isIdentity3x2 && n)
      }
    }
    return (mt.Matrix = s), (s._updateFlagSeed = 0), (s._identityReadOnly = s.Identity()), mt
  }
  function At() {
    if (lt) return yt
    ;(lt = 1), Object.defineProperty(yt, '__esModule', { value: !0 }), (yt.Quaternion = void 0)
    const t = _t(),
      e = Tt(),
      i = St(),
      n = ft,
      s = st
    return (
      (yt.Quaternion = class o {
        constructor(t = 0, e = 0, i = 0, n = 1) {
          ;(this.x = t), (this.y = e), (this.z = i), (this.w = n)
        }
        static FromRotationMatrix(t) {
          const e = new o()
          return o.FromRotationMatrixToRef(t, e), e
        }
        static FromRotationMatrixToRef(t, e) {
          const i = t.m,
            n = i[0],
            s = i[4],
            o = i[8],
            r = i[1],
            a = i[5],
            h = i[9],
            d = i[2],
            l = i[6],
            c = i[10],
            p = n + a + c
          let u
          p > 0
            ? ((u = 0.5 / Math.sqrt(p + 1)), (e.w = 0.25 / u), (e.x = (l - h) * u), (e.y = (o - d) * u), (e.z = (r - s) * u))
            : n > a && n > c
            ? ((u = 2 * Math.sqrt(1 + n - a - c)), (e.w = (l - h) / u), (e.x = 0.25 * u), (e.y = (s + r) / u), (e.z = (o + d) / u))
            : a > c
            ? ((u = 2 * Math.sqrt(1 + a - n - c)), (e.w = (o - d) / u), (e.x = (s + r) / u), (e.y = 0.25 * u), (e.z = (h + l) / u))
            : ((u = 2 * Math.sqrt(1 + c - n - a)), (e.w = (r - s) / u), (e.x = (o + d) / u), (e.y = (h + l) / u), (e.z = 0.25 * u))
        }
        static Dot(t, e) {
          return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
        }
        static AreClose(t, e) {
          return o.Dot(t, e) >= 0
        }
        static Zero() {
          return new o(0, 0, 0, 0)
        }
        static Inverse(t) {
          return new o(-t.x, -t.y, -t.z, t.w)
        }
        static IsIdentity(t) {
          return t && 0 === t.x && 0 === t.y && 0 === t.z && 1 === t.w
        }
        static RotationAxis(t, e) {
          const i = e * s.DEG2RAD
          return o.RotationAxisToRef(t, i, new o())
        }
        static RotationAxisToRef(t, e, i) {
          const n = e * s.DEG2RAD,
            o = Math.sin(n / 2)
          return t.normalize(), (i.w = Math.cos(n / 2)), (i.x = t.x * o), (i.y = t.y * o), (i.z = t.z * o), i
        }
        static FromArray(t, e = 0) {
          return new o(t[e], t[e + 1], t[e + 2], t[e + 3])
        }
        static FromEulerAnglesRef(t, e, i, n) {
          return o.RotationYawPitchRollToRef(e * s.DEG2RAD, t * s.DEG2RAD, i * s.DEG2RAD, n)
        }
        static RotationYawPitchRoll(t, e, i) {
          const n = new o()
          return o.RotationYawPitchRollToRef(t, e, i, n), n
        }
        static RotationYawPitchRollToRef(t, e, i, n) {
          const s = 0.5 * e,
            o = 0.5 * t,
            r = 0.5 * i,
            a = Math.cos(s),
            h = Math.cos(o),
            d = Math.cos(r),
            l = Math.sin(s),
            c = Math.sin(o),
            p = Math.sin(r)
          ;(n.x = h * l * d + c * a * p), (n.y = c * a * d - h * l * p), (n.z = h * a * p - c * l * d), (n.w = h * a * d + c * l * p)
        }
        static RotationAlphaBetaGamma(t, e, i) {
          const n = new o()
          return o.RotationAlphaBetaGammaToRef(t, e, i, n), n
        }
        static RotationAlphaBetaGammaToRef(t, e, i, n) {
          const s = 0.5 * (i + t),
            o = 0.5 * (i - t),
            r = 0.5 * e
          ;(n.x = Math.cos(o) * Math.sin(r)),
            (n.y = Math.sin(o) * Math.sin(r)),
            (n.z = Math.sin(s) * Math.cos(r)),
            (n.w = Math.cos(s) * Math.cos(r))
        }
        static RotationQuaternionFromAxis(t, e, i) {
          const n = new o(0, 0, 0, 0)
          return o.RotationQuaternionFromAxisToRef(t, e, i, n), n
        }
        static RotationQuaternionFromAxisToRef(i, n, s, r) {
          const a = (0, t.getMathTmp)().Matrix[0]
          e.Matrix.FromXYZAxesToRef(i.normalize(), n.normalize(), s.normalize(), a), o.FromRotationMatrixToRef(a, r)
        }
        static Slerp(t, e, i) {
          const n = o.Identity
          return o.SlerpToRef(t, e, i, n), n
        }
        static SlerpToRef(t, e, i, n) {
          let s,
            o,
            r = t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w,
            a = !1
          if ((r < 0 && ((a = !0), (r = -r)), r > 0.999999)) (o = 1 - i), (s = a ? -i : i)
          else {
            const t = Math.acos(r),
              e = 1 / Math.sin(t)
            ;(o = Math.sin((1 - i) * t) * e), (s = a ? -Math.sin(i * t) * e : Math.sin(i * t) * e)
          }
          ;(n.x = o * t.x + s * e.x), (n.y = o * t.y + s * e.y), (n.z = o * t.z + s * e.z), (n.w = o * t.w + s * e.w)
        }
        static Hermite(t, e, i, n, s) {
          const r = s * s,
            a = s * r,
            h = 2 * a - 3 * r + 1,
            d = -2 * a + 3 * r,
            l = a - 2 * r + s,
            c = a - r,
            p = t.x * h + i.x * d + e.x * l + n.x * c,
            u = t.y * h + i.y * d + e.y * l + n.y * c,
            y = t.z * h + i.z * d + e.z * l + n.z * c,
            m = t.w * h + i.w * d + e.w * l + n.w * c
          return new o(p, u, y, m)
        }
        static get Identity() {
          return new o(0, 0, 0, 1)
        }
        static Angle(t, e) {
          const i = o.Dot(t, e)
          return 2 * Math.acos(Math.min(Math.abs(i), 1)) * s.RAD2DEG
        }
        static Euler(t, e, i) {
          return o.RotationYawPitchRoll(e * s.DEG2RAD, t * s.DEG2RAD, i * s.DEG2RAD)
        }
        static LookRotation(t, e = i.Vector3.Up()) {
          const n = i.Vector3.Normalize(t),
            s = i.Vector3.Normalize(i.Vector3.Cross(e, n)),
            r = i.Vector3.Cross(n, s),
            a = s.x,
            h = s.y,
            d = s.z,
            l = r.x,
            c = r.y,
            p = r.z,
            u = n.x,
            y = n.y,
            m = n.z,
            g = a + c + m,
            f = new o()
          if (g > 0) {
            let t = Math.sqrt(g + 1)
            return (f.w = 0.5 * t), (t = 0.5 / t), (f.x = (p - y) * t), (f.y = (u - d) * t), (f.z = (h - l) * t), f
          }
          if (a >= c && a >= m) {
            const t = Math.sqrt(1 + a - c - m),
              e = 0.5 / t
            return (f.x = 0.5 * t), (f.y = (h + l) * e), (f.z = (d + u) * e), (f.w = (p - y) * e), f
          }
          if (c > m) {
            const t = Math.sqrt(1 + c - a - m),
              e = 0.5 / t
            return (f.x = (l + h) * e), (f.y = 0.5 * t), (f.z = (y + p) * e), (f.w = (u - d) * e), f
          }
          const x = Math.sqrt(1 + m - a - c),
            v = 0.5 / x
          return (f.x = (u + d) * v), (f.y = (y + p) * v), (f.z = 0.5 * x), (f.w = (h - l) * v), f
        }
        static RotateTowards(t, e, i) {
          const n = o.Angle(t, e)
          if (0 === n) return e
          const s = Math.min(1, i / n)
          return o.Slerp(t, e, s)
        }
        static FromToRotation(t, e, n = i.Vector3.Up()) {
          const s = t.normalize(),
            r = e.normalize(),
            a = i.Vector3.Cross(s, r),
            h = Math.sqrt(s.lengthSquared() * r.lengthSquared()) + i.Vector3.Dot(s, r)
          return a.lengthSquared() < 1e-4
            ? Math.abs(h) < 1e-4
              ? new o(n.x, n.y, n.z, 0).normalized
              : o.Identity
            : new o(a.x, a.y, a.z, h).normalized
        }
        get normalized() {
          return this.normalize()
        }
        setFromToRotation(t, e, n = i.Vector3.Up()) {
          const s = o.FromToRotation(t, e, n)
          ;(this.x = s.x), (this.y = s.y), (this.z = s.z), (this.w = s.w)
        }
        set eulerAngles(t) {
          this.setEuler(t.x, t.y, t.z)
        }
        get eulerAngles() {
          const t = new i.Vector3(),
            e = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
            o = this.x * this.w - this.y * this.z
          return (
            o > 0.4995 * e
              ? ((t.x = Math.PI / 2), (t.y = 2 * Math.atan2(this.y, this.x)), (t.z = 0))
              : o < -0.4995 * e
              ? ((t.x = -Math.PI / 2), (t.y = -2 * Math.atan2(this.y, this.x)), (t.z = 0))
              : ((t.x = Math.asin(2 * (this.w * this.x - this.y * this.z))),
                (t.y = Math.atan2(2 * this.w * this.y + 2 * this.z * this.x, 1 - 2 * (this.x * this.x + this.y * this.y))),
                (t.z = Math.atan2(2 * this.w * this.z + 2 * this.x * this.y, 1 - 2 * (this.z * this.z + this.x * this.x)))),
            (t.x *= s.RAD2DEG),
            (t.y *= s.RAD2DEG),
            (t.z *= s.RAD2DEG),
            (t.x = n.Scalar.Repeat(t.x, 360)),
            (t.y = n.Scalar.Repeat(t.y, 360)),
            (t.z = n.Scalar.Repeat(t.z, 360)),
            t
          )
        }
        toString() {
          return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
        }
        get length() {
          return Math.sqrt(this.lengthSquared)
        }
        get lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        getClassName() {
          return 'Quaternion'
        }
        getHashCode() {
          let t = this.x || 0
          return (t = (397 * t) ^ (this.y || 0)), (t = (397 * t) ^ (this.z || 0)), (t = (397 * t) ^ (this.w || 0)), t
        }
        asArray() {
          return [this.x, this.y, this.z, this.w]
        }
        equals(t) {
          return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
        }
        clone() {
          return new o(this.x, this.y, this.z, this.w)
        }
        copyFrom(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
        }
        copyFromFloats(t, e, i, n) {
          return (this.x = t), (this.y = e), (this.z = i), (this.w = n), this
        }
        set(t, e, i, n) {
          return this.copyFromFloats(t, e, i, n)
        }
        setEuler(t, e, i) {
          return o.RotationYawPitchRollToRef(e * s.DEG2RAD, t * s.DEG2RAD, i * s.DEG2RAD, this), this
        }
        add(t) {
          return new o(this.x + t.x, this.y + t.y, this.z + t.z, this.w + t.w)
        }
        addInPlace(t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
        }
        subtract(t) {
          return new o(this.x - t.x, this.y - t.y, this.z - t.z, this.w - t.w)
        }
        scale(t) {
          return new o(this.x * t, this.y * t, this.z * t, this.w * t)
        }
        scaleToRef(t, e) {
          return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
        }
        scaleInPlace(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
        }
        scaleAndAddToRef(t, e) {
          return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
        }
        multiply(t) {
          const e = new o(0, 0, 0, 1)
          return this.multiplyToRef(t, e), e
        }
        multiplyToRef(t, e) {
          const i = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x,
            n = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y,
            s = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z,
            o = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
          return e.copyFromFloats(i, n, s, o), this
        }
        multiplyInPlace(t) {
          return this.multiplyToRef(t, this), this
        }
        conjugateToRef(t) {
          return t.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
        }
        conjugateInPlace() {
          return (this.x *= -1), (this.y *= -1), (this.z *= -1), this
        }
        conjugate() {
          return new o(-this.x, -this.y, -this.z, this.w)
        }
        normalize() {
          const t = 1 / this.length
          return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
        }
        angleAxis(t, e) {
          if (0 === e.lengthSquared()) return o.Identity
          const i = o.Identity
          let n = t * s.DEG2RAD
          n *= 0.5
          let r = e.normalize()
          return (r = e.scaleInPlace(Math.sin(n))), (i.x = r.x), (i.y = r.y), (i.z = r.z), (i.w = Math.cos(n)), i.normalize()
        }
        toRotationMatrix(t) {
          return e.Matrix.FromQuaternionToRef(this, t), this
        }
        fromRotationMatrix(t) {
          return o.FromRotationMatrixToRef(t, this), this
        }
      }),
      yt
    )
  }
  function St() {
    if (ct) return ut
    ;(ct = 1), Object.defineProperty(ut, '__esModule', { value: !0 }), (ut.Vector3 = void 0)
    const t = _t(),
      e = At(),
      i = ft,
      n = st
    return (
      (ut.Vector3 = class s {
        constructor(t = 0, e = 0, i = 0) {
          ;(this.x = t), (this.y = e), (this.z = i)
        }
        get isNonUniform() {
          const t = Math.abs(this.x),
            e = Math.abs(this.y)
          if (t !== e) return !0
          const i = Math.abs(this.z)
          return t !== i || e !== i
        }
        static Add(t, e) {
          return new s(t.x, t.y, t.z).addInPlace(e)
        }
        static GetClipFactor(t, e, i, n) {
          const o = s.Dot(t, i) - n
          return o / (o - (s.Dot(e, i) - n))
        }
        static GetAngleBetweenVectors(e, i, n) {
          const o = (0, t.getMathTmp)(),
            r = e.normalizeToRef(o.Vector3[1]),
            a = i.normalizeToRef(o.Vector3[2]),
            h = s.Dot(r, a),
            d = o.Vector3[3]
          return s.CrossToRef(r, a, d), s.Dot(d, n) > 0 ? Math.acos(h) : -Math.acos(h)
        }
        static FromArray(t, e = 0) {
          return new s(t[e], t[e + 1], t[e + 2])
        }
        static FromFloatArray(t, e) {
          return s.FromArray(t, e)
        }
        static FromArrayToRef(t, e, i) {
          ;(i.x = t[e]), (i.y = t[e + 1]), (i.z = t[e + 2])
        }
        static FromFloatArrayToRef(t, e, i) {
          return s.FromArrayToRef(t, e, i)
        }
        static FromFloatsToRef(t, e, i, n) {
          n.copyFromFloats(t, e, i)
        }
        static Zero() {
          return new s(0, 0, 0)
        }
        static One() {
          return new s(1, 1, 1)
        }
        static Up() {
          return new s(0, 1, 0)
        }
        static Down() {
          return new s(0, -1, 0)
        }
        static Forward() {
          return new s(0, 0, 1)
        }
        static Backward() {
          return new s(0, 0, -1)
        }
        static Right() {
          return new s(1, 0, 0)
        }
        static Left() {
          return new s(-1, 0, 0)
        }
        static TransformCoordinates(t, e) {
          const i = s.Zero()
          return s.TransformCoordinatesToRef(t, e, i), i
        }
        static TransformCoordinatesToRef(t, e, i) {
          return s.TransformCoordinatesFromFloatsToRef(t.x, t.y, t.z, e, i)
        }
        static TransformCoordinatesFromFloatsToRef(t, e, i, n, s) {
          const o = n.m,
            r = t * o[0] + e * o[4] + i * o[8] + o[12],
            a = t * o[1] + e * o[5] + i * o[9] + o[13],
            h = t * o[2] + e * o[6] + i * o[10] + o[14],
            d = 1 / (t * o[3] + e * o[7] + i * o[11] + o[15])
          ;(s.x = r * d), (s.y = a * d), (s.z = h * d)
        }
        static TransformNormal(t, e) {
          const i = s.Zero()
          return s.TransformNormalToRef(t, e, i), i
        }
        static TransformNormalToRef(t, e, i) {
          this.TransformNormalFromFloatsToRef(t.x, t.y, t.z, e, i)
        }
        static TransformNormalFromFloatsToRef(t, e, i, n, s) {
          const o = n.m
          ;(s.x = t * o[0] + e * o[4] + i * o[8]), (s.y = t * o[1] + e * o[5] + i * o[9]), (s.z = t * o[2] + e * o[6] + i * o[10])
        }
        static CatmullRom(t, e, i, n, o) {
          const r = o * o,
            a = o * r,
            h = 0.5 * (2 * e.x + (-t.x + i.x) * o + (2 * t.x - 5 * e.x + 4 * i.x - n.x) * r + (-t.x + 3 * e.x - 3 * i.x + n.x) * a),
            d = 0.5 * (2 * e.y + (-t.y + i.y) * o + (2 * t.y - 5 * e.y + 4 * i.y - n.y) * r + (-t.y + 3 * e.y - 3 * i.y + n.y) * a),
            l = 0.5 * (2 * e.z + (-t.z + i.z) * o + (2 * t.z - 5 * e.z + 4 * i.z - n.z) * r + (-t.z + 3 * e.z - 3 * i.z + n.z) * a)
          return new s(h, d, l)
        }
        static Clamp(t, e, i) {
          const n = new s()
          return s.ClampToRef(t, e, i, n), n
        }
        static ClampToRef(t, e, i, n) {
          let s = t.x
          ;(s = s > i.x ? i.x : s), (s = s < e.x ? e.x : s)
          let o = t.y
          ;(o = o > i.y ? i.y : o), (o = o < e.y ? e.y : o)
          let r = t.z
          ;(r = r > i.z ? i.z : r), (r = r < e.z ? e.z : r), n.copyFromFloats(s, o, r)
        }
        static Hermite(t, e, i, n, o) {
          const r = o * o,
            a = o * r,
            h = 2 * a - 3 * r + 1,
            d = -2 * a + 3 * r,
            l = a - 2 * r + o,
            c = a - r,
            p = t.x * h + i.x * d + e.x * l + n.x * c,
            u = t.y * h + i.y * d + e.y * l + n.y * c,
            y = t.z * h + i.z * d + e.z * l + n.z * c
          return new s(p, u, y)
        }
        static Lerp(t, e, i) {
          const n = new s(0, 0, 0)
          return s.LerpToRef(t, e, i, n), n
        }
        static LerpToRef(t, e, i, n) {
          ;(n.x = t.x + (e.x - t.x) * i), (n.y = t.y + (e.y - t.y) * i), (n.z = t.z + (e.z - t.z) * i)
        }
        static Dot(t, e) {
          return t.x * e.x + t.y * e.y + t.z * e.z
        }
        static Cross(t, e) {
          const i = s.Zero()
          return s.CrossToRef(t, e, i), i
        }
        static CrossToRef(t, e, i) {
          const n = t.y * e.z - t.z * e.y,
            s = t.z * e.x - t.x * e.z,
            o = t.x * e.y - t.y * e.x
          i.copyFromFloats(n, s, o)
        }
        static Normalize(t) {
          const e = s.Zero()
          return s.NormalizeToRef(t, e), e
        }
        static NormalizeToRef(t, e) {
          t.normalizeToRef(e)
        }
        static Minimize(t, e) {
          const i = new s(t.x, t.y, t.z)
          return i.minimizeInPlace(e), i
        }
        static Maximize(t, e) {
          const i = new s(t.x, t.y, t.z)
          return i.maximizeInPlace(e), i
        }
        static Distance(t, e) {
          return Math.sqrt(s.DistanceSquared(t, e))
        }
        static DistanceSquared(t, e) {
          const i = t.x - e.x,
            n = t.y - e.y,
            s = t.z - e.z
          return i * i + n * n + s * s
        }
        static Center(t, e) {
          const i = s.Add(t, e)
          return i.scaleInPlace(0.5), i
        }
        static RotationFromAxis(t, e, i) {
          const n = s.Zero()
          return s.RotationFromAxisToRef(t, e, i, n), n
        }
        static RotationFromAxisToRef(i, n, s, o) {
          const r = (0, t.getMathTmp)().Quaternion[0]
          e.Quaternion.RotationQuaternionFromAxisToRef(i, n, s, r), o.copyFrom(r.eulerAngles)
        }
        toString() {
          return `(${this.x}, ${this.y}, ${this.z})`
        }
        getClassName() {
          return 'Vector3'
        }
        getHashCode() {
          let t = this.x || 0
          return (t = (397 * t) ^ (this.y || 0)), (t = (397 * t) ^ (this.z || 0)), t
        }
        asArray() {
          const t = []
          return this.toArray(t, 0), t
        }
        toArray(t, e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), this
        }
        toQuaternion() {
          return e.Quaternion.Identity.setEuler(this.y, this.x, this.z)
        }
        addInPlace(t) {
          return this.addInPlaceFromFloats(t.x, t.y, t.z)
        }
        addInPlaceFromFloats(t, e, i) {
          return (this.x += t), (this.y += e), (this.z += i), this
        }
        add(t) {
          return new s(this.x + t.x, this.y + t.y, this.z + t.z)
        }
        addToRef(t, e) {
          return e.copyFromFloats(this.x + t.x, this.y + t.y, this.z + t.z)
        }
        subtractInPlace(t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
        }
        subtract(t) {
          return new s(this.x - t.x, this.y - t.y, this.z - t.z)
        }
        subtractToRef(t, e) {
          return this.subtractFromFloatsToRef(t.x, t.y, t.z, e)
        }
        subtractFromFloats(t, e, i) {
          return new s(this.x - t, this.y - e, this.z - i)
        }
        subtractFromFloatsToRef(t, e, i, n) {
          return n.copyFromFloats(this.x - t, this.y - e, this.z - i)
        }
        applyMatrix4(t) {
          this.applyMatrix4ToRef(t, this)
        }
        applyMatrix4ToRef(t, e) {
          const { x: i, y: n, z: s } = this,
            { m: o } = t,
            r = 1 / (o[3] * i + o[7] * n + o[11] * s + o[15])
          return (
            (e.x = (o[0] * i + o[4] * n + o[8] * s + o[12]) * r),
            (e.y = (o[1] * i + o[5] * n + o[9] * s + o[13]) * r),
            (e.z = (o[2] * i + o[6] * n + o[10] * s + o[14]) * r),
            e
          )
        }
        rotate(t) {
          return this.rotateToRef(t, this)
        }
        rotateToRef(t, e) {
          const { x: i, y: n, z: s } = this,
            { x: o, y: r, z: a, w: h } = t,
            d = h * i + r * s - a * n,
            l = h * n + a * i - o * s,
            c = h * s + o * n - r * i,
            p = -o * i - r * n - a * s
          return (
            (e.x = d * h + p * -o + l * -a - c * -r), (e.y = l * h + p * -r + c * -o - d * -a), (e.z = c * h + p * -a + d * -r - l * -o), e
          )
        }
        negate() {
          return new s(-this.x, -this.y, -this.z)
        }
        scaleInPlace(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this
        }
        scale(t) {
          return new s(this.x * t, this.y * t, this.z * t)
        }
        scaleToRef(t, e) {
          return e.copyFromFloats(this.x * t, this.y * t, this.z * t)
        }
        scaleAndAddToRef(t, e) {
          return e.addInPlaceFromFloats(this.x * t, this.y * t, this.z * t)
        }
        equals(t) {
          return t && this.x === t.x && this.y === t.y && this.z === t.z
        }
        equalsWithEpsilon(t, e = n.Epsilon) {
          return (
            t && i.Scalar.WithinEpsilon(this.x, t.x, e) && i.Scalar.WithinEpsilon(this.y, t.y, e) && i.Scalar.WithinEpsilon(this.z, t.z, e)
          )
        }
        equalsToFloats(t, e, i) {
          return this.x === t && this.y === e && this.z === i
        }
        multiplyInPlace(t) {
          return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
        }
        multiply(t) {
          return this.multiplyByFloats(t.x, t.y, t.z)
        }
        multiplyToRef(t, e) {
          return e.copyFromFloats(this.x * t.x, this.y * t.y, this.z * t.z)
        }
        multiplyByFloats(t, e, i) {
          return new s(this.x * t, this.y * e, this.z * i)
        }
        divide(t) {
          return new s(this.x / t.x, this.y / t.y, this.z / t.z)
        }
        divideToRef(t, e) {
          return e.copyFromFloats(this.x / t.x, this.y / t.y, this.z / t.z)
        }
        divideInPlace(t) {
          return this.divideToRef(t, this)
        }
        minimizeInPlace(t) {
          return this.minimizeInPlaceFromFloats(t.x, t.y, t.z)
        }
        maximizeInPlace(t) {
          return this.maximizeInPlaceFromFloats(t.x, t.y, t.z)
        }
        minimizeInPlaceFromFloats(t, e, i) {
          return t < this.x && (this.x = t), e < this.y && (this.y = e), i < this.z && (this.z = i), this
        }
        maximizeInPlaceFromFloats(t, e, i) {
          return t > this.x && (this.x = t), e > this.y && (this.y = e), i > this.z && (this.z = i), this
        }
        floor() {
          return new s(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
        }
        fract() {
          return new s(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z
        }
        normalize() {
          return this.normalizeFromLength(this.length())
        }
        normalizeFromLength(t) {
          return 0 === t || 1 === t ? this : this.scaleInPlace(1 / t)
        }
        normalizeToNew() {
          const t = new s(0, 0, 0)
          return this.normalizeToRef(t), t
        }
        normalizeToRef(t) {
          const e = this.length()
          return 0 === e || 1 === e ? t.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / e, t)
        }
        clone() {
          return new s(this.x, this.y, this.z)
        }
        copyFrom(t) {
          return this.copyFromFloats(t.x, t.y, t.z)
        }
        copyFromFloats(t, e, i) {
          return (this.x = t), (this.y = e), (this.z = i), this
        }
        set(t, e, i) {
          return this.copyFromFloats(t, e, i)
        }
        setAll(t) {
          return (this.x = this.y = this.z = t), this
        }
      }),
      ut
    )
  }
  function _t() {
    if (pt) return rt
    ;(pt = 1), Object.defineProperty(rt, '__esModule', { value: !0 }), (rt.getMathTmp = void 0)
    const t =
        (ot ||
          ((ot = 1),
          Object.defineProperty(at, '__esModule', { value: !0 }),
          (at.buildArray = void 0),
          (at.buildArray = function (t, e) {
            const i = []
            for (let n = 0; n < t; ++n) i.push(e())
            return i
          })),
        at),
      e = St(),
      i = At(),
      n = Tt()
    let s
    return (
      (rt.getMathTmp = function () {
        return (
          s ||
          ((s = {
            Vector3: (0, t.buildArray)(6, e.Vector3.Zero),
            Matrix: (0, t.buildArray)(2, n.Matrix.Identity),
            Quaternion: (0, t.buildArray)(3, i.Quaternion.Zero),
            staticUp: e.Vector3.Up(),
            tmpMatrix: n.Matrix.Zero(),
          }),
          s)
        )
      }),
      rt
    )
  }
  ;(ft.Scalar = xt), (xt.TwoPi = 2 * Math.PI)
  var bt = {}
  Object.defineProperty(bt, '__esModule', { value: !0 }), (bt.Angle = void 0)
  class wt {
    constructor(t) {
      ;(this._radians = t), this._radians < 0 && (this._radians += 2 * Math.PI)
    }
    static BetweenTwoPoints(t, e) {
      const i = e.subtract(t),
        n = Math.atan2(i.y, i.x)
      return new wt(n)
    }
    static FromRadians(t) {
      return new wt(t)
    }
    static FromDegrees(t) {
      return new wt((t * Math.PI) / 180)
    }
    degrees() {
      return (180 * this._radians) / Math.PI
    }
    radians() {
      return this._radians
    }
  }
  bt.Angle = wt
  var Rt = {},
    Ct = {}
  Object.defineProperty(Ct, '__esModule', { value: !0 }), (Ct.Vector2 = void 0)
  const It = st,
    Et = ft
  class Ot {
    constructor(t = 0, e = 0) {
      ;(this.x = t), (this.y = e)
    }
    static Zero() {
      return new Ot(0, 0)
    }
    static One() {
      return new Ot(1, 1)
    }
    static Add(t, e) {
      return new Ot(t.x, t.y).addInPlace(e)
    }
    static FromArray(t, e = 0) {
      return new Ot(t[e], t[e + 1])
    }
    static FromArrayToRef(t, e, i) {
      ;(i.x = t[e]), (i.y = t[e + 1])
    }
    static CatmullRom(t, e, i, n, s) {
      const o = s * s,
        r = s * o,
        a = 0.5 * (2 * e.x + (-t.x + i.x) * s + (2 * t.x - 5 * e.x + 4 * i.x - n.x) * o + (-t.x + 3 * e.x - 3 * i.x + n.x) * r),
        h = 0.5 * (2 * e.y + (-t.y + i.y) * s + (2 * t.y - 5 * e.y + 4 * i.y - n.y) * o + (-t.y + 3 * e.y - 3 * i.y + n.y) * r)
      return new Ot(a, h)
    }
    static Clamp(t, e, i) {
      let n = t.x
      ;(n = n > i.x ? i.x : n), (n = n < e.x ? e.x : n)
      let s = t.y
      return (s = s > i.y ? i.y : s), (s = s < e.y ? e.y : s), new Ot(n, s)
    }
    static Hermite(t, e, i, n, s) {
      const o = s * s,
        r = s * o,
        a = 2 * r - 3 * o + 1,
        h = -2 * r + 3 * o,
        d = r - 2 * o + s,
        l = r - o,
        c = t.x * a + i.x * h + e.x * d + n.x * l,
        p = t.y * a + i.y * h + e.y * d + n.y * l
      return new Ot(c, p)
    }
    static Lerp(t, e, i) {
      const n = t.x + (e.x - t.x) * i,
        s = t.y + (e.y - t.y) * i
      return new Ot(n, s)
    }
    static Dot(t, e) {
      return t.x * e.x + t.y * e.y
    }
    static Normalize(t) {
      const e = new Ot(t.x, t.y)
      return e.normalize(), e
    }
    static Minimize(t, e) {
      const i = t.x < e.x ? t.x : e.x,
        n = t.y < e.y ? t.y : e.y
      return new Ot(i, n)
    }
    static Maximize(t, e) {
      const i = t.x > e.x ? t.x : e.x,
        n = t.y > e.y ? t.y : e.y
      return new Ot(i, n)
    }
    static Transform(t, e) {
      const i = Ot.Zero()
      return Ot.TransformToRef(t, e, i), i
    }
    static TransformToRef(t, e, i) {
      const n = e.m,
        s = t.x * n[0] + t.y * n[4] + n[12],
        o = t.x * n[1] + t.y * n[5] + n[13]
      ;(i.x = s), (i.y = o)
    }
    static PointInTriangle(t, e, i, n) {
      const s = 0.5 * (-i.y * n.x + e.y * (-i.x + n.x) + e.x * (i.y - n.y) + i.x * n.y),
        o = s < 0 ? -1 : 1,
        r = (e.y * n.x - e.x * n.y + (n.y - e.y) * t.x + (e.x - n.x) * t.y) * o,
        a = (e.x * i.y - e.y * i.x + (e.y - i.y) * t.x + (i.x - e.x) * t.y) * o
      return r > 0 && a > 0 && r + a < 2 * s * o
    }
    static Distance(t, e) {
      return Math.sqrt(Ot.DistanceSquared(t, e))
    }
    static DistanceSquared(t, e) {
      const i = t.x - e.x,
        n = t.y - e.y
      return i * i + n * n
    }
    static Center(t, e) {
      const i = Ot.Add(t, e)
      return i.scaleInPlace(0.5), i
    }
    static DistanceOfPointFromSegment(t, e, i) {
      const n = Ot.DistanceSquared(e, i)
      if (0 === n) return Ot.Distance(t, e)
      const s = i.subtract(e),
        o = Math.max(0, Math.min(1, Ot.Dot(t.subtract(e), s) / n)),
        r = e.add(s.multiplyByFloats(o, o))
      return Ot.Distance(t, r)
    }
    toString() {
      return '{X: ' + this.x + ' Y:' + this.y + '}'
    }
    getClassName() {
      return 'Vector2'
    }
    getHashCode() {
      let t = this.x || 0
      return (t = (397 * t) ^ (this.y || 0)), t
    }
    toArray(t, e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), this
    }
    asArray() {
      const t = new Array()
      return this.toArray(t, 0), t
    }
    copyFrom(t) {
      return (this.x = t.x), (this.y = t.y), this
    }
    copyFromFloats(t, e) {
      return (this.x = t), (this.y = e), this
    }
    set(t, e) {
      return this.copyFromFloats(t, e)
    }
    add(t) {
      return new Ot(this.x + t.x, this.y + t.y)
    }
    addToRef(t, e) {
      return (e.x = this.x + t.x), (e.y = this.y + t.y), this
    }
    addInPlace(t) {
      return (this.x += t.x), (this.y += t.y), this
    }
    addVector3(t) {
      return new Ot(this.x + t.x, this.y + t.y)
    }
    subtract(t) {
      return new Ot(this.x - t.x, this.y - t.y)
    }
    subtractToRef(t, e) {
      return (e.x = this.x - t.x), (e.y = this.y - t.y), this
    }
    subtractInPlace(t) {
      return (this.x -= t.x), (this.y -= t.y), this
    }
    multiplyInPlace(t) {
      return (this.x *= t.x), (this.y *= t.y), this
    }
    multiply(t) {
      return new Ot(this.x * t.x, this.y * t.y)
    }
    multiplyToRef(t, e) {
      return (e.x = this.x * t.x), (e.y = this.y * t.y), this
    }
    multiplyByFloats(t, e) {
      return new Ot(this.x * t, this.y * e)
    }
    divide(t) {
      return new Ot(this.x / t.x, this.y / t.y)
    }
    divideToRef(t, e) {
      return (e.x = this.x / t.x), (e.y = this.y / t.y), this
    }
    divideInPlace(t) {
      return this.divideToRef(t, this)
    }
    negate() {
      return new Ot(-this.x, -this.y)
    }
    scaleInPlace(t) {
      return (this.x *= t), (this.y *= t), this
    }
    scale(t) {
      const e = new Ot(0, 0)
      return this.scaleToRef(t, e), e
    }
    scaleToRef(t, e) {
      return (e.x = this.x * t), (e.y = this.y * t), this
    }
    scaleAndAddToRef(t, e) {
      return (e.x += this.x * t), (e.y += this.y * t), this
    }
    equals(t) {
      return t && this.x === t.x && this.y === t.y
    }
    equalsWithEpsilon(t, e = It.Epsilon) {
      return t && Et.Scalar.WithinEpsilon(this.x, t.x, e) && Et.Scalar.WithinEpsilon(this.y, t.y, e)
    }
    floor() {
      return new Ot(Math.floor(this.x), Math.floor(this.y))
    }
    fract() {
      return new Ot(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    lengthSquared() {
      return this.x * this.x + this.y * this.y
    }
    normalize() {
      const t = this.length()
      if (0 === t) return this
      const e = 1 / t
      return (this.x *= e), (this.y *= e), this
    }
    clone() {
      return new Ot(this.x, this.y)
    }
  }
  ;(Ct.Vector2 = Ot), Object.defineProperty(Rt, '__esModule', { value: !0 }), (Rt.Arc2 = void 0)
  const zt = bt,
    Pt = Ct,
    Mt = st
  Rt.Arc2 = class {
    constructor(t, e, i) {
      ;(this.startPoint = t), (this.midPoint = e), (this.endPoint = i)
      const n = Math.pow(e.x, 2) + Math.pow(e.y, 2),
        s = (Math.pow(t.x, 2) + Math.pow(t.y, 2) - n) / 2,
        o = (n - Math.pow(i.x, 2) - Math.pow(i.y, 2)) / 2,
        r = (t.x - e.x) * (e.y - i.y) - (e.x - i.x) * (t.y - e.y)
      ;(this.centerPoint = new Pt.Vector2((s * (e.y - i.y) - o * (t.y - e.y)) / r, ((t.x - e.x) * o - (e.x - i.x) * s) / r)),
        (this.radius = this.centerPoint.subtract(this.startPoint).length()),
        (this.startAngle = zt.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint))
      const a = this.startAngle.degrees()
      let h = zt.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
        d = zt.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees()
      h - a > 180 && (h -= 360),
        h - a < -180 && (h += 360),
        d - h > 180 && (d -= 360),
        d - h < -180 && (d += 360),
        (this.orientation = h - a < 0 ? Mt.Orientation.CW : Mt.Orientation.CCW),
        (this.angle = zt.Angle.FromDegrees(this.orientation === Mt.Orientation.CW ? a - d : d - a))
    }
  }
  var Ft = {}
  Object.defineProperty(Ft, '__esModule', { value: !0 }), (Ft.Axis = void 0)
  const Nt = St()
  class Ut {}
  ;(Ft.Axis = Ut), (Ut.X = new Nt.Vector3(1, 0, 0)), (Ut.Y = new Nt.Vector3(0, 1, 0)), (Ut.Z = new Nt.Vector3(0, 0, 1))
  var Dt = {}
  Object.defineProperty(Dt, '__esModule', { value: !0 }), (Dt.BezierCurve = void 0)
  Dt.BezierCurve = class {
    static Interpolate(t, e, i, n, s) {
      const o = 1 - 3 * n + 3 * e,
        r = 3 * n - 6 * e,
        a = 3 * e
      let h = t
      for (let e = 0; e < 5; e++) {
        const e = h * h
        ;(h -= (o * (e * h) + r * e + a * h - t) * (1 / (3 * o * e + 2 * r * h + a))), (h = Math.min(1, Math.max(0, h)))
      }
      return 3 * Math.pow(1 - h, 2) * h * i + 3 * (1 - h) * Math.pow(h, 2) * s + Math.pow(h, 3)
    }
  }
  var Lt = {},
    Bt = {}
  Object.defineProperty(Bt, '__esModule', { value: !0 }), (Bt.Color4 = void 0)
  const Vt = ft,
    Ht = st
  class kt {
    constructor(t = 0, e = 0, i = 0, n = 1) {
      ;(this.r = t), (this.g = e), (this.b = i), (this.a = n)
    }
    static FromHexString(t) {
      if ('#' !== t.substring(0, 1) || 9 !== t.length) return new kt(0, 0, 0, 0)
      const e = parseInt(t.substring(1, 3), 16),
        i = parseInt(t.substring(3, 5), 16),
        n = parseInt(t.substring(5, 7), 16),
        s = parseInt(t.substring(7, 9), 16)
      return kt.FromInts(e, i, n, s)
    }
    static Lerp(t, e, i) {
      const n = new kt(0, 0, 0, 0)
      return kt.LerpToRef(t, e, i, n), n
    }
    static LerpToRef(t, e, i, n) {
      ;(n.r = t.r + (e.r - t.r) * i), (n.g = t.g + (e.g - t.g) * i), (n.b = t.b + (e.b - t.b) * i), (n.a = t.a + (e.a - t.a) * i)
    }
    static Red() {
      return new kt(1, 0, 0, 1)
    }
    static Green() {
      return new kt(0, 1, 0, 1)
    }
    static Blue() {
      return new kt(0, 0, 1, 1)
    }
    static Black() {
      return new kt(0, 0, 0, 1)
    }
    static White() {
      return new kt(1, 1, 1, 1)
    }
    static Purple() {
      return new kt(0.5, 0, 0.5, 1)
    }
    static Magenta() {
      return new kt(1, 0, 1, 1)
    }
    static Yellow() {
      return new kt(1, 1, 0, 1)
    }
    static Gray() {
      return new kt(0.5, 0.5, 0.5, 1)
    }
    static Teal() {
      return new kt(0, 1, 1, 1)
    }
    static Clear() {
      return new kt(0, 0, 0, 0)
    }
    static FromColor3(t, e = 1) {
      return new kt(t.r, t.g, t.b, e)
    }
    static FromArray(t, e = 0) {
      return new kt(t[e], t[e + 1], t[e + 2], t[e + 3])
    }
    static FromInts(t, e, i, n) {
      return new kt(t / 255, e / 255, i / 255, n / 255)
    }
    static CheckColors4(t, e) {
      if (t.length === 3 * e) {
        const e = []
        for (let i = 0; i < t.length; i += 3) {
          const n = (i / 3) * 4
          ;(e[n] = t[i]), (e[n + 1] = t[i + 1]), (e[n + 2] = t[i + 2]), (e[n + 3] = 1)
        }
        return e
      }
      return t
    }
    addInPlace(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), (this.a += t.a), this
    }
    asArray() {
      const t = new Array()
      return this.toArray(t, 0), t
    }
    toArray(t, e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), (t[e + 3] = this.a), this
    }
    add(t) {
      return new kt(this.r + t.r, this.g + t.g, this.b + t.b, this.a + t.a)
    }
    subtract(t) {
      return new kt(this.r - t.r, this.g - t.g, this.b - t.b, this.a - t.a)
    }
    subtractToRef(t, e) {
      return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), (e.a = this.a - t.a), this
    }
    scale(t) {
      return new kt(this.r * t, this.g * t, this.b * t, this.a * t)
    }
    scaleToRef(t, e) {
      return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), (e.a = this.a * t), this
    }
    scaleAndAddToRef(t, e) {
      return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), (e.a += this.a * t), this
    }
    clampToRef(t = 0, e = 1, i) {
      return (
        (i.r = Vt.Scalar.Clamp(this.r, t, e)),
        (i.g = Vt.Scalar.Clamp(this.g, t, e)),
        (i.b = Vt.Scalar.Clamp(this.b, t, e)),
        (i.a = Vt.Scalar.Clamp(this.a, t, e)),
        this
      )
    }
    multiply(t) {
      return new kt(this.r * t.r, this.g * t.g, this.b * t.b, this.a * t.a)
    }
    multiplyToRef(t, e) {
      return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), (e.a = this.a * t.a), e
    }
    toString() {
      return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}'
    }
    getClassName() {
      return 'Color4'
    }
    getHashCode() {
      let t = this.r || 0
      return (t = (397 * t) ^ (this.g || 0)), (t = (397 * t) ^ (this.b || 0)), (t = (397 * t) ^ (this.a || 0)), t
    }
    clone() {
      return new kt(this.r, this.g, this.b, this.a)
    }
    copyFrom(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
    }
    copyFromFloats(t, e, i, n) {
      return (this.r = t), (this.g = e), (this.b = i), (this.a = n), this
    }
    set(t, e, i, n) {
      return this.copyFromFloats(t, e, i, n)
    }
    toHexString() {
      const t = (255 * this.r) | 0,
        e = (255 * this.g) | 0,
        i = (255 * this.b) | 0,
        n = (255 * this.a) | 0
      return '#' + Vt.Scalar.ToHex(t) + Vt.Scalar.ToHex(e) + Vt.Scalar.ToHex(i) + Vt.Scalar.ToHex(n)
    }
    toLinearSpace() {
      const t = new kt()
      return this.toLinearSpaceToRef(t), t
    }
    toLinearSpaceToRef(t) {
      return (
        (t.r = Math.pow(this.r, Ht.ToLinearSpace)),
        (t.g = Math.pow(this.g, Ht.ToLinearSpace)),
        (t.b = Math.pow(this.b, Ht.ToLinearSpace)),
        (t.a = this.a),
        this
      )
    }
    toGammaSpace() {
      const t = new kt()
      return this.toGammaSpaceToRef(t), t
    }
    toGammaSpaceToRef(t) {
      return (
        (t.r = Math.pow(this.r, Ht.ToGammaSpace)),
        (t.g = Math.pow(this.g, Ht.ToGammaSpace)),
        (t.b = Math.pow(this.b, Ht.ToGammaSpace)),
        (t.a = this.a),
        this
      )
    }
  }
  ;(Bt.Color4 = kt), Object.defineProperty(Lt, '__esModule', { value: !0 }), (Lt.Color3 = void 0)
  const Gt = st,
    jt = Bt,
    qt = ft
  class Wt {
    constructor(t = 0, e = 0, i = 0) {
      ;(this.r = t), (this.g = e), (this.b = i)
    }
    static FromHexString(t) {
      if ('#' !== t.substring(0, 1) || 7 !== t.length) return new Wt(0, 0, 0)
      const e = parseInt(t.substring(1, 3), 16),
        i = parseInt(t.substring(3, 5), 16),
        n = parseInt(t.substring(5, 7), 16)
      return Wt.FromInts(e, i, n)
    }
    static FromArray(t, e = 0) {
      return new Wt(t[e], t[e + 1], t[e + 2])
    }
    static FromInts(t, e, i) {
      return new Wt(t / 255, e / 255, i / 255)
    }
    static Lerp(t, e, i) {
      const n = new Wt(0, 0, 0)
      return Wt.LerpToRef(t, e, i, n), n
    }
    static LerpToRef(t, e, i, n) {
      ;(n.r = t.r + (e.r - t.r) * i), (n.g = t.g + (e.g - t.g) * i), (n.b = t.b + (e.b - t.b) * i)
    }
    static Red() {
      return new Wt(1, 0, 0)
    }
    static Green() {
      return new Wt(0, 1, 0)
    }
    static Blue() {
      return new Wt(0, 0, 1)
    }
    static Black() {
      return new Wt(0, 0, 0)
    }
    static White() {
      return new Wt(1, 1, 1)
    }
    static Purple() {
      return new Wt(0.5, 0, 0.5)
    }
    static Magenta() {
      return new Wt(1, 0, 1)
    }
    static Yellow() {
      return new Wt(1, 1, 0)
    }
    static Gray() {
      return new Wt(0.5, 0.5, 0.5)
    }
    static Teal() {
      return new Wt(0, 1, 1)
    }
    static Random() {
      return new Wt(Math.random(), Math.random(), Math.random())
    }
    toString() {
      return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}'
    }
    getClassName() {
      return 'Color3'
    }
    getHashCode() {
      let t = this.r || 0
      return (t = (397 * t) ^ (this.g || 0)), (t = (397 * t) ^ (this.b || 0)), t
    }
    toArray(t, e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), this
    }
    toColor4(t = 1) {
      return new jt.Color4(this.r, this.g, this.b, t)
    }
    asArray() {
      const t = new Array()
      return this.toArray(t, 0), t
    }
    toLuminance() {
      return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b
    }
    multiply(t) {
      return new Wt(this.r * t.r, this.g * t.g, this.b * t.b)
    }
    multiplyToRef(t, e) {
      return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), this
    }
    equals(t) {
      return t && this.r === t.r && this.g === t.g && this.b === t.b
    }
    equalsFloats(t, e, i) {
      return this.r === t && this.g === e && this.b === i
    }
    scale(t) {
      return new Wt(this.r * t, this.g * t, this.b * t)
    }
    scaleToRef(t, e) {
      return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), this
    }
    scaleAndAddToRef(t, e) {
      return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), this
    }
    clampToRef(t = 0, e = 1, i) {
      return (i.r = qt.Scalar.Clamp(this.r, t, e)), (i.g = qt.Scalar.Clamp(this.g, t, e)), (i.b = qt.Scalar.Clamp(this.b, t, e)), this
    }
    add(t) {
      return new Wt(this.r + t.r, this.g + t.g, this.b + t.b)
    }
    addToRef(t, e) {
      return (e.r = this.r + t.r), (e.g = this.g + t.g), (e.b = this.b + t.b), this
    }
    subtract(t) {
      return new Wt(this.r - t.r, this.g - t.g, this.b - t.b)
    }
    subtractToRef(t, e) {
      return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), this
    }
    clone() {
      return new Wt(this.r, this.g, this.b)
    }
    copyFrom(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
    }
    copyFromFloats(t, e, i) {
      return (this.r = t), (this.g = e), (this.b = i), this
    }
    set(t, e, i) {
      return this.copyFromFloats(t, e, i)
    }
    toHexString() {
      const t = (255 * this.r) | 0,
        e = (255 * this.g) | 0,
        i = (255 * this.b) | 0
      return '#' + qt.Scalar.ToHex(t) + qt.Scalar.ToHex(e) + qt.Scalar.ToHex(i)
    }
    toLinearSpace() {
      const t = new Wt()
      return this.toLinearSpaceToRef(t), t
    }
    toLinearSpaceToRef(t) {
      return (
        (t.r = Math.pow(this.r, Gt.ToLinearSpace)),
        (t.g = Math.pow(this.g, Gt.ToLinearSpace)),
        (t.b = Math.pow(this.b, Gt.ToLinearSpace)),
        this
      )
    }
    toGammaSpace() {
      const t = new Wt()
      return this.toGammaSpaceToRef(t), t
    }
    toGammaSpaceToRef(t) {
      return (
        (t.r = Math.pow(this.r, Gt.ToGammaSpace)),
        (t.g = Math.pow(this.g, Gt.ToGammaSpace)),
        (t.b = Math.pow(this.b, Gt.ToGammaSpace)),
        this
      )
    }
    toJSON() {
      return { r: this.r, g: this.g, b: this.b }
    }
  }
  Lt.Color3 = Wt
  var Yt = {}
  Object.defineProperty(Yt, '__esModule', { value: !0 }), (Yt.Curve3 = void 0)
  const Xt = St()
  class Qt {
    constructor(t) {
      ;(this._length = 0), (this._points = t), (this._length = this._computeLength(t))
    }
    static CreateQuadraticBezier(t, e, i, n) {
      n = n > 2 ? n : 3
      const s = new Array(),
        o = (t, e, i, n) => (1 - t) * (1 - t) * e + 2 * t * (1 - t) * i + t * t * n
      for (let r = 0; r <= n; r++) s.push(new Xt.Vector3(o(r / n, t.x, e.x, i.x), o(r / n, t.y, e.y, i.y), o(r / n, t.z, e.z, i.z)))
      return new Qt(s)
    }
    static CreateCubicBezier(t, e, i, n, s) {
      s = s > 3 ? s : 4
      const o = new Array(),
        r = (t, e, i, n, s) => (1 - t) * (1 - t) * (1 - t) * e + 3 * t * (1 - t) * (1 - t) * i + 3 * t * t * (1 - t) * n + t * t * t * s
      for (let a = 0; a <= s; a++)
        o.push(new Xt.Vector3(r(a / s, t.x, e.x, i.x, n.x), r(a / s, t.y, e.y, i.y, n.y), r(a / s, t.z, e.z, i.z, n.z)))
      return new Qt(o)
    }
    static CreateHermiteSpline(t, e, i, n, s) {
      const o = new Array(),
        r = 1 / s
      for (let a = 0; a <= s; a++) o.push(Xt.Vector3.Hermite(t, e, i, n, a * r))
      return new Qt(o)
    }
    static CreateCatmullRomSpline(t, e, i) {
      const n = new Array(),
        s = 1 / e
      let o = 0
      if (i) {
        const i = t.length
        for (let r = 0; r < i; r++) {
          o = 0
          for (let a = 0; a < e; a++) n.push(Xt.Vector3.CatmullRom(t[r % i], t[(r + 1) % i], t[(r + 2) % i], t[(r + 3) % i], o)), (o += s)
        }
        n.push(n[0])
      } else {
        const i = new Array()
        i.push(t[0].clone()), Array.prototype.push.apply(i, t), i.push(t[t.length - 1].clone())
        let r = 0
        for (r = 0; r < i.length - 3; r++) {
          o = 0
          for (let t = 0; t < e; t++) n.push(Xt.Vector3.CatmullRom(i[r], i[r + 1], i[r + 2], i[r + 3], o)), (o += s)
        }
        r--, n.push(Xt.Vector3.CatmullRom(i[r], i[r + 1], i[r + 2], i[r + 3], o))
      }
      return new Qt(n)
    }
    getPoints() {
      return this._points
    }
    length() {
      return this._length
    }
    continue(t) {
      const e = this._points[this._points.length - 1],
        i = this._points.slice(),
        n = t.getPoints()
      for (let t = 1; t < n.length; t++) i.push(n[t].subtract(n[0]).add(e))
      return new Qt(i)
    }
    _computeLength(t) {
      let e = 0
      for (let i = 1; i < t.length; i++) e += t[i].subtract(t[i - 1]).length()
      return e
    }
  }
  Yt.Curve3 = Qt
  var $t = {},
    Zt = {}
  Object.defineProperty(Zt, '__esModule', { value: !0 }), (Zt.Plane = void 0)
  const Jt = _t(),
    Kt = St(),
    te = Tt()
  class ee {
    constructor(t, e, i, n) {
      ;(this.normal = new Kt.Vector3(t, e, i)), (this.d = n)
    }
    static FromArray(t) {
      return new ee(t[0], t[1], t[2], t[3])
    }
    static FromPoints(t, e, i) {
      const n = new ee(0, 0, 0, 0)
      return n.copyFromPoints(t, e, i), n
    }
    static FromPositionAndNormal(t, e) {
      const i = new ee(0, 0, 0, 0)
      return e.normalize(), (i.normal = e), (i.d = -(e.x * t.x + e.y * t.y + e.z * t.z)), i
    }
    static SignedDistanceToPlaneFromPositionAndNormal(t, e, i) {
      const n = -(e.x * t.x + e.y * t.y + e.z * t.z)
      return Kt.Vector3.Dot(i, e) + n
    }
    asArray() {
      return [this.normal.x, this.normal.y, this.normal.z, this.d]
    }
    clone() {
      return new ee(this.normal.x, this.normal.y, this.normal.z, this.d)
    }
    getClassName() {
      return 'Plane'
    }
    getHashCode() {
      let t = this.normal.getHashCode()
      return (t = (397 * t) ^ (this.d || 0)), t
    }
    normalize() {
      const t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z)
      let e = 0
      return 0 !== t && (e = 1 / t), (this.normal.x *= e), (this.normal.y *= e), (this.normal.z *= e), (this.d *= e), this
    }
    transform(t) {
      const e = (0, Jt.getMathTmp)().Matrix[0]
      te.Matrix.TransposeToRef(t, e)
      const i = e.m,
        n = this.normal.x,
        s = this.normal.y,
        o = this.normal.z,
        r = this.d,
        a = n * i[0] + s * i[1] + o * i[2] + r * i[3],
        h = n * i[4] + s * i[5] + o * i[6] + r * i[7],
        d = n * i[8] + s * i[9] + o * i[10] + r * i[11],
        l = n * i[12] + s * i[13] + o * i[14] + r * i[15]
      return new ee(a, h, d, l)
    }
    dotCoordinate(t) {
      return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
    }
    copyFromPoints(t, e, i) {
      const n = e.x - t.x,
        s = e.y - t.y,
        o = e.z - t.z,
        r = i.x - t.x,
        a = i.y - t.y,
        h = i.z - t.z,
        d = s * h - o * a,
        l = o * r - n * h,
        c = n * a - s * r,
        p = Math.sqrt(d * d + l * l + c * c)
      let u
      return (
        (u = 0 !== p ? 1 / p : 0),
        (this.normal.x = d * u),
        (this.normal.y = l * u),
        (this.normal.z = c * u),
        (this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)),
        this
      )
    }
    isFrontFacingTo(t, e) {
      return Kt.Vector3.Dot(this.normal, t) <= e
    }
    signedDistanceTo(t) {
      return Kt.Vector3.Dot(t, this.normal) + this.d
    }
  }
  ;(Zt.Plane = ee), Object.defineProperty($t, '__esModule', { value: !0 }), ($t.Frustum = void 0)
  const ie = Zt
  class ne {
    static GetPlanes(t) {
      const e = []
      for (let t = 0; t < 6; t++) e.push(new ie.Plane(0, 0, 0, 0))
      return ne.GetPlanesToRef(t, e), e
    }
    static GetNearPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] + i[2]), (e.normal.y = i[7] + i[6]), (e.normal.z = i[11] + i[10]), (e.d = i[15] + i[14]), e.normalize()
    }
    static GetFarPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] - i[2]), (e.normal.y = i[7] - i[6]), (e.normal.z = i[11] - i[10]), (e.d = i[15] - i[14]), e.normalize()
    }
    static GetLeftPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] + i[0]), (e.normal.y = i[7] + i[4]), (e.normal.z = i[11] + i[8]), (e.d = i[15] + i[12]), e.normalize()
    }
    static GetRightPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] - i[0]), (e.normal.y = i[7] - i[4]), (e.normal.z = i[11] - i[8]), (e.d = i[15] - i[12]), e.normalize()
    }
    static GetTopPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] - i[1]), (e.normal.y = i[7] - i[5]), (e.normal.z = i[11] - i[9]), (e.d = i[15] - i[13]), e.normalize()
    }
    static GetBottomPlaneToRef(t, e) {
      const i = t.m
      ;(e.normal.x = i[3] + i[1]), (e.normal.y = i[7] + i[5]), (e.normal.z = i[11] + i[9]), (e.d = i[15] + i[13]), e.normalize()
    }
    static GetPlanesToRef(t, e) {
      ne.GetNearPlaneToRef(t, e[0]),
        ne.GetFarPlaneToRef(t, e[1]),
        ne.GetLeftPlaneToRef(t, e[2]),
        ne.GetRightPlaneToRef(t, e[3]),
        ne.GetTopPlaneToRef(t, e[4]),
        ne.GetBottomPlaneToRef(t, e[5])
    }
  }
  $t.Frustum = ne
  var se = {}
  Object.defineProperty(se, '__esModule', { value: !0 }), (se.Path2 = void 0)
  const oe = Ct,
    re = Rt,
    ae = st
  class he {
    constructor(t, e) {
      ;(this.closed = !1), (this._points = new Array()), (this._length = 0), this._points.push(new oe.Vector2(t, e))
    }
    static StartingAt(t, e) {
      return new he(t, e)
    }
    addLineTo(t, e) {
      if (this.closed) return this
      const i = new oe.Vector2(t, e),
        n = this._points[this._points.length - 1]
      return this._points.push(i), (this._length += i.subtract(n).length()), this
    }
    addArcTo(t, e, i, n, s = 36) {
      if (this.closed) return this
      const o = this._points[this._points.length - 1],
        r = new oe.Vector2(t, e),
        a = new oe.Vector2(i, n),
        h = new re.Arc2(o, r, a)
      let d = h.angle.radians() / s
      h.orientation === ae.Orientation.CW && (d *= -1)
      let l = h.startAngle.radians() + d
      for (let t = 0; t < s; t++) {
        const t = Math.cos(l) * h.radius + h.centerPoint.x,
          e = Math.sin(l) * h.radius + h.centerPoint.y
        this.addLineTo(t, e), (l += d)
      }
      return this
    }
    close() {
      return (this.closed = !0), this
    }
    length() {
      let t = this._length
      if (!this.closed) {
        const e = this._points[this._points.length - 1]
        t += this._points[0].subtract(e).length()
      }
      return t
    }
    getPoints() {
      return this._points
    }
    getPointAtLengthPosition(t) {
      if (t < 0 || t > 1) return oe.Vector2.Zero()
      const e = t * this.length()
      let i = 0
      for (let t = 0; t < this._points.length; t++) {
        const n = (t + 1) % this._points.length,
          s = this._points[t],
          o = this._points[n].subtract(s),
          r = o.length() + i
        if (e >= i && e <= r) {
          const t = o.normalize(),
            n = e - i
          return new oe.Vector2(s.x + t.x * n, s.y + t.y * n)
        }
        i = r
      }
      return oe.Vector2.Zero()
    }
  }
  se.Path2 = he
  var de = {}
  Object.defineProperty(de, '__esModule', { value: !0 }), (de.Path3D = void 0)
  const le = St(),
    ce = st,
    pe = ft
  de.Path3D = class {
    constructor(t, e = null, i) {
      ;(this.path = t),
        (this._curve = new Array()),
        (this._distances = new Array()),
        (this._tangents = new Array()),
        (this._normals = new Array()),
        (this._binormals = new Array())
      for (let e = 0; e < t.length; e++) this._curve[e] = t[e].clone()
      ;(this._raw = i || !1), this._compute(e)
    }
    getCurve() {
      return this._curve
    }
    getTangents() {
      return this._tangents
    }
    getNormals() {
      return this._normals
    }
    getBinormals() {
      return this._binormals
    }
    getDistances() {
      return this._distances
    }
    update(t, e = null) {
      for (let e = 0; e < t.length; e++) (this._curve[e].x = t[e].x), (this._curve[e].y = t[e].y), (this._curve[e].z = t[e].z)
      return this._compute(e), this
    }
    _compute(t) {
      const e = this._curve.length
      ;(this._tangents[0] = this._getFirstNonNullVector(0)),
        this._raw || this._tangents[0].normalize(),
        (this._tangents[e - 1] = this._curve[e - 1].subtract(this._curve[e - 2])),
        this._raw || this._tangents[e - 1].normalize()
      const i = this._tangents[0],
        n = this._normalVector(this._curve[0], i, t)
      let s, o, r, a
      ;(this._normals[0] = n),
        this._raw || this._normals[0].normalize(),
        (this._binormals[0] = le.Vector3.Cross(i, this._normals[0])),
        this._raw || this._binormals[0].normalize(),
        (this._distances[0] = 0)
      for (let t = 1; t < e; t++)
        (s = this._getLastNonNullVector(t)),
          t < e - 1 && ((o = this._getFirstNonNullVector(t)), (this._tangents[t] = s.add(o)), this._tangents[t].normalize()),
          (this._distances[t] = this._distances[t - 1] + s.length()),
          (r = this._tangents[t]),
          (a = this._binormals[t - 1]),
          (this._normals[t] = le.Vector3.Cross(a, r)),
          this._raw || this._normals[t].normalize(),
          (this._binormals[t] = le.Vector3.Cross(r, this._normals[t])),
          this._raw || this._binormals[t].normalize()
    }
    _getFirstNonNullVector(t) {
      let e = 1,
        i = this._curve[t + e].subtract(this._curve[t])
      for (; 0 === i.length() && t + e + 1 < this._curve.length; ) e++, (i = this._curve[t + e].subtract(this._curve[t]))
      return i
    }
    _getLastNonNullVector(t) {
      let e = 1,
        i = this._curve[t].subtract(this._curve[t - e])
      for (; 0 === i.length() && t > e + 1; ) e++, (i = this._curve[t].subtract(this._curve[t - e]))
      return i
    }
    _normalVector(t, e, i) {
      let n,
        s = e.length()
      if ((0 === s && (s = 1), null == i)) {
        let t
        ;(t = pe.Scalar.WithinEpsilon(Math.abs(e.y) / s, 1, ce.Epsilon)
          ? pe.Scalar.WithinEpsilon(Math.abs(e.x) / s, 1, ce.Epsilon)
            ? pe.Scalar.WithinEpsilon(Math.abs(e.z) / s, 1, ce.Epsilon)
              ? le.Vector3.Zero()
              : new le.Vector3(0, 0, 1)
            : new le.Vector3(1, 0, 0)
          : new le.Vector3(0, -1, 0)),
          (n = le.Vector3.Cross(e, t))
      } else (n = le.Vector3.Cross(e, i)), le.Vector3.CrossToRef(n, e, n)
      return n.normalize(), n
    }
  }
  var ue,
    ye = {}
  Object.defineProperty(ye, '__esModule', { value: !0 }), (ye.Size = void 0)
  class me {
    constructor(t, e) {
      ;(this.width = t), (this.height = e)
    }
    get surface() {
      return this.width * this.height
    }
    static Zero() {
      return new me(0, 0)
    }
    static Lerp(t, e, i) {
      const n = t.width + (e.width - t.width) * i,
        s = t.height + (e.height - t.height) * i
      return new me(n, s)
    }
    toString() {
      return `{W: ${this.width}, H: ${this.height}}`
    }
    getClassName() {
      return 'Size'
    }
    getHashCode() {
      let t = this.width || 0
      return (t = (397 * t) ^ (this.height || 0)), t
    }
    copyFrom(t) {
      ;(this.width = t.width), (this.height = t.height)
    }
    copyFromFloats(t, e) {
      return (this.width = t), (this.height = e), this
    }
    set(t, e) {
      return this.copyFromFloats(t, e)
    }
    multiplyByFloats(t, e) {
      return new me(this.width * t, this.height * e)
    }
    clone() {
      return new me(this.width, this.height)
    }
    equals(t) {
      return !!t && this.width === t.width && this.height === t.height
    }
    add(t) {
      return new me(this.width + t.width, this.height + t.height)
    }
    subtract(t) {
      return new me(this.width - t.width, this.height - t.height)
    }
  }
  ye.Size = me
  var ge = (function t() {
    return (
      ue ||
        ((ue = 1),
        (function (e) {
          var i =
              (it && it.__createBinding) ||
              (Object.create
                ? function (t, e, i, n) {
                    void 0 === n && (n = i),
                      Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function () {
                          return e[i]
                        },
                      })
                  }
                : function (t, e, i, n) {
                    void 0 === n && (n = i), (t[n] = e[i])
                  }),
            n =
              (it && it.__exportStar) ||
              function (t, e) {
                for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
              }
          Object.defineProperty(e, '__esModule', { value: !0 }),
            n(st, e),
            n(_t(), e),
            n(bt, e),
            n(Rt, e),
            n(Ft, e),
            n(Dt, e),
            n(Lt, e),
            n(Bt, e),
            n(Yt, e),
            n($t, e),
            n(Tt(), e),
            n(se, e),
            n(de, e),
            n(Zt, e),
            n(At(), e),
            n(ft, e),
            n(ye, e),
            n(Ct, e),
            n(St(), e),
            n(vt(), e),
            n(t(), e)
        })(nt)),
      nt
    )
  })()
  const fe = { looping: !0, speed: 1, weight: 1, layer: 0 }
  class xe extends w {
    constructor(t, e = fe) {
      super(),
        (this.isAnimationClip = !0),
        (this.looping = fe.looping),
        (this.weight = fe.weight),
        (this.playing = !1),
        (this.shouldReset = !1),
        (this.speed = fe.speed),
        (this.name = h('AnimClip')),
        (this.layer = fe.layer),
        (this.clip = t),
        this.setParams(Object.assign({}, e))
    }
    setParams(t) {
      return (
        (this.looping = void 0 !== t.looping ? t.looping : this.looping),
        (this.speed = t.speed || this.speed),
        (this.weight = t.weight || this.weight),
        (this.layer = t.layer || this.layer),
        this
      )
    }
    toJSON() {
      const t = JSON.parse(JSON.stringify(super.toJSON()))
      return this.shouldReset && (this.shouldReset = !1), t
    }
    play(t = !1) {
      var e
      null === (e = this.owner) || void 0 === e || e.play(this, t)
    }
    pause() {
      var t
      null === (t = this.owner) || void 0 === t || t.pause(this)
    }
    reset() {
      this.shouldReset = !0
    }
    stop() {
      var t
      null === (t = this.owner) || void 0 === t || t.stop(this)
    }
  }
  var ve, Te
  i([w.readonly, n('design:type', String)], xe.prototype, 'clip', void 0),
    i([w.field, n('design:type', Boolean)], xe.prototype, 'looping', void 0),
    i([w.field, n('design:type', Number)], xe.prototype, 'weight', void 0),
    i([w.field, n('design:type', Boolean)], xe.prototype, 'playing', void 0),
    i([w.field, n('design:type', Boolean)], xe.prototype, 'shouldReset', void 0),
    i([w.field, n('design:type', Number)], xe.prototype, 'speed', void 0),
    i([w.readonly, n('design:type', String)], xe.prototype, 'name', void 0),
    (t.InputEventType = void 0),
    ((ve = t.InputEventType || (t.InputEventType = {}))[(ve.DOWN = 0)] = 'DOWN'),
    (ve[(ve.UP = 1)] = 'UP'),
    (t.CameraMode = void 0),
    ((Te = t.CameraMode || (t.CameraMode = {}))[(Te.FirstPerson = 0)] = 'FirstPerson'),
    (Te[(Te.ThirdPerson = 1)] = 'ThirdPerson'),
    (Te[(Te.BuildingToolGodMode = 2)] = 'BuildingToolGodMode')
  var Ae, Se, _e, be, we, Re, Ce, Ie, Ee, Oe
  ;(t.LandRole = void 0),
    ((Ae = t.LandRole || (t.LandRole = {})).OWNER = 'owner'),
    (Ae.OPERATOR = 'operator'),
    (t.ActionButton = void 0),
    ((Se = t.ActionButton || (t.ActionButton = {})).POINTER = 'POINTER'),
    (Se.PRIMARY = 'PRIMARY'),
    (Se.SECONDARY = 'SECONDARY'),
    (Se.ANY = 'ANY'),
    (Se.FORWARD = 'FORWARD'),
    (Se.BACKWARD = 'BACKWARD'),
    (Se.RIGHT = 'RIGHT'),
    (Se.LEFT = 'LEFT'),
    (Se.JUMP = 'JUMP'),
    (Se.WALK = 'WALK'),
    (Se.ACTION_3 = 'ACTION_3'),
    (Se.ACTION_4 = 'ACTION_4'),
    (Se.ACTION_5 = 'ACTION_5'),
    (Se.ACTION_6 = 'ACTION_6')
  class ze {
    constructor(t) {
      if (((this.callback = t), !t || !('apply' in t) || !('call' in t))) throw new Error('Callback is not a function')
      Me.ensureInstance()
    }
  }
  ;(t.GlobalPointerDown = class extends ze {}),
    (t.GlobalPointerDown = i([T('pointerDown')], t.GlobalPointerDown)),
    (t.GlobalPointerUp = class extends ze {}),
    (t.GlobalPointerUp = i([T('pointerUp')], t.GlobalPointerUp))
  class Pe {
    constructor(t, e) {
      ;(this.fn = t), (this.useRaycast = e)
    }
  }
  class Me {
    static get instance() {
      return Me.ensureInstance(), Me._instance
    }
    constructor() {
      ;(this.buttonIdMapping = [
        t.ActionButton.POINTER,
        t.ActionButton.PRIMARY,
        t.ActionButton.SECONDARY,
        t.ActionButton.ANY,
        t.ActionButton.FORWARD,
        t.ActionButton.BACKWARD,
        t.ActionButton.RIGHT,
        t.ActionButton.LEFT,
        t.ActionButton.JUMP,
        t.ActionButton.WALK,
        t.ActionButton.ACTION_3,
        t.ActionButton.ACTION_4,
        t.ActionButton.ACTION_5,
        t.ActionButton.ACTION_6,
      ]),
        (this.subscriptions = this.buttonIdMapping.reduce(
          (t, e) => Object.assign(Object.assign({}, t), { [e]: { BUTTON_DOWN: [], BUTTON_UP: [] } }),
          {}
        )),
        (this.internalState = this.buttonIdMapping.reduce((t, e) => Object.assign(Object.assign({}, t), { [e]: { BUTTON_DOWN: !1 } }), {}))
    }
    static ensureInstance() {
      Me._instance || (Me._instance = new Me())
    }
    isButtonPressed(t) {
      return this.internalState[t]
    }
    subscribe(t, e, i, n) {
      return (
        this.subscriptions[e][t].push(new Pe(n, i)),
        () => {
          this.unsubscribe(t, e, n)
        }
      )
    }
    unsubscribe(t, e, i) {
      const n = this.getSubscriptionId(t, e, i)
      return n > -1 && this.subscriptions[e][t].splice(n, 1)
    }
    handlePointerEvent(e) {
      const i = this.getPointerById(e.buttonId)
      if (!i) return
      const n = Object.assign(Object.assign({}, e), {
          button: i,
          direction: new ge.Vector3().copyFrom(e.direction),
          origin: new ge.Vector3().copyFrom(e.origin),
          hit: void 0,
        }),
        s = e.hit
          ? Object.assign(Object.assign({}, e.hit), {
              hitPoint: new ge.Vector3().copyFrom(e.hit.hitPoint),
              normal: new ge.Vector3().copyFrom(e.hit.normal),
              worldNormal: new ge.Vector3().copyFrom(e.hit.worldNormal),
            })
          : void 0
      if (e.type === t.InputEventType.DOWN) {
        this.internalState[i].BUTTON_DOWN = !0
        for (let t = 0; t < this.subscriptions[i].BUTTON_DOWN.length; t++) {
          const e = this.subscriptions[i].BUTTON_DOWN[t]
          e.useRaycast ? (n.hit = s) : (n.hit = void 0), e.fn(n)
        }
        if (s && s.entityId && A.engine) {
          const e = A.engine.entities[s.entityId],
            i = e && e.getComponentOrNull(t.GlobalPointerDown)
          i && ((n.hit = s), i.callback(n))
        }
      } else {
        this.internalState[i].BUTTON_DOWN = !1
        for (let t = 0; t < this.subscriptions[i].BUTTON_UP.length; t++) {
          const e = this.subscriptions[i].BUTTON_UP[t]
          e.useRaycast ? (n.hit = s) : (n.hit = void 0), e.fn(n)
        }
        if (s && s.entityId && A.engine) {
          const e = A.engine.entities[s.entityId],
            i = e && e.getComponentOrNull(t.GlobalPointerUp)
          i && ((n.hit = s), i.callback(n))
        }
      }
    }
    getSubscriptionId(t, e, i) {
      for (let n = 0; n < this.subscriptions[e][t].length; n++) if (this.subscriptions[e][t][n].fn === i) return n
      return -1
    }
    getPointerById(e) {
      if (e < 0 || e >= this.buttonIdMapping.length) return null
      const i = this.buttonIdMapping[e]
      return i === t.ActionButton.ANY ? null : i
    }
  }
  ;(t.CLASS_ID = void 0),
    ((_e = t.CLASS_ID || (t.CLASS_ID = {}))[(_e.TRANSFORM = 1)] = 'TRANSFORM'),
    (_e[(_e.UUID_CALLBACK = 8)] = 'UUID_CALLBACK'),
    (_e[(_e.BOX_SHAPE = 16)] = 'BOX_SHAPE'),
    (_e[(_e.SPHERE_SHAPE = 17)] = 'SPHERE_SHAPE'),
    (_e[(_e.PLANE_SHAPE = 18)] = 'PLANE_SHAPE'),
    (_e[(_e.CONE_SHAPE = 19)] = 'CONE_SHAPE'),
    (_e[(_e.CYLINDER_SHAPE = 20)] = 'CYLINDER_SHAPE'),
    (_e[(_e.TEXT_SHAPE = 21)] = 'TEXT_SHAPE'),
    (_e[(_e.NFT_SHAPE = 22)] = 'NFT_SHAPE'),
    (_e[(_e.UI_WORLD_SPACE_SHAPE = 23)] = 'UI_WORLD_SPACE_SHAPE'),
    (_e[(_e.UI_SCREEN_SPACE_SHAPE = 24)] = 'UI_SCREEN_SPACE_SHAPE'),
    (_e[(_e.UI_CONTAINER_RECT = 25)] = 'UI_CONTAINER_RECT'),
    (_e[(_e.UI_CONTAINER_STACK = 26)] = 'UI_CONTAINER_STACK'),
    (_e[(_e.UI_TEXT_SHAPE = 27)] = 'UI_TEXT_SHAPE'),
    (_e[(_e.UI_INPUT_TEXT_SHAPE = 28)] = 'UI_INPUT_TEXT_SHAPE'),
    (_e[(_e.UI_IMAGE_SHAPE = 29)] = 'UI_IMAGE_SHAPE'),
    (_e[(_e.UI_SLIDER_SHAPE = 30)] = 'UI_SLIDER_SHAPE'),
    (_e[(_e.CIRCLE_SHAPE = 31)] = 'CIRCLE_SHAPE'),
    (_e[(_e.BILLBOARD = 32)] = 'BILLBOARD'),
    (_e[(_e.ANIMATION = 33)] = 'ANIMATION'),
    (_e[(_e.FONT = 34)] = 'FONT'),
    (_e[(_e.UI_FULLSCREEN_SHAPE = 40)] = 'UI_FULLSCREEN_SHAPE'),
    (_e[(_e.UI_BUTTON_SHAPE = 41)] = 'UI_BUTTON_SHAPE'),
    (_e[(_e.GLTF_SHAPE = 54)] = 'GLTF_SHAPE'),
    (_e[(_e.OBJ_SHAPE = 55)] = 'OBJ_SHAPE'),
    (_e[(_e.AVATAR_SHAPE = 56)] = 'AVATAR_SHAPE'),
    (_e[(_e.BASIC_MATERIAL = 64)] = 'BASIC_MATERIAL'),
    (_e[(_e.PBR_MATERIAL = 65)] = 'PBR_MATERIAL'),
    (_e[(_e.HIGHLIGHT_ENTITY = 66)] = 'HIGHLIGHT_ENTITY'),
    (_e[(_e.SOUND = 67)] = 'SOUND'),
    (_e[(_e.TEXTURE = 68)] = 'TEXTURE'),
    (_e[(_e.VIDEO_CLIP = 70)] = 'VIDEO_CLIP'),
    (_e[(_e.VIDEO_TEXTURE = 71)] = 'VIDEO_TEXTURE'),
    (_e[(_e.AVATAR_TEXTURE = 72)] = 'AVATAR_TEXTURE'),
    (_e[(_e.AUDIO_CLIP = 200)] = 'AUDIO_CLIP'),
    (_e[(_e.AUDIO_SOURCE = 201)] = 'AUDIO_SOURCE'),
    (_e[(_e.AUDIO_STREAM = 202)] = 'AUDIO_STREAM'),
    (_e[(_e.GIZMOS = 203)] = 'GIZMOS'),
    (_e[(_e.SMART_ITEM = 204)] = 'SMART_ITEM'),
    (_e[(_e.AVATAR_MODIFIER_AREA = 205)] = 'AVATAR_MODIFIER_AREA'),
    (_e[(_e.AVATAR_ATTACH = 206)] = 'AVATAR_ATTACH'),
    (_e[(_e.CAMERA_MODE_AREA = 207)] = 'CAMERA_MODE_AREA'),
    (_e[(_e.NAME = 300)] = 'NAME'),
    (_e[(_e.LOCKED_ON_EDIT = 301)] = 'LOCKED_ON_EDIT'),
    (_e[(_e.VISIBLE_ON_EDIT = 302)] = 'VISIBLE_ON_EDIT'),
    (t.AvatarModifiers = void 0),
    ((be = t.AvatarModifiers || (t.AvatarModifiers = {})).HIDE_AVATARS = 'HIDE_AVATARS'),
    (be.DISABLE_PASSPORTS = 'DISABLE_PASSPORTS'),
    (t.AvatarModifierArea = class extends w {
      constructor(t) {
        super(), (this.area = t.area), (this.modifiers = t.modifiers), (this.excludeIds = t.excludeIds)
      }
    }),
    i([w.field, n('design:type', Object)], t.AvatarModifierArea.prototype, 'area', void 0),
    i([w.field, n('design:type', Array)], t.AvatarModifierArea.prototype, 'modifiers', void 0),
    i([w.field, n('design:type', Array)], t.AvatarModifierArea.prototype, 'excludeIds', void 0),
    (t.AvatarModifierArea = i(
      [T('engine.avatarModifierArea', t.CLASS_ID.AVATAR_MODIFIER_AREA), n('design:paramtypes', [Object])],
      t.AvatarModifierArea
    )),
    (t.Transform = class extends w {
      constructor(t = {}) {
        super(),
          (this.position = t.position || ge.Vector3.Zero()),
          (this.rotation = t.rotation || ge.Quaternion.Identity),
          (this.scale = t.scale || new ge.Vector3(1, 1, 1))
      }
      get eulerAngles() {
        return this.rotation.eulerAngles
      }
      lookAt(t, e = ge.Vector3.Up()) {
        const i = new ge.Matrix()
        return ge.Matrix.LookAtLHToRef(this.position, t, e, i), i.invert(), ge.Quaternion.FromRotationMatrixToRef(i, this.rotation), this
      }
      rotate(t, e) {
        return this.rotation.multiplyInPlace(this.rotation.angleAxis(e, t)), this
      }
      translate(t) {
        return this.position.addInPlace(t), this
      }
    }),
    i([w.field, n('design:type', ge.Vector3)], t.Transform.prototype, 'position', void 0),
    i([w.field, n('design:type', ge.Quaternion)], t.Transform.prototype, 'rotation', void 0),
    i([w.field, n('design:type', ge.Vector3)], t.Transform.prototype, 'scale', void 0),
    (t.Transform = i([T('engine.transform', t.CLASS_ID.TRANSFORM), n('design:paramtypes', [Object])], t.Transform)),
    (t.AttachToAvatarAnchorPointId = void 0),
    ((we = t.AttachToAvatarAnchorPointId || (t.AttachToAvatarAnchorPointId = {}))[(we.Position = 0)] = 'Position'),
    (we[(we.NameTag = 1)] = 'NameTag'),
    (we[(we.LeftHand = 2)] = 'LeftHand'),
    (we[(we.RightHand = 3)] = 'RightHand'),
    (t.AttachToAvatar = class extends w {
      constructor(e = {}) {
        super(), (this.avatarId = e.avatarId || ''), (this.anchorPointId = e.anchorPointId || t.AttachToAvatarAnchorPointId.Position)
      }
    }),
    i([w.field, n('design:type', String)], t.AttachToAvatar.prototype, 'avatarId', void 0),
    i([w.field, n('design:type', Number)], t.AttachToAvatar.prototype, 'anchorPointId', void 0),
    i([w.field, n('design:type', String)], t.AttachToAvatar.prototype, 'avatarSceneId', void 0),
    (t.AttachToAvatar = i([T('engine.transform', t.CLASS_ID.AVATAR_ATTACH), n('design:paramtypes', [Object])], t.AttachToAvatar)),
    (t.Billboard = class extends w {
      constructor(t = !0, e = !0, i = !0) {
        super(), (this.x = !0), (this.y = !0), (this.z = !0), (this.x = t), (this.y = e), (this.z = i)
      }
    }),
    i([w.field, n('design:type', Boolean)], t.Billboard.prototype, 'x', void 0),
    i([w.field, n('design:type', Boolean)], t.Billboard.prototype, 'y', void 0),
    i([w.field, n('design:type', Boolean)], t.Billboard.prototype, 'z', void 0),
    (t.Billboard = i([T('engine.billboard', t.CLASS_ID.BILLBOARD), n('design:paramtypes', [Boolean, Boolean, Boolean])], t.Billboard))
  class Fe extends w {
    constructor() {
      super(...arguments), (this.withCollisions = !0), (this.isPointerBlocker = !0), (this.visible = !0)
    }
  }
  i([w.field, n('design:type', Boolean)], Fe.prototype, 'withCollisions', void 0),
    i([w.field, n('design:type', Boolean)], Fe.prototype, 'isPointerBlocker', void 0),
    i([w.field, n('design:type', Boolean)], Fe.prototype, 'visible', void 0),
    (t.BoxShape = class extends Fe {}),
    i([w.field, n('design:type', Array)], t.BoxShape.prototype, 'uvs', void 0),
    (t.BoxShape = i([A('engine.shape', t.CLASS_ID.BOX_SHAPE)], t.BoxShape)),
    (t.SphereShape = class extends Fe {}),
    (t.SphereShape = i([A('engine.shape', t.CLASS_ID.SPHERE_SHAPE)], t.SphereShape)),
    (t.CircleShape = class extends Fe {}),
    i([w.field, n('design:type', Number)], t.CircleShape.prototype, 'segments', void 0),
    i([w.field, n('design:type', Number)], t.CircleShape.prototype, 'arc', void 0),
    (t.CircleShape = i([A('engine.shape', t.CLASS_ID.CIRCLE_SHAPE)], t.CircleShape)),
    (t.PlaneShape = class extends Fe {
      constructor() {
        super(...arguments), (this.width = 1), (this.height = 1)
      }
    }),
    i([w.field, n('design:type', Number)], t.PlaneShape.prototype, 'width', void 0),
    i([w.field, n('design:type', Number)], t.PlaneShape.prototype, 'height', void 0),
    i([w.field, n('design:type', Array)], t.PlaneShape.prototype, 'uvs', void 0),
    (t.PlaneShape = i([A('engine.shape', t.CLASS_ID.PLANE_SHAPE)], t.PlaneShape)),
    (t.ConeShape = class extends Fe {
      constructor() {
        super(...arguments),
          (this.radiusTop = 0),
          (this.radiusBottom = 1),
          (this.segmentsHeight = 1),
          (this.segmentsRadial = 36),
          (this.openEnded = !1),
          (this.radius = null),
          (this.arc = 360)
      }
    }),
    i([w.field, n('design:type', Number)], t.ConeShape.prototype, 'radiusTop', void 0),
    i([w.field, n('design:type', Number)], t.ConeShape.prototype, 'radiusBottom', void 0),
    i([w.field, n('design:type', Number)], t.ConeShape.prototype, 'segmentsHeight', void 0),
    i([w.field, n('design:type', Number)], t.ConeShape.prototype, 'segmentsRadial', void 0),
    i([w.field, n('design:type', Boolean)], t.ConeShape.prototype, 'openEnded', void 0),
    i([w.field, n('design:type', Object)], t.ConeShape.prototype, 'radius', void 0),
    i([w.field, n('design:type', Number)], t.ConeShape.prototype, 'arc', void 0),
    (t.ConeShape = i([A('engine.shape', t.CLASS_ID.CONE_SHAPE)], t.ConeShape)),
    (t.CylinderShape = class extends Fe {
      constructor() {
        super(...arguments),
          (this.radiusTop = 1),
          (this.radiusBottom = 1),
          (this.segmentsHeight = 1),
          (this.segmentsRadial = 36),
          (this.openEnded = !1),
          (this.radius = null),
          (this.arc = 360)
      }
    }),
    i([w.field, n('design:type', Number)], t.CylinderShape.prototype, 'radiusTop', void 0),
    i([w.field, n('design:type', Number)], t.CylinderShape.prototype, 'radiusBottom', void 0),
    i([w.field, n('design:type', Number)], t.CylinderShape.prototype, 'segmentsHeight', void 0),
    i([w.field, n('design:type', Number)], t.CylinderShape.prototype, 'segmentsRadial', void 0),
    i([w.field, n('design:type', Boolean)], t.CylinderShape.prototype, 'openEnded', void 0),
    i([w.field, n('design:type', Object)], t.CylinderShape.prototype, 'radius', void 0),
    i([w.field, n('design:type', Number)], t.CylinderShape.prototype, 'arc', void 0),
    (t.CylinderShape = i([A('engine.shape', t.CLASS_ID.CYLINDER_SHAPE)], t.CylinderShape)),
    (t.GLTFShape = class extends Fe {
      constructor(t) {
        super(), (this.src = t)
      }
    }),
    i([Fe.readonly, n('design:type', String)], t.GLTFShape.prototype, 'src', void 0),
    (t.GLTFShape = i([A('engine.shape', t.CLASS_ID.GLTF_SHAPE), n('design:paramtypes', [String])], t.GLTFShape)),
    (t.PictureFrameStyle = void 0),
    ((Re = t.PictureFrameStyle || (t.PictureFrameStyle = {}))[(Re.Classic = 0)] = 'Classic'),
    (Re[(Re.Baroque_Ornament = 1)] = 'Baroque_Ornament'),
    (Re[(Re.Diamond_Ornament = 2)] = 'Diamond_Ornament'),
    (Re[(Re.Minimal_Wide = 3)] = 'Minimal_Wide'),
    (Re[(Re.Minimal_Grey = 4)] = 'Minimal_Grey'),
    (Re[(Re.Blocky = 5)] = 'Blocky'),
    (Re[(Re.Gold_Edges = 6)] = 'Gold_Edges'),
    (Re[(Re.Gold_Carved = 7)] = 'Gold_Carved'),
    (Re[(Re.Gold_Wide = 8)] = 'Gold_Wide'),
    (Re[(Re.Gold_Rounded = 9)] = 'Gold_Rounded'),
    (Re[(Re.Metal_Medium = 10)] = 'Metal_Medium'),
    (Re[(Re.Metal_Wide = 11)] = 'Metal_Wide'),
    (Re[(Re.Metal_Slim = 12)] = 'Metal_Slim'),
    (Re[(Re.Metal_Rounded = 13)] = 'Metal_Rounded'),
    (Re[(Re.Pins = 14)] = 'Pins'),
    (Re[(Re.Minimal_Black = 15)] = 'Minimal_Black'),
    (Re[(Re.Minimal_White = 16)] = 'Minimal_White'),
    (Re[(Re.Tape = 17)] = 'Tape'),
    (Re[(Re.Wood_Slim = 18)] = 'Wood_Slim'),
    (Re[(Re.Wood_Wide = 19)] = 'Wood_Wide'),
    (Re[(Re.Wood_Twigs = 20)] = 'Wood_Twigs'),
    (Re[(Re.Canvas = 21)] = 'Canvas'),
    (Re[(Re.None = 22)] = 'None'),
    (t.NFTShape = class extends Fe {
      constructor(e, i = {}) {
        super(), (this.src = e)
        let n = new ge.Color3(0.6404918, 0.611472, 0.8584906),
          s = t.PictureFrameStyle.Classic
        'r' in i ? (n = i) : null !== i && (i.color && (n = i.color), i.style && (s = i.style)), (this.color = n), (this.style = s)
      }
    }),
    i([Fe.readonly, n('design:type', String)], t.NFTShape.prototype, 'src', void 0),
    i([Fe.readonly, n('design:type', Number)], t.NFTShape.prototype, 'style', void 0),
    i([w.field, n('design:type', ge.Color3)], t.NFTShape.prototype, 'color', void 0),
    (t.NFTShape = i([A('engine.shape', t.CLASS_ID.NFT_SHAPE), n('design:paramtypes', [String, Object])], t.NFTShape)),
    (t.Texture = class extends w {
      constructor(t, e) {
        super()
        const i = new RegExp('data:[a-z-]+/[a-z-]+;base64')
        if (
          ((t.length > 2048 || i.test(t)) && r('⚠️🚨 Base64 textures will be deprecated in version 7 of decentraland-ecs'),
          (this.src = t),
          e)
        )
          for (const t in e) {
            this[t] = e[t]
          }
      }
    }),
    i([w.readonly, n('design:type', String)], t.Texture.prototype, 'src', void 0),
    i([w.readonly, n('design:type', Number)], t.Texture.prototype, 'samplingMode', void 0),
    i([w.readonly, n('design:type', Number)], t.Texture.prototype, 'wrap', void 0),
    i([w.readonly, n('design:type', Boolean)], t.Texture.prototype, 'hasAlpha', void 0),
    (t.Texture = i([A('engine.texture', t.CLASS_ID.TEXTURE), n('design:paramtypes', [String, Object])], t.Texture)),
    (t.Animator = class extends Fe {
      constructor() {
        super(...arguments), (this.states = [])
      }
      addClip(t) {
        return (
          this.states.push(t),
          t.onChange(() => {
            this.dirty = !0
          }),
          (t.owner = this),
          this
        )
      }
      getClip(t) {
        for (let e = 0; e < this.states.length; e++) {
          const i = this.states[e]
          if (i.clip === t) return i
        }
        const e = new xe(t)
        return this.addClip(e), e
      }
      stop(t) {
        if (t) (t.playing = !1), (t.shouldReset = !0)
        else
          for (let t = 0; t < this.states.length; t++) {
            const e = this.states[t]
            this.stop(e)
          }
      }
      play(t, e = !1) {
        for (let e = 0; e < this.states.length; e++) {
          const i = this.states[e]
          i.layer === t.layer && t !== i && this.pause(i)
        }
        e && (t.shouldReset = !0), (t.playing = !0), (t.dirty = !0), (t.data.nonce = Math.random())
      }
      pause(t) {
        if (t) t.playing = !1
        else
          for (let t = 0; t < this.states.length; t++) {
            const e = this.states[t]
            this.pause(e)
          }
      }
    }),
    i([w.readonly, n('design:type', Array)], t.Animator.prototype, 'states', void 0),
    (t.Animator = i([T('engine.animator', t.CLASS_ID.ANIMATION)], t.Animator)),
    (t.OBJShape = class extends Fe {
      constructor(t) {
        super(), (this.src = t)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OBJShape.prototype, 'src', void 0),
    (t.OBJShape = i([A('engine.shape', t.CLASS_ID.OBJ_SHAPE), n('design:paramtypes', [String])], t.OBJShape)),
    (t.Font = class extends w {
      constructor(t = '') {
        super(), (this.src = t)
      }
    }),
    i([w.readonly, n('design:type', String)], t.Font.prototype, 'src', void 0),
    (t.Font = i([A('engine.font', t.CLASS_ID.FONT), n('design:paramtypes', [String])], t.Font)),
    (t.Fonts = void 0),
    ((Ce = t.Fonts || (t.Fonts = {})).SanFrancisco = 'builtin:SF-UI-Text-Regular SDF'),
    (Ce.SanFrancisco_Heavy = 'builtin:SF-UI-Text-Heavy SDF'),
    (Ce.SanFrancisco_Semibold = 'builtin:SF-UI-Text-Semibold SDF'),
    (Ce.LiberationSans = 'builtin:LiberationSans SDF'),
    (Ce.SansSerif = 'SansSerif'),
    (Ce.SansSerif_Heavy = 'SansSerif_Heavy'),
    (Ce.SansSerif_Bold = 'SansSerif_Bold'),
    (Ce.SansSerif_SemiBold = 'SansSerif_SemiBold'),
    (t.TextShape = class extends w {
      constructor(t) {
        super(),
          (this.outlineWidth = 0),
          (this.outlineColor = new ge.Color3(1, 1, 1)),
          (this.color = new ge.Color3(1, 1, 1)),
          (this.fontSize = 10),
          (this.opacity = 1),
          (this.value = ''),
          (this.lineSpacing = '0px'),
          (this.lineCount = 0),
          (this.textWrapping = !1),
          (this.shadowBlur = 0),
          (this.shadowOffsetX = 0),
          (this.shadowOffsetY = 0),
          (this.shadowColor = new ge.Color3(1, 1, 1)),
          (this.hTextAlign = 'center'),
          (this.vTextAlign = 'center'),
          (this.width = 1),
          (this.height = 1),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0),
          (this.billboard = !1),
          (this.visible = !0),
          t && (this.value = t)
      }
    }),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'outlineWidth', void 0),
    i([w.field, n('design:type', ge.Color3)], t.TextShape.prototype, 'outlineColor', void 0),
    i([w.field, n('design:type', ge.Color3)], t.TextShape.prototype, 'color', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'fontSize', void 0),
    i([w.component, n('design:type', t.Font)], t.TextShape.prototype, 'font', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'opacity', void 0),
    i([w.field, n('design:type', String)], t.TextShape.prototype, 'value', void 0),
    i([w.field, n('design:type', String)], t.TextShape.prototype, 'lineSpacing', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'lineCount', void 0),
    i([w.field, n('design:type', Boolean)], t.TextShape.prototype, 'textWrapping', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'shadowBlur', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'shadowOffsetX', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'shadowOffsetY', void 0),
    i([w.field, n('design:type', ge.Color3)], t.TextShape.prototype, 'shadowColor', void 0),
    i([w.field, n('design:type', String)], t.TextShape.prototype, 'hTextAlign', void 0),
    i([w.field, n('design:type', String)], t.TextShape.prototype, 'vTextAlign', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'width', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'height', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.TextShape.prototype, 'paddingLeft', void 0),
    i([w.field, n('design:type', Boolean)], t.TextShape.prototype, 'billboard', void 0),
    i([w.field, n('design:type', Boolean)], t.TextShape.prototype, 'visible', void 0),
    (t.TextShape = i([T('engine.text', t.CLASS_ID.TEXT_SHAPE), n('design:paramtypes', [String])], t.TextShape)),
    (t.TransparencyMode = void 0),
    ((Ie = t.TransparencyMode || (t.TransparencyMode = {}))[(Ie.OPAQUE = 0)] = 'OPAQUE'),
    (Ie[(Ie.ALPHA_TEST = 1)] = 'ALPHA_TEST'),
    (Ie[(Ie.ALPHA_BLEND = 2)] = 'ALPHA_BLEND'),
    (Ie[(Ie.ALPHA_TEST_AND_BLEND = 3)] = 'ALPHA_TEST_AND_BLEND'),
    (Ie[(Ie.AUTO = 4)] = 'AUTO'),
    (t.Material = class extends w {
      constructor() {
        super(...arguments), (this.alphaTest = 0.5), (this.castShadows = !0), (this.transparencyMode = t.TransparencyMode.AUTO)
      }
    }),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'alphaTest', void 0),
    i([w.field, n('design:type', Object)], t.Material.prototype, 'albedoColor', void 0),
    i([w.field, n('design:type', ge.Color3)], t.Material.prototype, 'emissiveColor', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'metallic', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'roughness', void 0),
    i([w.field, n('design:type', ge.Color3)], t.Material.prototype, 'reflectivityColor', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'directIntensity', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'microSurface', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'emissiveIntensity', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'specularIntensity', void 0),
    i([w.component, n('design:type', Object)], t.Material.prototype, 'albedoTexture', void 0),
    i([w.component, n('design:type', Object)], t.Material.prototype, 'alphaTexture', void 0),
    i([w.component, n('design:type', Object)], t.Material.prototype, 'emissiveTexture', void 0),
    i([w.component, n('design:type', Object)], t.Material.prototype, 'bumpTexture', void 0),
    i([w.field, n('design:type', Boolean)], t.Material.prototype, 'castShadows', void 0),
    i([w.field, n('design:type', Number)], t.Material.prototype, 'transparencyMode', void 0),
    (t.Material = i([A('engine.material', t.CLASS_ID.PBR_MATERIAL)], t.Material)),
    (t.BasicMaterial = class extends w {
      constructor() {
        super(...arguments), (this.alphaTest = 0.5), (this.castShadows = !0)
      }
    }),
    i([w.component, n('design:type', Object)], t.BasicMaterial.prototype, 'texture', void 0),
    i([w.field, n('design:type', Number)], t.BasicMaterial.prototype, 'alphaTest', void 0),
    i([w.field, n('design:type', Boolean)], t.BasicMaterial.prototype, 'castShadows', void 0),
    (t.BasicMaterial = i([A('engine.material', t.CLASS_ID.BASIC_MATERIAL)], t.BasicMaterial))
  class Ne extends w {
    constructor(t) {
      if ((super(), (this.uuid = h('UUID')), !t || !('apply' in t) || !('call' in t))) throw new Error('Callback is not a function')
      this.callback = t
    }
    static uuidEvent(t, e) {
      if (delete t[e]) {
        const i = e + '_' + Math.random()
        ;(t[i] = void 0),
          Object.defineProperty(t, i, Object.assign(Object.assign({}, Object.getOwnPropertyDescriptor(t, i)), { enumerable: !1 })),
          Object.defineProperty(t, e.toString(), {
            get: function () {
              return this[i]
            },
            set: function (t) {
              const n = this[i]
              if (t) {
                if (!(t instanceof Ne)) throw new Error('value is not an OnUUIDEvent')
                this.data[e] = t.uuid
              } else this.data[e] = null
              if (((this[i] = t), t !== n)) {
                this.dirty = !0
                for (let i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](e, t, n)
              }
            },
            enumerable: !0,
          })
      }
    }
    toJSON() {
      return { uuid: this.uuid, type: this.type }
    }
  }
  i([w.field, n('design:type', Function)], Ne.prototype, 'callback', void 0)
  class Ue extends Ne {
    constructor() {
      super(...arguments), (this.button = t.ActionButton.ANY), (this.hoverText = 'Interact'), (this.distance = 10), (this.showFeedback = !0)
    }
    toJSON() {
      return {
        uuid: this.uuid,
        type: this.type,
        button: this.button,
        hoverText: this.hoverText,
        distance: this.distance,
        showFeedback: this.showFeedback,
      }
    }
  }
  i([w.field, n('design:type', String)], Ue.prototype, 'button', void 0),
    i([w.field, n('design:type', String)], Ue.prototype, 'hoverText', void 0),
    i([w.field, n('design:type', Number)], Ue.prototype, 'distance', void 0),
    i([w.field, n('design:type', Boolean)], Ue.prototype, 'showFeedback', void 0),
    (t.OnPointerLock = class extends Ne {
      constructor() {
        super(...arguments), (this.type = 'onPointerLock')
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnPointerLock.prototype, 'type', void 0),
    (t.OnPointerLock = i([T('engine.onPointerLock', t.CLASS_ID.UUID_CALLBACK)], t.OnPointerLock)),
    (t.OnAnimationEnd = class extends Ne {
      constructor() {
        super(...arguments), (this.type = 'onAnimationEnd')
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnAnimationEnd.prototype, 'type', void 0),
    (t.OnAnimationEnd = i([T('engine.onAnimationEnd', t.CLASS_ID.UUID_CALLBACK)], t.OnAnimationEnd)),
    (t.SmartItem = class extends w {}),
    (t.SmartItem = i([T('engine.smartItem', t.CLASS_ID.SMART_ITEM)], t.SmartItem)),
    (t.VideoClip = class extends w {
      constructor(t) {
        super(), (this.url = t)
      }
    }),
    i([w.readonly, n('design:type', String)], t.VideoClip.prototype, 'url', void 0),
    (t.VideoClip = i([A('engine.VideoClip', t.CLASS_ID.VIDEO_CLIP), n('design:paramtypes', [String])], t.VideoClip)),
    (t.VideoStatus = void 0),
    ((Ee = t.VideoStatus || (t.VideoStatus = {}))[(Ee.NONE = 0)] = 'NONE'),
    (Ee[(Ee.ERROR = 1)] = 'ERROR'),
    (Ee[(Ee.LOADING = 2)] = 'LOADING'),
    (Ee[(Ee.READY = 3)] = 'READY'),
    (Ee[(Ee.PLAYING = 4)] = 'PLAYING'),
    (Ee[(Ee.BUFFERING = 5)] = 'BUFFERING'),
    (t.VideoTexture = class extends w {
      constructor(e, i) {
        if (
          (super(),
          (this.volume = 1),
          (this.playbackRate = 1),
          (this.loop = !1),
          (this.seek = -1),
          (this._position = -1),
          (this._videoLength = -1),
          (this._status = t.VideoStatus.NONE),
          (this.playing = !1),
          !(e instanceof t.VideoClip))
        )
          throw new Error('Trying to create VideoTexture(VideoClip) with an invalid VideoClip')
        if (((this.videoClipId = b(e)), i))
          for (const t in i) {
            this[t] = i[t]
          }
      }
      play() {
        this.playing = !0
      }
      pause() {
        this.playing = !1
      }
      reset() {
        this.seekTime(0), this.pause()
      }
      seekTime(t) {
        ;(this.seek = t), (this.dirty = !0), (this.data.nonce = Math.random())
      }
      toJSON() {
        if (this.seek >= 0) {
          const t = JSON.parse(JSON.stringify(super.toJSON()))
          return (this.seek = -1), t
        }
        return super.toJSON()
      }
      update(e) {
        e.videoClipId === this.videoClipId &&
          ((this._status = e.videoStatus || t.VideoStatus.NONE),
          (this._videoLength = e.totalVideoLength),
          (this._position = e.currentOffset))
      }
      get position() {
        return this._position
      }
      get videoLength() {
        return this._videoLength
      }
      get status() {
        return this._status
      }
    }),
    i([w.readonly, n('design:type', String)], t.VideoTexture.prototype, 'videoClipId', void 0),
    i([w.readonly, n('design:type', Number)], t.VideoTexture.prototype, 'samplingMode', void 0),
    i([w.readonly, n('design:type', Number)], t.VideoTexture.prototype, 'wrap', void 0),
    i([w.field, n('design:type', Number)], t.VideoTexture.prototype, 'volume', void 0),
    i([w.field, n('design:type', Number)], t.VideoTexture.prototype, 'playbackRate', void 0),
    i([w.field, n('design:type', Boolean)], t.VideoTexture.prototype, 'loop', void 0),
    i([w.field, n('design:type', Number)], t.VideoTexture.prototype, 'seek', void 0),
    i([w.field, n('design:type', Boolean)], t.VideoTexture.prototype, 'playing', void 0),
    (t.VideoTexture = i(
      [A('engine.VideoTexture', t.CLASS_ID.VIDEO_TEXTURE), n('design:paramtypes', [t.VideoClip, Object])],
      t.VideoTexture
    )),
    (t.CameraModeArea = class extends w {
      constructor(t) {
        super(), (this.area = t.area), (this.cameraMode = t.cameraMode)
      }
    }),
    i([w.field, n('design:type', Object)], t.CameraModeArea.prototype, 'area', void 0),
    i([w.field, n('design:type', Number)], t.CameraModeArea.prototype, 'cameraMode', void 0),
    (t.CameraModeArea = i([T('engine.cameraModeArea', t.CLASS_ID.CAMERA_MODE_AREA), n('design:paramtypes', [Object])], t.CameraModeArea)),
    (t.AvatarTexture = class extends w {
      constructor(t, e) {
        if ((super(), (this.userId = t), e))
          for (const t in e) {
            this[t] = e[t]
          }
      }
    }),
    i([w.readonly, n('design:type', String)], t.AvatarTexture.prototype, 'userId', void 0),
    i([w.readonly, n('design:type', Number)], t.AvatarTexture.prototype, 'samplingMode', void 0),
    i([w.readonly, n('design:type', Number)], t.AvatarTexture.prototype, 'wrap', void 0),
    i([w.readonly, n('design:type', Boolean)], t.AvatarTexture.prototype, 'hasAlpha', void 0),
    (t.AvatarTexture = i([A('engine.texture', t.CLASS_ID.AVATAR_TEXTURE), n('design:paramtypes', [String, Object])], t.AvatarTexture))
  class De {
    static get instance() {
      return De._instance || (De._instance = new De()), De._instance
    }
    get playerHeight() {
      return this._playerHeight
    }
    get cameraMode() {
      return this._cameraMode
    }
    constructor() {
      ;(this.position = new ge.Vector3()),
        (this.rotation = new ge.Quaternion()),
        (this.feetPosition = new ge.Vector3()),
        (this.worldPosition = new ge.Vector3()),
        (this.lastEventPosition = { x: 0, y: 0, z: 0 }),
        (this.lastEventWorldPosition = { x: 0, y: 0, z: 0 }),
        (this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1 }),
        (this._playerHeight = 1.6),
        (this._cameraMode = t.CameraMode.ThirdPerson),
        'undefined' != typeof dcl &&
          (dcl.subscribe('positionChanged'),
          dcl.subscribe('rotationChanged'),
          dcl.subscribe('cameraModeChanged'),
          dcl.onEvent((t) => {
            switch (t.type) {
              case 'positionChanged':
                this.positionChanged(t.data)
                break
              case 'rotationChanged':
                this.rotationChanged(t.data)
                break
              case 'cameraModeChanged':
                this.cameraModeChanged(t.data)
            }
          })),
        Object.defineProperty(this.position, 'x', { get: () => this.lastEventPosition.x }),
        Object.defineProperty(this.position, 'y', { get: () => this.lastEventPosition.y }),
        Object.defineProperty(this.position, 'z', { get: () => this.lastEventPosition.z }),
        Object.defineProperty(this.worldPosition, 'x', { get: () => this.lastEventWorldPosition.x }),
        Object.defineProperty(this.worldPosition, 'y', { get: () => this.lastEventWorldPosition.y }),
        Object.defineProperty(this.worldPosition, 'z', { get: () => this.lastEventWorldPosition.z }),
        Object.defineProperty(this.feetPosition, 'x', { get: () => this.lastEventPosition.x }),
        Object.defineProperty(this.feetPosition, 'y', { get: () => this.lastEventPosition.y - this.playerHeight }),
        Object.defineProperty(this.feetPosition, 'z', { get: () => this.lastEventPosition.z }),
        Object.defineProperty(this.rotation, 'x', { get: () => this.lastEventRotation.x }),
        Object.defineProperty(this.rotation, 'y', { get: () => this.lastEventRotation.y }),
        Object.defineProperty(this.rotation, 'z', { get: () => this.lastEventRotation.z }),
        Object.defineProperty(this.rotation, 'w', { get: () => this.lastEventRotation.w })
    }
    positionChanged(t) {
      ;(this.lastEventPosition = t.position), (this.lastEventWorldPosition = t.cameraPosition), (this._playerHeight = t.playerHeight)
    }
    rotationChanged(t) {
      this.lastEventRotation = t.quaternion
    }
    cameraModeChanged(t) {
      this._cameraMode = t.cameraMode
    }
  }
  !(function (t) {
    ;(t.HitFirst = 'rqhf'), (t.HitAll = 'rqha')
  })(Oe || (Oe = {}))
  class Le {
    constructor() {
      this.queries = {}
    }
    static get instance() {
      return Le.ensureInstance(), Le._instance
    }
    static ensureInstance() {
      Le._instance || (Le._instance = new Le())
    }
    getRayFromCamera(t) {
      const e = De.instance.rotation,
        i = ge.Matrix.Identity()
      e.toRotationMatrix(i)
      const n = ge.Vector3.TransformCoordinates(ge.Vector3.Forward(), i)
      return { origin: De.instance.position, direction: n, distance: t }
    }
    getRayFromPositions(t, e) {
      const i = e.subtract(t),
        n = i.length()
      return { origin: t, direction: i.normalize(), distance: n }
    }
    hitFirst(t, e, i) {
      const n = 'number' == typeof i ? Oe.HitFirst + i : d()
      ;(this.queries[n] = e), 'undefined' != typeof dcl && dcl.query('raycast', { queryId: n, queryType: 'HitFirst', ray: t })
    }
    hitAll(t, e, i) {
      const n = 'number' == typeof i ? Oe.HitAll + i : d()
      ;(this.queries[n] = e), 'undefined' != typeof dcl && dcl.query('raycast', { queryId: n, queryType: 'HitAll', ray: t })
    }
    hitFirstAvatar(t, e) {
      r('not implemented yet')
    }
    hitAllAvatars(t, e) {
      r('not implemented yet')
    }
    handleRaycastHitFirstResponse(t) {
      this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
    }
    handleRaycastHitAllResponse(t) {
      this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
    }
  }
  class Be {
    activate(e) {
      e.eventManager.addListener(t.RaycastResponse, this, (t) => {
        'HitFirst' === t.payload.queryType
          ? Le.instance.handleRaycastHitFirstResponse(t)
          : 'HitAll' === t.payload.queryType && Le.instance.handleRaycastHitAllResponse(t)
      }),
        'undefined' != typeof dcl && dcl.subscribe('raycastResponse')
    }
    deactivate() {
      'undefined' != typeof dcl && dcl.unsubscribe('raycastResponse')
    }
  }
  class Ve {
    activate(e) {
      e.eventManager.addListener(t.PointerEvent, this, (t) => {
        Me.instance.handlePointerEvent(t.payload)
      }),
        'undefined' != typeof dcl && (dcl.subscribe('pointerUp'), dcl.subscribe('pointerDown'), dcl.subscribe('actionButtonEvent'))
    }
    deactivate() {
      'undefined' != typeof dcl && (dcl.unsubscribe('pointerUp'), dcl.unsubscribe('pointerDown'), dcl.unsubscribe('actionButtonEvent'))
    }
  }
  class He {
    constructor() {
      this.handlerMap = {}
    }
    activate(e) {
      e.eventManager.addListener(t.UUIDEvent, this, this.handleEvent),
        e.eventManager.addListener(t.ComponentAdded, this, this.componentAdded),
        e.eventManager.addListener(t.ComponentRemoved, this, this.componentRemoved),
        'undefined' != typeof dcl && dcl.subscribe('uuidEvent')
    }
    deactivate() {
      'undefined' != typeof dcl && dcl.unsubscribe('uuidEvent')
    }
    onAddEntity(t) {
      for (const e in t.components) {
        const i = t.components[e]
        i instanceof Ne && (this.handlerMap[i.uuid] = i)
      }
    }
    onRemoveEntity(t) {
      for (const e in t.components) {
        const i = t.components[e]
        i instanceof Ne && delete this.handlerMap[i.uuid]
      }
    }
    componentAdded(t) {
      if (t.entity.isAddedToEngine()) {
        const e = t.entity.components[t.componentName]
        e instanceof Ne && (this.handlerMap[e.uuid] = e)
      }
    }
    componentRemoved(t) {
      t.entity.isAddedToEngine() && t.component instanceof Ne && delete this.handlerMap[t.component.uuid]
    }
    handleEvent(t) {
      if (t.uuid in this.handlerMap) {
        const e = this.handlerMap[t.uuid]
        e && e.callback && 'call' in e.callback && e.callback(t.payload)
      }
    }
  }
  const ke = new Be(),
    Ge = new Ve(),
    je = new He()
  var qe, We, Ye
  ;(t.AudioClip = class extends w {
    constructor(t) {
      super(), (this.loop = !1), (this.volume = 1), (this.url = t)
    }
  }),
    i([w.readonly, n('design:type', String)], t.AudioClip.prototype, 'url', void 0),
    i([w.field, n('design:type', Boolean)], t.AudioClip.prototype, 'loop', void 0),
    i([w.field, n('design:type', String)], t.AudioClip.prototype, 'loadingCompleteEventId', void 0),
    i([w.field, n('design:type', Number)], t.AudioClip.prototype, 'volume', void 0),
    (t.AudioClip = i([A('engine.AudioClip', t.CLASS_ID.AUDIO_CLIP), n('design:paramtypes', [String])], t.AudioClip)),
    (t.AudioSource = class extends w {
      constructor(e) {
        if (
          (super(),
          (this.audioClip = e),
          (this.loop = !1),
          (this.volume = 1),
          (this.playing = !1),
          (this.pitch = 1),
          (this.playedAtTimestamp = Date.now()),
          !(e instanceof t.AudioClip))
        )
          throw new Error('Trying to create AudioSource(AudioClip) with an invalid AudioClip')
        this.audioClipId = b(e)
      }
      playOnce() {
        return (this.playing = !0), (this.dirty = !0), (this.playedAtTimestamp = Date.now()), (this.data.nonce = Math.random()), this
      }
    }),
    i([w.readonly, n('design:type', String)], t.AudioSource.prototype, 'audioClipId', void 0),
    i([w.field, n('design:type', Boolean)], t.AudioSource.prototype, 'loop', void 0),
    i([w.field, n('design:type', Number)], t.AudioSource.prototype, 'volume', void 0),
    i([w.field, n('design:type', Boolean)], t.AudioSource.prototype, 'playing', void 0),
    i([w.field, n('design:type', Number)], t.AudioSource.prototype, 'pitch', void 0),
    i([w.field, n('design:type', Number)], t.AudioSource.prototype, 'playedAtTimestamp', void 0),
    (t.AudioSource = i([T('engine.AudioSource', t.CLASS_ID.AUDIO_SOURCE), n('design:paramtypes', [t.AudioClip])], t.AudioSource)),
    (t.AudioStream = class extends w {
      constructor(t) {
        super(), (this.playing = !1), (this.volume = 1), (this.url = t), (this.playing = !0)
      }
    }),
    i([w.readonly, n('design:type', String)], t.AudioStream.prototype, 'url', void 0),
    i([w.field, n('design:type', Boolean)], t.AudioStream.prototype, 'playing', void 0),
    i([w.field, n('design:type', Number)], t.AudioStream.prototype, 'volume', void 0),
    (t.AudioStream = i([T('engine.AudioStream', t.CLASS_ID.AUDIO_STREAM), n('design:paramtypes', [String])], t.AudioStream)),
    (t.Gizmo = void 0),
    ((qe = t.Gizmo || (t.Gizmo = {})).MOVE = 'MOVE'),
    (qe.ROTATE = 'ROTATE'),
    (qe.SCALE = 'SCALE'),
    (qe.NONE = 'NONE'),
    (t.OnGizmoEvent = class extends Ne {
      constructor() {
        super(...arguments), (this.type = 'gizmoEvent')
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnGizmoEvent.prototype, 'type', void 0),
    (t.OnGizmoEvent = i([T('engine.gizmoEvent', t.CLASS_ID.UUID_CALLBACK)], t.OnGizmoEvent)),
    (t.Gizmos = class extends w {
      constructor() {
        super(...arguments), (this.position = !0), (this.rotation = !0), (this.scale = !0), (this.cycle = !0), (this.localReference = !1)
      }
    }),
    i([w.field, n('design:type', Boolean)], t.Gizmos.prototype, 'position', void 0),
    i([w.field, n('design:type', Boolean)], t.Gizmos.prototype, 'rotation', void 0),
    i([w.field, n('design:type', Boolean)], t.Gizmos.prototype, 'scale', void 0),
    i([w.field, n('design:type', Boolean)], t.Gizmos.prototype, 'cycle', void 0),
    i([w.field, n('design:type', String)], t.Gizmos.prototype, 'selectedGizmo', void 0),
    i([w.field, n('design:type', Boolean)], t.Gizmos.prototype, 'localReference', void 0),
    (t.Gizmos = i([T('engine.gizmos', t.CLASS_ID.GIZMOS)], t.Gizmos)),
    (t.OnFocus = class extends Ne {
      constructor(t) {
        super(t), (this.type = 'onFocus'), (je.handlerMap[this.uuid] = this)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnFocus.prototype, 'type', void 0),
    (t.OnFocus = i([T('engine.onFocus', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])], t.OnFocus)),
    (t.OnTextSubmit = class extends Ne {
      constructor(t) {
        super(t), (this.type = 'onTextSubmit'), (je.handlerMap[this.uuid] = this)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnTextSubmit.prototype, 'type', void 0),
    (t.OnTextSubmit = i([T('engine.onTextSubmit', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])], t.OnTextSubmit)),
    (t.OnBlur = class extends Ne {
      constructor(t) {
        super(t), (this.type = 'onBlur'), (je.handlerMap[this.uuid] = this)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnBlur.prototype, 'type', void 0),
    (t.OnBlur = i([T('engine.onBlur', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])], t.OnBlur)),
    (t.OnEnter = class extends Ne {
      constructor(t) {
        super(t), (this.type = 'onEnter'), (je.handlerMap[this.uuid] = this)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnEnter.prototype, 'type', void 0),
    (t.OnEnter = i([T('engine.onEnter', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])], t.OnEnter)),
    (t.OnChanged = class extends Ne {
      constructor(t) {
        super(t), (this.type = 'onChange'), (je.handlerMap[this.uuid] = this)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnChanged.prototype, 'type', void 0),
    (t.OnChanged = i([T('engine.onChange', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])], t.OnChanged)),
    (t.OnClick = class extends Ue {
      constructor(t, e) {
        super(t),
          (this.type = 'onClick'),
          (je.handlerMap[this.uuid] = this),
          e &&
            ((this.showFeedback = !(!1 === e.showFeedback)),
            e.button && (this.button = e.button),
            e.hoverText && (this.hoverText = e.hoverText),
            e.distance && (this.distance = e.distance))
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnClick.prototype, 'type', void 0),
    (t.OnClick = i([T('engine.onClick', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function, Object])], t.OnClick)),
    (t.OnPointerDown = class extends Ue {
      constructor(t, e) {
        super(t),
          (this.type = 'pointerDown'),
          (je.handlerMap[this.uuid] = this),
          e &&
            ((this.showFeedback = !(!1 === e.showFeedback)),
            e.button && (this.button = e.button),
            e.hoverText && (this.hoverText = e.hoverText),
            e.distance && (this.distance = e.distance))
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnPointerDown.prototype, 'type', void 0),
    (t.OnPointerDown = i([T('engine.pointerDown', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function, Object])], t.OnPointerDown)),
    (t.OnPointerUp = class extends Ue {
      constructor(t, e) {
        super(t),
          (this.type = 'pointerUp'),
          (je.handlerMap[this.uuid] = this),
          e &&
            ((this.showFeedback = !(!1 === e.showFeedback)),
            e.button && (this.button = e.button),
            e.hoverText && (this.hoverText = e.hoverText),
            e.distance && (this.distance = e.distance))
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnPointerUp.prototype, 'type', void 0),
    (t.OnPointerUp = i([T('engine.pointerUp', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function, Object])], t.OnPointerUp)),
    (t.OnPointerHoverEnter = class extends Ue {
      constructor(t, e) {
        super(t), (this.type = 'pointerHoverEnter'), (je.handlerMap[this.uuid] = this), e && e.distance && (this.distance = e.distance)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnPointerHoverEnter.prototype, 'type', void 0),
    (t.OnPointerHoverEnter = i(
      [T('engine.pointerHoverEnter', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function, Object])],
      t.OnPointerHoverEnter
    )),
    (t.OnPointerHoverExit = class extends Ue {
      constructor(t) {
        super(t), (this.type = 'pointerHoverExit'), (je.handlerMap[this.uuid] = this), (this.distance = 160)
      }
    }),
    i([w.readonly, n('design:type', String)], t.OnPointerHoverExit.prototype, 'type', void 0),
    (t.OnPointerHoverExit = i(
      [T('engine.pointerHoverExit', t.CLASS_ID.UUID_CALLBACK), n('design:paramtypes', [Function])],
      t.OnPointerHoverExit
    ))
  class Xe extends w {
    constructor(t) {
      super(),
        (this.name = null),
        (this.visible = !0),
        (this.opacity = 1),
        (this.hAlign = 'center'),
        (this.vAlign = 'center'),
        (this.width = '100px'),
        (this.height = '50px'),
        (this.positionX = '0px'),
        (this.positionY = '0px'),
        (this.isPointerBlocker = !0),
        t && ((this._parent = t), (this.data.parentComponent = b(t)))
    }
    get parent() {
      return this._parent
    }
    get parentComponent() {
      return this.data.parentComponent
    }
  }
  i([w.field, n('design:type', Object)], Xe.prototype, 'name', void 0),
    i([w.field, n('design:type', Boolean)], Xe.prototype, 'visible', void 0),
    i([w.field, n('design:type', Number)], Xe.prototype, 'opacity', void 0),
    i([w.field, n('design:type', String)], Xe.prototype, 'hAlign', void 0),
    i([w.field, n('design:type', String)], Xe.prototype, 'vAlign', void 0),
    i([w.uiValue, n('design:type', Object)], Xe.prototype, 'width', void 0),
    i([w.uiValue, n('design:type', Object)], Xe.prototype, 'height', void 0),
    i([w.uiValue, n('design:type', Object)], Xe.prototype, 'positionX', void 0),
    i([w.uiValue, n('design:type', Object)], Xe.prototype, 'positionY', void 0),
    i([w.field, n('design:type', Boolean)], Xe.prototype, 'isPointerBlocker', void 0),
    (t.UIFullScreen = class extends Xe {
      constructor() {
        super(null)
      }
    }),
    (t.UIFullScreen = i([A('engine.shape', t.CLASS_ID.UI_FULLSCREEN_SHAPE), n('design:paramtypes', [])], t.UIFullScreen)),
    (t.UIWorldSpace = class extends Xe {
      constructor() {
        super(null)
      }
    }),
    (t.UIWorldSpace = i([A('engine.shape', t.CLASS_ID.UI_WORLD_SPACE_SHAPE), n('design:paramtypes', [])], t.UIWorldSpace)),
    (t.UICanvas = class extends Xe {
      constructor() {
        super(null)
      }
    }),
    (t.UICanvas = i([A('engine.shape', t.CLASS_ID.UI_SCREEN_SPACE_SHAPE), n('design:paramtypes', [])], t.UICanvas)),
    (t.UIContainerRect = class extends Xe {
      constructor() {
        super(...arguments), (this.thickness = 0), (this.color = ge.Color4.Clear()), (this.alignmentUsesSize = !0)
      }
    }),
    i([w.field, n('design:type', Number)], t.UIContainerRect.prototype, 'thickness', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIContainerRect.prototype, 'color', void 0),
    i([w.field, n('design:type', Boolean)], t.UIContainerRect.prototype, 'alignmentUsesSize', void 0),
    (t.UIContainerRect = i([A('engine.shape', t.CLASS_ID.UI_CONTAINER_RECT)], t.UIContainerRect)),
    (t.UIStackOrientation = void 0),
    ((We = t.UIStackOrientation || (t.UIStackOrientation = {}))[(We.VERTICAL = 0)] = 'VERTICAL'),
    (We[(We.HORIZONTAL = 1)] = 'HORIZONTAL'),
    (t.UIContainerStack = class extends Xe {
      constructor() {
        super(...arguments),
          (this.adaptWidth = !0),
          (this.adaptHeight = !0),
          (this.color = ge.Color4.Clear()),
          (this.stackOrientation = t.UIStackOrientation.VERTICAL),
          (this.spacing = 0)
      }
    }),
    i([w.field, n('design:type', Boolean)], t.UIContainerStack.prototype, 'adaptWidth', void 0),
    i([w.field, n('design:type', Boolean)], t.UIContainerStack.prototype, 'adaptHeight', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIContainerStack.prototype, 'color', void 0),
    i([w.field, n('design:type', Number)], t.UIContainerStack.prototype, 'stackOrientation', void 0),
    i([w.field, n('design:type', Number)], t.UIContainerStack.prototype, 'spacing', void 0),
    (t.UIContainerStack = i([A('engine.shape', t.CLASS_ID.UI_CONTAINER_STACK)], t.UIContainerStack)),
    (t.UIButton = class extends Xe {
      constructor() {
        super(...arguments),
          (this.fontSize = 10),
          (this.fontWeight = 'normal'),
          (this.thickness = 0),
          (this.cornerRadius = 0),
          (this.color = ge.Color4.White()),
          (this.background = ge.Color4.White()),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0),
          (this.shadowBlur = 0),
          (this.shadowOffsetX = 0),
          (this.shadowOffsetY = 0),
          (this.shadowColor = ge.Color4.Black()),
          (this.text = 'button')
      }
    }),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'fontSize', void 0),
    i([w.field, n('design:type', String)], t.UIButton.prototype, 'fontWeight', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'thickness', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'cornerRadius', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIButton.prototype, 'color', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIButton.prototype, 'background', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'paddingLeft', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'shadowBlur', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'shadowOffsetX', void 0),
    i([w.field, n('design:type', Number)], t.UIButton.prototype, 'shadowOffsetY', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIButton.prototype, 'shadowColor', void 0),
    i([w.field, n('design:type', String)], t.UIButton.prototype, 'text', void 0),
    (t.UIButton = i([A('engine.shape', t.CLASS_ID.UI_BUTTON_SHAPE)], t.UIButton)),
    (t.UIText = class extends Xe {
      constructor() {
        super(...arguments),
          (this.outlineWidth = 0),
          (this.outlineColor = ge.Color4.White()),
          (this.color = ge.Color4.White()),
          (this.fontSize = 10),
          (this.fontAutoSize = !1),
          (this.value = ''),
          (this.lineSpacing = 0),
          (this.lineCount = 0),
          (this.adaptWidth = !1),
          (this.adaptHeight = !1),
          (this.textWrapping = !1),
          (this.shadowBlur = 0),
          (this.shadowOffsetX = 0),
          (this.shadowOffsetY = 0),
          (this.shadowColor = ge.Color4.Black()),
          (this.hTextAlign = 'left'),
          (this.vTextAlign = 'bottom'),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0)
      }
    }),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'outlineWidth', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIText.prototype, 'outlineColor', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIText.prototype, 'color', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'fontSize', void 0),
    i([w.field, n('design:type', Boolean)], t.UIText.prototype, 'fontAutoSize', void 0),
    i([w.component, n('design:type', t.Font)], t.UIText.prototype, 'font', void 0),
    i([w.field, n('design:type', String)], t.UIText.prototype, 'value', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'lineSpacing', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'lineCount', void 0),
    i([w.field, n('design:type', Boolean)], t.UIText.prototype, 'adaptWidth', void 0),
    i([w.field, n('design:type', Boolean)], t.UIText.prototype, 'adaptHeight', void 0),
    i([w.field, n('design:type', Boolean)], t.UIText.prototype, 'textWrapping', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'shadowBlur', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'shadowOffsetX', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'shadowOffsetY', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIText.prototype, 'shadowColor', void 0),
    i([w.field, n('design:type', String)], t.UIText.prototype, 'hTextAlign', void 0),
    i([w.field, n('design:type', String)], t.UIText.prototype, 'vTextAlign', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.UIText.prototype, 'paddingLeft', void 0),
    (t.UIText = i([A('engine.shape', t.CLASS_ID.UI_TEXT_SHAPE)], t.UIText)),
    (t.UIInputText = class extends Xe {
      constructor(e) {
        super(e),
          (this.outlineWidth = 0),
          (this.outlineColor = ge.Color4.Black()),
          (this.color = ge.Color4.Clear()),
          (this.fontSize = 10),
          (this.value = ''),
          (this.placeholder = ''),
          (this.margin = 10),
          (this.hTextAlign = 'left'),
          (this.vTextAlign = 'bottom'),
          (this.focusedBackground = ge.Color4.Black()),
          (this.textWrapping = !1),
          (this.shadowBlur = 0),
          (this.shadowOffsetX = 0),
          (this.shadowOffsetY = 0),
          (this.shadowColor = ge.Color4.White()),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0),
          (this.onTextSubmit = null),
          (this.onChanged = null),
          (this.onFocus = null),
          (this.onBlur = null),
          (this.onTextChanged = new t.OnChanged((t) => {
            const { value: e, isSubmit: i } = t.value,
              n = this.dirty
            if (((this.value = e), (this.dirty = n), i && this.onTextSubmit)) {
              const t = { text: e }
              this.onTextSubmit.callback(t)
            } else if (!i && this.onChanged) {
              const i = { value: e, pointerId: t.pointerId }
              this.onChanged.callback(i)
            }
          }))
      }
    }),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'outlineWidth', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIInputText.prototype, 'outlineColor', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIInputText.prototype, 'color', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'fontSize', void 0),
    i([w.component, n('design:type', t.Font)], t.UIInputText.prototype, 'font', void 0),
    i([w.field, n('design:type', String)], t.UIInputText.prototype, 'value', void 0),
    i([w.field, n('design:type', String)], t.UIInputText.prototype, 'placeholder', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'margin', void 0),
    i([w.field, n('design:type', String)], t.UIInputText.prototype, 'hTextAlign', void 0),
    i([w.field, n('design:type', String)], t.UIInputText.prototype, 'vTextAlign', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIInputText.prototype, 'focusedBackground', void 0),
    i([w.field, n('design:type', Boolean)], t.UIInputText.prototype, 'textWrapping', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'shadowBlur', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'shadowOffsetX', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'shadowOffsetY', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIInputText.prototype, 'shadowColor', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.UIInputText.prototype, 'paddingLeft', void 0),
    i([Ne.uuidEvent, n('design:type', t.OnChanged)], t.UIInputText.prototype, 'onTextChanged', void 0),
    i([Ne.uuidEvent, n('design:type', Object)], t.UIInputText.prototype, 'onFocus', void 0),
    i([Ne.uuidEvent, n('design:type', Object)], t.UIInputText.prototype, 'onBlur', void 0),
    (t.UIInputText = i([A('engine.shape', t.CLASS_ID.UI_INPUT_TEXT_SHAPE), n('design:paramtypes', [Object])], t.UIInputText)),
    (t.UIImage = class extends Xe {
      constructor(t, e) {
        super(t),
          (this.sourceLeft = 0),
          (this.sourceTop = 0),
          (this.sourceWidth = 1),
          (this.sourceHeight = 1),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0),
          (this.sizeInPixels = !0),
          (this.onClick = null),
          (this.source = e)
      }
    }),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'sourceLeft', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'sourceTop', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'sourceWidth', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'sourceHeight', void 0),
    i([w.component, n('design:type', Object)], t.UIImage.prototype, 'source', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.UIImage.prototype, 'paddingLeft', void 0),
    i([w.field, n('design:type', Boolean)], t.UIImage.prototype, 'sizeInPixels', void 0),
    i([Ne.uuidEvent, n('design:type', Object)], t.UIImage.prototype, 'onClick', void 0),
    (t.UIImage = i([A('engine.shape', t.CLASS_ID.UI_IMAGE_SHAPE), n('design:paramtypes', [Xe, Object])], t.UIImage)),
    (t.UIScrollRect = class extends Xe {
      constructor() {
        super(...arguments),
          (this.valueX = 0),
          (this.valueY = 0),
          (this.backgroundColor = ge.Color4.Clear()),
          (this.isHorizontal = !1),
          (this.isVertical = !1),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0),
          (this.paddingLeft = 0),
          (this.onChanged = null)
      }
    }),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'valueX', void 0),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'valueY', void 0),
    i([w.field, n('design:type', ge.Color4)], t.UIScrollRect.prototype, 'backgroundColor', void 0),
    i([w.field, n('design:type', Boolean)], t.UIScrollRect.prototype, 'isHorizontal', void 0),
    i([w.field, n('design:type', Boolean)], t.UIScrollRect.prototype, 'isVertical', void 0),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'paddingTop', void 0),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'paddingRight', void 0),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'paddingBottom', void 0),
    i([w.field, n('design:type', Number)], t.UIScrollRect.prototype, 'paddingLeft', void 0),
    i([Ne.uuidEvent, n('design:type', Object)], t.UIScrollRect.prototype, 'onChanged', void 0),
    (t.UIScrollRect = i([A('engine.shape', t.CLASS_ID.UI_SLIDER_SHAPE)], t.UIScrollRect)),
    (t.AvatarShape = Ye =
      class extends w {
        constructor() {
          super(...arguments), (this.useDummyModel = !1), (this.talking = !1)
        }
        static Dummy() {
          const t = new Ye()
          return (t.useDummyModel = !0), t
        }
      }),
    i([w.field, n('design:type', String)], t.AvatarShape.prototype, 'id', void 0),
    i([w.field, n('design:type', String)], t.AvatarShape.prototype, 'name', void 0),
    i([w.field, n('design:type', String)], t.AvatarShape.prototype, 'expressionTriggerId', void 0),
    i([w.field, n('design:type', Number)], t.AvatarShape.prototype, 'expressionTriggerTimestamp', void 0),
    i([w.field, n('design:type', String)], t.AvatarShape.prototype, 'bodyShape', void 0),
    i([w.field, n('design:type', Array)], t.AvatarShape.prototype, 'wearables', void 0),
    i([w.field, n('design:type', Array)], t.AvatarShape.prototype, 'emotes', void 0),
    i([w.field, n('design:type', Object)], t.AvatarShape.prototype, 'skinColor', void 0),
    i([w.field, n('design:type', Object)], t.AvatarShape.prototype, 'hairColor', void 0),
    i([w.field, n('design:type', Object)], t.AvatarShape.prototype, 'eyeColor', void 0),
    i([w.field, n('design:type', Boolean)], t.AvatarShape.prototype, 'useDummyModel', void 0),
    i([w.field, n('design:type', Boolean)], t.AvatarShape.prototype, 'talking', void 0),
    (t.AvatarShape = Ye = i([T('engine.avatarShape', t.CLASS_ID.AVATAR_SHAPE)], t.AvatarShape))
  let Qe = null,
    $e = null,
    Ze = null
  function Je() {
    return Ze || (Ze = new N()), Ze
  }
  const Ke = new I('scene')
  Ke.uuid = '0'
  const ti = new E(Ke)
  ;(A.engine = ti),
    'undefined' != typeof dcl && (ti.addSystem(new et(dcl), 1 / 0), tt(dcl)),
    ti.addSystem(je),
    ti.addSystem(Ge),
    ti.addSystem(ke),
    (t.AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE'),
    (t.Angle = ge.Angle),
    (t.AnimationState = xe),
    (t.Arc2 = ge.Arc2),
    (t.Attachable = e),
    (t.Axis = ge.Axis),
    (t.BezierCurve = ge.BezierCurve),
    (t.Camera = De),
    (t.Color3 = ge.Color3),
    (t.Color4 = ge.Color4),
    (t.Component = T),
    (t.ComponentGroup = C),
    (t.Curve3 = ge.Curve3),
    (t.DEG2RAD = ge.DEG2RAD),
    (t.DisposableComponent = A),
    (t.Engine = E),
    (t.Entity = I),
    (t.Epsilon = ge.Epsilon),
    (t.EventConstructor = y),
    (t.EventManager = u),
    (t.Frustum = ge.Frustum),
    (t.Input = Me),
    (t.Matrix = ge.Matrix),
    (t.MessageBus = class {
      constructor() {
        ;(this.messageQueue = []),
          (this.connected = !1),
          (this.flushing = !1),
          (function () {
            if (!$e) {
              ;($e = dcl.loadModule('@decentraland/CommunicationsController', {})),
                $e.then((t) => {
                  Qe = t
                })
              const t = Je()
              dcl.subscribe('comms'),
                dcl.onEvent((e) => {
                  'comms' === e.type && t.notifyObservers(e.data)
                })
            }
            return $e
          })().then(() => {
            ;(this.connected = !0), this.flush()
          })
      }
      on(t, e) {
        return Je().add((i) => {
          try {
            const n = JSON.parse(i.message)
            n.message === t && e(n.payload, i.sender)
          } catch (i) {
            dcl.error('Error parsing comms message ' + (i.message || ''), i)
          }
        })
      }
      sendRaw(t) {
        this.messageQueue.push(t), this.connected && this.flush()
      }
      emit(t, e) {
        const i = JSON.stringify({ message: t, payload: e })
        this.sendRaw(i), Je().notifyObservers({ message: i, sender: 'self' })
      }
      flush() {
        if (0 === this.messageQueue.length) return
        if (!this.connected) return
        if (!Qe) return
        if (this.flushing) return
        const t = this.messageQueue.shift()
        ;(this.flushing = !0),
          dcl.callRpc(Qe.rpcHandle, 'send', [t]).then(
            (t) => {
              ;(this.flushing = !1), this.flush()
            },
            (t) => {
              ;(this.flushing = !1), a('Error flushing MessageBus', t)
            }
          )
      }
    }),
    (t.MultiObserver = F),
    (t.Observable = N),
    (t.ObservableComponent = w),
    (t.Observer = M),
    (t.ObserverEventState = P),
    (t.OnPointerUUIDEvent = Ue),
    (t.OnUUIDEvent = Ne),
    (t.Orientation = ge.Orientation),
    (t.Path2 = ge.Path2),
    (t.Path3D = ge.Path3D),
    (t.PhysicsCast = Le),
    (t.Plane = ge.Plane),
    (t.PointerEventComponent = ze),
    (t.PointerEventSystem = Ve),
    (t.Quaternion = ge.Quaternion),
    (t.RAD2DEG = ge.RAD2DEG),
    (t.RaycastEventSystem = Be),
    (t.Scalar = ge.Scalar),
    (t.Shape = Fe),
    (t.Size = ge.Size),
    (t.Space = ge.Space),
    (t.Subscription = Pe),
    (t.ToGammaSpace = ge.ToGammaSpace),
    (t.ToLinearSpace = ge.ToLinearSpace),
    (t.UIShape = Xe),
    (t.UIValue = g),
    (t.UUIDEventSystem = He),
    (t.Vector2 = ge.Vector2),
    (t.Vector3 = ge.Vector3),
    (t.Vector4 = ge.Vector4),
    (t._initEventObservables = tt),
    (t.buildArray = function (t, e) {
      const i = []
      for (let n = 0; n < t; ++n) i.push(e())
      return i
    }),
    (t.engine = ti),
    (t.error = a),
    (t.executeTask = z),
    (t.getComponentClassId = _),
    (t.getComponentId = b),
    (t.getComponentName = S),
    (t.getMessageObserver = Je),
    (t.isDisposableComponent = R),
    (t.log = r),
    (t.newId = h),
    (t.onCameraModeChangedObservable = B),
    (t.onEnterScene = k),
    (t.onEnterSceneObservable = H),
    (t.onIdleStateChangedObservable = V),
    (t.onLeaveScene = j),
    (t.onLeaveSceneObservable = G),
    (t.onPlayerClickedObservable = K),
    (t.onPlayerConnectedObservable = $),
    (t.onPlayerDisconnectedObservable = Z),
    (t.onPlayerExpressionObservable = W),
    (t.onPointerLockedStateChange = Y),
    (t.onProfileChanged = Q),
    (t.onRealmChangedObservable = J),
    (t.onSceneReadyObservable = q),
    (t.onVideoEvent = X),
    (t.openExternalURL = function (t) {
      'undefined' != typeof dcl ? dcl.openExternalUrl(t) : a('ERROR: openExternalURL dcl is undefined')
    }),
    (t.openNFTDialog = function (t, e = null) {
      if ('undefined' != typeof dcl) {
        const i = /ethereum:\/\/(.+)\/(.+)/,
          n = t.match(i)
        if (!n || n.length < 3) return
        dcl.openNFTDialog(n[1], n[2], e)
      } else a('ERROR: openNFTDialog dcl is undefined')
    }),
    (t.pointerEventSystem = Ge),
    (t.raycastEventSystem = ke),
    (t.teleportTo = function (t) {
      var e, i
      ;(e = 'requestTeleport'),
        (i = [t]),
        void 0 === U && 'undefined' != typeof dcl && (U = dcl.loadModule('@decentraland/UserActionModule', {})),
        void 0 !== U &&
          'undefined' != typeof dcl &&
          U.then((t) => {
            dcl.callRpc(t.rpcHandle, e, i)
          })
    }),
    (t.uuid = d),
    (t.uuidEventSystem = je)
})((this.self = this.self || {}))

// AMD
"use strict";const getGlobalThis=function(){if(typeof globalThis!=="undefined")return globalThis;if(typeof self!=="undefined")return self;if(typeof window!=="undefined")return window;if(typeof this!=="undefined")return this;throw new Error("Unable to locate global `this`")};const globalObject=getGlobalThis();var loader;(function(e){"use strict";const n=1;const t=2;let r=0;let o=[];let l=[];const i={baseUrl:""};const s={};function f(e){if(typeof e==="object"){for(let n in e){if(e.hasOwnProperty(n)){i[n]=e[n]}}}}e.config=f;function d(e,t,o){let l=null;let i={};let f=null;if(typeof e==="function"){i=e}else if(typeof e==="string"){l=e;if(typeof t==="function"){i=t}else if(t instanceof Array){f=t;i=o}}else if(e instanceof Array){f=e;if(typeof t==="function"){i=t}}f=f||["require","exports","module"];if(l===null){l=`unnamed-module-${r++}`}l=g(l);function d(e){const n=s[l];if(!n)throw new Error("Could not access registered module "+l);let t=n.exports;t=typeof i==="function"?i.apply(globalObject,e)||t:i;n.exports=t;u(l)}f=(f||[]).map((e=>m(l,e)));if(!s[l]){s[l]={name:l,parent:null,dclamd:n,dependencies:f,handlers:[],exports:{},dependants:new Set}}s[l].dependencies=f;p(f,d,(e=>{if(typeof onerror=="function"){onerror(e)}else{throw e}}),l)}e.define=d;(function(e){e.amd={};e.modules=s})(d=e.define||(e.define={}));function u(e){const n=s[e];if(!n)throw new Error("Could not access registered module "+e);n.dclamd=t;let r=n.handlers;if(r&&r.length){for(let n=0;n<r.length;n++){r[n](s[e])}}}function c(e,n,t){if(!s[e]){return null}if(e==n||t==50)return[e];const r=s[e].dependencies;for(let o=0,l=r.length;o<l;o++){let l=c(r[o],n,t+1);if(l!==null){l.push(e);return l}}return null}function a(e,n){let t=s[e];if(!t){return false}let r={};for(let e in s){r[e]=false}let o=[];o.push(t);r[e]=true;while(o.length>0){let e=o.shift();let t=e.dependencies;if(t){for(let e=0,l=t.length;e<l;e++){let l=t[e];if(l===n){return true}let i=s[l];if(i&&!r[l]){r[l]=true;o.push(i)}}}}return false}function p(e,t,r,o){let i=new Array(e.length).fill(null);let f=0;let d=false;if(typeof e==="string"){if(s[e]){if(s[e].dclamd===n){throw new Error(`Trying to load ${e} from ${o}. The first module is still loading.`)}return s[e]}throw new Error(e+" has not been defined. Please include it as a dependency in "+o+"'s define()")}const u=e.length;for(let n=0;n<u;n++){switch(e[n]){case"require":let h=function(e,n,t){return p(e,n,t,o)};h.toUrl=function(e){return b(e,o)};i[n]=h;f++;break;case"exports":if(!s[o]){throw new Error("Parent module "+o+" not registered yet")}i[n]=s[o].exports;f++;break;case"module":i[n]={id:o,uri:b(o)};f++;break;default:{const p=e[n];const h=a(p,o);const m=()=>{i[n]=s[p].exports;f++;if(f===u&&t){d=true;t(i)}};if(h){const e=c(p,o,0);if(e){e.reverse();e.push(p);l.push(e)}w(p,(()=>{}),r,o);m()}else{w(p,m,r,o)}break}}}if(!d&&f===u&&t){t(i)}}e.require=p;function h(e,n){return function(){return dcl.callRpc(e,n.name,o.slice.call(arguments,0))}}function m(e,n){return e?b(n,e):n}function w(e,t,r,o){if(s[e]){s[e].dependants.add(o);if(s[e].dclamd===n){t&&s[e].handlers.push(t)}else{t&&t(s[e])}return}else{s[e]={name:e,parent:o,dclamd:n,handlers:[t],dependencies:[],dependants:new Set([o]),exports:{}}}if(e.indexOf("@")===0){let n=s[e].exports;if(typeof dcl.loadModule==="function"){dcl.loadModule(e,n).then((t=>{for(let e in t.methods){const r=t.methods[e];n[r.name]=h(t.rpcHandle,r)}u(e)})).catch((e=>{r(e)}))}else{throw new Error("Asynchronous modules will not work because loadModule function is not present")}}}if(typeof dcl!=="undefined"){dcl.onStart((()=>{const e=new Set;const t=[];for(let r in s){if(s[r]){if(s[r].dclamd===n){t.push(s[r])}s[r].dependencies.forEach((n=>{if(n=="require"||n=="exports"||n=="module")return;if(!s[n])e.add(n)}))}}const r=[];if(l.length){r.push(`\n> Cyclic dependencies: ${l.map((e=>"\n  - "+e.join(" -> "))).join("")}`)}if(e.size){r.push(`\n> Undeclared/unknown modules: ${Array.from(e).map((e=>"\n  - "+e)).join("")}`)}if(t.length){r.push(`\n> These modules didn't load: ${t.map((e=>"\n  - "+e.name)).join("")}.\n`)}if(r.length){throw new Error(r.join("\n"))}}))}function g(e){let n=e,t;t=/\/\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^\.\//g,"");t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"");n=n.replace(/^\//g,"");return n}function y(e,n){let t=e;if(!t.startsWith("@")){if(t.startsWith("./")||t.startsWith("../")){const e=n.split("/");e.pop();t=g(e.join("/")+"/"+t)}}return t}function b(e,n){switch(e){case"require":case"exports":case"module":return e}if(n){return y(e,n)}return g(e)}p.toUrl=b})(loader||(loader={}));globalObject.define=loader.define;globalObject.dclamd=loader;
// Builder generated code below
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ef85eb18-f69c-431c-bcfd-dd51d70a604f/src/item"
import Script2 from "../504cd7ac-2873-40d8-9172-13c9c24304b0/src/item"
import Script3 from "../56985185-7512-4359-9d0e-1142dc6b65a6/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script7 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script8 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const verticalWhitePad = new Entity('verticalWhitePad')
engine.addEntity(verticalWhitePad)
verticalWhitePad.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(21.235836029052734, 0.6780209541320801, 2.9307143688201904),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7489051818847656, 0.7489051818847656, 0.7489051818847656)
})
verticalWhitePad.addComponentOrReplace(transform4)

const blueButton = new Entity('blueButton')
engine.addEntity(blueButton)
blueButton.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(21.527795791625977, 2.208629608154297, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.000002384185791, 1.000002384185791)
})
blueButton.addComponentOrReplace(transform5)

const blueButton2 = new Entity('blueButton2')
engine.addEntity(blueButton2)
blueButton2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(21.437583923339844, 21.01711654663086, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000040531158447, 1.0000040531158447)
})
blueButton2.addComponentOrReplace(transform6)

const blueButton3 = new Entity('blueButton3')
engine.addEntity(blueButton3)
blueButton3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(20.846647262573242, 2.208629608154297, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000026226043701, 1.0000026226043701)
})
blueButton3.addComponentOrReplace(transform7)

const blueButton4 = new Entity('blueButton4')
engine.addEntity(blueButton4)
blueButton4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(20.8768367767334, 21.01711654663086, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000042915344238, 1.0000042915344238)
})
blueButton4.addComponentOrReplace(transform8)

const indicatorArrowBlue = new Entity('indicatorArrowBlue')
engine.addEntity(indicatorArrowBlue)
indicatorArrowBlue.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(20.84241485595703, 2.322356939315796, 2.210447072982788),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue.addComponentOrReplace(transform9)

const indicatorArrowBlue2 = new Entity('indicatorArrowBlue2')
engine.addEntity(indicatorArrowBlue2)
indicatorArrowBlue2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(21.527719497680664, 2.7262425422668457, 2.210447311401367),
  rotation: new Quaternion(0, 0, -1, -5.960464477539063e-8),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue2.addComponentOrReplace(transform10)

const indicatorArrowBlue3 = new Entity('indicatorArrowBlue3')
engine.addEntity(indicatorArrowBlue3)
indicatorArrowBlue3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(21.437223434448242, 21.139780044555664, 2.210447072982788),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue3.addComponentOrReplace(transform11)

const indicatorArrowBlue4 = new Entity('indicatorArrowBlue4')
engine.addEntity(indicatorArrowBlue4)
indicatorArrowBlue4.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(20.87462043762207, 21.521373748779297, 2.2289154529571533),
  rotation: new Quaternion(-1, -5.960464477539063e-8, 2.2351748896198842e-8, -1.1920927533992653e-7),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue4.addComponentOrReplace(transform12)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16.257904052734375, 20.25899887084961, 8.644201278686523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform13)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11.056485176086426, 20.45121955871582, 12.042595863342285),
  rotation: new Quaternion(-0.137949600815773, 0.6935200095176697, 0.6935198903083801, 0.13794969022274017),
  scale: new Vector3(1.1410490274429321, 1.1410516500473022, 0.21850548684597015)
})
nftPictureFrame25.addComponentOrReplace(transform14)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(25.79513168334961, 20.459497451782227, 11.413552284240723),
  rotation: new Quaternion(-0.0474492684006691, 0.7055131196975708, 0.7055129408836365, 0.04744936525821686),
  scale: new Vector3(1.58428955078125, 1.3697166442871094, 0.21850723028182983)
})
nftPictureFrame18.addComponentOrReplace(transform15)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9.290227890014648, 20.426799774169922, 6.783077239990234),
  rotation: new Quaternion(4.649673014504602e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.0194575786590576, 3.0194435119628906, 0.5880606770515442)
})
nftPictureFrame21.addComponentOrReplace(transform16)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(20.780593872070312, 23.616376876831055, 7.072032928466797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.728485107421875, 0.728485107421875, 0.728485107421875)
})
videoStream2.addComponentOrReplace(transform17)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(4.6311540603637695, 23.852609634399414, 10.579967498779297),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(0.7339770793914795, 0.7339770793914795, 0.2912816107273102)
})
externalLink6.addComponentOrReplace(transform18)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(4.243311882019043, 23.061321258544922, 13.783044815063477),
  rotation: new Quaternion(6.609534883246287e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame22.addComponentOrReplace(transform19)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(5.716893672943115, 23.061321258544922, 13.783044815063477),
  rotation: new Quaternion(6.609534883246287e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame27.addComponentOrReplace(transform20)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.100736141204834, 23.061321258544922, 12.949810981750488),
  rotation: new Quaternion(-2.4542694943398627e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.0766544342041016, 1.8383605480194092, 0.48325327038764954)
})
nftPictureFrame28.addComponentOrReplace(transform21)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.100736141204834, 23.061321258544922, 11.65913200378418),
  rotation: new Quaternion(-2.4542694943398627e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.0766549110412598, 1.8383605480194092, 0.4832533895969391)
})
nftPictureFrame29.addComponentOrReplace(transform22)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(6.284374713897705, 23.061321258544922, 10.791016578674316),
  rotation: new Quaternion(7.105426934084528e-15, 5.960464477539063e-8, -8.96382272607462e-15, -1),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame30.addComponentOrReplace(transform23)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(4.923574447631836, 23.061321258544922, 10.791016578674316),
  rotation: new Quaternion(7.105426934084528e-15, 5.960464477539063e-8, -8.96382272607462e-15, -1),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame31.addComponentOrReplace(transform24)

const dclARTPenthousePoolSurfac = new Entity('dclARTPenthousePoolSurfac')
engine.addEntity(dclARTPenthousePoolSurfac)
dclARTPenthousePoolSurfac.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(16.17420768737793, 0, 2.8335461616516113),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
dclARTPenthousePoolSurfac.addComponentOrReplace(transform25)
const gltfShape2 = new GLTFShape("480b0187-1832-41f0-b628-c50117874f1c/DCL_ ART Penthouse_Pool Surface_Final Details.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
dclARTPenthousePoolSurfac.addComponentOrReplace(gltfShape2)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(26.734424591064453, 20.02400016784668, 3.98028826713562),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.10689344257116318, 0.10689344257116318, 0.10689344257116318)
})
externalLink7.addComponentOrReplace(transform26)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(22.46240997314453, 20.27206802368164, 11.789177894592285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24932964146137238, 0.24932964146137238, 0.24932964146137238)
})
externalLink8.addComponentOrReplace(transform27)

const clickArea8 = new Entity('clickArea8')
engine.addEntity(clickArea8)
clickArea8.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.854387283325195, 20.33965492248535, 6.016144275665283),
  rotation: new Quaternion(-0.6237003803253174, 0.12993834912776947, 0.0562996007502079, 0.7687289714813232),
  scale: new Vector3(0.1844257414340973, 0.0390874445438385, 0.2946494519710541)
})
clickArea8.addComponentOrReplace(transform28)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(5.8751678466796875, 19.984304428100586, 6.087220191955566),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2762784957885742, 0.2762784957885742, 0.2762784957885742)
})
externalLink9.addComponentOrReplace(transform29)

const clickArea9 = new Entity('clickArea9')
engine.addEntity(clickArea9)
clickArea9.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(5.826894283294678, 20.16735076904297, 9.939189910888672),
  rotation: new Quaternion(0.004572233650833368, -0.07774766534566879, -0.0048020449467003345, 0.9969511032104492),
  scale: new Vector3(0.21413849294185638, 0.04469037801027298, 0.2517871558666229)
})
clickArea9.addComponentOrReplace(transform30)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(5.831681251525879, 20.081432342529297, 10.004923820495605),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13444139063358307, 0.13444139063358307, 0.13444139063358307)
})
externalLink10.addComponentOrReplace(transform31)

const clickArea10 = new Entity('clickArea10')
engine.addEntity(clickArea10)
clickArea10.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(3.4093096256256104, 20.287681579589844, 9.947159767150879),
  rotation: new Quaternion(0.6137899160385132, 0.1463073343038559, -0.08039809763431549, 0.7716166377067566),
  scale: new Vector3(0.28729212284088135, 0.04386773332953453, 0.2589152157306671)
})
clickArea10.addComponentOrReplace(transform32)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(3.331667184829712, 19.99462127685547, 9.901089668273926),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.17382459342479706, 0.17382459342479706, 0.03132406994700432)
})
externalLink11.addComponentOrReplace(transform33)

const clickArea11 = new Entity('clickArea11')
engine.addEntity(clickArea11)
clickArea11.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(10.779314994812012, 20.61284828186035, 8.809598922729492),
  rotation: new Quaternion(0.004572233650833368, -0.07774766534566879, -0.0048020449467003345, 0.9969511032104492),
  scale: new Vector3(0.2295805811882019, 0.04791324958205223, 0.26994436979293823)
})
clickArea11.addComponentOrReplace(transform34)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(10.791825294494629, 20.49983024597168, 8.840420722961426),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.22123144567012787, 0.22123144567012787, 0.22123144567012787)
})
externalLink12.addComponentOrReplace(transform35)

const clickArea12 = new Entity('clickArea12')
engine.addEntity(clickArea12)
clickArea12.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(16.636005401611328, 22.596357345581055, 5.3898162841796875),
  rotation: new Quaternion(0.003400562098249793, 0.14404264092445374, -0.005692224018275738, 0.9895493388175964),
  scale: new Vector3(0.28281497955322266, 0.04814597964286804, 0.4443323016166687)
})
clickArea12.addComponentOrReplace(transform36)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(16.668521881103516, 21.274839401245117, 5.351551532745361),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink13.addComponentOrReplace(transform37)

const clickArea13 = new Entity('clickArea13')
engine.addEntity(clickArea13)
clickArea13.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(17.03820037841797, 22.597797393798828, 6.189663410186768),
  rotation: new Quaternion(0.00040415505645796657, 0.5827045440673828, -0.00661835353821516, 0.8126569986343384),
  scale: new Vector3(0.28281524777412415, 0.04814598336815834, 0.44433262944221497)
})
clickArea13.addComponentOrReplace(transform38)

const externalLink14 = new Entity('externalLink14')
engine.addEntity(externalLink14)
externalLink14.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(17.180524826049805, 21.274839401245117, 6.324695110321045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink14.addComponentOrReplace(transform39)

const clickArea14 = new Entity('clickArea14')
engine.addEntity(clickArea14)
clickArea14.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(15.847886085510254, 22.581871032714844, 6.008711814880371),
  rotation: new Quaternion(0.003444868139922619, 0.13631795346736908, -0.005665518343448639, 0.9906429648399353),
  scale: new Vector3(0.2828151285648346, 0.04814598336815834, 0.4443325996398926)
})
clickArea14.addComponentOrReplace(transform40)

const externalLink15 = new Entity('externalLink15')
engine.addEntity(externalLink15)
externalLink15.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(15.703878402709961, 21.274839401245117, 5.771487712860107),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink15.addComponentOrReplace(transform41)

const clickArea15 = new Entity('clickArea15')
engine.addEntity(clickArea15)
clickArea15.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(8.897175788879395, 22.84731101989746, 6.745689868927002),
  rotation: new Quaternion(0.003444868139922619, 0.13631795346736908, -0.005665518343448639, 0.9906429648399353),
  scale: new Vector3(0.17335745692253113, 0.07632280141115189, 0.17915412783622742)
})
clickArea15.addComponentOrReplace(transform42)

const externalLink16 = new Entity('externalLink16')
engine.addEntity(externalLink16)
externalLink16.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(8.847955703735352, 22.771728515625, 6.738045692443848),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink16.addComponentOrReplace(transform43)

const clickArea16 = new Entity('clickArea16')
engine.addEntity(clickArea16)
clickArea16.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(8.73613452911377, 22.665739059448242, 2.7686219215393066),
  rotation: new Quaternion(0.0029778846073895693, 0.21557798981666565, -0.0059243179857730865, 0.9764642119407654),
  scale: new Vector3(0.6080641746520996, 0.6221185326576233, 0.6283671855926514)
})
clickArea16.addComponentOrReplace(transform44)

const externalLink17 = new Entity('externalLink17')
engine.addEntity(externalLink17)
externalLink17.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(8.727712631225586, 22.51377296447754, 2.798591136932373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink17.addComponentOrReplace(transform45)

const clickArea17 = new Entity('clickArea17')
engine.addEntity(clickArea17)
clickArea17.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(8.121882438659668, 22.665739059448242, 6.793350696563721),
  rotation: new Quaternion(-0.0007622542907483876, 0.716136634349823, -0.006586737930774689, 0.6979286670684814),
  scale: new Vector3(0.8094920516014099, 0.7290322184562683, 1.0638697147369385)
})
clickArea17.addComponentOrReplace(transform46)

const externalLink18 = new Entity('externalLink18')
engine.addEntity(externalLink18)
externalLink18.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(8.060551643371582, 22.517324447631836, 6.792789459228516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink18.addComponentOrReplace(transform47)

const dclARTPenthouseFinalDetai = new Entity('dclARTPenthouseFinalDetai')
engine.addEntity(dclARTPenthouseFinalDetai)
dclARTPenthouseFinalDetai.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dclARTPenthouseFinalDetai.addComponentOrReplace(transform48)
const gltfShape3 = new GLTFShape("7a5f6e59-e795-4ddd-a3d9-d47b328efd58/DCL_ ART Penthouse_Final Details.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
dclARTPenthouseFinalDetai.addComponentOrReplace(gltfShape3)

const clickArea18 = new Entity('clickArea18')
engine.addEntity(clickArea18)
clickArea18.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(24.77661895751953, 21.206321716308594, 2.9200220108032227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.3383262157440186, 0.12191612273454666)
})
clickArea18.addComponentOrReplace(transform49)

const externalLink19 = new Entity('externalLink19')
engine.addEntity(externalLink19)
externalLink19.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(24.794893264770508, 21.616662979125977, 2.718623638153076),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.37789252400398254, 0.37789252400398254, 0.37789252400398254)
})
externalLink19.addComponentOrReplace(transform50)

const clickArea19 = new Entity('clickArea19')
engine.addEntity(clickArea19)
clickArea19.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(5.938506603240967, 23.49574851989746, 10.492806434631348),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2265342473983765, 1.3389662504196167, 0.12191612273454666)
})
clickArea19.addComponentOrReplace(transform51)

const externalLink20 = new Entity('externalLink20')
engine.addEntity(externalLink20)
externalLink20.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(5.89432430267334, 23.852609634399414, 10.642776489257812),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(0.26347312331199646, 0.26347312331199646, 0.10456031560897827)
})
externalLink20.addComponentOrReplace(transform52)

const clickArea20 = new Entity('clickArea20')
engine.addEntity(clickArea20)
clickArea20.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(26.751476287841797, 20.158706665039062, 3.9489169120788574),
  rotation: new Quaternion(8.667011515512187e-18, -0.11914695799350739, 1.4203424214542792e-8, 0.9928766489028931),
  scale: new Vector3(0.4010789692401886, 0.0957718938589096, 0.5238365530967712)
})
clickArea20.addComponentOrReplace(transform53)

const clickArea6 = new Entity('clickArea6')
engine.addEntity(clickArea6)
clickArea6.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(22.529165267944336, 20.417476654052734, 11.837352752685547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4989621937274933, 0.15865324437618256, 0.6332188844680786)
})
clickArea6.addComponentOrReplace(transform54)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(1.6310739517211914, 1.431138038635254, 10.664918899536133),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(8.214221954345703, 8.214201927185059, 1.8090271949768066)
})
nftPictureFrame.addComponentOrReplace(transform55)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(1.6310749053955078, 1.573760986328125, 5.347846984863281),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(8.120807647705078, 8.120777130126953, 1.7884548902511597)
})
nftPictureFrame2.addComponentOrReplace(transform56)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(5.2566447257995605, 1.526909351348877, 13.71681022644043),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.873542785644531, 7.873542785644531, 1.7339985370635986)
})
nftPictureFrame3.addComponentOrReplace(transform57)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(6.02124547958374, 0.9831173419952393, 2.2893457412719727),
  rotation: new Quaternion(-1.4210854715202004e-14, 0, -2.4190138654927706e-15, -1),
  scale: new Vector3(10.337350845336914, 10.337350845336914, 2.2766056060791016)
})
nftPictureFrame5.addComponentOrReplace(transform58)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(14.949742317199707, 1.5237559080123901, 13.71253776550293),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.599900722503662, 7.599900722503662, 1.6737339496612549)
})
nftPictureFrame7.addComponentOrReplace(transform59)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(21.092884063720703, 1.2427082061767578, 13.723945617675781),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(8.735635757446289, 8.735635757446289, 1.923858404159546)
})
nftPictureFrame8.addComponentOrReplace(transform60)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(26.975967407226562, 1.5237559080123901, 13.738731384277344),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.599900722503662, 7.599900722503662, 1.6737339496612549)
})
nftPictureFrame12.addComponentOrReplace(transform61)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(21.055965423583984, 6.389643669128418, 13.766611099243164),
  rotation: new Quaternion(1.151959726068165e-14, 1, -1.1920927533992653e-7, 5.21540641784668e-8),
  scale: new Vector3(2.887326955795288, 2.887333631515503, 2.887326955795288)
})
plainText3.addComponentOrReplace(transform62)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(1.6217479705810547, 11.171281814575195, 5.169750213623047),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.086264610290527, 7.086212158203125, 1.560624361038208)
})
nftPictureFrame4.addComponentOrReplace(transform63)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(1.6217479705810547, 11.171281814575195, 10.799529075622559),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.086262226104736, 7.086212158203125, 1.560622215270996)
})
nftPictureFrame10.addComponentOrReplace(transform64)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(5.089955806732178, 11.171281814575195, 13.749226570129395),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.086245536804199, 7.086212158203125, 1.5606120824813843)
})
nftPictureFrame6.addComponentOrReplace(transform65)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(5.089955806732178, 11.171281814575195, 2.2482528686523438),
  rotation: new Quaternion(-1.4210854715202004e-14, -2.9802322387695312e-8, -1.1390517909849567e-16, 1),
  scale: new Vector3(7.086245536804199, 7.086212158203125, 1.5606120824813843)
})
nftPictureFrame11.addComponentOrReplace(transform66)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(13.312151908874512, 10.663463592529297, 13.725873947143555),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(9.503843307495117, 9.503798484802246, 2.0930423736572266)
})
nftPictureFrame9.addComponentOrReplace(transform67)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(19.883066177368164, 11.155461311340332, 13.747163772583008),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.608369827270508, 7.608334064483643, 1.6756001710891724)
})
nftPictureFrame13.addComponentOrReplace(transform68)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(27.227785110473633, 11.155462265014648, 13.747162818908691),
  rotation: new Quaternion(-2.1706591466766e-15, -1, 1.1920926823449918e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.608369827270508, 7.608334064483643, 1.6756001710891724)
})
nftPictureFrame14.addComponentOrReplace(transform69)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(30.37268829345703, 11.155462265014648, 10.417920112609863),
  rotation: new Quaternion(4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.608391761779785, 7.608334064483643, 1.6756082773208618)
})
nftPictureFrame15.addComponentOrReplace(transform70)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(30.3726863861084, 11.155460357666016, 5.508856296539307),
  rotation: new Quaternion(4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.608393669128418, 7.608334064483643, 1.6756083965301514)
})
nftPictureFrame16.addComponentOrReplace(transform71)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(26.398590087890625, 10.685670852661133, 2.2822139263153076),
  rotation: new Quaternion(3.552713678800501e-15, 1.0094493354632688e-21, 8.467876465127755e-15, -1),
  scale: new Vector3(9.811359405517578, 9.811312675476074, 2.1607673168182373)
})
nftPictureFrame17.addComponentOrReplace(transform72)

const dclARTPenthouseMessingPla = new Entity('dclARTPenthouseMessingPla')
engine.addEntity(dclARTPenthouseMessingPla)
dclARTPenthouseMessingPla.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(30.648635864257812, 1.6131073236465454, 13.185310363769531),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.0000019073486328, 1)
})
dclARTPenthouseMessingPla.addComponentOrReplace(transform73)
const gltfShape4 = new GLTFShape("d3ca5c63-f67e-4268-83ab-78e283cd669d/DCL_ ART Penthouse_Messing Plate.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dclARTPenthouseMessingPla.addComponentOrReplace(gltfShape4)

const dclARTPenthouseMessingPla2 = new Entity('dclARTPenthouseMessingPla2')
engine.addEntity(dclARTPenthouseMessingPla2)
dclARTPenthouseMessingPla2.setParent(_scene)
dclARTPenthouseMessingPla2.addComponentOrReplace(gltfShape4)
const transform74 = new Transform({
  position: new Vector3(1.3517608642578125, 1.6085131168365479, 2.808168411254883),
  rotation: new Quaternion(-0.7071068286895752, 0.7071068286895752, -4.2146844236867764e-8, -1.2644053981603065e-7),
  scale: new Vector3(1.0000038146972656, 1.0000038146972656, 1.0000030994415283)
})
dclARTPenthouseMessingPla2.addComponentOrReplace(transform74)

const dclARTPenthouseGalleryTit = new Entity('dclARTPenthouseGalleryTit')
engine.addEntity(dclARTPenthouseGalleryTit)
dclARTPenthouseGalleryTit.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(26.265819549560547, 3.075619697570801, 2.2195348739624023),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.9538378119468689, 1.031716227531433, 1.031716227531433)
})
dclARTPenthouseGalleryTit.addComponentOrReplace(transform75)
const gltfShape5 = new GLTFShape("34bf120f-bc7c-4a95-83a5-9bea2a008565/DCL_ ART Penthouse_Gallery Title.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
dclARTPenthouseGalleryTit.addComponentOrReplace(gltfShape5)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(1.5873031616210938, 6.574670791625977, 7.7688751220703125),
  rotation: new Quaternion(9.394152732729484e-15, 0.7071067690849304, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(3.059587240219116, 3.059593915939331, 3.059587240219116)
})
plainText6.addComponentOrReplace(transform76)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(1.5873031616210938, 15.706908226013184, 7.908690452575684),
  rotation: new Quaternion(9.394152732729484e-15, 0.7071067690849304, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(3.0375118255615234, 3.0375185012817383, 3.0375118255615234)
})
plainText.addComponentOrReplace(transform77)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(16.921688079833984, 15.960342407226562, 13.7709379196167),
  rotation: new Quaternion(1.2659565541315535e-14, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.983535051345825, 2.983541488647461, 2.983535051345825)
})
plainText4.addComponentOrReplace(transform78)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(30.412765502929688, 16.148548126220703, 7.886138916015625),
  rotation: new Quaternion(-9.041357580967437e-15, -0.7071068286895752, 8.429371689544496e-8, 0.7071067690849304),
  scale: new Vector3(3.187807083129883, 3.187814235687256, 3.187807083129883)
})
plainText2.addComponentOrReplace(transform79)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(verticalWhitePad, {"distance":25,"speed":5,"autoStart":false,"onReachEnd":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalWhitePad, channelBus))
script2.spawn(blueButton, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueButton, channelBus))
script2.spawn(blueButton2, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToStart","values":{}}]}, createChannel(channelId, blueButton2, channelBus))
script2.spawn(blueButton3, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToStart","values":{}}]}, createChannel(channelId, blueButton3, channelBus))
script2.spawn(blueButton4, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueButton4, channelBus))
script3.spawn(indicatorArrowBlue, {"active":true}, createChannel(channelId, indicatorArrowBlue, channelBus))
script3.spawn(indicatorArrowBlue2, {"active":true}, createChannel(channelId, indicatorArrowBlue2, channelBus))
script3.spawn(indicatorArrowBlue3, {"active":true}, createChannel(channelId, indicatorArrowBlue3, channelBus))
script3.spawn(indicatorArrowBlue4, {"active":true}, createChannel(channelId, indicatorArrowBlue4, channelBus))
script4.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/777792769.m3u8?s=a0f0df3270decf2e26edc561d5b949c7fccf6ca0","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoStream, channelBus))
script5.spawn(nftPictureFrame25, {"id":"110466434685535267528312366585544489607100704110403619358250249112484866687076","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script5.spawn(nftPictureFrame18, {"id":"110466434685535267528312366585544489607100704110403619358250249117982424825857","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script5.spawn(nftPictureFrame21, {"id":"110466434685535267528312366585544489607100704110403619358250249111385355059300","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script4.spawn(videoStream2, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/777813162.m3u8?s=11a70b1c5076078dbd40fa642ddfeb0197fec05c"}, createChannel(channelId, videoStream2, channelBus))
script6.spawn(externalLink6, {"url":"https://dara.network/cryptoqueen/","name":"Access Chatbot"}, createChannel(channelId, externalLink6, channelBus))
script5.spawn(nftPictureFrame22, {"id":"110466434685535267528312366585544489607100704110403619358250249125679006220289","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script5.spawn(nftPictureFrame27, {"id":"110466434685535267528312366585544489607100704110403619358250249128977541103617","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script5.spawn(nftPictureFrame28, {"id":"110466434685535267528312366585544489607100704110403619358250249131176564359169","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script5.spawn(nftPictureFrame29, {"id":"110466434685535267528312366585544489607100704110403619358250249127878029475841","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script5.spawn(nftPictureFrame30, {"id":"110466434685535267528312366585544489607100704110403619358250249130077052731393","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script5.spawn(nftPictureFrame31, {"id":"110466434685535267528312366585544489607100704110403619358250249126778517848065","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script6.spawn(externalLink7, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249114683889942628","name":"Open UI"}, createChannel(channelId, externalLink7, channelBus))
script6.spawn(externalLink8, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249115783401570404"}, createChannel(channelId, externalLink8, channelBus))
script7.spawn(clickArea8, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink9","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea8, channelBus))
script6.spawn(externalLink9, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249121280959709185","name":"Open UI"}, createChannel(channelId, externalLink9, channelBus))
script7.spawn(clickArea9, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink10","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea9, channelBus))
script6.spawn(externalLink10, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249119081936453633","name":"Open UI"}, createChannel(channelId, externalLink10, channelBus))
script7.spawn(clickArea10, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink11","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea10, channelBus))
script6.spawn(externalLink11, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249120181448081409","name":"Open UI"}, createChannel(channelId, externalLink11, channelBus))
script7.spawn(clickArea11, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink12","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea11, channelBus))
script6.spawn(externalLink12, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249116882913198090","name":"Open UI"}, createChannel(channelId, externalLink12, channelBus))
script7.spawn(clickArea12, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink13","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea12, channelBus))
script6.spawn(externalLink13, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249122380471337060","name":"Open UI"}, createChannel(channelId, externalLink13, channelBus))
script7.spawn(clickArea13, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink14","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea13, channelBus))
script6.spawn(externalLink14, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249123479982964836","name":"Open UI"}, createChannel(channelId, externalLink14, channelBus))
script7.spawn(clickArea14, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink15","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea14, channelBus))
script6.spawn(externalLink15, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249124579494592612","name":"Open UI"}, createChannel(channelId, externalLink15, channelBus))
script7.spawn(clickArea15, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink16","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea15, channelBus))
script6.spawn(externalLink16, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249134475099242596","name":"Open UI"}, createChannel(channelId, externalLink16, channelBus))
script7.spawn(clickArea16, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink17","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea16, channelBus))
script6.spawn(externalLink17, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249132276075987044","name":"Open UI"}, createChannel(channelId, externalLink17, channelBus))
script7.spawn(clickArea17, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink18","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea17, channelBus))
script6.spawn(externalLink18, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249133375587614820","name":"Open UI"}, createChannel(channelId, externalLink18, channelBus))
script7.spawn(clickArea18, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink19","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea18, channelBus))
script6.spawn(externalLink19, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249113584378314852","name":"Open UI"}, createChannel(channelId, externalLink19, channelBus))
script7.spawn(clickArea19, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink20","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea19, channelBus))
script6.spawn(externalLink20, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249110285843431524","name":"Open UI"}, createChannel(channelId, externalLink20, channelBus))
script7.spawn(clickArea20, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink7","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea20, channelBus))
script7.spawn(clickArea6, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink8","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea6, channelBus))
script5.spawn(nftPictureFrame, {"id":"7","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script5.spawn(nftPictureFrame2, {"id":"6","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script5.spawn(nftPictureFrame3, {"id":"10","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script5.spawn(nftPictureFrame5, {"id":"1","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script5.spawn(nftPictureFrame7, {"id":"1","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script5.spawn(nftPictureFrame8, {"id":"5","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script5.spawn(nftPictureFrame12, {"id":"11","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script8.spawn(plainText3, {"text":"Rebellion","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script5.spawn(nftPictureFrame4, {"id":"34399","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script5.spawn(nftPictureFrame10, {"id":"33163","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script5.spawn(nftPictureFrame6, {"id":"33332","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script5.spawn(nftPictureFrame11, {"id":"36315","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script5.spawn(nftPictureFrame9, {"id":"5","contract":"0x47542736C9d1086dc87Cc45138B2d57EC79eAFa3","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script5.spawn(nftPictureFrame13, {"id":"6","contract":"0x47542736C9d1086dc87Cc45138B2d57EC79eAFa3","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script5.spawn(nftPictureFrame14, {"id":"5","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script5.spawn(nftPictureFrame15, {"id":"3","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script5.spawn(nftPictureFrame16, {"id":"10","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script5.spawn(nftPictureFrame17, {"id":"8","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script8.spawn(plainText6, {"text":"Paradox","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script8.spawn(plainText, {"text":"Genesis","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script8.spawn(plainText4, {"text":"Absurdism","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText4, channelBus))
script8.spawn(plainText2, {"text":"Fragmentation","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))