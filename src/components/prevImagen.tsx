import React, { useState, useRef } from 'react';

const ImagePreviewer = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="image-previewer-container">
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            <button className="upload-button" onClick={handleButtonClick}>
                Subir Imagen
            </button>
            {imageSrc && <img className="image-preview" src={imageSrc} alt="Preview" />}
        </div>
    );
};

export default ImagePreviewer;
