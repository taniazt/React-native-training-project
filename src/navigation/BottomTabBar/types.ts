export type pressedTabType = 'Listen Now' | 'Library' | 'Account';

export type Tabs = {
  icon: JSX.Element;
  iconActive: JSX.Element;
  label: pressedTabType;
  route: string;
}[];
