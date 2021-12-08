declare interface IRoute {
  path: string;
  exact: boolean;
  component: any;
  private: boolean;
}

declare interface IconProps {
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
