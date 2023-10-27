import { Suspense } from "react";

const Lazy = ({ children, loading, ...rest }: any) => (
  <Suspense fallback={loading} {...rest}>{children}</Suspense>
);

export default Lazy;