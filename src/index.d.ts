/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';

  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  import {ImageSourcePropType} from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}
