## 一、todoList案例相关知识点
    1.拆分组件、实现静态组件，注意：className、style的写法
    
    2.动态初始化列表，如何确定将数据放在哪个组件的state中？
        --某个组件使用：放在其自身的state中
        --某些组件使用：放在他们共同的父组件state中（官方程此操作为：状态提升）
    
    3.关于父子之间的通信：
        1.【父组件】给【子组件】传递数据：通过props传递
        2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    
    4.注意defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
    5.状态在哪里，操作状态的方法就在哪里

## 二、路由的基本使用
    1.明确好界面中的导航区、展示区
    2.导航区中的<a>标签改为<Link>对标签
          <Link className='list-group-item' to='/about'>About</Link>
    3.展示区写Routes标签包裹Route标签再进行路径的匹配 (存在版本匹配问题)
        <Routes>
            <Route path='/about' element={<About />} />
        <Routes/>
    4.<App>的最外侧包裹了一个路由器：<BrowserRouter>或<HashRouter>

## 三、路由组件与一般组件 （旧版本）
    1.写法不同：
        一般组件：<Demo/>
        路由组件：<Route path='/demo' comonent={Demo}/>
    2.存放位置不同：
        一般组件：components
        路由组件：pages
    3.接受到的props不同
        一般组件：写组件标签时传递了什么，就能接收到什么
        路由组件：接收到三个固定的属性：
            history:
                go:f go(n)
                goBack:f goBack()
                goForward: f goForward()
                push:f push(path,state)
                replace:f replace(path,state)
            location:
                pathname: "/about"
                search: ""
                state: undefined
            match:
                params: {}
                path: "/about"
                url: "/about"

## 四、NavLink与封装NavLink
    1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容

## 五、Switch的使用（6版本已替换为Routers）
    1.通常情况下，path和conponent是一一对应的关系
    2.Switch可以提高路由匹配效率(单一匹配)
    --6版本Routers包裹路由组件可解决上述问题--

## 六、解决多级路径刷新页面样式丢失的问题
    1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
    2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
    3.使用HashRouter

## 七、路由的严格匹配（exact）与模糊匹配
    1.默认使用的是模糊匹配，（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
    2.开启严格匹配：<Route exact={true} path="/about" component={About} />
    3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 八、重定向 （已删除v5 Redirect）
    v6新版本使用： <Route path='*' element={<Navigate to="/about" />} /> 来实现重定向

## 九、嵌套路由
    v6版本中 嵌套路由需要一级路由加上 /* 来匹配对应的子路由 ：<Route  path='/home/*' element={<Home />} />
    子路由中注册路由：<MyNavLink to={'/home/news'}>News</MyNavLink> {/* 编写路由链接 */}
                    path中直接写对应子路由，无需加以对应路径，例如：path="/home/news"   
                    <Route  path='news' element={<News/>} />

## 十、向路由组件传递参数
    1.params 传参
        1.路由链接(携带参数) 父路由：
            {/*向路由组件传递params参数*/}
            <Link to={`/home/message/list/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> {/*路由链接*/}
        2.注册路由(声明接收) 父路由：：
            {/*注册路由并声明接受params参数*/}
                <Routes>
                    <Route  path='list/:id/:title' element={<List/>} />
                </Routes>
        3.接受参数 子路由 ：
            v5版本(class组件)：直接 const{ id,title } = this,props.match.params
            v6版本(函数组件)：引入 import { useParams } from 'react-router-dom';
                             const params = useParams();
                             const {id,title} = params;

    2.search 传参
        路由链接(携带参数)：
        {/*向路由组件传递search参数*/}
        <Link to={`/home/message/list/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> {/*路由链接*/}
        注册路由(无需声明，正常注册即可)：
        {/*search参数无需声明接收，正常注册路由即可*/}
        <Routes>
            <Route  path='list' element={<List/>} />
        </Routes>
        接受参数：
        {/*v6版本*/}
        v6中可以引入{useSearchParams}，通过在函数式组件中：const [params] = useSearchParams() const id = params.get("id")来实现组件传参
        const [searchParams,setSearchParams] = useSearchParams();
        const id = searchParams.get('id');
        const title = searchParams.get('title');
        {/*v5版本*/}
        接受参数：
        import {qs} from 'querystring' //引入
        const {search} = this.props.location;
        const {id,title} = qs.parse(search.slice(1)); //截取
        备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

    3.state 传参
    v5版本：
    路由链接(携带参数)：<Link to={{path:'/demo/test',state:{id:01,title:'春天'}}}>详情<Link/>
    注册路由(无需声明，正常注册即可):<Route pathname="/demo/test" component={Test} />
    接受参数:const {id,title} = this.props.location.state
    备注：刷新也可以保留参数
    v6版本：
    v6版本可以先定义好路由链接：<Link to='/home/message/list' state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link> 
                                    接受参数需要在函数式组件中引入 import { useLocation } from 'react-router-dom';
                                    使用const location = useLocation();const {id,title} = location.state;来接收

############  redux  ############
## 十一、求和案例_redux精简版
1.去除Count组件自身的状态 (去除需要抽离放在redux中集中管理的state)
2.src下建立：
        --redux
            --store.js
            --count_reducer.js
3.store.js:
    3.1 引入redux中的createStore函数，创建一个store
    3.2 createStore调用时要传入一个为其服务的reducer
    3.3 记得暴露store对象

4.count_reducer.js:
    4.1 rerducer 的本质是一个函数，接收：preState,action 返回加工后的状态
    4.2 reducer 有俩个作用：初始化装填，加工状态
    4.3 reducer 被第一次调用时（初始化），是store自动触发的
            传递的preState是undefined
            传递的action是：{type:'@@REDUX/INIT_随机数',data:???}
    
5.在index.js中检测store中状态的改变，一旦发生改变重新调 render 渲染 <App/>
    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
    例：在 index.js 入口文件：
                            //store.subscribe 订阅redux状态更新
                            store.subscribe(()=>{ //检测redux状态，更新则重新render整个App
                                //渲染组件
                                ReactDOM.render(<App/>,document.getElementById('root'));
                            })

## 十一、求和案例_redux完整版
    继承精简版情况下，新增文件：
                        1.count_action.js 专门用于创建action对象
                        2.constant.js 放置容易写错action中的type值

## 十一、求和案例 redux 异步action版
    1.明确：延迟的动作不想交给组件自身，想交给action
    2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
    3.具体编码：
        3.1 yarn add redux-thunk 并配置在store中
        3.2 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
        3.3 异步任务有结果后，分发一个同步的action去真正操作数据
    4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action

    