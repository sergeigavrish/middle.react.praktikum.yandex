import { Parser } from '../entities/Parser';

import { UrlQueryParams } from '../types/UrlQueryParams';
import { QUERY_PATTERN } from '../constants/QUERY_PATTERN';

export const queryParser = new Parser<UrlQueryParams>(UrlQueryParams, QUERY_PATTERN);
