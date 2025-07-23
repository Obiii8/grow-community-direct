import * as React from "react";
import { useFormContext } from "react-hook-form";

// TODO: Replace 'unknown' with a proper type for your form context
const FormFieldContext = React.createContext<unknown>(null);
const FormItemContext = React.createContext<unknown>(null);

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as { name: string } | null;
  const itemContext = React.useContext(FormItemContext) as { id: string } | object;
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const id = (itemContext && 'id' in itemContext) ? itemContext.id : undefined;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}; 