import { Blocks } from 'react-loader-spinner';
import { LoadingWrapper } from './Loading.styled';

const Loading =() => {
  return (
    <LoadingWrapper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoadingWrapper>
  );
}

export default Loading;