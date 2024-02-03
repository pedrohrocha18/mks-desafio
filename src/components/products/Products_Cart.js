import Image from "next/image";
import React from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import { montMed, montPrice } from "@/styles/fontes/Fontes";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductCart,
} from "@/redux/cart/actions";

function Products_Cart({ product }) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  return (
    <div
      className="gap-[6px] flex items-center justify-between p-1 h-[125px] bg-white rounded-[8px] mb-4 max-w-[365px] border-box"
      key={product.id}
    >
      <Image src={product.photo} width={75} height={80} alt={"product"} />
      <div className={`w-[80px] text-[13px] ${montMed.className}`}>
        <p>{product.name}</p>
      </div>
      <div className="ml-[1px] mr-[1px]">
        <div className="flex h-[60px] text-[24px] text-center rounded-md items-center justify-center gap-3 border-zinc-300 border-[1px]">
          {product.quantity > 0 ? (
            <MdRemove
              className="text-[25px] text-black"
              onClick={handleDecreaseClick}
            />
          ) : (
            <MdRemove className="text-[25px] text-gray-400" />
          )}
          <p className="select-none w-[30px]">{product.quantity}</p>
          <MdAdd
            className="text-[25px] text-black"
            onClick={handleIncreaseClick}
          />
        </div>
      </div>
      <div className="m-1">
        <p className={`${montPrice.className} text-[14px]`}>
          R${parseInt(product.price)}
        </p>
      </div>
      <div>
        <p
          className="bg-black text-white font-bold mb-[90px] w-[15px] h-[28px] rounded-lg text-center flex justify-center cursor-pointer"
          onClick={handleRemoveClick}
        >
          x
        </p>
      </div>
    </div>
  );
}

export default Products_Cart;
