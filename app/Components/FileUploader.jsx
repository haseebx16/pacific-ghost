"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const FileUploader = ({ onUpload }) => {
  const [fileUrl, setFileUrl] = useState("");

  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset="your_upload_preset"
        options={{ sources: ["local"], resourceType: "raw" }}
        onSuccess={(result) => {
          const url = result.info.secure_url;
          setFileUrl(url);
          onUpload(url);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          >
            Upload Manuscript
          </button>
        )}
      </CldUploadWidget>

      {fileUrl && (
        <p className="text-green-600">
          Uploaded: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
        </p>
      )}
    </div>
  );
};

export default FileUploader;
