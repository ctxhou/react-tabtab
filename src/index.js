// @flow
import Tabs from './Tabs';
import TabList, {TabListStyle, ActionButtonStyle} from './TabList';
import Tab, {TabStyle} from './Tab';
import DragTabList from './DragTabList';
import DragTab from './DragTab';
import PanelList from './PanelList';
import Panel, {PanelStyle} from './Panel';
import ExtraButton from './ExtraButton';

const styled = {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle};
const defaultOutput = {
  Tabs,
  TabList,
  Tab,
  DragTabList,
  DragTab,
  PanelList,
  Panel,
  ExtraButton,
  styled
}

export default defaultOutput;