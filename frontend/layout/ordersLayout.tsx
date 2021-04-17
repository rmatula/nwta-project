import styled from "styled-components";
import { Form } from "formik";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 7em);
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BasketWrapper = styled.div`
  width: 100%;
`;

/* ==========================================================================
                        Step-3
========================================================================== */

export const PlaceOrderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  p {
    font-size: 1.1rem;
  }

  h1 {
    max-width: 1400px;
    width: 100%;
  }
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShippingInfo = styled.div`
  padding: 1em;
  border: 1px solid #363333;
  border-radius: 1em;
  max-width: 1100px;
  width: 100%;
  margin-top: 1em;
  max-height: 500px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }

  @media (max-width: 1200px) {
    max-height: 290px;
  }
`;

export const BolderSpan = styled.span`
  font-weight: 700;
  color: #fff;
`;

export const OrderInfoRow = styled.div<{ center?: boolean; margin?: string }>`
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContent = styled.div<{ margin?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : null)};
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  svg {
    transition: all 0.2s;
    position: absolute;
    height: 2em;
    width: 2em;
    top: 3em;
    right: 3em;

    :hover {
      cursor: pointer;
      fill: #be6a15;
      stroke: #be6a15;
    }
  }

  @media (max-width: 700px) {
    svg {
      top: 1em;
      right: 1em;
    }
  }
`;

export const ImageWrapper = styled.div`
  transition: 0.1s all;
  position: relative;
  width: 100px;
  height: 100px;
  background: rgb(37, 44, 46);
  background: -moz-radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  background: -webkit-radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  background: radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#252c2e",endColorstr="#000000",GradientType=1);
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

interface ProductNameProps {
  width?: string;
  center?: boolean;
  column?: boolean;
}

export const ProductName = styled.div<ProductNameProps>`
  max-width: ${({ width }) => (width ? width : "200px")};
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "")};
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "")};
`;

export const OrderSummary = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
  max-width: 400px;
  height: 150px;
  width: 100%;
  padding: 1em;
  border: 1px solid #363333;
  border-radius: 1em;
  margin-left: 2em;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const PaypalInfo = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .billingAddress p {
    color: pink !important;
  }

  div {
    padding: 0 1em;
    width: 100%;
    padding: 0 2em;
  }

  @media (max-width: 500px) {
    margin-top: 0;
    padding: 17em 0 0 0;
  }
`;

export const TotalPrice = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const LogginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  p {
    font-size: 1.1rem;
  }
`;

export const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
`;
