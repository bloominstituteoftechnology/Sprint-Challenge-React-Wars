import _extends from "@babel/runtime/helpers/extends";
import { useTheme, getThemeProps } from '@material-ui/styles';
import useMediaQuery from './useMediaQuery';

function useMediaQueryTheme(query, options) {
  var theme = useTheme();
  var props = getThemeProps({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });
  return useMediaQuery(query, _extends({}, props, options));
}

export default useMediaQueryTheme;