import { Avatar } from "antd";
import { memo } from "react";
const MVAvatar = memo(({ title, src, size, ...rest }: any) => {
  return (
    <div title={title} style={{ cursor: "pointer" }}>
      <Avatar size={size} alt={title} src={src} {...rest} />
    </div>
  );
});

export default MVAvatar;
