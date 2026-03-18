declare module "counterup2" {
    interface CounterUpOptions {
      duration?: number;
      delay?: number;
    }
  
    function counterUp(el: Element, options?: CounterUpOptions): Promise<void>;
  
    export default counterUp;
  }
  