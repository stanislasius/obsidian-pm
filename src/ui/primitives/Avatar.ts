export class Avatar {
  constructor(private el: HTMLElement) {}
  setName(_name: string): this {
    return this
  }
  setSize(_size: 'sm' | 'md'): this {
    return this
  }
}
