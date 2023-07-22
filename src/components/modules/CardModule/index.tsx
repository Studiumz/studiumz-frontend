import { CardProps } from "./interface";

export const CardModule: React.FC<CardProps> = ({
  type,
  id,
  value,
  isRequired,
  subject,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        value={value}
        className="hidden peer"
        required={isRequired}
      />
      <label
        htmlFor={id}
        className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">{subject}</div>
      </label>
    </>
  );
};
