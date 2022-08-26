type ProductDetail = {
  description: string;
  price: string;
};

type Action = {
  type: string;
  payload?: any;
};

const initialProducts = [
  {
    description: "Dragon Pool Floatie",
    price: "$2",
  },
  {
    description: "Shiny gold keychain",
    price: "$3",
  },
  {
    description: "Ping pong ball pack",
    price: "$4",
  },
  {
    description: "Walking harness",
    price: "$5",
  },
  {
    description: "Jingle ball",
    price: "$3",
  },
  {
    description: "Driftwood",
    price: "$10",
  },
];

type State = {
  products: ProductDetail[];
  // user: string;
  items: ProductDetail[];
};

const initialState: State = {
  products: initialProducts,
  // user: "Amanda",
  items: [],
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      const newItems = state.items;
      console.log(newItems);
      return { ...state, items: [...newItems, action?.payload] };
    default:
      return state;
  }
};

export default rootReducer;
