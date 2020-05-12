/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentType } from 'react';

import { IWithQueryFromUrlInjectedProps } from './IWithQueryFromUrlInjectedProps';
import { WithQueryFromUrlProps } from './WithQueryFromUrlProps';
import { WithQueryChildProps } from './WithQueryChildProps';
import { UrlQueryParams } from '../../models/types/UrlQueryParams';

import { queryParser } from '../../helpers/queryParser';

export function WithQuery(key: UrlQueryParams) {
  return <PropsType extends IWithQueryFromUrlInjectedProps>(ChildComponent: ComponentType<PropsType>) => {
    return (props: WithQueryFromUrlProps<PropsType>) => {
      const { location } = props;
      const queryMap = queryParser.execute(location?.search ?? '');
      const query = queryMap.get(key);
      return <ChildComponent dataId={query} {...props as WithQueryChildProps<PropsType>} />;
    };
  };
}
