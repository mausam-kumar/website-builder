import { defaultButton, defaultImage } from "@/utils/constant";
import { FC, useRef } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

export enum ElementType {
  TEXT = "text",
  IMAGE = "image",
  BUTTON = "button",
}

export type Element = {
  id: string;
  type: ElementType;
  left: number;
  top: number;
  content?: string;
  src?: string;
}

const Sidebar = () => {
  return (
    <div className="w-48 px-4 border-r border-gray-300 bg-white rounded-md shadow-md">
      <p className="text-center text-xl font-medium leading-8 text-black text-opacity-70 sm:text-2xl sm:leading-9 my-4">
        Elements
      </p>
      <SidebarItem type={ElementType.TEXT}>Text</SidebarItem>
      <SidebarItem type={ElementType.IMAGE}>Image</SidebarItem>
      <SidebarItem type={ElementType.BUTTON}>Button</SidebarItem>
    </div>
  );
};

type SidebarItemProps = {
  type: ElementType;
  children: React.ReactNode;
}

const SidebarItem: FC<SidebarItemProps> = ({ type, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    type,
    item: { type, height: type === "button" ? defaultButton.height : defaultImage.height, width: type === "button" ? defaultButton.width : defaultImage.width },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return (
    <div
      ref={ref}
      className="p-2 mb-2 border rounded cursor-pointer bg-slate-700 text-center"
    >
      {children}
    </div>
  );
};

export default Sidebar;