import { montLight, montBold } from "@/styles/fontes/Fontes";
import React, { useMemo } from "react";
import CanvaBar from "./Canva";
import { useSelector } from "react-redux";

type Props = {};

function Header({}: Props) {
  const { products } = useSelector(
    (rootReducer: any) => rootReducer.cartReducer
  );

  const productsCount = useMemo(() => {
    return products.reduce((acc: any, curr: any) => acc + curr.quantity, 0);
  }, [products]);

  return (
    <div className="flex justify-between bg-[#0F52BA] h-[101px]">
      <div className="flex flex-row w-[100%] justify-between pl-[35px] pr-[60px] pt-[35px]">
        <div className="flex justify-center items-center flex-row gap-1 text-white h-[45px] w-[200px] m-1">
          <div>
            <p className={`text-[40px] font-semibold ${montLight}`}>MKS</p>
          </div>
          <div className="flex mt-[10px]">
            <p className={`font-extralight text-[20px] ${montBold}`}>
              Sistemas
            </p>
          </div>
        </div>
        <div className="w-[90px] gap-2 flex p-2 items-center justify-center h-[45px] bg-white pr-[50px] rounded-[8px] select-none">
          <CanvaBar />
          <div className="w-[25px] text-center">{productsCount}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
