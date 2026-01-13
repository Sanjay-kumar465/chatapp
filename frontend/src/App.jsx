import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";

function App() {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader className="animate-spin size-10" />
      </div>
    );
  }

  return (
    // your routes here
  );
}

export default App;
