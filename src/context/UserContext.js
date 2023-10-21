import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "chandan Kumar",
    email: "mishr0404@gmail.com",
  },
});

export default UserContext;
