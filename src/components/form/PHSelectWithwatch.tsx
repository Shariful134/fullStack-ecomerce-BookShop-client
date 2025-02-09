import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TPHSelect = {
  label: string;
  name: string;
  options: { value: string; label: string }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | "undefined";
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const PHSelectWithwatch = ({
  onValueChange,
  label,
  name,
  options,
  disabled,
  mode,
}: TPHSelect) => {
  const method = useFormContext();
  const inPutValues = useWatch({
    control: method.control,
    name,
  });

  useEffect(() => {
    onValueChange(inPutValues);
  }, [inPutValues]);
  //   console.log(inPutValues);
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            {...field}
            style={{ width: "100%" }}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelectWithwatch;
