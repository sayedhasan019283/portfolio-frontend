import { useLottie } from "lottie-react";

import data5 from "../../assets/animate/38321-loading.json";

const Loading = () => {
    const style = {
      margin: "auto",
      width: "200px",
      height: "auto",
      color: "black",
    };

  const options = {
    animationData:data5,
    loop: true,
    autoplay: true, 
  };

  const { View } = useLottie(options, style);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      {View}
    </div>
  );
};

export default Loading;
