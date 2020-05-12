import { RouteComponentProps } from 'react-router-dom';

import { IWithPreloadInjectedProps } from '../../../../shared/WithPreload/IWithPreloadInjectedProps';
import { MessageList } from '../../../../models/types/MessageList';

export interface IMainContentLayoutProps extends IWithPreloadInjectedProps<MessageList>, RouteComponentProps { }
