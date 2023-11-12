import { Suspense } from "react";
interface Suspense {
  children?: any;
  loading?: any;
}
const Lazy = ({ children, loading, ...rest }: Suspense) => (
  <Suspense fallback={loading} {...rest}>
    {children}
  </Suspense>
);

export default Lazy;
