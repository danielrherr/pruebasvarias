import {
    MdDashboard,
    MdShoppingBag,
  } from "react-icons/md";
  
  
  export interface IItems {
    row: number,
    title: string,
    path: string,
    icon: string,
    list: IItems[],
  }
  export interface IMenuItems {
    row: number,
    title: string,
    list: IItems[],
  }
  
  
  const menuItems = [
    {
      row: 1,
      title: "Pages",
      list: [
        {
          row: 2,
          title: "Dashboard",
          path: "/",
          icon: <MdDashboard />,
        },
        {
          row: 3,
          title: "Orders",
          path: "/orders",
          icon: <MdShoppingBag />,
        },        
        {
          row: 4,
          title: "Orden Version 1",
          path: "/ordersV1",
          icon: <MdShoppingBag />,
        },
        {
          row: 5,
          title: "Mapa",
          path: "/mapa",
          icon: <MdShoppingBag />,
        },
       
      ],
    },

  ];
  
  export default menuItems;