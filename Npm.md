### step1: install

```
  cnpm install -S beeshell-next
  or
  yarn add beeshell-next
```

### step2: use

[docs](https://github.com/841660202/beeshell-next/blob/master/docs/index.md)

### notice : use this commponents,you will get worning as follows

```
二. 由于未来采用异步渲染机制，所以即将在17版本中去掉的生命周期钩子函数
componentWillMount
componentWillRecieveProps
componentWIllUpdate

三. 新增两个
static getDerivedStateFromProps
会在初始化和update时触发，用于替换componentWillReceiveProps，可以用来控制 props 更新 state 的过程；它返回一个对象表示新的 state；如果不需要更新，返回 null 即可
getSnapshotBeforeUpdate
用于替换 componentWillUpdate，该函数会在update后 DOM 更新前被调用，用于读取最新的 DOM 数据，返回值将作为 componentDidUpdate 的第三个参数

```

### needs spport react 17+

```
  developing...
```