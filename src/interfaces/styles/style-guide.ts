import { ReactElement } from "react";

export interface StyleGuideMainSectionProps {
  children?: ReactElement[] | ReactElement | undefined;
}

export interface StyleGuideSectionProps {
  title: string;
  children?: ReactElement[] | ReactElement | undefined;
}
