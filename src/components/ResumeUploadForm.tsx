import React, { useState } from 'react';

const ResumeUploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      // Here you can handle the file upload
      console.log('File to upload:', selectedFile);
      // Add your upload logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-gray-800 text-2xl font-semibold mb-6">Upload Your Resume</h2>
        <div className="mb-6">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            id="resume-upload"
            className="hidden"
          />
          <label
            htmlFor="resume-upload"
            className="block p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:border-gray-400"
          >
            {fileName ? fileName : 'Choose PDF file'}
          </label>
        </div>
        <button
          type="submit"
          disabled={!selectedFile}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors duration-300 ${
            selectedFile
              ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-500 cursor-not-allowed'
          }`}
        >
          Upload Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeUploadForm; 