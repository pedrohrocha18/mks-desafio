import Image from "next/image";
import React from "react";
import { montMed, montLight, montPrice } from "@/styles/fontes/Fontes";
import { MdOutlineArrowBack } from "react-icons/md";

type Props = {
  item: any;
};

const DetailsProduct = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center min-h-[75vh] w-100 p-2">
      <Image src={item.photo} width={300} height={100} alt={item.name} />
      <div className="flex flex-col justify-center items-center text-center p-2">
        <h2 className={`text-[30px] ${montMed.className}`}>{item.name}</h2>
        <p className={`mt-3 text-[15px] ${montLight.className}`}>
          {item.description}
        </p>
        <p className={`mt-3 text-[11px] ${montLight.className}`}>
          Tag: {item.brand}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-[40px]">
        <div
          className={`${montPrice.className} justify-center items-center text-[18px] text-white w-[80px] h-[26px] text-center rounded-[5px] bg-[#373737]`}
        >
          <p>R${parseInt(item.price)}</p>
        </div>
        <div className="flex gap-5 items-center p-2 h-[60px]">
          <a href="/">
            <MdOutlineArrowBack className="text-[45px] text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
