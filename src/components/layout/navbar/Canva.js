import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Offcanvas from "react-bootstrap/Offcanvas";
import { montPrice } from "@/styles/fontes/Fontes";
import Products_Cart from "@/components/products/Products_Cart";

import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../../redux/cart/car.selectors";

function CanvaBar() {
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <>
      <div>
        <TiShoppingCart
          className="text-[25px] cursor-pointer"
          onClick={handleShow}
        />
      </div>
      <div>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton className="bg-[#0F52BA]">
            <Offcanvas.Title>
              <h1 className={` ${montPrice.className} text-white text-[35px] `}>
                Carrinho de compras
              </h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-[#0F52BA] w-[100%] m-0 p-0">
            <div className="min-h-[50vh] p-3 w-[100%] overflow-hidden ">
              {products.length > 0 ? (
                products.map((cartItem) => (
                  <div key={cartItem.id}>
                    <Products_Cart product={cartItem} />
                  </div>
                ))
              ) : (
                <p className="font-bold text-white">
                  Seu carrinho de compras está vazio!
                </p>
              )}
            </div>
          </Offcanvas.Body>
          <div className="bg-[#0F52BA]">
            <div
              className={`select-none flex justify-between pl-10 pr-10 mt-[2vh] mb-[2vh] ${montPrice.className} text-white text-[28px]`}
            >
              <div>Total:</div>
              <div>R${productsTotalPrice.toFixed(2)}</div>
            </div>
          </div>
          <div
            className={`flex justify-center items-center bg-black w-[100%] h-[108px] ${montPrice.className} text-white text-[28px] cursor-pointer`}
          >
            Finalizar Compra
          </div>
        </Offcanvas>
      </div>
    </>
  );
}

export default CanvaBar;
