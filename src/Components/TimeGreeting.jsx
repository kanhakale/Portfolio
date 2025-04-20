import { useState, useEffect } from "react";

const TimeGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning! ☀️");
    } else if (hour < 18) {
      setGreeting("Good Afternoon! 🌤️");
    } else {
      setGreeting("Good Evening! 🌙");
    }
  }, []);

  return (
    <div className="text-xl font-semibold text-black flex flex-wrap ">
      <img src = './avatar/base.png' className="h-[100px]"/>
      {greeting}
    </div>
  );
};

export default TimeGreeting;