// 게시판 글 업로드 시 컨텐츠 스타일 조정
// 아이콘 경로 임포트 하고
// 각각의 함수를 정의한다.
import React, { useEffect } from "react";
import "../etc/upload";
import '../css/tour.css';
import '../css/content.css';
import '../css/contentM.css';

const TextEditor = ({ content, setContent, style, imageUrl }) => {
    useEffect(() => {
      // 이미지가 존재하고, content에 이미지가 이미 포함되지 않았다면
      if (imageUrl && !content.includes('<img src="')) {
        setContent((prevContent) => prevContent + `<img src="${imageUrl}" style="width: 50%; height: auto;" />`);
      }
    }, [imageUrl, content, setContent]);
  
    const handleContentChange = (e) => {
      setContent(e.target.innerHTML); // contentEditable에서 HTML을 받아서 상태에 저장
    };
  
    return (
      <div className="content-main-left">
        {/* contentEditable을 사용하여 텍스트와 이미지를 함께 수정할 수 있게 함 */}
        <div
          contentEditable={true}
          style={{ ...style, whiteSpace: "pre-wrap" }} // 텍스트 스타일 및 줄바꿈 유지
          onInput={handleContentChange} // 내용 수정 시 content 업데이트
          dangerouslySetInnerHTML={{
            __html: content, // 텍스트와 이미지를 포함한 HTML을 렌더링
          }}
        />
      </div>
    );
  };
  
  export default TextEditor;