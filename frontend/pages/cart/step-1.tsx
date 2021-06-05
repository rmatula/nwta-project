import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { Content, BasketWrapper, EmptyCart } from "../../layout/cartLayout";
import SideCartNav from "../../components/SideCartNav/SideCartNav";
import Basket from "../../components/Basket/Basket";
import { AppState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { CartState } from "../../redux/cart/cartTypes";
import { IProduct } from "../../types";
import PageLoader from "../../components/PageLoader/PageLoader";
import Heading from "../../components/UI/Heading/Heading";
import { setStep } from "../../redux/cart/cartActions";

// BIG DISCLAIMER
// Because localStorage can't be red from the server this page has to be
// Client Side Rendered. I know i could use Cookies for this, but it's already
// to late. I will try it in my next project (－‸ლ)

const Step1 = () => {
  const { items, step }: CartState = useSelector((state: AppState) => state.cart);
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const cartItems = items.map((el) => el.productId);
      const { data } = await axios.post("/api/products/cartItems", {
        data: {
          cartItems,
        },
      });
      //@ts-ignore
      setProducts([...data]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(setStep(1));
  }, []);

  if (!products) {
    return <PageLoader />;
  }

  if (items.length === 0) {
    return (
      <>
        <Head>
          <title>Eternity</title>
          <meta name="Cart" content="User's cart" />
        </Head>
        <Header />
        <Content>
          <SideCartNav step={step} />
          <EmptyCart>
            <Heading size="h1" color="#fff">
              Your cart is empty...
            </Heading>
          </EmptyCart>
        </Content>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SideCartNav step={step} />
        <BasketWrapper>
          <Basket cartItems={items} products={products} />
        </BasketWrapper>
      </Content>
    </>
  );
};

export default Step1;
