import React, { useEffect } from "react";
import Typed from "typed.js";
import { Builder } from "@builder.io/sdk";

type ComponentProps = {
  Hero: string[];
};

const TypingEffect = (props: ComponentProps) => {
  useEffect(() => {
    const options = {
      strings: props.Hero, // Pastikan variabel strings telah didefinisikan dengan benar
      typeSpeed: 50,
      backSpeed: 25,
      // loop: true,
      cursorChar: "_", // Ganti karakter kursor dengan |
    };

    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id='typed-text' className=''></span>;
};

export default TypingEffect;
