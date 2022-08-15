import { ChangeEvent, LegacyRef, useEffect, useRef } from 'react';

const Album = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
    }
  };

  useEffect(() => {
    if (hiddenFileInput.current) handleClick();
  }, [hiddenFileInput]);

  return (
    <div>
      <input
        capture
        type="file"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Album;
