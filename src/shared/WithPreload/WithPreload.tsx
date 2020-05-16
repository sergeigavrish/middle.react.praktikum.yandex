import React, { Component, ComponentType } from 'react';

import { IWithPreloadInjectedProps } from './IWithPreloadInjectedProps';
import { WithPreloadProps } from './WithPreloadProps';
import { IWithPreloadState } from './IWithPreloadState';

export function WithPreload<DataType, PropsType extends IWithPreloadInjectedProps<DataType>>(
  provider: (id: string) => Promise<DataType>, ChildComponent: ComponentType<PropsType>,
) {
  return class extends Component<WithPreloadProps<PropsType, DataType>, IWithPreloadState<DataType>> {
    constructor(props: WithPreloadProps<PropsType, DataType>) {
      super(props);
      this.state = {
        isLoading: false,
      };
    }

    componentDidMount() {
      this.preload();
    }

    componentDidUpdate(prevProp: WithPreloadProps<PropsType, DataType>) {
      const { dataId } = this.props;
      if (prevProp.dataId !== dataId) {
        this.preload();
      }
    }

    private preload() {
      this.setState({ isLoading: true });
      const { dataId } = this.props;
      provider(dataId).then((data) => this.setState({ isLoading: false, preloadedData: data }));
    }

    render() {
      const { isLoading, preloadedData } = this.state;
      return (
        <>
          {
            isLoading ? <p>Data is loading...</p> : <ChildComponent {...this.props as PropsType} data={preloadedData} />
          }
        </>
      );
    }
  };
}
