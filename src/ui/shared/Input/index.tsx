"use clinet";
import { InputType } from "./input.type";
import { InputVM } from "./Input.vm";
import { cn } from "@/core/utils/cn";

const Input = ({
  label,
  leading,
  trailing,
  name,
  type,
  isDebounce = false,
  mask,
  pattern,
  placeholder,
  className,
  inputClassName,
  wrapperClassName,
  onChange,
  onDebounce,
  ...props
}: InputType) => {
  const {
    reg,
    hasMethods,
    methods,
    preventScrolling,
    keyDownHandler,
    changeHandler,
    handleError,
  } = InputVM({
    name,
    type,
    mask,
    pattern,
    isDebounce,
    onDebounce,
    onChange,
  });


  return (
    <div className={cn("w-full", wrapperClassName)} >
      <div
        className={cn(
          "relative flex items-center gap-x-4 px-4 border h-14 border-solid rounded-xl",
          props?.disabled ? "bg-gray-100" : "bg-white",
          hasMethods && handleError(name)
            ? "border-red-500"
            : "border-gray-300  focus-within:border-gray-400",
          className)}
      >
        {leading}
        <div className="relative h-full flex-grow">
          <input
            aria-label={name}
            id={name}
            type={type}
            placeholder={label ? " " : placeholder}
            className={cn(
              "w-full h-full peer text-15px400 bg-transparent",
              label ? "pt-3" : "",
              inputClassName
            )}
            onKeyDown={keyDownHandler}
            onChange={changeHandler}
            {...preventScrolling}
            {...props}
            {...reg}
          />

          {label && (
            <label
              htmlFor={name}
              className="absolute text-14px400 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-4 -left-0.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2  peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:scale-75"
            >
              {label}
            </label>
          )}
        </div>
        {trailing}
      </div>
      {hasMethods && Object.values(methods.formState.errors).length ? (
        <span role="alert" className="text-error-500 text-14px400">
          {handleError(name)}
        </span>
      ) : null}
    </div >
  );
};

export default Input;
