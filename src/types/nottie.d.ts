declare module 'nottie' {
  interface NodeOption {
    id?: string;
    onkeydown?: GlobalEventHandlers['onkeydown'];
    onclick?: GlobalEventHandlers['onclick'];
  }

  export interface NeactNode extends NodeOption {
    type: TagName;
    children?: NeactNode[];
    className?: string[];
  }
  export type HTMLElementTagMap = HTMLElementTagNameMap & SVGElementTagNameMap;

  export type T = HTMLElementTagMap['svg'];
  export interface createElementNode {
    type: TagName;
    children?: createElementNode[];
    className?: string[];
    target: HTMLElement;
  }

  export interface EditorNode {
    target: Element;
    children?: Element[];
  }

  export type createElementFn = (node: NeactNode) => createElementNode;

  export type Render = (target: Element, node: createElementNode) => EditorNode;
  export type TagName = keyof HTMLElementTagNameMap;
}