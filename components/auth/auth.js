import { useRouter } from "next/router";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";
import { auth, handleUserProfile } from "../../firebase/utils";
const initialState = {
  user: null,
  pending: true,
};

export const protectedRoutes = ["/profile", "/orders"];

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      console.log({ userAuth });
      if (userAuth) {
        if (router.pathname === "/login") router.push("/");
        // const { uid, displayName, email } = userAuth;
        // setAuthState({ user: { uid, displayName, email }, pending: false });
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          const currentUsr = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setAuthState({ user: currentUsr, pending: false });

          toast.success(`Hi ${snapshot.data().displayName}, Welcome Back 🙂`);
        });
      } else {
        // debugger;
        console.log(router.pathname);
        if (protectedRoutes.includes(router.pathname))
          window.location = "http://localhost:3010/login";

        setAuthState({ user: userAuth, pending: false });
      }
    });
    return () => unsubscribe();
  }, [typeof window !== undefined]);

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
        <img src="/loader2.svg" />
      </div>
    );
  else if (authState.user && router.pathname === "/login") router.push("/");
  else if (!authState.user && protectedRoutes.includes(router.pathname))
    router.push("/login");
  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
