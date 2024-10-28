import { Button } from "./button";
import { CustomerSelect } from "./customer";
import { ProductSelect } from "./product";

export const getHtmlFactory = () =>
  new Factory(Button, CustomerSelect, ProductSelect);
