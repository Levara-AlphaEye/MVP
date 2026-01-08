import React, { useState } from 'react';
import { Modal } from './ui/modal';
import { buttonVariants } from './ui/button';

interface UploadDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadDeckModal: React.FC<UploadDeckModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    // TODO: Implement actual upload logic here
    // For now, just simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setSelectedFile(null);
      onClose();
      alert('Deck uploaded successfully!');
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Your Deck">
      <div className="space-y-4">
        <div>
          <label htmlFor="deck-file" className="block text-sm font-medium text-gray-700 mb-2">
            Select your pitch deck file (PDF, PPT, PPTX)
          </label>
          <input
            id="deck-file"
            type="file"
            accept=".pdf,.ppt,.pptx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        {selectedFile && (
          <div className="text-sm text-gray-600">
            Selected: {selectedFile.name}
          </div>
        )}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className={buttonVariants({ variant: 'outline' })}
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className={buttonVariants({ variant: 'default' })}
          >
            {isUploading ? 'Uploading...' : 'Upload Deck'}
          </button>
        </div>
      </div>
    </Modal>
  );
};