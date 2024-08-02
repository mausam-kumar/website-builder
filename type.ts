
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