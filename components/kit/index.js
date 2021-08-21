import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { firestore, fixedByTwoDecimal } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import KitModalView from "./KitModalView";
import StyledWrapper from "./style.kit";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";

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
export const Kit = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [, , cartItems, setCartItems] = useContext(StoreContext);

  const [cart, setcart] = useState(null);
  const [product, setproduct] = useState();
  const [quantity, setquantity] = useState(cartItems?.qt || 1);
  const [loading, setloading] = useState(false);

  useEffect(async () => {
    setloading(true);
    if (user) {
      setCartItems(user.cartItems);
      setcart(user.cartItems);
    } else {
      const storedData = JSON.parse(localStorage.getItem("cart"));
      if (storedData) {
        setcart(storedData);
      }
    }
    try {
      const productRef = await firestore.doc("products/grooming_kit").get();
      const { id } = productRef;
      setproduct({ ...productRef.data(), pId: id });
      setloading(false);
    } catch (error) {
      setloading(false);
      toast.info(error.message);
    }
  }, []);

  useEffect(() => {
    if (user && cart) {
      firestore
        .doc(`users/${user.id}`)
        .update({ cartItems: cart })
        .then((res) => {
          setCartItems(cart);
          localStorage.setItem("cart", null);
        })
        .catch((err) => {
          toast.info(err.message);
          console.log(err.message);
        });
    } else if (!user) {
      setCartItems(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function increase() {
    setquantity((q) => q + 1);
  }
  function decrease() {
    if (quantity > 1) setquantity((q) => q - 1);
  }

  function addToCart() {
    // if (product.outOfStock) return;
    if (!cart?.qt && product)
      setcart({
        pId: product.pId,
        qt: quantity,
        cartSubTotal: fixedByTwoDecimal(product.price * quantity),
        delivery: "standard",
      });
    else
      setcart((c) => ({
        ...c,
        pId: product.pId,
        qt: quantity,
        cartSubTotal: fixedByTwoDecimal(product.price * quantity),
      }));
  }

  return (
    <StyledWrapper>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img src="/loader2.svg" alt="loading" />
        </div>
      ) : product?.name ? (
        <div className="kit">
          <div className="kit__top">
            <div className="kit__top-left">
              <div className="kit__top-cover">
                <img
                  src={product?.image || "/kitAssets/cover.png"}
                  alt="kit-image"
                />
              </div>
            </div>
            <div className="kit__top-right">
              <h3>{product.name}</h3>
              <h2 className="kit-price">AUD ${product.price}</h2>
              <h2 className="kit-quantity">Quantity</h2>
              <div className="quantity-buttons">
                <button onClick={decrease}>
                  <FaIcon className="fa fa-minus button-icon" />
                </button>
                <span>{quantity}</span>
                <button onClick={increase}>
                  <FaIcon className="fa fa-plus button-icon" />
                </button>
              </div>
              <div className="cart-button">
                <button onClick={addToCart}>
                  <span>
                    {product.outOfStock
                      ? "OUT OF STOCK"
                      : cartItems
                      ? cartItems.qt > 0
                        ? "Update Cart"
                        : "Add to Cart"
                      : "Add to Cart"}
                  </span>
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
                  <p>{product.description}</p>
                </details>
              </div>
              <div className="shipping">
                <Link href="/refund">
                  <a target="blank">
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
                <div key={m.title} className="grid-item">
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
      ) : (
        <h3
          style={{
            textAlign: "center",
            marginTop: "10rem",
            fontSize: "1.5rem",
          }}
        >
          There aren't any products yet!
        </h3>
      )}
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
