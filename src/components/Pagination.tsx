"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-center gap-3 w-full">
      <button
        className="justify-start flex flex-row gap-1 cursor-pointer items-center font-medium hover:bg-pink-400 bg-lama text-zinc-100 ring-1 ring-red-500 ring-opacity-15 px-3 py-1 rounded-md transition-all ease-in-out hover:scale-105 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        <span className="text-sm">
          <MdKeyboardArrowLeft />
        </span>
      </button>

      <span className="text-lama ring-2 ring-lama ring-opacity-20 rounded-md text-sm font-medium justify-center px-3 py-1">
        {currentPage + 1}
      </span>

      <button
        className="justify-end flex flex-row gap-1 cursor-pointer items-center font-medium hover:bg-pink-400 bg-lama text-zinc-100 ring-1 ring-red-500 ring-opacity-15 px-3 py-1 rounded-md transition-all ease-in-out hover:scale-105 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        <span className="text-sm">
          <MdKeyboardArrowRight />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
