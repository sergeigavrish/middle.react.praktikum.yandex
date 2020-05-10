import React, { Component, ComponentType } from 'react';

import { IWithPreloadInjectedProps } from './IWithPreloadInjectedProps';
import { WithPreloadProps } from './WithPreloadProps';
import { WithPreloadChildProps } from './WithPreloadChildProps';
import { IWithPreloadState } from './IWithPreloadState';

export function WithPreload<DataType>(provider: (id: string) => Promise<DataType>) {
  return <PropsType extends IWithPreloadInjectedProps<DataType>>(ChildComponent: ComponentType<PropsType>) => {
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
        const { param } = this.props;
        if (prevProp.param !== param) {
          this.preload();
        }
      }

      private preload() {
        this.setState({ isLoading: true });
        const { param } = this.props;
        provider(param).then((data) => this.setState({ isLoading: false, preloadedData: data }));
      }

      render() {
        const { isLoading, preloadedData } = this.state;
        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          param,
          ...props
        } = this.props;
        return (
          <>
            {
              isLoading ? <p>Data is loading...</p> : <ChildComponent {...props as WithPreloadChildProps<PropsType, DataType>} data={preloadedData} />
            }
          </>
        );
      }
    };
  };
}
