export class Band {
  anchor: string;
  heading: string;
  content: string;
  img: string;
  alt: string;
  alternate: boolean = false;
  list: boolean = false;
  listContent: string[] = [];
  cta_active: boolean = false;
  ctas: {text: string; url: string; type: string;}[];
}
