import { StickyScrollReveal } from "../ui/sticky-scroll-reveal";

const items = [
  {
    title: "Empowerment",
    content: "Equip students with skills and confidence for the future.",
    color: "#E6F2FF", // Light blue
  },
  {
    title: "Teamwork",
    content: "Foster collaboration and leadership in group projects.",
    color: "#E6FFE6", // Light green
  },
  {
    title: "Innovation",
    content: "Spark creativity through hands-on robotics and STEM learning.",
    color: "#FFF2E6", // Light orange
  },
];

export default function CoreValue() {
  return (
    <main className="bg-background  ">
      {/* <div>
            <h1 className="text-black flex items-center justify-center">
                dsdsds 
            </h1>
        </div> */}
      <StickyScrollReveal items={items} />
    </main>
  );
}
