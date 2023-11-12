import { Input } from "antd";
import { memo } from "react";
import { Controller } from "react-hook-form";
import MVText from "../Text";

const MVInput = memo(({ name, label, control, rules, ...rest }: any) => {
  return (
    <div className="mb-3">
      <MVText htmlFor={name} className="capitalize">
        {name}
      </MVText>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <Input placeholder={label} {...field} {...rest} />
        )}
      />
    </div>
  );
});

export default MVInput;
