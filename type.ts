export type Variant = "Mobile" | "Tablet" | "Desktop"

export type ElementProps = "imageURL" | "alt" | "height" | "width" | "text"

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
    content: Record<string, string>;
  }