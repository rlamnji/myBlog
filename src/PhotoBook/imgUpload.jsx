import React, { useState, useEffect } from 'react';
import "../css/photo.css";

const ImageUploader = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    // 로컬스토리지에서 이미지를 로드하는 함수
    const loadImages = () => {
        const savedImages = JSON.parse(localStorage.getItem('images')) || [];
        setSelectedImages(savedImages);
    };

    // 페이지가 로드될 때 로컬스토리지에서 이미지를 불러옴
    useEffect(() => {
        loadImages(); // 이곳에서 loadImages 호출
    }, []); // 빈 배열을 넣어 한 번만 실행되게 설정

    // 파일 업로드 트리거 함수
    const handleFileUpload = () => {
        document.getElementById("fileInput").click();
    };

    // 파일 선택 이벤트 핸들러
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            const newImages = files.map(file => ({
                url: URL.createObjectURL(file),  // 파일 URL 생성
                name: file.name,                  // 파일 이름 저장
            }));

            // 기존 이미지 배열에 새로운 이미지를 추가
            const updatedImages = [...selectedImages, ...newImages];

            // 로컬스토리지에 업데이트된 이미지를 저장
            localStorage.setItem('images', JSON.stringify(updatedImages));

            // 상태 업데이트
            setSelectedImages(updatedImages);
        }
    };

    // 삭제 이벤트 핸들러
    const handleFileRemove = (index) => {
        const confirmDelete = window.confirm("이미지를 삭제하시겠습니까?");
        if (confirmDelete) {
            // 해당 인덱스의 이미지 삭제
            const updatedImages = selectedImages.filter((_, i) => i !== index);

            // 로컬스토리지에 업데이트된 이미지를 저장
            localStorage.setItem('images', JSON.stringify(updatedImages));

            // 상태 업데이트
            setSelectedImages(updatedImages);
        }
    };

    return (
        <div>
            {/* 클릭 시 파일 입력 창을 여는 버튼 */}
            <div
                className="app-stack-content-photo"
                onClick={handleFileUpload}
                style={{ cursor: 'pointer' }}
            >
                add
            </div>

            {/* 숨겨진 파일 입력 요소 */}
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {/* 이미지 미리보기 */}
            <div className="image-grid">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-item" onClick={() => handleFileRemove(index)}  style={{ cursor: 'pointer' }}>
                        <img
                            src={image.url}
                            alt={`Uploaded preview ${index}`}
                            className="uploaded-image"
                            style={{ width: '50%', height: 'auto' }} // 이미지 크기 조정
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;
