import { PropsWithChildren } from "react";

export interface IModalDeleteProps extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export interface IModalCreateCourseProps extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
}
