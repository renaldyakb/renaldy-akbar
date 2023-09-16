import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Kartu/kartu-notion")),
  {
    name: "KartuNotion",
    inputs: [
      {
        name: "targetRowId",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/typeed/tulisan")),
  {
    name: "Tulisan",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/button/Hire")),
  {
    name: "Hire",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/button/Instagram")),
  {
    name: "Instagram",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/navbar")),
  {
    name: "Navbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/scroll logo company/company-logo-scroll")),
  {
    name: "Company",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/Figma")),
  {
    name: "Figma",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/AdobeLightroom")),
  {
    name: "Adobe Lightroom",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/After-effect")),
  {
    name: "After Effect",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/Blender")),
  {
    name: "Blender",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/Cinema4D")),
  {
    name: "Cinema4D",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/Ilustrator")),
  {
    name: "Ilustrator",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/AdobePremiere")),
  {
    name: "Premiere Pro",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Skill/skill set/photoshop")),
  {
    name: "Photoshop",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/button/Github")),
  {
    name: "Github",
  }
);
