import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const HeaderDetail = ({ title, date }: { title: string; date: string }) => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex items-center gap-3 mb-4 text-sm text-gray-700 cursor-pointer dark:text-gray-400"
        onClick={() => router.back()}
      >
        <IoIosArrowRoundBack size={24} />
        <h2>Back to list</h2>
      </div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold max-md:text-3xl">{title}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          hengkianggia / {date}
        </p>
      </div>
    </>
  );
};

export default HeaderDetail;
