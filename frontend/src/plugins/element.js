import Vue from 'vue'
import {
  Aside,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Carousel,
  CarouselItem,
  Container,
  Col,
  Dialog,
  Divider,
  Drawer,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Menu,
  MenuItem,
  MessageBox,
  Message,
  Main,
  Option,
  Pagination,
  Radio,
  Row,
  Select,
  Steps,
  Step,
  Submenu,
  TabPane,
  Table,
  TableColumn,
  Tabs
} from 'element-ui'

Vue.use(Button)
Vue.use(Option)
Vue.use(Select)
Vue.use(Footer)
Vue.use(TabPane)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Divider)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Drawer)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
