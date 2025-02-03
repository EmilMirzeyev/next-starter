import { ChangeEvent, useEffect, useRef, useState, useTransition } from "react";
import { FieldValues, useFormContext, UseFormReturn } from "react-hook-form";
import { ListFileUploadVMType } from "./listFileUpload.type";
import { uploadMediaAction } from "@/core/entities/general/actions/upload_media.action";
import { snackbar } from "../Sanckbar";

export const ListFileUploadVM = ({
  name,
  value,
  onChange,
  multiple = false,
  disabled
}: ListFileUploadVMType) => {
  const [dragging, setDragging] = useState(false);
  const methods: UseFormReturn<FieldValues, any, undefined> = useFormContext();
  const hasMethods = methods && methods.formState;
  const mainValue = hasMethods ? methods.getValues(name) : value;
  const [uploadedFile, setUploadedFile] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      startTransition(async () => {
        const res = await uploadMediaAction({ data: { files: newFiles } });
        if (res.isError) {
          snackbar("error", res.error.message);
          console.log("error", res);

        } else {
          if (name === "profile_image") {
            methods.setValue("profile_media_id", res.data.media_id);
          } else {
            const prevValues = methods.getValues('id_card_media_ids') || [];
            methods.setValue("id_card_media_ids", [...prevValues, res.data.media_id]);
          }
          snackbar("success", "Post uğurla əlavə edildi!");
          // dispatch(setUploadMedia({ media_id: res.data.media_id, name }));
        }
      });
      if (multiple) {
        setUploadedFile((prevFiles) => {
          const updatedFiles = [...prevFiles, ...newFiles];
          onChange(updatedFiles);
          return updatedFiles;
        });
      } else {
        setUploadedFile(newFiles);
        onChange(newFiles);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveFile = (file: File) => {
    const updatedFiles = uploadedFile.filter((f) => f !== file);
    console.log('updatedFiles', updatedFiles)
    setUploadedFile(updatedFiles);
    if (name === "profile_image") {
      methods.setValue("id_card_media_ids", updatedFiles)
    }
    if (typeof onChange === "function") {
      onChange(updatedFiles);
    }
  };

  const handlePreviewFile = (file: File) => {
    window.open(URL.createObjectURL(file), "_blank");
  };

  const handleDragEnter = (e: React.DragEvent) => {
    if (disabled) {
      e.preventDefault(); // Prevent any drag behavior if disabled
      return;
    }
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (disabled) {
      e.preventDefault(); // Prevent any drag behavior if disabled
      return;
    }
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    if (disabled) {
      e.preventDefault(); // Prevent any drop behavior if disabled
      return;
    }
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) {
      handleChangeFile({ target: { files: e.dataTransfer.files } } as any);
    }
  };

  useEffect(() => {
    setUploadedFile(mainValue);
  }, [mainValue]);

  const handleRef = (el: HTMLInputElement | null) => {
    fileInputRef.current = el;
    methods.register(name);
  };

  return {
    register: methods.register,
    errors: methods.formState.errors,
    uploadedFile,
    handleChangeFile,
    handleRemoveFile,
    handlePreviewFile,
    dragging,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleRef,
  };
};
