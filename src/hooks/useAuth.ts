import { useEffect, useState } from "react";
import { store } from "../store/store";
import { UserDetails } from "../types/pages.types";

const useAuth = (requiredPermissions: string) => {
  const [user, setUser] = useState<Partial<UserDetails> | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean | undefined>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = store.getState().user.userDetails;
    
    if (storedUser) {
      const parsedUser: Partial<UserDetails> = storedUser;
      setUser(parsedUser);

      const hasPermissions = parsedUser?.permission?.some(permission =>
        permission?.includes(requiredPermissions)
      );
      setIsAuthorized(hasPermissions);
    }
    setIsLoading(false);
  }, [requiredPermissions]);

  return { user, isAuthorized, isLoading };
};

export default useAuth;
