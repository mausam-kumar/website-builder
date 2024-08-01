import { useRef } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

export enum ElementType {
    TEXT = "text",
    IMAGE = "image",
    BUTTON = "button",
  }
  
  export interface Element {
    id: string;
    type: ElementType;
    left: number;
    top: number;
    content?: string;
    src?: string;
  }

const Sidebar = () => {
  return (
    <div className="w-48 p-4 border-r border-gray-300 bg-white">
      <h3 className="font-bold text-lg mb-4">Elements</h3>
      <SidebarItem type={ElementType.TEXT}>Text</SidebarItem>
      <SidebarItem type={ElementType.IMAGE}>Image</SidebarItem>
      <SidebarItem type={ElementType.BUTTON}>Button</SidebarItem>
    </div>
  );
};

interface SidebarItemProps {
    type: ElementType;
    children: React.ReactNode;
  }
  
  const SidebarItem: React.FC<SidebarItemProps> = ({ type, children }) => {
    const ref = useRef<HTMLDivElement>(null);
  
    const [, drag] = useDrag({
      type,
      item: { type },
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