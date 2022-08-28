/* eslint-disable camelcase */
import { axios } from 'pages/_app';
import { useMutation } from 'react-query';

interface PostImageProps {
  files: FileList;
  user_seq: string;
  alcohol_seq: string;
}

const postImage = ({ files, user_seq, alcohol_seq }: PostImageProps) => {
  const formData = new FormData();

  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });

  return axios({
    method: 'POST',
    url: `/record/imageUpload?user_seq=${user_seq}&alchol_seq=${alcohol_seq}`,
    data: formData,
  });
};

const useImageUpload = () => useMutation(postImage);

export { useImageUpload };
