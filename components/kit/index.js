import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import KitModalView from "./KitModalView";
import StyledWrapper from "./style.kit";
import { Modal } from "react-responsive-modal";
const kitItems = [
  {
    title: "Razor",
    image: "/kitAssets/razor.png",
    content:
      "Get the job done with this four-blade razor, featuring a textured metal handle for an unrivaled grip and effortless glide. Comes with additional blades.",
  },
  {
    title: "Razor case",
    image: "/kitAssets/razor_cover.png",
    content:
      "Your safety is our top priority, but that doesn’t mean you have to sacrifice convenience. This razor case is easy-to-use and free from fiddly clips and locks.",
  },
  {
    title: "Bamboo toothbrush",
    image: "/kitAssets/toothbrush.png",
    content:
      "Smooth to the touch, our bamboo toothbrush features medium-grade, wave-shaped bristles for an optimal clean. It’s also 100 per cent biodegradable and environmentally-friendly.",
  },
  {
    title: "Dupont Tyvek bag",
    image: "/kitAssets/bag.png",
    content:
      "Durable, waterproof, and stylish, this Dupont Tyvek bag keeps your toiletries securely in their place during transit.",
  },
  {
    title: "Soap",
    image: "/kitAssets/soap.png",
    content:
      "Australian-made, this high-quality soap will keep you smelling and feeling fresh and squeaky clean, even when on the go.",
  },
  {
    title: "Dental floss",
    image: "/kitAssets/floss.png",
    content:
      "Made from cornstarch, this dental floss is stored in a durable yet flexible glass jar sturdy enough to stand up to long-haul travel.",
  },
  {
    title: "Shaving soap",
    image: "/kitAssets/soap.png",
    content:
      "With a thick, rich lather and invigorating citrus scent, our shaving soap and tin ensures you get a clean, comfortable shave when and wherever you need.",
  },
  {
    title: "Soap case",
    image: "/kitAssets/soap_case.png",
    content:
      "Travel cases are a must for any jet setter. Our leak-free case ensures your soap stays fresh and clean.",
  },
];

const allProd = [
  { pId: "product1", pName: "kit 1" },
  { pId: "product2", pName: "kit 2" },
];
export const Kit = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  const [, , , setCartItems] = useContext(StoreContext);

  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState(allProd);
  console.log({ cart });

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("cart"));
  //   if (storedData) {
  //     setcart(storedData);
  //   }
  // }, []);

  useEffect(() => {
    if (user) {
      firestore
        .doc(`users/${user.id}`)
        .update({ cartItems: cart })
        .then((res) => console.log("updated cart from kit page"))
        .catch((err) => console.log(err.message));
    }
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function add(product) {
    const prod = cart.find((p) => p.pId === product.pId);
    if (!prod) {
      setcart((oldCart) => [...oldCart, { ...product, qt: 1 }]);
    } else {
      const updatedCart = cart.map((p) =>
        p.pId === prod.pId ? { ...p, qt: p.qt + 1 } : { ...p }
      );
      setcart(updatedCart);
    }
  }
  function remove(product) {
    const prod = cart.find((p) => p.pId === product.pId);
    if (!prod) {
      //skip and do nothing
    } else if (prod.qt === 1) {
      const updatedCart = cart.filter((f) => f.pId !== prod.pId);
      setcart(updatedCart);
    } else {
      const updatedCart = cart.map((p) =>
        p.pId === prod.pId ? { ...p, qt: (p.qt || 1) - 1 } : { ...p }
      );
      setcart(updatedCart);
    }
  }

  return (
    <StyledWrapper>
      <div className="kit">
        <div className="kit__top">
          <div className="kit__top-left">
            <div className="kit__top-cover">
              <img src="/kitAssets/cover.png" alt="kit-image" />
            </div>
          </div>
          <div className="kit__top-right">
            <h3>MYGIENE GROOMING KIT</h3>
            <h2 className="kit-price">USD $59.99</h2>
            <h2 className="kit-quantity">Quantity</h2>
            <div className="quantity-buttons">
              <button>
                <FaIcon className="fa fa-minus button-icon" />
              </button>
              <span>1</span>
              <button>
                <FaIcon className="fa fa-plus button-icon" />
              </button>
            </div>
            <div className="cart-button">
              <button>
                <span>Add to Cart</span>
              </button>
            </div>
            <div className="values">
              <div className="value-1">
                <span>ECO-FRIENDLY</span>
                <br />
                <img src="/homeAssets/eco-friendly.png" alt="eco-friendly" />
              </div>
              <div className="value-2">
                <span>SUSTAINABLE</span>
                <br />
                <img src="/homeAssets/sustainable.png" alt="suistainable" />
              </div>
              <div className="value-3">
                <span>HIGH QUALITY</span>
                <br />
                <img src="/homeAssets/high-quality.png" alt="high-quality" />
              </div>
            </div>
            <div className="description">
              <details open>
                <summary>Product Description</summary>
                <p>
                  Mygiene delivers a complete, one-stop toiletries package at
                  the click of a button. You get more time to kick back, relax,
                  and enjoy your holiday.
                </p>
              </details>
            </div>
            <div className="shipping">
              <Link href="/refund">
                <a href="/refund" target="blank">
                  <span>Shipping & Returns</span>

                  <FaIcon className="fa fa-external-link" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="kit__tiles">
          <div className="kit__tiles-title">
            <span>Kit Items</span>
          </div>
          <div className="kit__tiles-items">
            {kitItems.map((m) => (
              <div class="grid-item">
                <span className="item-title">
                  {m.title}{" "}
                  <KitModalView
                    title={m.title}
                    image={m.image}
                    content={m.content}
                  />
                </span>

                <img src={m.image} alt={m.title} />
                <div className="text-overlay">
                  <span>{m.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

{
  /* Kit page
      <br /> <br />
      {products.map((p) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "2rem",
              padding: "2rem",
            }}
          >
            Product Name: {p.pName}
            <button onClick={() => add(p)}>+</button>
            <button onClick={() => remove(p)}>-</button>
          </div>
        );
      })} */
}
