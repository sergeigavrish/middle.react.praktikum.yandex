import { Parser } from '../models/entities/Parser';

import { UrlQueryParams } from '../models/types/UrlQueryParams';
import { QUERY_PATTERN } from '../models/constants/QUERY_PATTERN';

export const queryParser = new Parser<UrlQueryParams>(UrlQueryParams, QUERY_PATTERN);
