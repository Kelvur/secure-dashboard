// Core
import { useMemo } from 'react';
// Utils
import getUrlParams from '07-utils/url/getUrlParams';


function useUrlParams(): URLSearchParams{
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => getUrlParams(window.location.href), [window.location.href] );
}

export default useUrlParams;
