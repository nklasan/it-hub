import Image from "next/image";

const Loader = () => {
  return (
    <div className="">
      <Image src="/loader.gif" alt="Učitavanje...s" width={84} height={84} />
    </div>
  );
};

export default Loader;
