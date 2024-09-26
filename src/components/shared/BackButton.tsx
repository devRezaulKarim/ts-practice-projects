import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.replace("/", "") && (
        <Link to="/">
          <Button variant="link" className="md:absolute top-2 left-0 uppercase">
            <ArrowLeft size={16} /> Back
          </Button>
        </Link>
      )}
    </>
  );
};

export default BackButton;
