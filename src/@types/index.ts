export type TypesWelcome = {
  text: string;
  sx: {
    variant: 'h6' | 'subtitle1';
  };
  icon?: any;
};

export type TypesWelcomeRedes = {
  text: string;
  href: string;
  sx: {
    button?: any;
    typography?: any;
    variant?: 'h6' | 'subtitle1';
    display?: any;
  };
  icon?: any;
  renderCustom: any;
};

export type TypesConfigNavbar = {
  text: string;
  href: string;
};
