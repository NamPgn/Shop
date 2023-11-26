import { Controller } from "react-hook-form";
import { Select } from "antd";
import  { memo } from "react";
export const MySelectWrapper = memo(
  ({ placeholder, label, name, defaultValue, control, ...rest }: any) => {
    return (
      <div>
        <label htmlFor={name}>{label + ": "}</label>

        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              className="mt-2"
              style={{ width: "100%" }}
              defaultValue={defaultValue}
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              {...rest}
            />
          )}
        />
      </div>
    );
  }
);
