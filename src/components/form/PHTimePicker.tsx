import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  label: string;
};

const PHTimePicker = ({ name, label }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TimePicker format="HH:mm" {...field} style={{ width: "100%" }} />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      ></Controller>
    </div>
  );
};

export default PHTimePicker;

// import { DatePicker, Form } from "antd";

// import { Controller } from "react-hook-form";
// type TInputProps = {
//   name: string;
//   label?: string;
// };

// const PHDatePicker = ({ name, label }: TInputProps) => {
//   return (
//     <div style={{ marginBottom: "15px" }}>
//       <Controller
//         name={name}
//         render={({ field }) => (
//           <Form.Item label={label}>
//             <DatePicker {...field} style={{ width: "100%" }} />
//           </Form.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default PHDatePicker;
