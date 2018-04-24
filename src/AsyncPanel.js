// @flow
import * as React from 'react'
import Panel from './Panel';

type Props = {
  loadContent: (cb: Function) => void,
  render: (data: any) => void,
  renderLoading: () => void,
  CustomPanelStyle: () => void,
  active: boolean,
  index: number,
  cache: boolean
};

type State = {
  isLoading: boolean,
  data: any
};

export default class AsyncPanelComponent extends React.PureComponent<Props, State> {
  static defaultProps = {
    cache: true
  };

  cacheData: any;

  constructor(props: Props) {
    super(props);
    (this: any).loadPanel = this.loadPanel.bind(this);
    (this: any).cacheData = undefined;
    this.state = {
      isLoading: false,
      data: undefined
    };
  }

  componentDidMount() {
    if (this.props.active)
      this.loadPanel();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.active)
      this.loadPanel();
  }

  loadPanel() {
    const {loadContent, cache} = this.props;
    if (cache && this.cacheData) {
      this.setState({
        isLoading: false,
        data: this.cacheData
      });
      return;
    }
    const callback = (err, data) => {
      if (err) {
        console.log('React-Tabtab async panel error:', err);
      }
      if (cache) {
        this.cacheData = data;
      }
      this.setState({
        isLoading: false,
        data
      });
    }
    const promise = loadContent(callback);
    if (promise) {
      promise.then(
        (data) => callback(null, data),
        (err) => callback(err)
      );
    }
    if (!this.state.isLoading) {
      this.setState({isLoading: true});
    }
  }

  render() {
    const {render, renderLoading, CustomPanelStyle, active, index} = this.props;
    const {isLoading, data} = this.state;
    let content;
    if (isLoading) {
      content = renderLoading();
    } else {
      content = render(data);
    }
    return (
      <Panel {...{CustomPanelStyle, active, index}}>
        {content}
      </Panel>
    )
  }
}