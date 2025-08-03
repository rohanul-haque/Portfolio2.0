import { Button } from "./components/ui/button";
import { AppLayout } from "./layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <div className="flex h-screen items-center justify-center">
        <Button variant={"outline"}>Click</Button>
      </div>
    </AppLayout>
  );
};

export default App;
