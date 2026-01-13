import React, { useState, useCallback } from 'react';
import { Modal } from './ui/modal';
import { buttonVariants } from './ui/button';

interface UploadDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadDeckModal: React.FC<UploadDeckModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const allowedExt = ['.pdf', '.ppt', '.pptx']
  const maxSizeBytes = 20 * 1024 * 1024 // 20MB

  const validateFile = (file: File) => {
    const name = file.name.toLowerCase()
    if (!allowedExt.some(ext => name.endsWith(ext))) {
      return 'Invalid file type. Please upload a PDF, PPT or PPTX file.'
    }
    if (file.size > maxSizeBytes) {
      return 'File is too large. Maximum allowed size is 20MB.'
    }
    return null
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const err = validateFile(file)
      setError(err)
      if (!err) setSelectedFile(file)
      else setSelectedFile(null)
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const err = validateFile(file)
      setError(err)
      if (!err) setSelectedFile(file)
      else setSelectedFile(null)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }, [])

  const handleUpload = async () => {
    if (!selectedFile) return;

    // final validation before upload
    const err = validateFile(selectedFile)
    if (err) {
      setError(err)
      return
    }

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
            Upload a pitch deck
          </label>
          <p className="text-xs text-gray-500 mb-2">Accepted formats: <span className="font-medium">PDF, PPT, PPTX</span>. Maximum file size: <span className="font-medium">20MB</span>.</p>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-full rounded-md border-2 ${dragActive ? 'border-indigo-400 bg-indigo-50' : 'border-dashed border-gray-300 bg-white'} p-4 text-center cursor-pointer`}
            aria-label="Drag and drop your deck here or click to select"
            onClick={() => document.getElementById('deck-file')?.click()}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 16v-4a4 4 0 014-4h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 16l-4-4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-sm text-gray-700">Drag & drop your file here, or click to browse</div>
            </div>
            <input
              id="deck-file"
              type="file"
              accept=".pdf,.ppt,.pptx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {error && (
            <div className="mt-2 text-sm text-red-600">{error}</div>
          )}

          {selectedFile && (
            <div className="mt-2 text-sm text-gray-600">Selected: {selectedFile.name}</div>
          )}
        </div>
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