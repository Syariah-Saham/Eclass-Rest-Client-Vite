import { useState } from "react";
import { IUsePageProps } from "../interfaces/hooks/usePageProps";
import { IPageHook } from "../interfaces/state/page";

export const usePage = (props: IUsePageProps) => {
  const { current, total, perPage } = props;
  const [page, setPage] = useState<IPageHook>({
    current: current,
    total: total,
    perPage: perPage,
  });

  const setTotal = (val: number) => setPage({ ...page, total: val });

  const setToStartPage = () => setPage({ ...page, current: 1 });
  const backPage = () => setPage({ ...page, current: page.current - 1 });

  const changePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage({ ...page, current: value });
  };

  const setTotalWithReset = (val: number) =>
    setPage({ ...page, total: val, current: 1 });

  return {
    page,
    setTotal,
    setTotalWithReset,
    setToStartPage,
    backPage,
    changePage,
  };
};
