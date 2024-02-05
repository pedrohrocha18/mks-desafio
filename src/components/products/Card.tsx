import React from "react";
import Image from "next/image";

import {
  montLight,
  montMed,
  montBold,
  montPrice,
} from "@/styles/fontes/Fontes";
import { LuShoppingBag } from "react-icons/lu";

//redux
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

type Props = {
  product: any;
};

function Card({ product }: Props) {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="flex flex-col h-[300px] w-[219px] rounded-[8px] p-[1px] bg-white shadow-md select-none">
      <div className="flex justify-center p-1 items-center">
        <Image
          src={product.photo}
          width={138}
          height={138}
          alt={product.name}
        />
      </div>
      <div className="flex flex-row w-[120px] min-h-[35px] p-1">
        <div className="flex">
          <div className={`text-[16px] w-[124px] ${montMed.className}`}>
            <p>{product.name}</p>
          </div>
          <div
            className={`${montPrice.className} justify-center items-center text-[15px] text-white w-[70px] h-[26px] text-center rounded-[5px] bg-[#373737]`}
          >
            <p>R${parseInt(product.price)}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[80px] mt-1 ml-2">
        <div className={`mt-3 text-[13px] w-[192px] ${montLight.className}`}>
          <p>Redesigned from scratch and completely revised.</p>
        </div>
      </div>
      <div
        className="text-white flex justify-center items-center gap-2 w-[218px] h-[32px] bg-[#0F52BA] rounded-b-[7px] cursor-pointer hover:bg-black"
        onClick={handleProductClick}
      >
        <LuShoppingBag className={`${montBold.className}`} />
        <p
          className={`${montBold.className} h-[16px] justify-center items-center mt-2`}
        >
          COMPRAR
        </p>
      </div>
    </div>
  );
}

export default Card;

//src, nome produto, valor, descri
