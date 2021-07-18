import { useRouter } from "next/router";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";
import { auth, firestore, handleUserProfile } from "../../firebase/utils";
import { StoreContext } from "../../store";

const initialState = {
  user: null,
  pending: true,
};

export const protectedRoutes = ["/profile", "/orders"];

export const safeRoutes = ["/login", "/signup"];

export const AuthContext = createContext(initialState);

const URL = process.env.NEXT_PUBLIC_URL;

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);
  const router = useRouter();
  const [, , cartItems, setCartItems] = useContext(StoreContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        if (safeRoutes.includes(router.pathname)) router.push("/");
        // const { uid, displayName, email } = userAuth;
        // setAuthState({ user: { uid, displayName, email }, pending: false });
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          const currentUsr = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setAuthState({ user: currentUsr, pending: false });
        });
      } else {
        if (protectedRoutes.includes(router.pathname))
          window.location = `${URL}/login`;

        setAuthState({ user: userAuth, pending: false });
      }
    });
    return () => unsubscribe();
  }, [typeof window !== undefined]);

  useEffect(async () => {
    const { user } = authState;
    if (user) {
      const userRef = await firestore.doc(`users/${user.id}`).get();
      if (userRef.exists) {
        const usr = userRef.data();
        const firebaseCart = usr.cartItems; // firebase cartItems

        const localItems = JSON.parse(localStorage.getItem("cart"));

        //
        if (localItems && !firebaseCart) {
          firestore
            .doc(`users/${user.id}`)
            .update({ cartItems: localItems })
            .then(() => {
              console.log("");
            })
            .catch((err) => console.log(err.message));
          setCartItems(localItems);
          localStorage.setItem("cart", null);
        } else if (firebaseCart && !localItems) {
          // update quantity over firebase by adding local storage cartitem quantity of the item, here we only have one item
          localStorage.setItem("cart", null);
          setCartItems(firebaseCart);
        } else if (firebaseCart && localItems) {
          firestore
            .doc(`users/${user.id}`)
            .update({
              cartItems: { ...cartItems, qt: cartItems.qt + firebaseCart.qt },
            })
            .then(() => {
              console.log("");
            })
            .catch((err) => console.log(err.message));
          setCartItems({ ...cartItems, qt: cartItems.qt + firebaseCart.qt });
          localStorage.setItem("cart", null);
        }
      }
    }
  }, [authState]);

  if (authState.pending)
    return (
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
    );
  else if (authState.user && safeRoutes.includes(router.pathname))
    router.push("/");
  else if (!authState.user && protectedRoutes.includes(router.pathname))
    router.push("/login");
  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
