// Minimal use-toast shims
export const useToast = () => ({ toast: (props: any) => console.log(props) });
export const toast = (props: any) => console.log(props);
